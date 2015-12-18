'use strict';


angular.module('adminMeeting').controller('adminMeetingController', ['$scope', '$stateParams', '$location', 'Authentication', 'Meetings',
	function($scope, $stateParams, $location, Authentication, Meetings) {
		// This provides Authentication context.
		$scope.authentication = Authentication;

		if(!$scope.authentication.user) {
			$location.path('/signin');
		}

		$scope.create = function() {
			var meeting = new Meetings({
				title: this.title,
				date: this.date,
				time: this.time,
				duration: this.duration,
				content: this.content,
				participant: this.participant

			});
			meeting.$save(function(response) {
				$scope.title = '';
				$scope.date = '';
				$scope.time = '';
				$scope.duration = '';
				$scope.content = '';
				$scope.participant = '';
				$location.path('showMeeting');
			}, function(errorResponse) {
				$scope.error = errorResponse.data.message;
			});
		};

		$scope.find = function() {
			$scope.meetings = Meetings.query();
		};

		$scope.findOne = function() {
			$scope.meeting = Meetings.get({
				meetingId: $stateParams.meetingId
			});
		};

		$scope.update = function() {
			var meeting = $scope.meeting;

			meeting.$update(function() {
				$location.path('/showMeeting');
			}, function(errorResponse) {
				$scope.error = errorResponse.data.message;
			});
		};

		$scope.delete = function(meeting) {
			if (meeting) {
				meeting.$remove();

				for (var i in $scope.meetings) {
					if ($scope.meetings[i] === meeting) {
						$scope.meetings.splice(i, 1);
					}
				}
			} else {
				$scope.meeting.$remove(function() {
					$location.path('/showMeeting');
				});
			}
		};
	}
]);
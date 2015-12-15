'use strict';


angular.module('meeting').controller('MeetingController', ['$scope', '$stateParams', '$location', 'Authentication', 'MyMeetings', 'Meetings',
	function($scope, $stateParams, $location, Authentication, MyMeetings, Meetings) {
		// This provides Authentication context.
		$scope.authentication = Authentication;

		if(!$scope.authentication.user) {
			$location.path('/signin');
		}

		$scope.find = function() {
			$scope.meetings = Meetings.query();
		};

		$scope.findMyMeeting = function() {
			$scope.meetings = MyMeetings.query();	
		};
		$scope.findOne = function() {
			$scope.meeting = Meetings.get({
				meetingId: $stateParams.meetingId
			});
		};
	}
]);
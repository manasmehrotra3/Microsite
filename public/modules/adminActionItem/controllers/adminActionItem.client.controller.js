'use strict';


angular.module('adminActionItem').controller('adminActionItemController', ['$scope', '$stateParams', '$location', 'Authentication', 'Items', 'OpenItems', 'ClosedItems',
	function($scope, $stateParams, $location, Authentication, Items, OpenItems, ClosedItems) {
		// This provides Authentication context.
		$scope.authentication = Authentication;

		if(!$scope.authentication.user) {
			$location.path('/signin');
		}

		$scope.create = function() {
			var item = new Items({
				title: this.title,
				raisedDate: this.raisedDate,
				description: this.description,
				owner: this.owner,
				status: this.status,
				expectedDate: this.expectedDate,
				closerDate: this.closerDate

			});
			item.$save(function(response) {
				$scope.title = '';
				$scope.raisedDate = '';
				$scope.description = '';
				$scope.owner = '';
				$scope.status = '';
				$scope.expectedDate = '';
				$scope.closerDate = '';
				$location.path('openActionItem');
			}, function(errorResponse) {
				$scope.error = errorResponse.data.message;
			});
		};

		$scope.find = function() {
			$scope.items = OpenItems.query();
		};

		$scope.findClosed = function() {
			$scope.items = ClosedItems.query();
		};

		$scope.findOne = function() {
			$scope.item = Items.get({
				itemId: $stateParams.actionId
			});
		};

		$scope.update = function() {
			var item = $scope.item;

			item.$update(function() {
				$location.path('/openActionItem');
			}, function(errorResponse) {
				$scope.error = errorResponse.data.message;
			});
		};

	}
]);
'use strict';


angular.module('action').controller('ActionController', ['$scope', '$stateParams', '$location', 'Authentication', 'MyItems', 'OpenItems', 'Items',
	function($scope, $stateParams, $location, Authentication, MyItems, OpenItems, Items) {
		// This provides Authentication context.
		$scope.authentication = Authentication;

		if(!$scope.authentication.user) {
			$location.path('/signin');
		}

		$scope.findMyItem = function() {
			$scope.items = MyItems.query();	
		};

		$scope.find = function() {
			$scope.items = OpenItems.query();
		};

		$scope.findOne = function() {
			$scope.item = Items.get({
				itemId: $stateParams.actionId
			});
		};
	}
]);
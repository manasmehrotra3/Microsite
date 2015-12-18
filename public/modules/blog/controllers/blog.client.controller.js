'use strict';


angular.module('blog').controller('BlogController', ['$scope', '$location', 'Authentication',
	function($scope, $location, Authentication) {
		// This provides Authentication context.
		$scope.authentication = Authentication;

		if(!$scope.authentication.user) {
			$location.path('/signin');
		}
	}
]);
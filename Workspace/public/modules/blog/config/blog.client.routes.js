'use strict';

// Setting up route
angular.module('blog').config(['$stateProvider', '$urlRouterProvider',
	function($stateProvider, $urlRouterProvider) {

		// overview state routing
		$stateProvider.
		state('blog', {
			url: '/blog',
			templateUrl: 'modules/blog/views/blog.client.home.html'
		});
	}
]);
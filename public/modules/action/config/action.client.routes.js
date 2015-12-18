'use strict';

// Setting up route
angular.module('action').config(['$stateProvider', '$urlRouterProvider',
	function($stateProvider, $urlRouterProvider) {

		// overview state routing
		$stateProvider.
		state('action', {
			url: '/action',
			templateUrl: 'modules/action/views/action.client.home.html'
		}).
		state('actionAll', {
			url: '/action/all',
			templateUrl: 'modules/action/views/action.client.all.html'
		}).
		state('viewActiom', {
			url: '/action/:actionId',
			templateUrl: 'modules/action/views/view-action.client.home.html'
		});
	}
]);
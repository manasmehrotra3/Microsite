'use strict';

// Setting up route
angular.module('adminActionItem').config(['$stateProvider', '$urlRouterProvider',
	function($stateProvider, $urlRouterProvider) {

		// overview state routing
		$stateProvider.
		state('newActionItem', {
			url: '/newActionItem',
			templateUrl: 'modules/adminActionItem/views/adminActionItem.client.home.html'
		}).
		state('openActionItem', {
			url: '/openActionItem',
			templateUrl: 'modules/adminActionItem/views/adminActionItem.client.open.html'
		}).
		state('closedActionItem', {
			url: '/closedActionItem',
			templateUrl: 'modules/adminActionItem/views/adminActionItem.client.closed.html'
		}).
		state('viewActionItem', {
			url: '/viewActionItem/:actionId',
			templateUrl: 'modules/adminActionItem/views/view-adminActionItem.client.home.html'
		});
	}
]);
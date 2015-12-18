'use strict';

// Setting up route
angular.module('meeting').config(['$stateProvider', '$urlRouterProvider',
	function($stateProvider, $urlRouterProvider) {

		// overview state routing
		$stateProvider.
		state('meeting', {
			url: '/meeting',
			templateUrl: 'modules/meeting/views/meeting.client.home.html'
		}).
		state('meetingAll', {
			url: '/meeting/all',
			templateUrl: 'modules/meeting/views/meeting.client.all.html'
		}).
		state('viewMeeting', {
			url: '/meeting/:meetingId',
			templateUrl: 'modules/meeting/views/view-meeting.client.home.html'
		});
	}
]);
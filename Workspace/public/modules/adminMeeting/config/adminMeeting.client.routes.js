'use strict';

// Setting up route
angular.module('adminMeeting').config(['$stateProvider', '$urlRouterProvider',
	function($stateProvider, $urlRouterProvider) {

		// overview state routing
		$stateProvider.
		state('newMeeting', {
			url: '/newMeeting',
			templateUrl: 'modules/adminMeeting/views/adminMeeting.client.home.html'
		}).
		state('showMeeting', {
			url: '/showMeeting',
			templateUrl: 'modules/adminMeeting/views/adminMeeting.client.show.html'
		}).
		state('viewAdminMeeting', {
			url: '/viewMeeting/:meetingId',
			templateUrl: 'modules/adminMeeting/views/view-adminMeeting.client.home.html'
		});
	}
]);
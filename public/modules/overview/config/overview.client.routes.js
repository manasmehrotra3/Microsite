'use strict';

// Setting up route
angular.module('overview').config(['$stateProvider', '$urlRouterProvider',
	function($stateProvider, $urlRouterProvider) {

		// overview state routing
		$stateProvider.
		state('overview', {
			url: '/overview',
			templateUrl: 'modules/overview/views/overview.client.home.html'
		}).
		state('overviewMembers', {
			url: '/overview/members',
			templateUrl: 'modules/overview/views/overview.client.members.html'
		}).
		state('overviewServices', {
			url: '/overview/services',
			templateUrl: 'modules/overview/views/overview.client.services.html'
		}).
		state('overviewNewsletter', {
			url: '/overview/newsletter',
			templateUrl: 'modules/overview/views/overview.client.newsletter.html'
		}).
		state('overviewFAQ', {
			url: '/overview/FAQ',
			templateUrl: 'modules/overview/views/overview.client.faq.html'
		}).
		state('overviewSiteMao', {
			url: '/overview/siteMap',
			templateUrl: 'modules/overview/views/overview.client.sitemap.html'
		});
	}
]);
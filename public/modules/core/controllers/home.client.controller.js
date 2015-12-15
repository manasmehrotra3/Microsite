'use strict';


angular.module('core').controller('HomeController', ['$scope', '$location', 'Authentication',
	function($scope, $location, Authentication) {
		// This provides Authentication context.
		$scope.authentication = Authentication;

		if(!$scope.authentication.user) {
			$location.path('/signin');
		}

		$scope.overview = function() {
			$location.path('/overview');
		};

		$scope.meeting = function() {
			$location.path('/meeting');
		};

		$scope.action = function() {
			$location.path('/action');
		};

		$scope.blog = function() {
			$location.path('/blog');
		};

		$scope.manageMeeting = function() {
			$location.path('/newMeeting');
		};

		$scope.manageActionItem = function() {
			$location.path('/newActionItem');
		};

		$scope.myInterval = 3000;
		$scope.slides = [
		    {
		      image: 'modules/core/img/images/home/Overview.jpg',
		      text: 'first slide'
		    },
		    {
		      image: 'modules/core/img/images/home/Digital.jpg',
		      text: 'second slide'
		    },
		    {
		      image: 'modules/core/img/images/home/Innovation.jpg',
		      text: 'third slide'
		    },
		    {
		      image: 'modules/core/img/images/home/App%20Services.jpg',
		      text: 'fourth slide'
		    },
		    {
		      image: 'modules/core/img/images/home/App%20Services.jpg',
		      text: 'fifth slide'
		    },
		    {
		      image: 'modules/core/img/images/home/App%20Services.jpg',
		      text: 'sixth slide'
		    },
		    {
		      image: 'modules/core/img/images/home/Delivery%20Methods.jpg',
		      text: 'seventh slide'
		    }
		];
	}
]);
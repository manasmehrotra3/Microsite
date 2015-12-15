'use strict';

angular.module('action').factory('MyItems', ['$resource',
	function($resource) {
		return $resource('myitems', {
			ideaId: '@_id'
		}, {
			update: {
				method: 'PUT'
			}
		});
	}
]);

angular.module('action').factory('OpenItems', ['$resource',
	function($resource) {
		return $resource('openitems', {
			itemId: '@_id'
		}, {
			update: {
				method: 'PUT'
			}
		});
	}
]);

angular.module('action').factory('Items', ['$resource',
	function($resource) {
		return $resource('items/:itemId', {
			itemId: '@_id'
		}, {
			update: {
				method: 'PUT'
			}
		});
	}
]);

'use strict';

angular.module('adminActionItem').factory('Items', ['$resource',
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

angular.module('adminActionItem').factory('OpenItems', ['$resource',
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

angular.module('adminActionItem').factory('ClosedItems', ['$resource',
	function($resource) {
		return $resource('closeitems', {
			itemId: '@_id'
		}, {
			update: {
				method: 'PUT'
			}
		});
	}
]);
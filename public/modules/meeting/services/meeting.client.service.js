'use strict';

angular.module('meeting').factory('MyMeetings', ['$resource',
	function($resource) {
		return $resource('mymeetings', {
			ideaId: '@_id'
		}, {
			update: {
				method: 'PUT'
			}
		});
	}
]);

angular.module('meeting').factory('Meetings', ['$resource',
	function($resource) {
		return $resource('meetings/:meetingId', {
			meetingId: '@_id'
		}, {
			update: {
				method: 'PUT'
			}
		});
	}
]);


'use strict';

angular.module('adminMeeting').factory('Meetings', ['$resource',
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


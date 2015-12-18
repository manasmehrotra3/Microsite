'use strict';

/**
 * Module dependencies.
 */
var users = require('../../app/controllers/users.server.controller'),
	meetings = require('../../app/controllers/meetings.server.controller');

module.exports = function(app) {
	// Idea Routes
	app.route('/meetings')
		.get(users.requiresLogin, meetings.list)
		.post(users.requiresLogin, meetings.create);

	app.route('/pending')
		.get(users.requiresLogin, meetings.pendinglist)
		.post(users.requiresLogin, meetings.pendingcreate);

	app.route('/mymeetings')
		.get(users.requiresLogin, meetings.readmymeetings);

	app.route('/meetings/:meetingId')
		.get(users.requiresLogin, meetings.read)
		.put(users.requiresLogin, meetings.update)
		.delete(users.requiresLogin, meetings.hasAuthorization, meetings.delete);
		
	// Finish by binding the idea middleware
	app.param('meetingId', meetings.meetingByID);
};
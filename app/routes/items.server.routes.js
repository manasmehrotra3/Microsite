'use strict';

/**
 * Module dependencies.
 */
var users = require('../../app/controllers/users.server.controller'),
	items = require('../../app/controllers/items.server.controller');

module.exports = function(app) {
	// Idea Routes
	app.route('/items')
		.get(users.requiresLogin, items.list)
		.post(users.requiresLogin, items.create);

	app.route('/pending')
		.get(users.requiresLogin, items.pendinglist)
		.post(users.requiresLogin, items.pendingcreate);

	app.route('/openitems')
		.get(users.requiresLogin, items.openitems);

	app.route('/closeitems')
		.get(users.requiresLogin, items.closeitems);

	app.route('/myitems')
		.get(users.requiresLogin, items.readmyitems);

	app.route('/items/:itemId')
		.get(users.requiresLogin, items.read)
		.put(users.requiresLogin, items.update)
		.delete(users.requiresLogin, items.hasAuthorization, items.delete);
		
	// Finish by binding the idea middleware
	app.param('itemId', items.itemByID);
};
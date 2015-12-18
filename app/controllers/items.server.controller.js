'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
	errorHandler = require('./errors.server.controller'),
	Item = mongoose.model('Item'),
	_ = require('lodash');

/**
 * Create a item
 */
exports.create = function(req, res) {
	var item = new Item(req.body);
	item.user = req.user;

	item.save(function(err) {
		if (err) {
			return res.status(400).send({
				message: errorHandler.getErrorMessage(err)
			});
		} else {
			res.json(item);
		}
	});
};

exports.pendingcreate = function(req, res) {
	var item = new Item(req.body);
	item.user = req.user;
	item.status = 'approved';

	item.save(function(err) {
		if (err) {
			return res.status(400).send({
				message: errorHandler.getErrorMessage(err)
			});
		} else {
			res.json(item);
		}
	});
};

/**
 * Show the current item
 */
exports.read = function(req, res) {
	res.json(req.item);
};

/**
 * Update a item
 */
exports.update = function(req, res) {
	var item = req.item;

	item = _.extend(item, req.body);

	item.save(function(err) {
		if (err) {
			return res.status(400).send({
				message: errorHandler.getErrorMessage(err)
			});
		} else {
			res.json(item);
		}
	});
};

/**
 * Delete an item
 */
exports.delete = function(req, res) {
	var item = req.item;

	item.remove(function(err) {
		if (err) {
			return res.status(400).send({
				message: errorHandler.getErrorMessage(err)
			});
		} else {
			res.json(item);
		}
	});
};

exports.openitems = function(req, res) {
	Item.find({'status':'open'}).sort('-created').populate('user', 'displayName').exec(function(err, items) {
		if (err) {
			return res.status(400).send({
				message: errorHandler.getErrorMessage(err)
			});
		} else {
			res.json(items);
		}
	});
};

exports.closeitems = function(req, res) {
	Item.find({'status':'closed'}).sort('-created').populate('user', 'displayName').exec(function(err, items) {
		if (err) {
			return res.status(400).send({
				message: errorHandler.getErrorMessage(err)
			});
		} else {
			res.json(items);
		}
	});
};

exports.readmyitems = function(req, res) {
	Item.find({'owner': req.user.username, 'status': 'open'}).sort('-created').populate('user', 'displayName').exec(function(err, items) {
		if (err) {
			return res.status(400).send({
				message: errorHandler.getErrorMessage(err)
			});
		} else {
			res.json(items);
		}
	});
};

/**
 * List of items
 */
exports.list = function(req, res) {
	Item.find().sort('-created').populate('user', 'displayName').exec(function(err, items) {
		if (err) {
			return res.status(400).send({
				message: errorHandler.getErrorMessage(err)
			});
		} else {
			res.json(items);
		}
	});
};

exports.pendinglist = function(req, res) {
	Item.find({'status': 'pending'}).sort('-created').populate('user', 'displayName').exec(function(err, items) {
		if (err) {
			return res.status(400).send({
				message: errorHandler.getErrorMessage(err)
			});
		} else {
			res.json(items);
		}
	});
};

/**
 * item middleware
 */
exports.itemByID = function(req, res, next, id) {
	Item.findById(id).populate('user', 'displayName').exec(function(err, item) {
		if (err) return next(err);
		if (!item) return next(new Error('Failed to load item ' + id));
		req.item = item;
		next();
	});
};

/**
 * item authorization middleware
 */
exports.hasAuthorization = function(req, res, next) {
	if (req.item.user.id !== req.user.id && req.user.roles.indexOf('admin')===-1) {
		return res.status(403).send({
			message: 'User is not authorized'
		});
	}
	next();
};
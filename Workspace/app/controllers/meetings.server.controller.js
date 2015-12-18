'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
	errorHandler = require('./errors.server.controller'),
	Meeting = mongoose.model('Meeting'),
	_ = require('lodash');

/**
 * Create a meeting
 */
exports.create = function(req, res) {
	var meeting = new Meeting(req.body);
	meeting.user = req.user;
	meeting.participant = req.body.participant.split(',');

	meeting.save(function(err) {
		if (err) {
			return res.status(400).send({
				message: errorHandler.getErrorMessage(err)
			});
		} else {
			res.json(meeting);
		}
	});
};

exports.pendingcreate = function(req, res) {
	var meeting = new Meeting(req.body);
	meeting.user = req.user;
	meeting.status = 'approved';

	meeting.save(function(err) {
		if (err) {
			return res.status(400).send({
				message: errorHandler.getErrorMessage(err)
			});
		} else {
			res.json(meeting);
		}
	});
};

/**
 * Show the current meeting
 */
exports.read = function(req, res) {
	res.json(req.meeting);
};

/**
 * Update a meeting
 */
exports.update = function(req, res) {
	var meeting = req.meeting;

	meeting = _.extend(meeting, req.body);

	meeting.save(function(err) {
		if (err) {
			return res.status(400).send({
				message: errorHandler.getErrorMessage(err)
			});
		} else {
			res.json(meeting);
		}
	});
};

/**
 * Delete an meeting
 */
exports.delete = function(req, res) {
	var meeting = req.meeting;

	meeting.remove(function(err) {
		if (err) {
			return res.status(400).send({
				message: errorHandler.getErrorMessage(err)
			});
		} else {
			res.json(meeting);
		}
	});
};

exports.readmymeetings = function(req, res) {
	Meeting.find({'participant' : {'$in' : [req.user.username]}}).sort('-created').populate('user', 'displayName').exec(function(err, meetings) {
		if (err) {
			return res.status(400).send({
				message: errorHandler.getErrorMessage(err)
			});
		} else {
			res.json(meetings);
		}
	});
};

/**
 * List of meetings
 */
exports.list = function(req, res) {
	Meeting.find().sort('-created').populate('user', 'displayName').exec(function(err, meetings) {
		if (err) {
			return res.status(400).send({
				message: errorHandler.getErrorMessage(err)
			});
		} else {
			res.json(meetings);
		}
	});
};

exports.pendinglist = function(req, res) {
	Meeting.find({'status': 'pending'}).sort('-created').populate('user', 'displayName').exec(function(err, meetings) {
		if (err) {
			return res.status(400).send({
				message: errorHandler.getErrorMessage(err)
			});
		} else {
			res.json(meetings);
		}
	});
};

/**
 * meeting middleware
 */
exports.meetingByID = function(req, res, next, id) {
	Meeting.findById(id).populate('user', 'displayName').exec(function(err, meeting) {
		if (err) return next(err);
		if (!meeting) return next(new Error('Failed to load meeting ' + id));
		req.meeting = meeting;
		next();
	});
};

/**
 * meeting authorization middleware
 */
exports.hasAuthorization = function(req, res, next) {
	if (req.meeting.user.id !== req.user.id && req.user.roles.indexOf('admin')===-1) {
		return res.status(403).send({
			message: 'User is not authorized'
		});
	}
	next();
};
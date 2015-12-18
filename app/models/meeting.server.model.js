'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

/**
 * Idea Schema
 */
var MeetingSchema = new Schema({
	created: {
		type: Date,
		default: Date.now
	},
	title: {
		type: String,
		default: '',
		trim: true,
		required: 'Title cannot be blank'
	},
	content: {
		type: String,
		default: '',
		trim: true
	},
	date: {
		type: String,
		default: '',
		trim: true
	},
	time: {
		type: String,
		default: '',
		trim: true
	},
	duration: {
		type: String,
		default: '',
		trim: true
	},
	user: {
		type: Schema.ObjectId,
		ref: 'User'
	},
	participant: {
		type: [{
			type: String,
			enum: []
		}],
		default: []
	}
});

mongoose.model('Meeting', MeetingSchema);
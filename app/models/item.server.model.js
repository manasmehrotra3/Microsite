'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

/**
 * Idea Schema
 */
var ItemSchema = new Schema({
	raisedDate: {
		type: String,
		default: '',
		trim: true
	},
	title: {
		type: String,
		default: '',
		trim: true,
		required: 'Title cannot be blank'
	},
	description: {
		type: String,
		default: '',
		trim: true
	},
	owner: {
		type: String,
		default: '',
		trim: true
	},
	status: {
		type: String,
		default: '',
		trim: true
	},
	expectedDate: {
		type: String,
		default: '',
		trim: true
	},
	closerDate: {
		type: String,
		default: '',
		trim: true
	},
	volunteer: {
		type: [{
			type: String,
			enum: []
		}],
		default: []
	}
});

mongoose.model('Item', ItemSchema);
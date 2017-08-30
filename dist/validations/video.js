"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.deleteVideoById = exports.updateVideoById = exports.getVideoById = exports.createVideo = undefined;

var _util = require("../helpers/util");

/*
 * Middleware validate video object
 */
var createVideo = exports.createVideo = function createVideo(req, res, next) {
	var videoObj = req.body || null;

	var errorMsg = _isValidVideoObject(videoObj);
	if (errorMsg) {
		var result = {};
		result.status = "error";
		result.message = errorMsg;
		return res.status(400).json(result);
	}

	return next();
};

/*
 * Middleware validate video object id
 */
var getVideoById = exports.getVideoById = function getVideoById(req, res, next) {
	var id = req.params.id;

	var errorMsg = _isValidateId(id);
	if (errorMsg) {
		var result = {};
		result.status = "error";
		result.message = errorMsg;
		return res.status(400).json(result);
	}

	return next();
};

/*
 * Middleware validate video object id
 * validate video object 
 */
var updateVideoById = exports.updateVideoById = function updateVideoById(req, res, next) {
	var id = req.params.id;
	var videoObj = req.body || null;

	var errorMsg = _isValidateId(id);
	if (errorMsg) {
		var result = {};
		result.status = "error";
		result.message = errorMsg;
		return res.status(400).json(result);
	}

	errorMsg = _isValidVideoObject(videoObj);
	if (errorMsg) {
		var _result = {};
		_result.status = "error";
		_result.message = errorMsg;
		return res.status(400).json(_result);
	}

	return next();
};

/*
 * Middleware validate video object id
 */
var deleteVideoById = exports.deleteVideoById = function deleteVideoById(req, res, next) {
	var id = req.params.id;

	var errorMsg = _isValidateId(id);
	if (errorMsg) {
		var result = {};
		result.status = "error";
		result.message = errorMsg;
		return res.status(400).json(result);
	}

	return next();
};

//Private helper functions

/*
 * Validate video object fields
 */
var _isValidVideoObject = function _isValidVideoObject(videoObj) {

	if (!(0, _util.isJsonObject)(videoObj)) {
		return "invalid video object";
	}

	if (!videoObj.name) {
		return "name is required";
	}

	if (!videoObj.keywords) {
		return "keywords is required";
	}

	if (!(0, _util.isArray)(videoObj.keywords)) {
		return "keywords should be array";
	}

	if (videoObj.keywords.length === 0) {
		return "keywords should have atleast one keyword";
	}

	return null;
};

/*
 * Validate mongo object id
 */
var _isValidateId = function _isValidateId(id) {

	if (!id) {
		return "id is required";
	}

	if (!(0, _util.isMongoObjectIdValid)(id)) {
		return "invalid id";
	}

	return null;
};
//# sourceMappingURL=video.js.map
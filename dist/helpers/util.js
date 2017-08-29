"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.isMongoObjectIdValid = exports.isArray = exports.isJsonObject = exports.isJsonParsable = undefined;

var _mongoose = require("mongoose");

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
 * Checks is json parsable or not
 */
var isJsonParsable = exports.isJsonParsable = function isJsonParsable(json) {

	try {
		JSON.parse(json);
	} catch (e) {
		return false;
	}

	return true;
};

/*
 * Checks is json or not
 */
var isJsonObject = exports.isJsonObject = function isJsonObject(json) {

	if (!json || Object.prototype.toString.call(json) !== "[object Object]") {
		return false;
	}

	return true;
};

/*
 * Checks is array or not
 */
var isArray = exports.isArray = function isArray(list) {

	if (!list || Object.prototype.toString.call(list) !== "[object Array]") {
		return false;
	}

	return true;
};

/*
 * Checks is mongo object id or not
 */
var isMongoObjectIdValid = exports.isMongoObjectIdValid = function isMongoObjectIdValid(id) {

	var ObjectId = _mongoose2.default.Types.ObjectId;

	if (!id || !ObjectId.isValid(id)) {
		return false;
	}

	return true;
};
//# sourceMappingURL=util.js.map
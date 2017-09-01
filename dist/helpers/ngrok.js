"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.getPublicUrl = undefined;

var _ngrok = require("ngrok");

var _ngrok2 = _interopRequireDefault(_ngrok);

var _keys = require("../config/keys");

var _keys2 = _interopRequireDefault(_keys);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var publicUrl = null;

/*
 * Get public Url
 */
var getPublicUrl = exports.getPublicUrl = function getPublicUrl() {
	return new Promise(function (resolve, reject) {

		if (publicUrl) {
			return resolve(publicUrl);
		}

		_ngrok2.default.connect(_keys2.default.NODE_PORT, function (err, url) {
			if (err) {
				return reject("Unable to get the public Url");
			}

			publicUrl = url;
			resolve(publicUrl);
		});
	});
};
//# sourceMappingURL=ngrok.js.map
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
var isJsonParsable = exports.isJsonParsable = function isJsonParsable(json) {

	try {
		JSON.parse(json);
	} catch (e) {
		return false;
	}

	return true;
};
//# sourceMappingURL=util.js.map
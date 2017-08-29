"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
var createVideo = exports.createVideo = function createVideo(req, res, next) {
	var adminObj = req.body || null;

	if (!adminObj) {
		return false;
	}

	return next();
};
//# sourceMappingURL=video.js.map
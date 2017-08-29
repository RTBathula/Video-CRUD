"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _express = require("express");

var _express2 = _interopRequireDefault(_express);

var _video = require("../validations/video");

var validate = _interopRequireWildcard(_video);

var _video2 = require("../services/video");

var videoService = _interopRequireWildcard(_video2);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

/*
 * Create video object
 */


//Services
router.post("/", validate.createVideo, function (req, res) {

	var videoObj = req.body;

	videoService.createVideo(videoObj.name, videoObj.keywords).then(function (result) {
		return res.status(200).json(result);
	}, function (error) {
		return res.status(400).json(error);
	});
});

exports.default = router;
//# sourceMappingURL=video.js.map
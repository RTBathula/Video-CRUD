"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.deleteVideoById = exports.updateVideoById = exports.getVideoList = exports.getVideoById = exports.createVideo = undefined;

var _video = require("../models/video");

var _video2 = _interopRequireDefault(_video);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @ Create video
 */
var createVideo = exports.createVideo = function createVideo(name, keywords) {

	var video = new _video2.default();
	video.createdDate = new Date();
	video.name = name;
	video.keywords = keywords;

	return new Promise(function (resolve, reject) {
		video.save(function (err, reply) {
			if (err) {
				return reject(err);
			}

			resolve(reply);
		});
	});
};

/**
 * @ Get video by id
 */
var getVideoById = exports.getVideoById = function getVideoById(id) {
	return new Promise(function (resolve, reject) {
		_video2.default.findOne({ _id: id }, function (err, video) {
			if (err) {
				return reject(err);
			}

			if (!video) {
				return reject("Unable to find video object with given id");
			}

			resolve(video);
		});
	});
};

/**
 * @ Get video list
 */
var getVideoList = exports.getVideoList = function getVideoList() {
	return new Promise(function (resolve, reject) {
		_video2.default.find({}).exec(function (err, list) {
			if (err) {
				return reject(err);
			}

			resolve(list);
		});
	});
};

/**
 * @ Update video object by id
 */
var updateVideoById = exports.updateVideoById = function updateVideoById(id, videoObj) {
	return new Promise(function (resolve, reject) {

		var newVideoObj = {
			name: videoObj.name,
			keywords: videoObj.keywords
		};

		_video2.default.findOneAndUpdate({ _id: id }, newVideoObj, { new: true }, function (err, newDoc) {
			if (err) {
				return reject(err);
			}

			resolve(newDoc);
		});
	});
};

/**
 * @ Delete video object by id
 */
var deleteVideoById = exports.deleteVideoById = function deleteVideoById(id) {
	return new Promise(function (resolve, reject) {
		_video2.default.deleteOne({ _id: id }, function (err, resp) {
			if (err) {
				return reject(err);
			}

			console.log(err);

			resolve("success");
		});
	});
};
//# sourceMappingURL=video.js.map
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _regenerator = require("babel-runtime/regenerator");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require("babel-runtime/helpers/asyncToGenerator");

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

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
router.post("/", validate.createVideo, function () {
	var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(req, res) {
		var videoObj, result, savedObj;
		return _regenerator2.default.wrap(function _callee$(_context) {
			while (1) {
				switch (_context.prev = _context.next) {
					case 0:
						videoObj = req.body;
						result = {};
						_context.prev = 2;
						_context.next = 5;
						return videoService.createVideo(videoObj.name, videoObj.keywords);

					case 5:
						savedObj = _context.sent;


						result.status = "success";
						result.message = "Successfully created";
						result.data = savedObj;
						return _context.abrupt("return", res.status(201).json(result));

					case 12:
						_context.prev = 12;
						_context.t0 = _context["catch"](2);

						result.status = "error";
						result.message = _context.t0.message || "unable to create. please check video object";
						return _context.abrupt("return", res.status(400).json(result));

					case 17:
					case "end":
						return _context.stop();
				}
			}
		}, _callee, undefined, [[2, 12]]);
	}));

	return function (_x, _x2) {
		return _ref.apply(this, arguments);
	};
}());

/*
 * Get video object by id
 */
router.get("/:id", validate.getVideoById, function () {
	var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(req, res) {
		var id, result, videoObj;
		return _regenerator2.default.wrap(function _callee2$(_context2) {
			while (1) {
				switch (_context2.prev = _context2.next) {
					case 0:
						id = req.params.id;
						result = {};
						_context2.prev = 2;
						_context2.next = 5;
						return videoService.getVideoById(id);

					case 5:
						videoObj = _context2.sent;


						result.status = "success";
						result.message = "Successfully fetched";
						result.data = videoObj;
						return _context2.abrupt("return", res.status(200).json(result));

					case 12:
						_context2.prev = 12;
						_context2.t0 = _context2["catch"](2);

						result.status = "error";
						result.message = "unable to get video by given id";
						return _context2.abrupt("return", res.status(400).send(result));

					case 17:
					case "end":
						return _context2.stop();
				}
			}
		}, _callee2, undefined, [[2, 12]]);
	}));

	return function (_x3, _x4) {
		return _ref2.apply(this, arguments);
	};
}());

/*
 * Get video list
 */
router.get("/", function () {
	var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3(req, res) {
		var result, list;
		return _regenerator2.default.wrap(function _callee3$(_context3) {
			while (1) {
				switch (_context3.prev = _context3.next) {
					case 0:
						result = {};
						_context3.prev = 1;
						_context3.next = 4;
						return videoService.getVideoList();

					case 4:
						list = _context3.sent;


						result.status = "success";
						result.message = "Successfully fetched video list";
						result.data = list;
						return _context3.abrupt("return", res.status(200).json(result));

					case 11:
						_context3.prev = 11;
						_context3.t0 = _context3["catch"](1);

						result.status = "error";
						result.message = "unable to fetch video list";
						return _context3.abrupt("return", res.status(400).send(result));

					case 16:
					case "end":
						return _context3.stop();
				}
			}
		}, _callee3, undefined, [[1, 11]]);
	}));

	return function (_x5, _x6) {
		return _ref3.apply(this, arguments);
	};
}());

/*
 * Update video object by id
 */
router.put("/:id", validate.updateVideoById, function () {
	var _ref4 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee4(req, res) {
		var id, videoObj, result;
		return _regenerator2.default.wrap(function _callee4$(_context4) {
			while (1) {
				switch (_context4.prev = _context4.next) {
					case 0:
						id = req.params.id;
						videoObj = req.body;
						result = {};
						_context4.prev = 3;
						_context4.next = 6;
						return videoService.updateVideoById(id, videoObj);

					case 6:

						result.status = "success";
						result.message = "Successfully updated";
						return _context4.abrupt("return", res.status(200).json(result));

					case 11:
						_context4.prev = 11;
						_context4.t0 = _context4["catch"](3);

						result.status = "error";
						result.message = "unable to update video object";
						return _context4.abrupt("return", res.status(400).send(result));

					case 16:
					case "end":
						return _context4.stop();
				}
			}
		}, _callee4, undefined, [[3, 11]]);
	}));

	return function (_x7, _x8) {
		return _ref4.apply(this, arguments);
	};
}());

/*
 * Delete video object by id
 */
router.delete("/:id", validate.deleteVideoById, function () {
	var _ref5 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee5(req, res) {
		var id, result;
		return _regenerator2.default.wrap(function _callee5$(_context5) {
			while (1) {
				switch (_context5.prev = _context5.next) {
					case 0:
						id = req.params.id;
						result = {};
						_context5.prev = 2;
						_context5.next = 5;
						return videoService.deleteVideoById(id);

					case 5:

						result.status = "success";
						result.message = "Successfully deleted";
						return _context5.abrupt("return", res.status(200).json(result));

					case 10:
						_context5.prev = 10;
						_context5.t0 = _context5["catch"](2);

						result.status = "error";
						result.message = "unable to delete video object with given id";
						return _context5.abrupt("return", res.status(400).send(result));

					case 15:
					case "end":
						return _context5.stop();
				}
			}
		}, _callee5, undefined, [[2, 10]]);
	}));

	return function (_x9, _x10) {
		return _ref5.apply(this, arguments);
	};
}());

exports.default = router;
//# sourceMappingURL=video.js.map
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
		var videoObj, result;
		return _regenerator2.default.wrap(function _callee$(_context) {
			while (1) {
				switch (_context.prev = _context.next) {
					case 0:
						videoObj = req.body;
						_context.prev = 1;
						_context.next = 4;
						return videoService.createVideo(videoObj.name, videoObj.keywords);

					case 4:
						result = _context.sent;
						return _context.abrupt("return", res.status(201).json(result));

					case 8:
						_context.prev = 8;
						_context.t0 = _context["catch"](1);
						return _context.abrupt("return", res.status(400).send(_context.t0));

					case 11:
					case "end":
						return _context.stop();
				}
			}
		}, _callee, undefined, [[1, 8]]);
	}));

	return function (_x, _x2) {
		return _ref.apply(this, arguments);
	};
}());

/*
 * Get video object by id
 */
router.get("/:id", validate.getVideo, function () {
	var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(req, res) {
		var id, result;
		return _regenerator2.default.wrap(function _callee2$(_context2) {
			while (1) {
				switch (_context2.prev = _context2.next) {
					case 0:
						id = req.params.id;
						_context2.prev = 1;
						_context2.next = 4;
						return videoService.getVideo(id);

					case 4:
						result = _context2.sent;
						return _context2.abrupt("return", res.status(200).json(result));

					case 8:
						_context2.prev = 8;
						_context2.t0 = _context2["catch"](1);
						return _context2.abrupt("return", res.status(400).send(_context2.t0));

					case 11:
					case "end":
						return _context2.stop();
				}
			}
		}, _callee2, undefined, [[1, 8]]);
	}));

	return function (_x3, _x4) {
		return _ref2.apply(this, arguments);
	};
}());

/*
 * Get video object by id
 */
router.get("/", validate.getVideo, function () {
	var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3(req, res) {
		var id, result;
		return _regenerator2.default.wrap(function _callee3$(_context3) {
			while (1) {
				switch (_context3.prev = _context3.next) {
					case 0:
						id = req.params.id;
						_context3.prev = 1;
						_context3.next = 4;
						return videoService.getVideo(id);

					case 4:
						result = _context3.sent;
						return _context3.abrupt("return", res.status(200).json(result));

					case 8:
						_context3.prev = 8;
						_context3.t0 = _context3["catch"](1);
						return _context3.abrupt("return", res.status(400).send(_context3.t0));

					case 11:
					case "end":
						return _context3.stop();
				}
			}
		}, _callee3, undefined, [[1, 8]]);
	}));

	return function (_x5, _x6) {
		return _ref3.apply(this, arguments);
	};
}());

/*
 * Get video object by id
 */
router.put("/:id", validate.getVideo, function () {
	var _ref4 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee4(req, res) {
		var id, result;
		return _regenerator2.default.wrap(function _callee4$(_context4) {
			while (1) {
				switch (_context4.prev = _context4.next) {
					case 0:
						id = req.params.id;
						_context4.prev = 1;
						_context4.next = 4;
						return videoService.getVideo(id);

					case 4:
						result = _context4.sent;
						return _context4.abrupt("return", res.status(200).json(result));

					case 8:
						_context4.prev = 8;
						_context4.t0 = _context4["catch"](1);
						return _context4.abrupt("return", res.status(400).send(_context4.t0));

					case 11:
					case "end":
						return _context4.stop();
				}
			}
		}, _callee4, undefined, [[1, 8]]);
	}));

	return function (_x7, _x8) {
		return _ref4.apply(this, arguments);
	};
}());

/*
 * Get video object by id
 */
router.delete("/:id", validate.getVideo, function () {
	var _ref5 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee5(req, res) {
		var id, result;
		return _regenerator2.default.wrap(function _callee5$(_context5) {
			while (1) {
				switch (_context5.prev = _context5.next) {
					case 0:
						id = req.params.id;
						_context5.prev = 1;
						_context5.next = 4;
						return videoService.getVideo(id);

					case 4:
						result = _context5.sent;
						return _context5.abrupt("return", res.status(200).json(result));

					case 8:
						_context5.prev = 8;
						_context5.t0 = _context5["catch"](1);
						return _context5.abrupt("return", res.status(400).send(_context5.t0));

					case 11:
					case "end":
						return _context5.stop();
				}
			}
		}, _callee5, undefined, [[1, 8]]);
	}));

	return function (_x9, _x10) {
		return _ref5.apply(this, arguments);
	};
}());

exports.default = router;
//# sourceMappingURL=video.js.map
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.createVideo = undefined;

var _regenerator = require("babel-runtime/regenerator");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require("babel-runtime/helpers/asyncToGenerator");

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _video = require("../models/video");

var _video2 = _interopRequireDefault(_video);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @ Create video
 */
var createVideo = exports.createVideo = function () {
	var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(name, keywords) {
		var video;
		return _regenerator2.default.wrap(function _callee$(_context) {
			while (1) {
				switch (_context.prev = _context.next) {
					case 0:
						video = new _video2.default();

						video.createdDate = new Date();
						video.name = name;
						video.keywords = keywords;

						return _context.abrupt("return", new Promise(function (resolve, reject) {
							video.save(function (err, reply) {
								if (err) {
									return reject(err);
								}

								resolve(reply);
							});
						}));

					case 5:
					case "end":
						return _context.stop();
				}
			}
		}, _callee, undefined);
	}));

	return function createVideo(_x, _x2) {
		return _ref.apply(this, arguments);
	};
}();
//# sourceMappingURL=video.js.map
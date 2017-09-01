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

var _request = require("request");

var _request2 = _interopRequireDefault(_request);

var _ngrok = require("../helpers/ngrok");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

/*
 * Get sdk by given language
 * @param lang
 * @return zipped sdk
 */
router.get("/:lang", function () {
	var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(req, res) {
		var lang, publicUrl;
		return _regenerator2.default.wrap(function _callee$(_context) {
			while (1) {
				switch (_context.prev = _context.next) {
					case 0:
						lang = req.params.lang;
						_context.prev = 1;
						_context.next = 4;
						return (0, _ngrok.getPublicUrl)();

					case 4:
						publicUrl = _context.sent;


						(0, _request2.default)({
							method: "POST",
							url: "http://generator.swagger.io/api/gen/clients/" + lang,
							json: {
								swaggerUrl: publicUrl + "/api-docs"
							}
						}, function (err, data, body) {

							if (err || body.type === "error") {
								return res.status(400).send("unable get the sdk, check the requested language");
							}

							(0, _request2.default)({
								method: "GET",
								rejectUnauthorized: false,
								url: body.link
							}).on('error', function (err) {
								return res.status(400).send("unable get the sdk");
							}).pipe(res);
						});

						_context.next = 11;
						break;

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

exports.default = router;
//# sourceMappingURL=sdk.js.map
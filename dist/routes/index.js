"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require("express");

var _express2 = _interopRequireDefault(_express);

var _video = require("./video");

var _video2 = _interopRequireDefault(_video);

var _sdk = require("./sdk");

var _sdk2 = _interopRequireDefault(_sdk);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

//Mount routes
router.use("/video", _video2.default);
router.use("/sdk", _sdk2.default);
exports.default = router;
//# sourceMappingURL=index.js.map
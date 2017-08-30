'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Schema = _mongoose2.default.Schema;
var ObjectId = Schema.ObjectId;

//Video object schema definition
var videoSchema = new Schema({
  id: ObjectId,
  createdDate: Date,
  name: String,
  keywords: Array
}, { collection: 'video', versionKey: false });

exports.default = _mongoose2.default.model('Video', videoSchema);
//# sourceMappingURL=video.js.map
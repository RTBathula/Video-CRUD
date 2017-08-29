"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var keys = {};

keys.ENV = process.env.NODE_ENV || "development"; //Default to development
keys.NODE_PORT = process.env.PORT || 8080; //Default port
keys.MONGO_URL = process.env.MONGO_URL || "mongodb://localhost:27017"; //Default to local
keys.DATABASE = "somedb";

exports.default = keys;
//# sourceMappingURL=keys.js.map
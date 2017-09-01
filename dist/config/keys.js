"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var keys = {};

keys.ENV = process.env.NODE_ENV || "development"; //Default to development
keys.NODE_PORT = process.env.PORT || 8081; //Default port
keys.MONGO_URL = process.env.MONGO_URL || "mongodb://localhost:27017"; //Default to local
keys.DATABASE = "videodb";
keys.ENABLE_APIDOCS = true;
keys.APIDOCSYML_FILEPATH = "./api-docs.yml";

exports.default = keys;
//# sourceMappingURL=keys.js.map
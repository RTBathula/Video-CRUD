"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.close = exports.listen = undefined;

var _express = require("express");

var _express2 = _interopRequireDefault(_express);

var _bodyParser = require("body-parser");

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _keys = require("./config/keys");

var _keys2 = _interopRequireDefault(_keys);

var _util = require("./helpers/util");

var _index = require("./routes/index");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

//Routes

app.use(_bodyParser2.default.urlencoded({ extended: true }));
app.use(_bodyParser2.default.json());
app.use(_express2.default.static(__dirname));

//If req body is a string, convert it to JSON.
app.use(function (req, res, next) {
	if (req.text && (0, _util.isJsonParsable)(req.text)) {
		req.body = JSON.parse(req.text);
	}

	if (req.body && typeof req.body === "string" && (0, _util.isJsonParsable)(req.body)) {
		req.body = JSON.parse(req.body);
	}
	next();
});

//Middleware CORS 
app.use(function (req, res, next) {
	res.header("Access-Control-Allow-Credentials", true);
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, PATCH, DELETE");
	res.header("Access-Control-Allow-Headers", "X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept");
	next();
});

//Routes
app.use("/", _index2.default);

//Default route
app.get("/", function (req, res) {
	return res.status(200).send("Video CRUD API(" + _keys2.default.ENV + ") is up and running");
});

//Listen express server
var listen = exports.listen = function listen() {
	app.set("port", _keys2.default.NODE_PORT);

	return new Promise(function (resolve) {
		var server = app.listen(app.get("port"), function () {
			var status = "Video CRUD API(" + _keys2.default.ENV + ") is up and running on PORT: " + app.get("port");
			process.stdout.write(status); //To show in CLI that server is running once success	
			resolve(server);
		});
	});
};

//Close express server
var close = exports.close = function close(server) {
	return new Promise(function (resolve) {
		server.close(function () {
			resolve("Video CRUD API(" + _keys2.default.ENV + ") server successfully closed");
		});
	});
};
//# sourceMappingURL=app.js.map
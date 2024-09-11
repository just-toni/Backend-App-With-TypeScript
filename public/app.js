"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var authRoutes_js_1 = require("./routes/authRoutes.js");
var body_parser_1 = require("body-parser");
var app = (0, express_1.default)();
app.use(body_parser_1.default.json());
app.use('/authRoutes.js', authRoutes_js_1.default);
var port = process.env.PORT;
try {
    app.listen(port, function () { return console.log("listening on port ".concat(port)); });
}
catch (err) {
    console.log(err);
}

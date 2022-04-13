"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.api = void 0;
var express = require("express");
var status = require("http-status");
var auth_1 = require("./auth");
var alerts_1 = require("./alerts");
var charts_1 = require("./charts");
var middleware_1 = require("../services/middleware");
var middleware = new middleware_1.Middleware();
exports.api = express.Router();
exports.api.use(middleware.jwtDecoder);
exports.api.use("/auth", new auth_1.AuthRouter().router);
exports.api.use("/alerts", new alerts_1.AlertRouter().router);
exports.api.use("/chart", new charts_1.ChartRouter().router);
exports.api.use(function (err, req, res, next) {
    res.status(err.code || status.INTERNAL_SERVER_ERROR).send(err);
});
//# sourceMappingURL=api.js.map
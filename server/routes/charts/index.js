"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChartRouter = void 0;
// NPM Deps
var express = require("express");
var middleware_1 = require("../../services/middleware");
// Internal Deps
var routes_1 = require("./routes");
var middleware = new middleware_1.Middleware();
var ChartRouter = /** @class */ (function () {
    function ChartRouter() {
        this.router = express.Router();
        this.router.use(middleware.requireLogin);
        this.router.get("/", routes_1.ChartRoutes.get);
    }
    return ChartRouter;
}());
exports.ChartRouter = ChartRouter;
//# sourceMappingURL=index.js.map
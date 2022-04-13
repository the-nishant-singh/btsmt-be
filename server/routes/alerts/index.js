"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AlertRouter = void 0;
// NPM Deps
var express = require("express");
var middleware_1 = require("../../services/middleware");
// Internal Deps
var routes_1 = require("./routes");
var middleware = new middleware_1.Middleware();
var AlertRouter = /** @class */ (function () {
    function AlertRouter() {
        this.router = express.Router();
        this.router.use(middleware.requireLogin);
        this.router.get("/", routes_1.AlertRoutes.get);
        this.router.post("/", routes_1.AlertRoutes.create);
        this.router.delete("/:id", routes_1.AlertRoutes.delete);
    }
    return AlertRouter;
}());
exports.AlertRouter = AlertRouter;
//# sourceMappingURL=index.js.map
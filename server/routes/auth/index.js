"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthRouter = void 0;
var express = require("express");
var routes_1 = require("./routes");
var AuthRouter = /** @class */ (function () {
    function AuthRouter() {
        this.router = express.Router();
        this.router.post('/singin', routes_1.AuthRoutes.signIn);
        this.router.post('/register', routes_1.AuthRoutes.register);
    }
    return AuthRouter;
}());
exports.AuthRouter = AuthRouter;
//# sourceMappingURL=index.js.map
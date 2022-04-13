"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthRoutes = void 0;
var status = require("http-status");
var StandardError = require("standard-error");
var jwt = require("jwt-simple");
var bcrypt = require("bcryptjs");
// Internal Dependencies
var db_1 = require("../../db");
// Helpers
var helpers_1 = require("./helpers");
var JWT_SECRET = process.env.JWT_SECRET || "spiderman";
var AuthRoutes = /** @class */ (function () {
    function AuthRoutes() {
    }
    AuthRoutes.signIn = function (req, res, next) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, email, password, user, match, error_1;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 3, , 4]);
                        _a = req.body.user, email = _a.email, password = _a.password;
                        helpers_1.validateloginFields(req.body.user);
                        return [4 /*yield*/, db_1.User.findOne({ email: email })];
                    case 1:
                        user = _b.sent();
                        if (!user) {
                            throw new StandardError({
                                message: "Invalid email or password",
                                code: status.CONFLICT,
                            });
                        }
                        return [4 /*yield*/, bcrypt.compare(password, user.password)];
                    case 2:
                        match = _b.sent();
                        if (!match) {
                            throw new StandardError({
                                message: "Invalid email or password",
                                code: status.CONFLICT,
                            });
                        }
                        res.json({
                            token: jwt.encode(helpers_1.getJwtPayload(user), JWT_SECRET),
                            user: user,
                        });
                        return [3 /*break*/, 4];
                    case 3:
                        error_1 = _b.sent();
                        next(error_1);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    AuthRoutes.register = function (req, res, next) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, email, password, name_1, user, hash, newUser, error_2;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 6, , 7]);
                        _a = req.body.user, email = _a.email, password = _a.password, name_1 = _a.name;
                        helpers_1.validateRegisterFields(req.body.user);
                        return [4 /*yield*/, db_1.User.findOne({ email: email })];
                    case 1:
                        user = _b.sent();
                        if (!user) return [3 /*break*/, 2];
                        throw new StandardError({
                            message: "Email already in use",
                            code: status.CONFLICT,
                        });
                    case 2: return [4 /*yield*/, bcrypt.hash(password, 8)];
                    case 3:
                        hash = _b.sent();
                        return [4 /*yield*/, db_1.User.create({ email: email, name: name_1, password: hash })];
                    case 4:
                        newUser = _b.sent();
                        return [2 /*return*/, res.json({
                                token: jwt.encode(helpers_1.getJwtPayload(newUser), JWT_SECRET),
                                user: newUser,
                            })];
                    case 5: return [3 /*break*/, 7];
                    case 6:
                        error_2 = _b.sent();
                        next(error_2);
                        return [3 /*break*/, 7];
                    case 7: return [2 /*return*/];
                }
            });
        });
    };
    return AuthRoutes;
}());
exports.AuthRoutes = AuthRoutes;
//# sourceMappingURL=routes.js.map
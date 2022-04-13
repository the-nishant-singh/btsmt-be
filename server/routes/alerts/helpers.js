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
exports.ValidateAlertFeilds = exports.AlertHelpers = void 0;
var StandardError = require("standard-error");
var status = require("http-status");
var Joi = require("joi");
// Internal Dependencies
var db_1 = require("../../db");
var AlertHelpers = /** @class */ (function () {
    function AlertHelpers() {
    }
    AlertHelpers.findAll = function (query) { return __awaiter(void 0, void 0, void 0, function () {
        var page, limit, skips;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    page = Number(query.page) || 1;
                    limit = Number(query.pageSize) || 5;
                    skips = (page - 1) * limit;
                    return [4 /*yield*/, db_1.Alert.aggregate([
                            {
                                $match: {
                                    isDeleted: false,
                                },
                            },
                            {
                                $facet: {
                                    data: [
                                        {
                                            $skip: skips,
                                        },
                                        {
                                            $limit: limit,
                                        },
                                    ],
                                    count: [
                                        {
                                            $count: "count",
                                        },
                                    ],
                                },
                            },
                        ])];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    }); };
    AlertHelpers.findAndUpdate = function (_a) {
        var id = _a.id, update = _a.update;
        return __awaiter(void 0, void 0, void 0, function () {
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, db_1.Alert.findByIdAndUpdate(id, update, {
                            new: true,
                        })];
                    case 1: return [2 /*return*/, _b.sent()];
                }
            });
        });
    };
    AlertHelpers.create = function (document) { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, db_1.Alert.create(document)];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    }); };
    AlertHelpers.softDelete = function (id) { return __awaiter(void 0, void 0, void 0, function () {
        var data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, db_1.Alert.findByIdAndUpdate(id, {
                        isDeleted: true,
                    })];
                case 1:
                    data = _a.sent();
                    return [2 /*return*/, data];
            }
        });
    }); };
    return AlertHelpers;
}());
exports.AlertHelpers = AlertHelpers;
var ValidateAlertFeilds = function (feilds) {
    var _a;
    var schema = Joi.object({
        name: Joi.string().required(),
        email: Joi.string().email().required(),
        priceSignal: Joi.string().required(),
        criteria: Joi.string().required(),
        value: Joi.string().required(),
        activeDays: Joi.string().required(),
        phone: Joi.string().optional(),
    });
    var validation = schema.validate(feilds);
    if ((_a = validation.error) === null || _a === void 0 ? void 0 : _a.details[0]) {
        throw new StandardError({ message: validation.error.details[0].message, code: status.CONFLICT });
    }
};
exports.ValidateAlertFeilds = ValidateAlertFeilds;
//# sourceMappingURL=helpers.js.map
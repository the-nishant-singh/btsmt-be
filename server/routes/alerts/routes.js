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
exports.AlertRoutes = void 0;
// Internal Dependencies
var helpers_1 = require("./helpers");
var AlertRoutes = /** @class */ (function () {
    function AlertRoutes() {
    }
    AlertRoutes.get = function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
        var query, data, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    query = req.query;
                    return [4 /*yield*/, helpers_1.AlertHelpers.findAll(query)];
                case 1:
                    data = _a.sent();
                    res.json(data);
                    return [3 /*break*/, 3];
                case 2:
                    error_1 = _a.sent();
                    next(error_1);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    }); };
    AlertRoutes.create = function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
        var document_1, data, error_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    document_1 = req.body.document;
                    helpers_1.ValidateAlertFeilds(document_1);
                    if (document_1.activeDays === 'Every') {
                        document_1.activeDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
                    }
                    else {
                        document_1.activeDays = [document_1.activeDays];
                    }
                    return [4 /*yield*/, helpers_1.AlertHelpers.create(document_1)];
                case 1:
                    data = _a.sent();
                    res.json(data);
                    return [3 /*break*/, 3];
                case 2:
                    error_2 = _a.sent();
                    next(error_2);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    }); };
    AlertRoutes.delete = function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
        var id, data;
        return __generator(this, function (_a) {
            try {
                id = req.params.id;
                data = helpers_1.AlertHelpers.softDelete(id);
                res.json(data);
            }
            catch (error) {
                next(error);
            }
            return [2 /*return*/];
        });
    }); };
    return AlertRoutes;
}());
exports.AlertRoutes = AlertRoutes;
//# sourceMappingURL=routes.js.map
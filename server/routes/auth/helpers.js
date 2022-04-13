"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateloginFields = exports.validateRegisterFields = exports.getJwtPayload = void 0;
var StandardError = require("standard-error");
var status = require("http-status");
var Joi = require("joi");
var getJwtPayload = function (user) {
    return {
        valid: true,
        id: user._id,
    };
};
exports.getJwtPayload = getJwtPayload;
var validateRegisterFields = function (feilds) {
    var _a;
    var schema = Joi.object({
        name: Joi.object({
            first: Joi.string().min(3).required(),
            last: Joi.string().min(3).required()
        }).required(),
        email: Joi.string().email().required(),
        password: Joi.string().min(8).required()
    });
    var validation = schema.validate(feilds);
    if ((_a = validation.error) === null || _a === void 0 ? void 0 : _a.details[0]) {
        throw new StandardError({ message: validation.error.details[0].message, code: status.CONFLICT });
    }
};
exports.validateRegisterFields = validateRegisterFields;
var validateloginFields = function (feilds) {
    var _a;
    var schema = Joi.object({
        email: Joi.string().email().required(),
        password: Joi.string().required()
    });
    var validation = schema.validate(feilds);
    if ((_a = validation.error) === null || _a === void 0 ? void 0 : _a.details[0]) {
        throw new StandardError({ message: validation.error.details[0].message, code: status.CONFLICT });
    }
};
exports.validateloginFields = validateloginFields;
//# sourceMappingURL=helpers.js.map
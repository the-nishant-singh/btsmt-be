"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserSchema = void 0;
var mongoose = require("mongoose");
var ObjectId = mongoose.Schema.Types.ObjectId;
exports.UserSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
    },
    name: {
        first: {
            type: String,
            required: true,
        },
        last: {
            type: String,
            required: true,
        },
    },
    password: {
        type: String,
        required: true
    }
}, {
    timestamps: true,
    toObject: {
        virtuals: true,
    },
    toJSON: {
        virtuals: true,
    },
});
exports.UserSchema.virtual("fullName").get(function () {
    return this.name.first + " " + this.name.last;
});
//# sourceMappingURL=user.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChartSchema = void 0;
var mongoose = require("mongoose");
var ObjectId = mongoose.Schema.Types.ObjectId;
exports.ChartSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    data: {
        type: Array,
        required: true,
    },
}, {
    timestamps: true,
    toObject: {
        virtuals: true,
    },
    toJSON: {
        virtuals: true,
    },
});
//# sourceMappingURL=chart.js.map
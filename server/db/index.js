"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Chart = exports.Alert = exports.User = void 0;
var mongoose = require("mongoose");
var user_1 = require("./user");
var alerts_1 = require("./alerts");
var chart_1 = require("./chart");
var PATH = process.env.DB_PATH || 'mongodb://localhost:27017/wedppy';
mongoose.connect(PATH);
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'db connection error:'));
db.once('open', function () { return console.info('connected to db ', PATH); });
exports.User = mongoose.model('User', user_1.UserSchema);
exports.Alert = mongoose.model('Alert', alerts_1.AlertSchema);
exports.Chart = mongoose.model('chart', chart_1.ChartSchema);
//# sourceMappingURL=index.js.map
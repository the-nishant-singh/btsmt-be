"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Get dependencies
var express = require("express");
var compression = require("compression");
var cors = require("cors");
// get routes group
var api_1 = require("./routes/api");
try {
    var app = express();
    app.use(cors());
    // Parsers for POST data
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    // for gzipping
    app.use(compression());
    app.get('/', function (req, res) {
        res.json({ health: 'OK' });
    });
    // Set our api routes
    app.use("/api", api_1.api);
    // Catch all other routes and return the index file
    var port_1 = process.env.PORT || "8000";
    app.set("port", port_1);
    app.listen(port_1, function () { return console.info("API running on localhost:" + port_1); });
}
catch (error) {
    process.exit(1);
}
//# sourceMappingURL=index.js.map
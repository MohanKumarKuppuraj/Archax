"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const data_requests_1 = require("./apis/data.requests");
const buffer_object_model_1 = __importDefault(require("./models/buffer.object.model"));
const path_1 = __importDefault(require("path"));
var app = (0, express_1.default)();
app.set('view engine', 'html');
console.log(path_1.default.join(__dirname, "../../"));
app.use(express_1.default.static(path_1.default.join(__dirname, "../../")));
app.get("/apis/get-employees-data", function (req, res) {
    var employeeRecords = data_requests_1.dataRequestObj.getEmployeeRecords();
    res.json(employeeRecords);
});
app.get("/apis/get-employees-data-await/:count", function (req, res) {
    var count = Number(req.params.count);
    var employeeRecords = data_requests_1.dataRequestObj.getEmployeeRecords(count);
    res.json(employeeRecords);
});
app.get("/apis/save-buffer", function (req, res) {
    let side;
    (function (side) {
        side["buy"] = "buy";
        side["sell"] = "sell";
    })(side || (side = {}));
    ;
    let type;
    (function (type) {
        type["limit"] = "limit";
        type["market"] = "market";
    })(type || (type = {}));
    ;
    var bufferObj = new buffer_object_model_1.default("&", 100, 9039053409554, side.buy, type.limit);
    var buffer = bufferObj.getEncodedObject();
    console.log(buffer);
    res.send(buffer);
});
app.get("/apis/get-buffer", function (req, res) {
    let side;
    (function (side) {
        side["buy"] = "buy";
        side["sell"] = "sell";
    })(side || (side = {}));
    ;
    let type;
    (function (type) {
        type["limit"] = "limit";
        type["market"] = "market";
    })(type || (type = {}));
    ;
    var bufferObj = new buffer_object_model_1.default("&", 100, 9039053409554, side.buy, type.limit);
    var buffer = bufferObj.getEncodedObject();
    bufferObj.decodeObject(buffer);
    res.send(buffer);
});
app.get("/", function (req, res) {
    var htmlPath = path_1.default.join(__dirname, "../../index.html");
    res.sendFile(htmlPath);
});
app.listen(80, () => {
    console.log("Server started listening the port 80");
});

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const data_requests_1 = require("./apis/data.requests");
const path_1 = __importDefault(require("path"));
var app = (0, express_1.default)();
app.set('view engine', 'html');
console.log(path_1.default.join(__dirname, "../../"));
app.use(express_1.default.static(path_1.default.join(__dirname, "../../")));
app.get("/apis/get-employees-data", function (req, res) {
    var employeeRecords = data_requests_1.dataRequestObj.getEmployeeRecords();
    res.json(employeeRecords);
});
app.get("/", function (req, res) {
    var htmlPath = path_1.default.join(__dirname, "../../index.html");
    res.sendFile(htmlPath);
});
app.listen(80, () => {
    console.log("Server started listening the port 83");
});

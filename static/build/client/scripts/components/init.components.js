"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
var ReactDOM = require("react-dom");
const root_component_1 = __importDefault(require("./root/root.component"));
ReactDOM.render(react_1.default.createElement(root_component_1.default), document.querySelector("#root-container"));

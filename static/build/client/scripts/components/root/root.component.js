"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const question_component_1 = __importDefault(require("./../question/question.component"));
class RootView extends react_1.default.Component {
    render() {
        return (react_1.default.createElement("div", null,
            react_1.default.createElement("span", null, "Root View is rendered"),
            react_1.default.createElement(question_component_1.default, null)));
    }
}
exports.default = RootView;

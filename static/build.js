var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
define("scripts/components/question/question.component", ["require", "exports", "react"], function (require, exports, react_1) {
    "use strict";
    react_1 = __importDefault(react_1);
    class Question extends react_1.default.Component {
        render() {
            react_1.default.createElement("div", null, "Question is rendered");
        }
    }
    return Question;
});
define("scripts/components/root/root.component", ["require", "exports", "react", "scripts/components/question/question.component"], function (require, exports, react_2, question_component_1) {
    "use strict";
    react_2 = __importDefault(react_2);
    question_component_1 = __importDefault(question_component_1);
    class RootView extends react_2.default.Component {
        render() {
            return (react_2.default.createElement("div", null,
                react_2.default.createElement("span", null, "Root View is rendered"),
                react_2.default.createElement(question_component_1.default, null)));
        }
    }
    return RootView;
});
define("scripts/components/init.components", ["require", "exports", "react", "scripts/components/root/root.component"], function (require, exports, react_3, root_component_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    react_3 = __importDefault(react_3);
    root_component_1 = __importDefault(root_component_1);
    var ReactDOM = require("react-dom");
    ReactDOM.render(react_3.default.createElement(root_component_1.default), document.querySelector("#root-container"));
});
define("models/employee.model", ["require", "exports"], function (require, exports) {
    "use strict";
    class Employee {
        constructor(_employeeId, _dateHired) {
            this.employeeId = _employeeId;
            this.dateHired = _dateHired;
        }
    }
    return Employee;
});
define("scripts/services/utility.service", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class Utility {
        bruteForceSort(unsortedArray) {
        }
        ;
        sortRecords(unsortedArray) {
            var arrPart1 = [], arrPart2 = [];
            if (unsortedArray.length > 3) {
                arrPart1 = this.sortRecords(unsortedArray.splice(0, unsortedArray.length / 2));
                arrPart2 = this.sortRecords(unsortedArray.splice(unsortedArray.length / 2, unsortedArray.length / 2));
                console.log(arrPart1, arrPart2);
                var i = 0;
                for (var i = 0; i < arrPart1.length; i++) {
                    var elem1 = arrPart1[i];
                    if (arrPart2.length > 0) {
                        if (this.checkCondition(arrPart1[i], arrPart2[0], "dateHired", true)) {
                            arrPart1.splice(i, 0, arrPart2.splice(0, 1)[0]);
                        }
                    }
                    else {
                        break;
                    }
                }
                return arrPart1.concat(arrPart2);
            }
            else {
                return this.sortData(unsortedArray);
            }
        }
        ;
        checkCondition(obj1, obj2, key, isDate) {
            if (isDate) {
                return new Date(obj1[key]) > new Date(obj2[key]);
            }
            else {
                return obj1[key] > obj2[key];
            }
        }
        ;
        sortData(unsortedArray) {
            var tmp;
            for (var i = 0; i < unsortedArray.length - 1; i++) {
                for (var j = i + 1; j < unsortedArray.length; j++) {
                    if (this.checkCondition(unsortedArray[i], unsortedArray[j], "dateHired", true)) {
                        tmp = unsortedArray[j];
                        unsortedArray[j] = unsortedArray[i];
                        unsortedArray[i] = tmp;
                    }
                }
            }
            return unsortedArray;
        }
        ;
    }
});

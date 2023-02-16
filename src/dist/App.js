"use strict";
exports.__esModule = true;
var react_1 = require("react");
require("./App.css");
var Route_1 = require("./Routes/Route");
function App() {
    return (react_1["default"].createElement("div", { className: "App" },
        react_1["default"].createElement(Route_1.Route, null)));
}
exports["default"] = App;

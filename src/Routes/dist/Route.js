"use strict";
exports.__esModule = true;
exports.Route = void 0;
var react_router_dom_1 = require("react-router-dom");
var Main_1 = require("../pages/Main");
exports.Route = function () {
    return react_router_dom_1.useRoutes([{ path: "/", element: React.createElement(Main_1["default"], null) }]);
};

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var server_1 = require("react-dom/server");
var HomePage = function () {
    return server_1.renderToString(react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("html", { lang: "en" },
            react_1.default.createElement("head", null,
                react_1.default.createElement("meta", { charset: "UTF-8" }),
                react_1.default.createElement("meta", { name: "viewport", content: "width=device-width, initial-scale=1.0" }),
                react_1.default.createElement("title", null, "SSR Testing")),
            react_1.default.createElement("body", null,
                react_1.default.createElement("h1", null, "Testing Real Content"),
                react_1.default.createElement("p", null, "This content is rendered using react renderToString method")))));
};
exports.default = HomePage;

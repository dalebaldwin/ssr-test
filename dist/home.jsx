"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const server_1 = require("react-dom/server");
const Content = () => {
    return (<>
            <h1>Testing Real Content</h1>
            <p>This content is rendered using react renderToString method</p>
        </>);
};
const HomePage = () => {
    return server_1.renderToString(<>
            <html lang="en">
            <head>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <title>SSR</title>
            </head>
            <body>
                <Content />
            </body>
            </html>
        </>);
};
exports.default = HomePage;

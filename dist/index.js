"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const home_1 = __importDefault(require("./home"));
const server = express_1.default();
server.get('/', (req, res) => {
    res.send(home_1.default());
});
server.listen(3000, () => console.log("SSR testing example booted up on port 3000"));

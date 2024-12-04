"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = registerMiddleware;
const sse_1 = __importDefault(require("./sse"));
function registerMiddleware(app) {
    app.use(sse_1.default);
}

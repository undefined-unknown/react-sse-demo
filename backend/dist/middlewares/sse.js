"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// SSE 中间件
const sseMiddleware = (req, res, next) => {
    res.sseSetup = () => {
        res.setHeader("Content-Type", "text/event-stream");
        res.setHeader("Cache-Control", "no-cache");
        res.setHeader("Connection", "keep-alive");
    };
    res.sseSend = (data) => {
        res.write(`data: ${JSON.stringify(data)}\n\n`);
    };
    next();
};
exports.default = sseMiddleware;

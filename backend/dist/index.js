"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const middlewares_1 = __importDefault(require("./middlewares"));
const api_1 = __importDefault(require("./routes/api"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const PORT = process.env.PORT || 5011;
app.use((0, cors_1.default)());
app.use(express_1.default.json());
// 中间件注册
(0, middlewares_1.default)(app);
app.use("/api", api_1.default);
// SSE 接口
app.get("/stream", (req, res) => {
    res.sseSetup();
    let count = 0;
    const interval = setInterval(() => {
        count += 1;
        const data = [
            { category: "A", value: 40 + count },
            { category: "B", value: 30 + count },
            { category: "C", value: 20 + count },
            { category: "D", value: 10 + count },
        ];
        res.sseSend(data);
    }, 1000);
    // 断开连接时清除定时器
    req.on("close", () => {
        clearInterval(interval);
    });
});
app.listen(PORT, () => {
    console.log(`Backend is running on http://localhost:${PORT}`);
});

import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import registerMiddleware from "./middlewares";
import apiRouter from "./routes/api";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5011;

app.use(cors());
app.use(express.json());

// 中间件注册
registerMiddleware(app);

app.use("/api", apiRouter);

app.listen(PORT, () => {
  console.log(`Backend is running on http://localhost:${PORT}`);
});

import { Router } from "express";

const router = Router();

router.get("/hello", (req, res) => {
  res.json({ message: "Hello from Backend!" });
});

// SSE 接口
router.get("/stream", (req, res) => {
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

export default router;

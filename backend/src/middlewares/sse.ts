/// <reference path="../types/express/index.d.ts" />
import { Request, RequestHandler, Response, NextFunction } from "express";

// SSE 中间件
const sseMiddleware: RequestHandler = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  res.sseSetup = () => {
    res.setHeader("Content-Type", "text/event-stream");
    res.setHeader("Cache-Control", "no-cache");
    res.setHeader("Connection", "keep-alive");
  };

  res.sseSend = (data: any) => {
    res.write(`data: ${JSON.stringify(data)}\n\n`);
  };

  next();
};

export default sseMiddleware;

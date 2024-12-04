import { Request, RequestHandler, Response, NextFunction } from "express";

// 系统中间件
const systemMiddleware: RequestHandler = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.log(`当前环境为 ${process.env.NODE_ENV || "produc"}`);
  next();
};

export default systemMiddleware;

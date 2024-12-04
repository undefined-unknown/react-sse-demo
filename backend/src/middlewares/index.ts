import type { Express } from "express";
import systemMiddleware from "./system";
import sseMiddleware from "./sse";

export default function registerMiddleware(app: Express) {
  app.use(systemMiddleware);
  app.use(sseMiddleware);
}

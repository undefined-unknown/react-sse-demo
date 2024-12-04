import "express";

declare module "express-serve-static-core" {
  export interface Response {
    sseSetup: () => void;
    sseSend: (data: any) => void;
  }
}

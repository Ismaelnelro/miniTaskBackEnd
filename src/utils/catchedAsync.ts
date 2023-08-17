import { NextFunction, Request, Response } from "express"


const catchedAsync = (fn: any) => {
  return (req: Request, res: Response, next: NextFunction) => {
    fn(req, res).catch((err: any) => next(err))
  }
}



export {
  catchedAsync
}
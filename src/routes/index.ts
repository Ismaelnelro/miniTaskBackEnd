import { Request, Response, Router } from "express";

const router = Router()

// http://localhost:5000/api/v1/example
router.get('/example',(req: Request , res: Response)=>{
  res.send("HOLA MUNDO")

})

export default router;
import { Request, Response, Router } from "express";
import path from "path";

const router = Router()

router.get('/',(req: Request , res: Response)=>{
  const filepath = path.resolve(__dirname, '..', '..', 'public', 'index.html');
  res.sendFile(filepath);

})

export default router;
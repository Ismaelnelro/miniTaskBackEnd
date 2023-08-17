import { Request, Response, Router } from "express";
import path from "path";
import authRouter from "./authRouter";
import taskRouter from "./taskRouter";

const router = Router()
const basePath = '/api/v1'

//INFORMATIVE ROUTE
router.get('/api/v1/', (req: Request, res: Response) => {
  const filepath = path.resolve(__dirname, '..', '..', 'public', 'index.html');
  res.sendFile(filepath);
})

//AUTH
router.use(`${basePath}/auth`, authRouter);


//TASK
router.use(`${basePath}/task`, taskRouter);


export default router;
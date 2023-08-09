import { Request, Response, Router } from "express";
import path from "path";

const router = Router()
const ruta= '/api/v1'
router.get('/', (req: Request, res: Response) => {
  const filepath = path.resolve(__dirname, '..', '..', 'public', 'index.html');
  res.sendFile(filepath);

})

router.get(`${ruta}/example`, (req:Request, res:Response) => {
  res.send("HOLA MUNDO")
})

export default router;
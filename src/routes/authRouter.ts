import { Router } from "express";
import { createProxy } from "../utils/createProxy";

const authRouter = Router()

/*Login*/
authRouter.use('/login', createProxy("login"));
/*Register*/
authRouter.use('/register',createProxy("register") );



// authRouter.post('/login', loginUser);
// authRouter.post('/register', registerUser);

export default authRouter;
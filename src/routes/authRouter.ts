import { Router } from "express";
import { createProxy } from "../utils/createProxy";

const authRouter = Router()

/*Login*/
//RUTE: http://localhost:3005/api/v1/auth/login
authRouter.use('/login', createProxy("login"));

/*Register*/
//RUTE: http://localhost:3005/api/v1/auth/register
authRouter.use('/register',createProxy("register") );



// authRouter.post('/login', loginUser);
// authRouter.post('/register', registerUser);

export default authRouter;
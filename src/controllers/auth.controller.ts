import { Request, Response } from "express";
import { fetchLogin, fetchRegister } from "../service/auth.services";

const loginUser = async (req: Request, resp: Response) => {
  try {
    const { email, password } = req.body;
    const data = await fetchLogin(password, email);
    resp.status(201).json({ msg: 'User login successful', data });
  } catch (error: any) {
    resp.status(400).json({ error: error.message });
  }
};


const registerUser = async (req: Request, resp: Response) => {
  try {
    const { username, email, password } = req.body;
    const data = await fetchRegister(username, email, password);

    resp.status(201).json({ msg: 'User sign-up successful', data });
  } catch (error: any) {
    resp.status(400).json({ error: error.message });
  }
};


export {
  loginUser,
  registerUser
}
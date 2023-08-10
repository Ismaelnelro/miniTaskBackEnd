import express, { Application } from "express";
import morgan from 'morgan';
import cors from 'cors';
import path from 'path';
import colors from '@colors/colors';


import config from "./config";
import { connection } from "./connection";
import mainRouter from './routes/index'


export class Server {
  app: Application;
  port: number = Number(process.env.PORT) || 5000;


  constructor() {
    this.app = express();
    this.config();
    this.routes()
  }


  config(): void {
    this.app.use(morgan('dev'));
    this.app.use(cors(config.corsOptions));
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.static(path.join(__dirname, 'public')));
  }

  routes(): void {
    this.app.use('', mainRouter)
  }


  listen(): void {
    connection();
    this.app.listen(this.port, () => {
      console.log(colors.bgBlue.white(` ** Server Running on port ${this.port} **`));

    })
  }
}
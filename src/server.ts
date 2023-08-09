import express, { Application } from "express";
import morgan from 'morgan';
import cors from 'cors';
import colors from '@colors/colors';
import router from './routes/index'
const app = express()


export class Server {
  app: Application;
  port: number = Number(process.env.PORT) || 5000;
  corsOptions: {}

  constructor() {
    this.app = express();
    this.corsOptions = {
      origin: "*",
      methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
      allowedHeaders: ['Content-Type', 'Authorization', 'multipart/form-data'],
      credentials: true,
      preflightContinue: true,
    }
    this.config();
    this.routes()
  }


  config(): void {
    this.app.use(morgan('dev'));
    this.app.use(cors(this.corsOptions));
    this.app.use(express.json());
    this.app.use(express.urlencoded({extended:true}));
  }
  
  routes(): void {
    this.app.use('/api/v1', router)
  }


  listen(): void {
    this.app.listen(this.port, () => {
      console.log(colors.bgBlue.white(` ** Server Running on port ${this.port} **`));

    })
  }
}
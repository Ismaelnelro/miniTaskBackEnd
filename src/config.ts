import dotenv from 'dotenv';

dotenv.config();

const config = {
  port: process.env.PORT || 5001,
  database: process.env.DB_URI,
  uriProxy: process.env.URI_PROXY,
  corsOptions: {
    origin: "*",
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization', 'multipart/form-data'],
    credentials: true,
    preflightContinue: true,
  }
}


export default config;
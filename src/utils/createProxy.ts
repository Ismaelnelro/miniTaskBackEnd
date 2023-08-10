import httpProxy from 'express-http-proxy';
import config from '../config';

type targetPath = 'login' | 'register';

const createProxy = (targetPath: targetPath) => {
  return httpProxy(`${config.uriProxy}`, {
    
    proxyReqPathResolver: (req) => {
      return `${config.uriProxy}${targetPath}`;
    },

    proxyErrorHandler: (err, res, next) => {
      if (err && err.code === 'ECONNRESET') {
        console.error('Error: Conexión reiniciada por el servidor destino');
        res.status(500).json({ error: 'Error en el servidor de autenticación' });
      } else {
        console.error('Error en el proxy:', err);
        res.status(500).json({ error: 'Error en el servidor de autenticación' });
      }
    }
  });
};

export { createProxy };

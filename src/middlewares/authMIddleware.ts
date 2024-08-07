import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

const SECRET_KEY = "el-joji"; // Clave secreta fija

// Extender la interfaz Request de Express
declare global {
  namespace Express {
    interface Request {
      user?: any; 
    }
  }
}

export const authenticateJWT = (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.headers.authorization;

  if (authHeader) {
    const token = authHeader.split(' ')[1]; // Obtener el token después de "Bearer"

    jwt.verify(token, SECRET_KEY, (err, user) => {
      if (err) {
        return res.sendStatus(403);
      }
      req.user = user; // Agregar el usuario decodificado al objeto request
      next();
    });
  } else {
    res.sendStatus(401);
  }
};
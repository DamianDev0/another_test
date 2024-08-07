"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authenticateJWT = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const SECRET_KEY = "el-joji"; // Clave secreta fija
const authenticateJWT = (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (authHeader) {
        const token = authHeader.split(' ')[1]; // Obtener el token después de "Bearer"
        jsonwebtoken_1.default.verify(token, SECRET_KEY, (err, user) => {
            if (err) {
                return res.sendStatus(403);
            }
            req.user = user; // Agregar el usuario decodificado al objeto request
            next();
        });
    }
    else {
        res.sendStatus(401);
    }
};
exports.authenticateJWT = authenticateJWT;

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRouter = void 0;
const express_1 = require("express");
const userController_1 = __importDefault(require("../controllers/userController"));
const authMIddleware_1 = require("../middlewares/authMIddleware");
exports.userRouter = (0, express_1.Router)();
exports.userRouter.get('/', authMIddleware_1.authenticateJWT, userController_1.default.getAllUser);
exports.userRouter.get('/:id', authMIddleware_1.authenticateJWT, userController_1.default.getUserById);
exports.userRouter.post('/', userController_1.default.createUser);
exports.userRouter.put('/:id', authMIddleware_1.authenticateJWT, userController_1.default.updateUser);
exports.userRouter.delete('/:id', authMIddleware_1.authenticateJWT, userController_1.default.deleteUser);
exports.userRouter.post('/login', userController_1.default.login);

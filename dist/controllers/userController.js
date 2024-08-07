"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const tsyringe_1 = require("tsyringe");
const userServices_1 = __importDefault(require("../services/userServices"));
class UserController {
    static async getAllUser(_, res) {
        try {
            const userService = tsyringe_1.container.resolve(userServices_1.default);
            const users = await userService.findAll();
            res.status(200).json({
                status: 200,
                message: "Users fetched successfully",
                data: users,
            });
        }
        catch (error) {
            console.error("Error fetching users:", error);
            throw new Error('Error fetching users');
        }
    }
    static async getUserById(req, res) {
        try {
            const userService = tsyringe_1.container.resolve(userServices_1.default);
            const user = await userService.findById(parseInt(req.params.id));
            if (!user) {
                return res.status(404).json({
                    status: 404,
                    message: "User not found",
                });
            }
            res.status(200).json({
                status: 200,
                message: "User fetched successfully",
                data: user,
            });
        }
        catch (error) {
            console.error("Error fetching user by ID:", error);
            throw new Error('Error fetching user by ID');
        }
    }
    static async createUser(req, res) {
        try {
            const userService = tsyringe_1.container.resolve(userServices_1.default);
            const user = await userService.createUser(req.body);
            console.log(user);
            res.status(201).json({
                status: 201,
                message: "User created successfully",
                data: user,
            });
        }
        catch (error) {
            console.error("Error creating user:", error);
            throw new Error('Error creating user');
        }
    }
    static async updateUser(req, res) {
        try {
            const userService = tsyringe_1.container.resolve(userServices_1.default);
            const user = await userService.findById(parseInt(req.params.id));
            if (!user) {
                return res.status(404).json({
                    status: 404,
                    message: "User not found",
                });
            }
            const updatedUser = await userService.update(parseInt(req.params.id), req.body);
            res.status(200).json({
                status: 200,
                message: "User updated successfully",
                data: updatedUser,
            });
        }
        catch (error) {
            console.error("Error updating user:", error);
            throw new Error('Error updating user');
        }
    }
    static async deleteUser(req, res) {
        try {
            const userService = tsyringe_1.container.resolve(userServices_1.default);
            console.log(userService);
            const user = await userService.findById(parseInt(req.params.id));
            if (!user) {
                return res.status(404).json({
                    status: 404,
                    message: "User not found",
                });
            }
            await userService.delete(parseInt(req.params.id));
            res.status(204).json({
                status: 204,
                message: "User deleted successfully",
            });
        }
        catch (error) {
            console.error("Error deleting user:", error);
            throw new Error('Error deleting user');
        }
    }
    static async login(req, res) {
        try {
            const { email, password } = req.body;
            const userService = tsyringe_1.container.resolve(userServices_1.default);
            const token = await userService.getUserByEmail(email, password);
            res.status(200).json({
                status: 200,
                message: 'Logged in successfully',
                token,
            });
        }
        catch (error) {
            console.error("Login error:", error);
            res.status(401).json({ message: 'Cannot access the page' });
        }
    }
}
exports.default = UserController;

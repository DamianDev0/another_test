import { Request, Response } from "express";
import { container } from "tsyringe";
import UserService from "../services/userServices";


export default class UserController {
  static async getAllUser(_: Request, res: Response) {
    try {
      const userService = container.resolve(UserService);
      const users = await userService.findAll();
      res.status(200).json({
        status: 200,
        message: "Users fetched successfully",
        data: users,
      });
    } catch (error) {
        console.error("Error fetching users:", error);
        throw new Error('Error fetching users')
    }
  }

  static async getUserById(req: Request, res: Response) {
    try {
      const userService = container.resolve(UserService);
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
    } catch (error) {
        console.error("Error fetching user by ID:", error);
        throw new Error('Error fetching user by ID')
    }
  }

  static async createUser(req: Request, res: Response) {
    try {
      const userService = container.resolve(UserService);
      const user = await userService.createUser(req.body);
      console.log(user);
    
      res.status(201).json({
        status: 201,
        message: "User created successfully",
        data: user,
      });
    } catch (error) {
        console.error("Error creating user:", error);
        throw new Error('Error creating user')
    }
  }

  static async updateUser(req: Request, res: Response) {
    try {
      const userService = container.resolve(UserService);
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
    } catch (error) {
        console.error("Error updating user:", error);
        throw new Error('Error updating user')
    }
  }

  static async deleteUser(req: Request, res: Response) {
    try {
      const userService = container.resolve(UserService);
      console.log(userService)
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
    } catch (error) {
        console.error("Error deleting user:", error);
        throw new Error('Error deleting user')
    }
  }

  static async login(req: Request, res: Response) {
    try {
      const { email, password } = req.body;
      const userService = container.resolve(UserService);
      const token = await userService.getUserByEmail(email, password);
      res.status(200).json({
        status:200,
        message: 'Logged in successfully',
        token,
       });
    } catch (error) {
      console.error("Login error:", error);
      res.status(401).json({ message: 'Cannot access the page' });
    }
  }

  static async getUserByRole(req: Request, res: Response) {
    try {
      const role = parseInt(req.params.role, 10); // Convierte el parámetro a número
      const userService = container.resolve(UserService);
      const user = await userService.getUsersByRole(role); 
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
    } catch (error) {
      console.error("Error fetching user by role:", error);
      res.status(500).json({
        status: 500,
        message: 'Error fetching user by role',
      });
    }

  }
}

import { Request, Response } from "express";
import { container } from "tsyringe";
import OrderService from "../services/orderServices";


//exportamos el controlador cons sus metodos
export default class OrderController {
    static async getAllOrders(_: Request, res: Response) {
        try {
            const orderService = container.resolve(OrderService);
            const orders = await orderService.findAll();
            res.status(200).json({
                status: 200,
                message: "Orders fetched successfully",
                data: orders,
            });
        } catch (error) {
            console.error("Error fetching orders:", error);
            throw new Error('Error fetching orders');
        }
    }

    static async getOrderById(req: Request, res: Response) {
        try {
            const orderService = container.resolve(OrderService);
            const order = await orderService.findById(parseInt(req.params.id));
            if (!order) {
                return res.status(404).json({
                    status: 404,
                    message: "Order not found",
                });
            }
            res.status(200).json({
                status: 200,
                message: "Order fetched successfully",
                data: order,
            });
        } catch (error) {
            console.error("Error fetching order by ID:", error);
            throw new Error('Error fetching order by ID');
        }
    }

    static async createOrder(req: Request, res: Response) {
       
            const orderService = container.resolve(OrderService);
            const order = await orderService.create(req.body);
            res.status(201).json({
                status: 201,
                message: "Order created successfully",
                data: order,
            });
       
    }

    static async updateOrder(req: Request, res: Response) {
        try {
            const orderService = container.resolve(OrderService);
            const order = await orderService.findById(parseInt(req.params.id));
            if (!order) {
                return res.status(404).json({
                    status: 404,
                    message: "Order not found",
                });
            }
            const updatedOrder = await orderService.update(parseInt(req.params.id), req.body);
            res.status(200).json({
                status: 200,
                message: "Order updated successfully",
                data: updatedOrder,
            });
        } catch (error) {
            console.error("Error updating order:", error);
            throw new Error('Error updating order');
        }
    }

    static async deleteOrder(req: Request, res: Response) {
        try {
            const orderService = container.resolve(OrderService);
            const order = await orderService.findById(parseInt(req.params.id));
            if (!order) {
                return res.status(404).json({
                    status: 404,
                    message: "Order not found",
                });
            }
            await orderService.delete(parseInt(req.params.id));
            res.status(204).json({
                status: 204,
                message: "Order deleted successfully",
            });
        } catch (error) {
            console.error("Error deleting order:", error);
            throw new Error('Error deleting order');
        }
    }

    static async getUserOrders(req: Request, res: Response) {
        try {
            const orderService = container.resolve(OrderService);
            const orders = await orderService.getByUserId(parseInt(req.params.id));
            console.log(orders)
            if (!orders) {
                return res.status(404).json({
                    status: 404,
                    message: "Orders not found for this user",
                });
            }
            res.status(200).json({
                status: 200,
                message: "Orders fetched successfully for this user",
                data: orders,
            });
        } catch (error) {
            console.error("Error fetching orders for user:", error);
            throw new Error('Error fetching orders for user');
        }
    }
}
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const tsyringe_1 = require("tsyringe");
const productsCartServices_1 = __importDefault(require("../services/productsCartServices"));
class ProductCartController {
    static async getAllCartItems(_, res) {
        try {
            const productCartService = tsyringe_1.container.resolve(productsCartServices_1.default);
            const cartItems = await productCartService.findAll();
            res.status(200).json({
                status: 200,
                message: "Cart items fetched successfully",
                data: cartItems,
            });
        }
        catch (error) {
            console.error("Error fetching cart items:", error);
            throw new Error('Error fetching cart items');
        }
    }
    static async addCartItem(req, res) {
        try {
            const productCartService = tsyringe_1.container.resolve(productsCartServices_1.default);
            const addedItem = await productCartService.add(req.body);
            console.log(addedItem);
            res.status(201).json({
                status: 201,
                message: "Cart item added successfully",
                data: addedItem,
            });
        }
        catch (error) {
            console.error("Error adding cart item:", error);
            throw new Error('Error adding cart item');
        }
    }
    static async updateCartItemQuantity(req, res) {
        try {
            const productCartService = tsyringe_1.container.resolve(productsCartServices_1.default);
            await productCartService.updateCuantity(parseInt(req.params.id));
            res.status(200).json({
                status: 200,
                message: "Cart item quantity updated successfully",
            });
        }
        catch (error) {
            console.error("Error updating cart item quantity:", error);
            throw new Error('Error updating cart item quantity');
        }
    }
    static async deleteCartItem(req, res) {
        try {
            const productCartService = tsyringe_1.container.resolve(productsCartServices_1.default);
            const itemDelete = await productCartService.delete(parseInt(req.params.id));
            res.status(204).json({
                status: 204,
                message: "Cart item deleted successfully",
                data: itemDelete,
            });
        }
        catch (error) {
            console.error("Error deleting cart item:", error);
            throw new Error('Error deleting cart item');
        }
    }
}
exports.default = ProductCartController;

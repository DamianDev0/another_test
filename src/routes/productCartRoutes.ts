import { Router } from "express";
import ProductCartController from "../controllers/productCartController";

export const productCartRouter = Router();

productCartRouter.get('/', ProductCartController.getAllCartItems);
productCartRouter.post('/', ProductCartController.addCartItem);
productCartRouter.put('/:id/quantity', ProductCartController.updateCartItemQuantity);
productCartRouter.delete('/:id', ProductCartController.deleteCartItem);

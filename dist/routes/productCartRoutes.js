"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.productCartRouter = void 0;
const express_1 = require("express");
const productCartController_1 = __importDefault(require("../controllers/productCartController"));
exports.productCartRouter = (0, express_1.Router)();
exports.productCartRouter.get('/', productCartController_1.default.getAllCartItems);
exports.productCartRouter.post('/', productCartController_1.default.addCartItem);
exports.productCartRouter.put('/:id/quantity', productCartController_1.default.updateCartItemQuantity);
exports.productCartRouter.delete('/:id', productCartController_1.default.deleteCartItem);

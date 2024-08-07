"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const tsyringe_1 = require("tsyringe");
const orderRepository_1 = __importDefault(require("../repositories/orderRepository"));
const productCartRepository_1 = __importDefault(require("../repositories/productCartRepository"));
const productRepository_1 = __importDefault(require("../repositories/productRepository"));
const userRepository_1 = __importDefault(require("../repositories/userRepository"));
const orderServices_1 = __importDefault(require("../services/orderServices"));
const productsCartServices_1 = __importDefault(require("../services/productsCartServices"));
const productServices_1 = __importDefault(require("../services/productServices"));
const userServices_1 = __importDefault(require("../services/userServices"));
//repositories
tsyringe_1.container.registerSingleton(orderRepository_1.default);
tsyringe_1.container.registerSingleton(productCartRepository_1.default);
tsyringe_1.container.registerSingleton(productRepository_1.default);
tsyringe_1.container.registerSingleton(userRepository_1.default);
//services
tsyringe_1.container.registerSingleton(orderServices_1.default);
tsyringe_1.container.registerSingleton(productsCartServices_1.default);
tsyringe_1.container.registerSingleton(productServices_1.default);
tsyringe_1.container.registerSingleton(userServices_1.default);

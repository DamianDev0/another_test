import { container } from "tsyringe";
import OrderRepository from "../repositories/orderRepository";
import ProductCartRepository from "../repositories/productCartRepository";
import ProductRepository from "../repositories/productRepository";
import UserRepository from "../repositories/userRepository";





import OrderService from "../services/orderServices";
import ProductCartService from "../services/productsCartServices";
import ProductService from "../services/productServices";
import UserService from "../services/userServices";



//repositories

container.registerSingleton<OrderRepository>(OrderRepository)
container.registerSingleton<ProductCartRepository>(ProductCartRepository)
container.registerSingleton<ProductRepository>(ProductRepository)
container.registerSingleton<UserRepository>(UserRepository)
<




//services

container.registerSingleton<OrderService>(OrderService)
container.registerSingleton<ProductCartService>(ProductCartService)
container.registerSingleton<ProductService>(ProductService)
container.registerSingleton<UserService>(UserService)





import { Order } from "../models/orderModel";
import OrderRepository from "../repositories/orderRepository";
import { inject, injectable } from "tsyringe";

@injectable()
export default class OrderService {
    constructor(
        @inject(OrderRepository) private orderRepository: OrderRepository
    ) {}

    async findAll() {
        return await this.orderRepository.findAll();
    }
    async findById(id: number) {
        return await this.orderRepository.findById(id);
    }
    async create(order: Partial<Order>) {
        return await this.orderRepository.create(order);
    }
    async update(id: number, order: Partial<Order>) {
        return await this.orderRepository.update(id, order);
    }
    async delete(id: number) {
        return await this.orderRepository.delete(id);
    }
    async getByUserId(userId: number){
        return await this.orderRepository.getByUserId(userId);
    }

}
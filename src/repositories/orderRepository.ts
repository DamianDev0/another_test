import { injectable } from "tsyringe";
import { Order } from "../models/orderModel";


@injectable()
export default class OrderRepository {
    async findAll() {
        return await Order.findAll();
    }
    async findById(id: number) {
        return await Order.findByPk(id);
    }

    async create(order: Partial<Order>) {
        return await Order.create(order);
    }

    async update(id: number, order: Partial<Order>) {
        await Order.update(order, { where: { id } });
        return await Order.findByPk(id);
    }

    async delete(id: number) {
        await Order.destroy({ where: { id } });
        return true;
    }

    async getByUserId(userId: number){
        return await Order.findAll({ where: { userId } });
    }
}
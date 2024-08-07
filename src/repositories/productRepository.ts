import { injectable } from "tsyringe";
import {Product} from '../models/productModel'
import { Order } from "../models/orderModel";


@injectable()
export default class ProductRepository {
    async findAll() {
        return await Product.findAll();
    }

    async findById(id: number) {
        return await Product.findByPk(id);
    }

    async create(product: Partial<Product>) {
        return await Product.create(product);
    }

    async update(id: number, product: Partial<Product>) {
        await Product.update(product, { where: { id } });
        return await Product.findByPk(id);
    }

    async delete(id: number) {
        await Product.destroy({ where: { id } });
        return true;
    }

    async getBYIdOrder(id: number){
        return await Product.findAll({
            where: {
                id: id
            },
            include: [{
                model: Order,
                required: true
            }]
        });
    }

}
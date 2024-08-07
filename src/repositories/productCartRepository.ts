import { injectable } from "tsyringe";
import { ProductCart } from "../models/productCartModel";



@injectable()
export default class ProductCartRepository {
    async findAll() {
        return await ProductCart.findAll();
    }
    async add(product: Partial<ProductCart>){
        return await ProductCart.create(product);
    }

    async delete(id: number) {
        await ProductCart.destroy({ where: { id } });
        return true;
    }
    async updateCuantity(id: number){
        await ProductCart.update({ quantity: 1 }, { where: { id } });
        return await ProductCart.findByPk(id);
    }
}
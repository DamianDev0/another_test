import { ProductCart } from "../models/productCartModel";
import ProductCartRepository from "../repositories/productCartRepository";
import { inject, injectable } from "tsyringe";



@injectable()
export default class ProductCartService {
    constructor(
        @inject(ProductCartRepository) private productCartRepository: ProductCartRepository
    ) {}

    async findAll() {
        return await this.productCartRepository.findAll();
    }
    async add(product: Partial<ProductCart>){
        return await this.productCartRepository.add(product);
    }

    async delete(id: number) {
        await this.productCartRepository.delete(id);
        return true;
    }
    async updateCuantity(id: number){
        return await this.productCartRepository.updateCuantity(id);
    }
}
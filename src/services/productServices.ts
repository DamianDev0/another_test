import { Product } from "../models/productModel";
import ProductRepository from '../repositories/productRepository'
import { inject,injectable } from "tsyringe";



@injectable()
export default class ProductService {
    constructor(
        @inject(ProductRepository) private productRepository: ProductRepository
    ) {}

    async findAll() {
        return await this.productRepository.findAll();
    }
    async findById(id: number) {
        return await this.productRepository.findById(id);
    }
    async create(product: Partial<Product>) {
        return await this.productRepository.create(product);
    }
    async update(id: number, product: Partial<Product>) {
        return await this.productRepository.update(id, product);
    }
    async delete(id: number) {
        return await this.productRepository.delete(id);
    }
    async getBYIdOrder(id: number){
        return await this.productRepository.getBYIdOrder(id);
    }
}
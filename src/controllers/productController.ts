import { Request, Response } from "express";
import { container } from "tsyringe";
import ProductService from "../services/productServices";

export default class ProductController {
    static async getAllProducts(_: Request, res: Response) {
        try {
            const productService = container.resolve(ProductService);
            const products = await productService.findAll();
            res.status(200).json({
                status: 200,
                message: "Products fetched successfully",
                data: products,
            });
        } catch (error) {
            console.error("Error fetching products:", error);
            throw new Error('Error fetching products');
        }
    }

    static async getProductById(req: Request, res: Response) {
        try {
            const productService = container.resolve(ProductService);
            const product = await productService.findById(parseInt(req.params.id));
            if (!product) {
                return res.status(404).json({
                    status: 404,
                    message: "Product not found",
                });
            }
            res.status(200).json({
                status: 200,
                message: "Product fetched successfully",
                data: product,
            });
        } catch (error) {
            console.error("Error fetching product by ID:", error);
            throw new Error('Error fetching product by ID');
        }
    }

    static async createProduct(req: Request, res: Response) {
        try {
            const productService = container.resolve(ProductService);
            const product = await productService.create(req.body);
            res.status(201).json({
                status: 201,
                message: "Product created successfully",
                data: product,
            });
        } catch (error) {
            console.error("Error creating product:", error);
            throw new Error('Error creating product');
        }
    }

    static async updateProduct(req: Request, res: Response) {
        try {
            const productService = container.resolve(ProductService);
            const product = await productService.findById(parseInt(req.params.id));
            if (!product) {
                return res.status(404).json({
                    status: 404,
                    message: "Product not found",
                });
            }
            const updatedProduct = await productService.update(parseInt(req.params.id), req.body);
            res.status(200).json({
                status: 200,
                message: "Product updated successfully",
                data: updatedProduct,
            });
        } catch (error) {
            console.error("Error updating product:", error);
            throw new Error('Error updating product');
        }
    }

    static async deleteProduct(req: Request, res: Response) {
        try {
            const productService = container.resolve(ProductService);
            const product = await productService.findById(parseInt(req.params.id));
            if (!product) {
                return res.status(404).json({
                    status: 404,
                    message: "Product not found",
                });
            }
            await productService.delete(parseInt(req.params.id));
            res.status(204).json({
                status: 204,
                message: "Product deleted successfully",
            });
        } catch (error) {
            console.error("Error deleting product:", error);
            throw new Error('Error deleting product');
        }
    }

    static async getProductByIdOrder(req: Request, res: Response) {
        try {
            const productService = container.resolve(ProductService);
            const product = await productService.getBYIdOrder(parseInt(req.params.id));
            if (!product) {
                return res.status(404).json({
                    status: 404,
                    message: "Product not found",
                });
            }
            res.status(200).json({
                status: 200,
                message: "Product fetched successfully",
                data: product,
            });
        } catch (error) {
            console.error("Error fetching product by ID:", error);
            throw new Error('Error fetching product by ID');
        }
    }
}
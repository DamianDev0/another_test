"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const tsyringe_1 = require("tsyringe");
const productModel_1 = require("../models/productModel");
const orderModel_1 = require("../models/orderModel");
let ProductRepository = class ProductRepository {
    async findAll() {
        return await productModel_1.Product.findAll();
    }
    async findById(id) {
        return await productModel_1.Product.findByPk(id);
    }
    async create(product) {
        return await productModel_1.Product.create(product);
    }
    async update(id, product) {
        await productModel_1.Product.update(product, { where: { id } });
        return await productModel_1.Product.findByPk(id);
    }
    async delete(id) {
        await productModel_1.Product.destroy({ where: { id } });
        return true;
    }
    async getBYIdOrder(id) {
        return await productModel_1.Product.findAll({
            where: {
                id: id
            },
            include: [{
                    model: orderModel_1.Order,
                    required: true
                }]
        });
    }
};
ProductRepository = __decorate([
    (0, tsyringe_1.injectable)()
], ProductRepository);
exports.default = ProductRepository;

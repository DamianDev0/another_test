"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const tsyringe_1 = require("tsyringe");
const productCartModel_1 = require("../models/productCartModel");
let ProductCartRepository = class ProductCartRepository {
    async findAll() {
        return await productCartModel_1.ProductCart.findAll();
    }
    async add(product) {
        return await productCartModel_1.ProductCart.create(product);
    }
    async delete(id) {
        await productCartModel_1.ProductCart.destroy({ where: { id } });
        return true;
    }
    async updateCuantity(id) {
        await productCartModel_1.ProductCart.update({ quantity: 1 }, { where: { id } });
        return await productCartModel_1.ProductCart.findByPk(id);
    }
};
ProductCartRepository = __decorate([
    (0, tsyringe_1.injectable)()
], ProductCartRepository);
exports.default = ProductCartRepository;

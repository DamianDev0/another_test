"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const orderRepository_1 = __importDefault(require("../repositories/orderRepository"));
const tsyringe_1 = require("tsyringe");
let OrderService = class OrderService {
    constructor(orderRepository) {
        this.orderRepository = orderRepository;
    }
    async findAll() {
        return await this.orderRepository.findAll();
    }
    async findById(id) {
        return await this.orderRepository.findById(id);
    }
    async create(order) {
        return await this.orderRepository.create(order);
    }
    async update(id, order) {
        return await this.orderRepository.update(id, order);
    }
    async delete(id) {
        return await this.orderRepository.delete(id);
    }
    async getByUserId(userId) {
        return await this.orderRepository.getByUserId(userId);
    }
};
OrderService = __decorate([
    (0, tsyringe_1.injectable)(),
    __param(0, (0, tsyringe_1.inject)(orderRepository_1.default)),
    __metadata("design:paramtypes", [orderRepository_1.default])
], OrderService);
exports.default = OrderService;

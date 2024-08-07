"use strict";
//Importamos los decoradores que nos ayudaran en la creacion de nuestra tabala Products en nuestra base de datos
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cart = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const userModel_1 = require("./userModel");
const productCartModel_1 = require("./productCartModel");
let Cart = class Cart extends sequelize_typescript_1.Model {
};
exports.Cart = Cart;
__decorate([
    sequelize_typescript_1.PrimaryKey,
    sequelize_typescript_1.AutoIncrement,
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER
    }),
    __metadata("design:type", Number)
], Cart.prototype, "id", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => userModel_1.User),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
        allowNull: false
    }),
    __metadata("design:type", Number)
], Cart.prototype, "userId", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => userModel_1.User),
    __metadata("design:type", userModel_1.User)
], Cart.prototype, "user", void 0);
__decorate([
    (0, sequelize_typescript_1.HasMany)(() => productCartModel_1.ProductCart),
    __metadata("design:type", Array)
], Cart.prototype, "productCart", void 0);
exports.Cart = Cart = __decorate([
    (0, sequelize_typescript_1.Table)({
        tableName: 'cart',
        timestamps: false
    })
], Cart);

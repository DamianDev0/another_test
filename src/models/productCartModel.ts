//Importamos los decoradores que nos ayudaran en la creacion de nuestra tabala ProductsCart en nuestra base de datos

import { 
    Table,
    Column, 
    Model, 
    DataType, 
    PrimaryKey, 
    AutoIncrement, 
    BelongsTo,
    ForeignKey,
    HasMany
} from "sequelize-typescript";
import { Cart } from "./cartModel";
import { Product } from "./productModel";
import { Order } from "./orderModel";

@Table ({
    tableName: 'productCarts',
    timestamps: false
})
export class ProductCart extends Model{
    @PrimaryKey
    @AutoIncrement
    @Column({
        type: DataType.INTEGER
    })
    id!: number;

    @ForeignKey(() => Cart)
    @Column({
        type: DataType.INTEGER,
        allowNull: false
    })
    cartId!: number

    @ForeignKey(() => Product)
    @Column({
        type: DataType.INTEGER,
        allowNull: false
    })
    productId!: number

    @HasMany(() => Order)
    orders!: Order
    
    @BelongsTo(() => Cart)
    cart!: Cart

    @BelongsTo(() => Product)
    product!: Product
}
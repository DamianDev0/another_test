//Importamos los decoradores que nos ayudaran en la creacion de nuestra tabala Products en nuestra base de datos

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
import {  User } from "./userModel";
import { ProductCart} from "./productCartModel";

//creamos la tabla carts

@Table({
    tableName: 'cart',
    timestamps: false
})

//se hace la calse cart que se extiende de modelo
export class Cart extends Model {
    @PrimaryKey
    @AutoIncrement
    @Column({
        type: DataType.INTEGER
    })
    id!: number;

    @ForeignKey(() => User) //nos traemos la foreing key de user
    @Column({
        type: DataType.INTEGER,
        allowNull: false
    })
    userId!: number

    @BelongsTo(() => User) // decimos que pertenece a User
    user!:  User

    @HasMany(() => ProductCart)
    productCart!: ProductCart[] 
}
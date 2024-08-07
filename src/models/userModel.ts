//Importamos los decoradores que nos ayudaran en la creacion de nuestra tabala user en nuestra base de datos

import { 
    Table,
    Column, 
    Model, 
    DataType, 
    PrimaryKey, 
    AutoIncrement, 
    HasOne,
    ForeignKey,
    HasMany
} from "sequelize-typescript";
import { Cart } from "./cartModel";
import { Role } from "./roleModel";
import { Order } from "./orderModel";

@Table({
    tableName: 'users',
    timestamps: false
})
export class User extends Model {
    @PrimaryKey
    @AutoIncrement
    @Column({
        type: DataType.INTEGER
    })
    id!: number;


    @Column({
        type: DataType.STRING,
        allowNull: false,
        unique: true
    })
    email!: string 

    @Column({
        type: DataType.STRING,
        allowNull: false,
        unique: true
    })
    password!: string


    @ForeignKey(() => Role)
    @Column({
        type: DataType.INTEGER,
        allowNull: false
    })
    role!: number

    @HasMany(() => Order)
    orders!: Order[]

    @HasOne(() => Cart)
    cart!: Cart[]
}
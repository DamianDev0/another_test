//Importamos los decoradores que nos ayudaran en la creacion de nuestra tabala Products en nuestra base de datos

import { 
    Table,
    Column, 
    Model, 
    DataType, 
    PrimaryKey, 
    AutoIncrement,
    HasMany, 
} from "sequelize-typescript";
import { ProductCart} from "./productCartModel";

@Table({
    tableName: 'products',
    timestamps: true
})
export class Product extends Model {
    @PrimaryKey
    @AutoIncrement
    @Column({
        type: DataType.INTEGER
    })
    id!: number;

    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    name!: string;

    @Column({
        type: DataType.DECIMAL,
        allowNull: false,
    })
    price!: number 

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    description!: string

    @Column({
        type: DataType.INTEGER,
        allowNull: false
    })
    stock!: number

  
    @HasMany(() =>ProductCart)
    productCart!: ProductCart[] 
}
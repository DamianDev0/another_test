import {
    Table,
    Column,
    Model,
    DataType,
    ForeignKey,
    BelongsTo,
    PrimaryKey,
    AutoIncrement,
    HasMany,
   
} from 'sequelize-typescript';
import { User } from './userModel';
import { Product } from './productModel';
import { ProductCart } from './productCartModel';

@Table({
    tableName: 'orders',
    timestamps: false, // Si deseas que Sequelize maneje los timestamps automáticamente
})
export class Order extends Model {
    @PrimaryKey
    @AutoIncrement
    @Column({
        type:DataType.INTEGER,
    })
    id!:number;
    @Column({
        type: DataType.DECIMAL(10,2)
    })
    total!:number
    @ForeignKey(() => User)
    @Column({
        type: DataType.INTEGER,
        allowNull: false,
    })
    userId!: number;
    @BelongsTo(() => User)
    user!: User;

    @ForeignKey(()=>ProductCart)
    @Column({
        type: DataType.INTEGER,
        allowNull:false
    })
    productCartId!: number;
    @BelongsTo (()=>ProductCart)
    product!: Product;

}
//Importamos los decoradores que nos ayudaran en la creacion de nuestra tabala Roles en nuestra base de datos

import { 
    Table,
    Column, 
    Model, 
    DataType, 
    PrimaryKey, 
    AutoIncrement,
    HasOne, 
} from "sequelize-typescript";
import { User } from "./userModel";

@Table({
    tableName: 'roles',
    timestamps: false
})
export class Role extends Model {
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

    @HasOne(() => User)
    user!: User[]
}
import {
    Table,
    Column,
    Model,
    DataType,
    PrimaryKey,
    AutoIncrement,
    HasMany
} from 'sequelize-typescript';
import { Permissions } from './permissionModel';

@Table
export class Entities extends Model {
    @PrimaryKey
    @AutoIncrement
    @Column({
        type: DataType.INTEGER
    })
    id!: number;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    name!: string;

    @HasMany(() => Permissions)
    permissions!: Permissions[];
}

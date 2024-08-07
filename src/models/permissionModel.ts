// permissionsModel.ts
import { Table, Column, Model, DataType, ForeignKey } from 'sequelize-typescript';
import { Entities } from './entitiesModel';

@Table
export class Permissions extends Model {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  id!: number;

  @ForeignKey(() => Entities)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  entityId!: number;

  @Column({
    type: DataType.BOOLEAN,
    defaultValue: false,
  })
  canCreate!: boolean;

  @Column({
    type: DataType.BOOLEAN,
    defaultValue: false,
  })
  canUpdate!: boolean;

  @Column({
    type: DataType.BOOLEAN,
    defaultValue: false,
  })
  canDelete!: boolean;

  @Column({
    type: DataType.BOOLEAN,
    defaultValue: false,
  })
  canGet!: boolean;
}

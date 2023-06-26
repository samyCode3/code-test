/* eslint-disable prettier/prettier */
import {
  Table,
  Column,
  DataType,
  IsUUID,
  Model,
  PrimaryKey,
  HasMany,
} from 'sequelize-typescript';
import { Post } from './post.model';
import { DataTypes } from 'sequelize';
@Table({
  tableName: 'categories',
  timestamps: true,
})
export class Category extends Model<Category> {
  @IsUUID(4)
  @PrimaryKey
  @Column({
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    allowNull: false,
  })
  id: string;
  @Column({ type: DataType.STRING, allowNull: false })
  name: string;
  @HasMany(() => Post, {
    onDelete: 'CASCADE',
  })
  post: Post[];
}

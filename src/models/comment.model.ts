/* eslint-disable prettier/prettier */
import {
  Table,
  Column,
  DataType,
  IsUUID,
  Model,
  PrimaryKey,
  ForeignKey,
  BelongsTo,
} from 'sequelize-typescript';
import { DataTypes } from 'sequelize';
import { Post } from './post.model';
@Table({
  tableName: 'comment',
  timestamps: true,
})
export class Comment extends Model<Comment> {
  @IsUUID(4)
  @PrimaryKey
  @Column({
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    allowNull: false,
  })
  id: string;
  @Column({ type: DataType.STRING, allowNull: false })
  userId: string;
  @Column({ type: DataType.STRING, allowNull: false })
  comment: string;
  @ForeignKey(() => Post)
  postId: string;
  @BelongsTo(() => Post)
  post: Post;
}

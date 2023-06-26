/* eslint-disable prettier/prettier */
import {
  Table,
  Column,
  Model,
  ForeignKey,
  BelongsTo,
  PrimaryKey,
  IsUUID,
} from 'sequelize-typescript';
import { DataTypes } from 'sequelize';
import { User } from './user.model';
import { Comment } from './comment.model';
@Table({
  tableName: 'postLike',
  timestamps: true,
})
export class CommentLike extends Model<CommentLike> {
  @IsUUID(4)
    @PrimaryKey 
    @Column({type: DataTypes.UUID,defaultValue : DataTypes.UUIDV4,allowNull: false})
    id : string;
   @Column({
    type: DataTypes.INTEGER,
    defaultValue: 0
  })
  likes: number;
  @ForeignKey(() => User)
  userId: string;
  @BelongsTo(() => User)
  user: User;
  @ForeignKey(() => Comment)
  commentId: string;
  @BelongsTo(() => Comment)
  comment: Comment; 
}

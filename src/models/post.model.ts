/* eslint-disable prettier/prettier */
import {Table, Column, DataType, IsUUID, Model, PrimaryKey,ForeignKey, BelongsTo, HasMany} from 'sequelize-typescript'
import {DataTypes} from 'sequelize'
import {Category} from './category.model'
import {Comment} from './comment.model'
import {User} from './user.model'
@Table({
    tableName : 'post',
    timestamps : true
})
export class Post extends Model<Post> {
    @IsUUID(4)
    @PrimaryKey 
    @Column({type: DataTypes.UUID,defaultValue : DataTypes.UUIDV4,allowNull: false})
    id : string;
    @Column({type: DataType.STRING,allowNull : false })
    title: string;
    @Column({type: DataType.STRING,allowNull : false })
    content: string;
    @HasMany(() => Comment, {
        onDelete: 'CASCADE'
    })
    comments : Comment[];
    @ForeignKey(() => Category)
    categoryId : string;
    @BelongsTo(() =>  Category) 
    category : Category;
    @ForeignKey(() => User)
    userId :  string;
     @BelongsTo(() => User, {
     onDelete: 'CASCADE', // Specify the cascading delete behavior
 })
 user: User

 }
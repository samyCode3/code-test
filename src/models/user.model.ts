/* eslint-disable prettier/prettier */
import {Table, Column, IsUUID, DataType, PrimaryKey, Model, HasMany} from 'sequelize-typescript'
import {DataTypes} from 'sequelize'
import {Post} from './post.model'
@Table({
     tableName: 'user',
     timestamps: true
})
export class User extends Model<User> {
     @IsUUID(4)
     @PrimaryKey 
     @Column({
      type: DataTypes.UUID,
      defaultValue : DataTypes.UUIDV4,
      allowNull: false
   })
   id : string;
     @Column({
        type: DataType.STRING,
        allowNull: false
     })
     fullname: string;

     @Column({
        type: DataType.STRING,
        allowNull: false
     })
    email : string

    @Column({ 
      type: DataType.STRING,
        allowNull: false
    }) 
    password : string;
    @HasMany(() => Post, {
      onDelete: 'CASCADE'
    })
    post: Post[]
}

// User.belongsTo(Post)
import { Column, DataType, Model, Table } from "sequelize-typescript";

interface UserCreationAttrs {
 id: number;
 email: string
}

@Table({ tableName: 'users' })
export class User extends Model<User,UserCreationAttrs> {
    @Column({ type: DataType.INTEGER, autoIncrement: true, primaryKey: true })
    id: number;
    @Column({type: DataType.STRING, allowNull: false})
    email: string;
    @Column({type: DataType.STRING, allowNull: false})
    password: string;
    @Column({type: DataType.BOOLEAN,defaultValue:false})
    banned: boolean;

} 
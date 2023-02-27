import { Column, CreatedAt, DataType, DeletedAt, Model, Table, UpdatedAt } from 'sequelize-typescript';

@Table({
    tableName: 'users',
    timestamps: true,
    paranoid: true,
})
export class Users extends Model<Users> {
    @Column({
        type: DataType.UUID,
        unique: true,
        defaultValue: DataType.UUIDV4,
        primaryKey: true,
    })
    id: string;

    @Column({
        type: DataType.STRING(30),
    })
    user_name: string;
    @Column({
        type: DataType.TEXT,
        // allowNull: false,
    })
    token: string;

    @Column({
        type: DataType.ARRAY(DataType.TEXT),
        defaultValue: []
    })
    resolved_question: string[];

    @CreatedAt
    createddate: Date;

    @UpdatedAt
    updateddate: Date;

    @DeletedAt
    deleteddate: Date;

    rows: any;
}

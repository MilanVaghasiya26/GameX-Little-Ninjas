import {
  Column,
  CreatedAt,
  DataType,
  Model,
  Table,
  UpdatedAt,
} from 'sequelize-typescript';

@Table({
  tableName: 'identify',
  timestamps: true,
  paranoid: true,
})
export class Identify extends Model<Identify> {
  @Column({
    type: DataType.UUID,
    unique: true,
    defaultValue: DataType.UUIDV4,
    primaryKey: true,
  })
  id: string;

  @Column({
    type: DataType.STRING(50),
    allowNull: false,
  })
  question: string;

  @Column({
    type: DataType.STRING(50),
    allowNull: false,
  })
  answer: string;

  @Column({
    type: DataType.ARRAY(DataType.TEXT),
    allowNull: false,
  })
  options: string[];

  @CreatedAt
  createddate: Date;

  @UpdatedAt
  updateddate: Date;
}

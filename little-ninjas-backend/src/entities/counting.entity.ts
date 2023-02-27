import {
  Column,
  CreatedAt,
  DataType,
  Model,
  Table,
  UpdatedAt,
} from 'sequelize-typescript';

@Table({
  tableName: 'counting',
  timestamps: true,
  paranoid: true,
})
export class Counting extends Model<Counting> {
  @Column({
    type: DataType.UUID,
    unique: true,
    defaultValue: DataType.UUIDV4,
    primaryKey: true,
  })
  id: string;

  @Column({
    type: DataType.ARRAY(DataType.TEXT),
    allowNull: false,
  })
  question: string[];

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  answer: number;

  @Column({
    type: DataType.ARRAY(DataType.INTEGER),
    allowNull: false,
  })
  options: number[];

  @CreatedAt
  createddate: Date;

  @UpdatedAt
  updateddate: Date;
}

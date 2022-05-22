import { BelongsTo, Column, ForeignKey, Model, Table } from 'sequelize-typescript';
import { Pack } from 'src/packages/entitities/packages.entity';
import { User } from 'src/users/entitities/users.entity';

@Table({ tableName: 'Sales', timestamps: false })
export class Sale extends Model {
  @Column({ primaryKey: true, autoIncrement: true })
  id: number;

  @Column
  paymentMethod: string;

  @Column
  paymentAmount: number;

  @Column
  saleDate: Date;

  @ForeignKey(() => User)
  @Column
  userId: number;

  @ForeignKey(() => Pack)
  @Column
  packId: number;

  @BelongsTo(() => User)
  user: User;

  @BelongsTo(() => Pack)
  pack: Pack;
}

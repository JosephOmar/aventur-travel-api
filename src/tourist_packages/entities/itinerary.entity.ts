import { PrimaryGeneratedColumn, Column } from 'typeorm';

export class Itinerary {
  @PrimaryGeneratedColumn()
  itinerary_id: number;
  @Column({ type: 'varchar', length: 5 })
  departure: string;
  @Column({ type: 'varchar', length: 5 })
  layover: string;
  @Column({ type: 'varchar', length: 5 })
  arrived: string;
}

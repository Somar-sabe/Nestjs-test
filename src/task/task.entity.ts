import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Task {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column({ nullable: true })
  description: string;

  // Add other columns/properties as needed

  constructor(title: string, description: string) {
    this.title = title;
    this.description = description;
  }
}

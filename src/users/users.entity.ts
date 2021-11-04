import {
  AfterInsert,
  AfterRemove,
  AfterUpdate,
  Column,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  email: string;

  @Column()
  password: string;

  @AfterInsert()
  logInsert() {
    console.log('Inserted User with the id', this.id);
  }

  @AfterUpdate()
  logUpdate() {
    console.log('Updated User with the id', this.id);
  }

  @AfterRemove()
  logRemove() {
    console.log('Removed User with the id', this.id);
  }
}

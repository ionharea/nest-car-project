import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './users.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  create(email: string, password: string) {
    const user = this.userRepository.create({ email, password });

    return this.userRepository.save(user);
  }

  findOne(id: number) {
    if (!id) return null;
    return this.userRepository.findOne(id);
  }

  find(email: string) {
    return this.userRepository.find({ email });
  }

  async update(id: number, attrs: Partial<User>) {
    const user = await this.findOne(id);

    if (!user) throw new NotFoundException('user not found');

    Object.assign(user, attrs);
    return this.userRepository.save(user);
  }

  async remove(id: number) {
    const user = await this.findOne(id);

    if (!user) throw new NotFoundException('user not found');
    return this.userRepository.remove(user);
  }
}

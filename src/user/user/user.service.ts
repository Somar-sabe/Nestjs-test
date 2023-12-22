import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}



  async findAll(): Promise<User[]> {
    return this.userRepository.find();
  }

  async createUser(userData: Partial<User>): Promise<User> {
    const newUser = this.userRepository.create(userData);
    if ('password' in userData) {
      await newUser.setPassword(userData.password);
    }
    return this.userRepository.save(newUser);
  }



  async deleteUser(id: number): Promise<void> {
    await this.userRepository.delete({ id }); 
  }
}

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Task } from '../task.entity';

@Injectable()
export class TaskService {
  constructor(
    @InjectRepository(Task)
    private readonly taskRepository: Repository<Task>,
  ) {}

  async findAll(): Promise<Task[]> {
    return this.taskRepository.find();
  }

  /*async findOne(id: number): Promise<Task | undefined> {
    try {
      return await this.taskRepository.findOneOrFail(id);
    } catch (error) {
      return undefined;
    }
  }*/

  async create(taskData: Partial<Task>): Promise<Task> {
    const newTask = this.taskRepository.create(taskData);
    return this.taskRepository.save(newTask);
  }

/*  async update(id: number, taskData: Partial<Task>): Promise<Task | undefined> {
    try {
      await this.taskRepository.update(id, taskData);
      return await this.taskRepository.findOne(id);
    } catch (error) {
      return undefined;
    }
  }*/

  async delete(id: number): Promise<void> {
    await this.taskRepository.delete(id);
  }
}

//taskcontroller

import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { TaskService } from './task/task.service';
import { Task } from './task.entity';

@Controller('tasks')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @Get()
  async findAll(): Promise<Task[]> {
    return this.taskService.findAll();
  }
//
 // @Get(':id')
 // async findOne(@Param('id') id: string): Promise<Task> {
 //   return this.taskService.findOne(+id);
 // }
//
  @Post()
  async createTask(@Body() taskData: Task): Promise<Task> {
    return this.taskService.create(taskData);
  }

 /* @Put(':id')
  async updateTask(@Param('id') id: string, @Body() taskData: Task): Promise<Task> {
    return this.taskService.update(+id, taskData);
  }*/

  @Delete(':id')
  async deleteTask(@Param('id') id: string): Promise<void> {
    return this.taskService.delete(+id);
  }
}

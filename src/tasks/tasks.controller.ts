import { Body, Controller, Get, Param, Post } from '@nestjs/common'
import { TasksService } from './tasks.service'
import { CreateTaskDto } from './dto/create-task.dto'

@Controller('tasks')
export class TasksController {
  constructor(private tasksService: TasksService) {}

  @Post()
  create(@Body() dto: CreateTaskDto) {
    return this.tasksService.createTask(dto)
  }

  @Get('/:value')
  getByValue(@Param('value') value: string) {
    return this.tasksService.getTaskByValue(value)
  }
}
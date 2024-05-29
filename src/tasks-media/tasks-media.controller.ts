import { Body, Controller, Get, Param, Post } from '@nestjs/common'
import { TasksMediaService } from './tasks-media.service'
import { CreateTaskMediaDto } from './dto/create-task-media.dto'

@Controller('tasks-media')
export class TasksMediaController {
  constructor(private tasksMediaService: TasksMediaService) {}

  @Post()
  create(@Body() dto: CreateTaskMediaDto) {
    return this.tasksMediaService.createTaskMedia(dto)
  }

  @Get('/:value')
  getByValue(@Param('value') value: string) {
    return this.tasksMediaService.getTaskMediaByValue(value)
  }
}
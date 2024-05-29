import { Body, Controller, Get, Param, Post } from '@nestjs/common'
import { TasksCommentsService } from './tasks-comments.service'
import { CreateTaskCommentDto } from './dto/create-task-comment.dto'

@Controller('tasks-media')
export class TasksCommentsController {
  constructor(private tasksCommentsService: TasksCommentsService) {}

  @Post()
  create(@Body() dto: CreateTaskCommentDto) {
    return this.tasksCommentsService.createTaskComment(dto)
  }

  @Get('/:value')
  getByValue(@Param('value') value: string) {
    return this.tasksCommentsService.getTaskCommentByValue(value)
  }
}
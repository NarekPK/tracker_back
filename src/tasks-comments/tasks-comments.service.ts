import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/sequelize'
import { TaskComment } from './tasks-comments.model'
import { CreateTaskCommentDto } from './dto/create-task-comment.dto'

@Injectable()
export class TasksCommentsService {

  constructor(@InjectModel(TaskComment) private TaskCommentRepository: typeof TaskComment) {}

  async createTaskComment(dto: CreateTaskCommentDto) {
    const task = await this.TaskCommentRepository.create(dto)
    return task
  }

  async getTaskCommentByValue(value: string) {
    const task = await this.TaskCommentRepository.findOne({where: {value}})
    return task
  }

}
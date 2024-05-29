import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/sequelize'
import { TaskMedia } from './tasks-media.model'
import { CreateTaskMediaDto } from './dto/create-task-media.dto'

@Injectable()
export class TasksMediaService {

  constructor(@InjectModel(TaskMedia) private taskMediaRepository: typeof TaskMedia) {}

  async createTaskMedia(dto: CreateTaskMediaDto) {
    const task = await this.taskMediaRepository.create(dto)
    return task
  }

  async getTaskMediaByValue(value: string) {
    const task = await this.taskMediaRepository.findOne({where: {value}})
    return task
  }

}
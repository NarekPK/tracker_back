import { Module } from '@nestjs/common'
import { TasksMediaService } from './tasks-media.service'
import { TasksMediaController } from './tasks-media.controller'
import { SequelizeModule } from '@nestjs/sequelize'
import { TaskMedia } from './tasks-media.model'
import { Task } from '../tasks/tasks.model'

@Module({
  controllers: [TasksMediaController],
  providers: [TasksMediaService],
  imports: [
    SequelizeModule.forFeature([TaskMedia, Task])
  ],
  exports: [
    TasksMediaService
  ]
})
export class TasksMediaModule {}
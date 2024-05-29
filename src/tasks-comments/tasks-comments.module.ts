import { Module } from '@nestjs/common'
import { TasksCommentsService } from './tasks-comments.service'
import { TasksCommentsController } from './tasks-comments.controller'
import { SequelizeModule } from '@nestjs/sequelize'
import { TaskComment } from './tasks-comments.model'
import { Task } from '../tasks/tasks.model'
import { User } from '../users/users.model'

@Module({
  controllers: [TasksCommentsController],
  providers: [TasksCommentsService],
  imports: [
    SequelizeModule.forFeature([TaskComment, Task, User])
  ],
  exports: [
    TasksCommentsService
  ]
})
export class TasksCommentsModule {}
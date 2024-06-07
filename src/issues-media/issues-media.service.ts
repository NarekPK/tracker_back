import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/sequelize'
import { IssueMedia } from './issues-media.model'
import { CreateIssueMediaDto } from './dto/create-issue-media.dto'

@Injectable()
export class IssuesMediaService {

  constructor(@InjectModel(IssueMedia) private issueMediaRepository: typeof IssueMedia) {}

  async createIssueMedia(dto: CreateIssueMediaDto) {
    const issue = await this.issueMediaRepository.create(dto)
    return issue
  }

  async getIssueMediaByValue(value: string) {
    const issue = await this.issueMediaRepository.findOne({where: {value}})
    return issue
  }

}
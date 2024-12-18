import { Injectable, HttpException, HttpStatus } from '@nestjs/common'
import { InjectModel } from '@nestjs/sequelize'
import { Board } from './boards.model'
import { ProjectsService } from '../projects/projects.service'
import { CreateBoardDto } from './dto/create-board.dto'
import { UpdateBoardDto } from './dto/update-board.dto'
import { Project } from '../projects/projects.model'

@Injectable()
export class BoardsService {

  constructor(
    @InjectModel(Board) private boardRepository: typeof Board,
    private projectsService: ProjectsService,
  ) {}

  async createBoard(dto: CreateBoardDto) {
    const board = await this.boardRepository.create(dto)
    if (dto.project_id) {
      const project = await this.projectsService.getProjectById(dto.project_id)
      await this.addProjectToBoard(board, project)
    }
    return board
  }

  async addProjectToBoard(board, project) {
    if (board && project ) {
      await board.$add('project', project)
    } else {
      throw new HttpException('Проект или доска не найдены', HttpStatus.NOT_FOUND)
    }
  }

  async getWorkspaceBoards(workspace_id: string) {
    const boards = await this.boardRepository.findAll({
      where: { workspace_id },
      include: {
        model: Project,
        through: { attributes: [] },
        attributes: ['project_id']
      }
    })
    return boards
  }

  async getBoardById(board_id: string) {
    const board = await this.boardRepository.findOne({ where: { board_id }})
    return board
  }

  async updateBoard(board_id: string, dto: UpdateBoardDto) {
    await this.boardRepository.update(dto, { where: { board_id }})
    const board = this.getBoardById(board_id)
    return board
  }

  async deleteBoard(board_id: string) {
    await this.boardRepository.destroy({ where: { board_id }})
    return { deleted: true }
  }

}
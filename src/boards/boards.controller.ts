import { Body, Controller, Get, Param, Post, Patch, Delete, Req, UseGuards } from '@nestjs/common'
import { BoardsService } from './boards.service'
import { CreateBoardDto } from './dto/create-board.dto'
import { AccessTokenGuard } from '../common/guards/access-token.guard'
import { Request } from 'express'

@Controller('boards')
export class BoardsController {
  constructor(private boardsService: BoardsService) {}

  @UseGuards(AccessTokenGuard)
  @Post('create-board')
  create(@Body() dto: CreateBoardDto, project_id) {
    return this.boardsService.createBoard(dto, project_id)
  }

  @UseGuards(AccessTokenGuard)
  @Get('get-boards')
  getWorkspaceBoards(@Req() request: Request) {
    return this.boardsService.getWorkspaceBoards(request.user['workspace_id'])
  }

  @UseGuards(AccessTokenGuard)
  @Get('get-board/:id')
  getBoardById(@Param('id') id: string) {
    return this.boardsService.getBoardById(id)
  }

  @UseGuards(AccessTokenGuard)
  @Patch('update-board')
  updateBoard(@Body() boardDto: CreateBoardDto) {
    return this.boardsService.updateBoard(boardDto)
  }

  @UseGuards(AccessTokenGuard)
  @Delete('delete-board')
  deleteBoard(@Body() boardInfo: { board_id: string }) {
    return this.boardsService.deleteBoard(boardInfo)
  }
}
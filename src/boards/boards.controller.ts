import { Body, Controller, Get, Param, Post, Patch, Delete, Req, UseGuards } from '@nestjs/common'
import { BoardsService } from './boards.service'
import { CreateBoardDto } from './dto/create-board.dto'
import { AccessTokenGuard } from '../common/guards/access-token.guard'
import { Request } from 'express'
import { Board } from './boards.model'
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger'

@ApiTags('Boards')
@Controller('boards')
export class BoardsController {
  constructor(private boardsService: BoardsService) {}

  @ApiOperation({summary: 'Create board'})
  @ApiResponse({status: 200, type: Board})
  @UseGuards(AccessTokenGuard)
  @Post()
  create(@Body() dto: CreateBoardDto) {
    return this.boardsService.createBoard(dto)
  }

  @ApiOperation({summary: 'Get current workspace boards'})
  @ApiResponse({status: 200, type: [Board]})
  @UseGuards(AccessTokenGuard)
  @Get()
  getWorkspaceBoards(@Req() request: Request) {
    return this.boardsService.getWorkspaceBoards(request.user['workspace_id'])
  }

  @ApiOperation({summary: 'Get board'})
  @ApiResponse({status: 200, type: Board})
  @UseGuards(AccessTokenGuard)
  @Get(':id')
  getBoardById(@Param('id') id: string) {
    return this.boardsService.getBoardById(id)
  }

  @ApiOperation({summary: 'Update board'})
  @ApiResponse({status: 200, type: Board})
  @UseGuards(AccessTokenGuard)
  @Patch(':id')
  updateBoard(@Param('id') id: string, @Body() boardDto: CreateBoardDto) {
    return this.boardsService.updateBoard(id, boardDto)
  }

  @ApiOperation({summary: 'Delete board'})
  @ApiResponse({status: 200, type: Boolean})
  @UseGuards(AccessTokenGuard)
  @Delete(':id')
  deleteBoard(@Param('id') id: string) {
    return this.boardsService.deleteBoard(id)
  }
}
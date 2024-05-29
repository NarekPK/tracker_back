import { Body, Controller, Get, Param, Post } from '@nestjs/common'
import { BoardsService } from './boards.service'
import { CreateBoardDto } from './dto/create-board.dto'

@Controller('boards')
export class BoardsController {
  constructor(private boardsService: BoardsService) {}

  @Post()
  create(@Body() dto: CreateBoardDto) {
    return this.boardsService.createBoard(dto)
  }

  @Get('/:value')
  getByValue(@Param('value') value: string) {
    return this.boardsService.getBoardByValue(value)
  }
}
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CommentsService } from '../services/comments.service';
import { CreateCommentsDto, UpdateCommentsDto } from '../dtos/commets.dto';

@Controller('comments')
export class CommentsController {
  constructor(private commentService: CommentsService) {}
  @Get()
  getComments() {
    return this.commentService.getAllComments();
  }

  @Get(':commentId')
  findComment(@Param('commentId') commentId: string) {
    return this.commentService.getOneComment(commentId);
  }

  @Post()
  createComment(@Body() payload: CreateCommentsDto) {
    return this.commentService.createComment(payload);
  }

  @Put(':commentId')
  updateComment(
    @Body() payload: UpdateCommentsDto,
    @Param('commentId') commentId: string,
  ) {
    return this.commentService.updateComment(payload, commentId);
  }

  @Delete(':commentId')
  deleteComment(@Param('commentId') commentId: string) {
    return this.commentService.deleteComment(commentId);
  }
}

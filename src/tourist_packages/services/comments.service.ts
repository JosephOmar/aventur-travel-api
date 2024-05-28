import { Injectable, NotFoundException } from '@nestjs/common';
import { Comment } from '../entities/comment.entity';
import { randomUUID } from 'crypto';
import { CreateCommentsDto, UpdateCommentsDto } from '../dtos/commets.dto';

@Injectable()
export class CommentsService {
  private comments: Comment[] = [
    {
      comment_id: randomUUID(),
      profile: 'fotito.com',
      content: 'El primer comentario',
      date: '28 de Marzo',
    },
  ];

  getAllComments() {
    return this.comments;
  }

  getOneComment(commentId: string) {
    const comment = this.comments.find(
      (comment) => comment.comment_id === commentId,
    );
    if (!comment) {
      throw new NotFoundException(`Comment ${commentId} not found`);
    }
    return comment;
  }

  getIndexComment(commentId: string) {
    const index = this.comments.findIndex(
      (comment) => comment.comment_id === commentId,
    );
    if (index === -1) {
      throw new NotFoundException(`comment ${commentId} not found`);
    }
    return index;
  }

  createComment(payload: CreateCommentsDto) {
    const newComment = {
      comment_id: randomUUID(),
      ...payload,
    };
    this.comments.push(newComment);
    return newComment;
  }

  updateComment(payload: UpdateCommentsDto, commentId: string) {
    const comment = this.getOneComment(commentId);
    const index = this.getIndexComment(commentId);
    this.comments[index] = {
      ...comment,
      ...payload,
    };
    return this.comments[index];
  }

  deleteComment(commentId: string) {
    const index = this.getIndexComment(commentId);
    this.comments.splice(index, 1);
    return { message: `comment ${commentId} eliminado` };
  }
}

import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Put,
  Delete,
} from '@nestjs/common';
import { SegmentsService } from '../services/segments.service';
import { CreateSegmentsDto, UpdateSegmentsDto } from '../dtos/segments.dto';
@Controller('segments')
export class SegmentsController {
  constructor(private segmentService: SegmentsService) {}

  @Get()
  getSegments() {
    return this.segmentService.getAllSegments();
  }

  @Get(':segmentId')
  findSegment(@Param('segmentId') segmentId: string) {
    return this.segmentService.getOneSegment(segmentId);
  }

  @Post()
  createSegment(@Body() payload: CreateSegmentsDto) {
    return this.segmentService.createSegment(payload);
  }

  @Put(':segmentId')
  updateSegment(
    @Body() payload: UpdateSegmentsDto,
    @Param('segmentId') segmentId: string,
  ) {
    return this.segmentService.updateSegment(payload, segmentId);
  }

  @Delete(':segmentId')
  deleteSegment(@Param('segmentId') segmentId: string) {
    return this.segmentService.deleteSegment(segmentId);
  }
}

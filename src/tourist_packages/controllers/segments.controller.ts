import { Controller, Get, Param } from '@nestjs/common';

@Controller('segments')
export class SegmentsController {
  @Get()
  getSegments() {
    return `Todos los segments`;
  }

  @Get(':segmentId')
  findSegment(@Param('segmentId') segmentId: string) {
    return `Segment con Id => ${segmentId}`;
  }
}

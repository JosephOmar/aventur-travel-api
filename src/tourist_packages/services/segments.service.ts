import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateSegmentsDto, UpdateSegmentsDto } from '../dtos/segments.dto';
import { randomUUID } from 'crypto';
import { Segment } from '../entities/segment.entity';

@Injectable()
export class SegmentsService {
  private segments: Segment[] = [
    {
      segment_id: randomUUID(),
      primary: 'International',
      secondary: 'Caribe',
    },
  ];

  getAllSegments() {
    return this.segments;
  }

  getOneSegment(segmentId: string) {
    const segment = this.segments.find(
      (segment) => segment.segment_id === segmentId,
    );
    if (!segment) {
      throw new NotFoundException(`segment ${segmentId} not found`);
    }
    return segment;
  }

  getIndexSegment(segmentId: string) {
    const index = this.segments.findIndex(
      (segment) => segment.segment_id === segmentId,
    );
    if (index === -1) {
      throw new NotFoundException(`segment ${segmentId} not found`);
    }
    return index;
  }

  createSegment(payload: CreateSegmentsDto) {
    const segment = {
      segment_id: randomUUID(),
      ...payload,
    };
    this.segments.push(segment);
    return segment;
  }

  updateSegment(payload: UpdateSegmentsDto, segmentId: string) {
    const segment = this.getOneSegment(segmentId);
    const index = this.getIndexSegment(segmentId);
    this.segments[index] = {
      ...segment,
      ...payload,
    };
    return this.segments[index];
  }

  deleteSegment(segmentId: string) {
    const index = this.getIndexSegment(segmentId);
    this.segments.splice(index, 1);
    return { message: `segment ${segmentId} deleted` };
  }
}

import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Put,
  Delete,
  ParseIntPipe,
} from '@nestjs/common';

import { AgentsService } from '../services/agents.service';
import { CreateAgentsDto, UpdateAgentsDto } from '../dtos/agents.dtos';

@Controller('agents')
export class AgentsController {
  constructor(private agentsService: AgentsService) {}

  @Get()
  getAgents() {
    return this.agentsService.findAll();
  }

  @Get(':agentId')
  findAgent(@Param('agentId', ParseIntPipe) agentId: number) {
    return this.agentsService.findOne(agentId);
  }

  @Post()
  create(@Body() payload: CreateAgentsDto) {
    return this.agentsService.create(payload);
  }

  @Put(':agentId')
  update(
    @Param('agentId', ParseIntPipe) agentId: number,
    @Body() payload: UpdateAgentsDto,
  ) {
    return this.agentsService.update(agentId, payload);
  }

  @Delete(':agentId')
  delete(@Param('agentId', ParseIntPipe) agentId: number) {
    return this.agentsService.delete(agentId);
  }
}

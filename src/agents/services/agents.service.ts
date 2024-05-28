import { Injectable, NotFoundException } from '@nestjs/common';
import { Agent } from '../entities/agent.entity';
import { CreateAgentsDto, UpdateAgentsDto } from '../dtos/agents.dtos';

@Injectable()
export class AgentsService {
  private counterId = 1;
  private agents: Agent[] = [
    {
      agent_id: 1,
      name: 'Joseph Omar',
      lastname: 'Meza Torres',
      phone: '980002076',
      mail: 'Joseph.meza@unmsm.edu.pe',
      profile: 'jejeje',
    },
  ];

  findAll() {
    return this.agents;
  }

  findOne(agentId: number) {
    const agent = this.agents.find((agent) => agent.agent_id === agentId);
    if (!agent) {
      throw new NotFoundException(`Agent #${agentId} not found`);
    }
    return agent;
  }

  create(payload: CreateAgentsDto) {
    this.counterId = this.counterId + 1;
    const newAgent = {
      agent_id: this.counterId,
      ...payload,
    };

    this.agents.push(newAgent);
    return newAgent;
  }

  update(agentId: number, payload: UpdateAgentsDto) {
    const agent = this.findOne(agentId);
    if (agent) {
      const index = this.agents.findIndex(
        (agent) => agent.agent_id === agentId,
      );
      this.agents[index] = {
        ...agent,
        ...payload,
      };
      return this.agents[index];
    }
    return null;
  }

  delete(agentId: number) {
    const agent = this.findOne(agentId);
    if (!agent) {
      throw new NotFoundException(`Agent #${agentId} not found`);
    }
    const index = this.agents.findIndex((agent) => agent.agent_id === agentId);
    this.agents.splice(index, 1);
    return { message: `Agent eliminado` };
  }
}

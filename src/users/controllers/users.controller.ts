import {
  Controller,
  Get,
  Param,
  Post,
  Put,
  Delete,
  Body,
  ParseIntPipe,
} from '@nestjs/common';
import { CreateUsersDtos, UpdateUsersDtos } from '../dtos/users.dtos';
import { UsersService } from '../services/users.service';
import { ApiTags, ApiOperation } from '@nestjs/swagger';

@ApiTags('users')
@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get()
  @ApiOperation({ summary: 'List all Users' })
  getUsers() {
    return this.usersService.findAllUsers();
  }

  @Get(':userId')
  findUsers(@Param('userId', ParseIntPipe) userId: number) {
    return this.usersService.findOneUser(userId);
  }

  @Post()
  createUsers(@Body() payload: CreateUsersDtos) {
    return this.usersService.createUser(payload);
  }

  @Put(':userId')
  updateUsers(
    @Body() payload: UpdateUsersDtos,
    @Param('userId', ParseIntPipe) userId: number,
  ) {
    return this.usersService.updateUser(payload, userId);
  }

  @Delete(':userId')
  deleteUsers(@Param('userId', ParseIntPipe) userId: number) {
    return this.usersService.deleteUser(userId);
  }
}

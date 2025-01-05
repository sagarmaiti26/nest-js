import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { UsersService } from './users.service';
@Controller('users')
export class UsersController {
  /*
   
    GET -- /users/:id
    POST -- /users
    PATCH -- /users/:id
    GET -- /users/intern
    */
  constructor(private readonly usersService: UsersService) {}
  // GET -- /users
  @Get()
  getAllUsers(@Query('role') role: 'ENGINEER' | 'DOCTOR' | 'INTERN') {
    return this.usersService.getAllUsers(role);
  }

  @Get('interns')
  getInternData() {
    return this.usersService.getInternData();
  }

  @Get(':id')
  getUserById(@Param('id') id: string) {
    return this.usersService.getUserById(+id);
  }

  @Post()
  createUser(
    @Body()
    user: {
      name: string;
      email: string;
      role: 'ENGINEER' | 'DOCTOR' | 'INTERN';
    },
  ) {
    return this.usersService.createUser(user);
  }
  @Put(':id')
  updateOne(
    @Param('id') id: string,
    @Body()
    updateUser: {
      name?: string;
      email?: string;
      role?: 'ENGINEER' | 'DOCTOR' | 'INTERN';
    },
  ) {
    return this.usersService.updateOne(+id, updateUser);
  }

  @Delete(':id')
  deleteUser(@Param('id')id:string){
    return this.usersService.deleteUser(+id)
  }
}

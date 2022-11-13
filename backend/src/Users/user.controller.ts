import { Controller, Get,Post,Body} from '@nestjs/common';
import { createUserDto } from './dto/create-user.dto';
import { UserService } from './user.service';
@Controller('users')
export class AppController {
  constructor(private UserService: UserService){

  }
  @Post()
  create(@Body() userDto: createUserDto) {
    return this.UserService.createUser(userDto)
  }
  
  @Get()
  getAll(){
    return this.UserService.getUsers()
  }
}
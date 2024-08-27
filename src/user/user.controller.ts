import { Body, Controller, Delete, Get, Param, Post } from "@nestjs/common";
import { CreateUserDto } from "./dto/create.user.dto";

@Controller('user')
export class UserController {
  @Post()
  create(@Body() userPayload: CreateUserDto) {}

  @Get(':id')
  getUserById(@Param('id') id: string) {}

  @Get(':id')
  getColumnsByUser(@Param('id') id: string) {}

  @Delete(':id')
  deleteColumnById(@Param('id') id: string) {}
}

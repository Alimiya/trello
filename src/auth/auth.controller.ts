import { Body, Controller, Get, Post } from "@nestjs/common";
import { AuthDto } from "./dto/auth.dto";

@Controller('auth')
export class AuthController {
  @Post('login')
  login(@Body() authPayload: AuthDto) {}

  @Get('logout')
  logout(@Body() authPayload: AuthDto) {}
}

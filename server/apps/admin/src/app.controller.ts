import { Controller, Get, Post, UseInterceptors, UploadedFile } from '@nestjs/common';
import { AppService } from './app.service';
import { FileInterceptor } from '@nestjs/platform-express'

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }


  //上传文件接口
  @Post('upload')
  @UseInterceptors(FileInterceptor('file'))//拦截器
  async upload(@UploadedFile('file') file){
      return {
        url:`http://localhost:3001/uploads/${file.filename}`
      }
  }
}

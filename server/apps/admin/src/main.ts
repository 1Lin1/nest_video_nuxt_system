import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';


// 接口文档相关
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';
import { NestExpressApplication } from '@nestjs/platform-express';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule); //使用nestexpess处理上传文件问题

  //允许跨域
  app.enableCors();
  //将本地图片回调
  app.useStaticAssets('uploads',{
    prefix:'/uploads'
  })

  
  app.useGlobalPipes(new ValidationPipe());
  app.setGlobalPrefix('api');

  const options = new DocumentBuilder()
    .setTitle('nest_lib_demo 接口文档')
    .setDescription('nest-youToBe api docs')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api-docs', app, document);

  await app.listen(3001);
}
bootstrap();

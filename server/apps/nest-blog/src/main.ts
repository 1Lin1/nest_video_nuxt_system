import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';



import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {

 
  const app = await NestFactory.create(AppModule);
  
  //允许跨域
  app.enableCors();
  
  app.useGlobalPipes(new ValidationPipe());
  app.setGlobalPrefix('api');

  const options = new DocumentBuilder()
    .setTitle('nest-youToBe 接口文档')
    .setDescription('nest-youToBe api docs')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api-docs', app, document);


 

  await app.listen(5001);
}
bootstrap();

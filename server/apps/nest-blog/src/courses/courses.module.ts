import { Module } from '@nestjs/common';
import { CoursesController } from './courses.controller';
import { TypegooseModule } from 'nestjs-typegoose';
import { Course } from './course.model';

@Module({
  imports:[
    TypegooseModule.forFeature([Course])
  ],
  controllers: [CoursesController]
})
export class CoursesModule {}

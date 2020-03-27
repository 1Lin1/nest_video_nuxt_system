import { Controller } from '@nestjs/common';
import {Crud} from'nestjs-mongoose-crud'
import {ApiTags} from '@nestjs/swagger';
import { Course } from './course.model';
import { InjectModel } from 'nestjs-typegoose';
import { ModelType } from '@typegoose/typegoose/lib/types';

@Controller('courses')


@Crud({
    model:Course
})
@Controller('courses')
@ApiTags('视频课程接口')
export class CoursesController {
    constructor(
        @InjectModel(Course) private readonly model:ModelType<Course>
    ){}
}

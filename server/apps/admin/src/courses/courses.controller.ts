import { Controller } from '@nestjs/common';
import {Crud} from 'nestjs-mongoose-crud'
import { Course } from 'libs/db/src/models/course.model';
import { ApiTags } from '@nestjs/swagger';
import { InjectModel } from 'nestjs-typegoose';
import { ModelType, ReturnModelType } from '@typegoose/typegoose/lib/types';
 
@Crud({
    model:Course
})


@Controller('courses')
@ApiTags('课程')
export class CoursesController {
    constructor(@InjectModel(Course) private readonly model:ReturnModelType<typeof Course>){}
}

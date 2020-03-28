import { Controller, Get } from '@nestjs/common';
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

    //后端管理界面一些初始配置
  @Get('option')
  option(){
    return {
      title:'主课程列表',
            page:false,
            align:'center',
            menuAlign:'center',
            column:[
            
               {
                label:'视频标题',
                prop:'name'
              },
              {
                label:'视频封面/文件',
                prop:'cover'
              },
              {
                label:'视频描述',
                prop:'videoDescription'
              },
            ]
    }
  }
}



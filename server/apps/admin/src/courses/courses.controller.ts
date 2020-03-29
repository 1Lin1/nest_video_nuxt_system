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
            align:'center',
            menuAlign:'center',
            translate:false,//修改不转化 避免多$报错
            column:[
               {
                label:'视频标题',
                prop:'name',
                search:true,//开启搜索
                regex:true,//开启模糊查询
                row:true,
              },
              {
                label:'视频封面/文件',
                prop:'cover',
                type:'upload',
                listType:'picture-img',
                action:'upload', //上传接口
                width:120,
                height:120,
                row:true,
              },
              {
                label:'视频描述',
                prop:'videoDescription',
                row:true
              },
            ]
    }
  }
}



import { Controller, Get } from '@nestjs/common';
import {Crud} from 'nestjs-mongoose-crud'
import { Episode } from 'libs/db/src/models/episode.model';
import { ApiTags } from '@nestjs/swagger';
import { InjectModel } from 'nestjs-typegoose';
import { ModelType, ReturnModelType } from '@typegoose/typegoose/lib/types';
import { Course } from '@libs/db/models/course.model';


@Crud({
    model:Episode
})
@Controller('episodes')
@ApiTags('课时')
export class EpisodesController {
    constructor(
      @InjectModel(Episode) private readonly model:ReturnModelType<typeof Episode>,
      @InjectModel(Course)  private readonly courseModel:ReturnModelType<typeof Course>
      ){}


    @Get('option')
   async option(){

    //找到所有课程
    const courses  = (await this.courseModel.find()).map(v => ({
      label:v.name,
      value:v._id,
    }))
    return {
            title:'课时管理',
            align:'center',
            menuAlign:'center',
            translate:false,//修改不转化 避免多$报错
            column:[
              {
                label:'所属课程',
                prop:'course',
                type:'select',
              
                dicData:courses,

                row:true,
              },
               {
                label:'课时名称',
                prop:'name',
                search:true,//开启搜索
                regex:true,//开启模糊查询
              },
              {
                label:'课时文件',
                prop:'file'
              }
             
            ]
    }
  }
  }

import { Controller, Get } from '@nestjs/common';
import {Crud} from 'nestjs-mongoose-crud'
import { Episode } from 'libs/db/src/models/episode.model';
import { ApiTags } from '@nestjs/swagger';
import { InjectModel } from 'nestjs-typegoose';
import { ModelType, ReturnModelType } from '@typegoose/typegoose/lib/types';


@Crud({
    model:Episode
})
@Controller('episodes')
@ApiTags('课时')
export class EpisodesController {
    constructor(@InjectModel(Episode) private readonly model:ReturnModelType<typeof Episode>){}

    @Get('option')
    option(){
    return {
            title:'分集列表',
            page:false,
            align:'center',
            menuAlign:'center',
            column:[
              {
                label:'主课程ID',
                prop:'course'
              },
               {
                label:'课时名称',
                prop:'name'
              },
              {
                label:'课时文件',
                prop:'file'
              }
             
            ]
    }
  }
  }

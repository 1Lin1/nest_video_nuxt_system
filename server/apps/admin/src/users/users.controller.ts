import { Controller, Get } from '@nestjs/common';
import { InjectModel } from 'nestjs-typegoose';
import { ModelType, ReturnModelType } from '@typegoose/typegoose/lib/types';
import { User } from 'libs/db/src/models/user.model';
import {Crud} from 'nestjs-mongoose-crud'
import { ApiTags } from '@nestjs/swagger';

// 自动生成接口
@Crud({
    model:User,
})
// 注入db中的User模型
@Controller('users')
@ApiTags('用户接口')
export class UsersController {
    constructor( @InjectModel(User) private readonly model:ReturnModelType<typeof User>){}
      //后端管理界面一些初始配置
  @Get('option')
  option(){
    return {
            title:'用户列表',
            align:'center',
            menuAlign:'center',

            translate:false,//修改不转化 避免多$报错
            column:[
            
               {
                label:'用户名',
                prop:'userName',
                sortable:true,//开启排序
                search:true,//开启搜索
                regex:true,//开启模糊查询
              },
              {
                label:'密码',
                prop:'passWord'
              },
            
            ]
    }
  }
}

import { Controller } from '@nestjs/common';
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
}

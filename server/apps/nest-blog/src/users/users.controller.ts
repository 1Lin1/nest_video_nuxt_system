import { Controller } from '@nestjs/common';
import { Crud } from 'nestjs-mongoose-crud';
import { User } from './user.model';
import { ApiTags } from '@nestjs/swagger';
import { InjectModel } from 'nestjs-typegoose';
import { ModelType } from '@typegoose/typegoose/lib/types';


@Crud({
    model:User
})
@Controller('users')
@ApiTags('用户接口')

export class UsersController {
    constructor(
        @InjectModel(User) private readonly model:ModelType<User>
    ){}
}

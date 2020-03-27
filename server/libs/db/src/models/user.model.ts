import { prop, modelOptions} from '@typegoose/typegoose';
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';


//创建时添加时间搓
@modelOptions({
    schemaOptions:{
        timestamps:true,
    }
})
export class User {
    @ApiProperty({ description: '用户名',example:'用户名' })
    @IsNotEmpty({message:'用户名不能为空'})
    @prop()
    userName:string 

    @ApiProperty({ description: '用户密码',example:'用户密码' })
    @IsNotEmpty({message:'用户密码不能为空'})
    @prop()
    passWord:string
}

import { prop, modelOptions} from '@typegoose/typegoose';
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';


//创建时添加时间搓
@modelOptions({
    schemaOptions:{
        timestamps:true,
    }
})
export class Episode {
    @ApiProperty({ description: '课时标题',example:'课时标题' })
    @IsNotEmpty({message:'课时标题不能为空'})
    @prop()
    name:string 

    @ApiProperty({ description: '课时文件',example:'课时文件' })
    @IsNotEmpty({message:'课时文件不能为空'})
    @prop()
    file:string
}

import { prop, modelOptions, arrayProp, Ref} from '@typegoose/typegoose';
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';
import {Episode} from './episode.model'


//创建时添加时间搓
@modelOptions({
    schemaOptions:{
        timestamps:true,
        toJSON:{virtuals:true},
    }
})
export class Course {
    @ApiProperty({ description: '视频标题',example:'视频标题' })
    @IsNotEmpty({message:'视频标题不能为空'})
    @prop()
    name:string 

    @ApiProperty({ description: '视频封面',example:'视频封面' })
    @IsNotEmpty({message:'视频封面不能为空'})
    @prop()
    cover:string

    @ApiProperty({ description: '视频描述',example:'视频描述' })
    @prop()
    videoDescription:string


    //参考课时model 课时为一个数组 @arrayProp为mongoose准备 下面为类型声明  主键为course的id 外键是课时的course
    @arrayProp({
        ref:'Episode',
        localField:'_id',
        foreignField:'course',
    })
    episodes:Ref<Episode>[]
}

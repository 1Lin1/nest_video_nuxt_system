import { prop, modelOptions, Ref} from '@typegoose/typegoose';
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';
import { Course } from './course.model';


//创建时添加时间搓
@modelOptions({
    schemaOptions:{
        timestamps:true,
        toJSON:{virtuals:true},
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

    //指向关联course
    @ApiProperty({description:'指向课程'})
    @prop({ref:'Course'})
    course:Ref<Course>

}

import { prop} from '@typegoose/typegoose';
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class Course{
    @ApiProperty({description:'视频标题',example:'视频标题'})
    @IsNotEmpty({message:'视频标题不能为空'})
    @prop()
    videoName:string

    @ApiProperty({description:'视频内容',example:'视频内容'})
    @IsNotEmpty({message:'视频内容不能为空'})
    @prop()
    videoContent:string

    @ApiProperty({description:'视频封面',example:'视频封面'})
    @IsNotEmpty({message:'视频封面不能为空'})
    @prop()
    videoCover:string

}
import { Module, Global } from '@nestjs/common';
import { DbService } from './db.service';
import { TypegooseModule } from 'nestjs-typegoose';
import { User } from './models/user.model';
import { Course } from './models/course.model';
import { Episode } from './models/episode.model';

const models = TypegooseModule.forFeature([
  User,
  Course,
  Episode
])

//声明全局
@Global()
@Module({
  imports:[
     TypegooseModule.forRoot("mongodb://localhost:27017/nest_lib_demo", {
      useNewUrlParser: true,
      useUnifiedTopology:true,
      useCreateIndex:true,
      useFindAndModify:false,
    }),

    models
  ],
  providers: [DbService],
  exports: [DbService,models],
})
export class DbModule {}

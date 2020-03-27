import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostsModule } from './posts/posts.module';
import {TypegooseModule} from 'nestjs-typegoose'
import { CoursesModule } from './courses/courses.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    // PostsModule,
    TypegooseModule.forRoot("mongodb://localhost:27017/nest_youtobe", {
      useNewUrlParser: true
    }),
    UsersModule,
    CoursesModule,

  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

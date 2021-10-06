import * as mongoose from 'mongoose';

import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { BakeriesModule } from './bakeries/bakeries.module';
import { CalculatorsModule } from './calculators/calculators.module';
import { CommentsModule } from './comments/comments.module';
import { ConfigModule } from '@nestjs/config';
import { LoggerMiddleware } from 'src/common/middlewares/logger.middleware';
import { MongooseModule } from '@nestjs/mongoose';
import { RecipeModule } from './recipe/recipe.modules';
import { RecipeService } from './recipe/recipe.service';
import { RecipesController } from './recipe/recipe.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './users/users.module';
import { BakeryModule } from './bakery/bakery.module';
import { LikesModule } from './likes/likes.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    // TypeOrmModule.forRoot({
    //   type: 'mysql',
    //   host: process.env.MYSQL_HOST,
    //   port: 3306,
    //   username: process.env.MYSQL_USERNAME,
    //   password: process.env.MYSQL_PASSWORD,
    //   database: 'nest',
    //   entities: [],
    //   synchronize: true,
    // }),
    MongooseModule.forRoot(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    }),
    RecipeModule,
    UserModule,
    CalculatorsModule,
    BakeriesModule,
    AuthModule,
    CommentsModule,
    BakeryModule,
    LikesModule,
  ],
  controllers: [AppController, RecipesController],
  providers: [AppService, RecipeService],
  // controllers: [RecipesController],
  // providers: [AppService, RecipeService],
})
export class AppModule implements NestModule {
  private readonly isDev: boolean = process.env.MODE === 'dev' ? true : false;
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('*');
    mongoose.set('debug', this.isDev);
  }
}

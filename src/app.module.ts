import { Module } from '@nestjs/common';
import { SubjectsModule } from './subjects/subjects.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './config/typeorm.config';
import { ActivityModule } from './activity/activity.module';
import { AtivityController } from './ativity/ativity.controller';

@Module({
  imports: [TypeOrmModule.forRoot(typeOrmConfig), SubjectsModule, ActivityModule],
  controllers: [AtivityController],
})
export class AppModule {}

import { Module } from '@nestjs/common';
import { SubjectsController } from './subjects.controller';
import { SubjectsRepository } from './subjects.repository';
import { SubjectsService } from './subjects.service';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([SubjectsRepository])],
  controllers: [SubjectsController],
  providers: [SubjectsService],
})
export class SubjectsModule {}

import {
  Body,
  Controller,
  Get,
  Logger,
  Post,
  Query,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { AddSubjectDto } from './dto/add-subjects.dto';
import { GetSubjectsDto } from './dto/get-subjects.dto';
import { Subjects } from './subjects.entity';
import { SubjectsService } from './subjects.service';

@Controller('subjects')
export class SubjectsController {
  logger = new Logger('subjects');

  constructor(private subjectsService: SubjectsService) {}

  @Get()
  getSubjects(
    @Query(ValidationPipe) filterdto: GetSubjectsDto,
  ): Promise<Subjects[]> {
    this.logger.verbose('Getting list of subjects from database ... ');
    return this.subjectsService.getSubjects(filterdto);
  }

  @Post()
  @UsePipes(ValidationPipe)
  addSubject(@Body() createSubjectDto: AddSubjectDto): Promise<Subjects> {
    this.logger.verbose('Adding new subject into database ...');
    return this.subjectsService.addSubjects(createSubjectDto);
  }
}

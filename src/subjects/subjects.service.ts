import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AddSubjectDto } from './dto/add-subjects.dto';
import { GetSubjectsDto } from './dto/get-subjects.dto';
import { Subjects } from './subjects.entity';
import { SubjectsRepository } from './subjects.repository';

@Injectable()
export class SubjectsService {
  constructor(
    @InjectRepository(SubjectsRepository)
    private subjectRepository: SubjectsRepository,
  ) {}

  async getSubjects(filterDto: GetSubjectsDto): Promise<Subjects[]> {
    return this.subjectRepository.getSubjects(filterDto);
  }

  async addSubjects(filterDto: AddSubjectDto): Promise<Subjects> {
    return this.subjectRepository.addSubjects(filterDto);
  }
}

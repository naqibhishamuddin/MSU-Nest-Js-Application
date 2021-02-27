import { EntityRepository, Repository } from 'typeorm';
import { InternalServerErrorException, Logger } from '@nestjs/common';

import { AddSubjectDto } from './dto/add-subjects.dto';
import { GetSubjectsDto } from './dto/get-subjects.dto';
import { Subjects } from './subjects.entity';

@EntityRepository(Subjects)
export class SubjectsRepository extends Repository<Subjects> {
  logger = new Logger();
  async getSubjects(fitlerDto: GetSubjectsDto): Promise<Subjects[]> {
    const { search } = fitlerDto;
    const query = this.createQueryBuilder('subjects');
    if (search) {
      query.where(
        '(subjects.name LIKE :search OR subjects.code LIKE :search)',
        {
          search: `%${search}%`,
        },
      );
    }

    const subjects = await query.getMany();
    return subjects;
  }

  async addSubjects(fitlerDto: AddSubjectDto): Promise<Subjects> {
    const { name, creditHour, code } = fitlerDto;

    const subjects = new Subjects();
    subjects.name = name;
    subjects.creditHour = creditHour;
    subjects.code = code;
    try {
      await subjects.save();
    } catch {
      throw new InternalServerErrorException('Subjects cannot add');
    }
    this.logger.log('Subject added successfully');
    return subjects;
  }
}

import { IsNotEmpty, IsOptional } from 'class-validator';

export class AddSubjectDto {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  creditHour: number;

  @IsOptional()
  code: string;
}

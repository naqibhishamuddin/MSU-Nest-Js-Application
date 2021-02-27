import { IsOptional } from 'class-validator';

export class GetSubjectsDto {
  @IsOptional()
  search: string;
}

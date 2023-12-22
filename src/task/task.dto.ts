import { IsNotEmpty, IsString } from 'class-validator';

export class CreateTaskDto {
  @IsNotEmpty()
  @IsString()
  readonly title: string;

  @IsString()
  readonly description?: string;

  // Add other properties as needed with appropriate validation decorators
}

export class UpdateTaskDto {
  @IsString()
  readonly title?: string;

  @IsString()
  readonly description?: string;

  // Add other properties as needed with appropriate validation decorators
}

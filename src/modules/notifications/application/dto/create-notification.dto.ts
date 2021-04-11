import { IsString } from 'class-validator';

export class CreateNotificationDto {
  @IsString()
  message: string;

  @IsString()
  created_by: string;
}

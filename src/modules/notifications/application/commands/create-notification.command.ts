import { CreateNotificationDto } from "../dto/create-notification.dto";

export class CreateNotificationCommand {
  public createdBy: string;
  public message: string;

  constructor(createNotificationDto: CreateNotificationDto) {
    this.createdBy = createNotificationDto.created_by;
    this.message = createNotificationDto.message;
  }
}

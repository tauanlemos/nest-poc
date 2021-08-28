import { Body, Controller, Post, Get } from '@nestjs/common';
import { CreateNotificationDto } from '../../../modules/notifications/application/dto/create-notification.dto';
import { Notification } from '../../../modules/notifications/infrastructure/schemas/notification.entity';
import { NotificationService } from 'src/modules/notifications/application/services/notification.service';

@Controller('notifications')
export class NotificationsController {
  constructor(private readonly service: NotificationService) {}

  @Post()
  async create(@Body() createNotificationDto: CreateNotificationDto) {
    return this.service.create(createNotificationDto);
  }

  @Get()
  async findAll(): Promise<Notification[]> {
    return this.service.findAll();
  }
}

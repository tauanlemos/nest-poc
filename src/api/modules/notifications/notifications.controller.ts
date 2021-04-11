import { Body, Controller, Post, Get } from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { CreateNotificationDto } from '../../../modules/notifications/application/dto/create-notification.dto';
import { Notification } from '../../../modules/notifications/domain/entities/notification.entity';
import { CreateNotificationCommand } from '../../../modules/notifications/application/commands/create-notification.command';
import { GetNotificationsQuery } from '../../../modules/notifications/application/queries/get-notifications.query';

@Controller('notifications')
export class NotificationsController {
  constructor(
    private readonly commandBus: CommandBus,
    private readonly queryBus: QueryBus,
    ) {}

  @Post()
  async create(@Body() createNotificationDto: CreateNotificationDto) {
    return this.commandBus.execute(
      new CreateNotificationCommand(
        createNotificationDto.message,
        createNotificationDto.created_by,
      ),
    );
  }

  @Get()
  async findAll(): Promise<Notification[]> {
    return this.queryBus.execute(new GetNotificationsQuery());
  }
}

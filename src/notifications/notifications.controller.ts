import { Body, Controller, Post, Get } from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { CreateNotificationDto } from './dto/create-notification.dto';
import { Notification } from './entities/notification.entity';
import { CreateNotificationCommand } from './commands/create-notification.command';
import { GetNotificationsQuery } from './queries/get-notifications.query';

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

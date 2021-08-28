import { Injectable } from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { CreateNotificationCommand } from '../commands/create-notification.command';
import { CreateNotificationDto } from '../dto/create-notification.dto';
import { GetNotificationsQuery } from '../queries/get-notifications.query';
import { Notification } from '../../infrastructure/schemas/notification.entity';

@Injectable()
export class NotificationService {
  constructor(
    private readonly commandBus: CommandBus,
    private readonly queryBus: QueryBus,
  ) {}

  async create(createNotificationDto: CreateNotificationDto) {
    return this.commandBus.execute(
      new CreateNotificationCommand(createNotificationDto),
    );
  }

  async findAll(): Promise<Notification[]> {
    return this.queryBus.execute(new GetNotificationsQuery());
  }
}

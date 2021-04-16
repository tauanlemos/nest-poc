import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { Inject } from '@nestjs/common';
import { CreateNotificationCommand } from '../../commands/create-notification.command';
import {
  NOTIFICATION_WRITE_REPOSITORY,
  INotificationWriteRepository,
} from '../../../domain/repositories/notification.write.repository';
import { NotificationModel } from 'src/modules/notifications/domain/models/notification.model';

@CommandHandler(CreateNotificationCommand)
export class CreateNotificationHandler
  implements ICommandHandler<CreateNotificationCommand> {
  constructor(
    @Inject(NOTIFICATION_WRITE_REPOSITORY)
    private readonly repository: INotificationWriteRepository,
  ) {}

  async execute(command: CreateNotificationCommand) {
    const notification = new NotificationModel(
      null,
      command.message,
      command.created_by,
    );

    return this.repository.create(notification);
  }
}

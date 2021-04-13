import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { MongooseModule } from '@nestjs/mongoose';
import {
  Notification,
  NotificationSchema,
} from './infrastructure/schemas/notification.entity';
import { CommandHandlers, QueryHandlers } from './application/handlers';
import { NotificationsController } from '../../api/modules/notifications/notifications.controller';
import { NOTIFICATION_READ_REPOSITORY } from './domain/repositories/notification.read.repository';
import { NotificationReadRepository } from './infrastructure/repositories/notification.read.repository';
import { NOTIFICATION_WRITE_REPOSITORY } from './domain/repositories/notification.write.repository';
import { NotificationWriteRepository } from './infrastructure/repositories/notification.write.repository';

@Module({
  imports: [
    CqrsModule,
    MongooseModule.forFeature([
      {
        name: Notification.name,
        schema: NotificationSchema,
      },
    ]),
  ],
  controllers: [NotificationsController],
  providers: [
    ...CommandHandlers,
    ...QueryHandlers,
    {
      provide: NOTIFICATION_READ_REPOSITORY,
      useClass: NotificationReadRepository,
    },
    {
      provide: NOTIFICATION_WRITE_REPOSITORY,
      useClass: NotificationWriteRepository,
    },
  ],
})
export class NotificationsModule {}

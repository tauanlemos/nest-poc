import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { MongooseModule } from '@nestjs/mongoose';
import {
  Notification,
  NotificationSchema,
} from './domain/entities/notification.entity';
import { CommandHandlers, QueryHandlers } from './application/handlers';
import { NotificationsController } from '../../api/modules/notifications/notifications.controller';

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
  providers: [...CommandHandlers, ...QueryHandlers],
})
export class NotificationsModule {}

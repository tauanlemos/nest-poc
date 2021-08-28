import { Module } from '@nestjs/common';
import { NotificationsModule } from 'src/modules/notifications/notifications.module';
import { NotificationsController } from './modules/notifications/notifications.controller';

@Module({
  imports: [NotificationsModule],
  controllers: [NotificationsController],
})
export class ApiModule {}

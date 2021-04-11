import { Module } from '@nestjs/common';
import { NotificationsModule } from './notifications/notifications.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://database/notifications'),
    NotificationsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}

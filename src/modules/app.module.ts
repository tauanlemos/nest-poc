import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ApiModule } from 'src/api/api.module';
// import { NotificationsModule } from './notifications/notifications.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://database/notifications'),
    // NotificationsModule,
    ApiModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}

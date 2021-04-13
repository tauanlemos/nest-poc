import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { INotificationReadRepository } from '../../domain/repositories/notification.read.repository';
import { Notification, NotificationDocument } from '../schemas/notification.entity';
import { NotificationModel } from '../../domain/models/notification.model';
import { Injectable } from '@nestjs/common';

@Injectable()
export class NotificationReadRepository implements INotificationReadRepository {
  constructor(
    @InjectModel(Notification.name)
    private readonly notificationModel: Model<NotificationDocument>,
  ) {}
  async getAll(): Promise<NotificationModel[]> {
    const data = await this.notificationModel.find().exec();

    const returnData = data.map((item: Notification) => {
      return new NotificationModel(item.id, item.message, item.created_by);
    });

    return returnData;
  }
}

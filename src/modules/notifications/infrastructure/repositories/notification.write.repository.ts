import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { INotificationWriteRepository } from '../../domain/repositories/notification.write.repository';
import {
  Notification,
  NotificationDocument,
} from '../schemas/notification.entity';
import { NotificationModel } from '../../domain/models/notification.model';
import { Injectable } from '@nestjs/common';

@Injectable()
export class NotificationWriteRepository
  implements INotificationWriteRepository {
  constructor(
    @InjectModel(Notification.name)
    private readonly notificationDbModel: Model<NotificationDocument>,
  ) {}

  async create(notification: NotificationModel): Promise<NotificationModel> {
    const instance = new this.notificationDbModel(notification.toCreate());
    const item = await instance.save();

    return new NotificationModel(item.id, item.message, item.created_by);
  }
}

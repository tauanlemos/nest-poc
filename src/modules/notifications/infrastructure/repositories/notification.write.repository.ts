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

  public async create(
    notification: NotificationModel,
  ): Promise<NotificationModel> {
    const instance = new this.notificationDbModel(this.toCreate(notification));
    const item = await instance.save();

    return new NotificationModel(item.id, item.message, item.created_by);
  }

  private toCreate(notification: NotificationModel): any {
    return {
      message: notification.message,
      created_by: notification.createdBy,
    };
  }
}

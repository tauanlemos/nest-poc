import { NotificationModel } from '../models/notification.model';

export const NOTIFICATION_WRITE_REPOSITORY = 'NOTIFICATION WRITE REPOSITORY';

export interface INotificationWriteRepository {
  create(notification: NotificationModel): Promise<NotificationModel>;
}

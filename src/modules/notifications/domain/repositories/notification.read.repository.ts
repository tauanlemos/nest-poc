import { NotificationModel } from '../models/notification.model';

export const NOTIFICATION_READ_REPOSITORY = 'NOTIFICATION READ REPOSITORY';

export interface INotificationReadRepository {
  getAll(): Promise<NotificationModel[]>;
}

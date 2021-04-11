import { CreateNotificationHandler } from './commands/create-notification.handler';
import { GetNotificationsHandler } from './queries/get-notifications.handler';

export const CommandHandlers = [CreateNotificationHandler];

export const QueryHandlers = [GetNotificationsHandler];
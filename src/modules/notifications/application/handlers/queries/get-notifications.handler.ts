import { Inject } from '@nestjs/common';
import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import {
  NOTIFICATION_READ_REPOSITORY,
  INotificationReadRepository,
} from '../../../domain/repositories/notification.read.repository';
import { GetNotificationsQuery } from '../../queries/get-notifications.query';

@QueryHandler(GetNotificationsQuery)
export class GetNotificationsHandler
  implements IQueryHandler<GetNotificationsQuery> {
  constructor(
    @Inject(NOTIFICATION_READ_REPOSITORY)
    private readonly repository: INotificationReadRepository,
  ) {}

  async execute(query: GetNotificationsQuery) {
    return this.repository.getAll();
  }
}

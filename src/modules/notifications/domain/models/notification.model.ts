import { AggregateRoot } from "@nestjs/cqrs";

export class NotificationModel extends AggregateRoot {
  constructor(public id, public message: string, public createdBy: string) {
    super();
  }
}

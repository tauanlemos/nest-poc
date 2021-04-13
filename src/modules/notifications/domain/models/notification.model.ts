import { AggregateRoot } from "@nestjs/cqrs";

export class NotificationModel extends AggregateRoot {
  constructor(private id, private message, private createdBy) {
    super();
  }

  toCreate() {
    return {
      message: this.message,
      created_by: this.createdBy,
    };
  }
}

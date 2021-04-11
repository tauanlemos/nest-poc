export class CreateNotificationCommand {
  constructor(
    public readonly message: string,
    public readonly created_by: string,
  ) {}
}

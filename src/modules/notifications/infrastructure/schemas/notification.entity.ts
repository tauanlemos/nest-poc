import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { NotificationModel } from '../../domain/models/notification.model';

export type NotificationDocument = Notification & Document;

@Schema()
export class Notification {
  @Prop()
  id: string;

  @Prop()
  message: string;

  @Prop()
  created_by: string;

  to(): NotificationModel {
    return new NotificationModel(this.id, this.message, this.created_by);
  }
}

export const NotificationSchema = SchemaFactory.createForClass(Notification);
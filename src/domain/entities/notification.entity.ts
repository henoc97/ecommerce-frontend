import { NotificationType } from "../enums/NotificationType.enum";
import IUser from "./user.entity";

export interface INotification {
  id: number;
  userId: number;
  type: NotificationType;
  content: string;
  isRead: boolean;
  sentAt: Date;

  user?: IUser;
}

export default INotification;

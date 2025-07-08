export interface INotification {
  id: number;
  userId: number;
  type: string;
  content: string;
  isRead: boolean;
  sentAt: Date;
}

export default INotification;

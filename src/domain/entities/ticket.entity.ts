export interface ITicket {
  id: number;
  userId: number;
  status: string;
  createdAt: Date;
  updatedAt: Date;
  subject: string;
  description: string;
  response?: string;
}

export default ITicket;

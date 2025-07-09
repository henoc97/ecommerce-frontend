import { TicketStatus } from "../enums/TicketStatus.enum";
import IUser from "./user.entity";

export interface ITicket {
  id: number;
  userId: number;
  status: TicketStatus;
  createdAt: Date;
  updatedAt: Date;
  subject: string;
  description: string;

  response?: string;
  user?: IUser;
}

export default ITicket;

import { AuditLogAction } from "../enums/AuditLogAction.enum";
import IUser from "./user.entity";

export interface IAuditLog {
  id: number;
  userId: number;
  action: AuditLogAction;
  entity: string;
  entityId: number;
  changes: any;
  updatedAt: Date;
  createdAt: Date;

  user?: IUser;
}

export default IAuditLog;

export interface IAuditLog {
  id: number;
  userId: number;
  action: string;
  entity: string;
  entityId: number;
  changes: any;
  updatedAt: Date;
  createdAt: Date;
}

export default IAuditLog;

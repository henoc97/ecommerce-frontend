export interface IUser {
  id: number;
  email: string;
  password?: string;
  name: string;
  phone?: string;
  isEmailVerified: boolean;
  authProvider: string;
  googleId?: string;
  lastLogin?: Date;
  role: string;
  updatedAt: Date;
  createdAt: Date;
}

export default IUser;

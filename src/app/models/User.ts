export interface UserModel {
  _id: string;
  username: number;
  password?: string;
  email: string;
  role: string;
  token?: string;
  active?: boolean;
  createdAt?: string;
  updatedAt?: string;
}



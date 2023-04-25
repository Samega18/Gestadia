export interface IUserGestadia {
  id?: number;
  password_hash?: string;
  email?: string;
}

export const defaultValue: Readonly<IUserGestadia> = {};

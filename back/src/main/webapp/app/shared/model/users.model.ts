export interface IUsers {
  id?: number;
  name?: string | null;
  password?: string | null;
  email?: string | null;
}

export const defaultValue: Readonly<IUsers> = {};

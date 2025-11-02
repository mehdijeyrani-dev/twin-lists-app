export interface IUser {
  id: string;
  username: string;
  email: string;
}

export interface IAuthContext {
  user: IUser | null;
  token: string | null;
  login: (user: IUser, token: string) => void;
  logout: () => void;
}

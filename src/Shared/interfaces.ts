export interface IChatMessage {
  user: IUser;
  text: string;
}

export interface IUser {
  id: string;
  name: string;
}

export interface UserType {
  email: string;
  username: string;
  _id: number;
}

export interface TokenType {
  refresh: string;
  access: string;
}

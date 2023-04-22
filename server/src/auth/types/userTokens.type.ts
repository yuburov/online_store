import { Tokens } from './tokens.type';

type User = {
  id: number;
  email: string;
};

export type UserTokens = Tokens & {
  user: User;
};

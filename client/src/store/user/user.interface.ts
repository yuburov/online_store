import { IUser } from "@/interfaces/user.interface"

export interface IUserState {
	email: string
}

export interface ITokens {
  access_token: string
  refresh_token: string
}

export interface IInitialState {
  user: IUserState | null
  isLoading: boolean
}

export interface IEmailPassword {
  email: string
  password: string
}

export interface IAuthResponse extends ITokens {
  user: IUser
}

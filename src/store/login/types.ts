import type {Action} from 'redux'

export type User = {
  id: string
  password: string
  token: string
}

export type State = {
  loggedIn: boolean
  logggedUser: User
}

export type LogoutAction = Action<'logout'>
export type LoginAction = Action<'login'> & {
  loggedUser: User
}
export type Actions = LogoutAction | LoginAction

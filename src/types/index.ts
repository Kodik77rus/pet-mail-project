export type Props = {
  children: JSX.Element
}

export type UsersState = {
  folders: Array<UserFolder>;
}

export type UserFolder = { name: string; messages: Array<string> }

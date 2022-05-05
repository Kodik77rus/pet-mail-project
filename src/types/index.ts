export type Props = {
  children: JSX.Element
}

export type UsersState = {
  folders: Array<{ name: string; messages: Array<string> }>;
}

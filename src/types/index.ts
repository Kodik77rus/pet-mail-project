export type Props = {
  children: JSX.Element
}

export type UsersState = {
  folders: UserFolder[];
}

export type SideBarProps = {
  userfolders: UserFolder[],
}

export type GetUserResponse = {
  customFolders: UserFolder[]
}

export type UserFolder = { name: string; messagesId: string[] }

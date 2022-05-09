import { PropsWithChildren } from 'react'

export type LayoutProps = PropsWithChildren<{}>

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


import { UserFolder } from '../types'

export const localStorageData = {
  _userfolderkey: 'user_folders',

  get userFolder(): UserFolder[] {
    // @ts-ignore
    return JSON.parse(localStorage.getItem(this._userfolderkey))
  },
  set userFolder(data: UserFolder[]) {
    localStorage.setItem(this._userfolderkey, JSON.stringify(data))
  },
}

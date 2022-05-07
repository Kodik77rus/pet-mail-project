import instanceAxios from '../config'

import { GetUserResponse } from '../types'

export const getUserFoldersRequest = async () => {
  const { data } = await instanceAxios.get<GetUserResponse>('/user')
  return data.customFolders
}

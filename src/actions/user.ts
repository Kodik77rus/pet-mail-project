import { setFolder, createFolder, updateFolder, deleteFolder } from '../reducers'
import { AppDispatch } from '../store'
import { localStorageData } from '../utils'

import { UserFolder } from '../types'

export const setUserFolder = (folders: UserFolder[]) => (dispatch: AppDispatch) => {
  dispatch(setFolder(folders))
}

export const createUserFolder = (folderName: string) => (dispatch: AppDispatch) => {
  if (!folderName) {
    alert('emty folder name')
    return
  }

  const existFolders = localStorageData.userFolder
  if (existFolders.find(f => f.name === folderName)) {
    alert('folder alredy exist')
    return
  }

  dispatch(createFolder({ name: folderName, messagesId: [] }))
}

export const updateUserFolder = (folder: UserFolder) => (dispatch: AppDispatch) => {
  dispatch(updateFolder(folder))
}

export const deleteUserFolder = (folder: UserFolder) => (dispatch: AppDispatch) => {
  dispatch(deleteFolder(folder))
}

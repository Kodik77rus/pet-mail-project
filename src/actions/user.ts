import { setFolder, createFolder, updateFolder, deleteFolder } from '../reducers'
import { AppDispatch } from '../store'

import { UserFolder } from '../types'

export const setUserFolder = (folders: UserFolder[]) => (dispatch: AppDispatch) => {
  dispatch(setFolder(folders))
}

export const createUserFolder = (folder: UserFolder) => (dispatch: AppDispatch) => {
  dispatch(createFolder(folder))
}

export const updateUserFolder = (folder: UserFolder) => (dispatch: AppDispatch) => {
  dispatch(updateFolder(folder))
}

export const deleteUserFolder = (folder: UserFolder) => (dispatch: AppDispatch) => {
  dispatch(deleteFolder(folder))
}

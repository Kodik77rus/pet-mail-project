import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { UsersState, UserFolder } from '../types'

const initialState: UsersState = {
  folders: [],
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setFolder: (state, action: PayloadAction<UserFolder[]>) => {
      state.folders = action.payload
    },
    createFolder: (state, action: PayloadAction<UserFolder>) => {
      state.folders.push(action.payload)
    },
    updateFolder: (state, action: PayloadAction<UserFolder>) => {

    },
    deleteFolder: (state, action: PayloadAction<UserFolder>) => {

    },
  },
})

export const {
  setFolder,
  createFolder,
  updateFolder,
  deleteFolder,
} = userSlice.actions

export default userSlice.reducer

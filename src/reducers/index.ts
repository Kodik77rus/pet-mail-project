import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { UsersState, UserFolder } from '../types'

const initialState = {
  folders: [],
} as UsersState

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setFolder: (state, action: PayloadAction<Array<UserFolder>>) => {

    },
    createFolder: (state, action: PayloadAction<UserFolder>) => {

    },
    updateFolder: (state, action: PayloadAction<UserFolder>) => {

    },
    deleteFolder: (state, action: PayloadAction<UserFolder>) => {

    },
  },
})

export const { setFolder, createFolder, updateFolder, deleteFolder } = userSlice.actions

export default userSlice.reducer

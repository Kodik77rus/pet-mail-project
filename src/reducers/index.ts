import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { UsersState } from '../types'

const initialState = {
  folders: [],
} as UsersState

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setFolder: (state, action: PayloadAction<string>) => {

    },
    createFolder: (state, action: PayloadAction<string>) => {

    },
    updateFolder: (state, action: PayloadAction<string>) => {

    },
    deleteFolder: (state, action: PayloadAction<string>) => {

    },
  },
})

export const { setFolder, createFolder, updateFolder, deleteFolder } = userSlice.actions

export default userSlice.reducer

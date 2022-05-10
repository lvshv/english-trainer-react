import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface UserState {
  isLoading: boolean
  user: {}
  isAuth: boolean
}

const initialState: UserState = {
  isLoading: false,
  user: {},
  isAuth: false,
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserLoading(state, action) {
      state.isLoading = action.payload
    },
    setUserData(state, action) {
      state.user = action.payload
    },
    loadUser(state, action) {},
  },
})

// Action creators are generated for each case reducer function
export const { setUserLoading, setUserData } = userSlice.actions

export default userSlice.reducer

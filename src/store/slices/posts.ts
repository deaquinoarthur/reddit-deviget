import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { PostsStateType } from 'types/posts'

export const postsDataInitialState: PostsStateType = {
  veryFirstPost: '',
  posts: []
}

export const postsDataSlice = createSlice({
  name: 'postsData',
  initialState: postsDataInitialState,
  reducers: {
    setPosts: (state, action: PayloadAction<PostsStateType>) => ({
      ...state,
      ...action.payload
    })
  }
})

export const { setPosts } = postsDataSlice.actions

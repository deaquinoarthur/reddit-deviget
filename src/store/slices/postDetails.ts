import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { PostDetailsStateType } from 'types/posts'

export const postDetailsInitialState: PostDetailsStateType = {
  data: {
    author: '',
    thumbnail: '',
    title: ''
  },
  showDetails: false
}

export const postDetailsSlice = createSlice({
  name: 'postDetails',
  initialState: postDetailsInitialState,
  reducers: {
    setPostDetails: (state, action: PayloadAction<PostDetailsStateType>) => ({
      ...state,
      ...action.payload
    })
  }
})

export const { setPostDetails } = postDetailsSlice.actions

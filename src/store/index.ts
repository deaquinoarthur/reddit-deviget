import { createSlice, configureStore, PayloadAction } from '@reduxjs/toolkit'
import { PostDetailsStateType, PostsStateType } from 'types/posts'

const postsDataInitialState: PostsStateType = {
  data: []
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

const postDetailsInitialState: PostDetailsStateType = {
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

const store = configureStore({
  reducer: {
    posts: postsDataSlice.reducer,
    postDetails: postDetailsSlice.reducer
  }
})

type RootState = ReturnType<typeof store.getState>

export const selectPostsData = (state: RootState) => state.posts.data
export const selectPostDetails = (state: RootState) => state.postDetails

export default store

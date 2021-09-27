import { createSlice, configureStore, PayloadAction } from '@reduxjs/toolkit'

export type PostCardDataType = {
  id: string
  numComments: number
  thumbnail: string
  title: string
  created: number
  author: string
  clicked: boolean
}

type PostsDataType = {
  data: PostCardDataType[]
}

const postsDataInitialState: PostsDataType = {
  data: [],
}

export const postsDataSlice = createSlice({
  name: 'postsData',
  initialState: postsDataInitialState,
  reducers: {
    setPosts: (state, action: PayloadAction<PostsDataType>) => ({
      ...state,
      ...action.payload
    })
  }
})

export const { setPosts } = postsDataSlice.actions

type PostDetailsDataType = {
  data: {
    author: string
    thumbnail: string
    title: string
  }
  showDetails?: boolean
}

const postDetailsInitialState: PostDetailsDataType = {
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
    setPostDetails: (state, action: PayloadAction<PostDetailsDataType>) => ({
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

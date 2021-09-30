import { configureStore } from '@reduxjs/toolkit'
import { postsDataSlice, setPosts } from 'store/slices/posts'
import { postDetailsSlice, setPostDetails } from './slices/postDetails'

export { setPosts, setPostDetails }

const store = configureStore({
  reducer: {
    postsData: postsDataSlice.reducer,
    postDetails: postDetailsSlice.reducer
  }
})

type RootState = ReturnType<typeof store.getState>

export const selectPostsData = (state: RootState) => state.postsData
export const selectPostDetails = (state: RootState) => state.postDetails

export default store

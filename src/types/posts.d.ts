export type PostCardType = {
  id: string
  numComments: number
  thumbnail: string
  title: string
  created: number
  author: string
  clicked: boolean
}

export type PostDetailsType = {
  author: string
  thumbnail: string
  title: string
}

export type HomeType = {
  posts: PostCardType[]
}

// Redux Store Types
export type PostsStateType = {
  data: PostCardType[]
}

export type PostDetailsStateType = {
  data: {
    author: string
    thumbnail: string
    title: string
  }
  showDetails?: boolean
}
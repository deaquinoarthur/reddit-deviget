export type URLType = {
  [key: string]: string | number | undefined
}

export type PostCardType = {
  author: string
  clicked: boolean
  created: number
  id: string
  name?: string
  numComments: number
  thumbnail: string
  title: string
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
  veryFirstPost?: string
  posts: PostCardType[]
}

export type PostDetailsStateType = {
  data: {
    author: string
    thumbnail: string
    title: string
  }
  showDetails?: boolean
}

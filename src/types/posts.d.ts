export type URLType = {
  [key: string]: string | number | undefined
}

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
  paginationAfter: string
  paginationBefore: string
  posts: PostCardType[]
}

// Redux Store Types
export type PostsStateType = {
  paginationAfter?: string | null
  paginationBefore?: string | null
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

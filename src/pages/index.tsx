import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { sortPostsByDate } from 'utils/sortPostsByDate'
import { setPosts } from 'store'

import HomeLayout from 'templates/HomeLayout'
import { HomeType } from 'types/posts'

export default function Home(props: HomeType) {
  const dispatch = useDispatch()

  const { posts } = props

  useEffect(() => {
    dispatch(setPosts({ data: posts }))
  })

  return <HomeLayout />
}

export const getStaticProps = async () => {
  const postsWithOnlyNeededProperties = (dataFromResponse: any) => {
    return dataFromResponse
      .map((item: typeof dataFromResponse) => ({
        id: item.data.id,
        numComments: item.data.num_comments,
        thumbnail: item.data.thumbnail,
        title: item.data.title,
        created: item.data.created,
        author: item.data.author,
        clicked: item.data.clicked
      }))
      .sort(sortPostsByDate)
  }

  const posts = await fetch('https://www.reddit.com/r/webdev.json?limit=50')
    .then((data) => data.json())
    .then((res) => postsWithOnlyNeededProperties(res.data.children))

  // NOTE: I was having internet issues, so I set this local api mock
  // const localPosts = await fetch('http://localhost:3333/posts')
  //   .then((data) => data.json())
  //   .then((res) => postsWithOnlyNeededProperties(res))

  return {
    props: {
      posts
    }
  }
}

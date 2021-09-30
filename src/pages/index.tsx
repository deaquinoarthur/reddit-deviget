import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { setPosts } from 'store'

import { fetchData } from 'utils/fetchData'

import { HomeType } from 'types/posts'

import HomeLayout from 'templates/HomeLayout'

export default function Home(props: HomeType) {
  const dispatch = useDispatch()

  const { posts } = props

  useEffect(() => {
    dispatch(setPosts({ veryFirstPost: posts[0].name, posts }))
  })

  return <HomeLayout />
}

export const getStaticProps = async () => {
  const { posts } = await fetchData('https://www.reddit.com/r/webdev.json', {
    limit: 9
  })

  return {
    props: {
      posts
    }
  }
}

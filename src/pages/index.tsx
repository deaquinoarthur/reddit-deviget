import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { setPosts } from 'store'

import { fetchData } from 'utils/fetchData'

import { HomeType } from 'types/posts'

import HomeLayout from 'templates/HomeLayout'

export default function Home(props: HomeType) {
  const dispatch = useDispatch()

  const { paginationAfter, paginationBefore, posts } = props

  useEffect(() => {
    dispatch(setPosts({ paginationBefore, paginationAfter, posts }))
  })

  return <HomeLayout />
}

export const getStaticProps = async () => {
  const { after, before, posts } = await fetchData(
    'https://www.reddit.com/r/webdev.json',
    {
      limit: 10
    }
  )

  return {
    props: {
      paginationAfter: after,
      paginationBefore: before,
      posts
    }
  }
}

import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { selectPostsData, setPosts } from 'store'

import { fetchData } from 'utils/fetchData'

import Button from 'components/Button'

import * as Style from './styles'

const Paginator = () => {
  const dispatch = useDispatch()

  const { posts, veryFirstPost } = useSelector(selectPostsData)

  const [initialFirstPost, setInitialFirstPost] = useState(veryFirstPost)

  useEffect(() => {
    setInitialFirstPost(veryFirstPost)
  }, [veryFirstPost])

  const isTheVeryFirstPost = posts[0]?.name === initialFirstPost

  const before = isTheVeryFirstPost ? null : posts[0]?.name
  const after = posts[posts.length - 1]?.name

  const getPreviousPosts = async () => {
    if (before) {
      const { posts } = await fetchData(
        'https://www.reddit.com/r/webdev.json',
        {
          before: before,
          limit: 10
        }
      )

      dispatch(
        setPosts({
          posts
        })
      )
    }
  }

  const getNextPosts = async () => {
    const { posts } = await fetchData('https://www.reddit.com/r/webdev.json', {
      after: after,
      count: 10,
      limit: 10
    })

    dispatch(
      setPosts({
        posts
      })
    )
  }

  return (
    <>
      {posts.length !== 0 && (
        <Style.Paginator>
          {!isTheVeryFirstPost && (
            <Button
              asLink
              color="white"
              noUnderline
              onClick={() => getPreviousPosts()}
            >
              Previous
            </Button>
          )}

          <Button
            asLink
            color="white"
            noUnderline
            onClick={() => getNextPosts()}
          >
            Next
          </Button>
        </Style.Paginator>
      )}
    </>
  )
}

export default Paginator

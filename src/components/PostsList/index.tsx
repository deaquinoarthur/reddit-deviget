import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Button from 'components/Button'
import PostCard from 'components/PostCard'
import Text from 'components/Text'

import { selectPostsData, setPostDetails, setPosts } from 'store'

import * as Style from './styles'

const PostsList = () => {
  const dispatch = useDispatch()

  const posts = useSelector(selectPostsData)

  const [dismissAll, setDismissAll] = useState(false)

  const dismissAllPosts = () => {
    setDismissAll(true)

    setTimeout(function () {
      dispatch(setPosts({ data: [] }))

      dispatch(
        setPostDetails({
          data: { author: '', thumbnail: '', title: '' },
          showDetails: false
        })
      )
    }, 700)
  }

  return (
    <Style.PostsList dismissAll={dismissAll}>
      <Style.Header>
        <Text type="heading4" color="white">
          Reddit posts
        </Text>

        {!!posts.length && (
          <Button
            text="Dismiss all posts"
            fullWidth
            asLink
            color="white"
            onClick={() => dismissAllPosts()}
          />
        )}
      </Style.Header>

      {posts.length ? (
        <Style.Container>
          {posts.map((item, index) => (
            <PostCard key={index} {...item} />
          ))}
        </Style.Container>
      ) : (
        <Style.NoPosts>There are no posts here. :(</Style.NoPosts>
      )}
    </Style.PostsList>
  )
}

export default PostsList

import { useDispatch, useSelector } from 'react-redux'

import Button from 'components/Button'
import PostCard from 'components/PostCard'
import Text from 'components/Text'

import * as Style from './styles'
import { selectPostsData, setPostDetails, setPosts } from 'store'
import { useState } from 'react'

const PostsList = () => {
  const dispatch = useDispatch()

  const posts = useSelector(selectPostsData)

  return (
    <Style.PostsList>
      <Style.Header>
        <Text type="heading3" color="white">
          Reddit posts
        </Text>
      </Style.Header>

      <Style.Container>
        {posts?.map((item, index) => (
          <PostCard key={index} {...item} />
        ))}
      </Style.Container>

      <Button
        text="Dismiss all"
        fullWidth
        onClick={() => {
          dispatch(setPosts({ data: [] }))
          dispatch(
            setPostDetails({
              data: { author: '', thumbnail: '', title: '' },
              showDetails: false
            })
          )
        }}
      />
    </Style.PostsList>
  )
}

export default PostsList

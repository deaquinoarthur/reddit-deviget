import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { CloseOutline } from '@styled-icons/evaicons-outline/CloseOutline'
import { IosArrowRight } from '@styled-icons/fluentui-system-filled/IosArrowRight'
import { ImageFill } from '@styled-icons/bootstrap/ImageFill'

import Button from 'components/Button'
import Text from 'components/Text'

import timestampToHours from 'utils/timestampToHours'

import * as Style from './styles'
import { selectPostsData, setPostDetails, setPosts } from 'store'
import { PostCardType } from 'types/posts'

const PostCard = (props: PostCardType) => {
  const { id, numComments, thumbnail, clicked, title, created, author } = props

  const dispatch = useDispatch()

  const posts = useSelector(selectPostsData)

  const [isDismissed, setIsDismissed] = useState(false)

  const showPostDetails = () => {
    dispatch(
      setPostDetails({
        data: {
          author,
          thumbnail,
          title
        },
        showDetails: true
      })
    )

    const updatedPosts = posts.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          clicked: true
        }
      }

      return item
    })

    dispatch(setPosts({ data: updatedPosts }))
  }

  const dismissPost = () => {
    const postToBeRemovedIndex = posts.findIndex((item) => item.id === id)

    const lastPostIndex = posts.length - 1
    const firstPostIndex = 0

    const createPostDetails = (postIndex: number) => {
      return {
        author: posts[postIndex].author,
        thumbnail: posts[postIndex].thumbnail,
        title: posts[postIndex].title
      }
    }

    const getUpdatedPostDetails = () => {
      if (postToBeRemovedIndex === lastPostIndex && posts.length > 1) {
        return {
          ...createPostDetails(posts.length - 2)
        }
      } else if (postToBeRemovedIndex === firstPostIndex && posts.length > 1) {
        return {
          ...createPostDetails(postToBeRemovedIndex + 1)
        }
      } else if (posts.length === 1) {
        return {
          author: '',
          thumbnail: '',
          title: ''
        }
      } else {
        return {
          ...createPostDetails(postToBeRemovedIndex + 1)
        }
      }
    }

    const updatedPostsList = posts.filter((item) => item.id !== id)

    dispatch(setPosts({ data: updatedPostsList }))

    dispatch(
      setPostDetails({
        data: { ...getUpdatedPostDetails() },
        showDetails: false
      })
    )
  }

  return (
    <Style.PostCard isDismissed={isDismissed}>
      <Style.Header clicked={clicked}>
        <Button asLink color="primary" large noUnderline>
          {author}
        </Button>

        <Text type="paragraphRegular" color="gray">
          {timestampToHours(created)} hours ago
        </Text>
      </Style.Header>

      <Style.Content
        onClick={() => showPostDetails()}
        aria-label="Show Details"
      >
        <Style.ThumbnailWrapper>
          {thumbnail ? (
            <Style.Thumbnail src={thumbnail} alt="User thumbnail" />
          ) : (
            <ImageFill size={24} />
          )}
        </Style.ThumbnailWrapper>

        <Text type="paragraphRegular" emphasis>
          {title.substr(0, 60)}...
        </Text>

        <IosArrowRight size={36} />
      </Style.Content>

      <Style.Footer>
        <Button
          asLink
          icon={<CloseOutline size={24} />}
          onClick={() => {
            setIsDismissed(true)

            setTimeout(() => {
              dismissPost()
              setIsDismissed(false)
            }, 400)
          }}
        >
          Dismiss Post
        </Button>

        <Button asLink noUnderline>
          {numComments} comments
        </Button>
      </Style.Footer>
    </Style.PostCard>
  )
}

export default PostCard

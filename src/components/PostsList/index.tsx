import Button from 'components/Button'
import PostCard, { PostCardProps } from 'components/PostCard'
import Text from 'components/Text'

import * as Style from './styles'

export type PostsListProps = {
  posts: PostCardProps[]
}

const PostsList = (props: PostsListProps) => (
  <Style.PostsList>
    <Style.Header>
      <Text type="heading3" color="white">
        Reddit posts
      </Text>
    </Style.Header>

    <Style.Container>
      {props.posts?.map((item, index) => (
        <PostCard key={index} {...item} />
      ))}
    </Style.Container>

    <Button text="Dismiss all" fullWidth />
  </Style.PostsList>
)

export default PostsList

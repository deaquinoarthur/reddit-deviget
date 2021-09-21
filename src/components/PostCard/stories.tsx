import { Story, Meta } from '@storybook/react/types-6-0'

import postCardMock from './mock'
import PostCard from '.'

export default {
  title: 'Card/PostCard',
  component: PostCard
} as Meta

const {
  num_comments,
  thumbnail,
  title,
  created,
  author
} = postCardMock.posts[0].data

export const Default: Story = () => (
  <PostCard
    numComments={num_comments}
    thumbnail={thumbnail}
    title={title}
    created={created}
    author={author}
  />
)

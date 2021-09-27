import { Story, Meta } from '@storybook/react/types-6-0'

import postsListMock from 'components/PostCard/mock'
import PostsList from '.'

export default {
  title: 'Card/PostsList',
  component: PostsList
} as Meta

const posts = postsListMock.posts.map((item) => ({
  numComments: item.data.num_comments,
  thumbnail: item.data.thumbnail,
  title: item.data.title,
  created: item.data.created,
  author: item.data.author
}))

export const Default: Story = () => <PostsList posts={posts} />

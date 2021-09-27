import { Story, Meta } from '@storybook/react/types-6-0'

import { Provider } from 'react-redux'

import store from 'store'

import postCardMock from './mock'
import PostCard from '.'

export default {
  title: 'Card/PostCard',
  component: PostCard
} as Meta

const {
  author,
  clicked,
  created,
  id,
  numComments,
  thumbnail,
  title
} = postCardMock.posts[0].data

export const Default: Story = () => (
  <Provider store={store}>
    <PostCard
      author={author}
      clicked={clicked}
      created={created}
      id={id}
      numComments={numComments}
      thumbnail={thumbnail}
      title={title}
    />
  </Provider>
)

import { Story, Meta } from '@storybook/react/types-6-0'
import { Provider } from 'react-redux'

import store from 'store'

import PostsList from '.'

export default {
  title: 'Card/PostsList',
  component: PostsList
} as Meta

export const Default: Story = () => (
  <Provider store={store}>
    <PostsList />
  </Provider>
)

import { Story, Meta } from '@storybook/react/types-6-0'

import PostDetails from '.'

import postDetailMock from './mock'

export default {
  title: 'PostDetail',
  component: PostDetails
} as Meta

export const Default: Story = () => <PostDetails {...postDetailMock} />

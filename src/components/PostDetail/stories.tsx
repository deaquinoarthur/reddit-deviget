import { Story, Meta } from '@storybook/react/types-6-0'

import PostDetail from '.'

import postDetailMock from './mock'

export default {
  title: 'PostDetail',
  component: PostDetail
} as Meta

export const Default: Story = () => <PostDetail {...postDetailMock} />

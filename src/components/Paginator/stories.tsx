import { Provider } from 'react-redux'
import { Story, Meta } from '@storybook/react/types-6-0'

import store from 'store'

import Paginator from '.'

export default {
  title: 'Paginator',
  component: Paginator
} as Meta

export const Default: Story = () => (
  <Provider store={store}>
    <Paginator />
  </Provider>
)

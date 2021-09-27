import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Provider } from 'react-redux'

import store from 'store'

import { renderWithTheme } from 'utils/tests/helpers'

import postCardMock from 'components/PostCard/mock'
import postDetailMock from './mock'
import PostDetails from '.'
import PostCard from 'components/PostCard'

describe('<PostDetail />', () => {
  it('should render <PostDetail /> correctly', () => {
    renderWithTheme(
      <Provider store={store}>
        <PostCard {...postCardMock.posts[0].data} />
        <PostDetails />
      </Provider>
    )

    userEvent.click(screen.getByLabelText('Show Details'))

    expect(
      screen.getByRole('img', { name: /post details user thumbnail/i })
    ).toBeInTheDocument()

    expect(screen.getByTestId('Post details button')).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: postDetailMock.title })
    ).toBeInTheDocument()
  })
})

import { screen } from '@testing-library/react'
import { Provider } from 'react-redux'

import store from 'store'
import { renderWithTheme } from 'utils/tests/helpers'

import postCardMock from './mock'
import PostCard from '.'

const { data } = postCardMock.posts[0]

describe('<PostCard />', () => {
  it('should render <PostCard /> correctly', () => {
    renderWithTheme(
      <Provider store={store}>
        <PostCard {...data} />
      </Provider>
    )

    expect(
      screen.getByRole('button', { name: data.author })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('button', { name: /dismiss post/i })
    ).toBeInTheDocument()
    expect(
      screen.getByText(`${data.title.substr(0, 60)}...`)
    ).toBeInTheDocument()
  })
})

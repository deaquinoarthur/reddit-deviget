import { screen } from '@testing-library/react'

import { renderWithTheme } from 'utils/tests/helpers'

import postCardMock from './mock'
import PostCard from '.'

const {
  num_comments,
  thumbnail,
  title,
  created,
  author
} = postCardMock.posts[0].data

describe('<PostCard />', () => {
  it('should render <PostCard /> correctly', () => {
    renderWithTheme(
      <PostCard
        numComments={num_comments}
        thumbnail={thumbnail}
        title={title}
        created={created}
        author={author}
      />
    )

    expect(screen.getByRole('button', { name: author })).toBeInTheDocument()
    expect(
      screen.getByRole('button', { name: /dismiss post/i })
    ).toBeInTheDocument()
    expect(screen.getByText(title)).toBeInTheDocument()
  })
})

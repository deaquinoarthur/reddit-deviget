import { screen } from '@testing-library/react'

import { renderWithTheme } from 'utils/tests/helpers'

import postsListMock from 'components/PostCard/mock'
import PostsList from '.'

const posts = postsListMock.posts.map((item) => ({
  numComments: item.data.num_comments,
  thumbnail: item.data.thumbnail,
  title: item.data.title,
  created: item.data.created,
  author: item.data.author
}))

jest.mock('components/PostCard', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="Mock PostCard"></div>
    }
  }
})

describe('<PostsList />', () => {
  it('should render <PostsList /> correctly', () => {
    renderWithTheme(<PostsList posts={posts} />)

    expect(screen.getAllByTestId('Mock PostCard')).toHaveLength(4)
  })

  it('should show header on top of the list', async () => {
    renderWithTheme(<PostsList posts={posts} />)

    expect(
      screen.getByRole('heading', { name: /reddit posts/i })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('button', { name: /dismiss all/i })
    ).toBeInTheDocument()
  })
})

import { screen } from '@testing-library/react'

import { renderWithTheme } from 'utils/tests/helpers'

import postDetailMock from './mock'
import PostDetails from '.'

describe('<PostDetail />', () => {
  it('should render <PostDetail /> correctly', () => {
    renderWithTheme(<PostDetails {...postDetailMock} />)

    expect(
      screen.getByRole('img', { name: /user thumbnail/i })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('button', { name: postDetailMock.author })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: postDetailMock.title })
    ).toBeInTheDocument()
  })
})

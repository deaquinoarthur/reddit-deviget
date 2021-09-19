import { renderWithTheme } from 'utils/tests/helpers'
import HomeLayout from '.'

describe('<HomeLayout />', () => {
  it('should render HomeLayout correctly', () => {
    renderWithTheme(<HomeLayout />)
  })
})

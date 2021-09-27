import { Provider } from 'react-redux'

import store from 'store'

import { renderWithTheme } from 'utils/tests/helpers'

import HomeLayout from '.'

describe('<HomeLayout />', () => {
  it('should render HomeLayout correctly', () => {
    renderWithTheme(
      <Provider store={store}>
        <HomeLayout />
      </Provider>
    )
  })
})

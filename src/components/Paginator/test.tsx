import { Provider } from 'react-redux'

import store from 'store'

import { renderWithTheme } from 'utils/tests/helpers'

import Paginator from '.'

describe('<Paginator />', () => {
  it('should render <Paginator /> correctly', () => {
    renderWithTheme(
      <Provider store={store}>
        <Paginator />
      </Provider>
    )
  })
})

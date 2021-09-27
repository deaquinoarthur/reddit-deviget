import { Provider } from 'react-redux'

import store from 'store'

import { renderWithTheme } from 'utils/tests/helpers'

import PostsList from '.'

describe('<PostsList />', () => {
  it('should render <PostsList /> correctly', () => {
    renderWithTheme(
      <Provider store={store}>
        <PostsList />
      </Provider>
    )
  })

  it('should show header on top of the list', async () => {
    renderWithTheme(
      <Provider store={store}>
        <PostsList />
      </Provider>
    )
  })
})

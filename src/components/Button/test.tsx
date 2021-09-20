import { screen } from '@testing-library/react'

import { renderWithTheme } from 'utils/tests/helpers'
import Button from '.'

describe('<Button />', () => {
  it('should render <Button /> correctly', () => {
    renderWithTheme(<Button text="My Button" />)

    expect(
      screen.getByRole('button', { name: /My Button/i })
    ).toBeInTheDocument()
  })

  it('should render button as a link', async () => {
    const { container } = renderWithTheme(<Button text="My Button" asLink />)

    expect(container.firstChild).toHaveStyle({
      'background-color': 'transparent'
    })
  })

  it('should render button as a link without underline', async () => {
    const { container } = renderWithTheme(
      <Button text="My Button" asLink noUnderline />
    )

    expect(container.firstChild).toHaveStyle({
      'background-color': 'transparent',
      'border-bottom': '0'
    })
  })
})

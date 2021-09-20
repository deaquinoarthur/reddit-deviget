import { screen } from '@testing-library/react'

import { renderWithTheme } from 'utils/tests/helpers'
import Text from '.'

describe('<Text />', () => {
  it('should render <Text /> correctly', () => {
    renderWithTheme(<Text type="heading1" content="Heading" />)

    expect(
      screen.getByRole('heading', { name: /heading/i })
    ).toBeInTheDocument()
  })

  it('should render correctly padding the children prop', () => {
    renderWithTheme(<Text type="heading1">Heading</Text>)

    expect(
      screen.getByRole('heading', { name: /heading/i })
    ).toBeInTheDocument()
  })

  it('should render heading level 1 correctly', () => {
    const { container } = renderWithTheme(<Text type="heading1">Heading</Text>)

    expect(container.firstChild).toHaveStyle({ 'font-size': '6.73rem' })
  })

  it('should render heading level 2 correctly', () => {
    const { container } = renderWithTheme(<Text type="heading2">Heading</Text>)

    expect(container.firstChild).toHaveStyle({ 'font-size': '5.05rem' })
  })

  it('should render heading level 3 correctly', () => {
    const { container } = renderWithTheme(<Text type="heading3">Heading</Text>)

    expect(container.firstChild).toHaveStyle({ 'font-size': '3.79rem' })
  })

  it('should render heading level 4 correctly', () => {
    const { container } = renderWithTheme(<Text type="heading4">Heading</Text>)

    expect(container.firstChild).toHaveStyle({ 'font-size': '2.84rem' })
  })

  it('should render heading level 5 correctly', () => {
    const { container } = renderWithTheme(<Text type="heading5">Heading</Text>)

    expect(container.firstChild).toHaveStyle({ 'font-size': '2.13rem' })
  })

  it('should render large paragraph correctly', () => {
    const { container } = renderWithTheme(
      <Text type="paragraphLarge">Paragraph</Text>
    )

    expect(container.firstChild).toHaveStyle({ 'font-size': '2.13rem' })
  })

  it('should render regular paragraph correctly', () => {
    const { container } = renderWithTheme(
      <Text type="paragraphRegular">Paragraph</Text>
    )

    expect(container.firstChild).toHaveStyle({ 'font-size': '1.6rem' })
  })

  it('should render small paragraph correctly', () => {
    const { container } = renderWithTheme(
      <Text type="paragraphSmall">Paragraph</Text>
    )

    expect(container.firstChild).toHaveStyle({ 'font-size': '1.4rem' })
  })

  it('should render text with emphasis styles', () => {
    const { container } = renderWithTheme(
      <Text type="paragraphSmall" emphasis>
        Emphasis text
      </Text>
    )

    expect(container.firstChild).toHaveStyle({
      'font-size': '1.4rem',
      'font-style': 'italic'
    })
  })

  it('should render text with bold styles', () => {
    const { container } = renderWithTheme(
      <Text type="paragraphSmall" strong>
        Emphasis text
      </Text>
    )

    expect(container.firstChild).toHaveStyle({
      'font-size': '1.4rem',
      'font-weight': '700'
    })
  })

  it('should render text with bold and emphasis styles', () => {
    const { container } = renderWithTheme(
      <Text type="paragraphSmall" emphasis strong>
        Emphasis text
      </Text>
    )

    expect(container.firstChild).toHaveStyle({
      'font-size': '1.4rem',
      'font-weight': '700',
      'font-style': 'italic'
    })
  })

  it('should render small paragraph align to the left', () => {
    const { container } = renderWithTheme(
      <Text type="paragraphRegular" align="left">
        Paragraph
      </Text>
    )

    expect(container.firstChild).toHaveStyle({ 'text-align': 'left' })
  })

  it('should render small paragraph align to the right', () => {
    const { container } = renderWithTheme(
      <Text type="paragraphRegular" align="right">
        Paragraph
      </Text>
    )

    expect(container.firstChild).toHaveStyle({ 'text-align': 'right' })
  })

  it('should render small paragraph align to the center', () => {
    const { container } = renderWithTheme(
      <Text type="paragraphRegular" align="center">
        Paragraph
      </Text>
    )

    expect(container.firstChild).toHaveStyle({ 'text-align': 'center' })
  })

  it('should render text with primary color when passed', () => {
    const { container } = renderWithTheme(
      <Text type="heading1" color="primary">
        Paragraph
      </Text>
    )

    expect(container.firstChild).toHaveStyle({ color: '#F87B36' })
  })
})

import { addDecorator } from '@storybook/react'
import { ThemeProvider } from 'styled-components'
import { withNextRouter } from 'storybook-addon-next-router'

import theme from '../src/styles/theme'
import GlobalStyles from '../src/styles/global'

addDecorator(withNextRouter())

export const parameters = {
  backgrounds: {
    default: 'deviget-light',
    values: [
      {
        name: 'deviget-light',
        value: theme.colors.white
      },
      {
        name: 'deviget-dark',
        value: theme.colors.primary
      }
    ]
  }
}

export const decorators = [
  (Story) => (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Story />
      </ThemeProvider>
    </>
  )
]

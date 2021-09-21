import styled, { css } from 'styled-components'
import { lighten } from 'polished'

export const PostsList = styled.div.attrs({
  className: 'PostsList'
})`
  ${({ theme }) => css`
    .PostCard {
      &:not(:last-child) {
        border-bottom: 1px solid ${lighten(0.3, theme.colors.gray)};
      }
    }
  `}
`

export const Container = styled.div.attrs({
  className: 'PostsLists__Container'
})`
  ${({ theme }) => css`
    border-right: 2px solid ${theme.colors.primary};
  `}
`

export const Header = styled.div.attrs({
  className: 'PostsList__Header'
})`
  ${({ theme }) => css`
    padding: ${theme.spacings.medium} ${theme.spacings.small};

    background-color: ${theme.colors.primary};
  `}
`

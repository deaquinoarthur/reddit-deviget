import styled, { css } from 'styled-components'
import { lighten } from 'polished'

export const PostsList = styled.div.attrs({
  className: 'PostsList'
})<{ dismissAll: boolean }>`
  ${({ dismissAll, theme }) => css`
    position: relative;
    width: 100%;
    height: 100vh;
    overflow: hidden;
    background-color: ${theme.colors.secondary};

    .PostCard {
      &:not(:last-child) {
        border-bottom: 1px solid ${lighten(0.3, theme.colors.gray)};
      }
    }

    ${dismissAll &&
    css`
      .PostsList__Container {
        transform: translateX(-100%);
      }

      .PostsList__NoPosts {
        opacity: 1;
        visibility: visible;
      }
    `}
  `}
`

export const Container = styled.div.attrs({
  className: 'PostsList__Container'
})`
  ${({ theme }) => css`
    height: calc(100% - 103px);
    border-right: 2px solid ${theme.colors.primary};

    overflow-y: auto;
    transition: transform 0.3s ease-in-out;
  `}
`

export const Header = styled.div.attrs({
  className: 'PostsList__Header'
})`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: ${theme.spacings.medium} ${theme.spacings.small};

    background-color: ${theme.colors.primary};

    .Button {
      display: inline-block;

      width: auto;
      margin-top: 8px;
    }
  `}
`

export const NoPosts = styled.div.attrs({
  className: 'PostsList__NoPosts'
})`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.paragraphLarge};

    display: flex;
    align-items: center;
    justify-content: center;

    height: calc(100vh - 164px);

    transition: opacity visibility 0.3s ease-in-out;
    opacity: 0;
    visibility: hidden;
  `}
`

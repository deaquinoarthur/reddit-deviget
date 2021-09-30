import styled, { css } from 'styled-components'
import media from 'styled-media-query'
import { lighten } from 'polished'

export const PostsList = styled.div.attrs({
  className: 'PostsList'
})<{ dismissAll: boolean }>`
  ${({ dismissAll, theme }) => css`
    position: relative;

    width: 100%;
    height: calc(100vh - 72px);

    overflow: hidden;
    background-color: ${theme.colors.secondary};

    .PostCard {
      &:not(:last-child) {
        border-bottom: 1px solid ${lighten(0.3, theme.colors.gray)};
      }
    }

    ${media.lessThan('medium')`
      height: calc(100vh - 69px);
    `}

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
    height: calc(80vh - 103px);
    border-right: 2px solid ${theme.colors.primary};

    overflow-y: auto;
    transition: transform 0.3s ease-in-out;

    ${media.lessThan('medium')`
      height: calc(100vh - 172px);      
    `}
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

    height: 68vh;

    transition: opacity visibility 0.3s ease-in-out;
    opacity: 0;
    visibility: hidden;

    ${media.lessThan('medium')`
      height: 80vh;      
    `}
  `}
`

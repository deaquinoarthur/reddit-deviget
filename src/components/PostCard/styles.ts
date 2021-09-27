import styled, { css } from 'styled-components'

export const PostCard = styled.div.attrs({
  className: 'PostCard'
})<{ isDismissed: boolean }>`
  ${({ isDismissed, theme }) => css`
    padding: ${theme.spacings.small};

    background-color: ${theme.colors.secondary};

    ${isDismissed &&
    css`
      animation: isDismissed 2s;
    `}
  `}

  @keyframes isDismissed {
    0% {
      opacity: 1;
      transform: translateX(0);
    }
    50% {
      opacity: 0;
      transform: translateX(-100%);
    }
    75% {
      opacity: 0;
      transform: translateX(0);
    }
    100% {
      opacity: 1;
      transform: translateX(0);
    }
  }
`

export const Header = styled.div.attrs({
  className: 'PostCard__Header'
})<{ clicked: boolean }>`
  ${({ clicked, theme }) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;

    padding-bottom: ${theme.spacings.small};

    ${!clicked &&
    css`
      .Button {
        display: flex;
        align-items: center;

        &::before {
          font-size: 14px;

          margin-right: 8px;

          color: ${theme.colors.statusBlue};
          content: '⬤';
        }
      }
    `}
  `}
`

export const Content = styled.div.attrs({
  className: 'PostCard__Content'
})`
  ${({ theme }) => css`
    display: flex;
    align-items: center;

    cursor: pointer;

    svg {
      min-width: 3.6rem;
      margin-left: auto;

      color: ${theme.colors.primary};
    }
  `}
`

export const ThumbnailWrapper = styled.div.attrs({
  className: 'PostCard__ThumbnailWrapper'
})`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;

    width: 72px;
    min-width: 72px;
    height: 72px;
    margin-right: ${theme.spacings.small};

    background-color: ${theme.colors.gray};

    svg {
      min-width: 0;
      margin-left: unset;

      color: ${theme.colors.secondary};
    }
  `}
`

export const Thumbnail = styled.img.attrs({
  className: 'PostCard__Thumbnail'
})`
  width: 100%;
  height: 100%;

  object-fit: cover;
  object-position: center;
`

export const Footer = styled.div.attrs({
  className: 'PostCard__Footer'
})`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;

    padding-top: ${theme.spacings.small};
  `}
`

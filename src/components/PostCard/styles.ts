import styled, { css } from 'styled-components'

export const PostCard = styled.div.attrs({
  className: 'PostCard'
})`
  ${({ theme }) => css`
    padding: ${theme.spacings.small};

    background-color: ${theme.colors.secondary};
  `}
`

export const Header = styled.div.attrs({
  className: 'PostCard__Header'
})`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-bottom: ${theme.spacings.small};
  `}
`

export const Content = styled.div.attrs({
  className: 'PostCard__Content'
})`
  ${({ theme }) => css`
    display: flex;
    align-items: center;

    svg {
      min-width: 3.6rem;
      margin-left: auto;

      color: ${theme.colors.primary};
      cursor: pointer;
    }
  `}
`

export const ThumbnailWrapper = styled.div.attrs({
  className: 'PostCard__ThumbnailWrapper'
})`
  ${({ theme }) => css`
    width: 72px;
    min-width: 72px;
    height: 72px;
    margin-right: ${theme.spacings.small};

    background-color: ${theme.colors.gray};
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

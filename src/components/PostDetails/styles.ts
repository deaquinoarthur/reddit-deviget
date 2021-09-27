import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const PostDetails = styled.div.attrs({
  className: 'PostDetail'
})<{ showDetails: boolean }>`
  ${({ showDetails, theme }) => css`
    position: relative;

    min-height: 100vh;
    padding: ${theme.spacings.small};

    background-color: ${theme.colors.white};

    > svg {
      position: absolute;
      top: 8px;
      right: 8px;

      display: none;

      cursor: pointer;

      ${media.lessThan('medium')`
        display: block;
      `}
    }

    ${media.lessThan('medium')`
      width: 100%;
      position: absolute;
      transition: right 0.2s ease-in-out;

      ${
        showDetails
          ? css`
              right: 0;
            `
          : css`
              right: -100%;
            `
      }
    `}
  `}
`

export const Header = styled.div.attrs({
  className: 'PostDetail__Header'
})`
  ${({ theme }) => css`
    display: flex;
    margin-bottom: ${theme.spacings.medium};

    .Button {
      font-size: ${theme.font.sizes.heading4};

      color: ${theme.colors.primary};

      ${media.lessThan('medium')`
        font-size: ${theme.font.sizes.heading5};
      `}
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

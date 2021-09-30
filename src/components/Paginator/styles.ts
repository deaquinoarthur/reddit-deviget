import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Paginator = styled.div.attrs({
  className: 'Paginator'
})`
  ${({ theme }) => css`
    position: absolute;
    bottom: 0;

    display: flex;
    justify-content: center;
    gap: ${theme.spacings.small};

    width: 100%;
    padding: ${theme.spacings.small};
    box-shadow: 0 -10px 16px rgba(0, 0, 0, 0.1);

    background-color: ${theme.colors.primary};

    .Button {
      transition: color 0.2s ease-in-out;

      &:hover {
        color: ${theme.colors.secondary};
      }
    }

    ${media.greaterThan('medium')`
      right: 16px;
      bottom: 16px;

      width: 200px;
      border-radius: 8px;
      border-top: 0;
    `}
  `}
`

import styled, { css } from 'styled-components'
import { darken } from 'polished'
import { ButtonProps } from '.'

export const Button = styled.button.attrs({
  className: 'Button'
})<ButtonProps>`
  ${({
    asLink,
    color,
    fullWidth,
    icon,
    iconFirst,
    large,
    noUnderline,
    theme
  }) => css`
    font-size: ${large ? theme.font.sizes.button : theme.font.sizes.button};
    font-weight: 700;

    width: ${fullWidth ? '100%' : ''};
    padding: ${theme.spacings.tiny} ${theme.spacings.small};
    border: none;

    background-color: ${theme.colors.primary};
    color: ${color ? theme.colors[color] : theme.colors.white};
    cursor: pointer;
    transition: background-color 0.3s ease-in-out;

    ${!asLink &&
    css`
      &:hover {
        background-color: ${darken(0.1, theme.colors.primary)};
      }
    `}

    ${asLink &&
    css`
      padding: 0 0 ${noUnderline ? 0 : `calc(${theme.spacings.xtiny} / 16)`} 0;
border-bottom: ${noUnderline ? 0 : `3px solid ${color ? theme.colors[color] : theme.colors.gray}`};

      background-color: transparent;
      color: ${color ? theme.colors[color] : theme.colors.gray};

      &:hover {
        color: ${color
          ? darken(0.1, theme.colors[color])
          : darken(0.1, theme.colors.gray)};
      }
    `}

    ${!!icon &&
    css`
      display: flex;
      gap: ${theme.spacings.xtiny};
      align-items: center;

      ${iconFirst
        ? css`
            .Button__IconWrapper {
              order: 1;
            }

            span {
              order: 2;
            }
          `
        : css`
            .Button__IconWrapper {
              order: 2;
            }

            span {
              order: 1;
            }
          `}
    `}
  `}
`

export const IconWrapper = styled.div.attrs({
  className: 'Button__IconWrapper'
})``

import styled, { css } from 'styled-components'
import { TextProps } from '.'

const shouldRenderBolderText = (elementType: string, strong = false) => {
  return elementType.indexOf('heading') !== -1 || strong
}

export const Text = styled.span.attrs({
  className: 'Text'
})<TextProps>`
  ${({ align, color, type, emphasis, strong, theme }) => css`
    font-size: ${!!type && theme.font.sizes[type]};
    font-weight: ${!!type && shouldRenderBolderText(type, strong)
      ? theme.font.weight.bold
      : theme.font.weight.normal};
    font-style: ${!!emphasis && 'italic'};
    text-align: ${align ? align : 'left'};
    line-height: 1.4;

    color: ${!!color ? theme.colors[color] : theme.colors.gray};
  `}
`

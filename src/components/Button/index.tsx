import * as Style from './styles'

export type ButtonProps = {
  asLink?: boolean
  children?: React.ReactNode
  color?: string
  fullWidth?: boolean
  icon?: React.ReactNode
  iconFirst?: boolean
  large?: boolean
  noUnderline?: boolean
  text?: string
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
}

const Button = (props: ButtonProps) => (
  <Style.Button {...props}>
    <Style.IconWrapper>{props.icon}</Style.IconWrapper>

    <span>{props.children || props.text}</span>
  </Style.Button>
)

export default Button

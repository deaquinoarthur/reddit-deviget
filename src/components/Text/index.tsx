import * as Style from './styles'

export type TextProps = {
  as?: React.ElementType | keyof JSX.IntrinsicElements
  align?: 'center' | 'right' | 'left'
  children?: React.ReactNode
  color?: string
  content?: string
  type?:
    | 'heading1'
    | 'heading2'
    | 'heading3'
    | 'heading4'
    | 'heading5'
    | 'paragraphLarge'
    | 'paragraphRegular'
    | 'paragraphSmall'
    | undefined
  emphasis?: boolean
  strong?: boolean
}

const setElementType = (type: string | undefined) => {
  if (type === 'heading1') return 'h1'
  if (type === 'heading2') return 'h2'
  if (type === 'heading3') return 'h3'
  if (type === 'heading4') return 'h4'
  if (type === 'heading5') return 'h5'

  const paragraphTypes = [
    'paragraphLarge',
    'paragraphRegular',
    'paragraphSmall'
  ]

  if (type && paragraphTypes.includes(type)) return 'p'
}

const Text = (props: TextProps) => (
  <Style.Text {...props} as={setElementType(props.type)}>
    {props.children || props.content}
  </Style.Text>
)

export default Text

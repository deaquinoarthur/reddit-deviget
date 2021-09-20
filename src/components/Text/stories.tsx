import { Story, Meta } from '@storybook/react/types-6-0'

import Text from '.'

export default {
  title: 'Text',
  component: Text
} as Meta

export const Heading1: Story = () => (
  <Text type="heading1" content="Heading 1" />
)

export const Heading2: Story = () => (
  <Text type="heading2" content="Heading 2" />
)

export const Heading3: Story = () => (
  <Text type="heading3" content="Heading 3" />
)

export const Heading4: Story = () => (
  <Text type="heading4" content="Heading 4" />
)

export const Heading5: Story = () => (
  <Text type="heading5" content="Heading 5" />
)

export const ParagraphRegular: Story = () => (
  <Text type="paragraphRegular" content="Paragraph Regular" />
)

export const ParagraphLarge: Story = () => (
  <Text type="paragraphLarge" content="Paragraph Large" />
)

export const ParagraphSmall: Story = () => (
  <Text type="paragraphSmall" content="Paragraph Small" />
)

export const AlignCenter: Story = () => (
  <Text type="paragraphRegular" align="center" content="Align to the center" />
)

export const AlignRight: Story = () => (
  <Text type="paragraphRegular" align="right" content="Align to the right" />
)

export const AlignLeft: Story = () => (
  <Text type="paragraphRegular" align="left" content="Align to the left" />
)

export const Emphasis: Story = () => (
  <Text type="paragraphRegular" align="left" content="Emphasis text" emphasis />
)

export const Strong: Story = () => (
  <Text type="paragraphRegular" align="left" content="Strong text" strong />
)

export const StrongAndEmphasis: Story = () => (
  <Text
    type="paragraphRegular"
    align="left"
    content="Strong text"
    strong
    emphasis
  />
)

export const CustomColor: Story = () => (
  <Text type="heading1" align="left" content="Custom Color" color="primary" />
)

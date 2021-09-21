import { Story, Meta } from '@storybook/react/types-6-0'
import { CloseOutline } from '@styled-icons/evaicons-outline/CloseOutline'

import Button, { ButtonProps } from '.'

export default {
  title: 'Form/Button',
  component: Button
} as Meta

export const Primary: Story<ButtonProps> = (args) => <Button {...args} />

Primary.args = {
  text: 'Primary Button'
}

export const FullWidth: Story<ButtonProps> = (args) => <Button {...args} />

FullWidth.args = {
  fullWidth: true,
  text: 'Full width'
}

export const AsLink: Story<ButtonProps> = (args) => <Button {...args} />

AsLink.args = {
  asLink: true,
  text: 'As Link'
}

export const IconFirst: Story<ButtonProps> = (args) => <Button {...args} />

IconFirst.args = {
  asLink: true,
  icon: <CloseOutline size={24} />,
  iconFirst: true,
  text: 'Icon First'
}

export const IconLast: Story<ButtonProps> = (args) => <Button {...args} />

IconLast.args = {
  asLink: true,
  icon: <CloseOutline size={24} />,
  text: 'Icon Last'
}

export const NoUnderline: Story<ButtonProps> = (args) => <Button {...args} />

NoUnderline.args = {
  asLink: true,
  text: 'No Underline',
  noUnderline: true
}

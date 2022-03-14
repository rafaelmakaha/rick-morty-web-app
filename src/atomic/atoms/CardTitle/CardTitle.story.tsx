import React from 'react'
import { Meta, Story } from '@storybook/react'
import CardTitle, { ICardTitle } from '.'

export default {
  title: 'Atoms/CardTitle'
} as Meta

const Template: Story<ICardTitle> = (args) => <CardTitle {...args} />

export const Normal = Template.bind({})

const argTypes = {
  children: {
    control: 'text'
  }
}

const defaultArgs: ICardTitle = {
  children: 'Sample Text'
}

Normal.args = { ...defaultArgs }
Normal.argTypes = argTypes

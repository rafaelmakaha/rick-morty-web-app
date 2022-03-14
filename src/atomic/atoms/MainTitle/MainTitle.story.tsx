import React from 'react'
import { Meta, Story } from '@storybook/react'
import MainTitle, { IMainTitle } from '.'

export default {
  title: 'Atoms/MainTitle'
} as Meta

const Template: Story<IMainTitle> = (args) => <MainTitle {...args} />

export const Normal = Template.bind({})

const argTypes = {
  children: {
    control: 'text'
  }
}

const defaultArgs: Omit<IMainTitle> = {}

Normal.args = { ...defaultArgs }
Normal.argTypes = argTypes

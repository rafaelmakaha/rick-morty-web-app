import React from 'react'
import { Meta, Story } from '@storybook/react'
import MainGrid, { IMainGrid } from '.'

export default {
  title: 'Molecules/MainGrid'
} as Meta

const Template: Story<IMainGrid> = (args) => <MainGrid {...args} />

export const Normal = Template.bind({})

const argTypes = {
  children: {
    control: 'text'
  }
}

const defaultArgs: Omit<IMainGrid> = {}

Normal.args = { ...defaultArgs }
Normal.argTypes = argTypes

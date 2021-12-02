import React from 'react'

import { ThemeProvider } from 'styled-components'

import { theme } from '../tokens'

export const StorybookProviders: React.FC = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
)

export const providerDecorator = (Story: any) => (
  <StorybookProviders>
    <Story />
  </StorybookProviders>
)

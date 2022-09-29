import React, { FC } from 'react'
import styled from 'styled-components'
import { assignTestId } from '../../../utils/mockTestId'

export interface IImg {
  testID?: string
}

export const Img = styled.img.attrs<IImg>(({ testID = 'img' }) =>
  assignTestId('img', testID)
)<IImg>``

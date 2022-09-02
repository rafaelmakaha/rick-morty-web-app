import React from 'react'
import { render, cleanup } from '@testing-library/react'
import { mockTestID } from '../../../utils'
import MainGrid, { IMainGrid } from '.'

describe('Atoms/MainGrid', () => {
  const props: IMainGrid = {
    testID: 'MainGrid',
    children: 'SomeChildren'
  }

  const renderComponent = () => render(<MainGrid {...props} />)

  let component = renderComponent()

  beforeEach(() => {
    jest.clearAllMocks()
    cleanup()
    component = renderComponent()
  })

  const elContainer = mockTestID('div', props.testID!)

  it(`should render component #${elContainer}`, () => {
    const sut = component.findByTestId(elContainer)
    expect(sut).toBeTruthy()
  })

  it('should render snapshot', () => {
    expect(component.container.firstChild).toMatchSnapshot()
  })
})

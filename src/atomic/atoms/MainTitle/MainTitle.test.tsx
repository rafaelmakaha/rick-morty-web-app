import React from 'react'
import { cleanup, render } from '@testing-library/react'
import MainTitle from '.'
import { mockTestID } from '../../../utils'
import { IMainCard } from '../MainCard'

describe('Atoms/MainTitle', () => {
  const props: IMainCard = {
    testID: 'MainTitle',
    color: 'red',
    children: 'Some Children'
  }

  const renderComponent = () => render(<MainTitle {...props} />)

  let component = renderComponent()

  beforeEach(() => {
    jest.clearAllMocks()
    cleanup()
    component = renderComponent()
  })

  const elContainer = mockTestID('div', props.testID!)

  it(`should render component #${elContainer}`, () => {
    const sut = component.findByTestId(el_container)
    expect(sut).toBeTruthy()
  })

  it('should render snapshot', () => {
    expect(component.container.firstChild).toMatchSnapshot()
  })

  // it('should render MainTitle with gray background-color', async () => {
  //     const color = 'gray'
  //     component.rerender(<MainTitle {...props} color={color} />)
  //     const sut = component.findByTestId(el_container)
  //     expect(sut).toHaveStyle(`background-color: ${color}`)
  // })
})

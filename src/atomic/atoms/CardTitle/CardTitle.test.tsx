import React from 'react'
import { render, cleanup } from '@testing-library/react'
import CardTitle, { ICardTitle } from './index'
import { mockTestID } from '../../../utils'

describe('Atoms/CardTitle', () => {
    const props: ICardTitle = {
        testID: 'CardItem',
        children: 'Some Children'
    }

    const renderComponent = () => render(<CardTitle {...props} />)

    let component = renderComponent()

    beforeEach(() => {
        jest.clearAllMocks()
        cleanup()
        component = renderComponent()
    })

    const el_container = mockTestID('div', props.testID!)


    it(`should render component #${el_container}`, () => {
        const sut = component.findByTestId(el_container)
        expect(sut).toBeTruthy()
    })

    it('should render snapshot', () => {
        expect(component.container.firstChild).toMatchSnapshot()
    })
})

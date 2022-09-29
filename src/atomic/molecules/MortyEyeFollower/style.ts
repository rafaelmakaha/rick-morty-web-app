import { Div } from '../../atoms/Div'
import styled from 'styled-components'
import { Img } from '../../atoms/Img'

const eye = '/eye.png'

export const Component = styled(Div)`
  display: none;
  position: absolute;
  left: 0px;
  bottom: 0px;

  @media screen and (min-width: 900px) {
    display: block;
  }
`

export const Morty = styled(Img)`
  max-height: 200px;
`

export const EyesWrapper = styled(Div)``

export const Eye = styled(Img).attrs((props: { degree: number }) => ({
  src: eye,
  style: {
    transform: `rotate(${props.degree + 90}deg)`
  }
}))<{
  degree: number
}>`
  position: absolute;
  max-height: 11px;
`

export const MortyLeftEye = styled(Eye)`
  left: 56px;
  bottom: 65px;
`

export const MortyRightEye = styled(Eye)`
  left: 85px;
  bottom: 70px;
`

export const RickLeftEye = styled(Eye)`
  left: 116px;
  bottom: 123px;
  max-height: 16px;
`

export const RickRightEye = styled(Eye)`
  left: 144px;
  bottom: 124px;
  max-height: 16px;
`

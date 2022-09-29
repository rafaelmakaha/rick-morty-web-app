import React, { FC, useEffect, useRef, useState } from 'react'
import {
  Component,
  EyesWrapper,
  Morty,
  MortyLeftEye,
  MortyRightEye,
  RickLeftEye,
  RickRightEye
} from './style'

const morty = '/morty.png'

const angle = (cx: number, cy: number, ex: number, ey: number): number => {
  const dy = ey - cy
  const dx = ex - cx
  const rad = Math.atan2(dy, dx)
  const deg = (rad * 180) / Math.PI
  return deg
}

export const MortyEyeFollower: FC = () => {
  const [degr, setDegr] = useState(0)
  const mouseEvent = (e: MouseEvent) => {
    // console.log(e)
    const rect = document.getElementById('anchor')?.getBoundingClientRect()
    if (!rect) return
    const anchorX = rect.left + rect.width / 2
    const anchorY = rect.top + rect.height / 2
    const mouseX = e.clientX
    const mouseY = e.clientY

    setDegr(angle(mouseX, mouseY, anchorX, anchorY))
  }

  useEffect(() => {
    document.addEventListener('mousemove', mouseEvent)
    return () => document.removeEventListener('mousemove', mouseEvent)
  }, [])

  return (
    <Component>
      <Morty id='anchor' src={morty} />
      <EyesWrapper>
        <MortyLeftEye degree={degr} />
        <MortyRightEye degree={degr} />
        <RickLeftEye degree={degr} />
        <RickRightEye degree={degr} />
      </EyesWrapper>
    </Component>
  )
}

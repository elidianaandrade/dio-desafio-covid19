import React, { memo } from 'react'
import { Card as CardUI } from '../../../components'
import {
  LabelStyled,
  ValueStyled,
  CardContentStyled
} from './style'

export default memo(Card)

function Card({ value, label, color }) {
  return (
    <CardUI>
      <CardContentStyled color={color}>
        <LabelStyled>{label}</LabelStyled>
        <ValueStyled>{value}</ValueStyled>
      </CardContentStyled>
    </CardUI>
  )
}


import styled from 'styled-components'
import { CardContent, Typography } from '../../../components'

export const LabelStyled = styled(Typography)`
  font-weight: 500;
  font-size: .95rem;
  text-transform: uppercase;
  letter-spacing: 0.125rem;
  color: #545454;
`

export const ValueStyled = styled(Typography)`
  font-weight: 400;
  font-size: 2.5rem;
  font-weight: 600;
`

export const CardContentStyled = styled(CardContent)`
  color: ${({ color }) => color || '#000'};
  border-radius: 0.125rem;
  border-left: 0.4rem solid ${({ color }) => color || '#000'};
`

export const CardPanelContentStyled = styled(CardContent)`
  display: flex;
  justify-content: space-between;
  padding: 1rem;
`

export const ItemStyled = styled.div`
  display: flex;
  justify-content: space-between;
  min-width: 150px;
`
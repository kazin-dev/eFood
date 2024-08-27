import styled from 'styled-components'
import { cores } from '../../styles'

export const Card = styled.div`
  width: 320px;
  height: 338px;
  background-color: ${cores.rosa};
  color: ${cores.branco};
`

export const CardContainer = styled.div`
  padding: 8px;
`

export const CardInfo = styled.div``

export const TituloCard = styled.h3`
  display: block;
  padding: 7.4px 0;
  font-weight: 900;
  font-size: 16px;
  line-height: 18.75px;
`

export const DescricaoCard = styled.p`
  display: block;
  padding-bottom: 8px;
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
`

export const ButtonCard = styled.button`
  width: 304px;
  height: 24px;
  background-color: ${cores.branco};
  color: ${cores.rosa};
  border: none;
  font-weight: 700;
  font-size: 14px;
  line-height: 16.41px;
  cursor: pointer;
`

export const CardImage = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
`

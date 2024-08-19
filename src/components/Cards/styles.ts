import styled from 'styled-components'
import { cores } from '../../styles'

export const Card = styled.div`
  width: 472.5px;
  height: 408px;
  background-color: ${cores.branco};
  color: ${cores.rosa};
  border: 0 solid ${cores.rosa};
  border-width: 0 1px 1px 1px;
`

export const CardContainer = styled.div`
  display: block;
  padding: 8px;
`

export const Titulo = styled.h3`
  font-weight: 700;
  font-size: 18px;
  line-height: 22px;
  color: ${cores.rosa};
`

export const Avaliacao = styled.div`
  display: flex;
  align-items: center;
`

export const CardInfo = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 12px;
`

export const P = styled.p`
  /* Melhor nome para o estilo */
  font-weight: 400;
  font-size: 14px;
  padding: 12px 0;
  line-height: 22px;
`

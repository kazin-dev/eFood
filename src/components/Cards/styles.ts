import styled from 'styled-components'
import { cores } from '../../styles'

export const Card = styled.div`
  display: block;
  width: 472.5px;
  height: auto; // Ajustado para auto para evitar overflow
  background-color: ${cores.branco};
  color: ${cores.rosa};
  margin-bottom: 20px; // Adicionado para espaçamento entre cards
`

export const CardContainer = styled.div`
  padding: 8px;
  border: 0 solid ${cores.rosa};
  border-width: 0 1px 1px 1px;
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
  gap: 8px;
`

export const CardInfo = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 12px;
`

export const P = styled.p`
  font-weight: 400;
  font-size: 14px;
  padding: 12px 0;
  line-height: 22px;
`

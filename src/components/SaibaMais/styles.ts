import styled from 'styled-components'
import { cores } from '../../styles'

export const Card = styled.div`
  width: 320px;
  height: auto;
  background-color: ${cores.rosa};
  color: ${cores.branco};
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`

export const CardContainer = styled.div`
  padding: 16px;
`

export const CardInfo = styled.div`
  padding-top: 12px;
`

export const TituloCard = styled.h3`
  display: block;
  font-weight: 900;
  font-size: 18px;
  line-height: 22px;
  color: ${cores.branco};
  margin-bottom: 8px;
`

export const DescricaoCard = styled.p`
  display: block;
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  margin-bottom: 16px;
  color: ${cores.branco};
`

export const ButtonCard = styled.button`
  width: 100%;
  height: 40px;
  background-color: ${cores.branco};
  color: ${cores.rosa};
  border: none;
  font-weight: 700;
  font-size: 14px;
  line-height: 16.41px;
  cursor: pointer;
  border-radius: 4px;
  transition: background-color 0.3s;

  &:hover {
    background-color: ${cores.rosa};
  }
`

export const CardImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`

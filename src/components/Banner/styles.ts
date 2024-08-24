import styled from 'styled-components'
import { cores } from '../../styles'

export const Banner = styled.div`
  width: 100%;
  height: 300px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
`

export const BannerInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start; /* Ajuste conforme necessário */
  height: 100%;
  padding: 20px;
  color: ${cores.branco};
  margin-left: 17%;

  @media (max-width: 768px) {
    margin-left: 0;
    align-items: center;
    text-align: center;
  }
`

export const BannerTitulo = styled.h2`
  font-size: 32px;
  font-weight: 100;
  line-height: 37.5px;
  color: #fff;
`

export const BannerDescricao = styled.p`
  font-size: 32px;
  line-height: 37.5px;
  font-weight: 900;
`

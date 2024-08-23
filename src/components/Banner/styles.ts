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
  margin-left: 170px; /* Verifique se este valor está adequado para seu layout */

  @media (max-width: 768px) {
    margin-left: 0; /* Responsivo para dispositivos menores */
    align-items: center;
    text-align: center;
  }
`

export const BannerTitulo = styled.h2`
  font-size: 32px;
  font-weight: 100;
  line-height: 37.5px;
`

export const BannerDescricao = styled.p`
  font-size: 1rem;
  line-height: 1.5rem;
`

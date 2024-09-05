import styled from 'styled-components'
import { cores } from '../../styles'

export const Banner = styled.div`
  width: 100%;
  height: 300px;
  background-size: cover;
  background-repeat: no-repeat;

  .container {
    max-width: 1088px;
    width: 100%;
    margin: 0 auto;
  }
`

export const BannerInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  height: 100%;
  padding: 20px 0;
  color: ${cores.branco};

  @media (max-width: 768px) {
    margin-left: 0;
    align-items: center;
    text-align: center;
  }
`

export const BannerTitulo = styled.h3`
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

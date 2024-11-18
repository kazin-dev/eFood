import styled from 'styled-components'
import { cores } from '../../styles'

export const Banner = styled.div`
  width: 100%;
  height: 300px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;

  .container {
    max-width: 1088px;
    width: 100%;
    margin: 0 auto;
    height: 100%;
    display: flex;
    align-items: center;
  }

  @media (max-width: 768px) {
    height: 250px;
  }

  @media (max-width: 480px) {
    height: 200px;
  }
`

export const BannerInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  height: 100%;
  padding: 20px;
  color: ${cores.branco};

  @media (max-width: 768px) {
    align-items: center;
    text-align: center;
    padding: 16px;
  }

  @media (max-width: 480px) {
    padding: 12px;
  }
`

export const BannerTitulo = styled.h3`
  font-size: 32px;
  font-weight: 100;
  line-height: 1.2;
  color: ${cores.branco};
  margin-bottom: 10px;

  @media (max-width: 768px) {
    font-size: 24px;
  }

  @media (max-width: 480px) {
    font-size: 18px;
  }
`

export const BannerDescricao = styled.p`
  font-size: 24px;
  line-height: 1.5;
  font-weight: 900;
  color: ${cores.branco};

  @media (max-width: 768px) {
    font-size: 18px;
  }

  @media (max-width: 480px) {
    font-size: 16px;
  }
`

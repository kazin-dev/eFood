import styled from 'styled-components'
import { cores } from '../../styles'

export const Card = styled.div`
  display: block;
  width: 472.5px;
  height: auto;
  background-color: ${cores.branco};
  color: ${cores.rosa};
  margin-bottom: 20px;

  @media (max-width: 1024px) {
    width: 350px;
  }

  @media (max-width: 768px) {
    width: 100%;
  }

  @media (max-width: 480px) {
    width: 100%;
    margin-bottom: 16px;
  }
`

export const CardContainer = styled.div`
  padding: 8px;
  border: 0 solid ${cores.rosa};
  border-width: 0 1px 1px 1px;

  @media (max-width: 480px) {
    padding: 6px;
  }
`

export const Titulo = styled.h3`
  font-weight: 700;
  font-size: 18px;
  line-height: 22px;
  color: ${cores.rosa};

  @media (max-width: 768px) {
    font-size: 16px;
  }

  @media (max-width: 480px) {
    font-size: 14px;
  }
`

export const Avaliacao = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  @media (max-width: 480px) {
    gap: 6px;
  }
`

export const CardInfo = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 12px;

  @media (max-width: 480px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
  }
`

export const P = styled.p`
  font-weight: 400;
  font-size: 14px;
  padding: 12px 0;
  line-height: 22px;

  @media (max-width: 768px) {
    font-size: 13px;
  }

  @media (max-width: 480px) {
    font-size: 12px;
    line-height: 20px;
  }
`

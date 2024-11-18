import styled from 'styled-components'

export const DivGrid = styled.div`
  margin-top: 80px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: 60px;
    margin-top: 60px;
  }

  @media (max-width: 768px) {
    gap: 40px;
    margin-top: 40px;
  }

  @media (max-width: 480px) {
    gap: 24px;
    margin-top: 32px;
  }
`

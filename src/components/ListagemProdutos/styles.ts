import styled from 'styled-components'

export const Grid = styled.div`
  margin-top: 32px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 80px;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr 1fr;
    gap: 60px;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 40px;
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 24px;
  }
`

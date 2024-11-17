import styled from 'styled-components'
import { cores } from '../../styles'

export const Imagem = styled.header`
  width: 100%;
  height: 384px;
  margin: 0 auto;
  background-size: cover;
  background-position: center;
  position: relative;

  @media (max-width: 768px) {
    height: 250px;
  }

  @media (max-width: 480px) {
    height: 180px;
  }
`

export const Logo = styled.div`
  width: 125px;
  height: 56px;
  top: 40px;
  left: 50%;
  position: absolute;
  transform: translateX(-50%);

  @media (max-width: 768px) {
    width: 100px;
    height: 45px;
    top: 20px;
  }

  @media (max-width: 480px) {
    width: 80px;
    height: 36px;
    top: 15px;
  }
`

export const Titulo = styled.h1`
  font-weight: bold;
  font-size: 2.25rem;
  line-height: 1.2;
  width: 36%;
  height: auto;
  position: absolute;
  top: 236px;
  left: 50%;
  transform: translateX(-50%);
  color: ${cores.rosa};
  text-align: center;

  @media (max-width: 1024px) {
    font-size: 1.75rem;
    top: 200px;
    width: 50%;
  }

  @media (max-width: 768px) {
    font-size: 1.5rem;
    top: 160px;
    width: 70%;
  }

  @media (max-width: 480px) {
    font-size: 1.25rem;
    top: 120px;
    width: 80%;
  }
`

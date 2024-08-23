import styled from 'styled-components'
import { cores } from '../../styles'

export const Imagem = styled.header`
  width: 100%;
  height: 384px;
  margin: 0 auto;
  background-size: cover;
  background-position: center;
  position: relative;
`

export const Logo = styled.div`
  width: 125px;
  height: 56px;
  top: 40px;
  left: 50%;
  position: absolute;
  transform: translateX(-50%);
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
`

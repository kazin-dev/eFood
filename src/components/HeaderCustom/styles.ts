import styled from 'styled-components'
import { cores } from '../../styles'

export const HeaderCustomContainer = styled.header`
  background-color: #fff;
`

export const Imagem = styled.header`
  width: 100%;
  height: 146px;
  padding: 0;
  margin: 0;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
`

export const Links = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  padding-top: 68px;
`

export const Logo = styled.div`
  width: 125px;
  height: 56px;
  position: absolute;
  top: 40px;
  left: 50%;
  transform: translateX(-50%);
`
export const Link = styled.a`
  font-size: 18px;
  font-weight: 900;
  line-height: 21.09px;
  text-decoration: none;
  color: ${cores.rosa};
`

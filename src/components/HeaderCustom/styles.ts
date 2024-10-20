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
  width: 100%;
  padding-top: 68px;
  position: relative;

  li:last-child {
    margin-left: 40px;
    position: absolute;
    left: 81.3%;
  }
`

export const Logo = styled.div`
  width: 125px;
  height: 56px;
  position: absolute;
  top: 40px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1;
`

export const Link = styled.a`
  font-size: 18px;
  font-weight: 900;
  line-height: 21px;
  text-decoration: none;
  color: ${cores.rosa};
  display: inline-flex;
  white-space: nowrap;
  align-items: center;
  cursor: pointer;
`

export const Container = styled.div`
  max-width: 1088px;
  width: 100%;
  margin: 0 auto;
`

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

  @media (max-width: 768px) {
    height: 120px;
  }

  @media (max-width: 480px) {
    height: 100px;
  }
`

export const Links = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding-top: 68px;
  position: relative;
  flex-wrap: wrap;

  li {
    margin-right: 20px;
  }

  li:last-child {
    margin-left: auto;
    position: relative;
  }

  @media (max-width: 768px) {
    padding-top: 40px;
    li {
      margin-right: 10px;
    }
    li:last-child {
      position: static;
      margin-left: 0;
    }
  }

  @media (max-width: 480px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
    padding-top: 20px;
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

  @media (max-width: 768px) {
    width: 100px;
    height: 45px;
    top: 30px;
  }

  @media (max-width: 480px) {
    width: 80px;
    height: 36px;
    top: 20px;
  }
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

  @media (max-width: 768px) {
    font-size: 16px;
  }

  @media (max-width: 480px) {
    font-size: 14px;
    display: flex;
    justify-content: space-between;
    width: 100%;
  }
`

export const Container = styled.div`
  max-width: 1088px;
  width: 100%;
  margin: 0 auto;
  padding: 0 16px;

  @media (max-width: 768px) {
    padding: 0 24px;
  }

  @media (max-width: 480px) {
    padding: 0 12px;
  }
`

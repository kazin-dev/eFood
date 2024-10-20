import styled from 'styled-components'
import { cores } from '../../styles'

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
  opacity: 0.7;
  cursor: pointer;
`

export const CartContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  z-index: 1;
`

export const Aside = styled.aside`
  background-color: ${cores.rosa};
  width: 360px;
  padding: 40px 16px 0 16px;
  position: relative;
  display: flex;
  flex-direction: column;
  z-index: 1;
`

export const ContinueButton = styled.button`
  background-color: ${cores.brancoBege};
  color: ${cores.rosa};
  padding: 10px;
  border: none;
  cursor: pointer;
  margin-top: 10px;
  font-weight: bold;
  font-size: 14px;
`

export const CardItem = styled.li`
  display: flex;
  background-color: ${cores.branco};
  padding: 8px;
  margin-bottom: 16px;

  h3 {
    color: ${cores.rosa};
    font-size: 18px;
    font-weight: bold;
    line-height: 21.09px;
    margin-bottom: 16px;
  }

  img {
    width: 80px;
    height: 80px;
    object-fit: cover;
    margin-right: 8px;
  }

  p {
    font-size: 14px;
    font-weight: 400px;
    line-height: 22px;
    color: ${cores.rosa};
  }
`

export const LixeiraContainer = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  margin-left: auto;

  img {
    width: 16px;
    height: 16px;
  }
`
export const Total = styled.div`
  display: flex;
  color: ${cores.brancoBege};
  font-size: 14px;
  font-weight: 700px;
  gap: 60%;
  margin-top: 40px;
`

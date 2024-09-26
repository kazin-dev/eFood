import styled from 'styled-components'
import { cores } from '../../styles'

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  z-index: 999;
`

export const CardWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 20px;
`

export const CardIMG = styled.img`
  width: 280px;
  height: 280px;
  object-fit: cover;
`

export const ModalContent = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1000;
  background-color: ${cores.rosa};
  padding: 32px;
`

export const BotaoModal = styled.button`
  background-color: ${cores.brancoBege};
  color: ${cores.rosa};
  border: none;
  cursor: pointer;
  font-size: 14px;
  font-weight: 700;
  margin-top: 20px;
  width: 220px;
  height: 26px;
  line-height: 1.5;
  white-space: nowrap;
`

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 0;
  width: 656px;
`

export const TituloCard = styled.h3`
  line-height: 21.09px;
  font-size: 18px;
  font-weight: 900;
  margin-bottom: 16px;
  color: #fff;
`

export const DescricaoCard = styled.p`
  font-size: 14px;
  font-weight: 400;
  color: #fff;
  line-height: 22px;
`

export const Info = styled.div`
  font-size: 14px;
  color: #fff;
  margin-top: 20px;
  line-height: 22px;
  font-weight: 400;
`

export const CloseButton = styled.button`
  position: absolute;
  top: 16px;
  right: 16px;
  background: none;
  border: none;
  cursor: pointer;
`

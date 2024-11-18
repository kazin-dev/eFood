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

export const ModalContent = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1000;
  background-color: ${cores.rosa};
  padding: 32px;
  border-radius: 8px;
  width: 80%;
  max-width: 800px;

  @media (max-width: 768px) {
    padding: 24px;
    width: 90%;
  }

  @media (max-width: 480px) {
    padding: 16px;
    width: 95%;
  }
`

export const CardWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 16px;
  }
`

export const CardIMG = styled.img`
  width: 280px;
  height: 280px;
  object-fit: cover;
  border-radius: 8px;

  @media (max-width: 768px) {
    width: 200px;
    height: 200px;
  }

  @media (max-width: 480px) {
    width: 180px;
    height: 180px;
  }
`

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  max-width: 656px;

  @media (max-width: 768px) {
    align-items: center;
    text-align: center;
  }
`

export const TituloCard = styled.h3`
  line-height: 21.09px;
  font-size: 18px;
  font-weight: 900;
  margin-bottom: 16px;
  color: #fff;

  @media (max-width: 480px) {
    font-size: 16px;
  }
`

export const DescricaoCard = styled.p`
  font-size: 14px;
  font-weight: 400;
  color: #fff;
  line-height: 22px;

  @media (max-width: 480px) {
    font-size: 13px;
    line-height: 20px;
  }
`

export const Info = styled.div`
  font-size: 14px;
  color: #fff;
  margin-top: 20px;
  line-height: 22px;
  font-weight: 400;

  @media (max-width: 480px) {
    font-size: 13px;
    margin-top: 16px;
  }
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
  height: 40px;
  border-radius: 4px;
  white-space: nowrap;

  @media (max-width: 768px) {
    width: 180px;
  }

  @media (max-width: 480px) {
    width: 100%;
    height: 36px;
    width: 120px;
  }
`

export const CloseButton = styled.button`
  position: absolute;
  top: 16px;
  right: 16px;
  background: none;
  border: none;
  cursor: pointer;
  color: #fff;
  font-size: 24px;

  @media (max-width: 480px) {
    top: 12px;
    right: 12px;
    font-size: 20px;
  }
`

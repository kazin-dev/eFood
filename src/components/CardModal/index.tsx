import React from 'react'
import {
  Overlay,
  CloseButton,
  CardIMG,
  BotaoModal,
  TituloCard,
  ModalContent,
  DescricaoCard,
  Info,
  CardContainer,
  CardWrapper
} from './styles'

import fechar from '../../assets/images/close 1.png'

interface CardModalProps {
  titulo: string
  descricao: string
  imagem: string
  informacao: string
  onButtonClick: () => void
  onClose: () => void
}

const CardModal: React.FC<CardModalProps> = ({
  titulo,
  descricao,
  imagem,
  informacao,
  onButtonClick,
  onClose
}) => {
  return (
    <Overlay>
      <ModalContent>
        <CloseButton onClick={onClose}>
          <img src={fechar} alt="Fechar" />
        </CloseButton>
        <CardWrapper>
          <CardIMG src={imagem} alt={titulo} />
          <CardContainer>
            <TituloCard>{titulo}</TituloCard>
            <DescricaoCard>{descricao}</DescricaoCard>
            <Info>
              <p>{informacao}</p>
            </Info>
            <BotaoModal onClick={onButtonClick}>
              Adicionar ao carrinho - R$ 60,90{' '}
            </BotaoModal>
          </CardContainer>
        </CardWrapper>
      </ModalContent>
    </Overlay>
  )
}

export default CardModal

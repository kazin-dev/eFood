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

import { CardapioItem } from '../../API/api'
import fechar from '../../assets/images/close 1.png'

interface CardModalProps {
  titulo: string
  descricao: string
  imagem: string
  informacao: string
  cardapio: CardapioItem[]
  onButtonClick: () => void
  onClose: () => void
}

const CardModal: React.FC<CardModalProps> = ({
  cardapio,
  onButtonClick,
  onClose
}) => {
  const firstItem = cardapio[0]

  return (
    <Overlay>
      <ModalContent>
        <CloseButton onClick={onClose}>
          <img src={fechar} />
        </CloseButton>
        {firstItem && (
          <CardWrapper>
            {' '}
            <CardIMG src={firstItem.foto} alt={firstItem.nome} />
            <CardContainer>
              <TituloCard>{firstItem.nome}</TituloCard>
              <DescricaoCard>{firstItem.descricao}</DescricaoCard>

              <Info>
                <p>Porção: {firstItem.porcao}</p>
              </Info>
              <BotaoModal onClick={onButtonClick}>
                adicionar ao carrinho - R$ {firstItem.preco.toFixed(2)}
              </BotaoModal>
            </CardContainer>
          </CardWrapper>
        )}
      </ModalContent>
    </Overlay>
  )
}

export default CardModal

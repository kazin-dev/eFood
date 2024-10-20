import React from 'react'
import { Overlay, ModalContent, CloseButton } from './styles'
import { CardapioItem } from '../../API/api'

interface CarrinhoModalProps {
  carrinho: CardapioItem[]
  onClose: () => void
  onRemoveItem: (index: number) => void
}

const CarrinhoModal: React.FC<CarrinhoModalProps> = ({
  carrinho,
  onClose,
  onRemoveItem
}) => {
  const calcularTotal = () => {
    return carrinho.reduce((total, item) => total + item.preco, 0).toFixed(2)
  }

  return (
    <Overlay>
      <ModalContent>
        <CloseButton onClick={onClose}>Fechar</CloseButton>
        <h2>Carrinho</h2>
        {carrinho.length === 0 ? (
          <p>O carrinho está vazio.</p>
        ) : (
          <ul>
            {carrinho.map((item, index) => (
              <li key={index}>
                {item.nome} - R$ {item.preco.toFixed(2)}
                <button onClick={() => onRemoveItem(index)}>Remover</button>
              </li>
            ))}
          </ul>
        )}
        <p>Total: R$ {calcularTotal()}</p>
      </ModalContent>
    </Overlay>
  )
}

export default CarrinhoModal

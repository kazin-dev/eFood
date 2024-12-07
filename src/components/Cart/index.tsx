import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  Aside,
  CardItem,
  CartContainer,
  ContinueButton,
  LixeiraContainer,
  Overlay,
  Total
} from './styles'
import { RootState } from '../../store'
import pizza from '../../assets/images/image 3PizzaCardModal.png'
import excluir from '../../assets/images/lixeira-de-reciclagem 1.png'
import { remove } from '../../store/reducers/cart'

const Cart = ({
  onClose,
  onContinue
}: {
  onClose: () => void
  onContinue: () => void
}) => {
  const dispatch = useDispatch()
  const carrinho = useSelector((state: RootState) => state.cart.items)
  // const totalPrice = useSelector((state: RootState) => state.cart.totalPrice)

  const { items, totalPrice } = useSelector((state: RootState) => ({
    items: state.cart.items,
    totalPrice: state.cart.totalPrice
  }))

  console.log('Itens no carrinho:', items)
  console.log('Preço total renderizado:', totalPrice)

  const handleRemove = (id: number) => {
    dispatch(remove(id))
  }

  return (
    <CartContainer key={totalPrice}>
      <Overlay onClick={onClose} />

      <Aside>
        <ul>
          {carrinho.map((item) => (
            <CardItem key={item.id}>
              <img src={item.foto || pizza} alt={item.nome} />
              <div>
                <h3>{item.nome}</h3>
                <p>R$ {item.preco.toFixed(2)}</p>
              </div>
              <LixeiraContainer onClick={() => handleRemove(item.id)}>
                <img src={excluir} alt="lixeira" />
              </LixeiraContainer>
            </CardItem>
          ))}
        </ul>
        <Total>
          <p>Valor Total</p>
          <span>R$ {totalPrice.toFixed(2)}</span>
        </Total>

        <ContinueButton onClick={onContinue}>
          Continuar com a entrega
        </ContinueButton>
      </Aside>
    </CartContainer>
  )
}

export default Cart

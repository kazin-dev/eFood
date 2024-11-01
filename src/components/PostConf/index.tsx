import React from 'react'
import { Aside, CartContainer, Overlay } from '../Cart/styles'
import { ButtonForm } from '../PostEntrega/styles'
import { Info, Title } from './styles'

interface FinalizadoProps {
  onClose: () => void
  orderData: {
    orderId: string
  }
}

const Finalizado: React.FC<FinalizadoProps> = ({ onClose, orderData }) => {
  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) onClose()
  }

  return (
    <CartContainer>
      <Overlay onClick={handleOverlayClick} />
      <Aside>
        <Info>
          <Title>Pedido Realizado - {orderData.orderId}</Title>
          <p>
            Estamos felizes em informar que seu pedido já está em processo de
            preparação e, em breve, será entregue no endereço fornecido.
          </p>
          <p>
            Gostaríamos de ressaltar que nossos entregadores não estão
            autorizados a realizar cobranças extras.
          </p>
          <p>
            Lembre-se da importância de higienizar as mãos após o recebimento do
            pedido, garantindo assim sua segurança e bem-estar durante a
            refeição.
          </p>
          <p>
            Esperamos que desfrute de uma deliciosa e agradável experiência
            gastronômica. Bom apetite!
          </p>
        </Info>
        <ButtonForm type="button" onClick={onClose}>
          Concluir
        </ButtonForm>
      </Aside>
    </CartContainer>
  )
}

export default Finalizado

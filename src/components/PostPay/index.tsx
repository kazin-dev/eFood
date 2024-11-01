import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../../store'
import { Aside, CartContainer, Overlay } from '../Cart/styles'
import {
  ButtonForm,
  ExpiryContainer,
  InputGroup,
  InputInfo,
  InputRow,
  Label,
  Title
} from '../PostEntrega/styles'
import api from '../../API/api'
import { setPaymentInfo } from '../../store/reducers/cart'

interface PayProps {
  onReturnToEntrega: () => void
  onFinalizarPagamento: (orderData: any) => void
}

const Pay: React.FC<PayProps> = ({
  onReturnToEntrega,
  onFinalizarPagamento
}) => {
  const dispatch = useDispatch()
  const totalPrice = useSelector((state: RootState) => state.cart.totalPrice)
  const deliveryInfo = useSelector(
    (state: RootState) => state.cart.deliveryInfo
  )
  const cartItems = useSelector((state: RootState) => state.cart.items)

  const [nomeCartao, setNomeCartao] = useState('')
  const [numeroCartao, setNumeroCartao] = useState('')
  const [cvv, setCvv] = useState('')
  const [mesVencimento, setMesVencimento] = useState<number | undefined>(
    undefined
  )
  const [anoVencimento, setAnoVencimento] = useState<number | undefined>(
    undefined
  )

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) onReturnToEntrega()
  }

  const handleSubmitPayment = async (e: React.FormEvent) => {
    e.preventDefault()

    const paymentInfo = {
      nomeCartao,
      numeroCartao,
      cvv,
      mesVencimento: mesVencimento || 0,
      anoVencimento: anoVencimento || 0
    }

    const requestData = {
      products: cartItems.map((item) => ({ id: item.id, price: item.preco })),
      delivery: deliveryInfo,
      payment: {
        card: {
          name: paymentInfo.nomeCartao,
          number: paymentInfo.numeroCartao,
          code: paymentInfo.cvv,
          expires: {
            month: paymentInfo.mesVencimento,
            year: paymentInfo.anoVencimento
          }
        }
      }
    }

    console.log('Request Data:', requestData)

    try {
      const response = await api.post('/checkout', requestData)
      console.log('Response Data:', response.data)

      onFinalizarPagamento(response.data)
      dispatch(setPaymentInfo(paymentInfo))
    } catch (error) {
      console.error('Erro ao finalizar pagamento:', error)
    }
  }

  return (
    <CartContainer>
      <Overlay onClick={handleOverlayClick} />
      <Aside>
        <Title>
          Pagamento - Valor a pagar R$ <span>{totalPrice.toFixed(2)}</span>
        </Title>
        <form onSubmit={handleSubmitPayment}>
          <InputGroup>
            <Label htmlFor="NomeCartao">Nome do cartão</Label>
            <InputInfo
              type="text"
              id="NomeCartao"
              value={nomeCartao}
              onChange={(e) => setNomeCartao(e.target.value)}
              required
            />
          </InputGroup>
          <InputRow>
            <div>
              <Label htmlFor="NumeroCartao">Número do cartão</Label>
              <InputInfo
                type="text"
                id="NumeroCartao"
                maxLength={16}
                value={numeroCartao}
                onChange={(e) => setNumeroCartao(e.target.value)}
                required
              />
            </div>
            <div>
              <Label htmlFor="NumeroCVV">CVV</Label>
              <InputInfo
                type="text"
                id="NumeroCVV"
                maxLength={3}
                value={cvv}
                onChange={(e) => setCvv(e.target.value)}
                required
              />
            </div>
          </InputRow>
          <InputRow>
            <ExpiryContainer>
              <div>
                <Label htmlFor="MesVencimento">Mês de vencimento</Label>
                <InputInfo
                  type="number"
                  id="MesVencimento"
                  min={1}
                  max={12}
                  value={mesVencimento || ''}
                  onChange={(e) => setMesVencimento(Number(e.target.value))}
                  required
                />
              </div>
              <div>
                <Label htmlFor="AnoVencimento">Ano de vencimento</Label>
                <InputInfo
                  type="number"
                  id="AnoVencimento"
                  min={new Date().getFullYear()}
                  value={anoVencimento || ''}
                  onChange={(e) => setAnoVencimento(Number(e.target.value))}
                  required
                />
              </div>
            </ExpiryContainer>
          </InputRow>

          <ButtonForm type="submit">Finalizar pagamento</ButtonForm>
          <ButtonForm type="button" onClick={onReturnToEntrega}>
            Voltar para a edição de endereço
          </ButtonForm>
        </form>
      </Aside>
    </CartContainer>
  )
}

export default Pay

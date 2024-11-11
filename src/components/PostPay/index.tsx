import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Formik, Field, Form, ErrorMessage } from 'formik'
import * as Yup from 'yup'
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

interface PaymentFormValues {
  nomeCartao: string
  numeroCartao: string
  cvv: string
  mesVencimento: number
  anoVencimento: number
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

  const initialValues: PaymentFormValues = {
    nomeCartao: '',
    numeroCartao: '',
    cvv: '',
    mesVencimento: 0,
    anoVencimento: new Date().getFullYear()
  }

  const validationSchema = Yup.object({
    nomeCartao: Yup.string()
      .required('O nome do cartão é obrigatório')
      .min(3, 'O nome deve ter pelo menos 3 caracteres'),
    numeroCartao: Yup.string()
      .required('O número do cartão é obrigatório')
      .matches(/^\d{16}$/, 'O número do cartão deve ter 16 dígitos'),
    cvv: Yup.string()
      .required('O CVV é obrigatório')
      .matches(/^\d{3}$/, 'O CVV deve ter 3 dígitos'),
    mesVencimento: Yup.number()
      .required('O mês de vencimento é obrigatório')
      .min(1, 'Mês inválido')
      .max(12, 'Mês inválido'),
    anoVencimento: Yup.number()
      .required('O ano de vencimento é obrigatório')
      .min(new Date().getFullYear(), 'Ano inválido')
  })

  const handleSubmitPayment = async (values: PaymentFormValues) => {
    const paymentInfo = {
      nomeCartao: values.nomeCartao,
      numeroCartao: values.numeroCartao,
      cvv: values.cvv,
      mesVencimento: values.mesVencimento,
      anoVencimento: values.anoVencimento
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
      <Overlay onClick={() => onReturnToEntrega()} />
      <Aside>
        <Title>
          Pagamento - Valor a pagar R$ <span>{totalPrice.toFixed(2)}</span>
        </Title>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmitPayment}
        >
          {({ handleChange, handleBlur }) => (
            <Form>
              <InputGroup>
                <Label htmlFor="nomeCartao">Nome do cartão</Label>
                <Field
                  as={InputInfo}
                  type="text"
                  id="nomeCartao"
                  name="nomeCartao"
                  placeholder="Nome no cartão"
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <ErrorMessage name="nomeCartao">
                  {(msg) => <div style={{ color: 'red' }}>{msg}</div>}
                </ErrorMessage>
              </InputGroup>

              <InputRow>
                <div>
                  <Label htmlFor="numeroCartao">Número do cartão</Label>
                  <Field
                    as={InputInfo}
                    type="text"
                    id="numeroCartao"
                    name="numeroCartao"
                    maxLength={16}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  <ErrorMessage name="numeroCartao">
                    {(msg) => <div style={{ color: 'red' }}>{msg}</div>}
                  </ErrorMessage>
                </div>
                <div>
                  <Label htmlFor="cvv">CVV</Label>
                  <Field
                    as={InputInfo}
                    type="text"
                    id="cvv"
                    name="cvv"
                    maxLength={3}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  <ErrorMessage name="cvv">
                    {(msg) => <div style={{ color: 'red' }}>{msg}</div>}
                  </ErrorMessage>
                </div>
              </InputRow>

              <InputRow>
                <ExpiryContainer>
                  <div>
                    <Label htmlFor="mesVencimento">Mês de vencimento</Label>
                    <Field
                      as={InputInfo}
                      type="number"
                      id="mesVencimento"
                      name="mesVencimento"
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    <ErrorMessage name="mesVencimento">
                      {(msg) => <div style={{ color: 'red' }}>{msg}</div>}
                    </ErrorMessage>
                  </div>
                  <div>
                    <Label htmlFor="anoVencimento">Ano de vencimento</Label>
                    <Field
                      as={InputInfo}
                      type="number"
                      id="anoVencimento"
                      name="anoVencimento"
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    <ErrorMessage name="anoVencimento">
                      {(msg) => <div style={{ color: 'red' }}>{msg}</div>}
                    </ErrorMessage>
                  </div>
                </ExpiryContainer>
              </InputRow>

              <ButtonForm type="submit">Finalizar pagamento</ButtonForm>
              <ButtonForm type="button" onClick={onReturnToEntrega}>
                Voltar para a edição de endereço
              </ButtonForm>
            </Form>
          )}
        </Formik>
      </Aside>
    </CartContainer>
  )
}

export default Pay

import React from 'react'
import { Formik, Field, Form, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import { Aside, CartContainer, Overlay } from '../Cart/styles'
import {
  InputGroup,
  Label,
  InputInfo,
  InputRow,
  ButtonForm,
  Title,
  ErrorText
} from './styles'

const Entrega = ({
  onClose,
  onContinue
}: {
  onClose: () => void
  onContinue: () => void
}) => {
  const initialValues = {
    quem: '',
    endereco: '',
    cidade: '',
    cep: '',
    numero: '',
    complemento: ''
  }

  const validationSchema = Yup.object({
    quem: Yup.string()
      .required('O nome do destinatário é obrigatório')
      .min(3, 'O nome deve ter pelo menos 3 caracteres'),
    endereco: Yup.string().required('O endereço é obrigatório'),
    cidade: Yup.string().required('A cidade é obrigatória'),
    cep: Yup.string()
      .required('O CEP é obrigatório')
      .matches(/^\d{5}-?\d{3}$/, 'CEP inválido'),
    numero: Yup.number()
      .required('O número é obrigatório')
      .positive('Número deve ser positivo')
      .integer('Número deve ser inteiro')
      .typeError('Número inválido'),
    complemento: Yup.string()
  })

  const handleSubmit = (values: typeof initialValues) => {
    console.log('Dados da entrega:', values)
    onContinue()
  }

  return (
    <CartContainer>
      <Overlay onClick={onClose} />
      <Aside>
        <Title>Entrega</Title>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ handleChange, handleBlur }) => (
            <Form>
              <InputGroup>
                <Label htmlFor="quem">Quem irá receber</Label>
                <Field as={InputInfo} type="text" id="quem" name="quem" />
                <ErrorMessage name="quem" component={ErrorText} />
              </InputGroup>

              <InputGroup>
                <Label htmlFor="endereco">Endereço</Label>
                <Field
                  as={InputInfo}
                  type="text"
                  id="endereco"
                  name="endereco"
                />
                <ErrorMessage name="endereco" component={ErrorText} />
              </InputGroup>

              <InputGroup>
                <Label htmlFor="cidade">Cidade</Label>
                <Field as={InputInfo} type="text" id="cidade" name="cidade" />
                <ErrorMessage name="cidade" component={ErrorText} />
              </InputGroup>

              <InputRow>
                <div>
                  <Label htmlFor="cep">CEP</Label>
                  <Field as={InputInfo} type="text" id="cep" name="cep" />
                  <ErrorMessage name="cep" component={ErrorText} />
                </div>
                <div>
                  <Label htmlFor="numero">Número</Label>
                  <Field as={InputInfo} type="text" id="numero" name="numero" />
                  <ErrorMessage name="numero" component={ErrorText} />
                </div>
              </InputRow>

              <InputGroup>
                <Label htmlFor="complemento">Complemento (opcional)</Label>
                <Field
                  as={InputInfo}
                  type="text"
                  id="complemento"
                  name="complemento"
                />
              </InputGroup>

              <ButtonForm type="submit">Continuar com o pagamento</ButtonForm>
              <ButtonForm type="button" onClick={onClose}>
                Voltar para o carrinho
              </ButtonForm>
            </Form>
          )}
        </Formik>
      </Aside>
    </CartContainer>
  )
}

export default Entrega

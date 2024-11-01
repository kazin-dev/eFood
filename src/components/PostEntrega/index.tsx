import { Aside, CartContainer, Overlay } from '../Cart/styles'
import {
  InputGroup,
  Label,
  InputInfo,
  InputRow,
  ButtonForm,
  Title
} from './styles'

const Entrega = ({
  onClose,
  onContinue
}: {
  onClose: () => void
  onContinue: () => void
}) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onContinue()
  }

  return (
    <CartContainer>
      <Overlay onClick={onClose} />
      <Aside>
        <div>
          <Title>Entrega</Title>
        </div>
        <form onSubmit={handleSubmit}>
          <InputGroup>
            <Label htmlFor="quem">Quem irá receber</Label>
            <InputInfo type="text" id="quem" required />
          </InputGroup>
          <InputGroup>
            <Label htmlFor="endereco">Endereço</Label>
            <InputInfo type="text" id="endereco" required />
          </InputGroup>
          <InputGroup>
            <Label htmlFor="cidade">Cidade</Label>
            <InputInfo type="text" id="cidade" required />
          </InputGroup>
          <InputRow>
            <div>
              <Label htmlFor="cep">CEP</Label>
              <InputInfo type="number" id="cep" required />
            </div>
            <div>
              <Label htmlFor="numero">Número</Label>
              <InputInfo type="number" id="numero" required />
            </div>
          </InputRow>
          <InputGroup>
            <Label htmlFor="complemento">Complemento (opcional)</Label>
            <InputInfo type="text" id="complemento" />
          </InputGroup>
          <ButtonForm type="submit">Continuar com o pagamento</ButtonForm>
          <ButtonForm type="button" onClick={onClose}>
            Voltar para o carrinho
          </ButtonForm>
        </form>
      </Aside>
    </CartContainer>
  )
}

export default Entrega

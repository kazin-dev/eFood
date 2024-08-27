import { Container } from '../../styles'
import {
  ButtonCard,
  Card,
  CardContainer,
  CardInfo,
  DescricaoCard,
  TituloCard
} from './styles'

type Props = {
  nome: string
  descricao: string
  imagem: string
  onClick?: () => void
}

const ProdutosItem = ({ nome, descricao, imagem, onClick }: Props) => (
  <Container>
    <Card>
      <CardContainer>
        <img src={imagem} alt={nome} />
        <CardInfo>
          <TituloCard>{nome}</TituloCard>
          <DescricaoCard>{descricao}</DescricaoCard>
          <ButtonCard onClick={onClick}>Adicionar ao carrinho</ButtonCard>
        </CardInfo>
      </CardContainer>
    </Card>
  </Container>
)

export default ProdutosItem

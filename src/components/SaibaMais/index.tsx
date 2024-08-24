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
}

const ProdutosItem = ({ nome, descricao, imagem }: Props) => (
  <Container>
    <Card>
      <CardContainer>
        <img src={imagem} alt={nome} />
        <CardInfo>
          <TituloCard>{nome}</TituloCard>
          <DescricaoCard>{descricao}</DescricaoCard>
          <ButtonCard>Adicionar ao carrinho</ButtonCard>
        </CardInfo>
      </CardContainer>
    </Card>
  </Container>
)

export default ProdutosItem

import { Container } from '../../styles'
import {
  ButtonCard,
  Card,
  CardContainer,
  CardInfo,
  DescricaoCard,
  TituloCard,
  CardImage
} from './styles'

type Props = {
  nome: string
  descricao: string
  imagem: string
  preco: number
  onClick?: () => void // Função para ser chamada no clique
}

const ProdutosItem = ({ nome, descricao, imagem, onClick }: Props) => (
  <Container>
    <Card>
      <CardContainer>
        <CardImage src={imagem} alt={nome} />
        <CardInfo>
          <TituloCard>{nome}</TituloCard>
          <DescricaoCard>{descricao}</DescricaoCard>
          <ButtonCard onClick={onClick}>Adicionar ao carrinho</ButtonCard>{' '}
          {/* Chama a função ao clicar */}
        </CardInfo>
      </CardContainer>
    </Card>
  </Container>
)

export default ProdutosItem

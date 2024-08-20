import PrimeiroBotao from '../Botao'
import { TagProps } from '../Tags'
import { TagWrapper, TagContainer } from '../Tags/styles'
import { Avaliacao, Card, CardContainer, CardInfo, P, Titulo } from './styles'
import Estrela from '../../assets/images/estrela.png'

type Props = {
  nome: string
  avaliacao: number
  descricao: string
  imagem: string
  categoria: string
  destaque?: string
}

const Tag = ({ children, width = 'small' }: TagProps) => (
  <TagContainer width={width}>{children}</TagContainer>
)

const Cards = ({
  nome,
  avaliacao,
  descricao,
  imagem,
  categoria,
  destaque
}: Props) => (
  <Card>
    <div style={{ position: 'relative' }}>
      <img
        src={imagem}
        alt={`${categoria} - ${nome}`}
        style={{ width: '100%', height: 'auto' }}
      />
      <TagWrapper>
        {destaque && <Tag width="big">{destaque}</Tag>}

        <Tag>{categoria}</Tag>
      </TagWrapper>
    </div>
    <CardContainer>
      <CardInfo>
        <Titulo>{nome}</Titulo>
        <Avaliacao>
          {avaliacao}
          <img src={Estrela} alt="Estrela de avaliação" />
        </Avaliacao>
      </CardInfo>
      <P>{descricao}</P>
      <PrimeiroBotao />
    </CardContainer>
  </Card>
)

export default Cards

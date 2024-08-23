import PrimeiroBotao from '../Botao'
import { TagProps } from '../Tags'
import { TagWrapper, TagContainer } from '../Tags/styles'
import { Avaliacao, Card, CardContainer, CardInfo, P, Titulo } from './styles'
import Estrela from '../../assets/images/estrela.png'
import { Link } from 'react-router-dom'

type Props = {
  id: number
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
  id,
  nome,
  avaliacao,
  descricao,
  imagem,
  categoria,
  destaque
}: Props) => (
  <Card data-id={id}>
    <div style={{ position: 'relative' }}>
      <img
        src={imagem}
        alt={`${categoria} - ${nome}`}
        style={{ width: '100%', height: 'auto', display: 'block' }}
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
      <Link to={'/produtos'}>
        <PrimeiroBotao />
      </Link>
    </CardContainer>
  </Card>
)

export default Cards

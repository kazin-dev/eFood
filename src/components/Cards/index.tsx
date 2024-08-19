import { Avaliacao, CardInfo, Titulo, Card, CardContainer, P } from './styles'
import Estrela from '../../assets/images/estrela.png'
import PrimeiroBotao from '../Botao'

type Props = {
  nome: string
  avaliacao: string
  descricao: string
  imagem: string
  categoria: string
}

const Cards: React.FC<Props> = ({
  nome,
  avaliacao,
  descricao,
  imagem,
  categoria
}) => (
  <Card>
    <img src={imagem} alt={`${categoria} - ${nome}`} />
    <CardContainer>
      <CardInfo>
        <Titulo>{nome}</Titulo>
        <Avaliacao>
          {avaliacao}
          <img src={Estrela} />
        </Avaliacao>
      </CardInfo>
      <P>{descricao}</P>
      <PrimeiroBotao />
    </CardContainer>
  </Card>
)

export default Cards

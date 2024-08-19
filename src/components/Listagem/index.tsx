import Cards from '../Cards'
import Hioki from '../../assets/images/Hioki.png'
import { DivGrid } from './styles'

const ListGrid = () => (
  <DivGrid>
    <Cards
      nome="Hioki Sushi"
      avaliacao="4.6"
      descricao="Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!"
      imagem={Hioki}
      categoria="Japonesa"
    />
  </DivGrid>
)

export default ListGrid

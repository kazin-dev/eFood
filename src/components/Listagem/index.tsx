import Cards from '../Cards'
import Hioki from '../../assets/images/Hioki.png'
import Dolce from '../../assets/images/Dolce.png'
import { DivGrid } from './styles'

const ListGrid = () => (
  <DivGrid>
    <Cards
      id={1}
      nome="Hioki Sushi"
      avaliacao={4.9}
      descricao="Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!"
      imagem={Hioki}
      categoria="Japonesa"
      destaque="Destaque da semana"
    />
    <Cards
      id={2}
      nome="La Dolce Vita Trattoria"
      avaliacao={4.6}
      descricao="A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!"
      imagem={Dolce}
      categoria="Italiana"
      destaque={''}
    />
    <Cards
      id={3}
      nome="La Dolce Vita Trattoria"
      avaliacao={4.6}
      descricao="A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!"
      imagem={Dolce}
      categoria="Italiana"
      destaque={''}
    />
    <Cards
      id={4}
      nome="La Dolce Vita Trattoria"
      avaliacao={4.6}
      descricao="A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!"
      imagem={Dolce}
      categoria="Italiana"
      destaque={''}
    />
    <Cards
      id={5}
      nome="La Dolce Vita Trattoria"
      avaliacao={4.6}
      descricao="A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!"
      imagem={Dolce}
      categoria="Italiana"
      destaque={''}
    />
    <Cards
      id={6}
      nome="La Dolce Vita Trattoria"
      avaliacao={4.6}
      descricao="A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!"
      imagem={Dolce}
      categoria="Italiana"
      destaque={''}
    />
  </DivGrid>
)

export default ListGrid

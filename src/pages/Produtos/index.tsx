import { Container } from '../../styles'
import Footer from '../../components/Rodape'
import HeaderCustom from '../../components/HeaderCustom'
import ProdutosItem from '../../components/SaibaMais'
import Apresentacao from '../../components/Banner'

const Produtos = () => (
  <>
    <HeaderCustom />
    <Apresentacao />
    <Container>
      <ProdutosItem />
    </Container>
    <Footer />
  </>
)

export default Produtos

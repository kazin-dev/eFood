import { Container } from '../../styles'
import Footer from '../../components/Rodape'
import HeaderCustom from '../../components/HeaderCustom'
import Apresentacao from '../../components/Banner'
import ListGridProdutos from '../../components/ListagemProdutos'

const Produtos = () => (
  <>
    <HeaderCustom />
    <Apresentacao />
    <Container>
      <ListGridProdutos />
    </Container>
    <Footer />
  </>
)

export default Produtos

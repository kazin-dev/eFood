import { Container } from '../../styles'
import Footer from '../../components/Rodape'
import HeaderCustom from '../../components/HeaderCustom'
import Apresentacao from '../../components/Banner'
import ListGridProdutos from '../../components/ListagemProdutos'
import { CardInfo } from '../../components/SaibaMais/styles'

const Produtos = () => (
  <>
    <HeaderCustom />
    <Apresentacao />
    <Container>
      <ListGridProdutos />
      <CardInfo />
    </Container>
    <Footer />
  </>
)

export default Produtos

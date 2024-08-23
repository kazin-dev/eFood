import Header from '../../components/Header'
import ListGrid from '../../components/Listagem'
import Footer from '../../components/Rodape'
import { Container } from '../../styles'

const Home = () => (
  <>
    <Header />
    <Container>
      <ListGrid />
    </Container>
    <Footer />
  </>
)

export default Home

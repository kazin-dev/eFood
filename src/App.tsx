import Header from './components/Header'
import ListGrid from './components/Listagem'
import { Container, GlobalCss } from './styles'

function App() {
  return (
    <>
      <GlobalCss />
      <Header />
      <Container>
        <ListGrid />
      </Container>
    </>
  )
}

export default App

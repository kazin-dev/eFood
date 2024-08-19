import { Imagem, Logo, Titulo } from './styles'
import Banner from '../../assets/images/Vector.png'
import LogoTitulo from '../../assets/images/logoTitulo.png'
import { Container } from '../../styles'

const Header = () => (
  <Imagem style={{ backgroundImage: `url(${Banner})` }}>
    <Container>
      <Logo>
        <img src={LogoTitulo} />
      </Logo>
      <Titulo>Viva experiências gastronômicas no conforto da sua casa</Titulo>
    </Container>
  </Imagem>
)

export default Header

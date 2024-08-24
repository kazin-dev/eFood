import { Container } from '../../styles'
import { HeaderCustomContainer, Imagem, Link, Links } from './styles'
import LogoTitulo from '../../assets/images/logoTitulo.png'
import Banner from '../../assets/images/Vector.png'
import { Logo } from '../Header/styles'

const HeaderCustom = () => (
  <HeaderCustomContainer>
    <Imagem style={{ backgroundImage: `url(${Banner})` }}>
      <Container>
        <Links>
          <li>
            <Link href="#">Restaurantes</Link>
          </li>
          <li>
            <Logo>
              <img src={LogoTitulo} alt="Logo" />
            </Logo>
          </li>
          <li>
            <Link href="#">0 produto(s) no carrinho</Link>
          </li>
        </Links>
      </Container>
    </Imagem>
  </HeaderCustomContainer>
)

export default HeaderCustom

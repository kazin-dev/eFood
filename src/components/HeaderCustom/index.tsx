import { Container } from '../../styles'
import { HeaderCustomContainer, Imagem, Links } from './styles'
import LogoTitulo from '../../assets/images/logoTitulo.png'
import Banner from '../../assets/images/Vector.png'
import { Logo } from '../Header/styles'

const HeaderCustom = () => (
  <HeaderCustomContainer>
    <Imagem style={{ backgroundImage: `url(${Banner})` }}>
      <Container>
        <Links>
          <li>
            <a href="#">Restaurantes</a>
          </li>
          <li>
            <Logo>
              <img src={LogoTitulo} alt="Logo" />
            </Logo>
          </li>
          <li>
            <a href="#">0 produto(s) no carrinho</a>
          </li>
        </Links>
      </Container>
    </Imagem>
  </HeaderCustomContainer>
)

export default HeaderCustom

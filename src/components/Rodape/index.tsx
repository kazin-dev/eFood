import LogoTitulo from '../../assets/images/logoTitulo.png'
import Instagram from '../../assets/images/Instagram.png'
import Twitter from '../../assets/images/Twitter.png'
import Facebook from '../../assets/images/Facebook.png'
import {
  Link,
  Links,
  ListaLinks,
  LogoContainer,
  Rodape,
  FooterText
} from './styled'
import { Logo } from '../Header/styles'

const Footer = () => (
  <Rodape>
    <LogoContainer>
      <Logo>
        <img src={LogoTitulo} alt="Logo eFood" />
      </Logo>
      <ListaLinks>
        <Links>
          <Link href="#">
            <img src={Instagram} alt="Instagram" />
          </Link>
        </Links>
        <Links>
          <Link href="#">
            <img src={Facebook} alt="Facebook" />
          </Link>
        </Links>
        <Links>
          <Link href="#">
            <img src={Twitter} alt="Twitter" />
          </Link>
        </Links>
      </ListaLinks>
      <FooterText>
        A efood é uma plataforma para divulgação de estabelecimentos. A
        responsabilidade pela entrega e qualidade dos produtos é toda do
        estabelecimento contratado.
      </FooterText>
    </LogoContainer>
  </Rodape>
)

export default Footer

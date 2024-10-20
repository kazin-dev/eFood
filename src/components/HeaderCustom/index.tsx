import { useSelector } from 'react-redux'
import { RootState } from '../../store'
import { Container, HeaderCustomContainer, Imagem, Link, Links } from './styles'
import LogoTitulo from '../../assets/images/logoTitulo.png'
import Banner from '../../assets/images/Vector.png'
import { Logo } from '../Header/styles'

const HeaderCustom = ({ onCartClick }: { onCartClick: () => void }) => {
  const carrinho = useSelector((state: RootState) => state.cart.items)
  const totalProdutos = carrinho.length

  return (
    <HeaderCustomContainer>
      <Imagem style={{ backgroundImage: `url(${Banner})` }}>
        <Container>
          <Links>
            <li>
              <Link href="/">Restaurantes</Link>
            </li>
            <li>
              <Logo>
                <img src={LogoTitulo} alt="Logo" />
              </Logo>
            </li>
            <li>
              <Link onClick={onCartClick}>
                {totalProdutos}&nbsp; produto(s) no carrinho
              </Link>
            </li>
          </Links>
        </Container>
      </Imagem>
    </HeaderCustomContainer>
  )
}

export default HeaderCustom

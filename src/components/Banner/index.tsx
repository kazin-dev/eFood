import BannerFundo from '../../assets/images/imagem de fundoBanner.png'
import { Banner, BannerDescricao, BannerInfo, BannerTitulo } from './styles'

const Apresentacao = () => (
  <Banner style={{ backgroundImage: `url('${BannerFundo}')` }}>
    <BannerInfo>
      <BannerTitulo>Italiano</BannerTitulo>
      <BannerDescricao>La Dolce Vita Trattoria</BannerDescricao>
    </BannerInfo>
  </Banner>
)

export default Apresentacao

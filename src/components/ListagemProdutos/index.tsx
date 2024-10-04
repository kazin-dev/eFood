import { CardapioItem } from '../../API/api'
import ProdutosItem from '../SaibaMais'
import { Grid } from './styles'

interface ListGridProdutosProps {
  cardapio: CardapioItem[]
  onAddToCart: (produto: CardapioItem) => void
}

const ListGridProdutos: React.FC<ListGridProdutosProps> = ({
  cardapio,
  onAddToCart
}) => {
  return (
    <Grid>
      {cardapio.map((item) => (
        <ProdutosItem
          key={item.id}
          nome={item.nome}
          descricao={item.descricao}
          imagem={item.foto}
          preco={item.preco}
          onClick={() => onAddToCart(item)}
        />
      ))}
    </Grid>
  )
}

export default ListGridProdutos

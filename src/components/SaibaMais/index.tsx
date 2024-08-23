import { Card, CardInfo } from './styles'

const ProdutosItem = () => (
  <>
    <div>
      <Card>
        <img src="caminho-da-imagem.jpg" alt="Descrição da imagem" />
        <CardInfo>
          <h3>Nome do Produto</h3>
          <p>Descrição breve do produto.</p>
          <button>Comprar</button>
        </CardInfo>
      </Card>
    </div>
  </>
)

export default ProdutosItem

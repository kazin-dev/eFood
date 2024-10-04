import { useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { getCardapioByRestauranteId, CardapioItem } from '../../API/api'
import HeaderCustom from '../../components/HeaderCustom'
import Apresentacao from '../../components/Banner'
import ListGridProdutos from '../../components/ListagemProdutos'
import Footer from '../../components/Rodape'
import { Container } from '../../styles'
import CardModal from '../../components/CardModal'

const Produtos = () => {
  const location = useLocation()
  const [cardapio, setCardapio] = useState<CardapioItem[]>([])
  const [erro, setErro] = useState<string | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [produtoSelecionado, setProdutoSelecionado] =
    useState<CardapioItem | null>(null)
  const restauranteId = location.state?.restauranteId || 1

  const handleOpenModal = (produto: CardapioItem) => {
    setProdutoSelecionado(produto)
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
    setProdutoSelecionado(null)
  }

  useEffect(() => {
    if (restauranteId) {
      const fetchCardapio = async () => {
        try {
          const response = await getCardapioByRestauranteId(restauranteId)
          setCardapio(response.data.cardapio as CardapioItem[])
          setErro(null)
        } catch (error) {
          console.error('Erro ao buscar o cardápio:', error)
          setErro(
            'Ocorreu um erro ao carregar o cardápio. Tente novamente mais tarde.'
          )
        }
      }
      fetchCardapio()
    }
  }, [restauranteId])

  return (
    <>
      <HeaderCustom />
      <Apresentacao />
      <Container>
        {erro ? (
          <p>{erro}</p>
        ) : (
          <ListGridProdutos cardapio={cardapio} onAddToCart={handleOpenModal} /> // Passa a função para abrir o modal
        )}

        {/* Renderiza o modal apenas quando um produto é selecionado */}
        {isModalOpen && produtoSelecionado && (
          <CardModal
            titulo={produtoSelecionado.nome}
            descricao={produtoSelecionado.descricao}
            imagem={produtoSelecionado.foto}
            informacao={`Serve: ${produtoSelecionado.porcao}`}
            onButtonClick={() => console.log('Produto adicionado ao carrinho!')}
            onClose={handleCloseModal}
          />
        )}
      </Container>
      <Footer />
    </>
  )
}

export default Produtos

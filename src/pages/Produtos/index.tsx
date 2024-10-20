import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { getCardapioByRestauranteId, CardapioItem } from '../../API/api'
import HeaderCustom from '../../components/HeaderCustom'
import Apresentacao from '../../components/Banner'
import ListGridProdutos from '../../components/ListagemProdutos'
import Footer from '../../components/Rodape'
import { Container } from '../../styles'
import CardModal from '../../components/CardModal'
import Cart from '../../components/Cart'
import { useDispatch } from 'react-redux'
import { add } from '../../store/reducers/cart'

const Produtos = () => {
  const location = useLocation()
  const [cardapio, setCardapio] = useState<CardapioItem[]>([])
  const [erro, setErro] = useState<string | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [produtoSelecionado, setProdutoSelecionado] =
    useState<CardapioItem | null>(null)
  const [isCartOpen, setIsCartOpen] = useState(false)

  const dispatch = useDispatch()

  const restauranteId = location.state?.restauranteId || 1

  const handleOpenModal = (produto: CardapioItem) => {
    setProdutoSelecionado(produto)
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
    setProdutoSelecionado(null)
  }

  const handleCartClick = () => {
    setIsCartOpen((prev) => !prev)
  }

  const handleAddToCart = () => {
    if (produtoSelecionado) {
      dispatch(add(produtoSelecionado))
      setIsModalOpen(false)
    }
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
      <HeaderCustom onCartClick={handleCartClick} /> <Apresentacao />
      <Container>
        {erro ? (
          <p>{erro}</p>
        ) : (
          <ListGridProdutos cardapio={cardapio} onAddToCart={handleOpenModal} />
        )}

        {isModalOpen && produtoSelecionado && (
          <CardModal
            titulo={produtoSelecionado.nome}
            descricao={produtoSelecionado.descricao}
            imagem={produtoSelecionado.foto}
            preco={produtoSelecionado.preco}
            informacao={`Serve: ${produtoSelecionado.porcao}`}
            onButtonClick={handleAddToCart}
            onClose={handleCloseModal}
          />
        )}
      </Container>
      <Footer />
      {isCartOpen && <Cart onClose={handleCartClick} />}{' '}
    </>
  )
}

export default Produtos

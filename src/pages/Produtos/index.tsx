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
import Entrega from '../../components/PostEntrega'
import { useDispatch } from 'react-redux'
import { add } from '../../store/reducers/cart'
import Pay from '../../components/PostPay'
import Finalizado from '../../components/PostConf'

const Produtos = () => {
  const location = useLocation()
  const [cardapio, setCardapio] = useState<CardapioItem[]>([])
  const [erro, setErro] = useState<string | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [produtoSelecionado, setProdutoSelecionado] =
    useState<CardapioItem | null>(null)
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [isEntregaOpen, setIsEntregaOpen] = useState(false)
  const [isPayOpen, setIsPayOpen] = useState(false)
  const [isFinalizadoOpen, setIsFinalizadoOpen] = useState(false)

  const [orderData, setOrderData] = useState<any>(null)

  const dispatch = useDispatch()
  const restauranteId = location.state?.restauranteId || 1

  const handleToggleEntrega = () => {
    setIsEntregaOpen((prev) => !prev)
    setIsCartOpen(false)
    setIsPayOpen(false)
  }

  const handleOpenModal = (produto: CardapioItem) => {
    setProdutoSelecionado(produto)
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
    setProdutoSelecionado(null)
  }

  const handleCartClick = () => {
    setIsCartOpen(!isCartOpen)
  }

  const handleAddToCart = () => {
    if (produtoSelecionado) {
      dispatch(add(produtoSelecionado)) // Adiciona o produto ao estado global
      setIsModalOpen(false) // Fecha o modal
      setIsCartOpen(true) // Abre o carrinho automaticamente
    }
  }

  const handleFinalizarPedido = () => {
    setIsFinalizadoOpen(false)
    setIsPayOpen(false)
  }

  const handleContinueDelivery = () => {
    setIsEntregaOpen(false)
    setIsPayOpen(true)
  }

  const handleFinalizarPagamento = (data: unknown) => {
    setOrderData(data)
    setIsFinalizadoOpen(true)
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
      <HeaderCustom onCartClick={handleCartClick} />
      <Apresentacao />
      <Container>
        {erro ? (
          <p>{erro}</p>
        ) : (
          <>
            <ListGridProdutos
              cardapio={cardapio}
              onAddToCart={handleOpenModal}
            />
            {isEntregaOpen && (
              <Entrega
                onClose={handleToggleEntrega}
                onContinue={handleContinueDelivery}
              />
            )}
            {isPayOpen && (
              <Pay
                onReturnToEntrega={handleToggleEntrega}
                onFinalizarPagamento={handleFinalizarPagamento}
              />
            )}

            {isFinalizadoOpen && (
              <Finalizado
                orderData={orderData}
                onClose={handleFinalizarPedido}
              />
            )}
          </>
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
      {isCartOpen && (
        <Cart onClose={handleCartClick} onContinue={handleToggleEntrega} />
      )}
    </>
  )
}

export default Produtos

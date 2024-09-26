import { Container } from '../../styles'
import Footer from '../../components/Rodape'
import HeaderCustom from '../../components/HeaderCustom'
import Apresentacao from '../../components/Banner'
import ListGridProdutos from '../../components/ListagemProdutos'
import { CardInfo } from '../../components/SaibaMais/styles'
import { useState } from 'react'

const Produtos = () => {
  return (
    <>
      <HeaderCustom />
      <Apresentacao />
      <Container>
        <ListGridProdutos />
        <CardInfo />
      </Container>
      <Footer />
    </>
  )
}

export default Produtos

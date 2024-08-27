import { useState } from 'react'
import ProdutosItem from '../SaibaMais'
import Pizza from '../../assets/images/image 3PazzaMarguerita.png'
import { Grid } from './styles'
import CardInfo from '../CardInfo'

const ComponentePai = () => {
  const [mostrarModal, setMostrarModal] = useState(false)

  const toggleModal = () => {
    setMostrarModal(!mostrarModal)
  }

  return (
    <div>
      {mostrarModal && <CardInfo />}

      <Grid>
        <ProdutosItem
          nome="Pizza Marguerita"
          descricao="A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!"
          imagem={Pizza}
          onClick={toggleModal}
        />
        <ProdutosItem
          nome="Pizza Marguerita"
          descricao="A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!"
          imagem={Pizza}
          onClick={toggleModal}
        />
        <ProdutosItem
          nome="Pizza Marguerita"
          descricao="A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!"
          imagem={Pizza}
          onClick={toggleModal}
        />
        <ProdutosItem
          nome="Pizza Marguerita"
          descricao="A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!"
          imagem={Pizza}
          onClick={toggleModal}
        />
        <ProdutosItem
          nome="Pizza Marguerita"
          descricao="A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!"
          imagem={Pizza}
          onClick={toggleModal}
        />
        <ProdutosItem
          nome="Pizza Marguerita"
          descricao="A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!"
          imagem={Pizza}
          onClick={toggleModal}
        />
      </Grid>
    </div>
  )
}

export default ComponentePai

import { useState } from 'react'
import CardModal from '../CardModal'
import Pizza from '../../assets/images/image 3PizzaCardModal.png'

const CardInfo = () => {
  const [isModalOpen, setIsModalOpen] = useState(true)

  const handleButtonClick = () => {
    console.log('Botão do modal clicado!')
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
  }

  return (
    <div>
      {isModalOpen && (
        <CardModal
          titulo="Pizza Marguerita"
          descricao="A pizza Margherita é uma pizza clássica da culinária italiana, reconhecida por sua simplicidade e sabor inigualável. Ela é feita com uma base de massa fina e crocante, coberta com molho de tomate fresco, queijo mussarela de alta qualidade, manjericão fresco e azeite de oliva extra-virgem."
          imagem={Pizza}
          onButtonClick={handleButtonClick}
          informacao="Serve: de 2 a 3 pessoas"
          onClose={handleCloseModal}
        />
      )}
    </div>
  )
}

export default CardInfo

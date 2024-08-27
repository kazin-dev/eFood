import { useState } from 'react'
import CardModal from '../Modal'
import Pizza from '../../assets/images/image 3PizzaCardModal.png'

const CardInfo = () => {
  // Estado para controlar a visibilidade do modal
  const [isModalOpen, setIsModalOpen] = useState(true)

  const handleButtonClick = () => {
    console.log('Botão do modal clicado!')
  }

  const handleCloseModal = () => {
    setIsModalOpen(false) // Fecha o modal ao clicar no botão de fechar
  }

  return (
    <div>
      {isModalOpen && (
        <CardModal
          titulo="Pizza Marguerita"
          descricao="A pizza Margherita é uma pizza clássica da culinária italiana, reconhecida por sua simplicidade e sabor inigualável. Ela é feita com uma base de massa fina e crocante, coberta com molho de tomate fresco, queijo mussarela de alta qualidade, manjericão fresco e azeite de oliva extra-virgem. A combinação de sabores é perfeita, com o molho de tomate suculento e ligeiramente ácido, o queijo derretido e cremoso e as folhas de manjericão frescas, que adicionam um toque de sabor herbáceo. É uma pizza simples, mas deliciosa, que agrada a todos os paladares e é uma ótima opção para qualquer ocasião."
          Imagem={Pizza}
          onButtonClick={handleButtonClick}
          informacao="Serve: de 2 a 3 pessoas"
          onClose={handleCloseModal}
        />
      )}
    </div>
  )
}

export default CardInfo

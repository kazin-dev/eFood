import { useState, useEffect } from 'react'
import CardModal from '../CardModal'
import { getRestaurantes, Restaurante } from '../../API/api'

const CardInfo: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(true)

  const [restaurantData, setRestaurantData] = useState<Restaurante | null>(null)

  const fetchRestaurantData = async () => {
    try {
      const response = await getRestaurantes()
      const data = response.data[0]
      setRestaurantData(data)
    } catch (error) {
      console.error('Erro ao buscar os dados do restaurante:', error)
    }
  }

  useEffect(() => {
    fetchRestaurantData()
  }, [])

  const handleButtonClick = () => {
    console.log('Botão do modal clicado!')
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
  }

  if (!restaurantData) {
    return <div>Carregando...</div>
  }

  return (
    <div>
      {isModalOpen && (
        <CardModal
          titulo={restaurantData.titulo}
          descricao={restaurantData.descricao}
          imagem={restaurantData.capa}
          informacao={`Categoria: ${restaurantData.tipo}`}
          cardapio={restaurantData.cardapio}
          onButtonClick={handleButtonClick}
          onClose={handleCloseModal}
        />
      )}
    </div>
  )
}

export default CardInfo

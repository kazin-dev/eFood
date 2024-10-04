import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Cards from '../Cards'
import { DivGrid } from './styles'
import { getRestaurantes, Restaurante } from '../../API/api'

const ListGrid: React.FC = () => {
  const [restaurantData, setRestaurantData] = useState<Restaurante[]>([])
  const navigate = useNavigate()

  const fetchRestaurantData = async () => {
    try {
      const response = await getRestaurantes()
      setRestaurantData(response.data)
    } catch (error) {
      console.error('Erro ao buscar os dados do restaurante:', error)
    }
  }

  useEffect(() => {
    fetchRestaurantData()
  }, [])

  const handleCardapioClick = (id: number) => {
    console.log('Restaurante ID:', id)
    navigate('/produtos', { state: { restauranteId: id } })
  }

  return (
    <DivGrid>
      {restaurantData.map((restaurante) => (
        <Cards
          key={restaurante.id}
          id={restaurante.id}
          nome={restaurante.titulo}
          avaliacao={restaurante.avaliacao}
          descricao={restaurante.descricao}
          imagem={restaurante.capa}
          categoria={restaurante.tipo}
          destaque={restaurante.destacado ? 'Destaque da semana' : ''}
          onClick={() => handleCardapioClick(restaurante.id)}
        />
      ))}
    </DivGrid>
  )
}

export default ListGrid

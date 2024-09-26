import axios from 'axios'

const api = axios.create({
  baseURL: 'https://fake-api-tau.vercel.app/api/efood'
})

export interface CardapioItem {
  foto: string
  preco: number
  id: number
  nome: string
  descricao: string
  porcao: string
}

export interface Restaurante {
  id: number
  titulo: string
  destacado: boolean
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
  cardapio: CardapioItem[]
}

export const getRestaurantes = () => {
  return api.get<Restaurante[]>('/restaurantes') // Tipagem para o array de restaurantes
}

export default api

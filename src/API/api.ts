import axios from 'axios'

const api = axios.create({
  baseURL: 'https://fake-api-tau.vercel.app/api/efood'
})

export interface CardapioItem {
  capa: string
  titulo: string
  foto: string
  preco: number
  id: number
  nome: string
  descricao: string
  porcao: string
}

export interface Restaurante {
  nome: string
  imagem: string
  categoria: any
  cardapio: unknown[]
  id: number
  titulo: string
  destacado: boolean
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
}

export const getRestaurantes = () => {
  return api.get<Restaurante[]>('/restaurantes')
}

export const getCardapioByRestauranteId = (id: number) => {
  return api.get<Restaurante>(`/restaurantes/${id}`)
}

export default api

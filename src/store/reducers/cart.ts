import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface CartItem {
  id: number
  nome: string
  preco: number
  foto: string
}

interface DeliveryInfo {
  quem: string
  endereco: string
  cidade: string
  cep: string
  numero: number
  complemento?: string
}

interface PaymentInfo {
  nomeCartao: string
  numeroCartao: string
  cvv: string
  mesVencimento: number
  anoVencimento: number
}

interface CartState {
  items: CartItem[]
  totalPrice: number
  deliveryInfo: DeliveryInfo | null
  paymentInfo: PaymentInfo | null
}

const initialState: CartState = {
  items: [],
  totalPrice: 0,
  deliveryInfo: null,
  paymentInfo: null
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    // Adiciona um item ao carrinho
    add: (state, action: PayloadAction<CartItem>) => {
      state.items.push(action.payload)
      state.totalPrice += action.payload.preco
    },
    // Remove um item do carrinho e ajusta o total
    remove: (state, action: PayloadAction<number>) => {
      const index = state.items.findIndex((item) => item.id === action.payload)
      if (index !== -1) {
        state.totalPrice -= state.items[index].preco
        state.items.splice(index, 1)
      }
    },
    // Define as informações de entrega
    setDeliveryInfo: (state, action: PayloadAction<DeliveryInfo>) => {
      state.deliveryInfo = action.payload
    },
    // Define as informações de pagamento
    setPaymentInfo: (state, action: PayloadAction<PaymentInfo>) => {
      state.paymentInfo = action.payload
    },
    // Limpa o carrinho e redefine todos os valores relacionados
    clearCart: (state) => {
      state.items = []
      state.totalPrice = 0
      state.deliveryInfo = null
      state.paymentInfo = null
    }
  }
})

export const { add, remove, setDeliveryInfo, setPaymentInfo, clearCart } =
  cartSlice.actions
export default cartSlice.reducer

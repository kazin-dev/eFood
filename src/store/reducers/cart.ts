import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface CartItem {
  id: number
  nome: string
  preco: number
  foto: string
}

interface CartState {
  items: CartItem[]
  totalPrice: number
}

const initialState: CartState = {
  items: [],
  totalPrice: 0
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<CartItem>) => {
      state.items.push(action.payload)
      state.totalPrice += action.payload.preco
    },
    remove: (state, action: PayloadAction<number>) => {
      const index = state.items.findIndex((item) => item.id === action.payload)
      if (index !== -1) {
        state.totalPrice -= state.items[index].preco
        state.items.splice(index, 1)
      }
    }
  }
})

export const { add, remove } = cartSlice.actions
export default cartSlice.reducer

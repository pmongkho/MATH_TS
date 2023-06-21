import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store'

// Define a type for the slice state
interface mathSymbol {
  symbol: string
}

// Define the initial state using that type
const initialState = {
  symbol: 'x',
} 

export const symbolSlice = createSlice({
  name: 'symbol',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
      setSymbol: (state, action) => {
          state.symbol = action.payload
      },

  },
})

export const { setSymbol} = symbolSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectSymbol = (state: RootState) => state.symbol

export default symbolSlice.reducer
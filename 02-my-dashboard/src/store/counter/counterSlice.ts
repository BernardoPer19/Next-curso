import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface CounterState {
  value: number
  isReady: boolean
}

const initialState: CounterState = {
  value: 2,
  isReady: false
}


export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {

    initCounterState: (state, action: PayloadAction<number>) => {
      if (state.isReady) {
        return
      }

      state.value = action.payload
      state.isReady = true
    }
    ,
    increment: (state) => {
      state.value += 1
    },
    decrement: (state) => {
      if (state.value == 0) {
        return;
      }

      state.value -= 1
    },
    resetCounter: (state, action: PayloadAction<number>) => {
      if (action.payload < 0) {
        action.payload = 0;
      }

      state.value = action.payload
    },
  },
})

export const { increment, decrement, resetCounter,initCounterState } = counterSlice.actions

export default counterSlice.reducer
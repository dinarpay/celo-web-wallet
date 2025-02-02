import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { FeeEstimate, GasPrice } from 'src/features/fees/types'
import { NativeTokenId } from 'src/tokens'

interface FeeState {
  gasPrices: Record<NativeTokenId, GasPrice | null>
  estimates: FeeEstimate[] | null
}

const feesInitialState: FeeState = {
  gasPrices: {
    [NativeTokenId.CELO]: null,
    [NativeTokenId.cUSD]: null,
    [NativeTokenId.cEUR]: null,
    [NativeTokenId.cREAL]: null,
  },
  estimates: null,
}

const feeSlice = createSlice({
  name: 'fees',
  initialState: feesInitialState,
  reducers: {
    setFeeEstimate: (state, action: PayloadAction<FeeEstimate[] | null>) => {
      state.estimates = action.payload
    },
    updateGasPrice: (
      state,
      action: PayloadAction<{ token: NativeTokenId; value: string; lastUpdated: number }>
    ) => {
      const { token, value, lastUpdated } = action.payload
      state.gasPrices[token] = { value, lastUpdated }
    },
  },
})

export const { setFeeEstimate, updateGasPrice } = feeSlice.actions
export const feeReducer = feeSlice.reducer

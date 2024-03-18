import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import {apis} from '../apis';
import {TransactionState} from '../types';

const transactionSlice = createSlice({
  name: 'transactions',
  initialState: {
    TxLoading: false,
    TxSuccess: false,
    TxError: '',
    TxMessage: '',
    TxData: [],
    nextPage: 1,
  } as TransactionState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(apis.transaction.pending, state => {
      state.TxLoading = true;
    });
    builder.addCase(
      apis.transaction.fulfilled,
      (state, action: PayloadAction<any>) => {
        state.TxLoading = false;
        state.TxSuccess = true;
        state.TxMessage = action?.payload?.message;
        state.TxData = [...state.TxData, ...action?.payload?.data];
        state.nextPage = state.nextPage + 1;
      },
    );
    builder.addCase(
      apis.transaction.rejected,
      (state, action: PayloadAction<any>) => {
        state.TxLoading = false;
        state.TxSuccess = false;
        state.TxError = action?.payload.error;
      },
    )
  },
});

export default transactionSlice.reducer;

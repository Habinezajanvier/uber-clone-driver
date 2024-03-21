import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import {apis} from '../apis';
import {ReservationState, TransactionState} from '../types';

const reservationSlice = createSlice({
  name: 'transactions',
  initialState: {
    rsLoading: false,
    rsSuccess: false,
    rsError: '',
    rsMessage: '',
    rsData: [],
    nextPage: 1,
  } as ReservationState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(apis.reservations.pending, state => {
      state.rsLoading = true;
    });
    builder.addCase(
      apis.reservations.fulfilled,
      (state, action: PayloadAction<any>) => {
        state.rsLoading = false;
        state.rsSuccess = true;
        state.rsMessage = action?.payload?.message;
        state.rsData = action?.payload?.data.content;
        state.nextPage = state.nextPage + 1;
      },
    );
    builder.addCase(
      apis.reservations.rejected,
      (state, action: PayloadAction<any>) => {
        state.rsLoading = false;
        state.rsSuccess = false;
        state.rsError = action?.payload.error;
      },
    );
  },
});

export default reservationSlice.reducer;

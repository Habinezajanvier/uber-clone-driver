import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import {apis} from '../apis';
import {TopupState} from '../types';

const topupSlice = createSlice({
  name: 'topup',
  initialState: {
    loading: false,
    success: false,
    error: '',
    message: '',
    data: {},
  } as TopupState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(apis.topup.pending, state => {
      state.loading = true;
    });
    builder.addCase(
      apis.topup.fulfilled,
      (state, action: PayloadAction<any>) => {
        state.loading = false;
        state.success = true;
        state.message = action?.payload?.message;
        state.data =  action?.payload?.data;
      },
    );
    builder.addCase(
      apis.topup.rejected,
      (state, action: PayloadAction<any>) => {
        state.loading = false;
        state.success = false;
        state.error = action?.payload.error;
      },
    );
    builder.addCase(apis.resetAll, state => {
      state.error = '';
      state.message = '';
      state.success = false;
      state.data = {}
    });
  },
});

export default topupSlice.reducer;

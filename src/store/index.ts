import {configureStore} from '@reduxjs/toolkit';
import login from './reducers/login';
import signup from './reducers/signup';
import topup from './reducers/topup';
import transaction from './reducers/transaction';
import profile from './reducers/profile';

export const store = configureStore({
  reducer: {
    login,
    // signup,
    // topup,
    transaction,
    profile,
  },
});

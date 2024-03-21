import {createAsyncThunk, createAction} from '@reduxjs/toolkit';
import {AxiosError} from 'axios';
import {
  LoginData,
  LoginResponse,
  ProfileResponse,
  SignupData,
  SignupResponse,
  TopupData,
  TopupResponse,
  TransactionResponse,
} from './types';
import {getHeaders} from '../constants/config';
import {Buffer} from 'buffer';
import axios from './axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

class Api {
  resetAll = createAction('resetAll');

  signup = createAsyncThunk(
    'signup',
    async (data: SignupData, {rejectWithValue}) => {
      try {
        const response = await axios.post(`/users/signup`, {...data});
        return response?.data as SignupResponse;
      } catch (error: AxiosError | any) {
        return rejectWithValue({error: error?.response?.data?.message});
      }
    },
  );

  login = createAsyncThunk(
    'login',
    async (data: LoginData, {rejectWithValue}) => {
      try {
        const response = await axios.post(`/operators/login`, {...data});
        return response.data as LoginResponse;
      } catch (error: AxiosError | any) {
        return rejectWithValue({error: error?.response?.data?.message});
      }
    },
  );

  profile = createAsyncThunk('profile', async (_, {rejectWithValue}) => {
    try {
      const {token} = await getHeaders();
      const response = await axios.post(
        `/operators/profile`,
        {},
        {
          headers: {
            authorization: `Bearer ${token}`,
          },
        },
      );
      return response.data as ProfileResponse;
    } catch (error: AxiosError | any) {
      return rejectWithValue({error: error?.response?.data?.message});
    }
  });

  authInit = createAsyncThunk('init', async (_, {rejectWithValue}) => {
    try {
      const jsonToken = await AsyncStorage.getItem('token');
      const token = jsonToken !== null ? JSON.parse(jsonToken) : null;
      if (token) {
        const parts = token
          .split('.')
          .map((part: string) =>
            Buffer.from(
              part.replace(/-/g, '+').replace(/_/g, '/'),
              'base64',
            ).toString(),
          );
        const payload = JSON.parse(parts[1]);
        const today = new Date();
        return payload.exp * 1000 > today.getTime();
      } else return false;
    } catch (error: any) {
      return rejectWithValue({error: error});
    }
  });

  logout = createAsyncThunk('init', async (_, {rejectWithValue}) => {
    try {
      const response = await AsyncStorage.removeItem('token');
      return response;
    } catch (error: any) {
      return rejectWithValue({error: error});
    }
  });

  topup = createAsyncThunk(
    'topup',
    async (data: TopupData, {rejectWithValue}) => {
      try {
        const {token} = await getHeaders();
        const response = await axios.post(
          `/users/topup`,
          {...data},
          {
            headers: {
              'x-auth': token,
            },
          },
        );
        return response.data as TopupResponse;
      } catch (error: AxiosError | any) {
        return rejectWithValue({error: error?.response?.data?.message});
      }
    },
  );

  transaction = createAsyncThunk(
    'transactions',
    async (data: {page?: number; loading?: boolean}, {rejectWithValue}) => {
      if (data.loading) {
        return;
      }
      try {
        const {token} = await getHeaders();
        const response = await axios.post(
          `/tickets/all`,
          {},
          {
            headers: {
              authorization: `Bearer ${token}`,
            },
          },
        );
        return response?.data as TransactionResponse;
      } catch (error: AxiosError | any) {
        return rejectWithValue({error: error?.response?.data?.message});
      }
    },
  );

  reservations = createAsyncThunk(
    'reservations',
    async (data: {busId: number; page?: number}, {rejectWithValue}) => {
      try {
        const {token} = await getHeaders();
        const response = await axios.post(
          `/tickets/reservations/${data.busId}?page=${
            data.page
          }&pageSize=${24}`,
          {},
          {
            headers: {
              authorization: `Bearer ${token}`,
            },
          },
        );
        return response?.data as TransactionResponse;
      } catch (error: any) {
        return rejectWithValue({error: error?.response?.data?.message});
      }
    },
  );
}

export const apis = new Api();

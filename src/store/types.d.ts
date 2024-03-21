import {store} from '.';

interface SignupData {
  phoneNumber: string;
  pin: string;
  firstName: string;
  lastName: string;
}

interface SignupResponse {
  success: boolean;
  message: string;
  error: string;
}

interface SignupState {
  loading: boolean;
  success: boolean;
  message: string;
  error: string;
}

interface LoginData {
  phoneNumber: string;
  pin: string;
}

interface LoginResponse {
  success: boolean;
  message: string;
  error: string;
}

interface LoginState {
  loading: boolean;
  success: boolean;
  message: string;
  error: boolean;
  token: string;
}

interface ProfileState {
  loading: boolean;
  message: string;
  error: boolean;
  ProfileData: any;
}

interface ProfileResponse {
  error: boolean;
  message: string;
  data: any;
}

interface TopupData {
  phoneNumber: string;
  amount: number;
  paymentMethod: string;
}

interface TopupResponse {
  success: boolean;
  message: string;
  error: string;
  data: any;
}

interface TopupState {
  loading: boolean;
  success: boolean;
  message: string;
  error: string;
  data: any;
}

export enum PaymentMethod {
  MOMO = 'MOMO',
  MPESA = 'MPESA',
  SASSA = 'sassa',
}

export enum TransactionType {
  DEDUCTION = 'deduction',
  TOPUP = 'topup',
}

export enum TransactionStatus {
  PENDING = 1,
  FAILED = 0,
  SUCCESSFUL = 2,
}

interface TransactionState {
  TxLoading: boolean;
  TxSuccess: boolean;
  TxMessage: string;
  TxError: string;
  TxData: any;
  nextPage: number;
}

interface ReservationState {
  rsLoading: boolean;
  rsSuccess: boolean;
  rsMessage: string;
  rsError: string;
  rsData: any;
  nextPage: number;
}

interface TransactionResponse {
  success: boolean;
  message: string;
  error: string;
  data: any;
}

interface TokenState {
  loading: boolean;
  error: string;
  route: string;
}

type RootState = ReturnType<typeof store.getState>;

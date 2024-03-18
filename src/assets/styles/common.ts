import {TextStyle, ViewStyle} from 'react-native';
import config from './config';

const {colors} = config;

export const container: ViewStyle = {
  padding: 20,
  backgroundColor: colors.background,
  flex: 1,
};

export const historyCard: ViewStyle = {
  width: '100%',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  height: 'auto',
  paddingVertical: 6,
  marginVertical: 6,
  padding: 10,
  backgroundColor: config.colors.button,
};

export const dateText: TextStyle = {
  color: config.colors.primaryText,
  fontFamily: 'Inter-Regular',
  fontSize: 12,
  lineHeight: 19.36,
};

export const amountText: TextStyle = {
  fontFamily: 'Poppins-Regular',
  fontSize: 14,
  lineHeight: 16.94,
  color: config.colors.primaryText,
};

export const topUpText: TextStyle = {
  color: config.colors.primaryText,
  fontFamily: 'Poppins-Semi-bold',
  fontSize: config.fontSize.sm,
  lineHeight: 19.36,
};

export const loaderContainer: ViewStyle = {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
};

export const userProfileContainer: ViewStyle = {
  justifyContent: 'center',
  alignItems: 'center',
  // marginVertical: 10,
  backgroundColor: config.colors.button,
};

export const mainText: TextStyle = {
  color: '#5DB075',
  fontSize: 16,
  lineHeight: 19.36,
  fontFamily: 'Inter-Bold',
};

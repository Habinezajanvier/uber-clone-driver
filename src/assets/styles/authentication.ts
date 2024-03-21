import {TextStyle, ViewStyle} from 'react-native';
import config from './config';

export const authMainContainer: ViewStyle = {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  padding: 20,
  backgroundColor: '#FFFFFF',
};

export const mainTitle: TextStyle = {
  color: config.colors.primaryText,
  fontSize: 30,
  lineHeight: 36.31,
  fontFamily: 'Inter-Bold',
  marginVertical: 50,
};

export const labelStyle: TextStyle = {
  color: '#BDBDBD',
  fontSize: 16,
  fontFamily: 'Poppins-Medium',
  left: 5,
};

export const authRedirect: ViewStyle = {
  width: '100%',
  flexDirection: 'row',
  alignItems: 'center',
  gap: 5,
  padding: 5,
  top: 5,
};

export const informingText: TextStyle = {
  color: '#5DB075',
  fontSize: 16,
  lineHeight: 19.36,
  fontFamily: 'Inter-Regular',
};

export const alreadyHaveAccount: ViewStyle = {
  alignItems: 'center',
  flexDirection: 'row',
  gap: 5,
};

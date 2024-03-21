import {TextStyle, ViewStyle, Dimensions} from 'react-native';
import config from './config';

const {width} = Dimensions.get('window');

export const homeHeader: ViewStyle = {
  width: '100%',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  gap: 10,
  marginBottom: 10,
};

export const mainTheme: ViewStyle = {
  height: 'auto',
  backgroundColor: config.colors.primary,
  borderBottomLeftRadius: 16,
  borderBottomRightRadius: 16,
  padding: 20,
};

export const cardTitle: TextStyle = {
  fontSize: config.fontSize.sm,
  color: '#ffff',
  fontFamily: 'Poppins-Bold',
  textAlignVertical: 'center',
};

export const commuterCard: ViewStyle = {
  width: '100%',
  height: 'auto',
  backgroundColor: '#FFFF',
  padding: 15,
  marginVertical: 5,
  borderRadius: 10,
  flexDirection: 'row',
  justifyContent: 'space-between',
};

export const commuterCardInfo: ViewStyle = {
  borderWidth: 1,
  borderColor: '#D3DFF8',
  width: width * 0.4,
  borderBottomRightRadius: 10,
  borderTopRightRadius: 10,
  padding: 10,
  justifyContent: 'flex-end',
  gap: 4,
};

export const activeBullet: ViewStyle = {
  height: 8,
  width: 8,
  borderRadius: 5,
  backgroundColor: '#5DB075',
};

export const cardHeader: ViewStyle = {
  width: '100%',
  flexDirection: 'row',
  justifyContent: 'space-between',
  marginVertical: 30,
};

export const cardTopupContainer: ViewStyle = {
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  gap: 5,
  borderColor: '#FFFF',
  borderWidth: 1,
  padding: 5,
  paddingHorizontal: 10,
  borderRadius: 5,
};

export const cardContent: ViewStyle = {
  width: '100%',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
};

export const cardInfo: ViewStyle = {
  flexDirection: 'row',
  justifyContent: 'space-between',
};

export const cardText: TextStyle = {
  fontSize: 12,
  color: '#000000',
  fontFamily: 'Poppins-Regular',
};
export const balanceText: TextStyle = {
  fontSize: 12,
  padding: 6,
  backgroundColor: '#5DB075',
  borderRadius: 10,
  color: '#ffff',
};

export const historyHeader: ViewStyle = {
  width: '100%',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: 20,
};

export const historyText: TextStyle = {
  color: '#000000',
  fontFamily: 'Poppins-Regular',
  fontSize: 18,
  lineHeight: 29.05,
};

export const filterButton: ViewStyle = {
  backgroundColor: '#E8E8E8',
  borderRadius: 50,
  padding: 10,
};

export const transactionContainer: ViewStyle = {
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
};

export const modalHeader: ViewStyle = {
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginVertical: 10,
};

export const modalTitle: TextStyle = {
  fontSize: 18,
  color: '#262626',
  fontFamily: 'Poppins-SemiBold',
};

export const filterActions: ViewStyle = {
  flexDirection: 'row',
  alignItems: 'center',
  gap: 10,
};

export const filterActionsTitle: TextStyle = {
  color: '#262626',
  fontSize: 14,
  lineHeight: 19.36,
  fontFamily: 'Inter-Bold',
};

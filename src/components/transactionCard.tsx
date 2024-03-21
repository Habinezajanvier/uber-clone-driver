import React, {memo} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
// import {SvgXml} from 'react-native-svg';
// import {cardReceive} from '../assets/svg/card-receive';
// import {cardSend} from '../assets/svg/card-send';
import {
  historyCard,
  dateText,
  amountText,
  topUpText,
  transactionContainer,
} from '../assets/styles';
import IconIcons from 'react-native-vector-icons/Ionicons';
import {CarData, CarType} from '../constants/carData';

interface Props extends CarData {
  onPress?: () => void;
}

const TransactionCard: React.FC<Props> = ({
  onPress,
  plateNumber,
  driver,
  time,
  location,
  id,
  type,
}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={onPress}
      style={[
        historyCard,
        {
          shadowColor: '#ffff',
          shadowOffset: {width: -2, height: 4},
          shadowOpacity: 0.2,
          shadowRadius: 3,
        },
      ]}>
      <View style={transactionContainer}>
        <IconIcons
          name="person-circle-outline"
          color="#fff"
          size={22}
        />
        <View style={{marginLeft: 12}}>
          <Text style={topUpText}>{driver}</Text>
          <Text style={dateText}>{plateNumber}</Text>
        </View>
      </View>
      <View style={{alignItems: 'flex-end'}}>
        <Text style={[amountText]}>{location}</Text>
        <Text style={dateText}>{time}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default memo(
  TransactionCard,
  (prevProps, nextProps) => prevProps.id === nextProps.id,
);

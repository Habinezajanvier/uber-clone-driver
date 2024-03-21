import React, {memo} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {
  historyCard,
  dateText,
  amountText,
  topUpText,
  transactionContainer,
} from '../assets/styles';
import IconIcons from 'react-native-vector-icons/Ionicons';
import {Rating} from 'react-native-ratings';
import {DriverData} from '../constants/driverData';
import config from '../assets/styles/config';

interface Props extends DriverData {
  onPress?: () => void;
}

const DriverCard: React.FC<Props> = ({
  onPress,
  plateNumber,
  driver,
  phoneNumber,
  rating,
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
          // paddingVertical: 12,
        },
      ]}>
      <View style={transactionContainer}>
        <IconIcons name="person-circle-outline" color="#fff" size={40} />
        <View style={{marginLeft: 12}}>
          <Text
            style={[
              topUpText,
              {fontSize: config.fontSize.md, marginVertical: 6},
            ]}>
            {driver}
          </Text>
          <Text style={dateText}>{phoneNumber}</Text>
        </View>
      </View>
      <View style={{alignItems: 'flex-end'}}>
        <Text style={[amountText, {marginVertical: 6}]}>{plateNumber}</Text>
        {/* <Text style={dateText}>{rating}</Text> */}
        <Rating
          readonly
          startingValue={rating}
          imageSize={20}
          tintColor={config.colors.button}
          style={{backgroundColor: config.colors.button}}
        />
      </View>
    </TouchableOpacity>
  );
};

export default memo(
  DriverCard,
  (prevProps, nextProps) => prevProps.id === nextProps.id,
);

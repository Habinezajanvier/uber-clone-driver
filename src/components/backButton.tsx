import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {cardTitle, cardTopupContainer, homeHeader} from '../assets/styles';
import IconIcons from 'react-native-vector-icons/Ionicons';

interface Props {
  onPress?: () => void;
}

const HomeHeader: React.FC<Props> = ({onPress}) => {
  return (
    <View
      style={[
        homeHeader,
        {
          gap: 0,
          marginBottom: 0,
          alignItems: 'center',
        },
      ]}>
      <TouchableOpacity activeOpacity={0.8} onPress={onPress}>
        <IconIcons name="arrow-back" color="#fff" size={30} />
      </TouchableOpacity>
    </View>
  );
};

export default HomeHeader;

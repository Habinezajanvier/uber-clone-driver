import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {cardTitle, cardTopupContainer, homeHeader} from '../assets/styles';
import IconIcons from 'react-native-vector-icons/Ionicons';
import config from '../assets/styles/config';

interface Props {
  onDrawer?: () => void;
  onPress?: () => void;
  userName?: string;
}

const HomeHeader: React.FC<Props> = ({onDrawer, onPress}) => {
  return (
    <View style={homeHeader}>
      <TouchableOpacity activeOpacity={0.8} onPress={onDrawer}>
        <IconIcons name="menu-sharp" color="#000" size={36} />
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={onPress}
        style={[cardTopupContainer, {backgroundColor: config.colors.button}]}>
        <IconIcons name="add-circle-outline" color="#fff" size={22} />
        <Text style={cardTitle}>Start journey</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeHeader;

import React from 'react';
import {View, Text} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

interface Props {
  onPress: () => void;
}

const Header: React.FC<Props> = ({onPress}) => {
  return (
    <View style={{width: '100%', marginTop:20, height:36, marginHorizontal:10,justifyContent:"center"}}>
      <TouchableOpacity onPress={onPress}>
        <Text
          style={{
            color: '#5DB075',
            fontFamily: 'Inter-Medium',
            fontSize: 16,
            lineHeight: 19.31,
          }}>
          Back
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Header;

import React, {PropsWithChildren} from 'react';
import {Text, View} from 'react-native';
import {container} from '../assets/styles';
import CustomBack from '../components/backButton';
import config from '../assets/styles/config';

type Props = PropsWithChildren<{
  title: string;
  onBackPress: () => void;
}>;

const DrawerRoutes: React.FC<Props> = ({title, onBackPress, children}) => {
  return (
    <View style={[container, {padding: 0}]}>
      <View
        style={{
          backgroundColor: config.colors.button,
          padding: 20,
        }}>
        <CustomBack onPress={onBackPress} />
        <Text
          style={{
            color: config.colors.primaryText,
            fontSize: config.fontSize.lg,
            marginVertical: 12,
          }}>
          {title}
        </Text>
      </View>
      {children}
    </View>
  );
};

export default DrawerRoutes;

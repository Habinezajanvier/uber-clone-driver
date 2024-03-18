import React from 'react';
import {Text, View} from 'react-native';
import config from '../assets/styles/config';
import DrawerRoutes from '../hoc/drawerRoutes';

const Messages: React.FC<any> = ({navigation}) => {
  return (
    <DrawerRoutes
      onBackPress={() => navigation.navigate('Home')}
      title="Messages"></DrawerRoutes>
  );
};

export default Messages;

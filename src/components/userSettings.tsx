import React from 'react';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import {apis} from '../store/apis';
import {useDispatch, useSelector} from 'react-redux';
import {UnknownAction} from '@reduxjs/toolkit';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {Text, View} from 'react-native';
// import {SvgXml} from 'react-native-svg';
// import {profileIcon} from '../assets/svg/profile-circle';
import {mainTitle, topUpText, userProfileContainer} from '../assets/styles';
import {RootState} from '../store/types';
import config from '../assets/styles/config';
import {TouchableOpacity} from 'react-native-gesture-handler';

const UserProfile: React.FC<any> = (props: any) => {
  const dispatch = useDispatch();
  const {ProfileData} = useSelector((state: RootState) => state.profile);
  const {navigation} = props;
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: config.colors.background,
        paddingTop: 0,
      }}>
      <DrawerContentScrollView {...props}>
        <View style={userProfileContainer}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              width: '80%',
              borderBottomColor: config.colors.primaryText,
              borderBottomWidth: 1,
            }}>
            <FontAwesome name="user-circle-o" color="#fff" size={46} />
            <Text style={[mainTitle, {marginLeft: 20}]}>{ProfileData.fullName}</Text>
          </View>
          <TouchableOpacity
            onPress={() => navigation.navigate('Messages')}
            activeOpacity={0.8}
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              width: '80%',
              marginVertical: 20,
            }}>
            <Text style={topUpText}>Messages</Text>
            <FontAwesome name="angle-right" color="#fff" size={20} />
          </TouchableOpacity>
        </View>
        <View style={{paddingHorizontal: '10%'}}>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => navigation.navigate('Trips')}
            style={{
              marginVertical: 20,
            }}>
            <Text style={topUpText}>Active Clients</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('Reservations')}
            activeOpacity={0.8}
            style={{
              marginVertical: 20,
            }}>
            <Text style={topUpText}>Transactions</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('Settings')}
            activeOpacity={0.8}
            style={{
              marginVertical: 20,
            }}>
            <Text style={topUpText}>Settings</Text>
          </TouchableOpacity>
        </View>
      </DrawerContentScrollView>
      <View
        style={{
          marginBottom: 15,
          borderTopColor: '#dedede',
          borderTopWidth: 1,
        }}>
        <DrawerItem
          label="log out"
          onPress={() => dispatch(apis.logout() as unknown as UnknownAction)}
        />
      </View>
    </View>
  );
};

export default UserProfile;

import React, {useRef, useEffect, useState} from 'react';
import {
  View,
  FlatList,
  Dimensions,
  useWindowDimensions,
  Text,
} from 'react-native';
import {
  container,
  mainTheme,
  homeHeader,
  cardTopupContainer,
  cardTitle,
} from '../assets/styles';
import {useDispatch, useSelector} from 'react-redux';
import {apis} from '../store/apis';
import {RootState} from '../store/types';
import {UnknownAction} from '@reduxjs/toolkit';
import {Loader} from '../components/loader';
import DatePickerModal from '../components/datePicker';
import Topup from '../components/topup';
import TransactionCard from '../components/transactionCard';
import EmptyContent from '../components/emptyContent';
import HomeHeader from '../components/homeHeader';
import Toast from 'react-native-toast-message';
import MapView from 'react-native-maps';
import {TouchableOpacity} from 'react-native-gesture-handler';
import IconIcons from 'react-native-vector-icons/Ionicons';
import carData, {CarData, CarType} from '../constants/carData';
import ReservationCard from '../components/reservationCard';

const Home: React.FC<any> = ({navigation}) => {
  const dispatch = useDispatch();

  const {height, width} = useWindowDimensions();
  const ASPECT_RATIO = width / height;

  const {TxData, TxLoading, nextPage} = useSelector(
    (state: RootState) => state.transaction,
  );

  const {rsData} = useSelector((state: RootState) => state.reservations);

  const {ProfileData} = useSelector((state: RootState) => state.profile);

  const fetchTransaction = () => {
    dispatch(
      apis.reservations({
        busId: ProfileData.car.id,
        page: 1,
      }) as unknown as UnknownAction,
    );
  };

  useEffect(() => {
    // console.log(JSON.stringify({ProfileData}, null, 2))
    if (ProfileData?.id) {
      fetchTransaction();
    }
  }, [ProfileData]);

  useEffect(() => {
    console.log(JSON.stringify({rsData}, null, 2));
  }, [rsData]);

  useEffect(() => {
    dispatch(apis.profile() as unknown as UnknownAction);
  }, []);

  return (
    <View style={[container, {padding: 0}]}>
      <View style={{height: Dimensions.get('screen').height * 0.5}}>
        <MapView
          style={{
            flex: 1,
          }}
          initialRegion={{
            longitude: 30.094627,
            latitude: -1.954514,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0922 * ASPECT_RATIO,
          }}
        />
      </View>
      <View
        style={{
          paddingHorizontal: 20,
          paddingVertical: 10,
          position: 'absolute',
          top: 0,
          left: 0,
          width: Dimensions.get('screen').width,
        }}>
        <HomeHeader
          onDrawer={() => navigation.openDrawer()}
          onPress={() => {
            // Handling start the journey
            // navigation.navigate('BookRide')
          }}
        />
      </View>
      <View style={[homeHeader, {marginVertical: 12, marginHorizontal: 20}]}>
        <TouchableOpacity
          activeOpacity={0.8}
          style={[cardTopupContainer, {borderWidth: 0, borderBottomWidth: 1}]}>
          <IconIcons name="person-circle-outline" color="#fff" size={22} />
          <Text style={cardTitle}>Commuters</Text>
        </TouchableOpacity>
        {/* <TouchableOpacity
          onPress={() => navigation.navigate('BookSubs')}
          activeOpacity={0.8}
          style={[cardTopupContainer, {borderWidth: 0, borderBottomWidth: 1}]}>
          <IconIcons name="bus-outline" color="#fff" size={20} />
          <Text style={cardTitle}>Bus</Text>
        </TouchableOpacity> */}
      </View>
      <FlatList
        style={{marginHorizontal: 10}}
        data={rsData}
        // onEndReached={fetchTransaction}
        onEndReachedThreshold={0.1}
        removeClippedSubviews={true}
        initialNumToRender={6}
        windowSize={3}
        keyExtractor={(item: CarData) => `${item.id}`}
        renderItem={({item, index}) => <ReservationCard data={item} />}
        // ListEmptyComponent={EmptyContent}
        showsVerticalScrollIndicator={false}
        // ListFooterComponent={<View>{TxLoading && <Loader />}</View>}
      />
    </View>
  );
};

export default Home;

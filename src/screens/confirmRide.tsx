import React, {useState} from 'react';
import {
  View,
  FlatList,
  Dimensions,
  useWindowDimensions,
  Text,
  TextInput,
  Modal,
  StyleSheet,
  Pressable,
} from 'react-native';
import {
  container,
  mainTheme,
  homeHeader,
  cardTopupContainer,
  cardTitle,
  dateText,
  topUpText,
} from '../assets/styles';
import HomeHeader from '../components/homeHeader';
import MapView from 'react-native-maps';
import CustomBack from '../components/backButton';
import config from '../assets/styles/config';
import {Button} from '../components/button';
import driverData, {DriverData} from '../constants/driverData';
import DriverCard from '../components/driverCard';
import CustomModal from '../components/modal';

const ConfirmRide: React.FC<any> = ({navigation}) => {
  const {height, width} = useWindowDimensions();
  const ASPECT_RATIO = width / height;
  const [modalVisible, setModalVisible] = useState<boolean>(false);

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
          position: 'absolute',
          top: 20,
          left: 20,
          width: 40,
          height: 40,
          paddingLeft: 5,
          backgroundColor: config.colors.background,
          justifyContent: 'center',
          alignItems: 'center',
          opacity: 0.9,
          borderRadius: 2,
        }}>
        <CustomBack onPress={() => navigation.goBack()} />
      </View>
      <View style={[homeHeader, {marginVertical: 12, paddingLeft: 20}]}>
        <View
          style={[cardTopupContainer, {borderWidth: 0, borderBottomWidth: 1}]}>
          <Text style={cardTitle}>DRIVER AROUND YOU</Text>
        </View>
      </View>
      <FlatList
        style={{marginHorizontal: 10}}
        data={driverData}
        // onEndReached={fetchTransaction}
        onEndReachedThreshold={0.1}
        removeClippedSubviews={true}
        initialNumToRender={6}
        windowSize={3}
        keyExtractor={(item: DriverData) => `${item.id}`}
        renderItem={({item, index}) => (
          <DriverCard
            key={index}
            plateNumber={item.plateNumber}
            driver={item.driver}
            phoneNumber={item.phoneNumber}
            rating={item.rating}
            id={item.id}
            onPress={() => setModalVisible(true)}
          />
        )}
        // ListEmptyComponent={EmptyContent}
        showsVerticalScrollIndicator={false}
        // ListFooterComponent={<View>{TxLoading && <Loader />}</View>}
      />

      <CustomModal
        title="Ride details"
        onClose={() => setModalVisible(visible => !visible)}
        modalVisible={modalVisible}>
        <View style={styles.detailsContainer}>
          <View style={{marginVertical: 6}}>
            <View style={styles.distance}>
              <Text style={dateText}>Orgin</Text>
              <Text style={dateText}>Destination</Text>
            </View>
            <View style={styles.distance}>
              <Text
                style={[
                  topUpText,
                  {fontSize: config.fontSize.md, marginVertical: 6},
                ]}>
                Kanombe
              </Text>
              <Text
                style={[
                  topUpText,
                  {fontSize: config.fontSize.md, marginVertical: 6},
                ]}>
                Kacyiru
              </Text>
            </View>
          </View>
          <View style={[styles.distance, {marginVertical: 6}]}>
            <Text style={topUpText}>Distance</Text>
            <Text style={topUpText}>16 Km</Text>
          </View>
          <View style={[styles.distance, {marginBottom: 12}]}>
            <Text style={topUpText}>Estimated time</Text>
            <Text style={topUpText}>12min</Text>
          </View>
          <Text style={dateText}>Driver Details</Text>
          <DriverCard
            plateNumber={driverData[0].plateNumber}
            driver={driverData[0].driver}
            phoneNumber={driverData[0].phoneNumber}
            rating={driverData[0].rating}
            id={driverData[0].id}
            // onPress={() => setModalVisible(true)}
          />
          <View
            style={
              {
                // width: Dimensions.get('screen').width,
                // paddingHorizontal: 40,
              }
            }>
            <Button
              title="Confirm"
              radius={2}
              onPress={() => {
                setModalVisible(visible => !visible);
                navigation.navigate('Home');
              }}
            />
          </View>
        </View>
      </CustomModal>
    </View>
  );
};

const styles = StyleSheet.create({
  detailsContainer: {
    marginVertical: 12,
  },
  distance: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
  },
});

export default ConfirmRide;

import React, {useState} from 'react';
import {
  View,
  FlatList,
  Dimensions,
  useWindowDimensions,
  Text,
  TextInput,
} from 'react-native';
import {container, dateText, topUpText} from '../assets/styles';
import MapView from 'react-native-maps';
import CustomBack from '../components/backButton';
import config from '../assets/styles/config';
import {Button} from '../components/button';
import {StyleSheet} from 'react-native';
import CustomModal from '../components/modal';

const BookSubs: React.FC<any> = ({navigation}) => {
  const {height, width} = useWindowDimensions();
  const ASPECT_RATIO = width / height;

  const [modalVisible, setModalVisible] = useState<boolean>(false);

  return (
    <View style={[container, {padding: 0}]}>
      <View style={{height: Dimensions.get('screen').height}}>
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
          backgroundColor: config.colors.background,
          opacity: 0.9,
        }}>
        <CustomBack onPress={() => navigation.goBack()} />
        <View style={{flexDirection: 'row'}}>
          <View
            style={{
              justifyContent: 'space-around',
              width: '15%',
              alignItems: 'center',
            }}>
            <View
              style={{
                width: 10,
                height: 10,
                backgroundColor: '#979797',
                borderRadius: 5,
              }}
            />
            <View
              style={{
                width: 10,
                height: 10,
                backgroundColor: '#979797',
                borderRadius: 5,
              }}
            />
            <View
              style={{
                width: 10,
                height: 10,
                backgroundColor: '#979797',
                borderRadius: 1,
              }}
            />
          </View>
          <View
            style={{
              width: '85%',
            }}>
            <TextInput
              style={{
                backgroundColor: config.colors.button,
                paddingHorizontal: 12,
                fontSize: config.fontSize.md,
                marginVertical: 6,
              }}
              placeholderTextColor="#979797"
              placeholder="Select Pickup stop"
            />
            <TextInput
              style={{
                backgroundColor: config.colors.button,
                paddingHorizontal: 12,
                fontSize: config.fontSize.md,
                marginVertical: 6,
              }}
              placeholderTextColor="#979797"
              placeholder="Enter Destination"
            />
            <TextInput
              style={{
                backgroundColor: config.colors.button,
                paddingHorizontal: 12,
                fontSize: config.fontSize.md,
                marginVertical: 6,
              }}
              placeholderTextColor="#979797"
              placeholder="How many Trips?"
            />
          </View>
        </View>
      </View>
      <View
        style={{
          position: 'absolute',
          top: Dimensions.get('screen').height * 0.8,
          left: 0,
          width: Dimensions.get('screen').width,
          paddingHorizontal: 40,
          //   height: 100,
          //   backgroundColor: config.colors.button,
        }}>
        <Button
          title="Done"
          radius={2}
          onPress={() => setModalVisible(visible => !visible)}
        />
      </View>
      <CustomModal
        title="Subscription Details"
        transparent={false}
        onClose={() => setModalVisible(visible => !visible)}
        modalVisible={modalVisible}>
        <View style={styles.detailsContainer}>
          <View style={[styles.distance, {marginVertical: 6}]}>
            <Text style={topUpText}>From</Text>
            <Text style={topUpText}>Kanombe</Text>
          </View>
          <View style={[styles.distance, {marginBottom: 6}]}>
            <Text style={topUpText}>To</Text>
            <Text style={topUpText}>Kacyiru</Text>
          </View>
          <View style={[styles.distance, {marginBottom: 6}]}>
            <Text style={topUpText}>Distance</Text>
            <Text style={topUpText}>16 Km</Text>
          </View>
          <View style={[styles.distance, {marginBottom: 6}]}>
            <Text style={topUpText}>Number of Trips</Text>
            <Text style={topUpText}>3</Text>
          </View>
          <View style={[styles.distance, {marginBottom: 6}]}>
            <Text style={topUpText}>Price per Trip</Text>
            <Text style={topUpText}>400 Rwf</Text>
          </View>
          <View style={[styles.distance, {marginBottom: 12}]}>
            <Text style={topUpText}>Total Price</Text>
            <Text style={topUpText}>12 000 Rwf</Text>
          </View>
          <View>
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
    marginTop: 18,
  },
  distance: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
  },
});

export default BookSubs;

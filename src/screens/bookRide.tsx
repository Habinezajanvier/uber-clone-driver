import React from 'react';
import {
  View,
  FlatList,
  Dimensions,
  useWindowDimensions,
  Text,
  TextInput,
} from 'react-native';
import {
  container,
  mainTheme,
  homeHeader,
  cardTopupContainer,
  cardTitle,
} from '../assets/styles';
import HomeHeader from '../components/homeHeader';
import MapView from 'react-native-maps';
import CustomBack from '../components/backButton';
import config from '../assets/styles/config';
import {Button} from '../components/button';

const BookRide: React.FC<any> = ({navigation}) => {
  const {height, width} = useWindowDimensions();
  const ASPECT_RATIO = width / height;

  return (
    <View style={[container, {padding: 0}]}>
      <View
        style={{
          paddingHorizontal: 20,
          paddingVertical: 10,
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
              placeholder="Enter Pickup point"
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
          </View>
        </View>
      </View>
      <View style={{height: Dimensions.get('screen').height * 0.9}}>
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
          onPress={() => navigation.navigate('ConfirmRide')}
        />
      </View>
    </View>
  );
};

export default BookRide;

import React, {memo} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
// import {SvgXml} from 'react-native-svg';
// import {cardReceive} from '../assets/svg/card-receive';
// import {cardSend} from '../assets/svg/card-send';
import {
  historyCard,
  dateText,
  amountText,
  topUpText,
  transactionContainer,
} from '../assets/styles';
import IconIcons from 'react-native-vector-icons/Ionicons';
import {CarData, CarType} from '../constants/carData';
import config from '../assets/styles/config';

interface Props {
  data: any;
  onPress?: () => void;
}

const ReservationCard: React.FC<Props> = ({onPress, data}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={onPress}
      style={[
        historyCard,
        {
          shadowColor: '#ffff',
          shadowOffset: {width: -2, height: 4},
          shadowOpacity: 0.2,
          shadowRadius: 3,
          flexDirection: 'column',
        },
      ]}>
      <View style={[styles.container, {marginBottom: 12}]}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <IconIcons name="person-circle-outline" color="#fff" size={36} />
          <View style={{marginLeft: 12}}>
            <Text style={styles.nameStyle}>
              {data.user.firstName} {data.user.lastName}
            </Text>
            <Text style={amountText}>{data.user.phoneNumber}</Text>
          </View>
        </View>
        <TouchableOpacity activeOpacity={0.5}>
          <IconIcons name="call-outline" color="#fff" size={36} />
        </TouchableOpacity>
      </View>
      <View style={styles.subContent}>
        <Text style={[amountText]}>{data?.route?.origin?.name}</Text>
        <Text style={[amountText]}>{data?.route?.origin?.name}</Text>
      </View>
      <View style={styles.subContent}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <IconIcons name="time-outline" color="#fff" size={12} />
          <Text style={[dateText, {marginLeft: 6}]}>
            {new Date(data?.createdAt).toTimeString().split(' ')[0]}
          </Text>
        </View>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <IconIcons name="time-outline" color="#fff" size={12} />
          <Text style={[dateText, {marginLeft: 6}]}>
            {new Date(data?.createdAt).toTimeString().split(' ')[0]}
          </Text>
        </View>
      </View>
      <View style={[styles.subContent, {marginVertical: 12}]}>
        <Text style={dateText}>Payment Status</Text>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <IconIcons name="checkmark-circle-outline" color="#fff" size={12} />
          <Text style={[dateText, {marginLeft: 4}]}>Paid</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    marginVertical: 6,
  },
  nameStyle: {
    color: config.colors.primaryText,
    fontFamily: 'Poppins-Semi-bold',
    // fontSize: config.fontSize.sm,
    fontSize: 24,
  },
  subContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
    alignSelf: 'flex-start',
  },

  normalText: {},
});

export default memo(
  ReservationCard,
  (prevProps, nextProps) => prevProps.data.id === nextProps.data.id,
);

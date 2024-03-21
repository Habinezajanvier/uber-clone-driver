import React from 'react';
import {View} from 'react-native';
import {Input} from '../components/input';
import {Button} from '../components/button';
import {Formik} from 'formik';
import {UnknownAction} from '@reduxjs/toolkit';
import {useDispatch} from 'react-redux';
import {labelStyle} from '../assets/styles';
import {apis} from '../store/apis';
import {PaymentMethod} from '../store/types.d';
import Modal from './modal';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import topupValidation from '../utils/validation/topup';

interface Props {
  modalizeRef: any;
  loading: boolean;
  profile: any;
  onPress: () => void;
}
const Topup: React.FC<Props> = ({modalizeRef, loading, profile, onPress}) => {
  const dispatch = useDispatch();
  const [otherMobileNum, setOtherMobileNum] = React.useState(false);
  const [userNumber, setUserNumber] = React.useState('');
  const [phoneNumber, setPhoneNumber] = React.useState('');
  return (
    <Modal
      modalizeRef={modalizeRef}
      onPress={onPress}
      title="Card top up"
      modalHeight={0.5}>
      <Formik
        initialValues={{amount: 0}}
        validationSchema={topupValidation}
        onSubmit={values => {
          dispatch(
            apis.topup({
              phoneNumber: profile.phoneNumber
                ? `25${profile.phoneNumber}`
                : `25${phoneNumber}`,
              amount: values.amount,
              paymentMethod: PaymentMethod.MOMO,
            }) as unknown as UnknownAction,
          );
        }}>
        {({handleChange, errors, handleSubmit}) => (
          <>
            <View style={{gap: 10}}>
              <BouncyCheckbox
                size={15}
                bounceEffectIn={1}
                isChecked={
                  userNumber === phoneNumber.substring(1) && !otherMobileNum
                }
                fillColor="#5DB075"
                unfillColor="#FFFFFF"
                text={`${profile?.phoneNumber}`}
                iconStyle={{borderColor: '#5DB075', alignSelf: 'center'}}
                innerIconStyle={{borderWidth: 1.5, borderRadius: 10}}
                textStyle={[
                  labelStyle,
                  {marginLeft: -10, textDecorationLine: 'none'},
                ]}
                disableBuiltInState
                onPress={() => {
                  setOtherMobileNum(false);
                  setPhoneNumber(`+${userNumber}`);
                }}
              />
              <BouncyCheckbox
                size={15}
                bounceEffectIn={1}
                isChecked={otherMobileNum}
                fillColor="#5DB075"
                unfillColor="#FFFFFF"
                text={'Other mobile number'}
                iconStyle={{borderColor: '#5DB075', alignSelf: 'center'}}
                innerIconStyle={{borderWidth: 1.5, borderRadius: 10}}
                textStyle={[
                  labelStyle,
                  {marginLeft: -10, textDecorationLine: 'none'},
                ]}
                disableBuiltInState
                onPress={() => {
                  setPhoneNumber('');
                  setOtherMobileNum(!otherMobileNum);
                }}
              />
            </View>
            {otherMobileNum && (
              <>
                <Input
                  placeholder="Phone number"
                  marginVertical={5}
                  onChangeText={number => setPhoneNumber(number)}
                  keyboardType="numeric"
                />
              </>
            )}
            <Input
              placeholder="Amount"
              marginVertical={5}
              error={errors.amount}
              onChangeText={handleChange('amount')}
              keyboardType="numeric"
            />
            <Button
              title="Top up"
              radius={10}
              onPress={handleSubmit}
              loading={loading}
            />
          </>
        )}
      </Formik>
    </Modal>
  );
};

export default Topup;

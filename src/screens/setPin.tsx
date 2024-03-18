import React from 'react';
import {View, Text} from 'react-native';
import {Button} from '../components/button';
import {PinInput} from '../components/input';
import {authMainContainer, mainTitle} from '../assets/styles';
import {useDispatch, useSelector} from 'react-redux';
import {apis} from '../store/apis';
import {RootState} from '../store/types';
import {UnknownAction} from '@reduxjs/toolkit';
import {Formik} from 'formik';
import Toast from 'react-native-toast-message';
import setPinValidation from '../utils/validation/setPin';

const SetPin: React.FC<any> = ({navigation, route}) => {
  const dispatch = useDispatch();
  const {user} = route.params;
  const {loading, error, success, message} = useSelector(
    (state: RootState) => state.signup,
  );

  React.useEffect(() => {
    if (success) {
      Toast.show({type: 'success', text1: message});
      setTimeout(() => {
        Toast.hide();
        dispatch(apis.resetAll());
        navigation.push('Login');
      }, 3000);
    }
    if (error) {
      Toast.show({
        type: 'error',
        text1: error,
      });
      setTimeout(() => {
        Toast.hide();
        dispatch(apis.resetAll());
        navigation.push('Register');
      }, 3000);
    }
  }, [error, success]);

  return (
    <View style={authMainContainer}>
      <Text style={mainTitle}>Set Pin</Text>
      <Formik
        validationSchema={setPinValidation}
        initialValues={{pin: ''}}
        onSubmit={values => {
          dispatch(
            apis.signup({...user, pin: values.pin}) as unknown as UnknownAction,
          );
        }}>
        {({handleChange, handleSubmit, errors}) => (
          <>
            <PinInput
              label={'Enter Pin'}
              onChangeText={handleChange('pin')}
              error={errors.pin}
            />
            <Button title="Set" loading={loading} onPress={handleSubmit} />
          </>
        )}
      </Formik>
    </View>
  );
};

export default SetPin;

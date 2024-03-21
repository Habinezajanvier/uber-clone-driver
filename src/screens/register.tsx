import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {Button} from '../components/button';
import {Input} from '../components/input';
import {
  alreadyHaveAccount,
  authMainContainer,
  informingText,
  mainText,
  mainTitle,
} from '../assets/styles';
import {Formik} from 'formik';
import signupValidation from '../utils/validation/signup';

const Register: React.FC<any> = ({navigation}) => {
  return (
    <View style={authMainContainer}>
      <Text style={mainTitle}>Sign up</Text>
      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          phoneNumber: '',
        }}
        validationSchema={signupValidation}
        onSubmit={(values, {resetForm}) => {
          navigation.navigate('Setpin', {
            user: {
              phoneNumber: values.phoneNumber,
              firstName: values.firstName,
              lastName: values.lastName,
            },
          });
          resetForm();
        }}>
        {({handleChange, handleSubmit, errors, handleReset}) => (
          <>
            <Input
              placeholder="First name"
              placeholderTextColor="#BDBDBD"
              label="Your first name"
              onChangeText={handleChange('firstName')}
              error={errors.firstName}
            />
            <Input
              placeholder="Last name"
              placeholderTextColor="#BDBDBD"
              label="Your last name"
              onChangeText={handleChange('lastName')}
              error={errors.lastName}
            />
            <Input
              placeholder="Phone number"
              placeholderTextColor="#BDBDBD"
              label="Your phone number"
              onChangeText={handleChange('phoneNumber')}
              error={errors.phoneNumber}
              keyboardType='numeric'
            />
            <Button title="Register" onPress={handleSubmit} />
          </>
        )}
      </Formik>
      <View style={alreadyHaveAccount}>
        <Text style={informingText}>Already have account?</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text style={mainText}> login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Register;

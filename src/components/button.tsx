/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text, TouchableOpacity, ActivityIndicator} from 'react-native';
import config from '../assets/styles/config';

type Props = {
  title: string;
  loading?: boolean;
  onPress?: () => void;
  disabled?: boolean;
  icon?: any;
  radius?: number;
};

export const Button: React.FC<Props> = ({
  title,
  loading,
  onPress,
  disabled,
  radius,
}) => {
  const handlePress = () => {
    if (!disabled && onPress) {
      onPress();
    }
  };
  return (
    <TouchableOpacity
      style={{
        borderRadius: radius ? radius : 100,
        width: '100%',
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: config.colors.button,
        marginVertical: 20,
      }}
      activeOpacity={0.8}
      onPress={handlePress}>
      {loading ? (
        <ActivityIndicator color="#fff" />
      ) : (
        <Text
          style={{
            fontSize: 16,
            color: '#FFFFFF',
            lineHeight: 19.36,
            fontFamily: 'Inter-Bold',
          }}>
          {title}
        </Text>
      )}
    </TouchableOpacity>
  );
};

export const ActionButton: React.FC<Props> = ({
  title,
  loading,
  onPress,
  disabled,
}) => {
  const handlePress = () => {
    if (!disabled && onPress) {
      onPress();
    }
  };
  return (
    <TouchableOpacity
      style={{
        borderRadius: 8,
        width: 86,
        height: 51,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#5DB075',
        marginVertical: 20,
      }}
      activeOpacity={0.8}
      onPress={handlePress}>
      {loading ? (
        <ActivityIndicator color="#fff" />
      ) : (
        <Text
          style={{
            fontSize: 16,
            color: '#FFFFFF',
            lineHeight: 19.36,
            fontFamily: 'Inter-Bold',
          }}>
          {title}
        </Text>
      )}
    </TouchableOpacity>
  );
};

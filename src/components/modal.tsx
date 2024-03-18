import React, {PropsWithChildren} from 'react';
import {
  Modal,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import {cardTitle, homeHeader} from '../assets/styles';
import IconIcons from 'react-native-vector-icons/Ionicons';
import config from '../assets/styles/config';

type Props = PropsWithChildren<{
  modalVisible: boolean;
  onClose: () => void;
  title?: string;
  transparent?: boolean;
}>;

const CustomModal: React.FC<Props> = ({
  modalVisible,
  onClose,
  children,
  title,
  transparent = true,
}) => {
  return (
    <Modal
      animationType="slide"
      transparent={transparent}
      visible={modalVisible}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <View style={styles.heading}>
            <Text style={cardTitle}>{title}</Text>

            <TouchableOpacity activeOpacity={0.8} onPress={onClose}>
              <IconIcons
                name="close"
                color={config.colors.primaryText}
                size={36}
              />
            </TouchableOpacity>
          </View>
          {children}
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  heading: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 10,
    width: '100%',
    borderBottomColor: config.colors.primaryText,
    borderBottomWidth: 1,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    width: Dimensions.get('screen').width * 0.85,
    backgroundColor: config.colors.background,
    borderRadius: 2,
    padding: 10,
    alignItems: 'center',
    shadowColor: '#fff',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
});

export default CustomModal;

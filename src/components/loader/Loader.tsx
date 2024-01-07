import { StyleSheet, Text, View, Modal, ActivityIndicator, useColorScheme } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { theme } from '../../config';

export default function Loader(props) {
  // const isLoading = true //useSelector((state: AppState) => state?.loader?.transparentLoader);
  // const isLoading = useSelector(state => state.user.isLoading);
  const [modalVisible, setModalVisible] = useState(true);

  useEffect(() => {
    setModalVisible(props.isLoading);
  }, [props.isLoading]);

  return (
    <View>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View className="bg-white dark:bg-darkPrimary" style={styles.modalView}>
            <ActivityIndicator size="large" color={theme.primaryColor} />
            <Text className="text-lg text-center ml-7 text-black font-poppins-bold dark:text-white">Please Wait ...</Text>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00000080',
  },
  modalView: {
    flexDirection: 'row',
    // justifyContent: 'space-around',
    width: '80%',
    borderRadius: 6,
    paddingVertical: 28,
    paddingHorizontal: 22,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },

});

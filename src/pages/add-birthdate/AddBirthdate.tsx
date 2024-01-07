import { View, Text, ScrollView, Image, TouchableOpacity, TextInput } from 'react-native'
import React, { useState } from 'react'
import BackButton from '../../components/back-button/BackButton'
import { commonStyles, theme } from '../../config'
import Feather from 'react-native-vector-icons/Feather';
import ImagePicker from 'react-native-image-crop-picker';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { ButtonTypes } from '../../types/commonInterface';
import { Formik } from 'formik';
import Button from '../../components/button/Button';

export default function AddBirthdate() {

    const [selectedImage, setSelectedImage] = useState(null);
    const [width, setWidth] = useState(400);
    const [height, setHeight] = useState(400);

    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

    const showDatePicker = () => {
      setDatePickerVisibility(true);
    };
  
    const hideDatePicker = () => {
      setDatePickerVisibility(false);
    };
  
    const handleConfirm = (date: any) => {
      console.warn("A date has been picked: ", date);
      hideDatePicker();
    };


    const handleImagePicker = () => {
        ImagePicker.openPicker({
            width,
            height,
            cropping: true,
            cropperCircleOverlay: true,
            hideBottomControls: true
        })
            .then((image: any) => {
                setSelectedImage(image.path);
                setHeight(height);
                setWidth(width);
                console.log(image);
            })
            .catch((error) => {
                console.log(error);
            });
    };


    return (
        <>
            <ScrollView showsVerticalScrollIndicator={false} className="dark:bg-darkPrimary">
                <View className="px-4">
                    <BackButton backUrl='red' title='Add Birthdate' />

                    <View className="mt-32">
                        <View className="flex-row justify-center">
                            <View className='border-secondary/20 flex-row justify-center -mt-20 rounded-full border-4'
                                style={{ elevation: 20, shadowColor: theme.primaryColor }}
                            // onPress={() => setGender(gender === "male" ? "female" : "male")}
                            >
                                <Image
                                    source={{ uri: selectedImage ?? `https://xsgames.co/randomusers/avatar.php?g=female&yese_hi=${Math.random()}` }}
                                    style={{ width: 150, height: 150, }}
                                    className="rounded-full" />

                                <View className="absolute right-0 bottom-0">
                                    <TouchableOpacity activeOpacity={0.6} onPress={() => handleImagePicker()}>
                                        <View className="bg-primary/100 w-12 h-12 flex-col justify-center items-center rounded-full">
                                            <Feather name="camera" color="white" size={24} />
                                        </View>
                                    </TouchableOpacity>
                                </View>

                            </View>
                        </View>

                    </View>

                    <View>
        <Formik
          enableReinitialize
          initialValues={{
            name: '',
            email: '',
            phone: ''

          }}
          // validationSchema={validationSchema}
          onSubmit={(values) => {
            //   dispatch(guestLogin(values))
            console.log('get values for login', values)
          }}
        >
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            touched,
            errors,
            setFieldValue
          }) => (

            <View>
              <View className="mt-12">
                <View className="mb-6">
                  <TextInput
                    className={`${commonStyles.commonInput}`}
                    onChangeText={handleChange('name')}
                    onBlur={handleBlur('name')}
                    value={values.name}
                    placeholder="Enter Name"
                    placeholderTextColor="#727586"
                    style={{ elevation: 3 }}
                    
                  />
                  {errors.name && touched.name && (
                    <Text className={'text-red-600 mt-1 mx-4'}>{errors.name}</Text>
                  )}
                </View>

                <View className="mb-4">
                  <TextInput
                    className={commonStyles.commonInput}
                    onChangeText={handleChange('phone')}
                    onBlur={handleBlur('phone')}
                    value={values.phone}
                    placeholder="Enter Phone Number"
                    maxLength={10}
                    placeholderTextColor="#727586"
                    keyboardType="numeric"
                    style={{ elevation: 3 }}
                  />
                  {errors.phone && touched.phone && (
                    <Text className={'text-red-600 mt-1 mx-4'}>{errors.phone}</Text>
                  )}
                </View>

                <View className="mb-6">
                  <TextInput
                    className={commonStyles.commonInput}
                    onChangeText={handleChange('email')}
                    onBlur={handleBlur('email')}
                    value={values.email}
                    placeholder="Enter Email (Optional)"
                    maxLength={60}
                    placeholderTextColor="#727586"
                    keyboardType="email-address"
                    style={{ elevation: 3 }}
                  />
                  {errors.email && touched.email && (
                    <Text className={'text-red-600 mt-1 mx-4'}>{errors.email}</Text>
                  )}
                </View>


                

                <Button type={ButtonTypes.PRIMARY_OUTLINE} text="Select Date of Birth" onPressEvent={showDatePicker} />
                <DateTimePickerModal
                //   date={new Date('1999')}//add here student's date of year
                  //   minimumDate={new Date('2022-05-15')}
                  //   maximumDate={new Date('2022-06-15')}
                  isVisible={isDatePickerVisible}
                  mode="date"
                  onConfirm={handleConfirm}
                  onCancel={hideDatePicker}
                />



              </View>
              <View className="mt-12 mb-24">
                <Button type={ButtonTypes.PRIMARY} text="Update Profile" onPressEvent={handleSubmit} />

              </View>
            </View>
          )}
        </Formik>
      </View>

                </View>
            </ScrollView>
        </>
    )
}
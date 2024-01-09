import { View, Text, Image, TouchableOpacity, TextInput, ImageBackground } from 'react-native'
import React from 'react'
import HeaderTitle from '../../components/header-title/HeaderTitle';
import { assets, commonStyles, theme } from '../../config';
import Feather from 'react-native-vector-icons/Feather';
import Button from '../../components/button/Button';
import { ButtonTypes } from '../../types/commonInterface';

type Props = {
    eventType?: string;
}

const AddEvent = (props: Props) => {
    return (
        <ImageBackground className="h-full"
        source={assets.bg.mainBg}
      >
        <View className="px-7" style={{ flex: 1 }}>
            <View style={{ flex: 1 }}>
                <View className="pt-[76px] h-full">
                    <HeaderTitle title={props.eventType} />

                    <View className="mt-24 pb-7">
                        <View className="flex-row justify-center">
                            <View className='border-primary flex-row justify-center -mt-20 rounded-full border-4'
                                style={{ elevation: 20, shadowColor: theme.primaryColor }}
                            >
                                <Image
                                    source={{ uri: `https://xsgames.co/randomusers/avatar.php?g=female&yese_hi=${Math.random()}` }}
                                    style={{ width: 150, height: 150, }}
                                    className="rounded-full" />

                                <View className="absolute right-0 bottom-0">
                                    <TouchableOpacity activeOpacity={0.6}>
                                        <View className="bg-primary/100 w-12 h-12 flex-col justify-center items-center rounded-full border-2 border-[#CFAAFF]">
                                            <Feather name="edit-2" color="white" size={22} />
                                        </View>
                                    </TouchableOpacity>
                                </View>

                            </View>
                        </View>

                    </View>

                    <View className="mb-6">
                        <TextInput
                            className={`${commonStyles.commonInput}`}
                            // onChangeText={handleChange('name')}
                            // onBlur={handleBlur('name')}
                            // value={values.name}
                            placeholder="Name"
                            placeholderTextColor="#727586"
                        />
                        <Text className="text-gray-700 mt-4 text-base">Name of person for whom you want to set a reminder for.</Text>
                        {/* {errors.name && touched.name && (
                    <Text className={'text-red-600 mt-1 mx-4'}>{errors.name}</Text>
                  )} */}
                    </View>

                    <View className="mt-[75px]">
                        <Text className="text-black text-center text-2xl">
                            Notification message
                        </Text>
                        <Text className="text-black mt-6">
                            Today is Anniversary of Name.
                        </Text>
                    </View>
                </View>
            </View>

            <View className="mb-7 flex-row justify-between">
                <Button type={ButtonTypes.PRIMARY} text="Prev" onPressEvent={() => { }} />
                <Button type={ButtonTypes.PRIMARY} text="Next" onPressEvent={() => { }} />
            </View>



        </View>
        </ImageBackground>
    )
}

export default AddEvent
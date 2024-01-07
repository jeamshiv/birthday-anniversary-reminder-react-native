import React from 'react'
import { Text, TouchableOpacity, View, useColorScheme } from 'react-native'
import Feather from 'react-native-vector-icons/Feather';
import { theme } from '../../config';
// import { useNavigation } from '@react-navigation/native';

type Props = {
    title?: string;
    backUrl: string;
}

export default function BackButton(props: Props) {
    // const navigation = useNavigation();
    const darkMode = useColorScheme() == 'dark';

    return (
        <View className="flex-row items-center mb-4 mt-4">
            {/* <TouchableOpacity activeOpacity={0.6} onPress={() => { navigation.navigate(props.backUrl) }}> */}
            <TouchableOpacity activeOpacity={0.6} onPress={() => { }}>
                <View className="shadow-2xl bg-white/[.4] dark:bg-black/40 rounded-full p-2">
                    <Feather name="arrow-left" size={32} color={darkMode? 'white' :theme.blackColor} />
                </View>
            </TouchableOpacity>
            {props.title &&
                <View className="ml-6">
                    <Text className="text-black text-xl font-poppins-semibold dark:text-white">{props.title}</Text>
                </View>
            }

        </View>
    )
}
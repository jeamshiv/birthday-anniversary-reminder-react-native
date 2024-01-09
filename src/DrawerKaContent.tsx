import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import {
    DrawerContentScrollView,
    DrawerItem
} from '@react-navigation/drawer'

import { theme } from './config'
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';



// iconsicons website
// https://icons.expo.fyi/


export default function DrawerKaContent(props) {
    return (
        <>
            <DrawerContentScrollView contentContainerStyle={{ flex: 1 }}>
                <View className="bg-[#DFCCFF] h-full -mt-1">

                    <View>
                        <Text className="text-primary text-[28px] font-medium text-center mt-[76px] mb-[86px]">Event Reminder</Text>
                    </View>

                    <View style={{ paddingHorizontal: 12, }}>

                        <DrawerItem
                            icon={({ color: size }) => (
                                <Feather name={'home'} size={24} color={theme.primaryColor} style={{ marginTop: 4 }} />
                            )}
                            label="Home"
                            onPress={() => { props.navigation.navigate('home') }}
                        />

                        <DrawerItem
                            icon={({ color: size }) => (
                                <Feather name={'home'} size={24} color={theme.primaryColor} style={{ marginTop: 4 }} />
                            )}
                            label="Event Types"
                            onPress={() => { props.navigation.navigate('event-types') }}
                        />

                        <DrawerItem
                            icon={({ color: size }) => (
                                <Feather name={'home'} size={24} color={theme.primaryColor} style={{ marginTop: 4 }} />
                            )}
                            label="Add Event"
                            onPress={() => { props.navigation.navigate('add-event') }}
                        />


                        <DrawerItem
                            icon={({ color: size }) => (
                                <Feather name={'home'} size={24} color={theme.primaryColor} style={{ marginTop: 4 }} />
                            )}
                            label="Event Date"
                            onPress={() => { props.navigation.navigate('event-date') }}
                        />


                        <DrawerItem
                            icon={({ color: size }) => (
                                <Feather name={'home'} size={24} color={theme.primaryColor} style={{ marginTop: 4 }} />
                            )}
                            label="Select Avatar"
                            onPress={() => { props.navigation.navigate('select-avatar') }}
                        />






                    </View>

                    <View>
                        <View>
                            <Feather name={'x'} size={30} color={theme.primaryColor} style={{ marginTop: 4 }} onPress={() => { props.navigation.closeDrawer(); }} />
                        </View>
                        <View style={{ flexDirection: 'row', marginTop: 30 }}>
                            <Text className="text-gray-800">Need help? </Text>
                            <Text style={{ color: theme.primaryColor }} onPress={() => { props.navigation.navigate('Contact') }}> Contact us</Text>
                        </View>
                    </View>


                </View>

            </DrawerContentScrollView>
        </>
    )
}


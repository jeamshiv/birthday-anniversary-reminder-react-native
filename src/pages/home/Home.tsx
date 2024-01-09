import { View, Text, TouchableOpacity, Image, SafeAreaView, FlatList, ImageBackground, ScrollView } from 'react-native'
import React from 'react'
import { assets } from '../../config'
import Feather from 'react-native-vector-icons/Feather';

export default function Home(props: any) {
    const upcomingEventData = [
        {
            "id": 0,
        },
        {
            "id": 1,
            "name": "Test One",
            "type": "Anniversary",
            "dates": "24 Apr 2024"
        },
        {
            "id": 2,
            "name": "Test Two",
            "type": "Anniversary",
            "dates": "24 Apr 2024"
        },
        {
            "id": 3,
            "name": "Test Three",
            "type": "Anniversary",
            "dates": "24 Apr 2024"
        },
        {
            "id": 4,
            "name": "Test Four",
            "type": "Anniversary",
            "dates": "24 Apr 2024"
        },
        {
            "id": 5,
            "name": "Test Five",
            "type": "Anniversary",
            "dates": "24 Apr 2024"
        },
        {
            "id": 6,
            "name": "Test Six",
            "type": "Anniversary",
            "dates": "24 Apr 2024"
        },

    ]

    const renderUpcomingEventCard = ({ item, index }: any) => (
        index === 0 ? (
            <View className="mr-3 p-2 px-4 pb-4 rounded-xl bg-white/[0.15]">
                <TouchableOpacity activeOpacity={0.6} onPress={() => { }}>
                    <View className="h-[90px] w-[90px] bg-[#DCA4FF66] rounded-full flex justify-center items-center border-2 border-primary mb-2">
                        <Feather name={'plus'} size={24} color={'#374957'} />
                    </View>
                    <Text className="text-black text-center">Add New Event</Text>

                </TouchableOpacity>
            </View>
        )
            : (
                <View className="mr-3 p-2 px-4 pb-4 rounded-xl bg-white/[0.15]">
                    <TouchableOpacity activeOpacity={0.6} onPress={() => { }}>
                        <View className="border-2 border-primary mb-2 rounded-full">
                            <Image
                                className="rounded-full self-center"
                                style={{ width: 90, height: 90, resizeMode: 'center' }}
                                source={{ uri: `https://xsgames.co/randomusers/avatar.php?g=female&yese_hi=${Math.random()}` }}
                            />

                        </View>
                        <Text className="text-black text-center">{item.name} {index}</Text>
                        <Text className="text-black text-center">Anniversary</Text>
                        <Text className="text-gray-700 text-center">24 Apr, 2024</Text>
                    </TouchableOpacity>
                </View>
            )


    )


    return (
        <ImageBackground className="h-full"
            source={assets.bg.mainBg}
        >
            <ScrollView showsVerticalScrollIndicator={false}>
            <View className="px-4">
                <TouchableOpacity className="mt-8" onPress={() => { props.navigation.openDrawer(); }}>
                    <Feather name={'menu'} size={24} color={'#374957'} />
                </TouchableOpacity>
                <Text className="text-[28px] text-primary font-semibold text-center mt-12">
                    Welcome, Shivam
                </Text>
                <View className="flex-row justify-between items-center mt-10 mb-3">
                    <Text className="text-black text-lg">
                        Upcoming Events
                    </Text>
                    <TouchableOpacity className="" onPress={() => { }}>
                        <Text className="text-primary text-sm border-b-2 border-primary">View All</Text>
                    </TouchableOpacity>
                </View>

                <View>
                    <SafeAreaView>
                        <FlatList
                            showsHorizontalScrollIndicator={false}
                            horizontal={true}
                            data={upcomingEventData}
                            renderItem={renderUpcomingEventCard}
                            keyExtractor={item => item.id}
                            showsVerticalScrollIndicator={false}

                        />
                    </SafeAreaView>
                </View>

            </View>
            </ScrollView>
        </ImageBackground>
    )
}
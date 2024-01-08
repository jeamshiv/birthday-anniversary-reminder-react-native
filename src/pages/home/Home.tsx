import { View, Text, TouchableOpacity, Image, SafeAreaView, FlatList } from 'react-native'
import React from 'react'

export default function Home() {
    const upcomingEventData = [
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

    const renderUpcomingEventCard = () => (
        <View className="mr-3 p-2 pb-4 rounded-xl bg-white/[0.15]">
            <TouchableOpacity activeOpacity={0.6} onPress={() => { }}>
                <Image
                    className="rounded-full self-center mb-2"
                    style={{ width: 90, height: 90, resizeMode: 'center' }}
                    source={{ uri: `https://xsgames.co/randomusers/avatar.php?g=female&yese_hi=${Math.random()}` }}
                />
                <Text className="text-black text-center">Amit's</Text>
                <Text className="text-black text-center">Anniversary</Text>
                <Text className="text-gray-700 text-center">24 Apr, 2024</Text>
            </TouchableOpacity>
        </View>
    )


    return (
        <View className="px-4">
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
    )
}
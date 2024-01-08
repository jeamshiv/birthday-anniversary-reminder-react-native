import { View, Text, SafeAreaView, FlatList, TouchableOpacity, Image, ScrollView } from 'react-native'
import React from 'react'
import HeaderTitle from '../../components/header-title/HeaderTitle'
import { ButtonTypes } from '../../types/commonInterface'
import Button from '../../components/button/Button'

export default function SelectEventAvatar() {
    const avatarListData = [{
        "id": 1,
        "name": "One"
    },
    {
        "id": 2,
        "name": "Two"
    },
    {
        "id": 3,
        "name": "Three"
    },
    {
        "id": 4,
        "name": "Four"
    },
    {
        "id": 5,
        "name": "Five"
    },
    {
        "id": 6,
        "name": "Six"
    },
    {
        "id": 7,
        "name": "Seven"
    },
    {
        "id": 8,
        "name": "Eight"
    },
    {
        "id": 9,
        "name": "Nine"
    },
    {
        "id": 10,
        "name": "Ten"
    },
    {
        "id": 11,
        "name": "Eleven"
    },
    {
        "id": 12,
        "name": "Twelve"
    },
    {
        "id": 13,
        "name": "Thirteen"
    },
    {
        "id": 14,
        "name": "Fourteen"
    },
    {
        "id": 15,
        "name": "Fifteen"
    },
    {
        "id": 16,
        "name": "Sixteen"
    },
    {
        "id": 17,
        "name": "Seventh"
    }
    ]

    const renderAvatarList = ({ item: any }) => (
        <View className="m-2 rounded-full border-2 border-primary">
            <TouchableOpacity activeOpacity={0.6} onPress={() => { }}>
                <Image
                    className="rounded-full"
                    style={{ width: 90, height: 90, resizeMode: 'center' }}
                    source={{ uri: `https://xsgames.co/randomusers/avatar.php?g=female&yese_hi=${Math.random()}` }}
                />
            </TouchableOpacity>
        </View>
    )

    return (
        <View className="px-7" style={{ flex: 1 }}>
            <View style={{ flex: 1 }}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View className="pt-[76px] mb-8">
                        <HeaderTitle title="Select Event Type" />
                    </View>
                    {/* render avatar here */}
                    <View className="self-center">
                        <SafeAreaView>
                            <FlatList
                                horizontal={false}
                                data={avatarListData}
                                renderItem={renderAvatarList}
                                keyExtractor={item => item.id}
                                showsVerticalScrollIndicator={false}
                                numColumns={3}
                            />
                        </SafeAreaView>
                    </View>
                </ScrollView>
            </View>

            <View className="mb-2 pt-2">
                <Button type={ButtonTypes.PRIMARY_OUTLINE} text="Cancel" onPressEvent={() => { }} />
            </View>
            <View className="mb-7">
                <Button type={ButtonTypes.PRIMARY} text="Next" onPressEvent={() => { }} />
            </View>

        </View>
    )
}
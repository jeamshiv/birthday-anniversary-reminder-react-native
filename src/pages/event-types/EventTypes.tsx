import { View, Text, TouchableOpacity, ImageBackground } from 'react-native'
import React, { useState } from 'react'
import HeaderTitle from '../../components/header-title/HeaderTitle'
import Button from '../../components/button/Button'
import { ButtonTypes, EventNameTypes } from '../../types/commonInterface'
import { assets } from '../../config'

export default function EventTypes() {
    const [selectedEventType, setSelectedEventType] = useState("")

    return (
        <ImageBackground className="h-full"
        source={assets.bg.mainBg}
      >
        <View className="px-7" style={{ flex: 1 }}>
            <View style={{ flex: 1 }}>
                <View className="pt-[76px]">
                    <HeaderTitle title="Select Event Type" />

                    <View className="mt-[190px]">
                        <TouchableOpacity activeOpacity={0.6} onPress={() => { setSelectedEventType(EventNameTypes.BIRTHDAY) }}>
                            <View className={`${selectedEventType === EventNameTypes.BIRTHDAY ? 'border-primary' : 'border-transparent'} py-4 rounded-lg bg-white/20 border-2  mb-3`}>
                                <Text className="text-center text-2xl text-primary">{EventNameTypes.BIRTHDAY}</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={0.6} onPress={() => { setSelectedEventType(EventNameTypes.ANNIVERSARY) }}>
                            <View className={`${selectedEventType === EventNameTypes.ANNIVERSARY ? 'border-primary' : 'border-transparent'} py-4 rounded-lg bg-white/20 border-2  mb-3`}>
                                <Text className="text-center text-2xl text-primary">{EventNameTypes.ANNIVERSARY}</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={0.6} onPress={() => { setSelectedEventType("Custom") }}>
                            <View className={`${selectedEventType === "Custom" ? 'border-primary' : 'border-transparent'} py-4 rounded-lg bg-white/20 border-2  mb-3`}>
                                <Text className="text-center text-2xl text-primary">+ New</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>

            <View className="mb-7">
                <Button type={ButtonTypes.PRIMARY} text="Next" onPressEvent={() => { }} />
            </View>

        </View>
        </ImageBackground>
    )
}
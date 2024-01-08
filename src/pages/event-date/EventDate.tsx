import { View, Text } from 'react-native'
import React, { useState } from 'react'
import HeaderTitle from '../../components/header-title/HeaderTitle'
import { Calendar } from 'react-native-calendars'
import Button from '../../components/button/Button'
import { ButtonTypes } from '../../types/commonInterface'

type Props = {}

const EventDate = (props: Props) => {

    const [selected, setSelected] = useState('');

    return (
        <View className="px-7" style={{ flex: 1 }}>
            <View style={{ flex: 1 }}>
                <View className="pt-[76px] h-full">
                    <HeaderTitle title={`Amit's \n Anniversary`} />
                    <View>
                        <Text className="text-lg text-black text-center my-7">Select Anniversary date</Text>
                    </View>

                    <View className="mb-5">
                        <Calendar
                            onDayPress={day => {
                                setSelected(day.dateString);
                            }}
                            markedDates={{
                                [selected]: { selected: true, disableTouchEvent: true, selectedTextColor: 'white' }
                            }}

                        />
                    </View>
                    <Text className="text-lg text-black">
                        Notify Amit's Anniversary on {selected} at 08:30 AM.
                    </Text>
                </View>
            </View>

            <View className="mt-12 mb-7 flex-row justify-between">
                <Button type={ButtonTypes.PRIMARY} text="Prev" onPressEvent={() => { }} />
                <Button type={ButtonTypes.PRIMARY} text="Next" onPressEvent={() => { }} />
            </View>

        </View>
    )
}

export default EventDate
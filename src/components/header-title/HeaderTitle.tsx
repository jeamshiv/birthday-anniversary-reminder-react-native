import { View, Text } from 'react-native'
import React from 'react'

type Props = {
    title: string
}

const HeaderTitle = (props: Props) => {
  return (
    <View>
      <Text className="text-primary text-center text-3xl font-medium">{props.title}</Text>
    </View>
  )
}

export default HeaderTitle
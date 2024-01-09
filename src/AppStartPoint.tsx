import { View, Text, ImageBackground } from 'react-native'
import React from 'react'
import Button from './components/button/Button'
import { ButtonTypes, EventNameTypes } from './types/commonInterface'
import BackButton from './components/back-button/BackButton'
import AddBirthdate from './pages/add-birthdate/AddBirthdate'
import EventTypes from './pages/event-types/EventTypes'
import { assets, theme } from './config'
import AddEvent from './pages/add-event/AddEvent'
import EventDate from './pages/event-date/EventDate'
import SelectEventAvatar from './pages/select-event-avatar/SelectEventAvatar'
import Home from './pages/home/Home'
import { StatusBar } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createDrawerNavigator } from '@react-navigation/drawer'
import DrawerKaContent from './DrawerKaContent'

export default function AppStartPoint() {

  const Drawer = createDrawerNavigator();

  return (
    <>
      <StatusBar barStyle='light-content' hidden={false} backgroundColor={theme.primaryColor} translucent={false} />

      <NavigationContainer>

        <Drawer.Navigator
          drawerContent={(props) => <DrawerKaContent {...props} />}
          initialRouteName={"home"}
          screenOptions={{
            headerShown: false
          }}

        >
          <Drawer.Screen name="home" component={Home} />
          <Drawer.Screen name="event-types" component={EventTypes} />
          <Drawer.Screen name="add-event" component={AddEvent} />
          <Drawer.Screen name="event-date" component={EventDate} />
          <Drawer.Screen name="select-avatar" component={SelectEventAvatar} />

        </Drawer.Navigator>


      </NavigationContainer>
    </>
  )
}
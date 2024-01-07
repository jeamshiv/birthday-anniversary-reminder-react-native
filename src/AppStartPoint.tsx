import { View, Text, ImageBackground } from 'react-native'
import React from 'react'
import Button from './components/button/Button'
import { ButtonTypes, EventNameTypes } from './types/commonInterface'
import BackButton from './components/back-button/BackButton'
import AddBirthdate from './pages/add-birthdate/AddBirthdate'
import EventTypes from './pages/event-types/EventTypes'
import { assets } from './config'
import AddEvent from './pages/add-event/AddEvent'
import EventDate from './pages/event-date/EventDate'

export default function AppStartPoint() {
  return (
    <>

      <ImageBackground className="h-full"
        source={assets.bg.mainBg}
      >
        <EventTypes />
        {/* <AddEvent eventType={EventNameTypes.ANNIVERSARY} /> */}
        {/* <EventDate /> */}
      </ImageBackground>
    </>
  )
}
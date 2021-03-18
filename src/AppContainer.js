import React from 'react'
import { StatusBar } from 'react-native'
import SwitchNavigator from './router'

function App(props) {
  return (
    <>
      <StatusBar barStyle='dark-content' />
      <SwitchNavigator />
    </>
  )
}

export default App

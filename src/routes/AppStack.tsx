import React from 'react'

import { createStackNavigator } from '@react-navigation/stack'

import { Books, BookContent } from 'modules'

const Stack = createStackNavigator()

const AppStack = () => {
  return (
    <Stack.Navigator initialRouteName="Books" headerMode="screen">
      <Stack.Screen name="Books" component={Books} />
      <Stack.Screen name="BookContent" component={BookContent} />
    </Stack.Navigator>
  )
}

export default AppStack

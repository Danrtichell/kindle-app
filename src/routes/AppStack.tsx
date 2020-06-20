import React from 'react'

import { createStackNavigator } from '@react-navigation/stack'

import { Books, BookContent } from 'modules'

const Stack = createStackNavigator()

const AppStack = () => {
  return (
    <Stack.Navigator initialRouteName="Books" headerMode="screen">
      <Stack.Screen name="Kindle" component={Books} />
      <Stack.Screen name="Book Content" component={BookContent} />
    </Stack.Navigator>
  )
}

export default AppStack

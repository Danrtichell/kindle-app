import React from 'react'

import { createStackNavigator } from '@react-navigation/stack'

import { Books, BookContent } from 'modules'

type ParamsType = {
  [key: string]: any
}

const Stack = createStackNavigator()

const AppStack = () => {
  return (
    <Stack.Navigator initialRouteName="Books" headerMode="screen">
      <Stack.Screen
        name="BookList"
        component={Books}
        options={{ headerTitle: 'Kindle' }}
      />
      <Stack.Screen
        name="BookContent"
        component={BookContent}
        options={({ route }) => {
          const params = route.params as ParamsType

          return {
            headerBackTitle: '',
            headerBackTitleVisible: false,
            title: params.title ?? ''
          }
        }}
      />
    </Stack.Navigator>
  )
}

export default AppStack

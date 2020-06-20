/**
 * @format
 */

import React from 'react'
import { render } from '@testing-library/react-native'
import { Keyboard } from 'react-native'
import App from '../src/app'

const mockListener = {
  remove: jest.fn()
}
const originalAddListener = Keyboard.addListener
const mockAddListener = jest.fn().mockReturnValue(mockListener)

jest.mock('react-native-gesture-handler', () => {
  const View = require('react-native/Libraries/Components/View/View')
  return {
    Swipeable: View,
    DrawerLayout: View,
    State: {},
    ScrollView: View,
    Slider: View,
    Switch: View,
    TextInput: View,
    ToolbarAndroid: View,
    ViewPagerAndroid: View,
    DrawerLayoutAndroid: View,
    WebView: View,
    NativeViewGestureHandler: View,
    TapGestureHandler: View,
    FlingGestureHandler: View,
    ForceTouchGestureHandler: View,
    LongPressGestureHandler: View,
    PanGestureHandler: View,
    PinchGestureHandler: View,
    RotationGestureHandler: View,
    /* Buttons */
    RawButton: View,
    BaseButton: View,
    RectButton: View,
    BorderlessButton: View,
    /* Other */
    FlatList: View,
    gestureHandlerRootHOC: jest.fn(),
    Direction: {}
  }
})

jest.mock('react-native/Libraries/EventEmitter/NativeEventEmitter.js', () =>
  jest.fn()
)

jest.mock('react-native-reanimated', () => {
  const { View } = require('react-native')

  return {
    Value: jest.fn(),
    event: jest.fn(),
    add: jest.fn(),
    multiply: jest.fn(),
    eq: jest.fn(),
    set: jest.fn(),
    cond: jest.fn(),
    interpolate: jest.fn(),
    View,
    Clock: jest.fn(),
    createAnimatedComponent: (Component: any) => Component,
    Extrapolate: { CLAMP: jest.fn() },
    Transition: {
      Together: 'Together',
      Out: 'Out',
      In: 'In'
    },
    Easing: {
      in: jest.fn(),
      out: jest.fn(),
      inOut: jest.fn()
    }
  }
})

jest.mock('react-native-fs', () => {
  return {
    RNFSFileTypeRegular: {}
  }
})

describe('Component: App', () => {
  beforeAll(() => {
    Keyboard.addListener = mockAddListener
  })
  beforeEach(() => {
    mockAddListener.mockClear()
    mockListener.remove.mockClear()
    jest.useFakeTimers()
  })
  afterAll(() => {
    Keyboard.addListener = originalAddListener
  })
  it('should render a <App />', () => {
    const { baseElement } = render(<App />)
    expect(baseElement).toMatchSnapshot()
  })
})

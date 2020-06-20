import { StyleSheet, ViewStyle, TextStyle } from 'react-native'

interface Styles {
  container: ViewStyle
  content: TextStyle
}

const styles: Styles = StyleSheet.create<Styles>({
  container: {
    flex: 1,
    backgroundColor: '#4d4d4d'
  },
  content: {
    flexGrow: 1,
    color: '#aaa'
  }
})

export default styles

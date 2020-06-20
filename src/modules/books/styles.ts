import { StyleSheet, ViewStyle, TextStyle, ImageStyle } from 'react-native'

interface Styles {
  container: ViewStyle
  cardItemContainer: ViewStyle
  cardContainer: ViewStyle
  cardRightContent: ViewStyle
  cardImageContainer: ViewStyle
  cardImage: ImageStyle
  cardTitle: TextStyle
  cardSubTitle: TextStyle
}

const styles: Styles = StyleSheet.create<Styles>({
  container: {
    flex: 1,
    backgroundColor: '#4d4d4d'
  },

  cardItemContainer: {
    paddingLeft: 16
  },
  cardContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: '#9f9ea1',
    paddingTop: 13,
    paddingBottom: 11
  },
  cardImageContainer: {
    height: 60,
    width: 60
  },
  cardImage: {
    height: 60,
    width: 60,
    borderRadius: 8
  },
  cardRightContent: {
    flexDirection: 'column'
  },
  cardTitle: {
    color: '#ffffff',
    fontSize: 20
  },
  cardSubTitle: {
    color: '#aaa',
    fontSize: 16
  }
})

export default styles

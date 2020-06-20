import React, { memo } from 'react'
import { View, Text, Image } from 'react-native'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler'
import { BookModel } from 'model/BookModel'
import styles from './styles'

type Props = {
  item: BookModel
}

const CardItem = memo((props: Props) => {
  const { item } = props
  const { bookTitle, bookAuthor, bookImage } = item

  return (
    <View style={styles.cardItemContainer}>
      <TouchableWithoutFeedback style={styles.cardContainer} onPress={() => {}}>
        <View style={styles.cardImageContainer}>
          <Image
            style={styles.cardImage}
            source={bookImage}
            resizeMode="contain"
          />
        </View>
        <View style={styles.cardRightContent}>
          <Text style={styles.cardTitle}>{bookTitle}</Text>
          <Text style={styles.cardSubTitle}>{bookAuthor}</Text>
        </View>
      </TouchableWithoutFeedback>
    </View>
  )
})

export default CardItem

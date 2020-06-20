import React from 'react'
import { View, FlatList } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { BookModel } from 'model/BookModel'
import { Screens } from 'enums'
import CardItem from './CardItem'
import styles from './styles'

type Props = {
  books: BookModel[]
}

const keyExtractor = (item: BookModel, index: number) => {
  const extractor = `${item.bookTitle}-${item.id}-${index}`
  return extractor
}

const BooksList = (props: Props) => {
  const { books } = props
  const navigation = useNavigation()

  const onTapPress = (item: BookModel) => {
    navigation.navigate(Screens.BookContent, {
      data: item,
      title: item.bookTitle
    })
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={books}
        renderItem={({ item }) => (
          <CardItem item={item} onTapPress={() => onTapPress(item)} />
        )}
        keyExtractor={keyExtractor}
      />
    </View>
  )
}

export default BooksList

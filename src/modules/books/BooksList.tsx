import React from 'react'
import { View, FlatList } from 'react-native'
import { BookModel } from 'model/BookModel'
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
  return (
    <View style={styles.container}>
      <FlatList
        data={books}
        renderItem={({ item }) => <CardItem item={item} />}
        keyExtractor={keyExtractor}
      />
    </View>
  )
}

export default BooksList

import React from 'react'
import { View, ScrollView, TextInput } from 'react-native'
import styles from './styles'

type Props = {
  content: string
}

const BookContentForm = ({ content }: Props) => (
  <View style={styles.container}>
    <ScrollView>
      <TextInput multiline editable={false} style={styles.content}>
        {content}
      </TextInput>
    </ScrollView>
  </View>
)

export default BookContentForm

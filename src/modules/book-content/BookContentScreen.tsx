import React, { useState, useEffect } from 'react'
import { Alert, Platform } from 'react-native'
import RNFS from 'react-native-fs'
import { useRoute } from '@react-navigation/native'
import { BookModel } from 'model/BookModel'
import BookContentForm from './BookContentForm'

type ParamsType = {
  [key: string]: any
}

const BookContentScreen = () => {
  const [bookContent, setBookContent] = useState('')
  const route = useRoute()

  const readBookContent = async (id: number) => {
    try {
      const bookFileName = `book${id}.txt`
      let contents = ''
      if (Platform.OS === 'android') {
        contents = await RNFS.readFileAssets(bookFileName)
      } else {
        contents = await RNFS.readFile(
          `${RNFS.MainBundlePath}/${bookFileName}`,
          'utf8'
        )
      }

      setBookContent(contents)
    } catch (error) {
      Alert.alert('Error reading book')
    }
  }

  useEffect(() => {
    const params = route.params as ParamsType
    const bookItem = params?.data as BookModel
    const { id: bookId } = bookItem

    readBookContent(bookId)
  }, [route])

  return <BookContentForm content={bookContent} />
}

export default BookContentScreen

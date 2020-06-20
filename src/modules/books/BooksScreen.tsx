import React from 'react'
import { images } from 'constant'
import { BookModel } from '../../model/BookModel'
import BooksList from './BooksList'

const BooksScreen = () => {
  const booksData: BookModel[] = [
    {
      id: 1,
      bookTitle: 'The Beekeepers Promise',
      bookAuthor: 'Fiona Valpy',
      bookImage: images.book1Img
    },
    {
      id: 2,
      bookTitle: 'In an Instant',
      bookAuthor: 'Suzanne Redfearn',
      bookImage: images.book2Img
    }
  ]

  return <BooksList books={booksData} />
}

export default BooksScreen

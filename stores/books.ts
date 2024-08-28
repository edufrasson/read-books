import type { RemovableRef } from '@vueuse/core'
import { useStorage } from '@vueuse/core'
import { defineStore } from 'pinia'
import type { Book } from '~/models/Book'

interface State {
  books: RemovableRef<Array<Book>>
}

const useBooksStore = defineStore('Books', {
  state: (): State => ({
    books: useStorage('books', []),
  }),
  actions: {
    add(book: Book) {
      this.$state.books.push(book)
    },
  },
})

export { useBooksStore }

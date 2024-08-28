<script setup lang="ts">
import { useBooksStore } from '~/stores/books'

const booksStore = useBooksStore()

const books = computed(() => {
  return booksStore.$state.books
})
</script>


<template>
  <div class="flex gap-4 p-8">
    <BookCard 
      v-for="(book, index) in books" 
      :key="index" 
      :book
    />
  </div>
</template>

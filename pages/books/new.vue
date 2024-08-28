<script setup lang="ts">
import { useBooksStore } from '~/stores/books'

const booksStore = useBooksStore()
const books = computed(() => {
  return booksStore.$state.books
})
const title = ref()
const lastId = computed(() => {
  return books.value ? books.value.length + 1 : 1
})

console.log(booksStore)

function handleSubmit() {
  booksStore.add({ id: lastId.value, title: title.value}) 

  title.value = ''
}
</script>


<template>
  <div>
    <div class="max-w-sm mx-auto p-6">
      <div class="mb-4">
        <label 
          for="titulo" 
          class="block mb-2"
        >
          Título
        </label>
        <input 
          v-model="title"
          type="text" 
          id="titulo" 
          name="titulo" 
          placeholder="Digite o título"
          class="w-full px-3 py-2 border bg-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
        >
      </div>
      <button 
        type="submit" 
        class="w-full bg-green-500 text-white font-bold py-2 px-4 rounded-md hover:bg-green-600"
        @click="handleSubmit()"
      >
        Enviar
      </button>
    </div>
  </div>
</template>

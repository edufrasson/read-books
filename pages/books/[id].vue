<script setup lang="ts">
import { useBooksStore } from '~/stores/books'
import { usePointsStore } from '~/stores/points';

const booksStore = useBooksStore()
const pointsStore = usePointsStore()

const route = useRoute()
const summary = ref()

const book = computed(() => {
  return booksStore.books.find(b => b.id === Number(route.params.id)) || null
})

function handleSubmit() {
  if(!summary.value) {
    return
  }

  pointsStore.newRead()

  summary.value = ''
}
</script>

<template>
  <div class="p-8">
    <label 
      for="resumo"
      class="block mb-2"
    >
      Novo resumo
    </label>
    <textarea 
      v-model="summary"
      name="Resumo" 
      id="resumo" 
      rows="4" 
      class="w-full mb-2 p-3 bg-gray-700 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500" placeholder="Digite o resumo aqui..."></textarea>
    <button 
      type="submit" 
      class="w-full bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 mb-4"
      @click="handleSubmit()"
    >
      Adicionar
    </button>
    <div>
      <h2>Meus resumos</h2>
      <hr />
      <div>

      </div>
    </div>
  </div>
</template>
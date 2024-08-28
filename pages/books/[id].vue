<script setup lang="ts">
import { useBooksStore } from '~/stores/books'
import { usePointsStore } from '~/stores/points'
import { useSummaryStore } from '~/stores/summary'

const pointsStore = usePointsStore()
const summaryStore = useSummaryStore()

const route = useRoute()
const summary = ref()
const summaries = computed(() => {
  return summaryStore.summaries.filter(s => s.book_id === Number(route.params.id))
})

const lastId = computed(() => {
  return summaries.value.length ? summaries.value.length + 1 : 1
})

function handleSubmit() {
  if(!summary.value) {
    return
  }

  pointsStore.newRead()
  summaryStore.add({ id: lastId.value, book_id: Number(route.params.id), content: summary.value })

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
      class="w-full mb-2 p-3 bg-gray-700 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600" placeholder="Digite o resumo aqui..."></textarea>
    <button 
      type="submit" 
      class="w-full bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 transition-all mb-4"
      @click="handleSubmit()"
    >
      Adicionar
    </button>
    <div>
      <h2>Meus resumos</h2>
      <hr class="mb-4"/>
      <div class="flex flex-col gap-x-4 gap-y-4">
        <SummaryCard 
          v-for="(summary, index) in summaries" 
          :key="index"
        >
          {{ summary.content }}
        </SummaryCard>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { usePointsStore } from '~/stores/points'

const pointsStore = usePointsStore()

const totalPoints = computed(() => {
  return pointsStore.$state.points
})
</script>

<template>
  <div class="w-full h-16 flex justify-between p-5 border-b border-b-gray-400">
    <div class="flex gap-x-6">
      <NuxtLink to="/">
        Livros
      </NuxtLink>
      <NuxtLink to="/books/new">
        Novo Livro
      </NuxtLink>
    </div>
    <div>
      Seus pontos: {{ totalPoints }}
    </div>
  </div>
</template>

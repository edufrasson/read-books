<script setup lang=ts>
import type { Book } from '~/models/Book'

const router = useRouter()

interface Props{
  book: Book
}

defineProps<Props>()

function handleClick(id: number){
  console.log('caiu')
  router.replace(`/books/${id}`)
}
</script>

<template>
  <div class="w-48 h-16 border rounded-md shadow flex items-center justify-center cursor-pointer truncate" @click="handleClick(book.id)">
    <div class="text-sm font-medium">{{ book.title }}</div>
  </div>
</template>

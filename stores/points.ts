import type { RemovableRef } from '@vueuse/core'
import { useStorage } from '@vueuse/core'
import { defineStore } from 'pinia'

interface State {
  points: RemovableRef<number>
}

const usePointsStore = defineStore('Points', {
  state: (): State => ({
    points: useStorage('points', 0),
  }),
  actions: {
    newRead() {
      this.$state.points += 10
    },
  },
})

export { usePointsStore }

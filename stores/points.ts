import { defineStore } from 'pinia'

interface State {
  points: number
}

const usePointsStore = defineStore('Points', {
  state: (): State => ({
    points: 0,
  }),
  actions: {
    newRead() {
      this.$state.points += 10
    },
  },
})

export { usePointsStore }

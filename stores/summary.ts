import { defineStore } from 'pinia'

interface State {
  summary: number
}

const useSummaryStore = defineStore('Summary', {
  state: (): State => ({
    summary: 0,
  }),
  actions: {
    newRead() {
      this.$state.summary += 10
    },
  },
})

export { useSummaryStore }

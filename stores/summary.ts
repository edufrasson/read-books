import type { RemovableRef } from '@vueuse/core'
import { useStorage } from '@vueuse/core'
import { defineStore } from 'pinia'
import type { Summary } from '~/models/Summary'

interface State {
  summaries: RemovableRef<Array<Summary>>
}

const useSummaryStore = defineStore('Summary', {
  state: (): State => ({
    summaries: useStorage('summary', []),
  }),
  actions: {
    add(summary: Summary) {
      this.$state.summaries.push(summary)
    },
  },
})

export { useSummaryStore }

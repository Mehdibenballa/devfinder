import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', {
  state: () => ({
     page : null
  }),

  actions: {
   pageUpdate (event) {
    this.page = event
   }
  },
})

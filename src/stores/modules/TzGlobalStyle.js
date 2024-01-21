import { defineStore } from 'pinia'

export const useTzLayout = defineStore('tzLayout', {
    state: () => ({ headerHeight: 60 }),
    getters: {
        getCount:(state)=>state
    },
    actions: {
        increment() {
            this.count++
        },
    },
})

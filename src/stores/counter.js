import { defineStore } from 'pinia'

export const use = defineStore('counter', {
    state: () => ({ count: 0 }),
    getters: {
        doubleCount:(state) =>{
            return state.count * 2
        },
        getCount:(state)=>state.count
    },
    actions: {
        increment() {
            this.count++
        },
    },
})

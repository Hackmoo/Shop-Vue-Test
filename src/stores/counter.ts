import { ref } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'
import goods from '@/api/goods'

export const useFavoritesStore = defineStore('favorite',{
  state: () => ({
    count: 0,
    data: [],
    openedElement: undefined
  }),
  actions: {
    increment() {
      this.count++
    },
    decrease() {
      this.count--
    },
   async getElement(id){
      if(this.data.length === 0){
      await this.getData()
      }
      this.openedElement = this.data.find(el => el.id === id)
      return this.openedElement
    },
    async getData(){
      const res = await goods.get()
      this.data = res.data.map(el => Object.assign(el,{isFavorite: false}))
    },
    addFavorite() {
      
    }
  },
})

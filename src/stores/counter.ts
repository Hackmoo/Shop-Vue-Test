import { ref } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'
import goods from '@/api/goods'

export const useFavoritesStore = defineStore('favorite', {
  state: () => ({
    count: 0,
    data: [],
    favorites: []
  }),
  actions: {
    increment() {
      this.count++
    },
    decrease() {
      this.count--
    },
    async getElement() {
      if (this.data.length === 0) {
        await this.getData()
      }
    },
    async getData() {
      const res = await goods.get()
      this.data = res.data.map((el) => Object.assign(el, { isFavorite: false }))
    },
    addFavorite(id: Number) {
      this.favorites = [...this.favorites, { id: id }]
    },
    delFavorite(id: Number) {
      this.favorites = this.favorites.filter((el) => el.id !== id)
    }
  }
})

import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'

export const useDataStore = defineStore('data', () => {
  const dataBase = ref(axios.get('https://fakestoreapi.com/products'))

  return {dataBase}
})

export const useFavoritesStore = defineStore('favorite', () => {
  
  const amount = ref(0)
  
  function increaseAmount(){
    amount.value += 1
  }

  function decreaseAmount(){
    amount.value -= 1
  }
  

  return({amount, increaseAmount, decreaseAmount})
})
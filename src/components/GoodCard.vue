<template>
  <div class="card">
    <HeartCardVue class="card__heart" @click="setFavorite()" :style="isFavorite && 'fill: red'"/>
    <router-link to="/info">
    <img :src="image" alt="image" class="card__image">
    <div class="card__title">{{ title }}</div>
    <div class="card__price">{{ price }} руб.</div>
  </router-link>
  </div>
</template>

<script setup lang="ts">
import HeartCardVue from "./icons/HeartCard.vue"
import { useFavoritesStore } from "@/stores/counter";
import { ref } from "vue";

const store = useFavoritesStore()

  defineProps({
    title: String,
    price: Number,
    image: String
  })

  let isFavorite = ref(false)

  function setFavorite(){
    if(!isFavorite.value){
      store.increaseAmount()
      isFavorite.value = !isFavorite.value
      return;
    }
    if(isFavorite.value){
       store.decreaseAmount()
       isFavorite.value = !isFavorite.value
       return;
    }
  }
</script>

<style scoped>
 .card{
  padding: 20px;
  width: 315px;
  height: 418px;
  text-align: center;
  transition: all 0.1s ease-in-out;
  cursor: pointer;
  position: relative;
 }
 .card__image{
    width: 100%;
    height: 336px;
 }
 .card__title{
   overflow: hidden;
   white-space: nowrap;
   text-overflow: ellipsis;
   text-align: center;
font-size: 12px;
font-style: normal;
font-weight: 400;
line-height: 18px; 
color: #464C58;
 }
 .card__price{
    color: var(--unnamed, #464C58);
text-align: center;
font-size: 16px;
font-style: normal;
font-weight: 700;
line-height: 24px; /* 150% */ 
 }

 .card__heart{
    position: absolute;
    right: 10px;
    top: 10px;
    cursor: pointer;
 }

.card__heart:hover{
  fill: rgb(247, 101, 101)
}
 .card:hover{
    box-shadow: 0 5px 10px rgba(0,0,0,0.2);
 }
 
</style>
<template>
  <div>
    <div class="cards" v-if="array.length > 0 ">
      <GoodCardVue
        :image="'test.png'"
        :price="2300"
        :title="'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops'"
        v-for="(el, i) in array"
        :key="i"
      />
    </div>
    <div v-else>
      <h1 class="cards__emptyList">Список избранного пуст</h1>
    </div>
  </div>
</template>

<script setup lang="ts">
import GoodCardVue from '../components/GoodCard.vue'

defineProps({
  array: Array
})
</script>

<style scoped>
.cards {
  margin-top: 112px;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 40px;
  margin-bottom: 110px;
}
.cards__emptyList{
  text-align: center;
  margin-top: 123px;
}
</style>

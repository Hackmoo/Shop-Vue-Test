<template>
  <div>
    <div class="cards" v-if="array.length > 0">
      <GoodCardVue v-for="el in array" :key="el.id" :id="el.id" />
    </div>
    <div v-else>
      <h1 class="cards__emptyList">Список избранного пуст</h1>
    </div>
  </div>
</template>

<script setup lang="ts">
import GoodCardVue from '@/components/GoodCard.vue'

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
.cards__emptyList {
  text-align: center;
  margin-top: 123px;
}
</style>

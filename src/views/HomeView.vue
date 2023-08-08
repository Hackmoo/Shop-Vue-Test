<template>
  <div class="Home">
    <img src="test.png" alt="" class="Home__image" />
    <div class="container">
      <GoodCardList :array="store.$state.data" />
    </div>
    <FooterComponentVue />
  </div>
</template>

<script setup lang="ts">
import FooterComponentVue from '@/components/FooterComponent.vue'
import GoodCardList from '@/components/GoodCardList.vue'
import { useFavoritesStore } from '@/stores/counter'

const store = useFavoritesStore()
</script>

<style>
.Home {
  position: absolute;
  top: 80px;
  left: 0;
  width: 100%;
  overflow: hidden;
}
.Home__image {
  width: 100vw;
  overflow: hidden;
}
</style>

<template>
  <div class="favorites">
    <div class="container">
      <div>
        <div class="favorites__links">
          <router-link to="/" class="link">Главная</router-link><span>›</span
          ><span> Избранное </span>
        </div>
      </div>
      <h1 class="favorites__label">Избранное</h1>
      <GoodCardList  :array="test"/>
    </div>
    <FooterComponentVue :style="test.length > 4 ? '' : 'position: fixed; bottom: 0' "/>
  </div>
</template>

<script setup lang="ts">
import GoodCardList from '@/components/GoodCardList.vue'
import FooterComponentVue from '@/components/FooterComponent.vue'

const test = [1]
</script>

<style scoped>
.favorites {
  position: absolute;
  top: 80px;
  left: 0;
  bottom: 0;
  width: 100%;
}
.favorites__links {
  margin-top: 32px;
  display: flex;
  align-items: center;
  gap: 10px;
  color: #464c58;
  font-family: Ubuntu;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
}
.favorites__label {
  margin-top: 16px;
  margin-bottom: 32px;
}
</style>

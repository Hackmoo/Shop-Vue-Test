<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HeaderComponentVue from './components/HeaderComponent.vue'
import { useFavoritesStore } from '@/stores/counter'

const store = useFavoritesStore()

store.getData()
</script>

<template>
  <div class="test">
    <HeaderComponentVue />
    <RouterView />
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;400;500;700&display=swap');
body {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: 'Ubuntu';
}
.container {
  padding-left: 260px;
  padding-right: 260px;
}
.test {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
h1 {
  font-size: 40px;
}
h2 {
  font-size: 24px;
}
h3 {
  font-size: 16px;
}
.link {
  font-size: 16px;
  color: #464c58;
  font-style: normal;
  font-weight: 400;
  line-height: 24px; /* 150% */
  text-decoration-line: underline;
  transition: all 0.3s ease-in-out;
}
.link:hover {
  text-decoration-line: none;
  background: none;
}
p {
  color: #0a1e32;
  font-family: Ubuntu;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
}
</style>

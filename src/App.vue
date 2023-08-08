<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HeaderComponentVue from '@/components/HeaderComponent.vue'
import { useFavoritesStore } from '@/stores/counter'
import PreloaderVue from '@/components/Preloader.vue'
import { ref } from 'vue'

const store = useFavoritesStore()

store.getData()

let preloar = ref(true)

document.body.classList.add('scrollLock')

setTimeout(() => {
  preloar.value = false
  document.body.classList.remove('scrollLock')
}, 1000)
</script>

<template>
  <div class="test">
    <HeaderComponentVue />
    <RouterView />
    <PreloaderVue v-if="preloar" />
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
.scrollLock {
  overflow: hidden;
}
html {
  overflow-y: scroll;
}
</style>

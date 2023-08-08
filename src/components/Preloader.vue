<template>
  <div class="preloader">
    <LogoCompanyVue />
    <div class="preloader__loading">
      <span></span>
    </div>
  </div>
</template>

<script setup lang="ts">
import LogoCompanyVue from './icons/LogoCompany.vue'
</script>

<style scoped>
.preloader {
  position: fixed;
  inset: 0;
  z-index: 1000;
  width: 100%;
  height: 100%;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.preloader__loading {
  display: block;
  width: 70px;
  height: 70px;
  border: 3px solid;
  border-radius: 50%;
  border-color: transparent #000 #000;
  animation: loading 690ms infinite linear;
  margin-top: 32px;
}

@keyframes loading {
  100% {
    transform: rotate(360deg);
  }
}
</style>

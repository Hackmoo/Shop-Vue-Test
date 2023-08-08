<template>
  <div class="header container">
    <div class="header__content">
      <LogoCompanyVue />
      <div class="favorites">
        <router-link to="/favorites">
          <HeartIconVue class="heartIcon" />
          <div class="favoritesAmount">
            <span class="favoritesAmount__number">{{ store.$state.count }}</span>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useFavoritesStore } from '@/stores/counter'
import HeartIconVue from './icons/HeartIcon.vue'
import LogoCompanyVue from './icons/LogoCompany.vue'

const store = useFavoritesStore()
</script>

<style scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background: #fff;
  z-index: 999;
  border-bottom: 1px solid #0a1e32;
}
.favorites {
  cursor: pointer;
}
.favoritesAmount {
  position: relative;
  left: 12px;
  top: -1px;
  background: #eb4c47;
  color: #fff;
  text-align: center;
  font-size: 8px;
  font-style: normal;
  font-weight: 700;
  line-height: 12px;
  border-radius: 50%;
  height: 16px;
  width: 16px;
}
.favoritesAmount__number {
  position: relative;
  top: 2px;
}
.heartIcon {
  position: absolute;
}

.header__content {
  padding: 20px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  width: 100%;
}
</style>

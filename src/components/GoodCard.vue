<template>
  <div class="card">
    <HeartCardVue
      class="card__heart"
      @click="setFavorite()"
      :style="element.isFavorite && 'fill: red'"
      v-if="route.path !== '/favorites'"
    />
    <CrossIconVue v-if="route.path === '/favorites'" class="card__heart" @click="setFavorite()" />
    <router-link :to="`/info/${element.id}`">
      <img :src="element.image" alt="image" class="card__image" />
      <div class="card__title">{{ element.title }}</div>
      <div class="card__price">{{ element.price }} руб.</div>
    </router-link>
  </div>
</template>

<script setup lang="ts">
import HeartCardVue from './icons/HeartCard.vue'
import CrossIconVue from './icons/CrossIcon.vue'
import { useFavoritesStore } from '@/stores/counter'
import { computed, ref } from 'vue'
import { useRoute } from 'vue-router'


const route = useRoute()

const store = useFavoritesStore()

const props = defineProps({
  id: Number
})

const element = computed(() => {
  return store.$state.data.find((el) => el.id === props.id)
})

async function setFavorite() {
  if (!element.value.isFavorite) {
    await store.increment()
    element.value.isFavorite = !element.value.isFavorite
    store.addFavorite(props.id)
    return
  }
  if (element.value.isFavorite) {
    await store.decrease()
    element.value.isFavorite = !element.value.isFavorite
    store.delFavorite(props.id)
    return
  }
}
</script>

<style scoped>
.card {
  padding: 20px;
  width: 315px;
  height: 418px;
  text-align: center;
  transition: all 0.1s ease-in-out;
  cursor: pointer;
  position: relative;
}
.card__image {
  width: 100%;
  height: 336px;
}
.card__title {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  text-align: center;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
  color: #464c58;
}
.card__price {
  color: var(--unnamed, #464c58);
  text-align: center;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 24px; /* 150% */
}

.card__heart {
  position: absolute;
  right: 10px;
  top: 10px;
  cursor: pointer;
}

.card__heart:hover {
  fill: rgb(247, 101, 101);
}

.card:hover {
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
}
</style>

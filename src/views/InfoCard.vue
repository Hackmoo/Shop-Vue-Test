<template>
  <div class="info" >
    <div class="info__content container" v-if="element !== undefined">
      <div class="info__content__links" >
        <router-link to="/" class="link">Главная</router-link><span>›</span
        ><span>{{ element.title }} </span>
      </div>
      <div class="info__card">
        <div><img :src="element.image" alt="" class="info__card__image" /></div>
        <div class="info__card__leftSide">
          <h1>{{ element.title }}</h1>
          <p>{{ element.description }}</p>
          <div class="info__card__price">{{ element.price }} руб.</div>
          <MyButtonVue @click="setFavorite()" :element="element.isFavorite"/>
        </div>
      </div>
    </div>
    <div class="info__error" v-if="element === undefined">
      <div class="container" style="margin-top: 32px; z-index: 999; position: relative;">
        <router-link to="/" class="link">Главная</router-link>
      </div>
      <h1 class="info__error__text">Товар не найден</h1>
    </div>
    <FooterComponentVue style="position: fixed; bottom: 0" />
  </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
import FooterComponentVue from '../components/FooterComponent.vue'
import MyButtonVue from '../components/ui/MyButton.vue'
import { useFavoritesStore } from '@/stores/counter'
import { computed } from 'vue'

const route = useRoute()
const store = useFavoritesStore()

store.getElement(route.params.id)

const element = computed(() => {
  return store.$state.data[route.params.id - 1]
})

async function setFavorite() {
  if (!element.value.isFavorite) {
    await store.increment()
    element.value.isFavorite = !element.value.isFavorite
    store.addFavorite(element.value.id)
    return
  }
  if (element.value.isFavorite) {
    await store.decrease()
    element.value.isFavorite = !element.value.isFavorite
    store.delFavorite(element.value.id)
    return
  }
}

</script>

<style scoped>
.info {
  position: absolute;
  top: 80px;
  left: 0;
  bottom: 0;
  width: 100%;
}
.info__content {
  margin-bottom: 112px;
}
.info__content__links {
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
.info__card {
  display: flex;
  margin-top: 32px;
  gap: 40px;
  align-items: start;
}
.info__card__image {
  width: 680px;
  height: 580px;
  border: 1px solid #e5e5e5;
  background:
    url(<path-to-image>),
    lightgray 50% / cover no-repeat;
}
.info__card__price {
  color: var(--0-a-1-e-32, #0a1e32);
  font-family: Ubuntu;
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: 40px; /* 125% */
}
.info__card__leftSide {
  display: flex;
  flex-direction: column;
  gap: 24px;
}
.info__error__text{
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  height: 75%;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
}
</style>

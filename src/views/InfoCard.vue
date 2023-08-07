<template>
  <div class="info">
    <div class="info__content container">
      <div class="info__content__links">
        <router-link to="/" class="link">Главная</router-link><span>›</span><span>{{ name }} </span>
      </div>
      <div class="info__card">
        <div><img src="test.png" alt="" class="info__card__image" /></div>
        <div class="info__card__leftSide">
          <h1>{{ name }} </h1>
          <p>{{ description }}</p>
          <div class="info__card__price">{{ price }} руб.</div>
          <MyButtonVue />
        </div>
      </div>
    </div>
    <FooterComponentVue style="position: absolute; bottom: 0;"/>
  </div>
</template>

<script setup lang="ts">
import FooterComponentVue from "../components/FooterComponent.vue"
import MyButtonVue from "../components/ui/MyButton.vue"


const name = 'Название'
const image = 'test.png'
const description =
  'Сумочка-тоут среднего размера идеально держит форму, выполнена из экокожи черного цвета и черного меха. Имеет одно просторное отделение с карманом перегородкой и внутренним карманом на молнии. '
const price = 2300
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
  border: 1px solid #E5E5E5;
background: url(<path-to-image>), lightgray 50% / cover no-repeat; 
}
.info__card__price {
  color: var(--0-a-1-e-32, #0a1e32);
  font-family: Ubuntu;
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: 40px; /* 125% */
}
.info__card__leftSide{
    display: flex;
    flex-direction: column;
    gap: 24px;
}
</style>

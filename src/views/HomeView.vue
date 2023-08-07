<template>
  <div class="Home">
    <img src="test.png" alt="" class="Home__image" />
    <div class="container">
     <GoodCardList :array="test"/>
    </div>
    <FooterComponentVue/>
  </div>
</template>

<script setup lang="ts">
import {useDataStore} from '@/stores/counter'
import FooterComponentVue from '@/components/FooterComponent.vue'
import GoodCardList from '@/components/GoodCardList.vue';

let data = useDataStore()


const test = [1,2,3,4,5,6,7,78,8,8,1,2]


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

<template>
  <button class="button">
    <HeartCardVue class="button__heart" :style="element && 'fill: #0A1E32'" />
    Избранное
  </button>
</template>

<script setup lang="ts">
import HeartCardVue from '../icons/HeartCard.vue'
const props = defineProps({
  element: Boolean
})
</script>

<style scoped lang="scss">
.button {
  color: var(--0-a-1-e-32, #0a1e32);
  font-family: 'Ubuntu';
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 32px; /* 200% */
  text-transform: uppercase;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 220px;
  gap: 8px;
  background: none;
  border: 1px solid #0a1e32;
  border-radius: 5px;
  padding: 7px 0;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
}
.button:hover {
  .button__heart {
    fill: #0a1e32;
    opacity: 0.5;
  }
}

.button:active {
  .button__heart {
    fill: #0a1e32;
    opacity: 1;
  }
}
</style>

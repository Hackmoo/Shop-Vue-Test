<template>
  <div class="footer container">
    <div class="footer__content">
      <router-link to="/favorites" class="footer__button">
        <div class="footer__button">Избранное</div>
      </router-link>
    <div>8 800 888 00 88</div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
 .footer{
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    background: #0A1E32; 
 }
 .footer__content{
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 32px 0;
    color: #FFF;
font-family: Ubuntu;
font-size: 18px;
font-style: normal;
font-weight: 500;
line-height: 24px; /* 133.333% */ 
 }
 .footer__button{
  color: #FFF;
 }
 .footer__button:hover{
  background: none;
  filter: brightness(80);
 }
</style>
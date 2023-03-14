<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <div class="random_container">
    <div class="img_wrapper"><img src="https://images2.alphacoders.com/870/870886.jpg" /></div>
    <div class="film_buttons">
      <button class="watch_button"><RouterLink to="film/1">watch</RouterLink></button>
      <button class="add_button">+</button>
    </div>
  </div>
</template>

<style scoped lang="scss">
.img_wrapper {
  margin: 0 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 950px;
  height: 200px;
  overflow: hidden;
  border-radius: 25px;
}
.film_buttons {
  margin-top: -50px;
  margin-left: 55px;
  max-width: 130px;
  display: flex;
  justify-content: space-around;

  .watch_button {
    width: 70px;
    height: 35px;
    border-radius: 15px;
    background-color: #d92026;
    color: rgb(226, 226, 226);
  }

  .add_button {
    width: 40px;
    height: 35px;
    border-radius: 15px;
    background-color: rgb(226, 226, 226, 0.4);
    color: rgb(226, 226, 226);
    font-weight: bold;
  }
}
</style>

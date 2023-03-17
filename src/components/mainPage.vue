<script setup lang="ts">
import { RouterView } from 'vue-router'
import sideMenu from './sideMenu.vue'
import findInput from './findInput.vue'
</script>

<template>
  <div class="main_container">
    <div class="content_container">
      <div class="header_container">
        <div class="main_title">
          <p class="color_text">the</p>
          Filmest
        </div>
        <findInput />
      </div>
      <div class="body_container">
        <div class="side_container">
          <sideMenu />
        </div>
        <RouterView />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import '../utilities/common.scss';
.main_container {
  display: flex;
  justify-content: center;
  .content_container {
    margin: 50px;
    padding-top: 30px;
    width: 1200px;
    height: fit-content;
    background-color: $general-background_color;
    border-radius: 25px;
    box-shadow: 10px 10px 25px $box-shadow_color;
  }
  .header_container {
    display: flex;
    flex-direction: row;
    align-items: center;
    .main_title {
      font-size: 36px;
      padding: 16px;
      margin-right: 64px;
      display: flex;
      flex-direction: row;
      gap: 4px;
      color: $general-text_color;

      .color_text {
        color: orangered;
      }
    }
  }

  .body_container {
    display: flex;
    flex-direction: row;
  }
}
</style>

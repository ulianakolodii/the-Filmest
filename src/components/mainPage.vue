<script setup lang="ts">
import { RouterView } from 'vue-router'
import sideMenu from './sideMenu.vue'
import findInput from './findInput.vue'
</script>

<template>
  <main>
    <div class="wrapper">
      <div class="header">
        <RouterLink to="/" class="main-title"
          ><p class="color-text">the</p>
          Filmest</RouterLink
        >
        <findInput />
      </div>
      <div class="body">
        <sideMenu />
        <div class="content">
          <RouterView />
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped lang="scss">
@import '../utilities/common.scss';
main {
  width: 100vw;
  min-height: 100vh;
  background-color: #3b4248;
  display: flex;
  justify-content: center;
  align-items: center;

  .wrapper {
    margin: 40px;
    width: 1200px;
    background: #202328;
    display: flex;
    flex-direction: column;
    border-radius: 24px;
    padding: 30px;
    @media (max-width: 560px) {
      width: 100vw;
    }

    .header {
      display: flex;
      flex-direction: row;
      align-items: center;
      @media (max-width: 560px) {
        flex-direction: column;
        align-items: center;
      }
      .main-title {
        font-size: 36px;
        padding: 16px;
        margin-right: 64px;
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 4px;
        color: $general-text_color;
        text-decoration: none;
        @media (max-width: 560px) {
          margin-right: 0px;
        }

        .color-text {
          color: $emphasis-color;
        }
      }
    }

    .body {
      display: flex;
      flex-direction: row;
      @media (max-width: 560px) {
        flex-direction: column-reverse;
      }
    }

    .content {
      flex: 1;
      display: flex;
    }
  }
}
</style>

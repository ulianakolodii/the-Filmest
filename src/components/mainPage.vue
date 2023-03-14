<script setup lang="ts">
import sideMenu from './sideMenu.vue'
import findInput from './findInput.vue'
import filmMenu from './filmMenu.vue';

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
        <filmMenu />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.main_container {
  display: flex;
  .content_container {
    margin: auto;
    padding-top: 30px;
    width: 1200px;
    height: 800px;
    background-color: #202328;
    border-radius: 25px;
    box-shadow: 10px 10px 25px #1b1b1c;
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
      color: rgb(226, 226, 226);

      .color_text {
        color: orangered;
      }
    }
  }

  .body_container{
    display: flex;
    flex-direction: row;
  }
}
</style>

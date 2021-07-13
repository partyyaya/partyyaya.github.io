<template>
  <div
  :class="{
    'content': true,
    'content--toRight': !isSidebarHidden
    }">
    <div class="content__title">
      <button
      :class="{
        'content__title__button': true,
        'content__title__button--active': !isSidebarHidden,
        'content__title__button--noActive': isSidebarHidden
        }"
      @click="hideSidebar"
      >≡</button>
      <span class="content__title__bold">Ming's Storage</span>
      <span class="content__title__thin">&nbsp;&nbsp;程序記憶</span>
    </div>
    <div class="content__divider"></div>
    <div class="content__body">
      <router-view />
    </div>
  </div>
</template>
<script>
import { ref } from 'vue'
export default {
  name: 'Content',
  setup (props, context) {
    const isSidebarHidden = ref(true)
    function hideSidebar () {
      // 請求父組件隱藏側邊攔
      isSidebarHidden.value = !isSidebarHidden.value
      context.emit('hideSidebar', isSidebarHidden.value)
    }
    return { hideSidebar, isSidebarHidden }
  }
}
</script>
<style lang="scss" scoped>
@import "../style/variables.scss";
.content {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  background-color: $App_content_bgColor;
  width: 100vw;
  transition: left 0.4s linear 0s;
  &--toRight {
    left: 15vw;
  }
  &__title {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3.5vw;
    &__button {
      display: flex;
      justify-content: center;
      align-items: center;
      position: absolute;
      left: 2vw;
      width: 2.5vw;
      height: 2vw;
      border: 0;
      border-radius: 20%;
      font-size: 2vw;
      font-weight: bold;
      cursor: pointer;
      transition: background-color 0.4s linear 0s;
      &--active {
        background-color: $App_content_button_active_bgColor;
        color: $App_content_button_active_fontColor;
      }
      &--noActive {
        background-color: $App_content_button_noActive_bgColor;
        color: $App_content_button_noActive_fontColor;
      }
    }
    &__bold {
      font-size: 1.2vw;
      color: $App_content_fontColor;
      font-weight: bold;
    }
    &__thin {
      display: flex;
      padding-top: 0.3vw;
      font-size: 0.8vw;
      color: $App_content_fontColor_thin;
    }
  }
  &__divider {
    display: flex;
    position: absolute;
    top: 3.5vw;
    left: 0;
    right: 0;
    height: 0.1vw;
    background-color: $App_content_dividerColor;
  }
  &__body {
    position: absolute;
    top: 3.6vw;
    left: 0;
    right: 0;
    bottom: 0;
    font-size: 20px;
  }
}

@media (max-width: 414px) {
  .content {
    &--toRight {
      left: 75vw;
    }
    &__title {
      height: 10vw;
    }
    &__divider {
      top: 10vw;
    }
    &__body {
      top: 10.1vw;
    }
  }
}
</style>

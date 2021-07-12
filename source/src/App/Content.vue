<template>
  <div class="content">
    <div class="content__title">
      <button class="content__title__button" @click="hideSidebar">≡</button>
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
export default {
  name: 'Content',
  setup (props, context) {
    function hideSidebar () {
      // 請求父組件隱藏側邊攔
      context.emit('hideSidebar')
    }
    return { hideSidebar }
  }
}
</script>
<style lang="scss" scoped>
@import "../style/variables.scss";
.content {
  position: absolute;
  top: 0;
  left: 15vw;
  bottom: 0;
  display: flex;
  flex-direction: column;
  background-color: $App_content_bgColor;
  width: 85vw;
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
      background-color: $App_sidebarBgColor;
      height: 2vw;
      width: 2.5vw;
      border: 0;
      border-radius: 20%;
      font-size: 2vw;
      font-weight: bold;
      color: $App_content_bgColor;
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

@media (max-width: 375px) {
  .content {
    z-index: 9;
    width: 100vw;
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

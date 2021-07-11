<template>
  <div class="home row">
      <div class="slideBar">
        <div class="slideBar__title">
          <span class="slideBar__title__bold">Ming's Storage</span><br>
          <span class="slideBar__title__thin">程序記憶</span>
        </div>
        <div class="slideBar__divider"></div>
      </div>
      <div class="content">
        <div class="content__title">
          <span class="content__title__bold">Ming's Storage</span>
          <span class="content__title__thin">&nbsp;&nbsp;程序記憶</span>
        </div>
        <div class="content__divider"></div>
        <div class="content__body">
          <router-view/>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>
<style lang="scss" scoped>
@import "./style/variables.scss";
.home {
  display: flex;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}
.slideBar {
  display: flex;
  position: relative;
  flex-direction: column;
  background-color: $App_slideBarBgColor;
  width: 15vw;
  &__title {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 6vw;
    &__bold {
      font-size: 1.5vw;
      color: $App_slideBar_titleColor;
    }
    &__thin {
      font-size: 1vw;
      color: $App_slideBar_titleColor;
    }
  }
  &__divider {
    display: flex;
    position: absolute;
    top: 6vw;
    left: 0;
    right: 0;
    height: 0.1vw;
    background-color: $App_slideBar_dividerColor;
  }
}
.content {
  display: flex;
  position: relative;
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
    &__bold {
      font-size: 1.2vw;
      color: $App_content_fontColor;
      font-weight: bold;
    }
    &__thin {
      display:flex;
      padding-top: 0.3vw;
      font-size: .8vw;
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
</style>

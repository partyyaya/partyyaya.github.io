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
      >&#8801;</button>
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
    const hideSidebar = () => {
      // 請求父組件隱藏側邊攔
      isSidebarHidden.value = !isSidebarHidden.value
      context.emit('hideSidebar', isSidebarHidden.value)
    }
    const displayTabContent = (toDisplay) => {
      // 呼叫側邊欄隱藏自己
      isSidebarHidden.value = toDisplay
    }
    return { isSidebarHidden, hideSidebar, displayTabContent }
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
  transition: left $App_frame_transition_time linear $App_frame_transition_delay_time;
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
      font-size: 2vw;
      border-radius: 15%;
      color: $App_content_button_fontColor;
      cursor: pointer;
      transition: background-color $App_frame_transition_time linear $App_frame_transition_delay_time;
      &--active {
        background-color: $App_content_button_active_bgColor;
      }
      &--noActive {
        background-color: $App_content_button_noActive_bgColor;
      }
    }
    &__bold {
      position: relative;
      left: -15vw;
      color: $App_content_fontColor;
      font-size: 1.3vw;
      font-weight: bold;
    }
    &__thin {
      position: relative;
      left: -15vw;
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

@media (max-width: 1200px) {
  .content {
    &--toRight {
      left: 30vw;
    }
    &__title {
      height: 5.3vw;
      &__button {
        left: 3vw;
        width: 3.8vw;
        height: 3vw;
        font-size: 3.5vw;
      }
      &__bold {
        left: -7.5vw;
        font-size: 2.3vw;
      }
      &__thin {
        display: none;
      }
    }
    &__divider {
      top: 5.3vw;
      height: 0.3vw;
    }
    &__body {
      top: 5.6vw;
    }
  }
}

@media (max-width: 768px) {
  .content {
    &--toRight {
      left: 30vw;
    }
    &__title {
      height: 7vw;
      &__button {
        left: 4vw;
        width: 5vw;
        height: 4vw;
        font-size: 5vw;
      }
      &__bold {
        left: -6vw;
        font-size: 3vw;
      }
      &__thin {
        display: none;
      }
    }
    &__divider {
      top: 7vw;
      height: 0.4vw;
    }
    &__body {
      top: 7.4vw;
    }
  }
}

@media (max-width: 576px) {
  .content {
    &--toRight {
      left: 50vw;
    }
    &__title {
      height: 10.5vw;
      &__button {
        left: 6vw;
        width: 7.5vw;
        height: 6vw;
        font-size: 6vw;
      }
      &__bold {
        left: -4vw;
        font-size: 4.5vw;
      }
      &__thin {
        display: none;
      }
    }
    &__divider {
      top: 10.5vw;
      height: 0.3vw;
    }
    &__body {
      top: 10.8vw;
    }
  }
}
</style>

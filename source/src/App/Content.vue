<template>
  <div
  :class="{
    'content': true,
    'content--toRight': !isSidebarHidden
    }"
    @click="hideSidebar">
    <div class="content__title">
      <button
      :class="{
        'content__title__button': true,
        'content__title__button--active': !isSidebarHidden,
        'content__title__button--noActive': isSidebarHidden
        }"
      @click.stop="switchSidebar"
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
    const switchSidebar = () => {
      isSidebarHidden.value = !isSidebarHidden.value
      context.emit('switchSidebar', isSidebarHidden.value)
    }
    const hideSidebar = () => {
      isSidebarHidden.value = true
      context.emit('switchSidebar', isSidebarHidden.value)
    }
    const displayTabContent = (toDisplay) => {
      isSidebarHidden.value = toDisplay
    }
    return { isSidebarHidden, switchSidebar, hideSidebar, displayTabContent }
  }
}
</script>
<style lang="scss" scoped>
@import "../style/variables.scss";
$content_title_height: 3.5vw;
$content_title_button_width: 2.5vw;
$content_title_button_height: 2vw;
$content_title_button_fontSize: 2vw;
$content_title_bold_fontSize: 1.3vw;
$content_bgColor: #F0F0F0;
$content_fontColor: #757575;
$content_fontColor_thin: #969696;
$content_dividerColor: #E4E4E4;
$content_button_active_bgColor: #707070;
$content_button_noActive_bgColor: #BDBDBD;
$content_button_fontColor: #F0F0F0;

.content {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  background-color: $content_bgColor;
  width: 100vw;
  transition: left $App_frame_transition_time linear $App_frame_transition_delay_time;
  &--toRight {
    left: $App_sidebar_width;
  }
  &__title {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: $content_title_height;
    &__button {
      display: flex;
      justify-content: center;
      align-items: center;
      position: absolute;
      left: 3vw;
      width: $content_title_button_width;
      height: $content_title_button_height;
      font-size: $content_title_button_fontSize;
      font-weight: bold;
      border-radius: 15%;
      color: $content_button_fontColor;
      cursor: pointer;
      transition: background-color $App_frame_transition_time linear $App_frame_transition_delay_time;
      &--active {
        background-color: $content_button_active_bgColor;
      }
      &--noActive {
        background-color: $content_button_noActive_bgColor;
      }
    }
    &__bold {
      color: $content_fontColor;
      font-size: $content_title_bold_fontSize;
      font-weight: bold;
    }
    &__thin {
      display: flex;
      padding-top: 0.2vw;
      font-size: 0.8vw;
      color: $content_fontColor_thin;
    }
  }
  &__divider {
    display: flex;
    position: absolute;
    top: $content_title_height;
    left: 0;
    right: 0;
    height: 0.1vw;
    background-color: $content_dividerColor;
  }
  &__body {
    position: absolute;
    top: $content_title_height + 0.1;
    left: 0;
    right: 0;
    bottom: 0;
    font-size: 20px;
  }
}

@media (max-width: 1200px) {
  .content {
    &--toRight {
      left: $App_mobile_sidebar_width;
    }
    &__title {
      height: $content_title_height * $xl_lg;
      &__button {
        width: $content_title_button_width * $xl_lg;
        height: $content_title_button_height * $xl_lg;
        font-size: $content_title_button_fontSize * $xl_lg;
      }
      &__bold {
        font-size: $content_title_bold_fontSize * $xl_lg;
      }
      &__thin {
        display: none;
      }
    }
    &__divider {
      top: $content_title_height * $xl_lg;
    }
    &__body {
      top: $content_title_height * $xl_lg + 0.1;
    }
  }
}

@media (max-width: 768px) {
  .content {
    &--toRight {
      left: $App_mobile_sidebar_width;
    }
    &__title {
      height: $content_title_height * $xl_md;
      &__button {
        width: $content_title_button_width * $xl_md;
        height: $content_title_button_height * $xl_md;
        font-size: $content_title_button_fontSize * $xl_md;
      }
      &__bold {
        font-size: $content_title_bold_fontSize * $xl_md;
      }
      &__thin {
        display: none;
      }
    }
    &__divider {
      top: $content_title_height * $xl_md;
    }
    &__body {
      top: $content_title_height * $xl_md + 0.1;
    }
  }
}

@media (max-width: 576px) {
  .content {
    &--toRight {
      left: $App_mobile_xs_sidebar_width;
    }
    &__title {
      height: $content_title_height * $xl_xs;
      &__button {
        width: $content_title_button_width * $xl_xs;
        height: $content_title_button_height * $xl_xs;
        font-size: $content_title_button_fontSize * $xl_xs;
      }
      &__bold {
        font-size: $content_title_bold_fontSize * $xl_xs;
      }
      &__thin {
        display: none;
      }
    }
    &__divider {
      top: $content_title_height * $xl_xs;
    }
    &__body {
      top: $content_title_height * $xl_xs + 0.1;
    }
  }
}
</style>

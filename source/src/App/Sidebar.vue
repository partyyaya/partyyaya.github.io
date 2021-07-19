<template>
  <div :class="{
      'sidebar': true,
      'sidebar--hide': hide,
      'sidebar--show': !hide,
    }">
    <div class='sidebar__title'>
      <span class='sidebar__title__bold'>Ming's Storage</span>
      <span class='sidebar__title__thin'>程序記憶</span>
    </div>
    <div class='sidebar__divider'></div>
    <div class="sidebar__body">
      <template v-for="(item) in sidebarList" :key="item.text">
        <router-link :to='item.to'>
          <div class="sidebar__body__link" @click="displayTabContent">{{item.text}}</div>
        </router-link>
      </template>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'

const hide = ref(true)
const sidebarList = [
  { text: 'Home', to: { name: 'Home' } },
  { text: 'About', to: { name: 'About' } }
]

const hideSidebar = (status) => {
  hide.value = status
}

export default {
  name: 'Sidebar',
  props: ['currentIndex'],
  setup (props, context) {
    const displayTabContent = () => {
      hide.value = true
      context.emit('displayTabContent', true)
    }
    return { hide, sidebarList, hideSidebar, displayTabContent }
  }
}
</script>
<style lang='scss' scoped>
@import '../style/variables.scss';
$sidebar_title_height: 6vw;
$sidebar_title_bold_fontsize: 1.3vw;
$sidebar_title_thin_fontsize: 0.8vw;
$sidebar_body_fontsize: 1vw;
$sidebar_bgColor: #707070;
$sidebar_titleColor:rgba(255, 255, 255, 0.7);
$sidebar_dividerColor:rgba(255, 255, 255, 0.15);
$sidebar_body_fontColor:#FFFFFF;
$sidebar_body_link_bgColor:rgba(255, 255, 255, 0.1);

.sidebar {
  position: absolute;
  top: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  background-color: $sidebar_bgColor;
  width: $App_sidebar_width;
  transition: left $App_frame_transition_time linear $App_frame_transition_delay_time;
  &--hide {
    left: -$App_sidebar_width;
  }
  &--show {
    left: 0;
  }
  &__title {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: $sidebar_title_height;
    color: $sidebar_titleColor;
    &__bold {
      font-size: $sidebar_title_bold_fontsize;
      font-weight: bold;
      margin-bottom: 0.5vw;
    }
    &__thin {
      margin-top: 0.3vw;
      font-size: $sidebar_title_thin_fontsize;
    }
  }
  &__divider {
    display: flex;
    position: absolute;
    top: $sidebar_title_height;
    left: 0;
    right: 0;
    height: 0.1vw;
    background-color: $sidebar_dividerColor;
  }
  &__body {
    position: absolute;
    top: $sidebar_title_height + 0.1;
    left: 0;
    right: 0;
    height: 60vh;
    font-size: $sidebar_body_fontsize;
    a {
      color: $sidebar_body_fontColor;
      :hover {
        background-color: $sidebar_body_link_bgColor;
      }
    }
    &__link {
      height: 6vh;
      border-bottom: $sidebar_dividerColor 0.1vw solid;
      box-sizing: border-box;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
}

@media (max-width: 1200px) {
  .sidebar {
    width: $App_mobile_sidebar_width;
    &--hide {
      left: -$App_mobile_sidebar_width;
    }
    &--show {
      left: 0vw;
    }
    &__title {
      height: $sidebar_title_height * $xl_lg;
      &__bold {
        font-size: $sidebar_title_bold_fontsize * $xl_lg;
      }
      &__thin {
        font-size: $sidebar_title_thin_fontsize * $xl_lg;
      }
    }
    &__divider {
      top: $sidebar_title_height * $xl_lg;
    }
    &__body {
      top: $sidebar_title_height * $xl_lg + 0.1;
      font-size: $sidebar_body_fontsize * $xl_lg;
    }
  }
}

// x2
@media (max-width: 768px) {
  .sidebar {
    width: $App_mobile_sidebar_width;
    &--hide {
      left: -$App_mobile_sidebar_width;
    }
    &--show {
      left: 0vw;
    }
    &__title {
      height: $sidebar_title_height * $xl_md;
      &__bold {
        font-size: $sidebar_title_bold_fontsize * $xl_md;
      }
      &__thin {
        font-size: $sidebar_title_thin_fontsize * $xl_md;
      }
    }
    &__divider {
      top: $sidebar_title_height * $xl_md;
    }
    &__body {
      top: $sidebar_title_height * $xl_md + 0.1;
      font-size: $sidebar_body_fontsize * $xl_md;
    }
  }
}

@media (max-width: 576px) {
  .sidebar {
    width: $App_mobile_xs_sidebar_width;
    &--hide {
      left: -$App_mobile_xs_sidebar_width;
    }
    &--show {
      left: 0vw;
    }
    &__title {
      height: $sidebar_title_height * $xl_xs;
      &__bold {
        font-size: $sidebar_title_bold_fontsize * $xl_xs;
      }
      &__thin {
        font-size: $sidebar_title_thin_fontsize * $xl_xs;
      }
    }
    &__divider {
      top: $sidebar_title_height * $xl_xs;
    }
    &__body {
      top: $sidebar_title_height * $xl_xs + 0.1;
      font-size: $sidebar_body_fontsize * $xl_xs;
    }
  }
}
</style>

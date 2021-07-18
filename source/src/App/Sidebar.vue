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
$sidebar_width : 15vw;
$sidebar_title_height: 6vw;
$sidebar_title_bold_fontsize: 1.3vw;
$sidebar_title_thin_fontsize: 0.8vw;
$sidebar_body_fontsize: 1vw;
$xl_lg: 2;

.sidebar {
  position: absolute;
  top: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  background-color: $App_sidebarBgColor;
  width: $sidebar_width;
  transition: left $App_frame_transition_time linear $App_frame_transition_delay_time;
  &--hide {
    left: -$sidebar_width;
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
    &__bold {
      font-size: $sidebar_title_bold_fontsize;
      font-weight: bold;
      color: $App_sidebar_titleColor;
      margin-bottom: 0.5vw;
    }
    &__thin {
      margin-top: 0.3vw;
      font-size: $sidebar_title_thin_fontsize;
      color: $App_sidebar_titleColor;
    }
  }
  &__divider {
    display: flex;
    position: absolute;
    top: $sidebar_title_height;
    left: 0;
    right: 0;
    height: 0.1vw;
    background-color: $App_sidebar_dividerColor;
  }
  &__body {
    position: absolute;
    top: $sidebar_title_height + 0.1;
    left: 0;
    right: 0;
    height: 60vh;
    font-size: $sidebar_body_fontsize;
    a {
      color: $App_sidebar_body_fontColor;
      :hover {
        background-color: $App_sidebar_body_link_bgColor;
      }
    }
    &__link {
      height: 6vh;
      border-bottom: $App_sidebar_dividerColor 0.1vw solid;
      box-sizing: border-box;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
}

@media (max-width: 1200px) {
  .sidebar {
    width: $sidebar_width * $xl_lg;
    &--hide {
      left: -$sidebar_width * $xl_lg;
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
    width: 30vw;
    &--hide {
      left: -30vw;
    }
    &--show {
      left: 0vw;
    }
    &__title {
      height: 12vw;
      &__bold {
        font-size: 3vw;
      }
      &__thin {
        font-size: 2vw;
      }
    }
    &__divider {
      top: 12vw;
    }
    &__body {
      top: 12.1vw;
      font-size: 2vw;
      &__link {
        height: 4vh;
      }
    }
  }
}

// x3
@media (max-width: 576px) {
  .sidebar {
    width: 50vw;
    &--hide {
      left: -50vw;
    }
    &--show {
      left: 0vw;
    }
    &__title {
      height: 18vw;
      &__bold {
        font-size: 4.5vw;
      }
      &__thin {
        font-size: 3vw;
      }
    }
    &__divider {
      top: 18vw;
    }
    &__body {
      top: 18.1vw;
      font-size: 3vw;
      &__link {
        height: 5vh;
      }
    }
  }
}
</style>

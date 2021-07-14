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
          <div class="sidebar__body__link">{{item.text}}</div>
        </router-link>
      </template>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
export default {
  name: 'Sidebar',
  props: ['currentIndex'],
  setup (props, context) {
    const hide = ref(true)
    const sidebarList = [
      { text: 'Home', to: { name: 'Home' } },
      { text: 'About', to: { name: 'About' } }
    ]

    function hideSidebar (status) {
      hide.value = status
    }
    return { hideSidebar, hide, sidebarList }
  }
}
</script>
<style lang='scss' scoped>
@import '../style/variables.scss';
.sidebar {
  position: absolute;
  top: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  background-color: $App_sidebarBgColor;
  width: 15vw;
  transition: left $App_frame_transition_time linear $App_frame_transition_delay_time;
  &--hide {
    left: -15vw;
  }
  &--show {
    left: 0vw;
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
    height: 6vw;
    &__bold {
      font-size: 1.3vw;
      font-weight: bold;
      color: $App_sidebar_titleColor;
      margin-bottom: 0.5vw;
    }
    &__thin {
      margin-top: 0.3vw;
      font-size: 0.8vw;
      color: $App_sidebar_titleColor;
    }
  }
  &__divider {
    display: flex;
    position: absolute;
    top: 6vw;
    left: 0;
    right: 0;
    height: 0.1vw;
    background-color: $App_sidebar_dividerColor;
  }
  &__body {
    position: absolute;
    top: 6.1vw;
    left: 0;
    right: 0;
    height: 60vh;
    font-size: 1vw;
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

// x1.5
@media (max-width: 1200px) {
  .sidebar {
    width: 30vw;
    &--hide {
      left: -30vw;
    }
    &--show {
      left: 0vw;
    }
    &__title {
      height: 9vw;
      &__bold {
        font-size: 2.3vw;
      }
      &__thin {
        font-size: 1.5vw;
      }
    }
    &__divider {
      top: 9vw;
    }
    &__body {
      top: 9.1vw;
      font-size: 1.8vw;
      &__link {
        height: 4vh;
      }
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

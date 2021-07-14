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
  </div>
</template>

<script>
import { ref } from 'vue'
export default {
  name: 'Sidebar',
  props: ['currentIndex'],
  setup (props, context) {
    const hide = ref(true)
    function hideSidebar (status) {
      console.log(status)
      hide.value = status
    }
    return { hideSidebar, hide }
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
  transition: left $transition_time linear 0s;
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
      font-size: 1.5vw;
      font-weight: bold;
      color: $App_sidebar_titleColor;
      margin-bottom: 0.5vw;
    }
    &__thin {
      font-size: 1vw;
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
}

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
  }
}

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
  }
}

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
  }
}
</style>

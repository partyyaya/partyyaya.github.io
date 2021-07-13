<template>
  <div :class="{
      'sidebar': true,
      'sidebar--hide': hide,
      'sidebar--show': !hide,
    }">
    <div class='sidebar__title'>
      <span class='sidebar__title__bold'>Ming's Storage</span><br />
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
  transition: left 0.4s linear 0s;
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
      color: $App_sidebar_titleColor;
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

@media (max-width: 414px) {
  .sidebar {
    width: 75vw;
    &--hide {
      left: -75vw;
    }
    &--show {
      left: 0vw;
    }
    &__title {
      height: 18vw;
    }
    &__divider {
      top: 18vw;
    }
  }
}
</style>

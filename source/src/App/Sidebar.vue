<template>
  <div class='sidebar'>
    <div class='sidebar__title'>
      <span class='sidebar__title__bold'>Ming's Storage</span><br />
      <span class='sidebar__title__thin'>程序記憶</span>
    </div>
    <div class='sidebar__divider'></div>
  </div>
</template>

<script>
export default {
  name: 'Sidebar',
  props: ['currentIndex'],
  setup (props, context) {
    function hideSidebar () {
      console.log('hide mine')
    }
    return { hideSidebar }
  }
}
</script>
<style lang='scss' scoped>
@import '../style/variables.scss';
.sidebar {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  background-color: $App_sidebarBgColor;
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

@media (max-width: 375px) {
  .sidebar {
    z-index: 9999;
    width: 85vw;
    &__title {
      height: 18vw;
    }
    &__divider {
      top: 18vw;
    }
  }
}
</style>

<template>
  <div class="home">
    <Sidebar ref="childSidebar"/>
    <Content @hideSidebar="hideSidebar"/>
  </div>
</template>

<script>
import { ref } from 'vue'
import Sidebar from './Sidebar'
import Content from './Content'
export default {
  name: 'App',
  components: { Sidebar, Content },
  setup (props, context) {
    // 與側邊攔組件溝通
    const childSidebar = ref()
    function hideSidebar () {
      console.log('hideSidebar main')
      // 呼叫側邊欄隱藏自己
      childSidebar.value.hideSidebar()
    }
    return { childSidebar, hideSidebar }
  }
}
</script>
<style lang="scss" scoped>
.home {
  display: flex;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}
</style>

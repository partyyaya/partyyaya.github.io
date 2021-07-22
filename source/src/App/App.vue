<template>
  <div class="home">
    <Sidebar @displayTabContent="displayTabContent" ref="childSidebar"/>
    <Content @switchSidebar="switchSidebar" ref="childContent"/>
  </div>
</template>

<script>
import { ref } from 'vue'
import Sidebar from './Sidebar'
import Content from './Content'

// 與側邊攔組件溝通
const childSidebar = ref()
const childContent = ref()

const switchSidebar = (status) => {
  // 隱藏側邊欄
  childSidebar.value.switchSidebar(status)
}
const displayTabContent = (toDisplay) => {
  // 顯示側邊攔連結內容
  childContent.value.displayTabContent(toDisplay)
}
export default {
  name: 'App',
  components: { Sidebar, Content },
  setup (props, context) {
    return { childSidebar, childContent, switchSidebar, displayTabContent }
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
  overflow: hidden;
}
</style>

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
      <div class="sidebar__body__home">
        <router-link to='Home'>
          <div class="sidebar__body__link" @click="displayTabContent">Home</div>
        </router-link>
      </div>
      <div class="sidebar__body__else">
        <template v-for="(item) in sidebarList" :key="item.text">
          <router-link :to='item.to'>
            <div class="sidebar__body__link" @click="displayTabContent">{{item.text}}</div>
          </router-link>
        </template>
      </div>
      <div class="sidebar__body__website">
        <div class="sidebar__body__website__title">Ming's Links</div>
        <div class="sidebar__body__website__body">
          <a class="sidebar__body__website__link" href="https://github.com/partyyaya">
            <div>
              <img src="../assets/github.png" alt="Github" width="15" height="15">&nbsp;
              GitHub
            </div>
          </a>
          <div class="sidebar__body__website__link"></div>
          <div class="sidebar__body__website__link"></div>
        </div>
      </div>
      <router-link to='About'>
        <div class="sidebar__body__about sidebar__body__link" @click="displayTabContent">About Me</div>
      </router-link>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'

const hide = ref(true)
const sidebarList = [
  { text: '測試', to: { name: 'About' } },
  { text: '測試2', to: { name: 'About' } }
]

const switchSidebar = (status) => {
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
    return { hide, sidebarList, switchSidebar, displayTabContent }
  }
}
</script>
<style lang='scss' scoped>
@import '../style/variables.scss';
$sidebar_title_height: 12vh;
$sidebar_title_bold_fontsize: 1.2vw;
$sidebar_title_thin_fontsize: 0.9vw;
$sidebar_body_fontsize: 0.9vw;
$sidebar_bgColor: #707070;
$sidebar_titleColor: rgba(255, 255, 255, 0.7);
$sidebar_dividerColor: rgba(255, 255, 255, 0.15);
$sidebar_body_fontColor: #FFFFFF;
$sidebar_body_link_bgColor: rgba(255, 255, 255, 0.1);
$sidebar_body_else_height: 36vh;
$sidebar_body_website_height: 20vh;
$sidebar_body_home_height: 5vh;
$sidebar_body_about_height: 5vh;
$sidebar_body_link_height: 5vh;
$sidebar_body_website_link_height: 4vh;

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
    height: 87vh;
    font-size: $sidebar_body_fontsize;
    a {
      color: $sidebar_body_fontColor;
      :hover {
        background-color: $sidebar_body_link_bgColor;
      }
    }
    &__home {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
    }
    &__else {
      position: absolute;
      top: $sidebar_body_home_height;
      left: 0;
      right: 0;
      height: $sidebar_body_else_height;
      border-bottom: $sidebar_dividerColor 0.1vw solid;
    }
    &__link {
      height: $sidebar_body_link_height;
      border-bottom: $sidebar_dividerColor 0.1vw solid;
      box-sizing: border-box;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    &__website {
      border-bottom: $sidebar_dividerColor 0.1vw solid;
      position: absolute;
      top: $sidebar_body_home_height + $sidebar_body_else_height;
      left: 0;
      right: 0;
      height: $sidebar_body_website_height;
      a {
        color: $sidebar_body_fontColor;
        :hover {
          background-color: transparent;
        }
      }
      &__title {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        height: 5vh;
        display: flex;
        justify-content: center;
        align-items: center;
        color: $sidebar_titleColor;
        font-size: $sidebar_title_thin_fontsize;
        font-weight: bold;
      }
      &__body {
        position: absolute;
        top: 5vh;
        left: 0;
        right: 0;
        height: 15vh;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
      }
      &__link {
        width: 100%;
        height: 100%;
        height: $sidebar_body_link_height;
        display: flex;
        justify-content: center;
        align-items: center;
        div {
          display: flex;
          justify-content: center;
          align-items: center;
        }
      }
    }
    &__about {
      position: absolute;
      top: $sidebar_body_home_height + $sidebar_body_else_height + $sidebar_body_website_height;
      left: 0;
      right: 0;
      height: $sidebar_body_about_height;
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
      &__bold {
        font-size: $sidebar_title_bold_fontsize * $xl_lg;
      }
      &__thin {
        font-size: $sidebar_title_thin_fontsize * $xl_lg;
      }
    }
    &__body {
      font-size: $sidebar_body_fontsize * $xl_lg;
      &__website__title {
        font-size: $sidebar_title_thin_fontsize * $xl_lg;
      }
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
      &__bold {
        font-size: $sidebar_title_bold_fontsize * $xl_md;
      }
      &__thin {
        font-size: $sidebar_title_thin_fontsize * $xl_md;
      }
    }
    &__body {
      font-size: $sidebar_body_fontsize * $xl_md;
      &__website__title {
        font-size: $sidebar_title_thin_fontsize * $xl_md;
      }
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
      &__bold {
        font-size: $sidebar_title_bold_fontsize * $xl_xs;
      }
      &__thin {
        font-size: $sidebar_title_thin_fontsize * $xl_xs;
      }
    }
    &__body {
      font-size: $sidebar_body_fontsize * $xl_xs;
      &__website__title {
        font-size: $sidebar_title_thin_fontsize * $xl_xs;
      }
    }
  }
}
</style>

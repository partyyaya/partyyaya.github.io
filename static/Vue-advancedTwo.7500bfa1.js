const n=`<span style="font-size: 32px; font-weight: 600;">Vue \u9032\u968E\u4F7F\u7528\u4E8C</span>

## Mixin \u4F7F\u7528
- \u4E3B\u8981\u4F7F\u7528\uFF1A\u5C07\u4E00\u4E9B\u5E38\u7528\u7684\u65B9\u6CD5\u3001\u5C6C\u6027\u3001\u751F\u547D\u9031\u671F\u51FD\u6578...\u62BD\u96E2\u51FA\u4F86\u91CD\u8907\u4F7F\u7528
- \u7F3A\u9EDE\uFF1A
  - \u8B8A\u91CF\u5C6C\u6027\u4F86\u6E90\u4E0D\u660E\u78BA\uFF0C\u95B1\u8B80\u4E0A\u4E0B\u6587\u56F0\u96E3
  - \u82E5\u5F15\u5165\u591A\u500B \`\`\`Mixin\`\`\`\uFF0C\u6050\u9020\u6210\u88E1\u9762\u5C6C\u6027\u547D\u540D\u885D\u7A81
  - \u53EF\u80FD\u51FA\u73FE\u4E00\u500B\u7D44\u4EF6\u5F15\u7528\u591A\u500B \`\`\`Mixin\`\`\`\u3001\u591A\u500B\u7D44\u4EF6\u5F15\u7528\u4E00\u500B \`\`\`Mixin\`\`\` \u9020\u6210\u591A\u5C0D\u591A\u7684\u95DC\u4FC2\uFF0C\u975E\u5E38\u8907\u96DC
  - \`\`\`Vue3 Composition API\`\`\` \u65E8\u5728\u89E3\u6C7A\u8A72\u554F\u984C
- \u7D44\u4EF6\u7684\u5167\u5BB9\u5C6C\u6027\u8207\u65B9\u6CD5\u512A\u5148\u65BC \`\`\`Mixin\`\`\` \u7684\u5167\u5BB9
- \u5C40\u90E8 \`\`\`Mixin\`\`\` \u900F\u904E \`\`\`mixins: [yourMixin]\`\`\` \u52A0\u5165
- \u5168\u5C40 \`\`\`Mixin\`\`\` \u900F\u904E \`\`\`app.mixin()\`\`\` \u65B9\u6CD5\u52A0\u5165( \`\`\`app\`\`\` \u70BA \`\`\`Vue\`\`\` \u5BE6\u9AD4)
  - \u5C07\u81EA\u52D5\u5C07 \`\`\`Mixin\`\`\` \u5167\u5BB9\u81EA\u52D5\u8A3B\u518A\u5230\u6BCF\u500B\u7D44\u4EF6
- \u7236\u5B50\u7D44\u4EF6\u8207 \`\`\`Mixin\`\`\` \u7684\u751F\u547D\u9031\u671F\uFF1A
  - 1.\`\`\`Mixin\`\`\` \u7684 \`\`\`beforeCreate\`\`\`
  - 2.\u3010\u7236\u7D44\u4EF6\u3011\u7684 \`\`\`beforeCreate\`\`\`
  - 3.\`\`\`Mixin\`\`\` \u7684 \`\`\`created \`\`\`
  - 4.\u3010\u7236\u7D44\u4EF6\u3011\u7684 \`\`\`created\`\`\`
  - 5.\`\`\`Mixin\`\`\` \u7684 \`\`\`beforeMount\`\`\`
  - 6.\u3010\u7236\u7D44\u4EF6\u3011\u7684 \`\`\`beforeMount\`\`\`
  - 7.\u3010\u5B50\u7D44\u4EF6\u3011\u7684 \`\`\`beforeCreate\`\`\`
  - 8.\u3010\u5B50\u7D44\u4EF6\u3011\u7684 \`\`\`created\`\`\`
  - 9.\u3010\u5B50\u7D44\u4EF6\u3011\u7684 \`\`\`beforeMount\`\`\`
  - 10.\u3010\u5B50\u7D44\u4EF6\u3011\u7684 \`\`\`mounted\`\`\`
  - 11.\`\`\`Mixin\`\`\`  \u7684 \`\`\`mounted\`\`\`
  - 12.\u3010\u7236\u7D44\u4EF6\u3011\u7684 \`\`\`mounted\`\`\`
- \u7BC4\u4F8B\uFF1A\u6B64\u7BC4\u4F8B\u542B\u4FEE\u6539 \`\`\`Mixin\`\`\` \u8207\u7D44\u4EF6\u7684\u512A\u5148\u9078\u64C7\u6B0A
  \`\`\`js
  /*
    // \u5C40\u90E8 Mixin\uFF0C\u900F\u904E mixins: [myMixin] \u52A0\u5165
    const myMixin = {
      data(){
        return {
          number: 2,
          count: 222
        }
      },
      created(){},
      methods: {}
    }

    // \u5168\u5C40 Mixin \u900F\u904E app.mixin() \u52A0\u5165
    app.mixin({
      data(){
        return {
          number: 2,
          count: 222
        }
      },
      created(){},
      methods: {}
    })
  */
  const myMixin = {
    number: 1
  }
  const app = Vue.createApp({
    mixins: [myMixin],
    // \u88E1\u9762\u7684\u81EA\u5B9A\u7FA9\u5C6C\u6027\u53EF\u4EE5\u7528 this.$options \u4F86\u53D6\u5F97
    number: 2,
    template: \`
      <div>
        <div>{{this.$options.number}}</div>
      </div>
    \`
  });
  // \u901A\u904E\u6B64\u65B9\u5F0F\u53EF\u4FEE\u6539 mixin \u8207 \u7D44\u4EF6 \u7684\u512A\u5148\u9078\u64C7\u6B0A
  app.config.optionMergeStrategies.number = (mixinVal, appValue) => {
    // \u82E5 mixin \u5B58\u5728\u5247\u512A\u5148\u9078\u64C7 mixin
    return mixinVal || appValue;
  }
  const vm = app.mount('#root');
  \`\`\`

## Directive \u81EA\u5B9A\u7FA9\u6307\u4EE4
- \u66F4\u65B9\u4FBF\u5C0D\u7279\u5B9A\u7D44\u4EF6/\u6A19\u7C64\u53D6\u5F97\u8CC7\u8A0A
- \u53EF\u7528\u4F86\u89E3\u6C7A \`\`\`ref\`\`\` \u8986\u7528\u554F\u984C
- \u5C40\u90E8 \`\`\`directives\`\`\` \u900F\u904E \`\`\`directives: yourDirectives,\`\`\` \u52A0\u5165
- \u5168\u5C40 \`\`\`directives\`\`\` \u900F\u904E \`\`\`app.directive\`\`\` \u65B9\u6CD5\u52A0\u5165( \`\`\`app\`\`\` \u70BA \`\`\`Vue\`\`\` \u5BE6\u9AD4)
- \u8207\u7D44\u4EF6\u4E00\u6A23\u64C1\u6709\u751F\u547D\u9031\u671F(\u5C40\u90E8\u8207\u5168\u5C40\u90FD\u6709)
- \u5C40\u90E8\u8207\u5168\u5C40 \`\`\`directives\`\`\` \u4F7F\u7528\u7BC4\u4F8B
  \`\`\`js
  // \u5C40\u90E8\u6307\u4EE4\uFF1A\u53D6\u540D\u70BA focus \u4E26\u5C07 v-focus \u639B\u8F09\u5230\u6A19\u7C64\u4E0A
  const directives = {
    focus: {
      // \u5728\u8A72\u7D44\u4EF6\u6E32\u67D3\u5B8C\u6210\u6642\u805A\u7126
      mounted(el) {
        el.focus();
      }
    }
  }

  // \u4F7F\u7528 directives \u639B\u8F09\u5230\u7D44\u4EF6\u4E0A
  const app = Vue.createApp({
    directives: directives,
    template: \`
      <div>
        <input v-focus />
      </div>
    \`
  });

  // \u5168\u5C40\u6307\u4EE4:\u81EA\u52D5\u639B\u8F09\u9032\u53BB\u53EF\u4EE5\u76F4\u63A5\u4F7F\u7528
  app.directive('focus', {
    beforeMount(el){},
    mounted(el){},
    beforeUpdate(el){},
    updated(el){},
    beforeUnmount(el){},
    unmounted(el){},
  })

  const vm = app.mount('#root');
  \`\`\`
- \u4F7F\u7528 \`\`\`binding\`\`\` \u53C3\u6578\u53EF\u63A5\u6536\u5230\u7D44\u4EF6\u6A19\u7C64\u7684\u8CC7\u6599
  - \`\`\`binding.arg\`\`\` \u53EF\u63A5\u6536\u5230 \`\`\`v-param1:param2="param3"\`\`\` \u7684 \`\`\`param2\`\`\` \u5B57\u4E32
  - \`\`\`binding.value\`\`\` \u53EF\u63A5\u6536\u5230 \`\`\`v-param1:param2="param3"\`\`\` \u7684 \`\`\`param3\`\`\` \u50B3\u503C
  - \u7BC4\u4F8B
    \`\`\`js
    const app = Vue.createApp({
      data() {
        return {
          distance: 110
        }
      },
      template: \`
        <div>
          <div v-pos:right="distance" class="header">
            <input />
          </div>
        </div>
      \`
    });
    app.directive('pos', {
      mounted(el, binding){
        console.log(binding.arg) // right
        console.log(binding.value) // 110
        // \u9019\u6BB5\u4EE3\u8868\u53F3\u79FB\u52D5110px
        el.style[binding.arg] = (binding.value + 'px');
      },
      updated(el, binding){
        el.style[binding.arg] = (binding.value + 'px');
      }
    })
    /*
      // \u7576\u53EA\u6709 mounted \u8207 updated \u6642\uFF0C\u53EF\u7C21\u5BEB\u6210\u4E0B\u9762\u5BEB\u6CD5
      app.directive('pos', (el, binding) => {
        el.style[binding.arg] = (binding.value + 'px');
      })
    */
    const vm = app.mount('#root');
    \`\`\`

## Teleport \u50B3\u9001\u9580
- \u4F7F\u7528 \`\`\`teleport\`\`\` \u7D44\u4EF6\u53EF\u4EE5\u5C07\u88E1\u9762\u7684\u5167\u5BB9\u639B\u8F09\u5230 \`\`\`to\`\`\` \u88E1\u9762\u6307\u5B9A\u7684\u6A19\u7C64\u5167
- \`\`\`to\`\`\` \u53EF\u4EE5\u653E\u5165\u4E09\u7A2E\u9078\u64C7\u6A19\u7C64\u65B9\u5F0F\uFF1A
  - \`\`\`id\`\`\`\uFF1A\`\`\`#yourTag\`\`\`
  - \`\`\`class\`\`\`\uFF1A\`\`\`.yourTag\`\`\`
  - \`\`\`\u6A19\u7C64\`\`\`\uFF1A\`\`\`yourTag\`\`\`
- \u7121\u8AD6\u7528\u54EA\u7A2E\u653E\u5165\u65B9\u5F0F\uFF0C\`\`\`Teleport\`\`\` \u88E1\u9762\u5167\u5BB9\u90FD\u53EA\u6703\u9078\u64C7\u7B2C\u4E00\u500B\u6A19\u7C64\u653E\u5165
- \u82E5\u6709\u591A\u500B \`\`\`Teleport\`\`\` \u90FD\u9078\u64C7\u540C\u4E00\u500B\u6A19\u7C64\uFF0C\u5247\u6A19\u7C64\u5167\u6703\u6309\u9806\u5E8F\u52A0\u5165\u6240\u6709 \`\`\`Teleport\`\`\`\u5167\u5BB9
- \u5E38\u7528\u5728\u63D0\u793A\u6D88\u606F\u3001\u8F09\u5165\u4E2D\u7B49\u5E38\u7528\u8986\u84CB\u9801\u9762\u529F\u80FD
- \u7BC4\u4F8B
  \`\`\`html
  <style>
    .area {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      width: 200px;
      height: 300px;
      background: green;
    }
    .mask {
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      background: #000;
      opacity: 0.5;
      color: #fff;
      font-size: 100px;
    }
  </style>
  <body>
    <div id="root"></div>
    <div id="hello"></div>
  </body>
  <script>
    const app = Vue.createApp({
      data() {
        return {
          show: false,
          message: 'hello'
        }
      },
      methods: {
        handleBtnClick() {
          this.show = !this.show;
        }
      },
      template: \`
        <div class="area">
          <button @click="handleBtnClick">\u6309\u94AE</button>
          <teleport to="#hello">
            <div class="mask" v-show="show">{{message}}</div>
          </teleport>
        </div>
      \`
    });

    const vm = app.mount('#root');
  <\/script>
  \`\`\`

## Plugin \u63D2\u4EF6
- [\u5B98\u7DB2\u4ECB\u7D39](https://v3.cn.vuejs.org/guide/plugins.html#%E6%8F%92%E4%BB%B6)
- \u7528\u9014\uFF1A\u5C07\u901A\u7528\u6027\u7684\u529F\u80FD\u5C01\u88DD\u8D77\u4F86
- \u88FD\u4F5C\u63D2\u4EF6\u6642\u9700\u8981\u5C0D\u5916\u66B4\u9732 \`\`\`install\`\`\` \u65B9\u6CD5
- \u4EE5\u4E0B\u70BA\u7C21\u55AE\u5B9A\u7FA9\u8207\u4F7F\u7528\u7BC4\u4F8B
  \`\`\`js
  const myPlugin = {
    install(app, options) {
      // \u82E5\u4F7F\u7528\u5834\u666F\u70BA  app.use(myPlugin, { name: 'ming'});
      console.log(app) // \u7531 Vue \u7684 createApp \u751F\u6210\u7684 app \u5C0D\u8C61
      console.log(options) // { name: 'ming'}
      // \u63D0\u4F9B\u7D66\u5B50\u5B6B\u7D44\u4EF6\u5C6C\u6027
      app.provide('name', 'ming');
      // \u81EA\u5B9A\u7FA9\u6307\u4EE4(v-focus)
      app.directive('focus', {
        mounted(el) {
          el.focus();
        }
      })
      // \u62BD\u96E2\u5171\u7528\u65B9\u6CD5
      app.mixin({
        mounted(){
          console.log('mixin')
        }
      })
      // \u6DFB\u52A0\u5168\u5C40\u5BE6\u4F8B\u65B9\u6CD5\u6216\u5C6C\u6027
      app.config.globalProperties.$sayHello = 'hello world';
    }
  }

  const app = Vue.createApp({
    template: \`
      <my-title />
    \`
  });

  app.component('my-title', {
    // \u53D6\u5F97 plugin \u5167\u63D0\u4F9B\u7684 name \u5C6C\u6027
    inject: ['name'],
    mounted() {
      console.log(this.$sayHello); // hello world
    },
    template: \`<div>{{name}}<input v-focus /></div>\`
  })
  // \u4F7F\u7528\u81EA\u88FD plugin
  app.use(myPlugin, { name: 'ming'});

  const vm = app.mount('#root');
  \`\`\`

## Rules \u6821\u9A57\u898F\u5247
- \u53EF\u91DD\u5C0D \`\`\`data\`\`\` \u88E1\u9762\u5C6C\u6027\u6821\u9A57\u662F\u5426\u7B26\u5408\u898F\u5247
- \u7BC4\u4F8B
  \`\`\`js
  const app = Vue.createApp({
    data() {
      return { name: 'ming', age: 12}
    },
    methods:{
      addAge(){
        this.age++
      }
    },
    // \u5B9A\u7FA9\u91DD\u5C0Ddata\u88E1\u7684\u5C6C\u6027\u6821\u9A57\u7684\u898F\u5247
    rules: {
      age: {
        // validate \u53EA\u6709\u5728 false \u6642\u624D\u6703\u5217\u5370 message
        validate: age => age > 18,
        message: 'too young'
      },
      name: {
        validate: name => name.length >= 4,
        message: 'name too short'
      }
    },
    template: \`
      <div @click="addAge">name:{{name}}, age:{{age}}</div>
    \`
  });

  // \u4F7F\u7528 Plugin \u5C0D mixin \u505A\u4E00\u500B\u5C01\u88DD
  const validatorPlugin = (app, options) => {
    console.log(options) // undefined\uFF0C\u56E0\u6C92\u6709\u50B3\u7B2C\u4E8C\u500B\u53C3\u6578
    app.mixin({
      created() {
        console.log(this.$options.rules) // \u6703\u5370\u51FA rules \u898F\u5247
        for(let key in this.$options.rules) {
          const item = this.$options.rules[key];
          // \u76E3\u807D data \u88E1\u7684\u5C6C\u6027\u503C\uFF0C\u82E5\u5C6C\u6027\u503C(key)\u6539\u8B8A\u5247\u81EA\u52D5\u6821\u9A57
          this.$watch(key, (value) => {
            const result = item.validate(value);
            // \u82E5result \u70BA false \u5247\u8F38\u51FA message
            if(!result) console.log(item.message);
          })
        }
      }
    })
  }

  app.use(validatorPlugin);
  const vm = app.mount('#root');
  \`\`\`

## Setup \u8207 \u751F\u547D\u9031\u671F\u51FD\u6578
- \u4F7F\u7528\u76EE\u7684\uFF1A
  \`\`\`txt
  \u904E\u53BB\u7684\u5BEB\u6CD5 Options API \u9700\u5C07\u529F\u80FD\u7684\u5C6C\u6027\u3001\u65B9\u6CD5...
  \u6703\u9700\u8981\u5206\u5225\u5BEB\u5728\u5982\uFF1Adata\u3001methods...\u7B49\u7A0B\u5F0F\u5340\u584A
  \u82E5\u5C08\u6848\u58EF\u5927\u5C07\u9020\u6210\u7A0B\u5F0F\u788E\u7247\u5316\uFF0C\u96E3\u4EE5\u95B1\u8B80\u8207\u7406\u89E3

  Vue3 \u63A8\u51FA Composition API \u5F8C\uFF0C\u7121\u9808\u518D\u5206\u958B\u5BEB\u5728\u7279\u5B9A\u7684\u5340\u584A\u5167
  \u6240\u6709\u5167\u5BB9\u53EF\u5BEB\u5728 setup() \u5167\uFF0C\u4E5F\u5C31\u53EF\u7528"\u529F\u80FD"\u4F86\u5340\u5206\u5340\u584A\u4E86\uFF0C
  \`\`\`
- \u4E0D\u6703\u6709 \`\`\`created\`\`\`\u3001\`\`\`beforeCreated\`\`\` \u56E0\u70BA \`\`\`setup\`\`\` \u5728\u9019\u5169\u500B\u751F\u547D\u9031\u671F\u6D3B\u52D5\u4E4B\u9593
- \u4F7F\u7528\u53C3\u6578
  - \`\`\`props\`\`\` \u70BA\u97FF\u61C9\u5F0F\u7684\uFF0C\u7576\u50B3\u5165\u65B0\u5C6C\u6027\u6642\uFF0C\u5C07\u88AB\u66F4\u65B0
  - \`\`\`context\`\`\` \u662F\u4E00\u500B\u666E\u901A \`\`\`JS\`\`\` \u5C0D\u8C61\uFF0C\u53EF\u4F7F\u7528\u5728 \`\`\`setup\`\`\` \u4E2D\u6709\u7528\u7684\u5C6C\u6027
- \u4EE5\u4E0B\u70BA\u5E38\u7528\u751F\u547D\u9031\u671F\u51FD\u6578\uFF0C\u9806\u5E8F\u5982\u4E0B
  - \u521D\u59CB\u6E32\u67D3\uFF1A\`\`\`onBeforeMount\`\`\` => \`\`\`onRenderTracked\`\`\` => \`\`\`onMounted\`\`\`
  - \u9801\u9762\u66F4\u65B0\uFF1A\`\`\`onRenderTriggered\`\`\` => \`\`\`onBeforeUpdate\`\`\` => \`\`\`onUpdated\`\`\`
  - \u7BC4\u4F8B
    \`\`\`js
    const app = Vue.createApp({
      // \u6240\u6709\u751F\u547D\u9031\u671F\u51FD\u6578
      // beforeMount =>	onBeforeMount
      // mounted =>	onMounted
      // beforeUpdate => onBeforeUpdate
      // updated =>	onUpdated
      // beforeUnmount =>	onBeforeUnmount
      // unmounted =>	onUnmounted
      // errorCaptured =>	onErrorCaptured
      // renderTracked =>	onRenderTracked
      // renderTriggered =>	onRenderTriggered
      // activated =>	onActivated
      // deactivated =>	onDeactivated
      setup() {
        const {
          ref, onBeforeMount, onMounted, onBeforeUpdate, onUpdated,
          onRenderTracked, onRenderTriggered
        } = Vue;
        const name = ref('ming')
        onBeforeMount(() => {
          console.log('onBeforeMount')
        })
        onMounted(() => {
          console.log('onMounted')
        })
        onBeforeUpdate(() => {
          console.log('onBeforeUpdate')
        })
        onUpdated(() => {
          console.log('onUpdated')
        })
        // \u6BCF\u6B21\u6E32\u67D3\u5F8C\u91CD\u65B0\u6536\u96C6\u97FF\u61C9\u5F0F\u4F9D\u8CF4
        onRenderTracked(() => {
          console.log('onRenderTracked')
        })
        // \u6BCF\u6B21\u89F8\u767C\u9801\u9762\u91CD\u65B0\u6E32\u67D3\u6642\u81EA\u52D5\u57F7\u884C
        onRenderTriggered(() => {
          console.log('onRenderTriggered')
        })
        const handleClick = () => {
          name.value = 'test'
        }
        return { name, handleClick }
      },
      template: \`
        <div @click="handleClick">
          {{name}}
        </div>
      \`,
    });
    
    const vm = app.mount('#root');
    \`\`\`
- \u7236\u5B50\u7D44\u4EF6\u751F\u547D\u9031\u671F\uFF1A
  - \u521D\u59CB\u6E32\u67D3\uFF1A
    \`\`\`txt
    parent onBeforeMount => parent onRenderTracked => child onBeforeMount
    => child onRenderTracked => child onMounted => parent onMounted
    \`\`\`
  - \u7236\u50B3\u5B50\u8CC7\u6599\u72C0\u614B\u66F4\u65B0\uFF1A
    \`\`\`txt
    parent onRenderTriggered => parent onBeforeUpdate => child onBeforeUpdate
    => child onUpdated => parent onUpdated
    \`\`\`
  - \u7236\u5B50\u7D44\u4EF6\u7BC4\u4F8B
    \`\`\`js
    const Child = {
      props: [ 'parentName' ],
      setup() {
        const {
          ref, onBeforeMount, onMounted, onBeforeUpdate, onUpdated,
          onRenderTracked, onRenderTriggered
        } = Vue;
        const name = ref('child')
        onBeforeMount(() => {
          console.log('child onBeforeMount')
        })
        onMounted(() => {
          console.log('child onMounted')
        })
        onBeforeUpdate(() => {
          console.log('child onBeforeUpdate')
        })
        onUpdated(() => {
          console.log('child onUpdated')
        })
        onRenderTracked(() => {
          console.log('child onRenderTracked')
        })
        onRenderTriggered(() => {
          console.log('child onRenderTriggered')
        })
        return { name }
      },
      template: \`
        <div>
          {{name}}
        </div>
      \`,
    }

    const app = Vue.createApp({
      components: { Child },
      setup() {
        const {
          ref, onBeforeMount, onMounted, onBeforeUpdate, onUpdated,
          onRenderTracked, onRenderTriggered
        } = Vue;
        const name = ref('parent')
        onBeforeMount(() => {
          console.log('parent onBeforeMount')
        })
        onMounted(() => {
          console.log('parent onMounted')
        })
        onBeforeUpdate(() => {
          console.log('parent onBeforeUpdate')
        })
        onUpdated(() => {
          console.log('parent onUpdated')
        })
        onRenderTracked(() => {
          console.log('parent onRenderTracked')
        })
        onRenderTriggered(() => {
          console.log('parent onRenderTriggered')
        })
        const handleClick = () => {
          name.value = 'parent click!'
        }
        return { name, handleClick }
      },
      template: \`
        <div @click="handleClick">
          {{name}}
          <Child :parentName="name"/>
        </div>
      \`,
    });
    
    const vm = app.mount('#root');
    \`\`\`
- \`\`\`setup\`\`\` \u4F7F\u7528\u7BC4\u4F8B
  \`\`\`js
  const app = Vue.createApp({
    template: \`
      <div @click="handleClick">{{name}}</div>
    \`,
    methods: {
      test() {
        console.log(this.$options.setup());
      }
    },
    mounted() {
      // \u5728\u5176\u4ED6\u65B9\u6CD5\u53EF\u4EE5\u547C\u53EBsetup
      this.test();
    },
    // \u5C1A\u672A\u521D\u59CB\u5316\u524Dcreated \u5B9E\u4F8B\u88AB\u5B8C\u5168\u521D\u59CB\u5316\u4E4B\u524D
    setup(props, context) {
      // \u56E0\u9084\u672A\u6709\u5BE6\u4F8B\u6240\u4EE5 this \u4E0D\u5B58\u5728(\u7121\u6CD5\u547C\u53EB\u5176\u4ED6\u65B9\u6CD5)
      return {
        name: 'ming',
        handleClick: () => {
          console.log(this) // window
        }
      }
    }
  });
  const vm = app.mount('#root');
  \`\`\`

## ref\u3001reactive \u4F7F\u7528
- \`\`\`ref\`\`\`\u3001\`\`\`reactive\`\`\` \u70BA\u97FF\u61C9\u5F0F\u7684\u5F15\u7528\uFF0C\u4F7F \`\`\`setup\`\`\` \u53EF\u4EE5\u96D9\u5411\u7D81\u5B9A
- \u539F\u7406\uFF1A\u901A\u904E \`\`\`proxy\`\`\` \u5C0D\u8CC7\u6599\u9032\u884C\u5C01\u88DD\uFF0C\u8CC7\u6599\u8B8A\u5316\u6642\u5C07\u89F8\u767C\u6A21\u677F\u5167\u5BB9\u66F4\u65B0
- \`\`\`ref\`\`\`\uFF1A\u8655\u7406\u57FA\u672C\u985E\u578B\u7684\u8CC7\u6599\uFF0C\u5982\uFF1A\`\`\`String\`\`\`\uFF0C\u4E0D\u9069\u5408\u7528\u6578\u7D44\u3001\u5C0D\u8C61\u985E\u578B
- \`\`\`reactive\`\`\`\uFF1A\u8655\u7406\u975E\u57FA\u672C\u985E\u578B\u7684\u8CC7\u6599\uFF0C\u5982\uFF1A\u6578\u7D44\u3001\u5C0D\u8C61\u985E\u578B
- \`\`\`toRefs\`\`\`\uFF1A\u5C07\u97FF\u61C9\u5F0F\u7269\u4EF6\u4E2D\u7684\u6BCF\u4E00\u500B\u5C6C\u6027\uFF0C\u500B\u5225\u5C01\u88DD\u6210 \`\`\`ref\`\`\` \u7269\u4EF6
  - \u82E5\u76F4\u63A5\u62C6\u89E3\uFF0C\u56E0\u70BA\u662F\u672A\u5C01\u88DD\u7684\u8CC7\u6599\uFF0C\u6240\u4EE5\u4E0D\u6703\u97FF\u61C9
- \`\`\`readonly\`\`\`\uFF1A\u8A2D\u5B9A\u8A72\u97FF\u61C9\u5F0F\u7269\u4EF6\u7121\u6CD5\u88AB\u4FEE\u6539
- \u7BC4\u4F8B
  \`\`\`js
  const app = Vue.createApp({
    // Vue \u6703\u81EA\u52D5\u5C07\u88AB\u5C01\u88DD\u7684\u6578\u64DA\u6703\u8ABF\u7528 .value \u53D6\u503C
    template: \`
      <div>{{name}}</div>
    \`,
    mounted() {
      setTimeout(() => {
        // 5\u79D2\u5F8C\u7121\u6CD5\u4FEE\u6539 name\uFF0C\u56E0\u70BA\u5DF2\u8A2D\u5B9A readonly
        this.name = 'test';
        console.log(this.name);
      }, 5000)
    },
    setup(props, context) {
      /*
        // ref \u7528\u6CD5
        const { ref } = Vue; // \u53D6\u5F97 ref 
        // ref \u5C07 'ming' \u8F49\u63DB\u6210 proxy({value: 'ming'}) \u4E00\u500B\u57FA\u672C\u985E\u578B\u7684\u97FF\u61C9\u5F0F\u61C9\u7528
        let name = ref('ming');
        setTimeout(() => {
        \u56E0\u70BA\u88AB\u5C01\u88DD\u6240\u4EE5\u7528 name.value \u6539\u8B8A\u88E1\u9762\u7684\u503C
          name.value = 'test'
        }, 2000)

        return { name }
      */
      
      const { reactive, readonly, toRefs } = Vue;
      // reactive \u5C07 { name: 'ming'} \u53D8\u6210 proxy({ name: 'ming'}) \u4E00\u500B\u97FF\u61C9\u5F0F\u61C9\u7528
      const nameObj = reactive({ name: 'ming', age: 18 });
      // \u8A2D\u5B9A\u8A72\u8CC7\u6599\u7121\u6CD5\u88AB\u4FEE\u6539
      const copyNameObj = readonly(nameObj);
      setTimeout(() => {
        nameObj.name = 'test';
      }, 2000) 
      /*
        toRefs \u5C07 reactive \u6578\u64DA\uFF1A proxy({ name: 'dell', age: 28})
        \u8F49\u5316\u6210\uFF1A{ name: proxy({ value: 'dell'}), age: proxy({value: 28}) }
        \u4F7F\u88E1\u9762\u7684 value \u53EF\u4EE5\u9032\u884C\u7D81\u5B9A\uFF0C\u82E5\u4E0D\u4F7F\u7528\u5247\u66F4\u6539\u8CC7\u6599\u6642\u6A21\u677F\u5167\u5BB9\u4E0D\u6703\u97FF\u61C9
      */
      // \u56E0\u89E3\u69CB\u51FA\u4F86\u7684\u6703\u662F\u672A\u5C01\u88DD\u7684\u6578\u64DA\uFF0C\u9700\u8981\u7528 toRefs \u9032\u884C\u91CD\u65B0\u5C01\u88DD\u6578\u64DA\u624D\u80FD\u9032\u884C\u97FF\u61C9
      // \u82E5\u8F38\u51FA\u7684\u662F readonly \u5C01\u88DD\u5F8C\u7684\u6578\u64DA\u5247\u4E4B\u5F8C\u7121\u6CD5\u9032\u884C\u4FEE\u6539
      const { name, age } = toRefs(copyNameObj);
      return { name }
    }
  });
  const vm = app.mount('#root');
  \`\`\`

## toRef\u3001context \u4F7F\u7528
- \`\`\`toRef\`\`\`\uFF1A\u7D66\u4E88\u97FF\u61C9\u5F0F\u7269\u4EF6\u4E2D\u7684\u65B0\u5C6C\u6027\uFF0C\u5C07\u8A72\u5C6C\u6027\u5305\u88F9\u6210 \`\`\`ref\`\`\` \u7269\u4EF6\uFF0C\u4F7F\u8A72\u5C6C\u6027\u8207\u539F\u7269\u4EF6\u7522\u751F\u9023\u7D50
  - \u6CE8\u610F\uFF1A\`\`\`toRefs\`\`\` \u662F\u5C07\u97FF\u61C9\u5F0F\u7269\u4EF6\u4E2D\u7684\u6BCF\u4E00\u500B\u5C6C\u6027\uFF0C\u500B\u5225\u5C01\u88DD\u6210 \`\`\`ref\`\`\` \u7269\u4EF6
  - \u7BC4\u4F8B
    \`\`\`js
    const app = Vue.createApp({
      template: \`
        <div>{{age}}</div>
      \`,
      setup(props, context) {
        const { reactive, toRef} = Vue;
        const data = reactive({name: 'ming'});
        // \u65B0\u589E age \u5C6C\u6027
        const age = toRef(data,'age');
        // \u521D\u59CB age \u5C6C\u6027\u72C0\u614B\u70BA\u7A7A
        console.log('age='+JSON.stringify(age)) // {"_object":{"name":"dell"},"_key":"age","__v_isRef":true}
        // \u8A2D\u5B9A\u521D\u59CB\u5C6C\u6027\u503C\u70BA test
        age.value = 'test'
        console.log('age='+JSON.stringify(age)) // {"_object":{"name":"dell","age":"test"},"_key":"age","__v_isRef":true}
        setTimeout(() => {
          age.value = 'success'
        }, 2000)
        return {age}
      }
    });
    const vm = app.mount('#root');
    \`\`\`
- \`\`\`context\`\`\`\uFF1A\u662F\u4E00\u822C\u7684\u5C0D\u8C61\uFF0C\u66B4\u9732\u53EF\u80FD\u5728 \`\`\`setup\`\`\` \u4E2D\u6709\u7528\u7684\u503C\uFF0C\u53EF\u5B89\u5168\u7684\u4F7F\u7528 \`\`\`ES6\`\`\` \u89E3\u69CB
  - \u5176\u4E2D \`\`\`attrs\`\`\` \u548C \`\`\`slots\`\`\` \u70BA\u97FF\u61C9\u5F0F\u5C0D\u8C61\uFF0C\u6703\u96A8\u8457\u7D44\u4EF6\u672C\u8EAB\u66F4\u65B0\uFF0C\u61C9\u907F\u514D\u76F4\u63A5\u89E3\u69CB\uFF0C\u59CB\u7D42\u7528\u5C6C\u6027\u65B9\u5F0F\u5F15\u7528
  - \u7BC4\u4F8B
    \`\`\`js
    const app = Vue.createApp({
      data(){
        return { test: '123' }
      },
      methods:{
        handleChange(){
          alert('change');
        }
      },
      template: \`
      <child :app="test" @change="handleChange">test2</child>\`
    
    });
    app.component('child',{
      template: \`<div @click="handleClick">123123</div>\`,
      setup(props, context) {
        const { h } = Vue;
        // \u6162\u6162\u53D6\u4EE3\u6389\u4E4B\u524D\u76F8\u540C\u985E\u4F3C\u7684\u8A9E\u6CD5\u4F7F\u7528
        const { attrs, slots, emit } = context;
        // attrs : None-Props \u5C6C\u6027\uFF0C\u82E5\u5BA3\u544A <child app="app"> \u5247 attrs.app \u53EF\u4EE5\u53D6\u5F97 app
        console.log('attrs='+JSON.stringify(attrs)) // {"app":"123"}
        // slots : \u53D6\u5F97\u7D44\u4EF6\u88E1\u9762\u5167\u5BB9\uFF0Cslots.default()(\u9810\u8A2D\u63D2\u69FD)
        console.log('slots='+JSON.stringify(slots.default()[0].children))// test2
        console.log('emit='+JSON.stringify(emit))
        // emit : \u5982\u4E0B\u7BC4\u4F8B\u53D6\u4EE3 this.$emit('change') \u7528\u6CD5\uFF0C\u6703\u89F8\u767C\u7236\u7D44\u4EF6\u7684handleChange\u65B9\u6CD5:<child @change="handleChange">
        function handleClick(){emit('change')}
        return{ handleClick}
      }
    })
    const vm = app.mount('#root');
    \`\`\`

## \u4F7F\u7528 Composition API \u958B\u767C TodoList
\`\`\`js
// 1.\u5217\u8868\u64CD\u4F5C\u529F\u80FD
const listRelativeEffect = () => {
  const { reactive } = Vue;
  const list = reactive([]);
  const addItemToList = (item) => {
    list.push(item);
  }
  return { list, addItemToList }
}

// 2.\u8F38\u5165\u6846\u64CD\u4F5C\u529F\u80FD
const inputRelativeEffect = () => {
  const { ref } = Vue;
  const inputValue = ref('');
  const handleInputValueChange = (e) => {
    inputValue.value = e.target.value
  }
  return { inputValue, handleInputValueChange}
}

const app = Vue.createApp({
  setup() {
    /*
      \u5167\u5BB9\u53EF\u5206\u70BA\u5169\u584A\u529F\u80FD\uFF0C\u5C07\u529F\u80FD\u5206\u958B\u4EE5\u65B9\u4FBF\u7DAD\u8B77
      1.\u5C0D\u65BC\u5217\u8868\u64CD\u4F5C\u529F\u80FD\u9032\u884C\u5C01\u88DD\uFF1A\u5217\u8868\u5167\u5BB9\u8207\u52A0\u5165\u5217\u8868\u529F\u80FD
      2.\u5C0D\u65BC\u8F38\u5165\u6846\u64CD\u4F5C\u529F\u80FD\u9032\u884C\u5C01\u88DD\uFF1A\u8F38\u5165\u6846\u5167\u5BB9\u8207\u5167\u5BB9\u76E3\u807D\u529F\u80FD
    */
    // 1.\u5217\u8868\u64CD\u4F5C\u529F\u80FD
    const { list, addItemToList } = listRelativeEffect();
    // 2.\u8F38\u5165\u6846\u64CD\u4F5C\u529F\u80FD
    const { inputValue, handleInputValueChange} = inputRelativeEffect();
    return {
      list, addItemToList,
      inputValue, handleInputValueChange
    }
  },
  // :value="inputValue" \u6539\u70BA v-model="inputValue" \u53EF\u4E0D\u4F7F\u7528 handleInputValueChange \u65B9\u6CD5
  template: \`
    <div>
      <div>
        <input :value="inputValue" @input="handleInputValueChange" />
        <button @click="addItemToList(inputValue)">\u63D0\u4EA4</button>
      </div>
      <ul>
        <li v-for="(item, index) in list" :key="index">{{item}}</li>
      </ul>
    </div>
  \`,
});

const vm = app.mount('#root');
\`\`\`

## computed \u65B9\u6CD5\u751F\u6210\u8A08\u7B97\u5C6C\u6027
- \`\`\`computed\`\`\`\uFF1A\u82E5\u8CC7\u6599\u4F9D\u8CF4\u65BC\u5176\u4ED6\u6578\u64DA\uFF0C\u5247\u8A2D\u8A08\u70BA \`\`\`computed\`\`\`\uFF0C\u4E26\u6703\u9032\u884C\u7DE9\u5B58
- \u65B9\u6CD5\u5167\u6703\u81EA\u52D5\u76E3\u6E2C\u8CC7\u6599\u662F\u5426\u6539\u8B8A
- \u7BC4\u4F8B
  \`\`\`js
  const app = Vue.createApp({
    setup() {
      const { reactive, computed } = Vue;
      const countObj = reactive({ count: 0});
      const handleClick = () => {
        countObj.count += 1;
      }

      /*
        // \u4E00\u822C\u4F7F\u7528\u65B9\u5F0F
        let countAddFive = computed(() => {
            return countObj.count + 5;
        })
      */
      // \u4F7F\u7528 get & set \u65B9\u5F0F
      let countAddFive = computed({
        get: () => {
          console.log('get!')
          return countObj.count + 5;
        },
        // \u7576\u4F7F\u7528 countAddFive.value = 100\uFF0Cparam \u5C31\u6703\u53D6\u5230 countAddFive.value \u7684\u503C
        set: (param) => {
          console.log('set!')
          countObj.count = param - 5;
        }
      })

      setTimeout(() => {
        countAddFive.value = 100;
      }, 3000)

      return { countObj, countAddFive, handleClick }
    },
    template: \`
      <div>
        <span @click="handleClick">{{countObj.count}}</span> -- {{countAddFive}}
      </div>
    \`,
  });

  const vm = app.mount('#root');
  \`\`\`

## nextTick
- \`\`\`nextTick\`\`\` \u6703\u5728 \`\`\`DOM\`\`\` \u66F4\u65B0\u6E32\u67D3\u5B8C\u6210\u5F8C\u57F7\u884C
- \u901A\u5E38\u7528\u65BC \`\`\`DOM\`\`\` \u975E\u540C\u6B65\u66F4\u65B0\u4EE5\u63D0\u5347\u6548\u80FD
- \`Vue2\` \u6709\u6642\u6703\u6293\u53D6\u4E0D\u5230 \`refs\`\uFF0C\u5EFA\u8B70\u6539\u7528\u751F\u547D\u9031\u671F \`updated\` 
- \u7BC4\u4F8B
  \`\`\`js
  export default {
    name: 'app',
    data() {
        return {
          list: ['a', 'b', 'c']
        }
    },
    methods: {
      addItem() {
          this.list.push(\`\${Date.now()}\`)
          this.list.push(\`\${Date.now()}\`)
          this.list.push(\`\${Date.now()}\`)

          // 1. \u7570\u6B65\u6E32\u67D3\uFF0C$nextTick \u6703\u7B49\u5F85 DOM \u6E32\u67D3\u5B8C\u518D\u56DE\u8ABF
          // 2. \u5982\u4E0A\u9762\u5C0D data \u9032\u884C\u591A\u6B21\u4FEE\u6539\uFF0C\u6703\u5148\u505A\u6574\u5408\u518D\u9032\u884C\u9801\u9762\u6E32\u67D3\uFF0C\u6E32\u67D3\u5B8C\u624D\u6703\u8ABF\u7528nextTick
          this.$nextTick(() => {
            // \u5982\u679C\u6C92\u7528 nextTick \u5247"\u4E0D\u6703\u99AC\u4E0A"\u5C07\u65B0\u52A0\u5165\u7684\u9805\u7B97\u9032\u53BB\uFF0C\u56E0\u70BA DOM \u9084\u672A\u6E32\u67D3
            // \u7372\u53D6 DOM \u5143\u7D20(ul1 \u5C0D\u61C9 <ul ref="ul1">)
            const ulElem = this.$refs.ul1
            console.log( ulElem.childNodes.length )// 6\u30019\u300112...
          })
      }
    }
  }
  \`\`\`
- setup \u7BC4\u4F8B\uFF0C\u65BC \`onUpdated\` \u4E4B\u5F8C\u89F8\u767C
  \`\`\`html
  <template>
    <div @click="handleClick">click</div>
    <ul ref="test" >
      <li v-for="item in list">{{item}}</li>
    </ul>
  </template>

  <script>
  export default {
    name: 'App',
    setup() {
      const { ref, reactive, nextTick } = Vue;
      // \u5C0D\u61C9 ref="test"
      const test = ref(null)
      const list = reactive(['a', 'b', 'c'])
      
      const handleClick = () => {
        list.push(\`\${Date.now()}\`)
        list.push(\`\${Date.now()}\`)
        list.push(\`\${Date.now()}\`)
        nextTick(() => {
          console.log( test.value.childNodes.length )// 8\uFF1A(NodeList(8) [text, li, li, li, li, li, li, text])
        })
        // \u82E5\u7121\u4F7F\u7528 nextTick \u5247\u7372\u53D6\u672A\u66F4\u65B0\u7BC0\u9EDE
        console.log( test.value.childNodes.length )// 5
      }
      // \u9808\u8FD4\u56DE test \u624D\u80FD\u6B63\u5E38\u6293\u53D6 DOM \u7BC0\u9EDE
      return { name, list, test, handleClick }
    }
  }
  <\/script>
  \`\`\`

## watch \u8207 watchEffect
- \`\`\`watch\`\`\`\uFF1A\u82E5\u9700\u8981\u5728\u67D0\u500B\u6578\u64DA\u8B8A\u5316\u6642\u505A\u4E00\u4E9B\u4E8B\u60C5\uFF0C\u5247\u4F7F\u7528 \`\`\`watch\`\`\` \u4F86\u89C0\u5BDF\u9019\u500B\u6578\u64DA\u8B8A\u5316
  - \u542B\u6709\u7B2C\u4E8C\u500B\u53C3\u6578\uFF0C\u53EF\u4EE5\u8A2D\u5B9A\u5E38\u7528\u9078\u9805\uFF0C\u5982\uFF1A\u7ACB\u5373\u57F7\u884C\uFF1A\`\`\`immediate\`\`\`\u3001\u6DF1\u5EA6\u76E3\u6E2C\uFF1A\`\`\`deep\`\`\`
- \`\`\`watchEffect\`\`\`\uFF1A\u7121\u9808\u50B3\u76E3\u807D\u7684\u53C3\u6578\uFF0C\u53EA\u9700\u50B3\u905E\u4E00\u500B\u56DE\u8ABF\u51FD\u6578\uFF0C\u6703\u81EA\u52D5\u611F\u77E5\u4EE3\u78BC\u4F9D\u8CF4\uFF0C\u6578\u64DA\u8B8A\u5316\u6642\u57F7\u884C\u88E1\u9762\u7684\u4EE3\u78BC
- \`\`\`watch\`\`\` \u8207 \`\`\`watchEffect\`\`\` \u6703\u56DE\u50B3\u7528\u4F86\u505C\u6B62\u76E3\u807D\u7684\u51FD\u6578\uFF0C\u53EF\u5132\u5B58\u7528\u4F86\u505C\u6B62\u76E3\u807D\uFF0C\u5982\uFF1A
  \`\`\`js
  const stop = watchEffect(() => {
    // 5\u79D2\u5F8C\u505C\u6B62\u5075\u807D
    setTimeout(() => {
      stop();
    }, 5000)
  })
  \`\`\`
- \u9700\u6CE8\u610F \`\`\`watch\`\`\` \u8207 \`\`\`watchEffect\`\`\` \u6703\u93C8\u63A5\u5230\u7D44\u4EF6\u7684\u751F\u547D\u9031\u671F\uFF0C\u4E26\u5728\u7D44\u4EF6\u5378\u8F09\u6642\u81EA\u52D5\u505C\u6B62
- \`\`\`ref\`\`\` \u4F7F\u7528\u65B9\u5F0F
  - \u901A\u5E38\u6703\u4F7F\u7528 \`\`\`watch\`\`\` \u4E0D\u4F7F\u7528  \`\`\`watchEffect\`\`\`
  - \u76E3\u807D\u55AE\u500B\u503C\u7BC4\u4F8B
    \`\`\`js
    const count = ref(0)
    watch(count, (count, prevCount) => {
      /* ... */
    })
    \`\`\`
  - \u76E3\u807D\u591A\u500B\u503C\u7BC4\u4F8B
    \`\`\`js
    const firstName = ref('')
    const lastName = ref('')

    watch([firstName, lastName], (newValues, prevValues) => {
      console.log(newValues, prevValues)
    }
    // ,{ flush: 'sync' } 
    )
    // \u6B63\u5E38\u66F4\u65B0\u8F38\u51FA
    firstName.value = 'John' // logs: ["John", ""] ["", ""]
    lastName.value = 'Smith' // logs: ["John", "Smith"] ["John", ""]
    /*
      \u5728\u6A21\u677F\u89F8\u767C\u8A72\u51FD\u6578\u66F4\u65B0\u5F8C\u8F38\u51FA(watch\u53EA\u6703\u57F7\u884C\u4E00\u6B21)
      \u82E5\u8981\u540C\u6B65\u6B63\u5E38\u4E00\u4E00\u8F38\u51FA\u5247\u53EF\u5728 watch \u7B2C\u4E8C\u53C3\u6578\u586B\u4E0A { flush: 'sync' } 
      \u6216\u5728\u57F7\u884C\u51FD\u6578\u5167\u7A7F\u63D2 await nextTick()
      \u4E0B\u9762\u6703\u6253\u5370 ["John", "Smith"] ["", ""]
    */
    const changeValues = () => {
      firstName.value = 'John'
      // await nextTick()
      lastName.value = 'Smith'
    }
    \`\`\`
- \`\`\`reactive\`\`\` \u4F7F\u7528\u65B9\u5F0F
  - \`\`\`watch\`\`\`
    \`\`\`js
    // \u76E3\u807D\u5C0D\u8C61\u55AE\u500B\u5C6C\u6027(\u82E5\u4F7F\u7528 reactive \u5247\u9808\u7528 getter \u65B9\u5F0F\u56DE\u50B3\uFF0C\u5982\uFF1A() => nameObj.name )
    const nameObj = reactive({ name: 'ming', englishName: 'test' })
    watch(() => nameObj.name, (curName, prevName) => {
      console.log('watch', curName, prevName);
    })

    // \u53EF\u4EE5\u540C\u6642\u76E3\u807D\u591A\u500B\u5C0D\u8C61\u5C6C\u6027\u8B8A\u5316
    watch([() => nameObj.name, () => nameObj.englishName], ([curName, curEng], [prevName, preEng]) => {
      console.log('watch', curName, prevName, '---', curEng, preEng);
    })

    // \u76E3\u6E2C\u6574\u500B\u5C0D\u8C61(\u56E0\u70BA\u5C0D\u8C61\u70BA\u5F15\u7528\u985E\u578B\u6240\u4EE5 curName = prevName)
    // immediate\uFF1A\u7ACB\u5373\u6267\u884C\uFF0C\u9810\u8A2D\u70BAfalse
    // deep\uFF1A\u7576\u89C0\u5BDF\u503C\u7684\u7279\u6027\u70BA call by reference  \u6642\uFF0C\u9700\u8A2D\u5B9A\u70BA true\uFF0C\u544A\u77E5\u9700\u6DF1\u5EA6\u89C0\u5BDF\u3002\u5426\u5247\u6703\u56E0\u70BA\u7279\u6027\u95DC\u4FC2\uFF0C\u7121\u6CD5\u89F8\u767C\u76E3\u807D\u5668\u3002
    watch(() => nameObj, (curName, prevName) => {
      console.log('watch', curName, prevName);
    }, { immediate: true, deep: true })
    \`\`\`
  - \`\`\`watchEffect\`\`\`
    \`\`\`js
    const nameObj = reactive({ name: 'ming', englishName: 'test' })
    // \u7121\u9808\u50B3\u76E3\u807D\u7684\u5167\u5BB9\uFF0C\u53EA\u9700\u50B3\u905E\u4E00\u500B\u56DE\u8ABF\u51FD\u6578\uFF0C\u6703\u81EA\u52D5\u611F\u77E5\u4EE3\u78BC\u4F9D\u8CF4\uFF0C\u6578\u64DA\u8B8A\u5316\u6642\u57F7\u884C\u88E1\u9762\u7684\u4EE3\u78BC
    const stop = watchEffect(() => {
      console.log(nameObj.name);
      console.log(nameObj.englishName);
      // watch \u8207 watchEffect \u90FD\u53EF\u4EE5\u5B58\u653E\u56DE\u50B3\u503C\uFF0C\u4E26\u4F7F\u7528\u56DE\u50B3\u503C\u505C\u6B62\u5075\u807D
      // 5\u79D2\u5F8C\u505C\u6B62\u5075\u807D
      setTimeout(() => {
        stop();
      }, 5000)
    })
    \`\`\`

## setup \u5167\u7684 ref\u3001provide\u3001inject
- \u7528\u6CD5\u4E0D\u540C\u4F46\u529F\u80FD\u76F8\u540C\uFF0C\u53EF\u53C3\u8003\u9019\u7BC7\uFF1A[ref \u8207 provide/inject](#user-content-ref-provide-inject)
- \`\`\`provide\`\`\` \u8207 \`\`\`inject\`\`\` \u7BC4\u4F8B
  \`\`\`js
  const app = Vue.createApp({
    setup() {
      const { provide, ref, readonly } = Vue;
      // \u63D0\u4F9B\u5C6C\u6027\u7D66\u5B50\u7D44\u4EF6
      const name = ref('ming');
      // \u8A2D\u5B9A\u5B50\u7D44\u4EF6\u7121\u6CD5\u76F4\u63A5\u4FEE\u6539\u5C6C\u6027
      provide('name', readonly(name));
      // \u7D66\u4E88\u5B50\u7D44\u4EF6\u65B9\u6CD5\u53EF\u4EE5\u4FEE\u6539\u5C6C\u6027
      provide('changeName', (value) => {
        name.value = value;
      });
      return { }
    },
    template: \`
      <div>
        <child />
      </div>
    \`,
  });

  app.component('child', {
    setup() {
      const { inject } = Vue;
      // \u5229\u7528 inject \u5C07\u7236\u7D44\u4EF6\u5C6C\u6027\u5E36\u5165\u5B50\u7D44\u4EF6
      const name = inject('name');
      // \u5229\u7528 inject \u5C07\u7236\u7D44\u4EF6\u65B9\u6CD5\u5E36\u5165\u5B50\u7D44\u4EF6
      const changeName = inject('changeName');
      // \u56E0\u70BA\u5B50\u7D44\u4EF6\u7121\u6CD5\u76F4\u63A5\u66F4\u6539\u5C6C\u6027\uFF0C\u5247\u900F\u904E\u7236\u7D44\u4EF6\u7D66\u4E88\u7684\u65B9\u6CD5\u4FEE\u6539\u5C6C\u6027
      const handleClick = () => {
        changeName('lee');
      }
      return { name, handleClick }
    },
    template: '<div @click="handleClick">{{name}}</div>'
  })
  \`\`\`
- \`\`\`ref\`\`\` \u7372\u53D6\u771F\u5BE6 DOM \u7BC0\u9EDE\u7BC4\u4F8B
  \`\`\`js
  const app = Vue.createApp({
    setup() {
      const { ref, onMounted } = Vue;
      // 2.\u8A2D\u5B9A ref \u88E1\u9762\u586B\u7A7A\uFF0C\u4E26\u5C07\u5E38\u6578\u540D\u5B57\u8A2D\u5B9A\u8207"\u6293\u53D6 DOM \u7BC0\u9EDE\u7684\u540D\u5B57(hello)"\u4E00\u6A23
      const hello = ref(null);
      onMounted(() => {
        // 3.\u900F\u904E .value \u7684\u65B9\u5F0F\u53D6\u5F97dom
        console.log(hello.value);// <div>hello world</div>
      })
      return { hello }
    },
    // 1.\u5148\u5B9A\u7FA9\u6293\u53D6dom\u7BC0\u9EDE\u7684\u540D\u5B57 hello
    template: \`
      <div>
        <div ref="hello">hello world</div>
      </div>
    \`,
  });

  const vm = app.mount('#root');
  \`\`\`

## .sync \u4FEE\u9970\u7B26\u4F7F\u7528\u65B9\u6CD5
- \u7C7B\u4F3C\u4E8E \`eventBus\` \u53D1\u5E03\u4E0E\u8BA2\u9605\u7684\u65B9\u5F0F\uFF0C\u5F53\u5B50\u4F7F\u7528 \`emit\` \u8981\u6C42\u4FEE\u6539\u65F6\u4F7F\u7528
- \u82E5\u4E0D\u4F7F\u7528 \`.sync\`
  - \u5B50\u7EC4\u4EF6\u89E6\u53D1\u4E8B\u4EF6\uFF0C\u4E8B\u4EF6\u540D\u683C\u5F0F\u5FC5\u987B\u662F \`update:propName\` \uFF0C\u7528 \`$emit\` \u51FD\u6570\u89E6\u53D1
    \`\`\`txt
    //newTitle\u5C31\u662F\u4F60\u60F3\u8981\u4FEE\u6539props\u6570\u636E\u4FEE\u6539\u540E\u7684\u503C
    this.$emit('update:title', newTitle)
    \`\`\`
  - \u7236\u7EC4\u4EF6\u53EF\u4EE5\u76D1\u542C\u90A3\u4E2A\u4E8B\u4EF6\u5E76\u6839\u636E\u9700\u8981\u66F4\u65B0\u4E00\u4E2A\u672C\u5730\u7684\u6570\u636E\u5C5E\u6027
    \`\`\`txt
    <myconponent :title="Ptitle" @update:title="Ptitle = $event" ></myconponent>
    //\u5728\u7236\u7EC4\u4EF6\u4E2D\u76D1\u542C\u8BE5\u4E8B\u4EF6\uFF0C\u8BE5\u4E8B\u4EF6\u89E6\u53D1\u540E\u4F20\u9012\u7684\u503C\u4EE5 $event \u63A5\u6536\uFF0C$event === newTitle ,Ptitle\u662F\u7236\u7EC4\u4EF6\u7684\u6570\u636E
    \u6216\u8005\u662F\u5B9A\u4E49\u7684\u63A5\u53D7\u51FD\u6570\u7684\u53C2\u6570

    <myconponent :title="Ptitle" @update:title="val => Ptitle = val" ></myconponent>
    //\u8FD9\u65F6\u63A5\u6536\u7684\u503C\u4F5C\u4E3A\u51FD\u6570\u7684\u53C2\u6570
    \`\`\`
- \u4F7F\u7528 \`.sync\`
  - \u5B50\u7EC4\u4EF6(\u4E00\u6837)
    \`\`\`txt
    this.$emit('update:title', newTitle)
    \`\`\`
  - \u7236\u7EC4\u4EF6
    \`\`\`txt
    <myconponent :title.sync="Ptitle"></myconponent> //\u7B49\u540C\u4E8E\u4E0A\u9762\u7684\u4F20\u503C\u5E76\u76D1\u542C    
    \`\`\`

## \u5E38\u898B\u6027\u80FD\u512A\u5316\u65B9\u5F0F
- \u5408\u7406\u4F7F\u7528 \`v-show\`\u3001\`v-if\`
- \u5408\u7406\u4F7F\u7528 \`computed\`
- \`v-for\` \u6642\u52A0 \`key\` \u907F\u514D\u8207 \`v-if\` \u4E00\u540C\u4F7F\u7528
- \u81EA\u5B9A\u7FA9\u4E8B\u4EF6\u3001\`DOM\` \u4E8B\u4EF6\u5373\u6642\u92B7\u6BC0
- \u5408\u7406\u4F7F\u7528\u7570\u6B65\u7D44\u4EF6
- \u5408\u7406\u4F7F\u7528 \`keep-alive\` \u7D44\u4EF6
- \u8CC7\u6599\u7D50\u69CB\u5C64\u7D1A\u52FF\u592A\u6DF1\uFF0C\u8207 \`diff\` \u7B97\u6CD5\u3001\u97FF\u61C9\u5F0F\u76F8\u95DC
`;export{n as default};

const n=`## Pinia \u7B46\u8A18
<a id="user-content-top"></a>

### \u76EE\u9304
<details open>
<summary style="cursor: pointer;">&nbsp;\u76EE\u9304\u6E05\u55AE </summary>

- [\u57FA\u672C\u4ECB\u7D39\u8207\u5B89\u88DD](#user-content-pinia-introduce)
- [State](#user-content-pinia-state)
- [Getters](#user-content-pinia-getters)
- [Actions](#user-content-pinia-actions)

</details>

<hr id="user-content-pinia-introduce" style="height: 2px;">

#### <a href="#user-content-top">\u57FA\u672C\u4ECB\u7D39\u8207\u5B89\u88DD</a>
- \u4EC0\u9EBC\u662F \`\`\`Pinia\`\`\` ?\uFF1A
  \`\`\`txt
  \u5728 Vue3 \u4F34\u96A8\u8457 Composition API \u8A95\u751F\u4E4B\u5F8C\uFF0C\u8A2D\u8A08\u4E86\u5168\u65B0\u7684 Vuex: Pinia\uFF0C\u4E5F\u5C31\u662F Vuex 5
  Pinia \u662F Vue \u7684\u5B58\u5132\u5EAB\uFF0C\u8207 Vuex \u4E00\u6A23\u5141\u8A31\u8DE8\u7D44\u4EF6/\u9801\u9762\u5171\u4EAB\u72C0\u614B
  \`\`\`
- \u5B89\u88DD\u65B9\u5F0F\u8ACB\u67E5\u770B[\u5B98\u7DB2](https://pinia.vuejs.org/getting-started.html#installation)
- \u8207 \`Vuex\` \u6BD4\u8F03\uFF1A
  - \u540C\u6642\u652F\u63F4 \`Composition API\` \u548C \`Options API\`
  - \u53BB\u6389 \`mutations\`\uFF0C\u53EA\u6709 \`state\`\u3001\`getters\` \u8207 \`actions\`
  - \u4E0D\u652F\u6301\u5D4C\u5957\u6A21\u584A\uFF0C\u901A\u904E\u7D44\u5408\u547D\u540D \`store\` \u6765\u4EE3\u66FF
  - \u66F4\u5B8C\u5584\u7684 \`Typescript\` \u652F\u6301
  - \u6E05\u6670\u7684\u4EE3\u78BC\u62C6\u5206
- \`App\` \u52A0\u8F09 \`Pinia\` \u65B9\u6CD5\uFF1A
  - \`VueCLI\`\uFF1A
    \`\`\`js
    import { createApp } from 'vue'
    import App from './App/App.vue'
    import { createPinia } from 'pinia'

    createApp(App).use(createPinia())
    \`\`\`
  - \`Vue2\`\uFF1A
    \`\`\`js
    import { createPinia, PiniaVuePlugin } from 'pinia'

    Vue.use(PiniaVuePlugin)
    const pinia = createPinia()

    new Vue({
      el: '#app',
      // other options...
      // ...
      // note the same \`pinia\` instance can be used across multiple Vue apps on
      // the same page
      pinia,
    })
    \`\`\`
    
<hr id="user-content-pinia-state" style="height: 2px;">

#### <a href="#user-content-top">State</a>
- \u901A\u5E38 \`state\` \u4EE3\u8868\u61C9\u7528\u7684\u8CC7\u6599\u72C0\u614B\uFF0C\u5982\uFF1A\u4F7F\u7528\u8005\u8CC7\u6599\u5C0D\u8C61
- \u4F7F\u7528\u65B9\u5F0F\uFF1A
  - \u5275\u5EFA \`store\`\uFF0C\u82E5\u6709\u591A\u500B \`store\` \u5B98\u65B9\u5EFA\u8B70\u5BEB\u5728\u4E0D\u540C\u6587\u4EF6\u88E1
    \`\`\`js
    import { defineStore } from 'pinia'

    // \u8FD4\u56DE\u4E00\u500B\u540D\u70BA user(\u552F\u4E00) \u7684 store
    export const useStore = defineStore('test', {
      // \u4EE5\u51FD\u6578\u5F62\u5F0F\u8FD4\u56DE\u5C0D\u8C61
      state: () => {
        return {
          // \u5C6C\u6027\u5C07\u81EA\u52D5\u63A8\u65B7\u4ED6\u5011\u7684\u985E\u578B
          name: 'ming',
          doubleCount: 0,
          isAdmin: true,
        }
      },
    })
    \`\`\`
  - \u4F7F\u7528 \`store\`
    \`\`\`js
    // \u52A0\u5165\u6307\u5B9A\u7684 store
    import { useStore } from '@/stores/test'
    import { storeToRefs } from 'pinia'

    export default defineComponent({
      setup() {
        // \u5BE6\u4F8B\u5316 store \u5C0D\u8C61
        const store = useStore()
        // \u521D\u59CB\u5316 store \u5C0D\u8C61\uFF0C\u8FD4\u56DE\u8CC7\u6599\u521D\u59CB\u72C0\u614B
        store.$reset()
        // \u82E5\u8981\u89E3\u69CB store \u5C0D\u8C61\u53D6\u51FA\u591A\u500B\u5C6C\u6027\uFF0C\u5247\u9700\u4F7F\u7528 storeToRefs
        const { name, doubleCount } = storeToRefs(store)
        // \u82E5\u76F4\u63A5\u89E3\u69CB\uFF0C\u5247\u5C6C\u6027\u503C\u4FDD\u6301\u4E0D\u8B8A
        const { isAdmin } = store
        // \u53EF\u4EE5\u76F4\u63A5\u8CE6\u503C\u7D66 store \u5C6C\u6027(\u5EFA\u8B70\u4F7F\u7528 actions \u4FEE\u6539)
        store.name = 'mingming'

        return {
          // \u53EF\u4EE5\u76F4\u63A5\u8FD4\u56DE store \u5C0D\u8C61
          store,
          name,
          doubleCount,
          // \u4F7F\u7528 computed \u76E3\u807D\u5C6C\u6027\u8B8A\u5316
          isAdmin: computed(() => store.isAdmin),
        }
      },
    })
    \`\`\`

<hr id="user-content-pinia-getters" style="height: 2px;">

#### <a href="#user-content-top">Getters</a>
- \u4F7F\u7528\u5834\u666F\uFF1A\u9700\u8981\u5C0D\u8CC7\u6599\u72C0\u614B\u505A\u4FEE\u98FE\uFF0C\u4E26\u4E14\u591A\u500B\u7D44\u4EF6\u9700\u8981\u4F7F\u7528
  - \u5982\u4F7F\u7528\u8005\u7A31\u547C\uFF1A\u6B61\u8FCE\uFF0C\u67D0\u67D0\u67D0 \u6539\u6210 \u60A8\u597D\uFF0C\u67D0\u67D0\u67D0
- \u4F7F\u7528\u65B9\u5F0F\uFF1A
  - \u5275\u5EFA \`store\`
    \`\`\`js
    import { defineStore } from 'pinia'

    export const useCounterStore = defineStore('counter', {
      state() {
        return { name: 'ming'}
      },
      getters: {
        // \u9ED8\u8A8D\u53C3\u6578\u70BA store \u672C\u8EAB
        testOne: (status) => {
          return \`\u60A8\u597D\uFF0C\${status.ming}\`
        },
        /*
          \u6CE8\u610F\uFF0C\u4F7F\u7528 getters \u6642\u6703\u8FD4\u56DE\u8A72\u5C6C\u6027\u7684\u8FD4\u56DE\u503C\uFF0C\u5982\uFF1A
          this.testOne: '\u60A8\u597D\uFF0Cming'\uFF0C\u800C\u975E\u51FD\u6578\u672C\u9AD4
        */
        testTwo() {
          return \`\${this.testOne} \u5927\u5927\`
        },
        // \u82E5\u9700\u50B3\u5165\u53C3\u6578\u5247\u9700\u5982\u6B64\u8A2D\u8A08
        testThree() {
          return (param) => \`\${this.testOne} \${param}\`
        }
      }
    })
    \`\`\`
  - \u4F7F\u7528 \`store\`
    \`\`\`js
    import { useCounterStore } from './store/counter'
    export default {
      setup() {
        const counter = useCounterStore()
        const test = counter.testThree('\u5927\u5927\u5927')
        console.log(test)// \u60A8\u597D\uFF0Cming \u5927\u5927\u5927
        return {
          counter,
          test
        }
      }
    }
    \`\`\`

<hr id="user-content-pinia-actions" style="height: 2px;">

#### <a href="#user-content-top">Actions</a>
- \u4E3B\u8981\u7528\u9014\uFF1A\u540C\u6B65\u6216\u7570\u6B65\u4FEE\u6539 \`store\` \u88E1\u7684 \`State\`
- \u8207 \`Vuex\` \u4E0D\u540C\u7684\u662F\uFF0C\`Pinia\` \u7684 \`Actions\` \u53EF\u4EE5\u8655\u7406\u540C\u6B65\u8207\u7570\u6B65
- \u4F7F\u7528\u65B9\u5F0F\uFF1A
  - \u5275\u5EFA \`store\`
    \`\`\`js
    import { defineStore } from 'pinia'

    export const useMainStore = defineStore('main', {
      state: () => ({
        counter: 0,
      }),
      actions: {
        // \u4F7F\u7528\u540C\u6B65
        increment() {
          this.counter++
        },
        randomizeCounter() {
          // \u547C\u53EB\u5176\u4ED6\u7684 action
          this.increment()
          this.counter = Math.round(100 * Math.random())
        },
        // \u4F7F\u7528\u7570\u6B65
        async registerUser(user, password) {
          try {
            this.userData = await api.post({ user, password })
            showTooltip(\`Welcome back \${this.userData.name}!\`)
          } catch (error) {
            showTooltip(error)
            // let the form component display the error
            return error
          }
        },
      },
    })
    \`\`\`
  - \u4F7F\u7528 \`store\`
    \`\`\`js
    import { useMainStore } from './store/main'

    export default {
      setup() {
        const main = useMainStore()
        // \u547C\u53EB store \u88E1\u7684 actions
        main.randomizeCounter()
        await main.registerUser(user, passwd)
        return {}
      }
    }
    \`\`\`

`;export{n as default};

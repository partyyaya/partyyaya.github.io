import{m as f}from"./markdown-it-37da2622.js";import{H as y}from"./highlight.js-867ee1b1.js";import{_ as b,L as k,t,s as l,u as x}from"../js/index-3fe1e07a.js";import{m as w}from"./mdCopy-ec244029.js";import{r as e,o as j,q as V,k as o,l as c,t as C,v as p,x as d,y as A,F as M}from"./@vue-50cf967a.js";import"./clipboard-12221ac4.js";import"./entities-96bc23f9.js";import"./uc.micro-174787a3.js";import"./mdurl-4b1f5cdc.js";import"./linkify-it-59decb82.js";import"./punycode-f726180d.js";import"./vue-i18n-2d92e57f.js";import"./@intlify-f70c4c62.js";import"./vue-router-339d5de3.js";/* empty css                      */import"./lodash-acc62a92.js";const O=`## Vue.js \u7B46\u8A18
<a id="user-content-top"></a>

### \u76EE\u9304
<details>
<summary style="cursor: pointer;">&nbsp;\u57FA\u672C\u4F7F\u7528 </summary>

- [\u57FA\u672C\u4ECB\u7D39\u8207\u5B89\u88DD](#user-content-introduce)
- [\u7D44\u4EF6\u7684\u57FA\u790E\u6982\u5FF5](#user-content-components-basic-concept)
- [\u4E86\u89E3\u751F\u547D\u9031\u671F](#user-content-lifecycle)
- [\u5E38\u7528\u6A21\u677F\u8A9E\u6CD5](#user-content-common-template-syntax)
- [methods\u3001computed\u3001watcher](#user-content-methods-computed-watcher)
- [CSS\u5E38\u7528\u7D81\u5B9A\u65B9\u6CD5](#user-content-css-bind)
- [\u689D\u4EF6\u6E32\u67D3](#user-content-if)
- [\u5FAA\u74B0\u6E32\u67D3](#user-content-for)
- [\u4E8B\u4EF6\u7D81\u5B9A](#user-content-event)
- [\u8868\u55AE\u96D9\u5411\u7D81\u5B9A](#user-content-form-bind)

</details>
<details>
<summary style="cursor: pointer;">&nbsp;\u9032\u968E\u4F7F\u7528(\u4E00) </summary>

- [\u5C40\u90E8\u8207\u5168\u5C40\u7D44\u4EF6](#user-content-local-global-components)
- [\u7D44\u4EF6\u9593\u50B3\u503C\u8207\u6548\u9A57](#user-content-passbyvalue-validation)
- [\u55AE\u5411\u8CC7\u6599\u50B3\u8F38](#user-content-oneway-data-transfer)
- [\u7E7C\u627F\u5C6C\u6027](#user-content-inherit-property)
- [\u7236\u5B50\u7D44\u4EF6\u7684\u4E8B\u4EF6\u901A\u4FE1](#user-content-father-son-event-communication)
- [\u7236\u5B50\u7D44\u4EF6\u7684\u96D9\u5411\u7D81\u5B9A](#user-content-father-son-twoway-binding)
- [\u63D2\u69FD\u3001\u5177\u540D\u63D2\u69FD\u3001\u4F5C\u7528\u57DF\u63D2\u69FD](#user-content-slot)
- [\u52D5\u614B\u3001\u7570\u6B65\u7D44\u4EF6\u3001keep-alive \u4F7F\u7528](#user-content-dynamic-asynchronous-components)
- [ref \u8207 provide/inject](#user-content-ref-provide-inject)
- [\u7D44\u4EF6\u7684\u904E\u6E21\u8207\u52D5\u756B](#user-content-transition)

</details>
<details>
<summary style="cursor: pointer;">&nbsp;\u9032\u968E\u4F7F\u7528(\u4E8C) </summary>

- [Mixin \u4F7F\u7528](#user-content-mixin)
- [Directive \u81EA\u5B9A\u7FA9\u6307\u4EE4](#user-content-directive)
- [Teleport \u50B3\u9001\u9580](#user-content-teleport)
- [Plugin \u63D2\u4EF6](#user-content-plugin)
- [Rules \u6821\u9A57\u898F\u5247](#user-content-rules)
- [Setup \u8207 \u751F\u547D\u9031\u671F\u51FD\u6578](#user-content-setup)
- [ref\u3001reactive \u4F7F\u7528](#user-content-ref-reactive)
- [toRef\u3001context \u4F7F\u7528](#user-content-toref-context)
- [\u4F7F\u7528 Composition API \u958B\u767C TodoList](#user-content-compositionapi-todolist)
- [computed \u65B9\u6CD5\u751F\u6210\u8A08\u7B97\u5C6C\u6027](#user-content-computed-function)
- [nextTick](#user-content-nexttick)
- [watch \u8207 watchEffect](#user-content-watch-watcheffect)
- [setup \u5167\u7684 ref/provide/inject](#user-content-setup-ref-provide-inject)
- [\u5E38\u898B\u6027\u80FD\u512A\u5316\u65B9\u5F0F](#user-content-performance-optimization)

</details>
<details>
<summary style="cursor: pointer;">&nbsp;\u6DF1\u5165\u539F\u7406 </summary>

- [Object.defineProperty \u5BE6\u73FE\u97FF\u61C9\u5F0F](#user-content-object-defineproperty)
- [Virtual DOM - \u57FA\u672C\u4ECB\u7D39](#user-content-virtual-dom-introduce)
- [Virtual DOM - Snabbdom \u4F7F\u7528](#user-content-virtual-dom-snabbdom)
- [Virtual DOM - diff \u7B97\u6CD5](#user-content-virtual-dom-diff)
- [\u6A21\u677F\u7DE8\u8B6F - JS with \u8A9E\u6CD5](#user-content-template-with-syntax)
- [\u6A21\u677F\u7DE8\u8B6F - template compiler](#user-content-template-compiler)
- [\u7D44\u4EF6\u6E32\u67D3\u8207\u66F4\u65B0\u6D41\u7A0B](#user-content-component-render-update)
- [Proxy \u5BE6\u73FE\u97FF\u61C9\u5F0F](#user-content-proxy)
</details>

<hr id="user-content-introduce" style="height: 4px;">

#### <a href="#user-content-top" >\u57FA\u672C\u4ECB\u7D39\u8207\u5B89\u88DD</a>
- \u4EC0\u9EBC\u662F \`\`\`Vue.js\`\`\` ?\uFF1A\u4E00\u500B\u7528\u65BC\u69CB\u5EFA\u7528\u6236\u754C\u9762\u7684\u6F38\u9032\u5F0F\u6846\u67B6\u3002\u88AB\u8A2D\u8A08\u70BA\u53EF\u4EE5\u81EA\u5E95\u5411\u4E0A\u9010\u5C64\u61C9\u7528\uFF0C\u5176\u6838\u5FC3\u5EAB\u53EA\u95DC\u6CE8\u8996\u5716\u5C64
- \u5B89\u88DD\u4F7F\u7528\u65B9\u5F0F\u8ACB\u67E5\u770B[\u5B98\u7DB2](https://v3.cn.vuejs.org/guide/installation.html#%E5%AE%89%E8%A3%85)

<hr id="user-content-components-basic-concept" style="height: 2px;">

#### <a href="#user-content-top" >\u7D44\u4EF6\u7684\u57FA\u790E\u6982\u5FF5</a>
- \u904E\u53BB\u8207\u73FE\u5728\u7684\u7D44\u4EF6\u5316\u5DEE\u5225
  - \u904E\u53BB\u7684\u7D44\u4EF6\u5316\uFF1A\u901A\u5E38\u70BA\u975C\u614B\u6E32\u67D3\uFF0C\u9700\u4F9D\u8CF4\u64CD\u4F5C \`\`\`DOM\`\`\`
  - \u73FE\u5728\u7684\u7D44\u4EF6\u5316\uFF1A\u6578\u64DA\u9A45\u52D5\u8996\u5716\uFF0C\u66F4\u6539\u6578\u64DA\u5F8C\uFF0C \`\`\`Vue\u3001React\`\`\` \u518D\u6839\u64DA\u6578\u64DA\u6E32\u67D3\u8996\u5716
  - \u5DEE\u5225\uFF1A\u53EF\u8B93\u6211\u5011\u66F4\u95DC\u5FC3\u8CC7\u6599\u8207\u696D\u52D9\u908F\u8F2F\u554F\u984C\uFF0C\u4E0D\u518D\u983B\u7E41\u64CD\u4F5C \`\`\`DOM\`\`\`
- \u4EC0\u9EBC\u662F \`\`\`MVVM\`\`\` \u8A2D\u8A08\u6A21\u5F0F\uFF1A
  \`\`\`txt
  M  \u4EE3\u8868 Model     \u8CC7\u6599(data())
  V  \u4EE3\u8868 View      \u8996\u5716(template)
  VM \u4EE3\u8868 ViewModel \u8996\u5716\u6578\u64DA\u9023\u63A5\u5C64(vm)

  \u4EE5 Vue \u70BA\u7BC4\u4F8B\u8868\u793A MVVM\uFF1A 
  View(DOM) <-> ViewModel(Vue) <-> Model(\u8CC7\u6599:object\u6216plain)
    \u8996\u5716         \u76E3\u807D\u4E8B\u4EF6/\u6307\u4EE4       Vue\u7D44\u4EF6(Vuex)\u7684\u8CC7\u6599\u6A21\u578B
  \`\`\`
- \`\`\`Vue\`\`\` \u7C21\u6613\u7BC4\u4F8B
  \`\`\`js
  /*
    createApp \u5275\u5EFA\u4E00\u500B Vue \u61C9\u7528\u4E26\u5132\u5B58\u5230\u8A72\u8B8A\u91CF
    \u88E1\u9762\u53C3\u6578\u8868\u793A\u8A72\u61C9\u7528\u6700\u5916\u5C64\u7684\u7D44\u4EF6(createApp\u88E1\u9762\u7684object)\u5982\u4F55\u5C55\u793A
  */
  const app = Vue.createApp({
    data() {
      return {
        message: 'hello world'
      }
    },
    template: "<div>{{message}}</div>"
  });
  // vm \u4EE3\u8868\u7684\u5C31\u662F Vue \u61C9\u7528\u7684\u6839\u7D44\u4EF6
  const vm = app.mount('#root');
  // \u53EF\u85C9\u7531vm\u76F4\u63A5\u4FEE\u6539data\u88E1\u7684\u5C6C\u6027(vm\u6703\u5075\u6E2C\u5230\u4E26\u4FEE\u6539\u756B\u9762)
  vm.$data.message = "7777";
  \`\`\`

<hr id="user-content-lifecycle" style="height: 2px;">

#### <a href="#user-content-top" >\u4E86\u89E3\u751F\u547D\u9031\u671F</a>
- \u5B98\u7DB2\u55AE\u7D44\u4EF6[\u751F\u547D\u9031\u671F\u5716](https://v3.cn.vuejs.org/images/lifecycle.svg)
- \u5927\u81F4\u53EF\u5206\u70BA\u4E09\u500B\u968E\u6BB5
  - \u69CB\u5EFA\u968E\u6BB5\uFF1A\`\`\`beforeCreate(\u5275\u5EFA\u524D)\u3001created(\u5275\u5EFA\u5F8C)\`\`\`
  - \u6E32\u67D3\u66F4\u65B0\u968E\u6BB5\uFF1A\`\`\`beforeMount(\u6E32\u67D3\u524D)\u3001mounted(\u6E32\u67D3\u5F8C)\u3001beforeUpdate(\u66F4\u65B0\u524D)\u3001updated(\u66F4\u65B0\u5F8C)\`\`\`
  - \u5378\u8F09\u968E\u6BB5\uFF1A\`\`\`beforeUnmount(\u5378\u8F09\u524D)\u3001unmounted(\u5378\u8F09\u5F8C)\`\`\`
- \u4F55\u6642\u9808\u8981\u4F7F\u7528 \`beforeUnmount(\u5378\u8F09\u524D)\` \u6216 \`beforeDestroy\` \uFF1A
  - \u89E3\u9664\u81EA\u5B9A\u7FA9\u4E8B\u4EF6\uFF0C\u5982\uFF1A\`event.$off\`
  - \u6E05\u9664\u5B9A\u6642\u5668
  - \u89E3\u9664\u81EA\u5B9A\u7FA9 \`DOM\` \u4E8B\u4EF6\uFF0C\u5982\uFF1A\`window.scroll\`
- \u7236\u5B50\u7D44\u4EF6\u751F\u547D\u9031\u671F\u8AAA\u660E\uFF1A
  \`\`\`txt
  \u7C21\u55AE\u8AAA\u660E\uFF1A
  \u7236\u7D44\u4EF6"\u5275\u5EFA\u5B8C\u6210"\u4E26"\u958B\u59CB\u6E32\u67D3" > \u5B50\u7D44\u4EF6"\u5275\u5EFA\u4E26\u6E32\u67D3\u5B8C\u6210" > \u7236\u7D44\u4EF6"\u6E32\u67D3\u5B8C\u6210"
  \u5BE6\u969B\u65B9\u6CD5\u6D41\u7A0B\uFF1A
  parent beforeCeate -> parent created -> parent beforeMount -> child beforeCeate ->
  child created -> child beforeMount -> child mounted -> parent mounted -> 
  
  \u6848\u4F8B1\uFF1A\u5728\u5B50\u7D44\u4EF6"\u5728\u7236\u7D44\u4EF6\u672A\u6E32\u67D3\u5B8C\u6210"\u8CC7\u6599\u66F4\u65B0\u6642\uFF0C\u751F\u547D\u9031\u671F\u5982\u4E0B
  \u5B50\u7D44\u4EF6"\u958B\u59CB\u66F4\u65B0"\u6703\u5728\u7236\u7D44\u4EF6"\u6E32\u67D3\u5B8C\u6210"\u624D\u6703\u66F4\u65B0(\u56E0\u70BA\u5B50\u7D44\u4EF6\u8CC7\u6599\u672A\u8207\u7236\u7D44\u4EF6\u5171\u7528\uFF0C\u6240\u4EE5\u7236\u7D44\u4EF6\u4E0D\u6703\u66F4\u65B0)
  child beforeUpdate -> child updated

  \u6848\u4F8B2\uFF1A\u7236\u7D44\u4EF6\u8CC7\u6599\u66F4\u65B0\u6642\uFF0C\u751F\u547D\u9031\u671F\u5982\u4E0B
  \u7236\u7D44\u4EF6"\u958B\u59CB\u66F4\u65B0" > \u5B50\u7D44\u4EF6"\u66F4\u65B0\u5B8C\u6210" > \u7236\u7D44\u4EF6"\u66F4\u65B0\u5B8C\u6210"
  parent beforeUpdate -> child beforeUpdate -> child updated -> parent updated

  \u6848\u4F8B3:
  \u82E5\u7236\u7D44\u4EF6\u8981\u900F\u904Eapi\u53BB\u53D6\u5F97\u8CC7\u6599\u518D\u50B3\u7D66\u5B50\u7D44\u4EF6\u65B9\u6CD5\uFF1A
  \u5B50\u7D44\u4EF6\u52A0\u5165 watch \u76E3\u807D\u7236\u7D44\u4EF6\u50B3\u904E\u7684\u8CC7\u6599\u662F\u5426\u8B8A\u5316\u518D\u9032\u884C\u52D5\u4F5C
  \u4E26\u5728\u7236\u7D44\u4EF6\u6E32\u67D3\u5B8C\u6210 mounted \u52A0\u5165\u547C\u53EB api
  \`\`\`
- \u55AE\u7D44\u4EF6\u751F\u547D\u9031\u671F\u7BC4\u4F8B
  \`\`\`js
  // \u751F\u547D\u9031\u671F\u51FD\u6578\uFF1A\u5728\u7279\u5B9A\u6642\u523B\u6703\u57F7\u884C\u7684\u51FD\u6578
  const app = Vue.createApp({
    data() {
      return {
        message: 'hello world'
      }
    },
    // \u5BE6\u4F8B\u751F\u6210\u524D\u81EA\u52D5\u57F7\u884C
    beforeCreate() {
      console.log('beforeCreate')
    },
    // \u5BE6\u4F8B\u751F\u6210\u5F8C\u81EA\u52D5\u57F7\u884C
    created() {
      console.log('created')
    },
    // \u7D44\u4EF6\u5167\u5BB9\u88AB\u6E32\u67D3\u5230\u9801\u9762\u4E4B\u524D\u81EA\u52D5\u57F7\u884C\u7684\u51FD\u6578
    beforeMount() {
      // \u7121\u4EFB\u4F55\u5167\u5BB9
      console.log(document.getElementById('root').innerHTML, 'beforeMount')
    },
    // \u7D44\u4EF6\u5167\u5BB9\u88AB\u6E32\u67D3\u5230\u9801\u9762\u4E4B\u5F8C\u81EA\u52D5\u57F7\u884C\u7684\u51FD\u6578
    mounted() {
      // \u8F38\u51FA\u6E32\u67D3\u5F8C\u7684\u5167\u5BB9
      console.log(document.getElementById('root').innerHTML, 'mounted')
    },
    // \u7576\u8CC7\u6599\u767C\u751F\u8B8A\u5316\u6642\u7ACB\u5373\u81EA\u52D5\u57F7\u884C\u7684\u51FD\u6578
    beforeUpdate() {
      // \u6703\u5370\u51FA\u66F4\u65B0\u524D\u88E1\u9762\u7684\u5167\u5BB9
      console.log(document.getElementById('root').innerHTML, 'beforeUpdate');
    },
    // \u7576\u8CC7\u6599\u767C\u751F\u8B8A\u5316\uFF0C\u9801\u9762\u91CD\u65B0\u6E32\u67D3\u5F8C\uFF0C\u81EA\u52D5\u57F7\u884C\u7684\u51FD\u6578
    updated() {
      // \u6703\u5370\u51FA\u66F4\u65B0\u5F8C\u88E1\u9762\u7684\u5167\u5BB9
      console.log(document.getElementById('root').innerHTML, 'updated');
    },
    // \u7576 Vue \u61C9\u7528\u5931\u6548\u6642\uFF0C\u81EA\u52D5\u57F7\u884C\u7684\u51FD\u6578
    // \u53EF\u4EE5\u4F7F\u7528 app.unmount() \u9032\u884C\u6E2C\u8A66
    beforeUnmount() {
      // \u6703\u5370\u51FA\u5931\u6548\u524D\u88E1\u9762\u7684\u5167\u5BB9
      console.log(document.getElementById('root').innerHTML, 'beforeUnmount');
    },
    // \u7576 Vue \u61C9\u7528\u5931\u6548\u6642\uFF0C\u4E14 DOM \u5B8C\u5168\u92B7\u6BC0\u5F8C\uFF0C\u81EA\u52D5\u57F7\u884C\u7684\u51FD\u6578
    unmounted() {
      // \u6703\u5370\u51FA undefined
      console.log(document.getElementById('root').innerHTML, 'unmounted');
    },
  });
  const vm = app.mount('#root');
  \`\`\`

<hr id="user-content-common-template-syntax" style="height: 2px;">

#### <a href="#user-content-top" >\u5E38\u7528\u6A21\u677F\u8A9E\u6CD5</a>
- \`\`\`{{}}\`\`\`\uFF1A\u63D2\u503C\u8868\u9054\u5F0F\uFF0C\u5982\uFF1A\`\`\`template: '<div>{{content}}</div>'\`\`\`
- \`\`\`v-html\`\`\`\uFF1A\u82E5\u5B57\u4E32\u5305\u542Bhtml\u5143\u7D20\u6703\u89E3\u6790\u70BA\u5B57\u7B26\u5BE6\u9AD4\uFF0C\u9700\u4F7F\u7528 \`\`\`v-html\`\`\` \u9032\u884C\u89E3\u6790
  \`\`\`html
  <!-- html -->
  <div id="app">
      <div>{{img}}</div>
      <div v-html="img"></div>
  </div>

  <!-- js -->
  <script>
      new Vue({
        el: "#app",
        data: {
          img: "<img src='https://yourimage.png'>"
        }
      });
  <\/script>
  \`\`\`
- \`\`\`v-bind\`\`\`\uFF1A\u5C07\u6A19\u7C64\u5167\u90E8\u5C6C\u6027\u8207data\u88E1\u7684\u5C6C\u6027\u9032\u884C\u7D81\u5B9A\uFF0C\u53EF\u7C21\u5BEB\u6210 \`\`\`:\`\`\`\uFF0C\u5982\uFF1A\`\`\`:disabled="disabled"\`\`\`
- \`\`\`v-on\`\`\`\uFF1A\u70BA\u7279\u5B9A\u4E8B\u4EF6\u7D81\u5B9A\uFF0C\u53EF\u7C21\u5BEB\u6210 \`\`\`@\`\`\`\uFF0C\u5982\uFF1A\`\`\`@click="handleBtnClick"\`\`\`
- \`\`\`v-once\`\`\`\uFF1A\u53EA\u986F\u793A\u7B2C\u4E00\u6B21\u6E32\u67D3\u7684\u6548\u679C\uFF0C\u4E0D\u6703\u518D\u6B21\u6E32\u67D3
- \`\`\`v-if\`\`\`\uFF1A\u5224\u65B7\u8A72\u5143\u4EF6\u662F\u5426\u5B58\u5728\uFF0C\u5982\uFF1A\`\`\`v-if="isShow"\`\`\` 
  - \u82E5\u8A72\u5143\u4EF6\u5E38\u8B8A\u52D5\u5247\u5EFA\u8B70\u4F7F\u7528 \`\`\`v-show\`\`\`
- \u6578\u64DA\u63A7\u5236\u65B9\u6CD5\u65B9\u5F0F
  \`\`\`js
  /*
    \u6578\u64DA\u63A7\u5236\u4F7F\u7528\u65B9\u6CD5:
    @[event]="handleClick"(\u4F7F\u7528v-on\u4F5C\u7BC4\u4F8B)
    :[name]="message"
  */
  const app = Vue.createApp({
    data() {
      return {
        message: "hello world",
        show: false,
        event: 'click',
        name: 'title',
      }
    },
    methods: {
      handleClick() {
        alert('click')
      }
    },
    template: \`
      <div @[event]="handleClick"></div>
    \`
  });
  \`\`\`

<hr id="user-content-methods-computed-watcher" style="height: 2px;">

#### <a href="#user-content-top">methods\u3001computed\u3001watcher</a>
- \`\`\`methods\`\`\`\uFF1A\u4E00\u822C\u51FD\u6578\uFF0C\u53EA\u9700\u6CE8\u610F \`\`\`this\`\`\` \u6307\u5411
  \`\`\`js
  methods: {
    formatString(string) {
      return string.toUpperCase();
    },
    getTotal() {
      // \u9019\u908A\u7684this\u6703\u6307\u5411vue\u5BE6\u4F8B\uFF0C\u53EF\u76F4\u63A5\u53D6\u6578\u64DA(this.message)
      console.log(this) 
    },
    // \u7BAD\u982D\u51FD\u6578
    getOther:() => {
      // \u9019\u908A\u7684this\u6703\u6307\u5411window
      console.log(this)
    },
  },
  // \u53EF\u4EE5\u76F4\u63A5\u5728 {{}} \u88E1\u9762\u4F7F\u7528\u65B9\u6CD5
  template: \`
    <div> {{formatString(message)}} </div>
  \`
  \`\`\`
- \`\`\`computed\`\`\`\uFF1A\u82E5\u4E00\u500B\u6578\u64DA\u4F9D\u8CF4\u65BC\u5176\u4ED6\u6578\u64DA\uFF0C\u5247\u8A2D\u8A08\u70BA \`\`\`computed\`\`\`\uFF0C\u4E26\u6703\u9032\u884C\u7DE9\u5B58\uFF0C\`data\` \u4E0D\u8B8A\u5247\u4E0D\u6703\u91CD\u65B0\u8A08\u7B97
- \`\`\`watch\`\`\`\uFF1A\u82E5\u9700\u8981\u5728\u67D0\u500B\u6578\u64DA\u8B8A\u5316\u6642\u505A\u4E00\u4E9B\u4E8B\u60C5\uFF0C\u5247\u4F7F\u7528 \`\`\`watch\`\`\` \u4F86\u89C0\u5BDF\u9019\u500B\u6578\u64DA\u8B8A\u5316
- \u7BC4\u4F8B
  \`\`\`js
  const app = Vue.createApp({
    data() {
      return {
        message: "hello world",
        count: 2,
        price: 5,
        newTotal: 10,
        test: {aaa:'111'}
      }
    },
    watch: {
      // price \u53D1\u751F\u53D8\u5316\u65F6\uFF0C\u51FD\u6570\u4F1A\u6267\u884C
      // \u7B2C\u4E00\u500B\u53C3\u6578\u662F\u6539\u8B8A\u5F8C\u7684\u503C,\u7B2C\u4E8C\u500B\u662F\u4E0A\u4E00\u6B21\u672A\u6539\u8B8A\u7684\u503C
      price(current, prev) {
        this.newTotal = current * this.count;
      }
    },
    computed: {
      // \u5F53\u8BA1\u7B97\u5C5E\u6027\u4F9D\u8D56\u7684\u5185\u5BB9\u53D1\u751F\u53D8\u66F4\u65F6\uFF0C\u624D\u4F1A\u91CD\u65B0\u6267\u884C\u8BA1\u7B97
      total() {
        console.log(Date.now())
        return Date.now() + this.count;
        // return this.count * this.price
      }
    },
    methods: {
      formatString(string) {
        return string.toUpperCase();
      },
      // \u53EA\u8981\u9875\u9762\u91CD\u65B0\u6E32\u67D3\uFF0C\u624D\u4F1A\u91CD\u65B0\u8BA1\u7B97
      getTotal() {
        return Date.now() + this.count;
        // return this.count * this.price;
      },
    },
    template: \`
     <div> {{message}} {{newTotal}} </div>
     <div> {{getTotal()}} </div>
    \`
  });
  const vm = app.mount('#root');
  \`\`\`

<hr id="user-content-css-bind" style="height: 2px;">

#### <a href="#user-content-top">CSS\u5E38\u7528\u7D81\u5B9A\u65B9\u6CD5</a>
- \u63A7\u5236 \`\`\`class\`\`\` \u6709\u4E09\u7A2E\u65B9\u6CD5\uFF1A\u5B57\u4E32\u3001\u5C0D\u8C61\u3001\u6578\u7D44
  - \`\`\`true\`\`\` \u4EE3\u8868\u589E\u52A0\uFF0C\`\`\`false\`\`\` \u5247\u76F8\u53CD
  - \u8A2D\u5B9A\u597D\u52D5\u756B\u6548\u679C\u5F8C\uFF0C\u4F7F\u7528\u8A72\u65B9\u5F0F\u5207\u63DB\u53EF\u7528\u4F86\u64CD\u4F5C\u52D5\u756B
  - \u7BC4\u4F8B
    \`\`\`html
    <style>
      @keyframes leftToRight {
        0% {
          transform: translateX(-100px);
        }
        50% {
          transform: translateX(-50px);
        }
        0% {
          transform: translateX(0px);
        }
      }
      .animation {
        animation: leftToRight 3s;
      } 
    </style>
    <script>
      // \u900F\u904E data \u5207\u63DB\u9032\u884C\u52D5\u756B :class="animate" \u6703\u81EA\u52D5\u5C07 animation \u52A0\u5165\u6216\u79FB\u9664class
      const app = Vue.createApp({
        data() {
          return {
            animate: {
              animation: true,
            }
          }
        },
        methods: {
          handleClick() {
            this.animate.animation = ! this.animate.animation;
          }
        },
        template: \`
          <div>
            <div :class="animate">hello world</div>
            <button @click="handleClick">\u5207\u6362</button>
          </div>
        \`
      });

      const vm = app.mount('#root');
    <\/script>
    \`\`\`
- \u63A7\u5236 \`\`\`style\`\`\` \u6709\u5169\u7A2E\u65B9\u6CD5\uFF1A\u5B57\u4E32\u3001\u5C0D\u8C61
  - \u8A2D\u5B9A\u597D \`\`\`transition\`\`\` \u4E26\u64CD\u4F5C\u6A23\u5F0F\u5C6C\u6027\uFF0C\u5C31\u53EF\u4EE5\u64CD\u4F5C\u6A23\u5F0F\u52D5\u756B
  - \u7BC4\u4F8B
    \`\`\`html
    <style>
      .transition {
        transition: 3s background-color ease;
      }
    </style>
    <script>
      const app = Vue.createApp({
        data() {
          return {
            styleObj: {
              background: 'blue'
            }
          }
        },
        methods: {
          handleClick() {
            if(this.styleObj.background === 'blue') {
              this.styleObj.background = 'green';
            }else {
              this.styleObj.background = 'blue'
            }
          }
        },
        // \u5C07 transition \u904E\u5EA6\u6548\u679C\u52A0\u5165class \u4E26\u900F\u904Edata\u5207\u63DB\u80CC\u666F\u984F\u8272
        template: \`
          <div>
            <div class="transition" :style="styleObj">hello world</div>
            <button @click="handleClick">\u5207\u6362</button>
          </div>
        \`
      });
      const vm = app.mount('#root');
    <\/script>
    \`\`\`
- \u7E3D\u7D50\u7BC4\u4F8B
  \`\`\`html
  <style>
  .red {
      color: red;
  }
  .green {
      color: green;
  }
  </style>
  <body>
    <div id="root"></div>
  </body>
  <script>
  const app = Vue.createApp({
    data() {
      return {
        classString: 'red',
        // :class="classObject" \u6703\u7B49\u65BC class="green"
        classObject: { red: false, green: true },
        // :class="classArray" \u6703\u7B49\u65BC class="red green brown"
        classArray: ['red', 'green', {brown: true}],
        // \u63A8\u85A6\u7528\u5C0D\u8C61\u5BEB\u6CD5\u6BD4\u8F03\u7C21\u6F54 :style="styleObject"
        styleString: 'color: yellow; background: orange',
        styleObject: {
            color: 'orange',
            background: 'yellow'
        }
      }
    },
    template: \`
      <div :class="classString">
      Hello World
      </div>
      <div :style="styleObject">
      Hello World
      </div>
      <demo class="green"/>
    \`
  });

  app.component('demo', {
    // :class="$attrs.class" \u8868\u793A\u7E7C\u627F\u7236\u7956\u4EF6\u7684class\u5C6C\u6027
    // \u82E5\u5B50\u7D44\u4EF6\u53EA\u6709\u4E00\u500B\u6A19\u7C64\u5247\u6703\u76F4\u63A5\u7E7C\u627F,\u8907\u6578\u500B\u4E0D\u6703\u7E7C\u627F
    template: \`
      <div :class="$attrs.class">one</div>
      <div :class="$attrs.class">two</div>
    \`
  })
  const vm = app.mount('#root');
  <\/script>
  \`\`\`

<hr id="user-content-if" style="height: 2px;">

#### <a href="#user-content-top">\u689D\u4EF6\u6E32\u67D3</a>
- \`\`\`v-if\`\`\` \u6703\u6C7A\u5B9A\u8A72\u6A19\u5D4C\u662F\u5426\u5B58\u5728\uFF0C\u82E5\u88E1\u9762\u542B\u5B50\u6A19\u7C64\u5247\u6703\u4E00\u4F75\u5275\u5EFA\u6216\u92B7\u6BC0
- \`\`\`v-if v-else-if v-else\`\`\` \u6A19\u7C64\u4E4B\u9593\u4E0D\u80FD\u6709\u5176\u4ED6\u6A19\u7C64\u5426\u5247\u62B1\u932F
- \`\`\`v-show\`\`\` \u6703\u63A7\u5236\u8A72\u6A19\u7C64\u7684\u6A23\u5F0F \`\`\`display\`\`\` \u9032\u884C\u96B1\u85CF(\`\`\`none\`\`\`)\u6216\u986F\u793A(\u6703\u79FB\u9664 \`\`\`display\`\`\` \u5C6C\u6027)
- \u82E5\u7D44\u4EF6\u5E38\u8B8A\u52D5\u5247\u5EFA\u8B70\u4F7F\u7528 \`\`\`v-show\`\`\`\uFF0C\u4E00\u6B21\u6027\u5247\u4F7F\u7528 \`\`\`v-if\`\`\`
\`\`\`js
const app = Vue.createApp({
  data() {
    return {
      show: true,
      conditionOne: false,
      conditionTwo: true
    }
  },

  template: \`
    <div v-if="show">Hello World</div>

    <div v-if="conditionOne">if</div>
    <div v-else-if="conditionTwo">elseif</div>
    <div v-else>else</div>

    <div v-show="show">Bye World</div>
  \`
});

const vm = app.mount('#root');
\`\`\`

<hr id="user-content-for" style="height: 2px;">

#### <a href="#user-content-top">\u5FAA\u74B0\u6E32\u67D3</a>
- \`\`\`v-for\`\`\` \u53EF\u6E32\u67D3\u6578\u7D44\u8207\u5C0D\u8C61\uFF0C\u4E26\u4E14\u66F4\u6539\u5F8C\u6703\u81EA\u52D5\u6E32\u67D3
  - \u5728\u6578\u7D44\u6709\u5169\u500B\u56DE\u50B3\u503C\uFF1A\`\`\`value\u3001index\`\`\`
  - \u5728\u5C0D\u8C61\u6709\u4E09\u500B\u56DE\u50B3\u503C\uFF1A\`\`\`value\u3001key\u3001index\`\`\`
  - \u95DC\u65BC \`\`\`:key="key"\`\`\`
    - \`\`\`key \u9700\u662F\u552F\u4E00\u503C\`\`\` \u80FD\u66F4\u5FEB\u901F\u7684\u5FA9\u7528\u5143\u4EF6\u9054\u5230\u66F4\u5FEB\u6E32\u67D3\u6548\u679C
    - \u8ACB\u52FF\u5C07 \`\`\`index\`\`\` \u653E\u5165\uFF0C\u56E0\u70BA\u6578\u7D44 \`\`\`index\`\`\` \u6703\u91CD\u8907\u4F7F\u7528
    - \`\`\`v-if\`\`\` \u4E0D\u80FD\u8207 \`\`\`v-for\`\`\` \u5171\u7528\uFF0C\u53EF\u4EE5\u7528 \`\`\`template\`\`\` \u505A\u5FAA\u74B0\uFF0C\u88E1\u9762\u7528 \`\`\`v-if\`\`\` \u5224\u65B7\uFF0C\u4E26\u4E14 \`\`\`template\`\`\` \u4E0D\u6703\u7522\u751F\u6A19\u7C64 
- \u6578\u7D44\uFF1A\u53EF\u4F7F\u7528\u6578\u7D44\u51FD\u6578\u3001\u76F4\u63A5\u66FF\u63DB\u6578\u7D44\u3001\u66F4\u65B0\u6578\u7D44\u5167\u5BB9
- \u5C0D\u8C61\uFF1A\u53EF\u76F4\u63A5\u6DFB\u52A0\u5C0D\u8C61\u5C6C\u6027
\`\`\`js
const app = Vue.createApp({
  data() {
    return {
      listArray: ['ming', 'test', 'myjob'],
      listObject: {
        firstName: 'ming',
        lastName: 'test',
        job: 'myjob'
      }
    }
  },
  methods: {
    handleAddBtnClick() {
      // \u4F7F\u7528\u6578\u7D44\u51FD\u6578
      this.listArray.pop();
      // \u76F4\u63A5\u66FF\u6362\u6570\u7EC4
      this.listArray = ['1', '2']
      // \u76F4\u63A5\u66F4\u65B0\u6570\u7EC4\u7684\u5185\u5BB9
      this.listArray[1] = 'hello'
      // \u76F4\u63A5\u6DFB\u52A0\u5BF9\u8C61\u7684\u5185\u5BB9\uFF0C\u4E5F\u53EF\u4EE5\u81EA\u52A8\u7684\u5C55\u793A\u51FA\u6765
      this.listObject.age = 100;
    }
  },
  template: \`
    <div>
      <template v-for="(value, key, index) in listObject"
        :key="index">
        <div v-if="key !== 'lastName'">
          {{value}} -- {{key}}
        </div>
      </template>
      <div v-for="item in 10">{{item}}</div>
      <button @click="handleAddBtnClick">\u65B0\u589E</button>
    </div>
    <div v-for="(value,key,index) in listObject" :key="key">{{value}}-{{key}}-{{index}}</div>
    <div v-for="(value,index) in listArray">{{value}}-{{index}}</div>
  \`
});

const vm = app.mount('#root');
\`\`\`

<hr id="user-content-event" style="height: 2px;">

#### <a href="#user-content-top">\u4E8B\u4EF6\u7D81\u5B9A</a>
- \`\`\`v-on\`\`\` \u53EF\u4EE5\u4F7F\u65B9\u6CD5\u8207\u6A19\u7C64\u9032\u884C\u7D81\u5B9A\u89F8\u767C\u4E8B\u4EF6
- \`\`\`v-on\`\`\` \u53EF\u4EE5\u7C21\u5BEB\u6210 \`\`\`@\`\`\`\uFF0C\u5982\uFF1A\`\`\`@click\`\`\`
- \u5E38\u7528\u4FEE\u98FE\u7B26\u6709\u4EE5\u4E0B\u5E7E\u7A2E 
  - \u4E8B\u4EF6\u4FEE\u9970\u7B26\uFF1A\`\`\`stop\u3001prevent\u3001capture\u3001self\u3001once\u3001passive\`\`\`
    - \`\`\`@click.stop\`\`\` \u907F\u514D\u5192\u6CE1
    - \`\`\`@click.self\`\`\` \u53EA\u89F8\u767C\u81EA\u5DF1(\u4E0D\u542B\u5B50\u7D44\u4EF6)
    - \`\`\`@click.prevent\`\`\` \u9632\u6B62\u9810\u8A2D\u89F8\u767C
    - \`\`\`@click.capture\`\`\` \u4EE3\u8868\u5F9E\u5192\u6CE1\u8F49\u63DB\u5230\u6355\u7372  
    - \`\`\`@click.once\`\`\` \u53EA\u89F8\u767C\u4E00\u6B21
    - \`\`\`@scroll.passive\`\`\` \u53EF\u5E6B\u52A9\u6EFE\u52D5\u512A\u5316
  - \u6309\u952E\u4FEE\u9970\u7B26\uFF1A\`\`\`enter\u3001tab\u3001delete\u3001esc\u3001up\u3001down\u3001left\u3001right\`\`\`
    - \u5982\uFF1A\`\`\`@keydown.enter=""\`\`\` \u5247\u7576\u6309\u4E0B \`\`\`enter\`\`\` \u6642\u89F8\u767C
  - \u9F20\u6807\u4FEE\u9970\u7B26\uFF1A\`\`\`left\u3001right\u3001middle\`\`\`
    - \u5982\uFF1A\`\`\`@click.left=""\`\`\` \u5247\u7576\u6ED1\u9F20\u6309\u4E0B\u5DE6\u9375\u6642\u89F8\u767C
  - \u7CBE\u786E\u4FEE\u9970\u7B26\uFF1A\`\`\`exact\`\`\` \u907F\u514D\u540C\u6642\u6709\u591A\u500B\u6309\u9375\u89F8\u767C
    - \u5982\uFF1A\`\`\`@click.left.exact=""\`\`\` \u7576\u6ED1\u9F20"\u53EA\u6709\u5DE6\u9375\u9EDE\u64CA"\u6642\u89F8\u767C
- \u4F7F\u7528\u53C3\u6578\u53D6\u5F97\u76EE\u6A19\u6A19\u7C64
  - \u82E5\u7121\u9700\u53E6\u5916\u50B3\u53C3\u6578\uFF0C\u5247\u65B9\u6CD5\u5167 \`\`\`event.target\`\`\` \u53C3\u6578\u70BA\u6A19\u7C64\u81EA\u8EAB
  - \u82E5\u9700\u53E6\u5916\u50B3\u53C3\u6578\uFF0C\u5247\u9700\u50B3 \`\`\`$event\`\`\` \u624D\u80FD\u7372\u53D6\uFF0C\u5982\uFF1A
    -  \`\`\`@click="handleBtnClick(2, $event)"\`\`\`
- \u82E5\u9700\u8981\u4E00\u6B21\u89F8\u767C\u591A\u500B\u65B9\u6CD5\uFF0C\u5247\u7528\u9017\u865F\u5206\u9694\u4E26\u4E14\u52A0\u4E0A\u62EC\u5F27\uFF0C\u5982\uFF1A
  - \`\`\`@click="handleBtnClick(), handleBtnClick1()"\`\`\`
- \u7BC4\u4F8B
  \`\`\`js
  const app = Vue.createApp({
    data() {
      return {
        counter: 0,
      }
    },
    methods: {
      handleClick() {
        console.log('click')
      },
      handleBtnClick(num, event) {
        alert(111);
        this.counter += num;
      },
    },
    template: \`
      <div>
        <div @click.ctrl.exact="handleClick">123</div>
      </div>
      <div>
        {{counter}}
        <button @click="handleBtnClick(2, $event)">123</div>
      </div>
      <div @click.self="handleBtnClick()">
        000
        <button>3</div>
      </div>
    \`
  });

  const vm = app.mount('#root');
  \`\`\`

<hr id="user-content-form-bind" style="height: 2px;">

#### <a href="#user-content-top">\u8868\u55AE\u96D9\u5411\u7D81\u5B9A</a>
- \`v-model\` \u53EF\u4EE5\u4F7F\u8CC7\u6599\u8207\u6A19\u7C64\u6216\u7D44\u4EF6\u9032\u884C\u96D9\u5411\u8CC7\u6599\u7D81\u5B9A
  - \`v-bind\` \u53EA\u80FD\u55AE\u5411\u5C0D\u6A19\u7C64\u6216\u7D44\u4EF6\u9032\u884C\u7D81\u5B9A
- \u5E38\u7528\u4FEE\u9970\u7B26\u6709\u4EE5\u4E0B\u5E7E\u500B\uFF1A
  - \`\`\`v-model.lazy\`\`\` \u7576\u8A72\u6A19\u7C64\u5931\u53BB\u7126\u9EDE\u6642\u624D\u540C\u6B65\u6578\u64DA
  - \`\`\`v-model.number\`\`\`\u8F38\u5165\u6578\u5B57\u5F8C\u81EA\u52D5\u8F49\u6210\u6578\u5B57\u518D\u5B58\u5230 \`\`\`data\`\`\`(\u9810\u8A2D\u70BA\u5B57\u7B26\u4E32)
  - \`\`\`v-model.trim\`\`\` \u8F38\u5165\u5B57\u7B26\u4E32\u5F8C\u81EA\u52D5\u5C07\u524D\u5F8C\u7A7A\u683C\u53BB\u9664\u518D\u5B58\u5230 \`\`\`data\`\`\`(\u8F38\u5165\u6846\u5167\u9084\u662F\u4FDD\u6709\u7A7A\u683C)
- \u8868\u55AE\u5167\u5E38\u7528\u6A19\u7C64\uFF1A\`\`\`input\u3001textarea\u3001checkbox\u3001radio\u3001select\`\`\`
  - \u5982\u679C \`\`\`input\`\`\` \u5DF2\u7D93\u7528 \`\`\`v-model\`\`\` \u5247\u7121\u9700\u7528 \`\`\`value\`\`\` \u8A2D\u503C
  - \u5982\u679C \`\`\`textarea\`\`\` \u5DF2\u7D93\u7528 \`\`\`v-model\`\`\` \u5247\u6703\u81EA\u52D5\u7D81\u5B9A
- \`\`\`radio\`\`\` \u7528\u6CD5 
  \`\`\`js
  /*
    data \u8A2D\u7F6E check:'' (\u4E00\u822C\u5B57\u7B26\u4E32\u5373\u53EF,\u7576\u7136\u6578\u7D44\u4E5F\u53EF\u4F46\u4E0D\u59A5\u7576)
    <input type="radio" v-model="check" value="okok1"
    <input type="radio" v-model="check" value="okok2"
    \u5247\u7576\u88AB\u52FE\u8D77\u6642\u6703\u81EA\u52D5\u65B0\u589E\u5230check:'okok1'
  */
  \`\`\`
- \`\`\`checkbox\`\`\` \u7528\u6CD5
  - \u7B2C\u4E00\u7A2E\uFF1A
    \`\`\`js
    /*
      \u5728 data \u8A2D\u7F6E check:true \u6216 false
      <input type="checkbox" v-model="check">
      \u5247\u7576\u52FE\u8D77\u6642\u6703\u81EA\u52D5\u5207\u63DBtrue \u6216\u672A\u52FE\u8D77 false

      \u4E5F\u53EF\u4EE5\u81EA\u8A02\u52FE\u8D77\u8207\u672A\u52FE\u8D77\u72C0\u614B\u503C
    \` \u5728 data \u8A2D\u7F6E check:'hello' \u6216 'world'
      <input type="checkbox" v-model="check" true-value="hello" false-value="world">
      \u5247\u7576\u52FE\u8D77\u6642\u6703\u81EA\u52D5\u5207\u63DB hello \u6216\u672A\u52FE\u8D77 world\`
    */
    \`\`\`
  - \u7B2C\u4E8C\u7A2E\uFF1A
    \`\`\`js
    /*
      \u5728 data \u8A2D\u7F6E check:[]
      <input type="checkbox" v-model="check" value="okok1"
      <input type="checkbox" v-model="check" value="okok2"
      \u5247\u7576\u88AB\u52FE\u8D77\u6642\u6703\u81EA\u52D5\u65B0\u589E\u5230check\u6578\u7D44:["okok1","okok2"]
    */
    \`\`\`
- \`\`\`select\`\`\` \u7528\u6CD5
  - \u55AE\u9078\uFF1A
    \`\`\`js
    /*
      \u5728 data \u8A2D\u7F6E ,message:'A' (\u8A2D\u5B9A\u4E00\u958B\u59CB\u9078\u64C7A)
      <select v-model="message">
        <option value="A">A</option>
        <option value="B">B</option>
        <option value="C">C</option>
      </select>
      \u82E5\u9078\u64C7 A \u5247 this.message='A'
    */
    \`\`\`
  - \u8907\u9078\uFF1A
    \`\`\`js
    /*
      \u5728 data \u8A2D\u7F6E ,message:[]
      <select v-model="message" multiple>
        <option value="A">A</option>
        <option value="B">B</option>
        <option value="C">C</option>
      </select>
      \u82E5\u6309\u4F4Fctrl\u9078\u64C7 A \u8207 B \u5247 this.message=['A','B']
    */
    \`\`\`
- \u7C21\u55AE\u7BC4\u4F8B
  \`\`\`js
  /*
    \u53E6\u5916 option \u53EF\u4EE5\u7528 v-for \u7522\u751F
    \u5728 data \u8A2D\u7F6E ,options:[{text:'A',value:'A'},{text:'B',value:'B'},{text:'C',value:'C'}]
    <select v-model="message" multiple>
      <option v-for="item in options" :value="item.value">{{item.text}}</option>
    </select>
  */
  const app = Vue.createApp({
    data() {
      return {
        message: 'hello',
      }
    },
    template: \`
      <div>
        {{message}}
        <input v-model.trim="message"  />
      </div>
    \`
  });

  const vm = app.mount('#root');
  \`\`\`
- \u9032\u968E\uFF1A\u5BE6\u73FE \`v-model\`
  - \u5BE6\u73FE\u7D44\u4EF6 \`v-model\`\uFF1A
    \`\`\`html
    <input type="text" v-model="name" />
    <!-- \u4E0A\u4E0B\u7B49\u50F9 -->
    <input type="text" :value="name" @input="name = $event.target.value" />
    \`\`\`
  - \u5BE6\u73FE\u5B50\u7D44\u4EF6 \`v-model\`\uFF1A
    \`\`\`html
    <!-- \u7236\u7D44\u4EF6\u5167\u901A\u904E\u5C6C\u6027\u540D\u5F8C\u52A0.sync\u7684\u65B9\u5F0F\u53BB\u50B3\u905E\u6578\u64DA -->
    <child-model :title.sync="myValue" />
    <!-- \u5B50\u7D44\u4EF6\u63A5\u53D7title\u5F8C\uFF0C\u4F7F\u7528$emit\u53BB\u66F4\u65B0\u7236\u7D44\u4EF6\u50B3\u905E\u904E\u4F86\u7684\u5C6C\u6027\u503C title -->
    <input :value="title" @input="$emit('update:title', $event.target.value)" />
    \`\`\`

<hr id="user-content-local-global-components" style="height: 2px;">

#### <a href="#user-content-top">\u5C40\u90E8\u8207\u5168\u5C40\u7D44\u4EF6</a>
- \u7D44\u4EF6\uFF1A\u4EE3\u8868\u6210\u54C1\u7684\u4E00\u90E8\u4EFD\uFF0C\u4E14\u5177\u5099\u91CD\u8907\u4F7F\u7528\u7684\u7279\u6027
- \u5168\u5C40\u7D44\u4EF6\uFF1A\u53EA\u8981\u5B9A\u7FA9\u4E86\uFF0C\u8655\u8655\u7686\u53EF\u4F7F\u7528
  - \u9700\u4F7F\u7528 \`\`\` app.component\`\`\` \u65B9\u6CD5\u5275\u5EFA
  - \u6027\u80FD\u4E0D\u9AD8\uFF0C\u4F46\u5F88\u65B9\u4FBF
  - \u540D\u5B57\u5E38\u7528\u5C0F\u5BEB\u5B57\u6BCD\u4E2D\u9593\u7528 \`\`\`-\`\`\` \u9694\u958B
- \u5C40\u90E8\u7D44\u4EF6\uFF1A\u5B9A\u7FA9\u5F8C\u9700\u8981\u8A3B\u518A\u624D\u80FD\u4F7F\u7528
  - \u9700\u653E\u7F6E\u5728 \`\`\`components\`\`\` \u5C0D\u8C61\u5167\u624D\u80FD\u4F7F\u7528
  - \u6027\u80FD\u8F03\u9AD8
  - \u540D\u5B57\u5E38\u7528\u5927\u5BEB\u5B57\u6BCD\u958B\u982D\uFF0C\u99DD\u5CF0\u5F0F\u547D\u540D\uFF0C\u907F\u514D\u6DF7\u4E82
  - \u4F7F\u7528\u6642\u9700\u7528\u4E00\u540D\u5B57\u505A\u6620\u5C04\u5C0D\u8C61\uFF0C\u4E26\u4E14\u5E95\u5C64\u4E5F\u6703\u81EA\u52D5\u5617\u8A66\u505A\u6620\u5C04
    - \u5982\uFF1A\`\`\`<hello-world /> \u8207 HelloWorld\`\`\`
- \u7BC4\u4F8B
  \`\`\`js
  // \u5C40\u90E8\u7EC4\u4EF6
  const Counter = {
    data() {
      return {
        count: 1
      }
    },
    template: \`<div @click="count += 1">{{count}}</div>\`
  }

  const HelloWorld = {
    template: \`<div>hello world</div>\`
  }

  const app = Vue.createApp({
    components: {
      // counter: Counter,
      // 'hello-world': HelloWorld,
      Counter, HelloWorld,
    },
    template: \`
      <div>
        <hello-world />
        <counter />
      </div>
    \`
  });

  // \u5168\u5C40\u7EC4\u4EF6
  // app.component('counter', {
  //   data() {
  //     return {
  //       count: 1
  //     }
  //   },
  //   template: \`<div @click="count += 1">{{count}}</div>\`
  // })

  const vm = app.mount('#root');
  \`\`\`

<hr id="user-content-passbyvalue-validation" style="height: 2px;">

#### <a href="#user-content-top">\u7D44\u4EF6\u9593\u50B3\u503C\u8207\u6548\u9A57</a>
- \u50B3\u503C\u65B9\u5F0F(\u4E0D\u9650\u5C40\u90E8\u6216\u5168\u5C40\u7D44\u4EF6)\uFF1A
  \`\`\`js
  const app = Vue.createApp({
    data() {
      // \u85C9\u7531 data \u4F86\u50B3\u503C\uFF0C\u4E26\u4E14\u53EF\u4EE5\u662F\u5176\u4ED6\u985E\u578B\u6578\u64DA
      return { num: 1234 }
    },
    // \u8A2D\u5B9A\u53D6\u503C\u53C3\u6578\u540D\u7A31(\u82E5\u662F\u975C\u614B\u50B3\u503C\u5247\u4E0D\u7528 v-bind)
    template: \`
      <div><test :content="num" /></div>
    \`
  });
  app.component('test', {
    // \u4F7F\u7528 props \u53D6\u503C
    props:['content'],
    template: \`<div>{{content}}</div>\`
  });
  \`\`\`
- \u50B3\u503C\u8F14\u52A9\u6709\u4EE5\u4E0B\u5E7E\u7A2E
  - \u6AA2\u67E5\u50B3\u503C\u662F\u5426\u7B26\u5408\u9019\u4E9B\u6578\u64DA\u985E\u578B\uFF1A\`\`\`String\u3001Boolean\u3001Array\u3001Object\u3001Function\u3001Symbol\`\`\`
    - \u7BC4\u4F8B\uFF1A
      \`\`\`js
      app.component('test', {
        props:{
          content: Boolean,
        },
        template: \`<div>{{content}}</div>\`
      });
      \`\`\`
  - \`\`\`required\`\`\` \u8981\u6C42\u5FC5\u586B\u53C3\u6578\uFF0C\u7BC4\u4F8B\uFF1A
    \`\`\`js
    app.component('test', {
      props:{
        content: {
          type: Number,
          required: true, 
        },
      },
      template: \`<div>{{content}}</div>\`
    });
    \`\`\`
  - \`\`\`validator\`\`\`\uFF1A\u8A2D\u5B9A\u6AA2\u9A57\u7684\u689D\u4EF6(\u4E0D\u7B26\u5408\u689D\u4EF6\u5247\u63D0\u793A\u932F\u8AA4)
  - \`\`\`default\`\`\`\uFF1A\u9ED8\u8A8D\u503C(\u53EF\u4EE5\u7528\u65B9\u6CD5\u56DE\u50B3\uFF0C\u4E5F\u53EF\u4EE5\u76F4\u63A5\u7D66\u503C)
  - \`\`\`validator\`\`\` \u8207 \`\`\`default\`\`\` \u4F7F\u7528\u7BC4\u4F8B\uFF1A
    \`\`\`js
    app.component('test', {
      props:{
        content: {
          type: Number,
          validator: function(value) {
            return value < 1000;
          },
          default: function() {
            return 456;
          }, 
        },
      },
      template: \`<div>{{content}}</div>\`
    });
    \`\`\`
- \u7E3D\u7D50\u4F7F\u7528\u7BC4\u4F8B
  \`\`\`js
  const app = Vue.createApp({
    data() {
      return { num: 1234 }
    },
    template: \`
      <div><test :content="num" /></div>
    \`
  });

  app.component('test', {
    props: {
      content: {
        type: Number,
        validator: function(value) {
          return value < 1000;
        },
        default: function() {
          return 456;
        }
      }
    },
    template: \`<div>{{content}}</div>\`
  });

  const vm = app.mount('#root');
  \`\`\`

<hr id="user-content-oneway-data-transfer" style="height: 2px;">

#### <a href="#user-content-top">\u55AE\u5411\u8CC7\u6599\u50B3\u8F38</a>
- \u55AE\u5411\u8CC7\u6599\u50B3\u8F38 \`v-bind\`\uFF1A\u5B50\u7D44\u4EF6\u6216\u6A19\u7C64\u53EF\u7528\u50B3\u905E\u7684\u8CC7\u6599\uFF0C\u4F46\u4E0D\u80FD\u4FEE\u6539
  - \u7BC4\u4F8B
    \`\`\`js
    const app = Vue.createApp({
      data() {
        return { num: 1 }
      },
      template: \`
        <div>
          <counter :count="num" />
        </div>
      \`
    });

    app.component('counter', {
      // props \u7531\u7236\u7D44\u4EF6\u50B3\u7684\u53C3\u6578\u53EA\u80FD\u8B80\u4E0D\u80FD\u6539
      // \u53EF\u4EE5\u8A2D\u5728 data \u5176\u4E2D\u4E00\u500B\u5C6C\u6027\u7576\u4F5C\u521D\u59CB\u503C
      props: ['count'],
      data() {
        return {
          myCount: this.count,
        }
      },
      template: \`<div @click="myCount += 1">{{myCount}}</div>\`
    });

    const vm = app.mount('#root');
    \`\`\`
- \u8CC7\u6599\u50B3\u8F38\u5E38\u7528\u547D\u540D\u65B9\u5F0F
  - \u8209\u4F8B\uFF1A\u9700\u8981\u50B3\u8F38\u8CC7\u6599\u6642\uFF0C\u5247\u4F7F\u7528 \`\`\`content-abc\`\`\` \u8A72\u547D\u540D\u65B9\u5F0F\uFF0C\u4F7F\u7528\u50B3\u8F38\u8CC7\u6599\u6642\uFF0C\u4F7F\u7528 \`\`\`contentAbc\`\`\` \u547D\u540D\u65B9\u5F0F
  - \u7BC4\u4F8B
    \`\`\`js
    const app = Vue.createApp({
      data() {
        return {
          params:{
            content: 1234,
          }
        }
      },
      template: \`
        <div>
          <test :content-abc="content" />
        </div>
      \`
    });

    app.component('test', {
      props: ['contentAbc'],
      template: \`<div @click="count += 1">{{contentAbc}}</div>\`
    });

    const vm = app.mount('#root');
    \`\`\`
- \u9032\u968E\u7528\u6CD5\uFF1A\u4F7F\u7528\u5C0D\u8C61\u50B3\u8F38\u8CC7\u6599
  - \u7BC4\u4F8B
    \`\`\`js
    /*
      v-bind="params" \u7B49\u540C\u65BC 
      :content="params.content" 
      :a="params.a" 
      :b="params.b" 
      :c="params.c"
    */

    const app = Vue.createApp({
      data() {
        return {
          params:{
            content: 1234,
            a: 123,
            b: 234,
            c: 345,
          }
        }
      },
      template: \`
        <div>
          <test v-bind="params"/>
        </div>
      \`
    });

    app.component('test', {
      // \u4F9D\u7167\u5C0D\u8C61\u5C6C\u6027\u9078\u64C7\u8981\u63A5\u6536\u7684\u8CC7\u6599
      props: ['content','a','b','c'],
      data (){
        return {
          count: this.content
        }
      },
      template: \`<div @click="count += 1">{{count}}</div>\`
    });

    const vm = app.mount('#root');
    \`\`\`

<hr id="user-content-inherit-property" style="height: 2px;">

#### <a href="#user-content-top">\u7E7C\u627F\u5C6C\u6027</a>
- \u7E7C\u627F\u5C6C\u6027\u5B9A\u7FA9\uFF1A\u5B50\u7D44\u4EF6\u6703\u7E7C\u627F\u7236\u7D44\u4EF6\u7D66\u4E88\u5B50\u7D44\u4EF6\u6A19\u7C64\u4E0A\u7684\u5C6C\u6027
- \u82E5\u5B50\u7D44\u4EF6 \`\`\`props\`\`\` \u5167\u6709\u8A2D\u5B9A\u8A72\u5C6C\u6027\uFF0C\u5247\u7121\u6CD5\u7E7C\u627F
- \u7E7C\u627F\u65B9\u5F0F
  - \u4F7F\u7528 \`\`\`$attrs\`\`\` \u53D6\u5F97\u53EF\u4EE5\u7E7C\u627F\u7684\u5C6C\u6027
  - \u8B93\u7279\u5B9A\u6A19\u7C64\u7E7C\u627F\u6240\u6709\u5C6C\u6027\uFF1A\`\`\`v-bind="$attrs"\`\`\`
  - \u8B93\u7279\u5B9A\u6A19\u7C64\u7E7C\u627F\u55AE\u4E00\u5C6C\u6027\uFF0C\u5982\uFF1A\`\`\`:yourProperty="$attrs.msg"\`\`\`
  - \u7BC4\u4F8B
    \`\`\`js
    const app = Vue.createApp({
      template: \`
        <div>
          <counter msg="hello" msg1="hello1" />
        </div>
      \`
    });

    app.component('counter', {
      mounted() {
        // \u53EF\u4EE5\u900F\u904E this.$attrs \u53D6\u5F97
        console.log(this.$attrs.msg);// hello
      },
      /*
        \u4E0B\u9762\u6A19\u7C64\u8F38\u51FA\uFF1A
        <div msg="hello">Counter</div>
        <div msg="hello" msg1="hello1">Counter</div>
        <div msg1="hello1">Counter</div>
      */
      template: \`
        <div :msg="$attrs.msg">Counter</div>
        <div v-bind="$attrs">Counter</div>
        <div :msg1="$attrs.msg1">Counter</div>
      \`
    });

    const vm = app.mount('#root');
    \`\`\`
- \`\`\`inheritAttrs\`\`\`\uFF1A
  - \u82E5\u8A72\u5C6C\u6027\u8A2D\u70BA \`\`\`false\`\`\` \u5247\u5B50\u7D44\u4EF6\u4E0D\u6703\u81EA\u52D5\u7E7C\u627F\u5C6C\u6027
  - \u82E5\u8A72\u5C6C\u6027\u8A2D\u70BA \`\`\`true\`\`\` (\u53EF\u7701\u7565\u4E0D\u5BEB\u8A72\u5C6C\u6027)\uFF0C\u5247\u5B50\u7D44\u4EF6\u6703\u81EA\u52D5\u7E7C\u627F\u5C6C\u6027
    - \u82E5\u5B50\u7D44\u4EF6\u5167\u6709\u591A\u500B\u6A19\u7C64\u4E5F\u4E0D\u6703\u81EA\u52D5\u7E7C\u627F\uFF0C\u53EA\u6709\u55AE\u500B\u6A19\u7C64\u6703\u81EA\u52D5\u7E7C\u627F
  - \u7BC4\u4F8B
    \`\`\`js
    const app = Vue.createApp({
      template: \`
        <div>
          <counter msg="hello" />
        </div>
      \`
    });

    app.component('counter', {
      inheritAttrs: false,
      // \u82E5\u8A2D\u70BA false \u5247\u8F38\u51FA <div>Counter</div>
      // \u82E5\u8A2D\u70BA true \u6216\u4E0D\u5BEB\u5247\u8F38\u51FA <div msg="hello">Counter</div>
      template: \`
        <div>Counter</div>
      \`
    });

    const vm = app.mount('#root');
    \`\`\`

<hr id="user-content-father-son-event-communication" style="height: 2px;">

#### <a href="#user-content-top">\u7236\u5B50\u7D44\u4EF6\u7684\u4E8B\u4EF6\u901A\u4FE1</a>
- \u8A2D\u5B9A\u65B9\u6CD5\uFF1A\u5B50\u7D44\u4EF6\u8A2D\u5B9A \`\`\`$emit\`\`\` \u6E9D\u901A\u5A92\u4ECB\uFF0C\u8B93\u7236\u7D44\u4EF6\u900F\u904E\u5B50\u7D44\u4EF6\u89F8\u767C\u81EA\u5DF1\u7684\u65B9\u6CD5\u4F86\u9032\u884C\u901A\u4FE1
  - \u56E0\u70BA \`\`\`HTML\`\`\` \u5927\u5C0F\u5BEB\u4E0D\u654F\u611F\uFF0C\u5EFA\u8B70\u7528 \`\`\`-\`\`\` \u5340\u9694\u6216\u5168\u5C0F\u5BEB(\u6703\u81EA\u52D5\u8F49\u5C0F\u5BEB)
  - \u7C21\u55AE\u7BC4\u4F8B\uFF1A
    \`\`\`js
    const app = Vue.createApp({
      data() {
        return { count: 1 }
      },
      methods: {
        handleAddOne(){
          this.count += 1;
        },
      },
      // \u85C9\u7531\u7236\u7D44\u4EF6\u8A2D\u5B9A\u5B50\u7D44\u4EF6\u6A19\u7C64\u65B9\u5F0F\uFF0C\u4F86\u89F8\u767C\u7236\u7D44\u4EF6\u65B9\u6CD5
      template: \`
        <counter :count="count" @add-one="handleAddOne" />
      \`
    });

    app.component('counter', {
      props: ['count'],
      // \u4F7F\u7528 this.$emit() \u8B93\u5B50\u7D44\u4EF6\u8207\u7236\u7D44\u4EF6\u900F\u904E\u4E8B\u4EF6\u4EA4\u6D41
      methods: {
        handleClick() {
          this.$emit('add-one');
        }
      },
      template: \`
        <div @click="handleClick">{{count}}</div>
      \`
    });
    const vm = app.mount('#root');
    \`\`\`
- \`\`\`$emit\`\`\` \u53C3\u6578
  - \u82E5\u55AE\u500B\u53C3\u6578\uFF0C\u5982\uFF1A\`\`\`this.$emit('add')\`\`\`\uFF0C\u5247\u53EA\u547C\u53EB\u7236\u7D44\u4EF6\u65B9\u6CD5\u4E14\u7121\u4EFB\u4F55\u53C3\u6578\u586B\u5165
  - \u82E5\u591A\u500B\u53C3\u6578\uFF0C\u5982\uFF1A\`\`\`this.$emit('add', 2)\`\`\`\uFF0C\u5247\u547C\u53EB\u7236\u7D44\u4EF6\u65B9\u6CD5\u4E14\u5E36\u6709\u53C3\u6578\`\`\`2\`\`\`\u586B\u5165\uFF0C\u4F9D\u6B64\u985E\u63A8
  - \u82E5\u542B\u6709 \`\`\`emits\`\`\` \u5C6C\u6027\uFF0C\u5247\u53EF\u6AA2\u67E5\u50B3\u5165\u7684\u53C3\u6578\u662F\u5426\u7B26\u5408\u7236\u7D44\u4EF6\u8981\u6C42
  - \u7BC4\u4F8B
    \`\`\`js
    const app = Vue.createApp({
      data() {
        return { count: 1 }
      },
      methods: {
        handleAddOne(param1, param2){
          this.count += param2;
        },
      },
      template: \`
        <counter :count="count" @add="handleAddOne" />
      \`
    });

    app.component('counter', {
      props: ['count'],
      // emits \u4E3B\u8981\u662F\u5E6B\u5FD9\u6AA2\u67E5\u6709\u54EA\u4E9B\u6703\u5C0D\u5916\u63D0\u4F9B\u6E9D\u901A
      // emits \u4E5F\u53EF\u4EE5\u662F\u9663\u5217: emits:['add']
      emits: {
        // \u4E5F\u53EF\u4EE5\u662F\u5C0D\u8C61\u4E26\u6AA2\u67E5\u8A72\u53C3\u6578\u662F\u5426\u7B26\u5408
        add: (count) => {
          if(count > 0){
            // \u82E5\u5927\u65BC0\u5247\u5141\u8A31\u4F60\u5C0D\u5916
            return true;
          }
          return false;
        }
      },
      // \u53E6\u5916\u53EF\u4EE5\u50B3\u53C3\u6578\u81F3\u7236\u7D44\u4EF6
      methods: {
        handleClick() {
          // \u4E5F\u53EF\u4EE5\u7B97\u597D\u518D\u50B3\u9001\u904E\u53BB this.$emit('add', this.count + 3);
          this.$emit('add', 2);
        },
        // \u82E5\u4F7F\u7528 emits:['add']
        add(count) {
          if(count > 0){
            // \u82E5\u5927\u65BC0\u5247\u5141\u8A31\u4F60\u5C0D\u5916
            return true;
          }
          return false;
        }
      },
      template: \`
        <div @click="handleClick">{{count}}</div>
      \`
    });
    const vm = app.mount('#root');
    \`\`\`


<hr id="user-content-father-son-twoway-binding" style="height: 2px;">

#### <a href="#user-content-top">\u7236\u5B50\u7D44\u4EF6\u7684\u96D9\u5411\u7D81\u5B9A</a>
- \u4F7F\u7528\u65B9\u5F0F\uFF1A\`\`\`v-model\`\`\` \u8B93\u7236\u7D44\u4EF6\u85C9\u7531\u5B50\u7D44\u4EF6\u89F8\u767C\u66F4\u65B0\u7236\u7D44\u4EF6  \`\`\`data\`\`\`
  - \u82E5\u6709 \`\`\`\u591A\u500B v-model \u96D9\u5411\u7D81\u5B9A\`\`\` \u5247\u5FC5\u9808\u4F7F\u7528\u81EA\u5B9A\u7FA9\u5225\u540D\uFF0C\u5982\uFF1A\`\`\`v-model:app="count"\`\`\`
  - \u7BC4\u4F8B
    \`\`\`js
    // \u7236\u5B50\u7D44\u4EF6\u4F7F\u7528v-model\u96D9\u5411\u7D81\u5B9A
    const app = Vue.createApp({
      data() {
        return { count: 1 }
      },
      // \u82E5\u8981\u81EA\u5B9A\u7FA9\u5247\u53EF\u4EE5\u5BEB\u6210(app\u53EF\u63DB\u5176\u4ED6\u547D\u540D) <counter v-model:app="count" />
      template: \`
        <counter v-model="count" />
      \`
    });

    app.component('counter', {
      // \u82E5\u7236\u7D44\u4EF6\u53EA\u7528 v-model="" \u5247\u53EA\u80FD\u7528 modelValue
      // \u82E5\u81EA\u5B9A\u7FA9(v-model:app="count")\u5247\u5BEB\u6210 props: ['app'],
      props: ['modelValue'],
      methods: {
        handleClick() {
          // \u66F4\u65B0\u7236\u7D44\u4EF6\u7684\u5C6C\u6027
          // \u82E5\u81EA\u5B9A\u7FA9(v-model:app="count")\u5247\u5BEB\u6210 this.$emit('update:app', this.app + 3);
          this.$emit('update:modelValue', this.modelValue + 3);
        }
      },
      template: \`
        <div @click="handleClick">{{modelValue}}</div>
      \`
    });

    const vm = app.mount('#root');
    \`\`\`
- \u81EA\u5B9A\u7FA9\u4FEE\u98FE\u7B26
  - \u8A2D\u5B9A\u65B9\u5F0F\uFF1A\`\`\`v-model.yourname\`\`\`\uFF0C\u53EF\u642D\u914D\u81EA\u5B9A\u7FA9\u5225\u540D
  - \u7BC4\u4F8B
    \`\`\`js
    const app = Vue.createApp({
      data() {
        return {
          str: 'a',
        }
      },
      // \u82E5\u5728\u7236\u7D44\u4EF6\u4F7F\u7528\u4E00\u500B\u81EA\u5B9A\u7FA9\u4FEE\u98FE\u7B26 uppercase
      // \u52A0\u4E0A\u81EA\u5B9A\u7FA9\u547D\u540D:v-model:app.uppercase="str"
      template: \`
        <counter v-model.uppercase="str" />
      \`
    });

    app.component('counter', {
      props: {
        'modelValue': String,
        // \u5728 modelModifiers \u53EF\u4EE5\u770B\u5230\u7236\u7D44\u4EF6\u4F7F\u7528\u7684\u81EA\u5B9A\u7FA9\u4FEE\u98FE\u7B26 { uppercase: true }
        // \u82E5\u547D\u540D:v-model:app.uppercase="str" \u5247\u9808\u5C07 modelModifiers \u6539\u70BA appModifiers
        'modelModifiers': {
          // \u9810\u8A2D\u70BA\u7A7A
          default: ()=> ({})
        }
      },
      methods: {
        handleClick() {
          let newValue = this.modelValue + 'b';
          // \u5982\u679C\u7236\u7D44\u4EF6\u6709\u4F7F\u7528 uppercase \u4FEE\u98FE\u7B26\u5247\u90FD\u8F49\u5927\u5BEB
          // \u82E5\u547D\u540D:v-model:app.uppercase="str" \u5247\u9808\u6539\u70BA this.appModifiers.uppercase
          if(this.modelModifiers.uppercase) {
            newValue = newValue.toUpperCase();
          }
          // \u82E5\u547D\u540D:v-model:app.uppercase="str" \u5247\u9808\u6539\u70BA this.$emit('update:app', newValue);
          this.$emit('update:modelValue', newValue);
        },
      },
      // \u82E5\u547D\u540D:v-model:app.uppercase="str" \u5247\u9808\u6539\u70BA {{app}}
      template: \`
        <div @click="handleClick">{{modelValue}}</div>
      \`
    });

    const vm = app.mount('#root');
    \`\`\`

<hr id="user-content-slot" style="height: 2px;">

#### <a href="#user-content-top">\u63D2\u69FD\u3001\u5177\u540D\u63D2\u69FD\u3001\u4F5C\u7528\u57DF\u63D2\u69FD</a>
- \`\`\`slot\`\`\` (\u63D2\u69FD)\uFF1A\u6703\u5C07\u7236\u7D44\u4EF6\u8ABF\u7528\u5B50\u7D44\u4EF6\u88E1\u7684\u5167\u5BB9\u66FF\u63DB\u6389
  - \u7BC4\u4F8B
    \`\`\`js
    const app = Vue.createApp({
      data(){
        return { text: '\u63D0\u4EA4' }
      },
      template: \`
        <myform>
          <div>{{text}}</div>
        </myform>
        <myform>
          <button>{{text}}</button>
        </myform>
      \`
    });

    app.component('myform', {
      methods:{
        handleClick(){
          alert(123)
        },
      },
      /*
        <slot>default value</slot> \u6703\u4F9D\u7167 <myform> \u88E1\u9762\u7684\u5167\u5BB9\u9032\u884C\u66F4\u63DB
        \u7236\u7D44\u4EF6\u7B2C\u4E00\u500B <myform> slot \u6703\u63DB\u6210 <div>\u63D0\u4EA4</div>
        \u7236\u7D44\u4EF6\u7B2C\u4E8C\u500B <myform> slot \u6703\u63DB\u6210 <button>\u63D0\u4EA4</button>

        \u82E5\u7236\u7D44\u4EF6 <myform> \u88E1\u9762\u5167\u5BB9\u70BA\u7A7A\uFF0C\u5247 slot \u6703\u76F4\u63A5\u8F38\u51FA slot \u6A19\u7C64\u5167\u6587\u5B57
        \u4F9D myform \u5B50\u7D44\u4EF6\u70BA\u4F8B\uFF0Cslot \u88AB span \u5305\u8986\uFF0C\u5247\u6703\u8F49\u63DB\u6210 <span>default value</span>
      */
      template: \`
        <div>
          <span @click="handleClick">
            <slot>default value</slot>
          </span>
        </div>
      \`
    });

    const vm = app.mount('#root');
    \`\`\`
- \u5177\u540D\u63D2\u69FD\uFF1A\u7576\u9700\u8981\u591A\u500B\u63D2\u69FD\u6642\uFF0C\u53EF\u70BA\u63D2\u69FD\u547D\u540D\uFF0C\u85C9\u6B64\u6307\u5B9A\u8981\u8F38\u51FA\u5167\u5BB9
  - \u5177\u540D\u8207\u4E0D\u5177\u540D\u63D2\u69FD\u53EF\u4E00\u8D77\u4F7F\u7528\uFF0C\u4E0D\u5177\u540D\u63D2\u69FD\u6703\u53D6\u5F97\u9664\u4E86\u5177\u540D\u63D2\u69FD\u7684\u5167\u5BB9
  - \u7236\u7D44\u4EF6\u8A2D\u5B9A\u65B9\u5F0F\uFF1A\`\`\`v-slot:yourSlotName\`\`\`\uFF0C\u53EF\u4EE5\u7C21\u5BEB\u6210 \`\`\`#yourSlotName\`\`\`
    - \u9700\u642D\u914D \`\`\`template\`\`\` \u4E00\u8D77\u4F7F\u7528\uFF0C\u5982\uFF1A\`\`\`<template #yourSlotName>\`\`\`
    - \`\`\`template\`\`\` \u672C\u8EAB\u4E0D\u6703\u7522\u751F\u4EFB\u4F55\u6A19\u7C64\u642D\u914D \`\`\`slot\`\`\`\uFF0C\u88E1\u9762\u5C31\u6703\u8B8A\u4E00\u500B\u5177\u540D\u63D2\u69FD
  - \u5B50\u7D44\u4EF6\u8A2D\u5B9A\u65B9\u662F\uFF1A\`\`\`<slot name="yourSlotName">123</slot>\`\`\`
  - \u7BC4\u4F8B
    \`\`\`js
    const app = Vue.createApp({
      template: \`
        <layout>
          <template v-slot:header>
            <div>header</div>
          </template>
          <template v-slot:footer>
            <div>footer</div>
          </template>
          <div>456</div>
        </layout>
      \`
    });
    /*
      \u4EE5\u4E0B\u5167\u5BB9\u6703\u8F38\u51FA\uFF1A
      <div>header</div>
      <div>content</div>
      <div>footer</div>
      <div>footer</div>
      <div>456</div>
    */
    app.component('layout', {
      template: \`
        <div>
          <slot name="header"></slot>
          <div>content</div>
          <slot name="footer"></slot>
          <slot name="footer"></slot>
          <slot>123</slot>
        </div>
      \`
    });

    const vm = app.mount('#root');
    \`\`\`
- \u4F5C\u7528\u57DF\u63D2\u69FD\uFF1A
  - \u7531\u5B50\u7D44\u4EF6\u63D2\u69FD\u50B3\u7D66\u7236\u7D44\u4EF6\u8981\u986F\u793A\u7684\u5167\u5BB9
  - \u7BC4\u4F8B
    \`\`\`js
    const app = Vue.createApp({
      /*
        \u5B50\u7D44\u4EF6\u5B9A\u7FA9 item\uFF0C\u8B93\u7236\u7D44\u4EF6\u4F7F\u7528 v-slot \u53D6\u5F97 item \u503C\u4E26\u8F38\u51FA
        \u4F9D\u6848\u4F8B\u7531\u5B50\u7D44\u4EF6 item \u4F9D\u5E8F\u50B3\u5165\u7684\u503C\u70BA\uFF1A{"item":1}\u3001{"item":2}\u3001{"item":3}
        1.\u53EF\u4EE5\u7528\u89E3\u69CB\u7684\u65B9\u5F0F\u53D6\u503C\uFF1Aconst { item } = items \u5247\u8B8A\u6210 v-slot="{item}" \u642D\u914D <div>{{item}}</div>
        2.\u76F4\u63A5\u53D6\u503C\uFF1Av-slot="itemObj" \u642D\u914D {{itemObj.item}} \u53D6\u5F97\u5C0D\u8C61 item \u5C6C\u6027
      */
      template: \`
        <list v-slot="{item}">
          <div>{{item}}</div>
        </list>
      \`
    });

    app.component('list', {
      data() {return {list: [1, 2, 3]}},
      /*
        slot \u88E1\u9762\u7684 item \u4EE3\u8868\u8981\u8F38\u51FA\u7684\u5167\u5BB9
        \u85C9\u7531 v-bind \u7D81\u5B9A item \u9032\u884C\u8F38\u51FA
        <div>1</div>
        <div>2</div>
        <div>3</div>
      */
      template: \`
        <div>
          <slot v-for="item in list" :item="item" />
        </div>
      \`
    });

    const vm = app.mount('#root');
    \`\`\`

<hr id="user-content-dynamic-asynchronous-components" style="height: 2px;">

#### <a href="#user-content-top">\u52D5\u614B\u3001\u7570\u6B65\u7D44\u4EF6\u3001keep-alive \u4F7F\u7528</a>
- \u52D5\u614B\u7D44\u4EF6\uFF1A\u6839\u64DA\u8CC7\u6599\u8B8A\u5316\uFF0C\u4F7F\u7528 \`\`\`component\`\`\` \u6A19\u7C64\u4F86\u5207\u63DB\u8981\u986F\u793A\u7684\u7D44\u4EF6
  - \u5C07\u7D44\u4EF6\u540D\u7A31\u586B\u5165 \`\`\`component\`\`\` \u7684 \`\`\`is\`\`\` \u5C6C\u6027\uFF0C\u53EF\u986F\u793A\u6307\u5B9A\u7684\u7D44\u4EF6(\u4E0D\u9650\u5C40\u90E8\u6216\u5168\u5C40\u7D44\u4EF6)
  - \u4F7F\u7528 \`\`\`<keep-alive>\`\`\` \u7D44\u4EF6\u53EF\u4FDD\u7559\u5207\u63DB\u524D\u7684\u72C0\u614B\uFF0C\u5982 \`\`\`input\`\`\` \u7684\u8F38\u5165\u6846\u503C\uFF0C\u4E3B\u8981\u4F5C\u7528\u5982\u4E0B
    - \u7DE9\u5B58\u7D44\u4EF6\uFF0C\u4E0D\u9700\u8981\u91CD\u65B0\u6E32\u67D3
    - \u591A\u7D44\u4EF6\u5F7C\u6B64\u5207\u63DB(\u5982 \`\`\`tab\`\`\` )\uFF0C\u55AE\u4E00\u7D44\u4EF6\u4F7F\u7528 \`\`\`v-show\`\`\` (\u539F\u751F \`\`\`css\`\`\` \u63A7\u5236)\u5373\u53EF
    - \u6027\u80FD\u512A\u5316\u65B9\u6848\u4E4B\u4E00
  - \u4F7F\u7528\u60C5\u5883\uFF1A\u65B0\u805E\u9801\u9762\u6709\u591A\u500B\u6587\u5B57\u6216\u5716\u50CF\u9805\u76EE\u7D44\u5408\u5C55\u793A\uFF0C\u9019\u6642\u53EF\u900F\u904E\u8DD1\u8FF4\u5708\u52A0\u4E0A\u52D5\u614B\u7D44\u4EF6\u65B9\u5F0F\u76F4\u63A5\u7D44\u51FA\u6574\u500B\u9801\u9762
  - \u7BC4\u4F8B
    \`\`\`js
    const app = Vue.createApp({
      data(){
        return { currentItem: 'input-item' }
      },
      methods: {
        handleClick() {
          if(this.currentItem === 'input-item') {
            this.currentItem = 'common-item';
          } else {
            this.currentItem = 'input-item';
          }
        }
      },
      // component \u53EF\u4EE5\u53D6\u4EE3\u5982\u9019\u6A23\u7684\u7D44\u4EF6 <input-item v-show="currentItem === 'input-item'"/> 
      template: \`
        <keep-alive>
          <component :is="currentItem"/>
        </keep-alive>
        <button @click="handleClick">\u5207\u63DB</button>
      \`
    });

    app.component('input-item', {
      template: \`<input />\`
    });

    app.component('common-item', {
      template: \`<div>hello world</div>\`
    });

    const vm = app.mount('#root');
    \`\`\`
- \u7570\u6B65\u7D44\u4EF6\uFF1A\u7570\u6B65\u57F7\u884C\u7279\u5B9A\u7D44\u4EF6
  - \u4F7F\u7528\u60C5\u5883\uFF1A\u52A0\u8F09\u5927\u7D44\u4EF6\u3001\u8DEF\u7531\u52A0\u8F09\u6642\uFF0C\u53EF\u512A\u5316\u6027\u80FD
  - 1.\u4F7F\u7528 \`\`\`Vue.defineAsyncComponent\`\`\` \u65B9\u6CD5\u9032\u884C\u7570\u6B65\u64CD\u4F5C
    - \u7BC4\u4F8B\uFF1A\u56DB\u79D2\u5F8C\u5275\u5EFA\u7279\u5B9A\u7D44\u4EF6
      \`\`\`js
      const app = Vue.createApp({
        template: \`
          <div>
            <common-item />
            <async-common-item />
          </div>
        \`
      });

      app.component('common-item', {
        template: \`<div>hello world</div>\`
      });

      // \u6B64\u6848\u4F8B\u70BA4\u79D2\u9418\u5F8C\u5275\u5EFA\u8A72\u7D44\u4EF6
      app.component('async-common-item', Vue.defineAsyncComponent(() => {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            resolve({
              template: \`<div>this is an async component</div>\`
            })
          }, 4000)
        })
      }))

      const vm = app.mount('#root');
      \`\`\`
  - 2.(\u5E38\u7528!)\u4F7F\u7528 \`\`\`import()\`\`\` \u51FD\u6578\u6309\u9808\u52A0\u8F09\u7D44\u4EF6
    - \u7BC4\u4F8B 
      \`\`\`html
      <FormDemo v-if="showFormDemo"/>
      <button @click="showFormDemo = true">show form demo</button>
      <script>
      export default {
          components: {
              FormDemo: () => import('../BaseUse/FormDemo'),
          },
          data() {
              return {
                  showFormDemo: false
              }
          }
      }
      <\/script>
      \`\`\`

<hr id="user-content-ref-provide-inject" style="height: 2px;">

#### <a href="#user-content-top">ref\u8207provide/inject</a>
- \`\`\`ref\`\`\`\uFF1A\u53D6\u5F97\u6307\u5B9A\u7BC0\u9EDE\u8CC7\u8A0A
  - \u5EFA\u8B70\u5728 \`\`\`mounted\`\`\` \u65B9\u6CD5\u5167\u4F7F\u7528(\u7D44\u4EF6\u6E32\u67D3\u5B8C\u4F7F\u7528)
  - \u82E5\u5728\u6A19\u7C64\u52A0\u4E0A\u5247\u7372\u53D6\u8A72 \`\`\`DOM\`\`\` \u7BC0\u9EDE
  - \u82E5\u5728\u5B50\u7D44\u4EF6\u52A0\u4E0A\u5247\u53EF\u53D6\u5F97 \`\`\`data\`\`\` \u8CC7\u8A0A\u6216\u547C\u53EB\u5B50\u7D44\u4EF6\u65B9\u6CD5
- \`\`\`provide/inject\`\`\`\uFF1A\u4F7F\u5B50\u5B6B\u7D44\u4EF6\u53EF\u76F4\u63A5\u53D6\u5F97\u7236\u8F29\u4EE5\u4E0A\u8CC7\u8A0A
  - \u53EF\u4EE5\u907F\u514D\u7236\u50B3\u5B50\u518D\u50B3\u5B6B\u5B50\u7684\u7E41\u91CD\u5BEB\u6CD5
  - \u82E5\u7236\u8F29\u4EE5\u4E0A\u542B\u6709\u591A\u500B \`\`\`provide\`\`\` \u4E14\u88E1\u9762\u6709\u76F8\u540C\u5C6C\u6027\uFF0C\u5247\u6703\u53D6\u8F03\u8FD1\u7684\u5C6C\u6027\u503C
  - \u5B50\u5B6B\u4F7F\u7528 \`\`\`inject\`\`\` \u53D6\u5F97\u7684\u7236\u8F29\u5C6C\u6027\u7121\u6CD5\u4FEE\u6539\uFF0C\u56E0\u70BA \`\`\`provide\`\`\` \u53EA\u6703\u50B3\u7B2C\u4E00\u6B21\uFF0C\u9808\u91CD\u65B0\u8CE6\u503C\u7D66\u81EA\u5DF1\u7684\u5C6C\u6027
  - \u7BC4\u4F8B
    \`\`\`js
    const app = Vue.createApp({
      data() {
        return { count: 1, vvv: 234 }
      },
      // \u50B3\u9001\u8CC7\u8A0A\u7D66\u5B50\u5B6B\u7D44\u4EF6
      provide() {
        return {
          count: this.count,
          vvv: this.vvv
        }
      },
      template: \`
        <div>
          <child :count="count" />
          <button @click="count += 1">Add</button>
        </div>
      \`
    });

    app.component('child', {
      data() {
        return { count: 777, bbb: 222}
      },
      // \u50B3\u9001\u8CC7\u8A0A\u7D66\u5B50\u5B6B\u7D44\u4EF6
      provide() {
        return {
          count: this.count,
          bbb: this.bbb,
        }
      },
      template: \`<child-child/>\`
    });

    app.component('child-child', {
      mounted(){
        // ref\u7528\u6CD5\uFF1A2.\u53D6\u5F97\u6216\u4F7F\u7528\u5B50\u7D44\u4EF6\u8CC7\u8A0A
        console.log(this.$refs.count.vvv) // 234 (\u53D6\u5F97\u5B50\u7D44\u4EF6\u7684 vvv \u5C6C\u6027\u503C)
        console.log(this.$refs.count.handleClick()) // \u547C\u53EB\u5B50\u7D44\u4EF6\u7684 handleClick \u65B9\u6CD5
      },
      // ref\u7528\u6CD5\uFF1A1.\u8A2D\u5B9A\u8981\u53D6\u5F97\u7684\u5B50\u7D44\u4EF6(\u6A19\u7C64)
      template: \`<child-child-child ref="count" />\`
    });

    app.component('child-child-child', {
       // \u4F7F\u7528 inject \u53D6\u5F97\u7236\u8F29\u7D44\u4EF6\u7684 data
      inject: ['count','bbb','vvv'],
      methods: {
        handleClick(){
          console.log(this.count) // 777 (\u53D6\u5F97\u8F03\u8FD1\u7236\u8F29\u7684 count \u5C6C\u6027\u503C)
          console.log(this.bbb) // 222
          console.log(this.vvv) // 234
        }
      },
      template: \`<div @click="handleClick">{{bbb}}</div>\`
    });

    const vm = app.mount('#root');
    \`\`\`

<hr id="user-content-transition" style="height: 2px;">

#### <a href="#user-content-top">\u7D44\u4EF6\u7684\u904E\u6E21\u8207\u52D5\u756B</a>
- \u82E5\u8A72\u7D44\u4EF6\u9700\u8981\u904E\u6E21\u8207\u52D5\u756B\u6548\u679C\uFF0C\u53EF\u7528\u4EE5\u4E0B\u7D44\u4EF6\u542B\u4F7F\u7528\u5340\u5225\uFF1A 
  - \`\`\`transition(Transition)\`\`\`\uFF1A\u7D44\u4EF6\u5167\u53EA\u80FD\u6709\u4E00\u500B\u5143\u7D20\u5B58\u5728\uFF0C\u5728\u64CD\u4F5C\u55AE\u4E00\u5143\u7D20\u9032\u5165\u548C\u96E2\u958B\u6642\u61C9\u7528
  - \`\`\`transition-group(TransitionGroup)\`\`\`\uFF1A\u7D44\u4EF6\u5167\u53EF\u4EE5\u6709\u591A\u500B\u5143\u7D20\u5B58\u5728\uFF0C\u7528\u65BC\u5728\u5217\u8868\u4E2D\u64CD\u4F5C(\u589E\u3001\u522A...)\u6642\u61C9\u7528
- \u5165\u5834\u8207\u51FA\u5834\uFF1A
  - \u5165\u5834\u8207\u51FA\u5834\u5404\u6709\u4E09\u968E\u6BB5
  - \u82E5 \`\`\`transition\`\`\` \u7D44\u4EF6\u7684 \`\`\`name\`\`\` \u70BA\u7A7A\uFF0C\u5247 \`\`\`class\`\`\` \u540D\u70BA \`\`\`v\`\`\` \u958B\u982D\uFF0C\u5982\uFF1A\`\`\`.v-xxxx-xxxx\`\`\`
  - \u5165\u5834(\`\`\`v\`\`\` \u6703\u96A8\u8457 \`\`\`transition\`\`\` \u7684 \`\`\`name\`\`\` \u8B8A\u66F4)
    - v-enter-from\uFF1A\u5B9A\u7FA9\u5143\u7D20\u5728\u5165\u5834\u300C\u4E4B\u524D\u300D\u7684\u6A23\u5F0F
    - v-enter-active\uFF1A\u5B9A\u7FA9\u5143\u7D20\u5728\u5165\u5834\u300C\u904E\u7A0B\u300D\u7684\u6A23\u5F0F
    - v-enter-to\uFF1A\u5B9A\u7FA9\u5143\u7D20\u5728\u5165\u5834\u300C\u7D50\u675F\u6642\u300D\u7684\u6A23\u5F0F
  - \u51FA\u5834(\`\`\`v\`\`\` \u6703\u96A8\u8457 \`\`\`transition\`\`\` \u7684 \`\`\`name\`\`\` \u8B8A\u66F4)
    - v-leave-from\uFF1A\u5B9A\u7FA9\u5143\u7D20\u5728\u51FA\u5834\u300C\u4E4B\u524D\u300D\u7684\u6A23\u5F0F
    - v-leave-active\uFF1A\u5B9A\u7FA9\u5143\u7D20\u5728\u51FA\u5834\u300C\u904E\u7A0B\u300D\u7684\u6A23\u5F0F
    - v-leave-to\uFF1A\u5B9A\u7FA9\u5143\u7D20\u5728\u51FA\u5834\u300C\u7D50\u675F\u6642\u300D\u7684\u6A23\u5F0F
  - \u7BC4\u4F8B\uFF1A
    \`\`\`html
    <style>
    @keyframes shake {
      0% {
        transform: translateX(-100px)
      }
      50% {
        transform: translateX(-50px)
      }
      100% {
        transform: translateX(50px)
      }
    }
    /*
      transition name \u70BA hello\uFF0C\u5247 class \u70BA hello-xxx-xxx 
    */
    .hello-leave-active {
      animation: shake 3s;
    }
    .hello-enter-active {
      animation: shake 3s;
    }
    </style>
    <script>
    // \u5355\u5143\u7D20\uFF0C\u5355\u7EC4\u4EF6\u7684\u5165\u573A\u51FA\u573A\u52A8\u753B
    const app = Vue.createApp({
      data() {
        return {
          show: false
        }
      },
      methods: {
        handleClick() {
          this.show = !this.show;
        }
      },
      template: \`
        <div>
          <transition name="hello">
            <div v-if="show">hello world</div>
          </transition>
          <button @click="handleClick">\u5207\u6362</button>
        </div>
      \`
    });

    const vm = app.mount('#root');
    <\/script>
    \`\`\`
- \u81EA\u5B9A\u7FA9 \`\`\`class\`\`\`\uFF1A
  - \u53EF\u4EE5\u8207 [Animate.css](https://animate.style/) \u9032\u884C\u7D50\u5408\u4F7F\u7528
  - \u6709\u4EE5\u4E0B\u5E7E\u7A2E\u8A2D\u5B9A\u65B9\u5F0F\uFF0C\u529F\u80FD\u8207\u4E0A\u9762\u5165\u51FA\u5834\u76F8\u540C\uFF1A
    - enter-from-class
    - enter-active-class
    - enter-to-class
    - leave-from-class
    - leave-active-class
    - leave-to-class
  - \u82E5\u6709\u540C\u6642\u4F7F\u7528 \`\`\`transition\`\`\` \u8207 \`\`\`animation\`\`\` \u60C5\u6CC1
    - \u82E5\u8A2D\u5B9A \`\`\`type="transition"\`\`\`\uFF0C\u5247\u8A2D\u5B9A\u7684\u79D2\u6578\u5F8C\u5F37\u5236\u5B8C\u6210 \`\`\`animation\`\`\` \u52D5\u756B
    - \u82E5\u8A2D\u5B9A \`\`\`type="animation"\`\`\`\uFF0C\u5247\u8A2D\u5B9A\u7684\u79D2\u6578\u5F8C\u5F37\u5236\u5B8C\u6210 \`\`\`transition\`\`\` \u904E\u6E21
  - \`\`\`duration\`\`\`
    - \u82E5\u8A2D\u5B9A \`\`\`:duration="1000"\`\`\`\uFF0C\u5247\u4E00\u79D2\u5F8C\u5F8C\u5F37\u5236\u5B8C\u6210\u904E\u6E21\u52D5\u756B
    - \u82E5 \`\`\`:duration="{enter: 1000, leave: 3000}"\`\`\`\uFF0C\u5247\u5165\u5834\u4E00\u79D2\u5F8C\u5F37\u5236\u7D50\u675F\u904E\u6E21\u52D5\u756B\uFF0C\u51FA\u5834\u4E09\u79D2\u5F8C\u5F37\u5236\u7D50\u675F\u904E\u6E21\u52D5\u756B
  - \u7BC4\u4F8B
    \`\`\`js
    /*
      1.\u5148\u81EA\u5B9A\u7FA9\u7684\u540D\u7A31\u5BEBcss
        .hello { \u4EE3\u8868\u5165\u5834\u7684\u52D5\u4F5C } .bye { \u4EE3\u8868\u51FA\u5834\u7684\u52D5\u4F5C }
      2.\u5728 transition \u7D44\u4EF6\u4E0A\u8A2D\u5B9A\u5982\uFF1Aenter-active-class="hello" \u5373\u53EF\u751F\u6548
        \u4E26\u4E14\u53EF\u540C\u6642\u7528\u591A\u500B class\uFF0C\u5982\uFF1Aenter-active-class="yourFirstClass yourSecondClass"
    */
    const app = Vue.createApp({
      data() {
        return {
          show: false
        }
      },
      methods: {
        handleClick() {
          this.show = !this.show;
        },
      },
      template: \`
        <div>
          <transition
            enter-active-class="hello"
            leave-active-class="bye"
          >
            <div v-show="show">hello world</div>
          </transition>
          <button @click="handleClick">\u5207\u6362</button>
        </div>
      \`
    });

    const vm = app.mount('#root');
    \`\`\`
- \`\`\`JavaScript Hooks\`\`\`\uFF1A
  - [\u5B98\u7DB2\u4ECB\u7D39](https://vuejs.org/guide/built-ins/transition.html#javascript-hooks)
  - \u53EF\u4EE5\u5075\u807D \`\`\`Transition\`\`\` \u7D44\u4EF6\u4E0A\u52D5\u756B\u8F49\u63DB\u904E\u7A0B
  - \u82E5\u8A2D\u5B9A \`\`\`:css="false"\`\`\` \u5247\u4EE3\u8868\u4E0D\u7528 \`\`\`css\`\`\` \u52D5\u756B\u8207\u904E\u6E21\u6548\u679C
  - \u7BC4\u4F8B
    \`\`\`js
    const app = Vue.createApp({
      data() {
        return {
          show: false
        }
      },
      methods: {
        handleClick() {
          this.show = !this.show;
        },
        handleBeforeEnter(el) {
          // el \u53EF\u4EE5\u53D6\u5F97 transition \u5167\u7684\u7BC0\u9EDE/\u7D44\u4EF6\u8CC7\u8A0A
          el.style.color = "red";
        },
        handleEnterActive(el, done) {
          const animation = setInterval(() => {
            const color = el.style.color;
            if(color === 'red') {
              el.style.color = 'green';
            } else {
              el.style.color = 'red';
            }
          }, 1000)
          setTimeout(() => {
            clearInterval(animation);
            done();
          }, 3000)
        },
        handleEnterEnd(el) {
          console.log(123);
        }
      },
      /*
        @before-enter \u4EE3\u8868\u5165\u5834\u57F7\u884C\uFF0C\u6709 el \u53C3\u6578(transition\u672C\u9AD4)
        @enter \u4EE3\u8868\u5165\u5834\u4E2D\u57F7\u884C\uFF0C\u6709 el \u53C3\u6578(transition\u672C\u9AD4)\u8207 done\u53C3\u6578(\u8981\u7D50\u675F\u52D5\u756B\u6642\u9700\u547C\u53EB:done())
        @after-enter \u4EE3\u8868\u5165\u5834\u5B8C\uFF0C\u6709 el \u53C3\u6578(transition\u672C\u9AD4)
        \u5176\u4ED6\u53EF\u8A73\u7D30\u770B\u5B98\u7DB2
      */
      template: \`
        <div>
          <transition
            :css="false"
            @before-enter="handleBeforeEnter"
            @enter="handleEnterActive"
            @after-enter="handleEnterEnd"
          >
            <div v-show="show">hello world</div>
          </transition>
          <button @click="handleClick">\u5207\u6362</button>
        </div>
      \`
    });

    const vm = app.mount('#root');
    \`\`\`
- \`\`\`transition\`\`\` \u7D44\u4EF6\u52D5\u756B\u5207\u63DB\u5143\u7D20/\u7D44\u4EF6\uFF0C\`\`\`transition-group\`\`\` \u5B98\u65B9\u4E0D\u652F\u6301\u4F7F\u7528\uFF1A
  - \u82E5\u8981\u9054\u5230\u5148\u5165\u5834\u518D\u51FA\u5834\u52D5\u756B\u6548\u679C\u5247\u52A0\u5165 \`\`\`mode="in-out"\`\`\`\uFF0C\u6C92\u6709\u52A0\u5247\u9810\u8A2D\u540C\u6642
  - \u82E5\u8981\u9054\u5230\u5148\u51FA\u5834\u518D\u5165\u5834\u52D5\u756B\u6548\u679C\u5247\u52A0\u5165 \`\`\`mode="out-in"\`\`\`\uFF0C\u6C92\u6709\u52A0\u5247\u9810\u8A2D\u540C\u6642
  - \`\`\`appear\`\`\` \u8868\u793A\u7576\u6E32\u67D3\u5B8C\u6642\uFF0C\u9032\u884C\u5165\u5834\u52D5\u756B
  - \u7BC4\u4F8B
    \`\`\`js
    // \u5229\u7528 component \u7D44\u4EF6\u4F86\u5207\u63DB\u5169\u500B\u81EA\u5B9A\u7FA9\u7D44\u4EF6
    const ComponentA = {
      template: '<div>hello world</div>'
    }

    const ComponentB = {
      template: '<div>bye world</div>'
    }

    const app = Vue.createApp({
      data() {
        return { component: 'component-a' }
      },
      methods: {
        handleClick() {
          if(this.component === 'component-a') {
            this.component = 'component-b';
          }else {
            this.component = 'component-a';
          }
        },
      },
      components: {
        'component-a': ComponentA,
        'component-b': ComponentB,
      },
      template: \`
        <div>
          <transition mode="out-in" appear>
            <component :is="component" />
          </transition>
          <button @click="handleClick">\u5207\u6362</button>
        </div>
      \`
    });
    const vm = app.mount('#root');
    \`\`\`
- \u4F7F\u7528 \`\`\`transition-group\`\`\` \u88FD\u4F5C\u5217\u8868\u52D5\u756B
  - \u6CE8\u610F\uFF1A\u5167\u90E8\u7684\u5143\u7D20\u9700\u5177\u6709\u552F\u4E00\u7684 \`\`\`key\`\`\` \u503C(\u82E5\u6C92\u6709\u5247\u52D5\u756B\u5931\u6548)
  - \u7BC4\u4F8B
    \`\`\`html
    <style>
      .v-enter-from {
        opacity: 0;
        transform: translateY(30px);
      }
      .v-enter-active {
        transition: all .5s ease-in;
      }
      .v-enter-to {
        opacity: 1;
        transform: translateY(0);
      }
      .v-move {
        transition: all .5s ease-in;
      }
      .list-item {
        display: inline-block;
        margin-right: 10px;
      }
    </style>
    <script>
      const app = Vue.createApp({
        data() {
          return { list: [1, 2, 3] }
        },
        methods: {
          handleClick() {
            this.list.unshift(this.list.length + 1);
          },
        },
        template: \`
          <div>
            <transition-group>
              <span class="list-item" v-for="item in list" :key="item">{{item}}</span>
            </transition-group>
            <button @click="handleClick">\u589E\u52A0</button>
          </div>
        \`
      });
      const vm = app.mount('#root');
    <\/script>
    \`\`\`

<hr id="user-content-mixin" style="height: 2px;">

#### <a href="#user-content-top">Mixin \u4F7F\u7528</a>
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

<hr id="user-content-directive" style="height: 2px;">

#### <a href="#user-content-top">Directive \u81EA\u5B9A\u7FA9\u6307\u4EE4</a>
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

<hr id="user-content-teleport" style="height: 2px;">

#### <a href="#user-content-top">Teleport \u50B3\u9001\u9580</a>
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

<hr id="user-content-plugin" style="height: 2px;">

#### <a href="#user-content-top">Plugin \u63D2\u4EF6</a>
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

<hr id="user-content-rules" style="height: 2px;">

#### <a href="#user-content-top">Rules \u6821\u9A57\u898F\u5247</a>
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

<hr id="user-content-setup" style="height: 2px;">

#### <a href="#user-content-top">Setup \u8207 \u751F\u547D\u9031\u671F\u51FD\u6578</a>
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

<hr id="user-content-ref-reactive" style="height: 2px;">

#### <a href="#user-content-top">ref\u3001reactive \u4F7F\u7528</a>
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

<hr id="user-content-toref-context" style="height: 2px;">

#### <a href="#user-content-top">toRef\u3001context \u4F7F\u7528</a>
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

<hr id="user-content-compositionapi-todolist" style="height: 2px;">

#### <a href="#user-content-top">\u4F7F\u7528 Composition API \u958B\u767C TodoList</a>
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

<hr id="user-content-computed-function" style="height: 2px;">

#### <a href="#user-content-top">computed \u65B9\u6CD5\u751F\u6210\u8A08\u7B97\u5C6C\u6027</a>
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

<hr id="user-content-nexttick" style="height: 2px;">

#### <a href="#user-content-top">nextTick</a>
- \`\`\`nextTick\`\`\` \u6703\u5728 \`\`\`DOM\`\`\` \u66F4\u65B0\u6E32\u67D3\u5B8C\u6210\u5F8C\u57F7\u884C
- \u901A\u5E38\u7528\u65BC \`\`\`DOM\`\`\` \u975E\u540C\u6B65\u66F4\u65B0\u4EE5\u63D0\u5347\u6548\u80FD
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

<hr id="user-content-watch-watcheffect" style="height: 2px;">

#### <a href="#user-content-top">watch \u8207 watchEffect</a>
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

<hr id="user-content-setup-ref-provide-inject" style="height: 2px;">

#### <a href="#user-content-top">setup \u5167\u7684 ref/provide/inject</a>
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

<hr id="user-content-performance-optimization" style="height: 2px;">

#### <a href="#user-content-top">\u5E38\u898B\u6027\u80FD\u512A\u5316\u65B9\u5F0F</a>
- \u5408\u7406\u4F7F\u7528 \`v-show\`\u3001\`v-if\`
- \u5408\u7406\u4F7F\u7528 \`computed\`
- \`v-for\` \u6642\u52A0 \`key\` \u907F\u514D\u8207 \`v-if\` \u4E00\u540C\u4F7F\u7528
- \u81EA\u5B9A\u7FA9\u4E8B\u4EF6\u3001\`DOM\` \u4E8B\u4EF6\u5373\u6642\u92B7\u6BC0
- \u5408\u7406\u4F7F\u7528\u7570\u6B65\u7D44\u4EF6
- \u5408\u7406\u4F7F\u7528 \`keep-alive\` \u7D44\u4EF6
- \u8CC7\u6599\u7D50\u69CB\u5C64\u7D1A\u52FF\u592A\u6DF1\uFF0C\u8207 \`diff\` \u7B97\u6CD5\u3001\u97FF\u61C9\u5F0F\u76F8\u95DC

<hr id="user-content-object-defineproperty" style="height: 2px;">

#### <a href="#user-content-top">Object.defineProperty \u5BE6\u73FE\u97FF\u61C9\u5F0F</a>
- \u512A\u9EDE\uFF1A
  - \u53EF\u652F\u63F4\u4F4E\u7248\u672C\u700F\u89BD\u5668
- \u7F3A\u9EDE\uFF1A
  - \u6DF1\u5EA6\u76E3\u807D\u5FC5\u9808\u905E\u6B78\u5230\u5E95\uFF0C\u4E00\u6B21\u6027\u8A08\u7B97\u91CF\u5927
  - \u7121\u6CD5\u76E3\u807D\u65B0\u589E\u8207\u522A\u9664\u5C6C\u6027
  - \u539F\u751F\u4E0D\u5177\u5099\u76E3\u807D\u6578\u7D44\u80FD\u529B\uFF0C\u9700\u7279\u6B8A\u8655\u7406
- \u53C3\u8003\u7BC4\u4F8B
  \`\`\`js
  // \u89F8\u767C\u66F4\u65B0\u8996\u5716
  function updateView() {
    console.log('\u66F4\u65B0\u8996\u5716')
  }
  // \u97FF\u61C9\u5F0F\u76E3\u807D\u5668
  function defineReactive(target, key, value) {
    // \u82E5 value \u662F\u5C0D\u8C61\u5247\u9032\u4E00\u6B65\u6DF1\u5EA6\u76E3\u807D
    observer(value)
    // \u6838\u5FC3 API
    Object.defineProperty(target, key, {
      get() {
        return value
      },
      set(newValue) {
        if (newValue !== value) {
          // \u5224\u65B7\u65B0\u503C\u662F\u5426\u70BA\u5C0D\u8C61\u6216\u6578\u7D44\uFF0C\u53EF\u80FD\u9700\u8981\u6DF1\u5EA6\u76E3\u807D
          observer(newValue)
          // \u8CE6\u4E88\u65B0\u503C\uFF0C\u6CE8\u610F! \u56E0\u70BA\u5728\u9589\u5305\u4E2D\uFF0C\u8A2D\u7F6E\u5B8C\u5F8C\u4F7F\u7528 get \u6703\u7372\u53D6\u6700\u65B0\u7684\u503C
          value = newValue
          // \u89F8\u767C\u66F4\u65B0\u8996\u5716
          updateView()
        }
      }
    })
  }
  // \u76E3\u807D\u5C0D\u8C61\u5C6C\u6027
  function observer(target) {
    if (typeof target !== 'object' || target === null) {
      // \u82E5\u975E\u5C0D\u8C61\u6216\u6578\u7D44\u5247\u8FD4\u56DE
      return target
    }

    // \u6B64\u505A\u6CD5\u6703\u6C61\u67D3\u5168\u5C40\u7684 Array \u539F\u578B\uFF0C\u70BA\u5927\u5FCC
    // Array.prototype.push = function () { updateView() }
    // \u82E5\u662F\u6578\u7D44\u5C31\u628A\u4ED6\u7684\u539F\u578B\u6307\u5411 arrProto
    if (Array.isArray(target)) {
      target.__proto__ = arrProto
    }

    // \u70BA\u5C0D\u8C61\u5167\u5404\u500B\u5C6C\u6027\u589E\u52A0\u97FF\u61C9\u5F0F\u76E3\u807D\uFF08for in \u4E5F\u53EF\u904D\u6B77\u6578\u7D44\uFF09
    for (let key in target) {
      defineReactive(target, key, target[key])
    }
  }

  // \u91CD\u65B0\u5B9A\u7FA9\u6578\u7D44\u539F\u578B
  const oldArrayProperty = Array.prototype
  // \u5275\u5EFA\u65B0\u5C0D\u8C61\uFF0C\u539F\u578B(__proto__)\u6307\u5411 oldArrayProperty \u518D\u64F4\u5C55\u65B0\u7684\u65B9\u6CD5\u6216\u5C6C\u6027\u5C31\u90E8\u6703\u5F71\u97FF\u539F\u578B
  const arrProto = Object.create(oldArrayProperty);// \u7B49\u540C\u65BC { __proto__: oldArrayProperty }
  ['push', 'pop', 'shift', 'unshift', 'splice'].forEach(methodName => {
    // \u52A0\u5165\u6307\u5B9A\u7684\u539F\u6578\u7D44\u529F\u80FD(Array.prototype.push)
    arrProto[methodName] = function () {
      // \u89F8\u767C\u8996\u5716\u66F4\u65B0
      updateView()
      // \u547C\u53EB\u539F\u6578\u7D44\u51FD\u6578\uFF0C\u4E26\u50B3\u5165\u51FD\u6578\u8207\u51FD\u6578\u7684\u53C3\u6578
      // Array.prototype.push.call(this, ...arguments)
      oldArrayProperty[methodName].call(this, ...arguments)
    }
  })

  // \u9700\u76E3\u807D\u7684\u8CC7\u6599
  const data = {
    name: 'ming',
    age: 20,
    info: {
      address: 'address1' // \u9700\u6DF1\u5165\u76E3\u807D
    },
    nums: [10, 20, 30]
  }
  // \u958B\u59CB\u9032\u884C\u76E3\u807D
  observer(data)
  // \u6E2C\u8A66
  data.name = 'test'
  // data.age = 23
  // data.x = '100' // \u65B0\u589E\u5C6C\u6027\u6703\u76E3\u807D\u4E0D\u5230\uFF0C\u6240\u4EE5\u6709 Vue.set
  // delete data.name // \u5220\u9664\u5C6C\u6027\u6703\u76E3\u807D\u4E0D\u5230\uFF0C\u6240\u4EE5\u6709 Vue.delete
  // data.info.address = 'address2' // \u6DF1\u5EA6\u76E3\u807D
  // data.nums.push(4) // \u76E3\u807D\u6578\u7D44
  \`\`\`

<hr id="user-content-virtual-dom-introduce" style="height: 2px;">

#### <a href="#user-content-top">Virtual DOM \u57FA\u672C\u4ECB\u7D39</a>
- \u4EC0\u9EBC\u662F \`Virtual DOM(vdom)\`\uFF1F\uFF1A\u7528 \`JS\` \u6A21\u64EC \`DOM\` \u7D50\u69CB\uFF0C\u8A08\u7B97\u51FA\u6700\u5C0F\u7684\u8B8A\u66F4\u4F86\u64CD\u4F5C \`DOM\`
- \u7528 \`vdom\`  \u7684\u539F\u56E0\uFF1A\u4E3B\u8981\u56E0\u70BA\u64CD\u4F5C \`DOM\` \u975E\u5E38\u8017\u6027\u80FD
- \`vdom\` \u70BA\u5BE6\u73FE \`Vue\`\u3001\`React\` \u7684\u57FA\u77F3
- \`diff\` \u7B97\u6CD5\u70BA \`vdom\` \u6700\u6838\u5FC3\u95DC\u9375\u7684\u90E8\u5206\uFF0C\u8A08\u7B97\u65B0\u820A\u7684\u8B8A\u66F4\u90E8\u5206
- \u7528 \`JS\` \u6A21\u64EC \`DOM\` \u7BC4\u4F8B\uFF1A
  - \u4E3B\u8981\u9700\u6CE8\u610F\u5305\u542B\u5E7E\u500B\u7279\u9EDE\uFF1A\`\u4EC0\u9EBC\u6A19\u7C64\`\u3001\`\u6A19\u7C64\u5C6C\u6027\`\u3001\`\u662F\u5426\u6709\u4E8B\u4EF6\`\u3001\`\u662F\u5426\u6709\u5B50\u5143\u7D20\`
  - \u5047\u8A2D \`HTML\` \u7D50\u69CB\u70BA\uFF1A
    \`\`\`html
    <div id="div1" class="container">
      <input type="button" onclick="addItem()">add</p>
      <ul style="font-size: 20px">
        <li>a</li>
      </ul>
    </div>
    \`\`\`
  - \u5247 \`JS\` \u8F49\u63DB\u5F8C\u7D50\u69CB(\u8209\u4F8B)\uFF1A
    \`\`\`js
    {
      tag: 'div',
      props: {
        className: 'container',
        id: 'div1'
      },
      children: [
        {
          tag: 'input',
          props: {
            type: 'button',
          },
          events: {
            onClick: 'addItem()'
          },
          children: 'add'
        },
        {
          tag: 'ul',
          props: {
            style: 'font-size: 20px'
          },
          children: [
            {
              tag: 'li',
              children: 'a'
            },
          ]
        }
      ]
    }
    \`\`\`

<hr id="user-content-virtual-dom-snabbdom" style="height: 2px;">

#### <a href="#user-content-top">Snabbdom \u4F7F\u7528</a>
- [Snabbdom Github](https://github.com/snabbdom/snabbdom)
- \u4EC0\u9EBC\u662F \`Snabbdom\`\uFF1F\uFF1A\u4E00\u500B\u6027\u80FD\u5353\u8D8A\u7684 \`\u865B\u64EC DOM\` \u5EAB
- \u4F7F\u7528\u7BC4\u4F8B\uFF1A
  \`\`\`html
  <body>
    <div id="container"></div>
    <button id="btn-change">change</button>
    <script src="https://cdn.bootcss.com/snabbdom/0.7.3/snabbdom.js"><\/script>
    <script src="https://cdn.bootcss.com/snabbdom/0.7.3/snabbdom-class.js"><\/script>
    <script src="https://cdn.bootcss.com/snabbdom/0.7.3/snabbdom-props.js"><\/script>
    <script src="https://cdn.bootcss.com/snabbdom/0.7.3/snabbdom-style.js"><\/script>
    <script src="https://cdn.bootcss.com/snabbdom/0.7.3/snabbdom-eventlisteners.js"><\/script>
    <script src="https://cdn.bootcss.com/snabbdom/0.7.3/h.js"><\/script>
    <script type="text/javascript">
    const snabbdom = window.snabbdom
    // \u5B9A\u7FA9\u95DC\u9375\u51FD\u6578 patch(\u9700\u8981\u9032\u884C\u5C0D\u6BD4\u904B\u7B97\u7684\u6A21\u584A)
    const patch = snabbdom.init([
        snabbdom_class,
        snabbdom_props,
        snabbdom_style,
        snabbdom_eventlisteners
    ])
    // \u5B9A\u7FA9\u95DC\u9375\u51FD\u6578 h
    const h = snabbdom.h
    // \u5B9A\u7FA9\u539F\u59CB\u8CC7\u6599
    const data = [
        {
            name: '111',
            age: '20',
            address: 'home1'
        },
        {
            name: '222',
            age: '21',
            address: 'home2'
        },
        {
            name: '333',
            age: '22',
            address: 'home3'
        }
    ]
    // \u5C07\u8868\u982D\u4E5F\u653E\u5165
    data.unshift({
        name: '\u59D3\u540D',
        age: '\u5E74\u9F61',
        address: '\u5730\u5740'
    })
    const container = document.getElementById('container')
    // \u6E32\u67D3\u8CC7\u6599\u52A0\u5165 DOM
    let vnode
    function render(data) {
        const newVnode = h('table', {}, data.map(item => {
            // table \u4F7F\u7528\u9663\u5217\u52A0\u5165\u65B0\u5B50\u5143\u7D20
            const tds = []
            for (let i in item) {
              // \u5C07\u8CC7\u6599\u4E00\u4E00\u52A0\u5165\u81F3td\u7684\u5B50\u5143\u7D20(\u6587\u5B57)
              if (item.hasOwnProperty(i)) {
                  tds.push(h('td', {}, item[i] + ''))
              }
            }
            return h('tr', {}, tds)
        }))
        if (vnode) {
            // patch \u4E4B\u5F8C\uFF0C\u61C9\u4F7F\u7528\u65B0\u7684\u8986\u84CB\u73FE\u6709\u7684 vnode \uFF0C\u5426\u5247\u6BCF\u6B21\u90FD\u662F\u521D\u59CB\u6E32\u67D3
            patch(vnode, newVnode)
        } else {
            // \u521D\u6B21\u6E32\u67D3
            patch(container, newVnode)
        }
        // \u5B58\u5132\u7576\u524D vnode\uFF0C\u4EE5\u6E1B\u5C11\u4E0B\u6B21\u5C0D\u6BD4\u5DEE\u7570
        vnode = newVnode
    }
    // \u521D\u6B21\u6E32\u67D3
    render(data)
    const btnChange = document.getElementById('btn-change')
    btnChange.addEventListener('click', () => {
        data[1].age = 30
        data[2].address = 'home7'
        // \u518D\u6B21\u6E32\u67D3\uFF0C\u6703\u767C\u73FE\u53EA\u6539\u8B8A\u66F4\u65B0\u7684\u90E8\u5206
        // \u82E5\u672A\u4F7F\u7528\u865B\u64EC DOM \u5F88\u96E3\u53BB\u4E00\u4E00\u5C0D\u6BD4\u66F4\u65B0\u5DEE\u7570
        render(data)
    })
    <\/script>
  </body>
  \`\`\`

<hr id="user-content-virtual-dom-diff" style="height: 2px;">

#### <a href="#user-content-top">diff \u7B97\u6CD5</a>
- [JSON Diff and Patch](https://github.com/cujojs/jiff)
- \u4EC0\u9EBC\u662F \`diff \u7B97\u6CD5\`\uFF1F\uFF1A\u53D6\u5F97\u5169\u6A39\u4E4B\u9593\u5DEE\u7570\u7684\u8A08\u7B97\u65B9\u5F0F
- \u50B3\u7D71\u7684 \`\`\`diff \u7B97\u6CD5\`\`\` \u7684\u6642\u9593\u8907\u96DC\u5EA6\u70BA \`\`\`O(n^3)\`\`\`
  - \u904D\u6B77\u7B2C\u4E00\u68F5\u6A39 & \u7B2C\u4E8C\u68F5\u6A39\uFF1A\`\`\`O(n^2)\`\`\`
  - \u4F7F\u7528\u6A39\u7684\u6700\u5C0F\u8DDD\u96E2\u7DE8\u8F2F\u7B97\u6CD5\uFF1A\`\`\`O(n^2m(1+logmn))\`\`\`\uFF0C\u5047\u8A2D \`\`\`m=n\`\`\` \u5247\uFF1A\`\`\`O(n^3)\`\`\`
- \u76EE\u524D\u512A\u5316\u65B9\u5F0F\uFF0C\u5176\u6642\u9593\u8907\u96DC\u5EA6\u70BA \`\`\`O(n)\`\`\`
  - \u53EA\u6BD4\u8F03\u540C\u4E00\u5C64\u7D1A\uFF0C\u7236\u5C64\u5C0D\u7236\u5C64\u3001\u5B50\u5C64\u5C0D\u5B50\u5C64
  - \u82E5 \`\`\`tag\`\`\` \u4E0D\u540C\uFF0C\u5247\u76F4\u63A5\u522A\u9664\u4E0D\u6DF1\u5165\u6BD4\u8F03
  - \u82E5 \`\`\`tag\`\`\` \u8207 \`\`\`key\`\`\` \u90FD\u76F8\u540C\uFF0C\u5247\u8A8D\u70BA\u76F8\u540C\u7BC0\u9EDE\u4FBF\u4E0D\u6DF1\u5165\u6BD4\u8F03
  - \u4F7F\u7528\u6848\u4F8B\uFF1A\`v-for\`

<hr id="user-content-template-with-syntax" style="height: 2px;">

#### <a href="#user-content-top">JS with \u8A9E\u6CD5</a>
- \u8A72\u8A9E\u6CD5\u4E0D\u5E38\u4F7F\u7528\uFF0C\u4E14\u6703\u9020\u6210\u6613\u8B80\u6027\u5DEE\uFF0C\u6253\u7834\u4F5C\u7528\u57DF\u898F\u5247
- \u7528\u6CD5\uFF1A\u5C07\u50B3\u5165\u5C0D\u8C61\u5F8C\uFF0C\u5C0D\u8C61\u5C6C\u6027\u4EE5\u4F5C\u7528\u57DF\u5167\u7684\u8B8A\u6578\u4F86\u4F7F\u7528
- \u4F7F\u7528\u7BC4\u4F8B
  \`\`\`js
  const obj = {
    a: 100,
    b: 200
  }
  console.log(obj.c) // undefined

  /*
    \u4F7F\u7528 with \u6703\u6539\u8B8A {} \u5167\u7684\u67E5\u627E\u8B8A\u91CF\u7684\u65B9\u5F0F
    \u5C07 {} \u5167\u7684\u8B8A\u91CF\uFF0C\u7576\u505A obj \u7684\u5C6C\u6027\u4F86\u67E5\u627E
  */
  with(obj){
    console.log(a)
    console.log(b)
    console.log(c) // \u56E0\u70BA\u5339\u914D\u4E0D\u5230 obj \u5C6C\u6027\u6240\u4EE5\u5831\u932F
  }
  \`\`\`

<hr id="user-content-template-compiler" style="height: 2px;">

#### <a href="#user-content-top">template compiler</a>
- \u5B89\u88DD\u74B0\u5883\uFF1A\`npm i vue-template-compiler --save\`
- \`vnode\` \u751F\u6210\u904E\u7A0B\u5982\u4E0B\uFF1A
  \`\`\`txt
  \u85C9\u7531 vue-template-compiler 
  \u5C07\u6A21\u677F\u7DE8\u8B6F\u70BA render \u51FD\u6578
  \u57F7\u884C render \u51FD\u6578(\u6703\u89F8\u767C data getter)\u751F\u6210 vnode
  \`\`\`
- \u6E90\u78BC\u5404\u5C6C\u6027\u4EE3\u8868\u610F\u601D\uFF1A
  \`\`\`js
  /*
    \u6B64\u5916 _c \u4EE3\u8868 createElement \u6703\u8FD4\u56DE\u4E00\u500B vnode\uFF0C
    \u8207 snabbdom \u7684 h \u51FD\u6578\u4E00\u6A23
  */
  function installRenderHelpers (target) {
    target._o = markOnce;
    target._n = toNumber;
    target._s = toString;
    target._l = renderList;
    target._t = renderSlot;
    target._q = looseEqual;
    target._i = looseIndexOf;
    target._m = renderStatic;
    target._f = resolveFilter;
    target._k = checkKeyCodes;
    target._b = bindObjectProps;
    target._v = createTextVNode;
    target._e = createEmptyVNode;
    target._u = resolveScopedSlots;
    target._g = bindObjectListeners;
    target._d = bindDynamicKeys;
    target._p = prependModifier;
  }
  \`\`\`
- \u6848\u4F8B1\uFF1A\u63D2\u503C
  \`\`\`js
  /*
    \u8F38\u51FA\uFF1Awith(this){return _c('p',[_v(_s(message))])}
    \u9019\u908A\u5C31\u6703\u7528\u5230js \u7684 with \u8A9E\u6CD5\uFF0C\u4E26\u4E14 this \u70BA\uFF1Anew Vue({...})
    \u5176\u4E2D _c('p',[_v(_s(message))]) \u5F88\u50CF snabbdom \u7684 h \u51FD\u6578\uFF1Ah('p', {}, [...])
  */
  const template = \`<p>{{message}}</p>\`
  console.log(compiler.compile(template));
  \`\`\`
- \u6848\u4F8B2\uFF1A\u8868\u9054\u5F0F
  \`\`\`js
  /*
    \u8F38\u51FA\uFF1Awith(this){return _c('p',[_v(_s(flag ? message : 'no message found'))])}
  */
  const template = \`<p>{{flag ? message : 'no message found'}}</p>\`
  console.log(compiler.compile(template));
  \`\`\`
- \u6848\u4F8B3\uFF1A\u7236\u5B50\u6A19\u7C64\u8207\u5C6C\u6027
  \`\`\`js
  /*
    \u8F38\u51FA\uFF1A
    with(this){
      return _c('div',
      {staticClass:"container",attrs:{"id":"div1"}},[_c('img',{attrs:{"src":imgUrl}})])
    }
  */
  const template = \`
    <div id="div1" class="container">
      <img :src="imgUrl"/>
    </div>
  \`
  console.log(compiler.compile(template));
  \`\`\`
- \u6848\u4F8B4\uFF1A\u689D\u4EF6\u5224\u65B7
  \`\`\`js
  /*
    \u8F38\u51FA\uFF1A
    with(this){return _c('div',[(flag === 'a')?_c('p',[_v("A")]):_c('p',[_v("B")])])}
  */
  const template = \`
    <div>
      <p v-if="flag === 'a'">A</p>
      <p v-else>B</p>
    </div>
  \`
  console.log(compiler.compile(template));
  \`\`\`
- \u6848\u4F8B5\uFF1A\u5FAA\u74B0
  \`\`\`js
  /*
    \u8F38\u51FA\uFF1A
    with(this){
      return _c('ul',
      _l((list),function(item){return _c('li',{key:item.id},[_v(_s(item.title))])}),0)
    }
  */
  const template = \`
    <ul>
      <li v-for="item in list" :key="item.id">{{item.title}}</li>
    </ul>
  \`
  console.log(compiler.compile(template));
  \`\`\`
- \u6848\u4F8B6\uFF1A\u4E8B\u4EF6
  \`\`\`js
  /*
    \u8F38\u51FA\uFF1A
    with(this){
      _c('button',{on:{"click":clickHandler}},[_v("submit")])
    }
  */
  const template = \`<button @click="clickHandler">submit</button>\`
  console.log(compiler.compile(template));
  \`\`\`
- \u6848\u4F8B7\uFF1A\`v-model\`
  \`\`\`js
  /*
    \u8F38\u51FA\uFF1A
    with(this){
      return _c('input',{
        directives:[{
          name:"model",
          rawName:"v-model",
          value:(name),expression:"name"
        }],
        attrs:{
          "type":"text"
        },
        domProps:{"value":(name)},
        on:{"input":function($event){if($event.target.composing)return;name=$event.target.value}
      })
    }
  */
  const template = \`<input type="text" v-model="name">\`
  console.log(compiler.compile(template));
  \`\`\`
- \u7D50\u5408\u4EE5\u4E0A\u5373\u770B\u61C2 \`render\` \u51FD\u6578\u5982\u4F55\u61C9\u7528\uFF1A
  \`\`\`js
  Vue.component('anchored-heading', {
    // template: \`xxx\`,
    render: function (createElement) {
      return createElement(
        'h' + this.level,   // tag name
        this.$slots.default // array of children
      )
    },
    props: {
      level: {
        type: Number,
        required: true
      }
    }
  })
  \`\`\`

<hr id="user-content-component-render-update" style="height: 2px;">

#### <a href="#user-content-top">\u7D44\u4EF6\u6E32\u67D3\u8207\u66F4\u65B0\u6D41\u7A0B</a>
- \u4EE5\u4E0B\u70BA\u89F8\u767C\u66F4\u65B0\u7D44\u4EF6\u6642\uFF0C\`\u7570\u6B65\u6E32\u67D3\` \u7684\u904E\u7A0B\uFF1A
  - 1.\u57F7\u884C \`render\` \u51FD\u6578\u6642\u6703\u89F8\u767C \`getter\`\uFF0C\u4E26\u751F\u6210 \`Virtual DOM\`
  - 2.\u89F8\u767C \`getter\` \u4E26\u6536\u96C6\u4F9D\u8CF4\u81F3 \`watcher\` \u88E1\u9762
  - 3.\u82E5\u89F8\u767C \`setter\` \u5247\u6AA2\u67E5\u662F\u5426\u6709\u4F9D\u8CF4\u53BB\u89F8\u767C \`watcher\`\uFF0C\u4E26\u518D\u6B21\u89F8\u767C \`render\` \u51FD\u6578\uFF0C\u9032\u884C\u91CD\u65B0\u6E32\u67D3
- \u70BA\u4F55\u9700\u8981\u7570\u6B65\u6E32\u67D3\uFF1F
  - \u5F59\u7E3D\u8CC7\u6599\u7684\u4FEE\u6539\uFF0C\u4E00\u6B21\u6027\u66F4\u65B0\u9801\u9762\uFF0C\u4EE5\u6E1B\u5C11 \`DOM\` \u64CD\u4F5C\u6B21\u6578
  - \u5982\u9700\u8981\u53D6\u5F97\u66F4\u65B0\u5F8C\u9801\u9762\u7D44\u4EF6\uFF0C\u9700\u4F7F\u7528 \`nextTick\`
- \u4E00\u500B\u6709\u8DA3\u7684\u554F\u984C\uFF1A\u70BA\u4F55 \`data\` \u5C6C\u6027\u9700\u8981\u7528\u51FD\u6578\uFF1A\`data(){}\`
  - \u7B54\uFF1A\u56E0\u70BA\u6700\u5F8C\u6703\u5C01\u88DD\u6210 \`class\`\uFF0C\u9019\u6A23\u5BEB\u53EF\u4EE5\u7BC0\u7701\u8A18\u61B6\u9AD4
  - \u53C3\u8003[\u89E3\u7B54](https://stackoverflow.com/a/46826903/9151543)

<hr id="user-content-proxy" style="height: 2px;">

#### <a href="#user-content-top">Proxy \u5BE6\u73FE\u97FF\u61C9\u5F0F</a>
- \u700F\u89BD\u5668[\u652F\u63F4](https://caniuse.com/?search=proxy)
  - \u4E0D\u652F\u63F4 \`IE\` \u700F\u89BD\u5668
- \u8207 \`Object.defineProperty\` \u6BD4\u8F03
  - \u6DF1\u5EA6\u76E3\u807D\uFF0C\u6027\u80FD\u66F4\u597D
  - \u53EF\u76E3\u807D\u65B0\u589E\u8207\u522A\u9664\u5C6C\u6027
  - \u53EF\u76E3\u807D\u6578\u7D44\u7684\u8B8A\u5316
  - \u7121\u6CD5\u517C\u5BB9\u6240\u6709\u700F\u89BD\u5668\u3001\u7121\u6CD5 \`polyfill\`
    - \`polyfill\` \u6307\u820A\u700F\u89BD\u5668\u5BE6\u73FE\u6216\u6A21\u64EC\u73FE\u6709\u7248\u672C\u5DF2\u5BE6\u73FE\u4E4B\u529F\u80FD\u7684\u7A0B\u5F0F\u78BC
- \`Reflect\` \u7684\u4F5C\u7528
  - \u548C \`proxy\` \u80FD\u529B\u4E00\u4E00\u5C0D\u61C9
  - \u898F\u7BC4\u5316\u3001\u6A19\u6E96\u5316\u3001\u51FD\u6578\u5F0F\uFF0C\u5982\u4EE5\u4E0B\uFF1A
    - \`key in obj\` \u8207 \`Reflect.has(obj, 'key')\` \u76F8\u5C0D\u61C9
    - \`delete obj.key\` \u8207 \`Reflect.deleteProperty(obj, 'key')\` \u76F8\u5C0D\u61C9
  - \u66FF\u4EE3\u6389 \`Object\` \u7684\u5DE5\u5177\u51FD\u6578\uFF0C\u4F7F \`Object\` \u76E1\u53EF\u80FD\u4F5C\u70BA\u7D14\u8CC7\u6599\u7D50\u69CB\uFF0C\u5982\u4EE5\u4E0B\uFF1A
    - \`Object.getOwnPropertyNames\` \u8207 \`Reflect.ownKeys\`
- \u53C3\u8003\u7BC4\u4F8B\uFF1A
  \`\`\`js
  // \u5EFA\u7ACB\u97FF\u61C9\u5F0F
  function reactive(target = {}) {
    if (typeof target !== 'object' || target == null) {
      // \u82E5\u975E\u5C0D\u8C61\u6216\u6578\u7D44\u5247\u8FD4\u56DE
      return target
    }

    // \u4EE3\u7406\u914D\u7F6E
    const proxyConf = {
      get(target, key, receiver) {
        // \u53EA\u8655\u7406\u672C\u8EAB(\u975E\u539F\u578B)\u5C6C\u6027
        const ownKeys = Reflect.ownKeys(target)
        if (ownKeys.includes(key)) {
          console.log('get', key)
        }

        const result = Reflect.get(target, key, receiver)
        /*
          \u82E5\u6709\u4E0B\u4E00\u5C64\u5247\u5F80\u4E0B\u76E3\u807D
          \u8207 Object.defineProperty \u4E0D\u540C\u7684\u5730\u65B9\uFF1A
          \u4E0D\u6703\u4E00\u6B21\u6027\u6DF1\u5165\u76E3\u807D\u5B8C\u7562\uFF0C\u6703\u4F9D\u9700\u6C42\u547C\u53EB\uFF0C\u5982\uFF1A
          \u82E5\u5C64\u7D1A\u95DC\u4FC2\u70BA\uFF1A obj.a.b.c\uFF0C\u8ABF\u7528 obj.a
          \u5247 proxy \u53EA\u6703\u5230 a \u5C64\u7D1A\u4E0D\u6703\u7E7C\u7E8C\u5F80\u4E0B
          \u4F46 Object.defineProperty \u6703\u4E00\u76F4\u5411\u4E0B\u76F4\u5230\u7D50\u675F
        */
        return reactive(result)
      },
      set(target, key, val, receiver) {
        // \u4E0D\u8655\u7406\u91CD\u8907\u7684\u8CC7\u6599
        if (val === target[key]) {
          return true
        }

        const ownKeys = Reflect.ownKeys(target)
        if (ownKeys.includes(key)) {
          console.log('\u5DF2\u6709\u7684 key', key)
        } else {
          console.log('\u65B0\u589E\u7684 key', key)
        }

        const result = Reflect.set(target, key, val, receiver)
        console.log('set', key, val)
        return result // \u6703\u56DE\u50B3 boolean \u4EE5\u4EE3\u8868\u662F\u5426\u8BBE\u7F6E\u6210\u529F
      },
      deleteProperty(target, key) {
        const result = Reflect.deleteProperty(target, key)
        console.log('delete property', key)
        return result // \u6703\u56DE\u50B3 boolean \u4EE5\u4EE3\u8868\u662F\u5426\u5220\u9664\u6210\u529F
      }
    }

    // \u5275\u5EFA\u4EE3\u7406\u5C0D\u8C61
    const observed = new Proxy(target, proxyConf)
    return observed
  }

  // \u6E2C\u8A66\u6578\u64DA
  const data = {
    name: 'mingming',
    age: 20,
    info: {
      city: 'taipei',
      a: {
        b: {
          c: {
            d: {
              e: 100
            }
          }
        }
      }
    }
  }

  const proxyData = reactive(data)
  \`\`\`
`;let a=e(!0),u=e(!1),m=e(!0),h=e(!1);const v=e(""),T={name:"VueNote",components:{Loading:k},setup(){return j(async()=>{if(a.value){const r=f({html:!0,linkify:!0,typographer:!0,highlight(i,s){return y.highlight(i,{language:s}).value}}).use(w);v.value=r.render(`${O}`),await t(()=>{a.value=!1},1e3).then(()=>t(()=>{m.value=!1,h.value=!0},500)).then(()=>t(()=>{u.value=!0,l()},100))}else l()}),x(),{showLoading:a,showContent:u,displayLoading:m,displayContent:h,htmlContent:v}}},_=["innerHTML"];function B(r,i,s,n,N,R){const g=V("Loading");return o(),c(M,null,[n.displayLoading?(o(),C(g,{key:0,class:p({"content--hide":!n.showLoading,"content--show":n.showLoading})},null,8,["class"])):d("",!0),n.displayContent?(o(),c("div",{key:1,class:p({"markdown-content":!0,"content--hide":!n.showContent,"content--show":n.showContent})},[A("div",{class:"markdown-body",innerHTML:n.htmlContent},null,8,_)],2)):d("",!0)],64)}const G=b(T,[["render",B]]);export{G as default};

const n=`<span style="font-size: 32px; font-weight: 600;">Vue.js \u57FA\u672C\u4F7F\u7528</span>

## \u4ECB\u7D39\u8207\u5B89\u88DD
- \u4EC0\u9EBC\u662F \`Vue.js\` ?\uFF1A\u4E00\u500B\u7528\u65BC\u69CB\u5EFA\u7528\u6236\u754C\u9762\u7684\u6F38\u9032\u5F0F\u6846\u67B6\u3002\u88AB\u8A2D\u8A08\u70BA\u53EF\u4EE5\u81EA\u5E95\u5411\u4E0A\u9010\u5C64\u61C9\u7528\uFF0C\u5176\u6838\u5FC3\u5EAB\u53EA\u95DC\u6CE8\u8996\u5716\u5C64
- \u5B89\u88DD\u4F7F\u7528\u65B9\u5F0F\u8ACB\u67E5\u770B[\u5B98\u7DB2](https://v3.cn.vuejs.org/guide/installation.html#%E5%AE%89%E8%A3%85)

## \u7D44\u4EF6\u7684\u57FA\u790E\u6982\u5FF5
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

## \u4E86\u89E3\u751F\u547D\u9031\u671F
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

## \u5E38\u7528\u6A21\u677F\u8A9E\u6CD5
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

## methods\u3001computed\u3001watcher
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
  - \u5F9E\u5167\u5230\u5916\uFF1A\u88E1\u9762\u53C3\u6578\u6709\u8B8A\u52D5\uFF0C\u6703\u66F4\u65B0 \`computed\` \u7684\u503C
  - \`data\` \u8207 \`computed\` \u4E0D\u80FD\u6709\u540C\u540D\u5C6C\u6027\uFF0C\u5426\u5247\u6703\u5831\u932F  
- \`\`\`watch\`\`\`\uFF1A\u82E5\u9700\u8981\u5728\u67D0\u500B\u6578\u64DA\u8B8A\u5316\u6642\u505A\u4E00\u4E9B\u4E8B\u60C5\uFF0C\u5247\u4F7F\u7528 \`\`\`watch\`\`\` \u4F86\u89C0\u5BDF\u9019\u500B\u6578\u64DA\u8B8A\u5316
  - \u5F9E\u5916\u5230\u5167\uFF1A\u7576\u503C\u6539\u8B8A\u6642\uFF0C\u57F7\u884C\u5C0D\u61C9\u7684\u51FD\u6578
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
      },
      // \u82E5\u60F3\u76E3\u807D\u5C0D\u8C61\u5167\u6240\u6709\u5C6C\u6027
      test: {
        handler: function(newValue){
          console.log(newValue.aaa);
        },
        deep: true,
        // \u8981\u6C42\u7ACB\u5373\u57F7\u884C\u4E00\u6B21
        immediate: true
      },
      // \u82E5\u60F3\u76E3\u807D\u5C0D\u8C61\u5167\u55AE\u500B\u5C6C\u6027
      'test.aaa'(){
        console.log('ok1')
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

## CSS\u5E38\u7528\u7D81\u5B9A\u65B9\u6CD5
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

## CSS Deep Selector
- \u6709\u6642\u5728\u5C08\u6848\u4E2D \`style\` \u770B\u5230\u6B64\u8A9E\u6CD5 \`::v-deep\`\u3001\`:deep(.xxx)\`
- \u4E3B\u8981\u65B9\u4FBF\u5B50\u5143\u4EF6\u7E7C\u627F\u7236\u5143\u4EF6\u7684\u6A23\u5F0F
- \u7BC4\u4F8B\uFF0C\u986F\u793A\u6548\u679C\uFF1A\u9996\u9801\u3001Message \u5167\u5C64\u70BA\u7D05\u8272\uFF0CMessage \u5916\u5C64\u70BA\u85CD\u8272
  \`\`\`vue
  <!-- \u7236 -->
  <template>
    <div class="home">
      <span>\u9996\u9801</span>
      <Message />
    </div>
  </template>
  
  <script>
  import Message from "@/components/Message";
  export default {
    components: {
      Message,
    },
  };
  <\/script>
  <style lang="scss" scoped>
  span {
    color: red;
  }

  // ::v-deep \u524D\u9762\u7A7A\u683C\u53EF\u5BEB\u53EF\u4E0D\u5BEB
  .home ::v-deep .message {
    color: red;
  }
  /* \u6216\u4F7F\u7528\u6700\u65B0\u5BEB\u6CD5\uFF0C:deep \u524D\u9762\u7A7A\u683C\u53EF\u5BEB\u53EF\u4E0D\u5BEB
  .home :deep(.message) {
    color: red;
  } 
  */
  </style>
  
  <!-- \u5B50 -->
  <template>
    <div>
      <span>
        Message \u5916\u5C64
        <span class="message">Message \u5167\u5C64</span>
      </span>
    </div>
  </template>
  
  <script>
  export default {};
  <\/script>
  
  <style lang="scss" scoped>
  span {
    color: blue;
  }
  </style>
  \`\`\`

## \u689D\u4EF6\u6E32\u67D3
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

## \u5FAA\u74B0\u6E32\u67D3
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

## \u4E8B\u4EF6\u7D81\u5B9A
- \`\`\`v-on\`\`\` \u53EF\u4EE5\u4F7F\u65B9\u6CD5\u8207\u6A19\u7C64\u9032\u884C\u7D81\u5B9A\u89F8\u767C\u4E8B\u4EF6
- \`\`\`v-on\`\`\` \u53EF\u4EE5\u7C21\u5BEB\u6210 \`\`\`@\`\`\`\uFF0C\u5982\uFF1A\`\`\`@click\`\`\`
- \`hover\` \u529F\u80FD\u4E8B\u4EF6
  - \u524D\u4E94\u500B\u89F8\u767C\u9806\u5E8F\u70BA(\u55AE\u500B\u5143\u7D20\u6216\u7236\u5B50\u6574\u500B\u91CD\u758A)\uFF1A
    - \`@mouseover\` > \`@mouseenter\` > \`@mousemove(\u9032\u5165\u5143\u7D20\u5F8C\u79FB\u52D5\u6703\u89F8\u767C)\` > \`@mouseout\` > \`@mouseleave\`
  - \u7236\u542B\u5B50\u5143\u7D20\u4E14\u4E0D\u5B8C\u5168\u647A\u758A\u9806\u5E8F(\u5916>\u7236>\u5B50>\u7236>\u5916)\uFF1A
    \`\`\`txt
    mouseover 
    mouseenter 
    mousemove (\u9032\u5165\u5143\u7D20\u5F8C\u79FB\u52D5\u6703\u89F8\u767C)
    mouseout (\u7236 > \u5B50)
    mouseover (\u56E0\u70BA\u4E0D\u542B\u5B50\u5143\u7D20\uFF0C\u6240\u4EE5\u6C92\u6709 enter)
    mousemove (\u9032\u5165\u5143\u7D20\u5F8C\u79FB\u52D5\u6703\u89F8\u767C)
    mouseout (\u5B50 > \u7236)
    mouseover (\u56E0\u70BA\u7236\u672C\u8EAB\u5DF2\u7D93\u662F enter \u72C0\u614B\u6240\u4EE5\u4E0D\u518D\u89F8\u767C)
    mousemove (\u9032\u5165\u5143\u7D20\u5F8C\u79FB\u52D5\u6703\u89F8\u767C)
    mouseout 
    mouseleave 
    \`\`\`
  - \`@mouseover\`\uFF1A\u9032\u5165\u5143\u7D20\u89F8\u767C(\u542B\u5B50\u5143\u7D20\uFF0C\u6703\u91CD\u8907\u89F8\u767C)\uFF0C\u5C0D\u61C9\u4E8B\u4EF6\u70BA \`@mouseout\`
  - \`@mouseenter\`\uFF1A\u9032\u5165\u5143\u7D20\u89F8\u767C(\u4E0D\u542B\u5B50\u5143\u7D20)\uFF0C\u5C0D\u61C9\u4E8B\u4EF6\u70BA \`@mouseleave\`
  - \`@mousemove\`\uFF1A\u5728\u5143\u7D20\u5167\u79FB\u52D5\u89F8\u767C(\u542B\u5B50\u5143\u7D20)
  - \`@mouseout\`\uFF1A\u96E2\u958B\u5143\u7D20\u6642\u89F8\u767C(\u542B\u5B50\u5143\u7D20)
  - \`@mouseleave\`\uFF1A\u96E2\u958B\u5143\u7D20\u6642\u89F8\u767C(\u4E0D\u542B\u5B50\u5143\u7D20)
  - \`@mousedown\`\uFF1A\u9F20\u6A19\u5728\u5143\u7D20\u4E0A\u9EDE\u4E0B
  - \`@mouseup\`\uFF1A\u9F20\u6A19\u5728\u5143\u7D20\u4E0A\u9EDE\u4E0B\u5F8C\u653E\u958B
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

## \u8868\u55AE\u96D9\u5411\u7D81\u5B9A
- \`v-model\` \u53EF\u4EE5\u4F7F\u8CC7\u6599\u8207\u6A19\u7C64\u6216\u7D44\u4EF6\u9032\u884C\u96D9\u5411\u8CC7\u6599\u7D81\u5B9A
  - \`v-bind\` \u53EA\u80FD\u55AE\u5411\u5C0D\u6A19\u7C64\u6216\u7D44\u4EF6\u9032\u884C\u7D81\u5B9A
- \u5E38\u7528\u4FEE\u9970\u7B26\u6709\u4EE5\u4E0B\u5E7E\u500B\uFF1A
  - \`\`\`v-model.lazy\`\`\` \u7576\u8A72\u6A19\u7C64\u5931\u53BB\u7126\u9EDE\u6642\u624D\u540C\u6B65\u6578\u64DA
  - \`\`\`v-model.number\`\`\`\u8F38\u5165\u6578\u5B57\u5F8C\u81EA\u52D5\u8F49\u6210\u6578\u5B57\u518D\u5B58\u5230 \`\`\`data\`\`\`(\u9810\u8A2D\u70BA\u5B57\u7B26\u4E32)
  - \`\`\`v-model.trim\`\`\` \u8F38\u5165\u5B57\u7B26\u4E32\u5F8C\u81EA\u52D5\u5C07\u524D\u5F8C\u7A7A\u683C\u53BB\u9664\u518D\u5B58\u5230 \`\`\`data\`\`\`(\u8F38\u5165\u6846\u5167\u9084\u662F\u4FDD\u6709\u7A7A\u683C)
- \u8868\u55AE\u5167\u5E38\u7528\u6A19\u7C64\uFF1A\`\`\`input\u3001textarea\u3001checkbox\u3001radio\u3001select\`\`\`
  - \u5982\u679C \`\`\`input\`\`\` \u5DF2\u7D93\u7528 \`\`\`v-model\`\`\` \u5247\u7121\u9700\u7528 \`\`\`value\`\`\` \u8A2D\u503C
  - \u5982\u679C \`\`\`textarea\`\`\` \u5DF2\u7D93\u7528 \`\`\`v-model\`\`\` \u5247\u6703\u81EA\u52D5\u7D81\u5B9A

### radio \u7528\u6CD5 
\`\`\`js
/*
  data \u8A2D\u7F6E check:'' (\u4E00\u822C\u5B57\u7B26\u4E32\u5373\u53EF,\u7576\u7136\u6578\u7D44\u4E5F\u53EF\u4F46\u4E0D\u59A5\u7576)
  <input type="radio" v-model="check" value="okok1"
  <input type="radio" v-model="check" value="okok2"
  \u5247\u7576\u88AB\u52FE\u8D77\u6642\u6703\u81EA\u52D5\u65B0\u589E\u5230check:'okok1'
*/
\`\`\`

### checkbox \u7528\u6CD5
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

### select \u7528\u6CD5
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

### \u9032\u968E\uFF1A\u5BE6\u73FE v-model
  - \u5BE6\u73FE\u7D44\u4EF6 \`v-model\`\uFF1A
    \`\`\`html
    <input type="text" v-model="name" />
    <!-- \u4E0A\u4E0B\u7B49\u50F9 -->
    <input type="text" :value="name" @input="name = $event.target.value" />
    \`\`\`
  - \u5BE6\u73FE\u7236\u5B50\u7D44\u4EF6\u901A\u8A0A\uFF0C\u4F7F\u7528 \`v-model\`\uFF1A
    \`\`\`html
    <!-- \u7236\u7D44\u4EF6\u5167 -->
    <!-- test.a \u53EF\u4EE5\u63DB\u6210\u5176\u4ED6\uFF0C\u5982\uFF1AmyValue -->
    <child-model v-model="test.a" />

    <!-- \u5B50\u7D44\u4EF6\u5167 -->
    <!-- \u82E5\u975E input\uFF0C\u53EF\u4EE5\u7528 watch \u76E3\u807D\u89F8\u767C -->
    <input :value="value" @input="$emit('input', $event.target.value)" />
    \`\`\`
  - \u5BE6\u73FE\u7236\u5B50\u7D44\u4EF6\u901A\u8A0A\uFF0C\u4F7F\u7528 \`v-bind\`\uFF1A
    \`\`\`html
    <!-- \u7236\u7D44\u4EF6\u5167 -->
    <!-- \u901A\u904E\u5C6C\u6027\u540D\u5F8C\u52A0.sync\u7684\u65B9\u5F0F\u53BB\u50B3\u905E\u6578\u64DA -->
    <!-- \u7B49\u50F9\u65BC <child-model :title="myValue" @update:title="myValue = $event"/> -->
    <child-model :title.sync="myValue" />
  
    <!-- \u5B50\u7D44\u4EF6\u5167 -->
    <!-- \u63A5\u53D7title\u5F8C\uFF0C\u4F7F\u7528$emit\u53BB\u66F4\u65B0\u7236\u7D44\u4EF6\u50B3\u905E\u904E\u4F86\u7684\u5C6C\u6027\u503C title -->
    <input :value="title" @input="$emit('update:title', $event.target.value)" />
    \`\`\`
`;export{n as default};

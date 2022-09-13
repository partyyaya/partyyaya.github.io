import{m as v}from"./markdown-it-37da2622.js";import{H as b}from"./highlight.js-867ee1b1.js";import{_ as f,L as y,t as n,s as i,u as N}from"../js/index-3fe1e07a.js";import{m as _}from"./mdCopy-ec244029.js";import{r as e,o as A,q as w,k as s,l as u,t as S,v as p,x as l,y as $,F as j}from"./@vue-50cf967a.js";import"./clipboard-12221ac4.js";import"./entities-96bc23f9.js";import"./uc.micro-174787a3.js";import"./mdurl-4b1f5cdc.js";import"./linkify-it-59decb82.js";import"./punycode-f726180d.js";import"./vue-i18n-2d92e57f.js";import"./@intlify-f70c4c62.js";import"./vue-router-339d5de3.js";/* empty css                      */import"./lodash-acc62a92.js";const V=`## Vuex \u7B46\u8A18
<a id="user-content-top"></a>

### \u76EE\u9304
<details open>
<summary style="cursor: pointer;">&nbsp;\u76EE\u9304\u6E05\u55AE </summary>

- [\u57FA\u672C\u4ECB\u7D39\u8207\u5B89\u88DD](#user-content-vuex-introduce)
- [state \u8207 mapState](#user-content-vuex-state-mapstate)
- [getters \u8207 mapGetters](#user-content-vuex-getters-mapgetters)
- [mutations \u8207 mapMutations](#user-content-vuex-mutations-mapmutations)
- [actions \u8207 mapActions](#user-content-vuex-actions-mapactions)

</details>

<hr id="user-content-vuex-introduce" style="height: 2px;">

#### <a href="#user-content-top">\u57FA\u672C\u4ECB\u7D39\u8207\u5B89\u88DD</a>
- \u4EC0\u9EBC\u662F \`\`\`Vuex\`\`\` ?\uFF1A
  \`\`\`txt
  \u4E00\u500B\u7A0B\u5E8F\u88E1\u9762\u7684\u72C0\u614B\u7BA1\u7406\u6A21\u5F0F\uFF0C\u96C6\u4E2D\u5F0F\u5B58\u5132\u6240\u6709\u7D44\u4EF6\u7684\u72C0\u614B\u7684\u5C0F\u5009\u5EAB\uFF0C
  \u4E26\u4FDD\u6301\u5B58\u5132\u7684\u72C0\u614B\u4EE5\u4E00\u7A2E\u53EF\u9810\u6E2C\u7684\u65B9\u5F0F\u767C\u751F\u8B8A\u5316\u3002
  \`\`\`
- \u5B89\u88DD\u4F7F\u7528\u65B9\u5F0F\u8ACB\u67E5\u770B[\u5B98\u7DB2](https://vuex.vuejs.org/zh/installation.html)
- \u4E3B\u8981\u4F5C\u7528\uFF1A\u65B9\u4FBF\u4EFB\u4F55\u7D44\u4EF6\u96A8\u6642\u53EF\u53D6\u5F97\u8CC7\u6599\u5B58\u5132\u7684\u72C0\u614B\uFF0C\u89E3\u6C7A\u7D44\u4EF6\u9593\u4E92\u50B3\u8CC7\u6599\u72C0\u614B\u7684\u56F0\u96E3
- \u8CC7\u6599\u72C0\u614B\u66F4\u65B0\u6D41\u7A0B\uFF1A
  - \u540C\u6B65\uFF1A
    \`\`\`txt
    Vue   commit                       \u6E32\u67D3
    \u7D44\u4EF6 --------> mutations -> state ------> \u7D44\u4EF6
    \`\`\`
  - \u7570\u6B65\uFF1A
    \`\`\`txt
    Vue   dispatch    \u547C\u53EB    commit                       \u6E32\u67D3
    \u7D44\u4EF6 ----------> actions --------> mutations -> state ------> \u7D44\u4EF6
    \`\`\`

<hr id="user-content-vuex-state-mapstate" style="height: 2px;">

#### <a href="#user-content-top">state \u8207 mapState</a>
- \u4F7F\u7528\u65B9\u5F0F\uFF1A
  - \u547C\u53EB \`\`\`store\`\`\` \u7684 \`\`\`state\`\`\` \u65B9\u6CD5
  - \u4F7F\u7528 \`\`\`mapState\`\`\` \u53D6\u5F97 \`\`\`state\`\`\` \u9032\u884C\u4F7F\u7528
- \u7BC4\u4F8B\uFF0C\u4EE5 \`\`\`vue-cli\`\`\` \u70BA\u4F8B\u5B50\uFF1A
  - \u5728\u9019\u4E4B\u5F8C\u7BC4\u4F8B\u90FD\u6703\u4F7F\u7528\u8A72\u96DB\u5F62\uFF0C\`\`\`main.js\`\`\` \u57FA\u672C\u4E0A\u4E0D\u6703\u66F4\u6539
  - \`\`\`store/index.js\`\`\`
    \`\`\`js
    // \u8A2D\u5B9A Vuex \u8CC7\u6599
    import { createStore } from 'vuex'
    export default createStore({
      state: {
        name: 'test',
        number: 0,
        list: [
          { id: 1, name: '111' },
          { id: 2, name: '222' },
          { id: 3, name: '333' },
        ]
      }
    })
    \`\`\`
  - \`\`\`main.js\`\`\`
    \`\`\`js
    import { createApp } from 'vue'
    import App from './App.vue'
    import store from './store'
    createApp(App).use(store).mount('#app')
    \`\`\`
  - \`\`\`App.vue\`\`\`
    \`\`\`html
    <template>
      <div>{{name}}</div>
      <div>{{number}}</div>
    </template>

    <script>
    import { mapState } from 'vuex';
    export default {
      mounted() {
        // \u4F7F\u7528this.$store.state.XXX \u53EF\u76F4\u63A5\u8A2A\u554F Vuex state \u8CC7\u6599\u72C0\u614B
        console.log(this.$store.state.name);// test
      },
      // \u5B98\u65B9\u5EFA\u8B701\uFF1A\u4F7F\u7528 computed \u4F86\u53D6\u5F97\u6700\u65B0\u7684\u8CC7\u6599\u72C0\u614B
      computed: {
        getName() {
          return this.$store.state.name;
        },
        // \u5B98\u65B9\u5EFA\u8B702\uFF1A\u4F7F\u7528 mapStat \u66F4\u65B9\u4FBF\u53D6\u5F97\u8CC7\u6599
        ...mapState(['name','number']),
        // \u53EF\u4EE5\u53D6\u5225\u540D
        ...mapState({ aliasName: 'name' })// test
      },
    }
    <\/script>
    \`\`\`

<hr id="user-content-vuex-getters-mapgetters" style="height: 2px;">

#### <a href="#user-content-top">getters \u8207 mapGetters</a>
- \u4F7F\u7528\u5834\u666F\uFF1A\u9700\u8981\u5C0D\u8CC7\u6599\u72C0\u614B\u505A\u4FEE\u98FE\uFF0C\u4E26\u4E14\u591A\u500B\u7D44\u4EF6\u9700\u8981\u4F7F\u7528
  - \u5982\u4F7F\u7528\u8005\u7A31\u547C\uFF1A\u6B61\u8FCE\uFF0C\u67D0\u67D0\u67D0 \u6539\u6210 \u60A8\u597D\uFF0C\u67D0\u67D0\u67D0
- \u4F7F\u7528\u65B9\u5F0F\uFF1A
  - \u547C\u53EB \`\`\`store\`\`\` \u7684 \`\`\`getters\`\`\` \u65B9\u6CD5
  - \u4F7F\u7528 \`\`\`mapGetters\`\`\` \u53D6\u5F97 \`\`\`getters\`\`\` \u65B9\u6CD5\u9032\u884C\u4F7F\u7528
- \u7BC4\u4F8B\uFF1A
  - \`\`\`store/index.js\`\`\`
    \`\`\`js
    import { createStore } from 'vuex'
    export default createStore({
      state: {
        name: 'test',
        number: 0,
        list: [
          { id: 1, name: '111' },
          { id: 2, name: '222' },
          { id: 3, name: '333' },
        ]
      },
      // \u5728store\u5BF9\u8C61\u4E2D\u589E\u52A0getters\u5C5E\u6027
      getters: {
        // \u7372\u53D6\u4FEE\u98FE\u5F8C\u7684 name\uFF0C\u7B2C\u4E00\u500B\u53C3\u6578\u70BA\u5FC5\u8981\u53C3\u6578
        getUserTitle(state) { 
          return \`hello\uFF0C\${state.name}\`;
        }
      },
    })
    \`\`\`
  - \`\`\`App.vue\`\`\` \u8B8A\u66F4\u4EE3\u78BC\uFF1A
    \`\`\`js
    import { mapGetters } from 'vuex';
    export default {
      mounted() {
        // \u53EF\u4EE5\u4F7F\u7528 this.$store.getters \u7372\u53D6 getters
        console.log(this.$store.getters.getUserTitle);// hello\uFF0Ctest
      },
      computed: {
         // \u5B98\u65B9\u5EFA\u8B70\u53EF\u4EE5\u4F7F\u7528 mapGetters \u9032\u884C\u8ABF\u7528
        ...mapGetters(['getUserTitle']), // hello\uFF0Ctest
        // \u53EF\u4EE5\u53D6\u5225\u540D
        ...mapGetters({ aliasName: 'getUserTitle' })// hello\uFF0Ctest
      }
    }
    \`\`\`

<hr id="user-content-vuex-mutations-mapmutations" style="height: 2px;">

#### <a href="#user-content-top">mutations \u8207 mapMutations</a>
- \u70BA\u4F55\u9700\u8981 \`\`\`mutations\`\`\` ?\uFF1A
  \`\`\`txt
  Vuex \u5C31\u50CF\u4E00\u68DF\u5927\u6A13
  \u82E5\u9700\u8981\u66F4\u6539\u5927\u6A13\u8A2D\u65BD\uFF0C\u6A13\u5C64\u6210\u54E1\u4E0D\u80FD\u96A8\u4FBF\u66F4\u6539(\u7121\u6CD5\u76F4\u63A5\u7528 state \u66F4\u6539)
  \u9700\u8981\u7D93\u904E\u7533\u8ACB\u4E26\u7D93\u904E\u6D41\u7A0B\u624D\u80FD\u505A\u6539\u8B8A(mutations)
  \u800C\u6A13\u5C64\u6210\u54E1\u90FD\u53EF\u4EE5\u7533\u8ACB(\u4EFB\u4F55\u7D44\u4EF6\u90FD\u53EF\u4F7F\u7528 mutations \u6539\u8B8A\u8CC7\u6599\u72C0\u614B)
  \`\`\`
- \u4F7F\u7528\u65B9\u5F0F\uFF1A
  - \u547C\u53EB \`\`\`store\`\`\` \u7684 \`\`\`commit\`\`\` \u65B9\u6CD5"\u540C\u6B65"\u4FEE\u6539 \`\`\`Vuex\`\`\` \u8CC7\u6599\u72C0\u614B
  - \u4F7F\u7528 \`\`\`mapMutations\`\`\` \u53D6\u5F97 \`\`\`mutations\`\`\` \u65B9\u6CD5\u9032\u884C\u4F7F\u7528
- \u7BC4\u4F8B\uFF1A
  - \`\`\`store/index.js\`\`\`
    \`\`\`js
    import { createStore } from 'vuex'
    export default createStore({
      state: {
        name: 'test',
        number: 0,
      },
      // \u65B0\u589E mutations \u5C6C\u6027
      mutations: {
        // \u65B0\u589E setNumber \u65B9\u6CD5
        setNumberFive(state) {
          state.number = 5;
        },
        // \u5B98\u65B9\u5EFA\u8B70\u82E5\u8981\u50B3\u7B2C\u4E8C\u500B\u53C3\u6578\uFF0C\u53EF\u50B3\u5C0D\u8C61\u4E26\u547D\u540D\u70BA payload 
        setNumber(state, payload){
          state.number = payload.number;
        }
      },
    })
    \`\`\`
  - \`\`\`App.vue\`\`\` \u8B8A\u66F4\u4EE3\u78BC\uFF1A
    \`\`\`js
    import { mapMutations } from 'vuex';
    export default {
      mounted() {
        // \u53EF\u4EE5\u4F7F\u7528 this.$store.commit \u547C\u53EB mutations \u7684\u65B9\u6CD5
        console.log(this.$store.state.number);// 0
        this.$store.commit('setNumberFive');
        console.log(this.$store.state.number);// 5
        this.$store.commit('setNumber', { number: 777 });// 777
        this.setNumberIsAlias({ number: 999 });// 999
      },
      methods: {   
        // \u9019\u908A\u9700\u6CE8\u610F\uFF0CmapMutations \u662F\u89E3\u69CB\u5230 methods \u88E1\u9762\u7684\uFF0C\u800C\u975E\u8A08\u7B97\u5C6C\u6027
        ...mapMutations(['setNumber']),
        // \u53EF\u4EE5\u53D6\u5225\u540D
        ...mapMutations({ setNumberIsAlias: 'setNumber' }),
      },
    }
    \`\`\`

<hr id="user-content-vuex-actions-mapactions" style="height: 2px;">

#### <a href="#user-content-top">actions \u8207 mapActions</a>
- \u70BA\u4F55\u9700\u8981 \`\`\`actions\`\`\` ?\uFF1A
  \`\`\`txt
  mutations \u8655\u7406\u540C\u6B65\uFF0Cactions \u8655\u7406\u7570\u6B65
  \u5C31\u5982\u540C\u4E00\u500B\u8655\u7406\u570B\u5167\uFF0C\u4E00\u500B\u8655\u7406\u570B\u5916\u696D\u52D9(\u9700\u7B49\u5F85\u8F03\u9577\u6642\u9593)
  \`\`\`
- \u4F7F\u7528\u65B9\u5F0F\uFF1A
  - \u547C\u53EB \`\`\`store\`\`\` \u7684 \`\`\`dispatch\`\`\` \u65B9\u6CD5"\u7570\u6B65"\u4FEE\u6539 \`\`\`Vuex\`\`\` \u8CC7\u6599\u72C0\u614B
  - \u4F7F\u7528 \`\`\`mapActions\`\`\` \u53D6\u5F97 \`\`\`actions\`\`\` \u65B9\u6CD5\u9032\u884C\u4F7F\u7528
- \u7BC4\u4F8B\uFF1A
  - \`\`\`store/index.js\`\`\`
    \`\`\`js
    import { createStore } from 'vuex'
    export default createStore({
      state: {
        name: 'test',
        number: 0,
      },
      mutations: {
        setNumber(state, payload) {
          state.number = payload.number;
        },
      },
      // \u65B0\u589E actions \u5C6C\u6027
      actions: {
        // \u65B0\u589E setNumberFive \u65B9\u6CD5\uFF0C\u7B2C\u4E00\u500B\u53C3\u6578\u70BA content\uFF0C\u662F store \u5C0D\u8C61
        setNumberFive(content) {
          // \u6A21\u64EC\u7570\u6B65\u64CD\u4F5C\uFF0C\u4E00\u79D2\u5F8C\u4FEE\u6539 number
          return new Promise(resolve => {
            setTimeout(() => {
              // \u547C\u53EB mutations \u5167\u7684 setNumber \u65B9\u6CD5
              content.commit('setNumber', { number: 5 });
              resolve();
            }, 1000);
          });
        },
        // content \u53EF\u4EE5\u76F4\u63A5\u89E3\u69CB\u51FA commit\uFF0C\u4E26\u53EF\u4EE5\u50B3\u7B2C\u4E8C\u500B\u53C3\u6578
        setNumber({ commit }, payload) {
          return new Promise(resolve => {
            setTimeout(() => {
              commit('setNumber', { number: payload.number });
              resolve();
            }, 1000);
          });
        }
      }
    })
    \`\`\`
  - \`\`\`App.vue\`\`\` \u8B8A\u66F4\u4EE3\u78BC\uFF1A
    \`\`\`js
    import { mapActions  } from 'vuex';
    export default {
      async mounted() {
        // \u53EF\u4EE5\u4F7F\u7528 this.$store.dispatch \u547C\u53EB actions \u7684\u65B9\u6CD5
        console.log(this.$store.state.number);// 0
        await this.$store.dispatch('setNumberFive');
        console.log(this.$store.state.number);// 5
        await this.$store.dispatch('setNumber', { number: 777 });
        console.log(this.$store.state.number);// 777
        await this.setNumberAlias({ number: 999 })
        console.log(this.$store.state.number);// 999
      },
      methods: {   
        // \u9019\u908A\u9700\u6CE8\u610F\uFF0CmapActions \u662F\u89E3\u69CB\u5230 methods \u88E1\u9762\u7684\uFF0C\u800C\u975E\u8A08\u7B97\u5C6C\u6027
        ...mapActions(['setNumber']),
        // \u53EF\u4EE5\u53D6\u5225\u540D
        ...mapActions({ setNumberAlias: 'setNumber' }),
      },
    }
    \`\`\`
`;let o=e(!0),c=e(!1),d=e(!0),h=e(!1);const x=e(""),C={name:"VuexNote",components:{Loading:y},setup(){return A(async()=>{if(o.value){const a=v({html:!0,linkify:!0,typographer:!0,highlight(r,m){return b.highlight(r,{language:m}).value}}).use(_);x.value=a.render(`${V}`),await n(()=>{o.value=!1},1e3).then(()=>n(()=>{d.value=!1,h.value=!0},500)).then(()=>n(()=>{c.value=!0,i()},100))}else i()}),N(),{showLoading:o,showContent:c,displayLoading:d,displayContent:h,htmlContent:x}}},L=["innerHTML"];function M(a,r,m,t,T,k){const g=w("Loading");return s(),u(j,null,[t.displayLoading?(s(),S(g,{key:0,class:p({"content--hide":!t.showLoading,"content--show":t.showLoading})},null,8,["class"])):l("",!0),t.displayContent?(s(),u("div",{key:1,class:p({"markdown-content":!0,"content--hide":!t.showContent,"content--show":t.showContent})},[$("div",{class:"markdown-body",innerHTML:t.htmlContent},null,8,L)],2)):l("",!0)],64)}const R=f(C,[["render",M]]);export{R as default};

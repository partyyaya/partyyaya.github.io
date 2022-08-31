import{m as v}from"./markdown-it-75be01fa.js";import{H as y}from"./highlight.js-867ee1b1.js";import{_ as w,L as U,t,s as u,u as L}from"../js/index-3fb62596.js";import{m as x}from"./mdCopy-c8cfacf4.js";import{a as e,o as b,j as k,e as r,f as p,k as S,l as h,m as l,q as j,F as H}from"./@vue-6bb656f0.js";import"./clipboard-3a281e2a.js";import"./entities-96bc23f9.js";import"./uc.micro-174787a3.js";import"./mdurl-4b1f5cdc.js";import"./linkify-it-59decb82.js";import"./vue-router-ec6d6ff4.js";/* empty css                      */import"./lodash-7e818ff8.js";const R=`## Vue Router \u7B46\u8A18
<a id="user-content-top"></a>

### \u76EE\u9304
<details open>
<summary style="cursor: pointer;">&nbsp;\u76EE\u9304\u6E05\u55AE </summary>

- [\u4ECB\u7D39\u8207\u5B89\u88DD](#user-content-introduce)
- [\u57FA\u672C\u4F7F\u7528](#user-content-basic-use)
- [\u52D5\u614B\u8DEF\u7531](#user-content-dynamic-route)
- [\u6355\u7372\u6240\u6709\u8DEF\u7531\u8207404\u932F\u8AA4\u8DEF\u7531](#user-content-all-notfound)
- [\u5D4C\u5957\u8DEF\u7531](#user-content-nested-route)
- [\u547D\u540D\u8DEF\u7531](#user-content-named-route)
- [\u91CD\u5B9A\u5411\u8207\u5225\u540D](#user-content-redirect-alias)
- [\u7DE8\u7A0B\u5F0F\u5C0E\u822A](#user-content-programmatic-navigation)
- [\u547D\u540D\u8996\u5716](#user-content-named-views)
- [\u8DEF\u7531\u50B3\u53C3\u6578\u7D66\u7D44\u4EF6](#user-content-routes-params-components)
- [Hash \u8DEF\u7531](#user-content-hash-route)
- [HTML5 History \u8DEF\u7531](#user-content-h5-history-route)
- [\u8DEF\u7531\u5143\u8A0A\u606F \u8207 \u5168\u5C40\u524D\u7F6E\u5B88\u885B](#user-content-meta-beforeeach)

</details>

<hr id="user-content-introduce" style="height: 4px;">

#### <a href="#user-content-top" >\u4ECB\u7D39\u8207\u5B89\u88DD</a>
- \u4EC0\u9EBC\u662F \`\`\`Vue Router\`\`\` ?
  \`\`\`txt
  \u662F Vue.js \u7684\u5B98\u65B9\u8DEF\u7531\uFF0C\u8207 Vue.js \u6838\u5FC3\u6DF1\u5EA6\u96C6\u6210
  \u53EF\u66F4\u65B9\u4FBF\u4F9D\u8DEF\u5F91\u7684\u4E0D\u540C\u4F86\u5207\u63DB\u8996\u5716
  \`\`\`
- \u5B89\u88DD\u4F7F\u7528\u65B9\u5F0F\u8ACB\u67E5\u770B[\u5B98\u7DB2](https://router.vuejs.org/zh/installation.html)

<hr id="user-content-basic-use" style="height: 2px;">

#### <a href="#user-content-top" >\u57FA\u672C\u4F7F\u7528</a>
- \`\`\`router-link\`\`\` \u6A19\u7C64\uFF1A\u4F7F\u7528\u8A72\u7D44\u4EF6\u9032\u884C\u5C0E\u822A
  - \u7528 \`\`\`to\`\`\` \u4F86\u6307\u5B9A\u93C8\u63A5
  - \u6700\u7D42\u6703\u88AB\u6E32\u67D3\u6210\u4E00\u500B\u542B\u6307\u5B9A\u93C8\u63A5 \`\`\`href\`\`\` \u7684 \`\`\`a\`\`\` \u6A19\u7C64 
- \`\`\`router-view\`\`\` \u6A19\u7C64\uFF1A\u5C07\u8DEF\u5F91\u5339\u914D\u5230\u7D44\u4EF6\u6E32\u67D3\u65BC\u8A72\u6A19\u7C64\u4F4D\u7F6E
- \u7BC4\u4F8B\u4EE3\u78BC
  \`\`\`html
  <body>
    <div id="app">
      <ul>
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/foo">Foo</router-link></li>
        <li><router-link to="/bar">Bar</router-link></li>
      </ul>
      <router-view></router-view>
    </div>

    <script>
      const { createRouter, createWebHistory, createWebHashHistory } = VueRouter
      const { createApp } = Vue

      // \u5728\u7D44\u4EF6\u88E1\u9762\u85C9\u7531 this.$router \u53EF\u53D6\u5F97 createRouter \u7684 router \u5C0D\u8C61
      const Home = { template: \`<div>home</div>\` }
      const Foo = { template: '<div>foo</div>' }
      const Bar = { template: '<div>bar</div>' }

      const router = createRouter({
        history: createWebHistory(),
        routes: [
          { path: '/', component: Home },
          { path: '/foo', component: Foo },
          { path: '/bar', component: Bar },
        ],
      })

      const app = createApp({})
      app.use(router)
      app.mount('#app')
    <\/script>
  </body>
  \`\`\`

<hr id="user-content-dynamic-route" style="height: 2px;">

#### <a href="#user-content-top" >\u52D5\u614B\u8DEF\u7531</a>
- [\u5B98\u7DB2\u9023\u7D50](https://router.vuejs.org/zh/guide/essentials/dynamic-matching.html)
- \u53EF\u7528[\u6B63\u5247\u8868\u9054\u5F0F\u5339\u914D\u8DEF\u7531](https://router.vuejs.org/zh/guide/essentials/route-matching-syntax.html)
- \u4F7F\u7528\u60C5\u5883
  \`\`\`txt
  \u5047\u8A2D\u6709\u4E00\u500B user \u4ECB\u9762\u70BA\u5168\u9AD4 user \u4E00\u8D77\u4F7F\u7528
  \u5247\u9700\u5224\u65B7\u9700\u8981\u53D6\u5F97\u54EA\u500B user \u7684\u8CC7\u6599
  \u85C9\u6B64\u52D5\u614B\u8DEF\u7531\u5C31\u53EF\u4EE5\u6D3E\u4E0A\u7528\u5834
  \`\`\`
- \u4F7F\u7528\u65B9\u5F0F
  - \u4F7F\u7528 \`\`\`:\u540D\u7A31\`\`\`\uFF0C\u5728\u7D44\u4EF6\u4E2D\u4F7F\u7528 \`\`\`this.$route.params.\u540D\u7A31\`\`\` \u4FBF\u53EF\u53D6\u5F97 \`\`\`\u8DEF\u5F91\u53C3\u6578\`\`\`-\u540D\u7A31
  - \u82E5 \`\`\`/user/test\`\`\` \u5C0E\u5230 \`\`\`/user/ming\`\`\`\uFF0C\u5247\u7D44\u4EF6\u6703\u8986\u7528\u53CA\u4EE3\u8868\u4E0D\u6703\u89F8\u767C\u751F\u547D\u9031\u671F\u51FD\u6578\uFF0C\u53EF\u7528 \`\`\`watch\`\`\` \u76E3\u807D 
  \`\`\`js
  const User = {
    template: '<div>User</div>',
  }

  const routes = [
    // \u52D5\u614B\u5B57\u6BB5\u7531\u5192\u865F\u958B\u59CB
    // \u5982 /user/test \u6216 /user/ming \u90FD\u6703\u6620\u5C04\u5230\u6B64\u8DEF\u7531
    { path: '/users/:id', component: User },
  ]
  \`\`\`
- \u4F7F\u7528\u6848\u4F8B
  - \u82E5\u8981\u6620\u5C04\u8A72\u4F7F\u7528\u8005\u5BEB\u7684\u7B2C\u4E09\u7BC7\u6587\u7AE0\uFF0C\u53EF\u4EE5\u9019\u6A23\u8A2D\u8A08
  - \u8209\u4F8B
    \`\`\`js
    /*
      \u82E5\u8DEF\u5F91\u70BA /users/ming/articles/3
      \u5247 $route.params \u70BA { id: 'ming', articles: '3' }
    */
    const routes = [
      { path: '/users/:id/articles/:articles', component: Article },
    ]
    \`\`\`

<hr id="user-content-all-notfound" style="height: 2px;">

#### <a href="#user-content-top" >\u6355\u7372\u6240\u6709\u8DEF\u7531\u8207404\u932F\u8AA4\u8DEF\u7531</a>
- \u4F7F\u7528\u6642\u6A5F\uFF1A\u4F7F\u7528\u8005\u8F38\u5165\u4E0D\u5B58\u5728\u8DEF\u7531\u6642\uFF0C\u5C07\u5176\u6355\u7372\u4E26\u6E32\u67D3\u6307\u5B9A\u9801\u9762
- \u7BC4\u4F8B
  \`\`\`js
  const routes = [
    // \u5C07\u5339\u914D\u6240\u6709\u5167\u5BB9\u4E26\u653E\u5728 $route.params.pathMatch \u4E0B
    { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound },
    // \u5339\u914D\u4EE5 /user- \u958B\u982D\u6240\u6709\u5167\u5BB9\uFF0C\u4E26\u653E\u5728 $route.params.afterUser \u4E0B
    { path: '/user-:afterUser(.*)', component: UserGeneric },
  ]
  \`\`\`

<hr id="user-content-nested-route" style="height: 2px;">

#### <a href="#user-content-top" >\u5D4C\u5957\u8DEF\u7531</a>
- \u4F7F\u7528\u60C5\u666F
  \`\`\`txt
  \u5047\u8A2D\u8981\u5728\u4F7F\u7528\u8005\u9801\u9762\u4E0A
  \u986F\u793A\u8A72\u4F7F\u7528\u8005\u4E0D\u540C\u7684\u8CC7\u6599\u9801\u9762\uFF0C\u5982 tab
  \u9019\u6642\u53EF\u4F7F\u7528\u5D4C\u5957\u8DEF\u7531\uFF0C\u65B9\u4FBF\u5207\u63DB\u6E32\u67D3\u4E0D\u540C\u7684\u7D44\u4EF6
  \`\`\`
- \u4F7F\u7528\u65B9\u5F0F
  \`\`\`js
  // \u8A2D\u5B9A\u5D4C\u5957\u7D44\u4EF6\u6E32\u67D3\u4F4D\u7F6E
  const User = {
    template: \`
      <div>
        <h3>User {{ $route.params.id }}</h3>
        <router-view></router-view>
      </div>
    \`,
  }
  // \u4EE5 / \u70BA\u958B\u982D\u70BA\u6839\u8DEF\u5F91
  const routes = [
    {
      path: '/user/:id',
      component: User,
      children: [
        { 
          // \u7576 /user/:id \u5339\u914D\u6210\u529F 
          // \u82E5\u6C92\u6709\u8A2D\u5B9A\uFF0C<router-view> \u5167\u90E8\u5247\u70BA\u7A7A
          // UserHome \u5C07\u88AB\u6E32\u67D3\u5230 User \u7684 <router-view> \u5167\u90E8
          path: '',
          component: UserHome 
        },
        {
          // \u7576 /user/:id/profile \u5339\u914D\u6210\u529F 
          // UserProfile \u5C07\u88AB\u6E32\u67D3\u5230 User \u7684 <router-view> \u5167\u90E8
          path: 'profile',
          component: UserProfile,
        },
        {
          // \u7576 /user/:id/posts \u5339\u914D\u6210\u529F 
          // UserPosts \u5C07\u88AB\u6E32\u67D3\u5230\u7528\u6236\u7684 <router-view> \u5167\u90E8
          path: 'posts',
          component: UserPosts,
        },
      ],
    },
  ]
  \`\`\`

<hr id="user-content-named-route" style="height: 2px;">

#### <a href="#user-content-top" >\u547D\u540D\u8DEF\u7531</a>
- [\u5B98\u65B9\u4ECB\u7D39](https://router.vuejs.org/zh/guide/essentials/named-routes.html)
- \u85C9\u7531\u5728\u8DEF\u7531\u4E0A\u9032\u884C\u547D\u540D\uFF0C\u53EF\u66F4\u7C21\u6F54\u660E\u77AD\u7684\u4F7F\u7528\u93C8\u63A5
- \u7BC4\u4F8B
  \`\`\`js
  // router
  const routes = [
    {
      path: '/user/:username',
      name: 'user',
      component: User
    }
  ]

  // \u4E0B\u9762\u5169\u7A2E\u90FD\u6703\u5C0E\u822A\u5230 /user/ming\u3002
  // params \u88E1\u9762\u5C6C\u6027\u5C07\u5C0D\u61C9\u5230\u8DEF\u5F91\u53C3\u6578(:username)
  // <router-link :to="{ name: 'user', params: { username: 'ming' }}">Ming</router-link>
  router.push({ name: 'user', params: { username: 'ming' } })
  \`\`\`

<hr id="user-content-redirect-alias" style="height: 2px;">

#### <a href="#user-content-top" >\u91CD\u5B9A\u5411\u8207\u5225\u540D</a>
- [\u5B98\u65B9\u4ECB\u7D39](https://router.vuejs.org/zh/guide/essentials/redirect-and-alias.html)
- \u91CD\u5B9A\u5411\u4F7F\u7528\u6642\u6A5F\uFF1A\u901A\u5E38\u70BA\u8981\u4FEE\u6539\u8DEF\u7531\u6642\uFF0C\u8B93\u4F7F\u7528\u8005\u62B5\u9054\u6B63\u78BA\u9801\u9762\uFF0C\u4E26\u544A\u8A34\u4F7F\u7528\u8005\u73FE\u5728\u7684\u6B63\u78BA\u8DEF\u5F91
- \u91CD\u5B9A\u5411\u4F7F\u7528\u65B9\u6CD5\uFF1A
  - \u4F7F\u7528 \`\`\`path\`\`\`
    \`\`\`js
    // \u7576\u4F7F\u7528\u8005\u547C\u53EB /home \u6642\uFF0C\u91CD\u5B9A\u5411\u81F3 /
    const routes = [{ path: '/home', redirect: '/' }]
    \`\`\`
  - \u4F7F\u7528 \`\`\`name\`\`\`
    \`\`\`js
    // \u7576\u4F7F\u7528\u8005\u547C\u53EB /home \u6642\uFF0C\u91CD\u5B9A\u5411\u81F3 /
    const routes = [
      // \u53EF\u5C07\u6B64\u884C\u653E\u81F3 /home \u5F8C\u9762
      { path: '/', name: 'home' },
      { path: '/home', redirect: { name: 'home' } }
    ]
    \`\`\`
  - \u4F7F\u7528\u51FD\u6578
    \`\`\`js
    const routes = [
      { 
        path: "/settings",
        component: UserSettings,
        children: [
          {
            path: "emails",
            component: UserEmailsSubscriptions
          }
        ]
      },
      { 
        path: '/home',
        redirect: to => {
          return { path: '/settings/emails' }
        }
      }
    ]
    \`\`\`
  - \u4F7F\u7528\u76F8\u5C0D\u8DEF\u5F91
    \`\`\`js
    const routes = [
      { 
        path: "/settings",
        component: UserSettings,
        children: [
          {
            path: "emails",
            component: UserEmailsSubscriptions
          }
        ]
      },
      // \u6703\u91CD\u5B9A\u5411\u5230 /settings/emails
      {
        path: "/settings/test2",
        redirect: (to) => {
          return { path: "emails" };
        }
      }
    ]
    \`\`\`
- \u5225\u540D\u4F7F\u7528\u6642\u6A5F\uFF1A\u521D\u59CB\u8A2D\u8A08\u6642\uFF0C\u65B9\u4FBF\u8B93\u4F7F\u7528\u8005\u4F7F\u7528\uFF0C\u6E32\u67D3\u540C\u9801\u9762
  - \u8207\u91CD\u5B9A\u5411\u7684\u5DEE\u5225\uFF1A\u91CD\u5B9A\u5411\u6703\u5C0E\u5411\u539F\u8DEF\u7531\uFF0C\u5225\u540D\u5247\u662F\u5728\u539F\u8DEF\u7531\u4E0A\u5275\u5EFA\u65B0\u540D\u7A31
  - \u91CD\u5B9A\u5411\u8207\u5225\u540D\u7121\u6CD5\u5171\u7528\u5728\u540C\u8DEF\u7531\uFF0C\u56E0\u70BA\u5225\u540D\u6703\u88AB\u91CD\u5B9A\u5411\u5F8C\u7684\u8DEF\u5F91\u53D6\u4EE3
  - \u4F7F\u7528\u65B9\u6CD5\uFF1A
    \`\`\`js
    // \u7576\u5C0E\u5230 /aliasTest \u6216 /settings/sendEmail \u6642\uFF0C\u6703\u6E32\u67D3 /settings/emails \u9801\u9762
    const routes = [
      { 
        path: "/settings",
        component: UserSettings,
        children: [
          {
            path: "emails",
            component: UserEmailsSubscriptions,
            // \u82E5\u55AE\u4E00\u5225\u540D\u53EF\u4F7F\u7528\u5B57\u4E32\uFF1Aalias: '/aliasTest'
            alias: ['/aliasTest','sendEmail']
          }
        ]
      },
      { 
        // \u7576\u5C0E\u5230 /333 \u6642\uFF0C\u6703\u6E32\u67D3 /test/333 \u9801\u9762
        path: "/test/:id",
        component: UserSettings,
        alias: '/:id'
      },
      // \u6703\u91CD\u5B9A\u5411\u5230 /settings/emails
      {
        path: "/settings/test2",
        redirect: (to) => {
          return { path: "./emails" };
        }
      }
    ]
    \`\`\`

<hr id="user-content-programmatic-navigation" style="height: 2px;">

#### <a href="#user-content-top" >\u7DE8\u7A0B\u5F0F\u5C0E\u822A</a>
- \u7DE8\u7A0B\u5F0F\u5C0E\u822A\uFF1A\u4F7F \`\`\`router\`\`\` \u5143\u4EF6\u4E0A\u529F\u80FD\u4E5F\u53EF\u5728 \`\`\`JS\`\`\` \u4E2D\u4F7F\u7528
- \u5C0E\u822A\u5230\u4E0D\u540C\u7684 \`\`\`URL\`\`\`\uFF1A\`\`\`router.push\`\`\`
  - \u7B49\u540C\u65BC \`\`\`<router-link :to="...">\`\`\`
  - \u985E\u4F3C\u65BC \`\`\`window.history.pushState\`\`\`
  - \u6703\u5411 \`\`\`history\`\`\` \u6DFB\u52A0\u4E00\u7B46\u7D00\u9304
  - \u6CE8\u610F\uFF1A\u82E5\u63D0\u4F9B\u4E86 \`\`\`path\`\`\`\uFF0C\`\`\`params\`\`\` \u6703\u88AB\u5FFD\u7565
  - \u7BC4\u4F8B
    \`\`\`js
    const username = 'ming'
    // \u4F7F\u7528\u5C0D\u8C61
    router.push({ path: '/users/ming' })
    // \u4F7F\u7528\u7D44\u4EF6\u7684\u547D\u540D\u4E26\u52A0\u4E0A\u53C3\u6578\uFF0C\u4F7F\u8DEF\u7531\u5EFA\u7ACB url
    router.push({ name: 'user', params: { username: 'ming' } })
    // \u52A0\u5165\u67E5\u8A62\u53C3\u6578\uFF0C\u5C0E\u822A\u81F3 /register?plan=private
    router.push({ path: '/register', query: { plan: 'private' } })
    // \u5E26 hash \u5F8C\uFF0C\u5C0E\u822A\u81F3 /about#team
    router.push({ path: '/about', hash: '#team' })
    // \u53EF\u4F7F\u7528\u6A21\u677F\u5B57\u7B26\u4E32
    router.push(\`/user/\${username}\`) // -> /user/ming
    router.push({ path: \`/user/\${username}\` }) // -> /user/ming
    // \u4F7F\u7528 name \u548C params \u81EA\u52D5\u52A0\u5165\u81F3 url
    router.push({ name: 'user', params: { username } }) // -> /user/ming
    // params \u4E0D\u80FD\u4E0E path \u4E00\u8D77\u4F7F\u7528
    router.push({ path: '/user', params: { username } }) // -> /user
    \`\`\`
- \u66FF\u63DB\u7576\u524D\u4F4D\u7F6E\u7684 \`\`\`URL\`\`\`\uFF1A\`\`\`router.replace\`\`\`
  - \u7B49\u540C\u65BC \`\`\`<router-link :to="..." replace>\`\`\`
  - \u7B49\u540C\u65BC \`\`\`router.push({ path: '...', replace: true })\`\`\`
  - \u985E\u4F3C\u65BC \`\`\`window.history.replaceState\`\`\`
  - \u4E0D\u6703\u5411 \`\`\`history\`\`\` \u6DFB\u52A0\u7D00\u9304
  - \u7BC4\u4F8B
    \`\`\`js
    router.replace({ path: '/home' })
    \`\`\`
- \u524D\u5F80\u5148\u524D\u8207\u4E4B\u5F8C\u7684\u6B77\u53F2\u4F4D\u7F6E\uFF1A\`\`\`router.go\`\`\`
  - \u985E\u4F3C\u65BC \`\`\`window.history.go(n)\`\`\`
  - \`\`\`router.go(1)\`\`\` \u7B49\u540C\u65BC \`\`\`router.forward()\`\`\`
  - \`\`\`router.go(-1)\`\`\` \u7B49\u540C\u65BC \`\`\`router.back()\`\`\`


<hr id="user-content-named-views" style="height: 2px;">

#### <a href="#user-content-top" >\u547D\u540D\u8996\u5716</a>
- \u4F7F\u7528\u6642\u6A5F\uFF1A\u5728\u540C\u8DEF\u5F91\u4E0B\u7528\u591A\u500B\u8996\u5716
- \u7BC4\u4F8B
  \`\`\`js
  // createRouter
  const routes = [
    {
      path: '/',
      components: {
        default: First,
        a: Second,
        b: Third,
      },
    },
    {
      path: '/other',
      components: {
        default: Third,
        a: Second,
        b: First,
      },
    },
  ]
  \`\`\`
  \`\`\`html
  <!-- App.vue -->
  <ul>
    <li>
      <router-link to="/">First page</router-link>
    </li>
    <li>
      <router-link to="/other">Second page</router-link>
    </li>
  </ul>
  <!-- \u82E5\u6C92\u6709 name \u5247\u53D6\u5F97 default \u7D44\u4EF6\u5167\u5BB9 -->
  <router-view></router-view>
  <router-view name="a"></router-view>
  <router-view name="b"></router-view>
  \`\`\`
- \u5D4C\u5957\u547D\u540D\u8996\u5716
  - \u4F7F\u7528\u6642\u6A5F\uFF1A\u5D4C\u5957\u8DEF\u7531\u8996\u5716\u5167\u4F7F\u7528\u591A\u500B\u8996\u5716
  - \u7BC4\u4F8B
    \`\`\`js
    // createRouter
    const routes = [
      {
        path: '/settings',
        // \u4E5F\u53EF\u540C\u6642\u5728\u9802\u5C64\u4F7F\u7528\u547D\u540D\u8996\u5716
        component: UserSettings,
        children: [{
          path: 'emails',
          // \u82E5\u53EA\u6709 default \u5247\u53EF\u7701\u7565
          component: UserEmailsSubscriptions
        }, {
          path: 'profile',
          components: {
            default: UserProfile,
            helper: UserProfilePreview
          }
        }]
      }
    ]
    \`\`\`
    \`\`\`html
    <!-- UserSettings.vue -->
    <!-- \u8DEF\u5F91\uFF1A/settings/profile -->
    <div>
      <h1>User Settings</h1>
      <!-- 
        \u82E5\u8DEF\u5F91\u70BA\uFF1A/settings/emails 
        \u5247\u6E32\u67D3 UserEmailsSubscriptions 
      -->
      <!-- \u6E32\u67D3 default \u7D44\u4EF6\u5167\u5BB9\uFF1AUserProfile -->
      <router-view />
      <!-- \u6E32\u67D3 helper \u7D44\u4EF6\u5167\u5BB9\uFF1AUserProfilePreview -->
      <router-view name="helper" />
    </div>
    \`\`\`

<hr id="user-content-routes-params-components" style="height: 2px;">

#### <a href="#user-content-top" >\u8DEF\u7531\u50B3\u53C3\u6578\u7D66\u7D44\u4EF6</a>
- \u4F7F\u7528\u60C5\u5883
  \`\`\`txt
  \u5728\u986F\u793A\u4F7F\u7528\u8005\u8CC7\u8A0A\u6642\uFF0C\u4E0D\u5FC5\u518D\u9700\u8981\u7531\u7D44\u4EF6\u50B3\u503C\uFF0C
  \u53EF\u900F\u904E\u8DEF\u7531\u53C3\u6578\u50B3\u53C3\u8B93\u7D44\u4EF6\u7372\u53D6\u4F7F\u7528\u8005\u540D\u7A31\uFF0C\u85C9\u6B64\u53BB\u53D6\u5F97\u76F8\u95DC\u8CC7\u8A0A\uFF0C
  \`\`\`
- \u4F7F\u7528\u65B9\u5F0F
  \`\`\`js
  // \u7576 props \u8A2D\u7F6E\u70BA true \uFF0C\u4EE3\u8868 route.params \u5C07\u88AB\u8A2D\u7F6E\u70BA\u7D44\u4EF6\u7684 props
  const User = {
    props: ['id'],
    template: '<div>\u60A8\u597D\uFF0C{{ id }}</div>'
  }
  const routes = [{ path: '/user/:id', component: User, props: true }]
  \`\`\`
- \u4F7F\u7528\u51FD\u6578\u50B3\u53C3
  \`\`\`js
  const routes = [
    { path: '/dynamic/:years', component: Hello, props: dynamicPropsFn }
  ]
  function dynamicPropsFn(route) {
    const now = new Date()
    return {
      name: (now.getFullYear() + parseInt(route.params.years)) + '!'
    }
  }
  \`\`\`
- \u547D\u540D\u8996\u5716\u50B3\u53C3
  \`\`\`js
  // router
  const routes = [
    {
      path: "/:id",
      components: {
        default: First,
        a: Second,
        b: Third
      },
      // \u9ED8\u8A8D\u70BA false\uFF0C\u82E5\u547D\u540D\u8996\u5716\u7D44\u4EF6\u8981\u53D6\u5F97 props \u9808\u8A2D\u7F6E\u70BA true
      props: {
        default: true,
        a: true
      }
    }
  ]
  \`\`\`
  \`\`\`html
  <!-- First.vue -->
  <template>
    <h1>First {{ id }}</h1>
  </template>

  <script>
  export default {
    props: ["id"],
  };
  <\/script>
  \`\`\`


<hr id="user-content-hash-route" style="height: 2px;">

#### <a href="#user-content-top" >Hash \u8DEF\u7531</a>
- \u4EC0\u9EBC\u662F \`Hash\` \u8DEF\u7531\uFF1F\uFF1A\u4F7F\u7528 \`#\` \u865F\u5BE6\u73FE\u4E0D\u8DF3\u8F49\u7684\u8DEF\u7531\u65B9\u5F0F
- \u7279\u9EDE\uFF1A
  - \u624B\u52D5\u4FEE\u6539 \`url\`\uFF0C\u4E0D\u6703\u9032\u884C\u8DF3\u8F49
  - \u4F7F\u7528 \`JS\` \u4FEE\u6539 \`url\`\uFF0C\u4E0D\u6703\u9032\u884C\u8DF3\u8F49
  - \u700F\u89BD\u5668\u56DE\u4E0A\u4E0B\u4E00\u9801\uFF0C\u4E0D\u6703\u9032\u884C\u8DF3\u8F49
  - \u4E0D\u9700\u8981\u670D\u52D9\u5668\uFF0C\u5C31\u53EF\u5237\u65B0\u3001\u5207\u63DB\u8DEF\u7531\u9801\u9762
- \u4F7F\u7528\u7BC4\u4F8B\uFF1A
  - \`url\` \u7BC4\u4F8B\uFF1A\`http://localhost/test2.html#/cart\`
  \`\`\`js
  // \u7576 hash \u8B8A\u5316\u6642\uFF0C\u8F38\u51FA\u65B0\u820A\u8207\u76EE\u524D\u7684 hash
  window.onhashchange = (event) => {
    console.log('old url', event.oldURL)
    console.log('new url', event.newURL)
    console.log('hash:', location.hash)
  }

  // \u9801\u9762\u521D\u6B21\u52A0\u8F09\u6642\uFF0C\u7372\u53D6 hash
  document.addEventListener('DOMContentLoaded', () => {
      console.log('hash:', location.hash)
  })

  // \u4F7F\u7528 JS \u4FEE\u6539 url
  document.getElementById('btn1').addEventListener('click', () => {
      location.href = '#/cart'
  })
  \`\`\`

<hr id="user-content-h5-history-route" style="height: 2px;">

#### <a href="#user-content-top" >HTML5 History \u8DEF\u7531</a>
- [\u5B98\u65B9\u4ECB\u7D39\u670D\u52D9\u5668\u914D\u7F6E](https://router.vuejs.org/zh/guide/essentials/history-mode.html)
- \u4EC0\u9EBC\u662F \`History\` \u8DEF\u7531\uFF1F\uFF1A\u4F7F\u7528 \`history.pushState\` \u65B9\u6CD5\u5BE6\u73FE\u4E0D\u8DF3\u8F49\u7684\u8DEF\u7531\u65B9\u5F0F
- \u7279\u9EDE\uFF1A
  - \u9700\u8981\u670D\u52D9\u5668\u4E26\u9032\u884C\u914D\u7F6E(\u53EF\u53C3\u8003\u4E0A\u9762\u5B98\u7DB2\u4ECB\u7D39\u914D\u7F6E)\uFF0C\u624D\u53EF\u6B63\u5E38\u5237\u65B0\u3001\u5207\u63DB\u8DEF\u7531\u9801\u9762
  - \u64CD\u4F5C\u8DEF\u7531\u6642\uFF0C\u4E0D\u6703\u9032\u884C\u8DF3\u8F49
- \u4F7F\u7528\u7BC4\u4F8B\uFF1A
  \`\`\`js
  // \u9801\u9762\u521D\u6B21\u52A0\u8F09\uFF0C\u7372\u53D6 path
  document.addEventListener('DOMContentLoaded', () => {
    console.log('load', location.pathname)
  })

  /*
    \u4F7F\u7528 pushState \u958B\u555F\u65B0\u8DEF\u7531\uFF0C\u700F\u89BD\u5668\u4E0D\u6703\u5237\u65B0\u9801\u9762\u4E26\u7559\u4E0B\u6B77\u53F2\u7D00\u9304
    \u82E5\u4F7F\u7528 replaceState \u958B\u555F\u65B0\u8DEF\u7531\uFF0C
    \u5247\u700F\u89BD\u5668\u4E0D\u6703\u5237\u65B0\u4E26\u66FF\u63DB\u7576\u524D\u9801\u9762\u8DEF\u5F91\u8207\u6B77\u53F2\u7D00\u9304\uFF0C
    \u4E0D\u6703\u7559\u4E0B\u88AB\u66FF\u63DB\u9801\u9762\u7684\u6B77\u53F2\u7D00\u9304
  */
  document.getElementById('btn1').addEventListener('click', () => {
    const state = { name: 'page1' }
    console.log('\u5207\u6362\u8DEF\u7531\u5230', 'page1')
    /*
      \u8DF3\u8F49\u5230 page1
      pushState\u3001replaceState \u4E09\u500B\u53C3\u6578\uFF1A
        state object\uFF1A\u8207\u8A72\u8DEF\u5F91\u6B77\u53F2\u7D00\u9304\u76F8\u95DC\uFF0Conpopstate \u89F8\u767C\u6642\uFF0C\u53EF\u85C9\u7531 event.state \u53D6\u5F97
        title\uFF1A\u50B3\u5165\u4E00\u500B\u7C21\u77ED\u7684\u6A19\u984C\uFF0C\u6A19\u660E\u5C07\u8981\u9032\u5165\u7684\u72C0\u614B\uFF0C\u53EF\u4E0D\u586B
        url\uFF1A
          \u5C07\u8981\u5207\u63DB\u5230\u7684\u8DEF\u7531\u4F4D\u5740\uFF0C\u8F38\u5165 'page1' \u7B49\u540C\u65BC './page1'
          \u700F\u89BD\u5668\u4E0D\u6703\u99AC\u4E0A\u5617\u8A66\u8F09\u5165\u9019\u500B URL \uFF0C\u4F46\u53EF\u80FD\u4E4B\u5F8C\u5617\u8A66\u8F09\u5165\u9019\u500B URL\uFF0C\u5982\uFF1A\u4F7F\u7528\u8005\u91CD\u555F\u700F\u89BD\u5668\u3002
          \u65B0\u7684 URL \u53EF\u4EE5\u662F\u7D55\u5C0D\u6216\u76F8\u5C0D\u8DEF\u5F91\uFF0C\u9700\u8207\u76EE\u524D\u7684 URL origin \u4E00\u6A23\uFF0C\u5426\u5247\u6703\u4E1F\u51FA\u932F\u8AA4\u4F8B\u5916\u3002
          \u8A72\u53C3\u6578\u53EF\u9078\u64C7\u4E0D\u5BEB\uFF1B\u82E5\u7121\u6307\u5B9A\uFF0C\u5247\u8A2D\u5B9A\u70BA\u76EE\u524D\u7684 URL
    */
    history.pushState(state, '', 'page1')
  })

  // \u76E3\u807D\u700F\u89BD\u5668\u56DE\u4E0A\u4E0B\u9801\uFF0C\u8F38\u51FA onpopstate \u8A0A\u606F
  // pushState \u4E0D\u6703\u89F8\u767C
  window.onpopstate = (event) => {
    // onpopstate { name: 'page1'} /page1
    console.log('onpopstate', event.state, location.pathname)
  }
  \`\`\`

<hr id="user-content-meta-beforeeach" style="height: 2px;">

#### <a href="#user-content-top" >\u8DEF\u7531\u5143\u8A0A\u606F \u8207 \u5168\u5C40\u524D\u7F6E\u5B88\u885B</a>
- \u4EC0\u9EBC\u662F\u8DEF\u7531\u5143\u8A0A\u606F \`meta\`\uFF1F\uFF1A\u5C07\u4FE1\u606F\u9644\u52A0\u5728\u8DEF\u7531\u4E0A\uFF0C\u65B9\u4FBF\u6AA2\u6838\u662F\u5426\u53EF\u4EE5\u9032\u5165\u6B64\u8DEF\u7531
- \u4EC0\u9EBC\u662F\u5168\u5C40\u524D\u7F6E\u5B88\u885B \`router.beforeEach\`\uFF1F\uFF1A\u9032\u5165\u8DEF\u7531\u524D\u7684\u5B88\u885B\uFF0C\u642D\u914D \`meta\` \u53EF\u5C0E\u5F15\u4F7F\u7528\u8005\u81F3\u7279\u5B9A\u8DEF\u7531
- \u4F7F\u7528\u7BC4\u4F8B\uFF1A
  \`\`\`js
  /*
    \u9019\u908A\u4EE5\u4F7F\u7528\u8005\u767B\u5165\u505A\u7BC4\u4F8B
    \u82E5\u5DF2\u767B\u5165\u8005\u81F3\u767B\u5165\u3001\u8A3B\u518A\u9801\u9762\u6642\u76F4\u63A5\u5C0E\u5F15\u81F3\u9996\u9801
    \u82E5\u8981\u5275\u5EFA\u6587\u7AE0\u5247\u9808\u767B\u5165\u6B0A\u9650\uFF0C\u82E5\u7121\u6B0A\u9650\u5247\u5C0E\u5F15\u81F3\u767B\u5165\u9801\u9762
  */
  import { createRouter, createWebHistory } from 'vue-router'
  import axios from 'axios'
  import Home from './views/Home.vue'
  import Login from './views/Login.vue'
  import Signup from './views/Signup.vue'
  import CreatePost from './views/CreatePost.vue'
  import store from './store'
  const routerHistory = createWebHistory()
  const router = createRouter({
    history: routerHistory,
    routes: [
      {
        path: '/',
        name: 'home',
        component: Home
      },
      {
        path: '/login',
        name: 'login',
        component: Login,
        // \u8A2D\u5B9A meta \u4FE1\u606F\uFF0C\u8B93\u5DF2\u767B\u5165\u8005\u76F4\u63A5\u9032\u5165\u9996\u9801
        meta: { redirectAlreadyLogin: true }
      },
      {
        path: '/signup',
        name: 'signup',
        component: Signup,
        // \u8A2D\u5B9A meta \u4FE1\u606F\uFF0C\u8B93\u5DF2\u8A3B\u518A\u8005\u76F4\u63A5\u9032\u5165\u9996\u9801
        meta: { redirectAlreadyLogin: true }
      },
      {
        path: '/create',
        name: 'create',
        component: CreatePost,
        // \u8A2D\u5B9A meta \u4FE1\u606F\uFF0C\u53EA\u8B93\u5DF2\u767B\u5165\u8005\u5275\u5EFA\u6587\u7AE0
        meta: { requiredLogin: true }
      }
    ]
  })

  // beforeEach \u5728\u8DF3\u8F49\u4E4B\u524D\u9032\u884C\u6AA2\u67E5\u7684\u5B88\u885B
  // to: \u6E96\u5099\u8DF3\u8F49\u7684\u9801\u9762 from: \u6E96\u5099\u96E2\u958B\u7684\u9801\u9762 
  // \u82E5\u4F7F\u7528 next(false) = return false = \u4E0D\u8DF3\u8F49
  router.beforeEach((to, from, next) => {
    // \u67E5\u770B\u4F7F\u7528\u8005\u662F\u5426 \u5DF2\u767B\u5165 \u6216 \u5E36\u6709token
    const { user, token } = store.state
    // \u53D6\u5F97 meta \u4FE1\u606F
    const { requiredLogin, redirectAlreadyLogin } = to.meta
    // \u82E5\u4F7F\u7528\u8005\u672A\u767B\u5165
    if (!user.isLogin) {
      // \u6AA2\u67E5 token \u662F\u5426\u5B58\u5728
      if (token) {
        // \u8A2D\u5B9Atoken\u4E26\u767C\u9001\u8ACB\u6C42
        axios.defaults.headers.common.Authorization = \`Bearer \${token}\`
        store.dispatch('fetchCurrentUser').then(() => {
          // \u767B\u5165\u5F8C\u5247\u8DF3\u8F49\u81F3\u9996\u9801
          if (redirectAlreadyLogin) {
            // \u65B0\u7248\u53EF\u4E0D\u4F7F\u7528next\u9032\u884C\u8DF3\u8F49\uFF1A next('/')
            return { path: '/' }
          } else {
            // \u5426\u5247\u7E7C\u7E8C \u904E\u53BB\u5BEB\u6CD5\uFF1Anext()
            return true
          }
        }).catch(e => {
          // \u82E5\u767C\u751F\u932F\u8AA4\uFF0C\u5247\u5148\u5E6B\u5FD9\u767B\u51FA\u4E26\u5C0E\u5F15\u81F3\u767B\u5165\u9801\u9762
          console.error(e)
          store.commit('logout')
          // \u904E\u53BB\u5BEB\u6CD5\uFF1Anext('login')
          return { path: '/login' }
        })
      } else {
        // \u82E5\u60F3\u5EFA\u7ACB\u6587\u7AE0\uFF0Ctoken\u537B\u4E0D\u5B58\u5728(\u672A\u767B\u5165)\u5247\u8DF3\u8F49\u81F3\u767B\u5165\u9801\u9762
        if (requiredLogin) {
          // \u904E\u53BB\u5BEB\u6CD5\uFF1Anext('login')
          return { path: '/login' }
        } else {
          // \u5426\u5247\u7E7C\u7E8C\uFF0C\u904E\u53BB\u5BEB\u6CD5\uFF1Anext()
          return true
        }
      }
    } else {
      // \u82E5\u5DF2\u6709\u767B\u5165\u5247\u8DF3\u8F49\u81F3\u9996\u9801
      if (redirectAlreadyLogin) {
        // \u904E\u53BB\u5BEB\u6CD5\uFF1A next('/')
        return { path: '/' }
      } else {
        // \u904E\u53BB\u5BEB\u6CD5\uFF1Anext()
        return true
      }
    }
  })

  export default router
  \`\`\`
`;let o=e(!0),c=e(!1),m=e(!0),d=e(!1);const g=e(""),_={name:"VueRouterNote",components:{Loading:U},setup(){return b(async()=>{if(o.value){const s=v({html:!0,linkify:!0,typographer:!0,highlight(a,i){return y.highlight(a,{language:i}).value}}).use(x);g.value=s.render(`${R}`),await t(()=>{o.value=!1},1e3).then(()=>t(()=>{m.value=!1,d.value=!0},500)).then(()=>t(()=>{c.value=!0,u()},100))}else u()}),L(),{showLoading:o,showContent:c,displayLoading:m,displayContent:d,htmlContent:g}}},C=["innerHTML"];function E(s,a,i,n,F,P){const f=k("Loading");return r(),p(H,null,[n.displayLoading?(r(),S(f,{key:0,class:h({"content--hide":!n.showLoading,"content--show":n.showLoading})},null,8,["class"])):l("",!0),n.displayContent?(r(),p("div",{key:1,class:h({"markdown-content":!0,"content--hide":!n.showContent,"content--show":n.showContent})},[j("div",{class:"markdown-body",innerHTML:n.htmlContent},null,8,C)],2)):l("",!0)],64)}const O=w(_,[["render",E]]);export{O as default};

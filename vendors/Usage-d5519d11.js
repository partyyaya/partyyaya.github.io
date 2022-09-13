import{m as w}from"./markdown-it-37da2622.js";import{H as y}from"./highlight.js-867ee1b1.js";import{_ as k,L as f,t as n,s as h,u as b}from"../js/index-3fe1e07a.js";import{r as e,o as _,q as C,k as o,l as u,t as L,v as l,x as c,y as j,F as x}from"./@vue-50cf967a.js";import"./clipboard-12221ac4.js";import"./entities-96bc23f9.js";import"./uc.micro-174787a3.js";import"./mdurl-4b1f5cdc.js";import"./linkify-it-59decb82.js";import"./punycode-f726180d.js";import"./vue-i18n-2d92e57f.js";import"./@intlify-f70c4c62.js";import"./vue-router-339d5de3.js";/* empty css                      */const P=`## Page technology usage

### Vue.js
- [Vue.js](https://vuejs.org/)
- [Vue Router](https://router.vuejs.org/)
- [Vue-i18n](https://vue-i18n.intlify.dev/)

### Build tools
- [vite](https://vitejs.dev/)
- [@intlify/vite-plugin-vue-i18n](https://www.npmjs.com/package/@intlify/vite-plugin-vue-i18n)
- [vite-plugin-eslint](https://www.npmjs.com/package/vite-plugin-eslint)

### Coding style
- [ESLint](https://eslint.org/)
- [Prettier](https://prettier.io/)
- [Husky](https://github.com/typicode/husky)
- [Lint-staged](https://github.com/okonet/lint-staged)

### Others
- [Markdown-it](https://github.com/markdown-it/markdown-it)
- [Highlight.js](https://highlightjs.org/)

### Aim of design
- Explore how to use Github API.
- Synchronous rendering of Markdown syntax notes via API.
- Try to use Vue to develop SPA on Github.
- Make it easier to read notes.

--- 
### Update and remove dependencies
- [Github](https://github.com/)
  - [Github Token](https://docs.github.com/en/github/authenticating-to-github/keeping-your-account-and-data-secure/creating-a-personal-access-token)
  - [Github API](https://docs.github.com/en/rest)
  - [Sync with Github](https://stackoverflow.com/a/25815300)
  - [SPA with GitHub Pages](https://github.com/rafgraph/spa-github-pages)
- [Webpack](https://webpack.js.org/)
- [Axios](https://github.com/axios/axios)
`;let s=e(!0),g=e(!1),p=e(!0),d=e(!1);const m=e(""),H={name:"Usage",components:{Loading:f},setup(){return _(async()=>{if(s.value){const i=w({html:!0,linkify:!0,typographer:!0,highlight(a,r){return y.highlight(a,{language:r}).value}});m.value=i.render(`${P}`),await n(()=>{s.value=!1},1e3).then(()=>n(()=>{p.value=!1,d.value=!0},500)).then(()=>n(()=>{g.value=!0,h()},100))}else h()}),b(),{showLoading:s,showContent:g,displayLoading:p,displayContent:d,htmlContent:m}}},A=["innerHTML"];function G(i,a,r,t,V,M){const v=C("Loading");return o(),u(x,null,[t.displayLoading?(o(),L(v,{key:0,class:l({"content--hide":!t.showLoading,"content--show":t.showLoading})},null,8,["class"])):c("",!0),t.displayContent?(o(),u("div",{key:1,class:l({"markdown-content":!0,"content--hide":!t.showContent,"content--show":t.showContent})},[j("div",{class:"markdown-body",innerHTML:t.htmlContent},null,8,A)],2)):c("",!0)],64)}const D=k(H,[["render",G]]);export{D as default};

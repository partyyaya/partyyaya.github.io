import{m as _}from"./markdown-it-75be01fa.js";import{H as w}from"./highlight.js-867ee1b1.js";import{_ as k,L as v,t as n,s as h,u as y}from"../js/index-3fb62596.js";import{a as e,o as b,j as C,e as o,f as u,k as L,l,m as c,q as x,F as P}from"./@vue-6bb656f0.js";import"./clipboard-3a281e2a.js";import"./entities-96bc23f9.js";import"./uc.micro-174787a3.js";import"./mdurl-4b1f5cdc.js";import"./linkify-it-59decb82.js";import"./vue-router-ec6d6ff4.js";/* empty css                      */const j=`## Page technology usage

### Vue.js
- [Vue.js](https://vuejs.org/)
- [Vue Router](https://router.vuejs.org/)
- [Vue CLI](https://cli.vuejs.org/)

### Github & Github API
- [Github Token](https://docs.github.com/en/github/authenticating-to-github/keeping-your-account-and-data-secure/creating-a-personal-access-token)
- [Github API](https://docs.github.com/en/rest)
- [Sync with Github](https://stackoverflow.com/a/25815300)
- [SPA with GitHub Pages](https://github.com/rafgraph/spa-github-pages)

### Others
- [Axios](https://github.com/axios/axios)
- [Markdown-it](https://github.com/markdown-it/markdown-it)
- [Highlight.js](https://highlightjs.org/)

### Aim of design
- Explore how to use Github API.
- Synchronous rendering of Markdown syntax notes via API.
- Try to use Vue to develop SPA on Github.
- Make it easier to read notes.
`;let s=e(!0),g=e(!1),d=e(!0),m=e(!1);const p=e(""),A={name:"Usage",components:{Loading:v},setup(){return b(async()=>{if(s.value){const a=_({html:!0,linkify:!0,typographer:!0,highlight(r,i){return w.highlight(r,{language:i}).value}});p.value=a.render(`${j}`),await n(()=>{s.value=!1},1e3).then(()=>n(()=>{d.value=!1,m.value=!0},500)).then(()=>n(()=>{g.value=!0,h()},100))}else h()}),y(),{showLoading:s,showContent:g,displayLoading:d,displayContent:m,htmlContent:p}}},G=["innerHTML"];function H(a,r,i,t,V,I){const f=C("Loading");return o(),u(P,null,[t.displayLoading?(o(),L(f,{key:0,class:l({"content--hide":!t.showLoading,"content--show":t.showLoading})},null,8,["class"])):c("",!0),t.displayContent?(o(),u("div",{key:1,class:l({"markdown-content":!0,"content--hide":!t.showContent,"content--show":t.showContent})},[x("div",{class:"markdown-body",innerHTML:t.htmlContent},null,8,G)],2)):c("",!0)],64)}const O=k(A,[["render",H]]);export{O as default};

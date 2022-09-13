import{m as g}from"./markdown-it-37da2622.js";import{_ as f,L as v,t as n,s,u as w}from"../js/index-3fe1e07a.js";import{r as t,o as y,q as _,k as o,l as i,t as S,v as l,x as c,y as C,F as L}from"./@vue-50cf967a.js";import"./clipboard-12221ac4.js";import"./entities-96bc23f9.js";import"./uc.micro-174787a3.js";import"./mdurl-4b1f5cdc.js";import"./linkify-it-59decb82.js";import"./punycode-f726180d.js";import"./vue-i18n-2d92e57f.js";import"./@intlify-f70c4c62.js";import"./vue-router-339d5de3.js";import"./highlight.js-867ee1b1.js";/* empty css                      */const b=`## About me

### Introduce
\`\`\`txt
  I am currently a full-stack developer and
  an engineer who explores various technologies.\u{1F604}

  I have experience in communicating with other fields such as financial field, medical field.
  These experiences makes me more interesting to use various programming tools to achieve my goals.
  
  I usually use Markdown syntax to write articles and
  sometimes put the articles here for easy review.
  
  Friends who write programs in various fields are welcome to communicate with each other, 
  and I will continue to write technical articles and share them in the future.
\`\`\`

### Development tools
| Classification | Tools |
| :-- | :-- |
| Programming languages | HTML\u3001CSS\u3001SASS/SCSS\u3001JavaSscript\u3001TypeScript\u3001Java|
| Web development | Node.js\u3001Vue.js\u3001Koa.js\u3001Babel\u3001Webpack\u3001Vite\u3001Axios |
| Database | MySQL\u3001SQL Server\u3001SQLite\u3001Oracle Database |
| Operating system | Windows\u3001Linux(Ubuntu\u3001Ubuntu Server)\u3001Android |
| Git Platform | Github\u3001Gitlab\u3001Gitea |
| Development Tools | NPM\u3001PNPM\u3001Yarn\u3001Git\u3001Nginx\u3001VSCode\u3001Android Studio |
`;let a=t(!0),m=t(!1),u=t(!0),d=t(!1);const p=t(""),k={name:"About",components:{Loading:v},setup(){return y(async()=>{if(a.value){const r=g({html:!0,linkify:!0,typographer:!0});p.value=r.render(`${b}`),await n(()=>{a.value=!1},1e3).then(()=>n(()=>{u.value=!1,d.value=!0},500)).then(()=>n(()=>{m.value=!0,s()},100))}else s()}),w(),{showLoading:a,showContent:m,displayLoading:u,displayContent:d,htmlContent:p}}},x=["innerHTML"];function T(r,A,M,e,I,N){const h=_("Loading");return o(),i(L,null,[e.displayLoading?(o(),S(h,{key:0,class:l({"content--hide":!e.showLoading,"content--show":e.showLoading})},null,8,["class"])):c("",!0),e.displayContent?(o(),i("div",{key:1,class:l({"markdown-content":!0,"content--hide":!e.showContent,"content--show":e.showContent})},[C("div",{class:"markdown-body",innerHTML:e.htmlContent},null,8,x)],2)):c("",!0)],64)}const z=f(k,[["render",T]]);export{z as default};

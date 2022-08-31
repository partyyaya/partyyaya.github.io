import{m as g}from"./markdown-it-75be01fa.js";import{_ as f,L as v,t,s as r,u as w}from"../js/index-3fb62596.js";import{a as n,o as y,j as _,e as o,f as i,k as S,l,m as c,q as C,F as L}from"./@vue-6bb656f0.js";import"./clipboard-3a281e2a.js";import"./entities-96bc23f9.js";import"./uc.micro-174787a3.js";import"./mdurl-4b1f5cdc.js";import"./linkify-it-59decb82.js";import"./vue-router-ec6d6ff4.js";import"./highlight.js-867ee1b1.js";/* empty css                      */const b=`## About me

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
`;let a=n(!0),m=n(!1),u=n(!0),d=n(!1);const h=n(""),k={name:"About",components:{Loading:v},setup(){return y(async()=>{if(a.value){const s=g({html:!0,linkify:!0,typographer:!0});h.value=s.render(`${b}`),await t(()=>{a.value=!1},1e3).then(()=>t(()=>{u.value=!1,d.value=!0},500)).then(()=>t(()=>{m.value=!0,r()},100))}else r()}),w(),{showLoading:a,showContent:m,displayLoading:u,displayContent:d,htmlContent:h}}},x=["innerHTML"];function T(s,A,M,e,I,N){const p=_("Loading");return o(),i(L,null,[e.displayLoading?(o(),S(p,{key:0,class:l({"content--hide":!e.showLoading,"content--show":e.showLoading})},null,8,["class"])):c("",!0),e.displayContent?(o(),i("div",{key:1,class:l({"markdown-content":!0,"content--hide":!e.showContent,"content--show":e.showContent})},[C("div",{class:"markdown-body",innerHTML:e.htmlContent},null,8,x)],2)):c("",!0)],64)}const O=f(k,[["render",T]]);export{O as default};

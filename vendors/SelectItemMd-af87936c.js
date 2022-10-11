import{s as b,_ as V,a as t,p as R,t as E,l as I,c as x}from"../js/index-9e761f2f.js";import{H as w}from"./highlight.js-867ee1b1.js";import{m as M}from"./markdown-it-37da2622.js";import{_ as H}from"./lodash-acc62a92.js";import{C as $}from"./clipboard-12221ac4.js";import{o as D,b as B,k as i,l as d,E as N,r as l,f as q,n as U,A as z,D as F,t as p,H as S,m as g,F as v,q as k,v as T}from"./@vue-cf44d510.js";import"./vue-i18n-971101a6.js";import"./@intlify-0b15452e.js";import"./vue-router-4a7e15c5.js";/* empty css                      */import"./entities-96bc23f9.js";import"./uc.micro-174787a3.js";import"./mdurl-4b1f5cdc.js";import"./linkify-it-59decb82.js";import"./punycode-f726180d.js";const J=(r,o)=>{const s=r[o];return s?typeof s=="function"?s():Promise.resolve(s):new Promise((e,n)=>{(typeof queueMicrotask=="function"?queueMicrotask:setTimeout)(n.bind(null,new Error("Unknown variable dynamic import: "+o)))})};new $(".markdown-it-code-copy");const j={iconStyle:`
    opacity: 0.5;color: black;
    font-size: 15pt;`,iconClass:"mdi mdi-content-copy",buttonStyle:`
    position: absolute;
    top: 7.5px; 
    right: 6px; 
    cursor: pointer;
    outline: none;
    border-radius: 20%;
    text-align: center;
    background-color: rgb(210, 210, 210, 0.5);`,buttonClass:"",copiedStyle:`
    position: absolute;
    top: 39px; 
    right: 6px;
    padding-left: 5px;
    padding-right: 5px;
    border-radius: 5px;
    color: white;
    background-color: rgb(0, 0, 0, 0.7);
    display: none;
  `};function C(r,o){return o=H.merge(j,o),(...s)=>{const[e,n]=s,u=e[n].content.replaceAll('"',"&quot;").replaceAll("'","&#39;"),c=r(...s);return u.length===0?c:`
      <div style="position: relative"
        onmouseover="this.getElementsByTagName('div')[0].style.opacity='0.8'"
        onmouseout="this.getElementsByTagName('div')[0].style.opacity='0.5';"
      >
        ${c}
        <button 
          class="markdown-it-code-copy ${o.buttonClass}" 
          data-clipboard-text="${u}" 
          style="${o.buttonStyle}"
          onmouseover="this.style.backgroundColor='rgb(210, 210, 210, 0.8)'"
          onmouseout="this.style.backgroundColor='rgb(210, 210, 210, 0.5)'" 
          onclick="this.nextElementSibling.style.display='block';setTimeout(() => {this.nextElementSibling.style.display='none';},1000)"
        >
          <div
            style="${o.iconStyle}" class="${o.iconClass}">\u2750</div>
        </button>
        <div id="div__copied" style="${o.copiedStyle}">Copied!</div>
      </div>
    `}}const G=(r,o)=>{r.renderer.rules.code_block=C(r.renderer.rules.code_block,o),r.renderer.rules.fence=C(r.renderer.rules.fence,o)},W=r=>{D(()=>{window.onhashchange=function(){b(r)}}),B(()=>{window.onhashchange=null})};const K={name:"Loading"},Q={class:"loadingAnimate"},X=N("<span>L</span><span>o</span><span>a</span><span>d</span><span>i</span><span>n</span><span>g</span><span>.</span><span>.</span><span>.</span>",10),Y=[X];function Z(r,o,s,e,n,u){return i(),d("div",Q,Y)}const tt=V(K,[["render",Z]]);let y=l(!0),L=l(!1),f=l(!0),A=l(!1),_=q([]);const P=l(""),et={name:"SelectItemMd",components:{Loading:tt},props:{filename:{type:String,default:"usage"},useCopy:{type:Boolean,default:!0}},setup(r){let o=M({html:!0,linkify:!0,typographer:!0,highlight(s,e){return w.highlight(s,{language:e}).value}});return r.useCopy&&(o=o.use(G)),D(async()=>{const s=await J(Object.assign({"../assets/md/About.md":()=>t(()=>import("./About-6ce90b0b.js"),[],import.meta.url),"../assets/md/Axios.md":()=>t(()=>import("./Axios-391e5ea4.js"),[],import.meta.url),"../assets/md/CSS-2d-3d.md":()=>t(()=>import("./CSS-2d-3d-ec28c669.js"),[],import.meta.url),"../assets/md/CSS-BEM.md":()=>t(()=>import("./CSS-BEM-a1710735.js"),[],import.meta.url),"../assets/md/CSS-addCSS.md":()=>t(()=>import("./CSS-addCSS-56a1afdb.js"),[],import.meta.url),"../assets/md/CSS-background-gradient.md":()=>t(()=>import("./CSS-background-gradient-5d5e3adf.js"),[],import.meta.url),"../assets/md/CSS-borders-corners.md":()=>t(()=>import("./CSS-borders-corners-876e25bb.js"),[],import.meta.url),"../assets/md/CSS-box-model.md":()=>t(()=>import("./CSS-box-model-41c10030.js"),[],import.meta.url),"../assets/md/CSS-flex.md":()=>t(()=>import("./CSS-flex-c5e40efa.js"),[],import.meta.url),"../assets/md/CSS-float-position.md":()=>t(()=>import("./CSS-float-position-9df8344c.js"),[],import.meta.url),"../assets/md/CSS-others.md":()=>t(()=>import("./CSS-others-95cc2fca.js"),[],import.meta.url),"../assets/md/CSS-selector.md":()=>t(()=>import("./CSS-selector-a542959b.js"),[],import.meta.url),"../assets/md/CSS-text-font.md":()=>t(()=>import("./CSS-text-font-aa847eb0.js"),[],import.meta.url),"../assets/md/CSS-transition-animation.md":()=>t(()=>import("./CSS-transition-animation-71787532.js"),[],import.meta.url),"../assets/md/CSS.md":()=>t(()=>import("./CSS-6b5cb806.js"),[],import.meta.url),"../assets/md/Command.md":()=>t(()=>import("./Command-91c02ba6.js"),[],import.meta.url),"../assets/md/Git.md":()=>t(()=>import("./Git-94cd6423.js"),[],import.meta.url),"../assets/md/HTML.md":()=>t(()=>import("./HTML-3ef65a79.js"),[],import.meta.url),"../assets/md/HTMLNote.md":()=>t(()=>import("./HTMLNote-981afa6d.js"),[],import.meta.url),"../assets/md/Home.md":()=>t(()=>import("./Home-47e6356f.js"),[],import.meta.url),"../assets/md/JS.md":()=>t(()=>import("./JS-3a05bec8.js"),[],import.meta.url),"../assets/md/MobileAdaptation.md":()=>t(()=>import("./MobileAdaptation-d29bf25d.js"),[],import.meta.url),"../assets/md/Other.md":()=>t(()=>import("./Other-c2634947.js"),[],import.meta.url),"../assets/md/Pinia.md":()=>t(()=>import("./Pinia-11cfa852.js"),[],import.meta.url),"../assets/md/TS.md":()=>t(()=>import("./TS-3ccf5aa6.js"),[],import.meta.url),"../assets/md/Usage.md":()=>t(()=>import("./Usage-a64b0fc5.js"),[],import.meta.url),"../assets/md/Vue.md":()=>t(()=>import("./Vue-f236942f.js"),[],import.meta.url),"../assets/md/VueRouter.md":()=>t(()=>import("./VueRouter-d5a8334f.js"),[],import.meta.url),"../assets/md/Vuex.md":()=>t(()=>import("./Vuex-854ca073.js"),[],import.meta.url),"../assets/md/Webpack.md":()=>t(()=>import("./Webpack-e69d24ff.js"),[],import.meta.url)}),`../assets/md/${r.filename}.md`).then(n=>n.default);for(;_.length>0;)_.pop();const e=R(_,o.render(`${s}`));P.value=e,y.value?await E(()=>{y.value=!1},1e3).then(()=>E(()=>{f.value=!1,A.value=!0},500)).then(()=>E(()=>{L.value=!0,b(_)},100)):U(()=>{b(_)})}),W(_),{showLoading:y,showContent:L,displayLoading:f,displayContent:A,htmlContent:P,sidebar:_,linkToTag:I,changeSidebarStatus:x}}},ot={class:"content__body__sidebar"},rt=["onClick"],st=["onClick"],it=["innerHTML"];function nt(r,o,s,e,n,u){const c=z("Loading");return i(),d(v,null,[e.displayLoading?(i(),F(c,{key:0,class:p({"content--hide":!e.showLoading,"content--show":e.showLoading})},null,8,["class"])):S("",!0),e.displayContent?(i(),d("div",{key:1,class:p({"content--hide":!e.showContent,"content--show":e.showContent})},[g("div",ot,[(i(!0),d(v,null,k(e.sidebar,(a,h)=>(i(),d(v,{key:a.link},[g("div",{class:p({content__body__sidebar__link:!0,content__body__sidebar__h2:!0,content__body__sidebar__link__clicked:a.isClicked}),onClick:m=>e.linkToTag(e.sidebar,h,-1,a.link)},T(a.text),11,rt),(i(!0),d(v,null,k(a.list,(m,O)=>(i(),d("div",{key:m.link,class:p({content__body__sidebar__link:!0,content__body__sidebar__h3:!0,content__body__sidebar__link__clicked:m.isClicked}),onClick:at=>e.linkToTag(e.sidebar,h,O,m.link)},T(m.text),11,st))),128))],64))),128))]),g("div",{id:"content__body__content",class:"content__body__content markdown-body",onScrollPassive:o[0]||(o[0]=a=>e.changeSidebarStatus(e.sidebar,a)),innerHTML:e.htmlContent},null,40,it)],2)):S("",!0)],64)}const Tt=V(et,[["render",nt]]);export{Tt as default};

(function(e){function t(t){for(var r,c,i=t[0],d=t[1],u=t[2],b=0,l=[];b<i.length;b++)c=i[b],Object.prototype.hasOwnProperty.call(a,c)&&a[c]&&l.push(a[c][0]),a[c]=0;for(r in d)Object.prototype.hasOwnProperty.call(d,r)&&(e[r]=d[r]);s&&s(t);while(l.length)l.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,c=1;c<n.length;c++){var d=n[c];0!==a[d]&&(r=!1)}r&&(o.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},a={app:0},o=[];function c(e){return i.p+"js/"+({about:"about"}[e]||e)+"."+{about:"f892f873"}[e]+".js"}function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n=a[e];if(0!==n)if(n)t.push(n[2]);else{var r=new Promise((function(t,r){n=a[e]=[t,r]}));t.push(n[2]=r);var o,d=document.createElement("script");d.charset="utf-8",d.timeout=120,i.nc&&d.setAttribute("nonce",i.nc),d.src=c(e);var u=new Error;o=function(t){d.onerror=d.onload=null,clearTimeout(b);var n=a[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;u.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",u.name="ChunkLoadError",u.type=r,u.request=o,n[1](u)}a[e]=void 0}};var b=setTimeout((function(){o({type:"timeout",target:d})}),12e4);d.onerror=d.onload=o,document.head.appendChild(d)}return Promise.all(t)},i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="",i.oe=function(e){throw console.error(e),e};var d=window["webpackJsonp"]=window["webpackJsonp"]||[],u=d.push.bind(d);d.push=t,d=d.slice();for(var b=0;b<d.length;b++)t(d[b]);var s=u;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"18cf":function(e,t,n){"use strict";n("ce8b")},"333a":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23"),a=Object(r["z"])("data-v-6aa2ea6b");Object(r["q"])("data-v-6aa2ea6b");var o={class:"home"};Object(r["o"])();var c=a((function(e,t,n,a,c,i){var d=Object(r["u"])("Sidebar"),u=Object(r["u"])("Content");return Object(r["n"])(),Object(r["d"])("div",o,[Object(r["e"])(d,{ref:"childSidebar"},null,512),Object(r["e"])(u,{onHideSidebar:a.hideSidebar},null,8,["onHideSidebar"])])})),i=Object(r["z"])("data-v-11d34d0c");Object(r["q"])("data-v-11d34d0c");var d=Object(r["e"])("div",{class:"sidebar__title"},[Object(r["e"])("span",{class:"sidebar__title__bold"},"Ming's Storage"),Object(r["e"])("span",{class:"sidebar__title__thin"},"程序記憶")],-1),u=Object(r["e"])("div",{class:"sidebar__divider"},null,-1),b={class:"sidebar__body"},s={class:"sidebar__body__link"};Object(r["o"])();var l=i((function(e,t,n,a,o,c){var l=Object(r["u"])("router-link");return Object(r["n"])(),Object(r["d"])("div",{class:{sidebar:!0,"sidebar--hide":a.hide,"sidebar--show":!a.hide}},[d,u,Object(r["e"])("div",b,[(Object(r["n"])(!0),Object(r["d"])(r["a"],null,Object(r["t"])(a.sidebarList,(function(e){return Object(r["n"])(),Object(r["d"])(l,{key:e.text,to:e.to},{default:i((function(){return[Object(r["e"])("div",s,Object(r["w"])(e.text),1)]})),_:2},1032,["to"])})),128))])],2)})),f={name:"Sidebar",props:["currentIndex"],setup:function(e,t){var n=Object(r["s"])(!0),a=[{text:"Home",to:{name:"Home"}},{text:"About",to:{name:"About"}}];function o(e){n.value=e}return{hideSidebar:o,hide:n,sidebarList:a}}};n("b0d0");f.render=l,f.__scopeId="data-v-11d34d0c";var v=f,p=Object(r["z"])("data-v-7e730244");Object(r["q"])("data-v-7e730244");var j={class:"content__title"},O=Object(r["e"])("span",{class:"content__title__bold"},"Ming's Storage",-1),_=Object(r["e"])("span",{class:"content__title__thin"},"  程序記憶",-1),h=Object(r["e"])("div",{class:"content__divider"},null,-1),m={class:"content__body"};Object(r["o"])();var y=p((function(e,t,n,a,o,c){var i=Object(r["u"])("router-view");return Object(r["n"])(),Object(r["d"])("div",{class:{content:!0,"content--toRight":!a.isSidebarHidden}},[Object(r["e"])("div",j,[Object(r["e"])("button",{class:{content__title__button:!0,"content__title__button--active":!a.isSidebarHidden,"content__title__button--noActive":a.isSidebarHidden},onClick:t[1]||(t[1]=function(){return a.hideSidebar&&a.hideSidebar.apply(a,arguments)})},"≡",2),O,_]),h,Object(r["e"])("div",m,[Object(r["e"])(i)])],2)})),S={name:"Content",setup:function(e,t){var n=Object(r["s"])(!0);function a(){n.value=!n.value,t.emit("hideSidebar",n.value)}return{hideSidebar:a,isSidebarHidden:n}}};n("d4ef");S.render=y,S.__scopeId="data-v-7e730244";var g=S,w={name:"App",components:{Sidebar:v,Content:g},setup:function(e,t){var n=Object(r["s"])();function a(e){n.value.hideSidebar(e)}return{childSidebar:n,hideSidebar:a}}};n("18cf");w.render=c,w.__scopeId="data-v-6aa2ea6b";var x=w,H=(n("d3b7"),n("3ca3"),n("ddb0"),n("6c02")),k=Object(r["z"])("data-v-4240ebd1");Object(r["q"])("data-v-4240ebd1");var P={class:"home row"};Object(r["o"])();var A=k((function(e,t,n,a,o,c){return Object(r["n"])(),Object(r["d"])("div",P," test ")})),C={name:"Home"};C.render=A,C.__scopeId="data-v-4240ebd1";var M=C,q=[{path:"/",name:"Home",component:M},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"d771"))}}],I=Object(H["a"])({history:Object(H["b"])(""),routes:q}),z=I,L=n("5502"),T=Object(L["a"])({state:{},mutations:{},actions:{},modules:{}});n("f5df1"),n("8e1f");Object(r["c"])(x).use(T).use(z).mount("#app")},"8e1f":function(e,t,n){},b0d0:function(e,t,n){"use strict";n("333a")},ce8b:function(e,t,n){},cefe:function(e,t,n){},d4ef:function(e,t,n){"use strict";n("cefe")}});
//# sourceMappingURL=app.cfa5eb0d.js.map
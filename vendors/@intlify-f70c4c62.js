/*!
  * shared v9.2.2
  * (c) 2022 kazuya kawaguchi
  * Released under the MIT License.
  */const at=typeof window<"u",_e=typeof Symbol=="function"&&typeof Symbol.toStringTag=="symbol",rt=e=>_e?Symbol(e):e,de=(e,t,n)=>ge({l:e,k:t,s:n}),ge=e=>JSON.stringify(e).replace(/\u2028/g,"\\u2028").replace(/\u2029/g,"\\u2029").replace(/\u0027/g,"\\u0027"),y=e=>typeof e=="number"&&isFinite(e),Ee=e=>$(e)==="[object Date]",X=e=>$(e)==="[object RegExp]",K=e=>N(e)&&Object.keys(e).length===0;function Te(e,t){typeof console<"u"&&(console.warn("[intlify] "+e),t&&console.warn(t.stack))}const U=Object.assign;let z;const Ne=()=>z||(z=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function J(e){return e.replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&apos;")}const be=Object.prototype.hasOwnProperty;function st(e,t){return be.call(e,t)}const M=Array.isArray,F=e=>typeof e=="function",i=e=>typeof e=="string",S=e=>typeof e=="boolean",h=e=>e!==null&&typeof e=="object",ae=Object.prototype.toString,$=e=>ae.call(e),N=e=>$(e)==="[object Object]",Ae=e=>e==null?"":M(e)||N(e)&&e.toString===ae?JSON.stringify(e,null,2):String(e);/*!
  * message-compiler v9.2.2
  * (c) 2022 kazuya kawaguchi
  * Released under the MIT License.
  */const De={EXPECTED_TOKEN:1,INVALID_TOKEN_IN_PLACEHOLDER:2,UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER:3,UNKNOWN_ESCAPE_SEQUENCE:4,INVALID_UNICODE_ESCAPE_SEQUENCE:5,UNBALANCED_CLOSING_BRACE:6,UNTERMINATED_CLOSING_BRACE:7,EMPTY_PLACEHOLDER:8,NOT_ALLOW_NEST_PLACEHOLDER:9,INVALID_LINKED_FORMAT:10,MUST_HAVE_MESSAGES_IN_PLURAL:11,UNEXPECTED_EMPTY_LINKED_MODIFIER:12,UNEXPECTED_EMPTY_LINKED_KEY:13,UNEXPECTED_LEXICAL_ANALYSIS:14,__EXTEND_POINT__:15};function Oe(e,t,n={}){const{domain:a,messages:r,args:l}=n,o=e,u=new SyntaxError(String(o));return u.code=e,t&&(u.location=t),u.domain=a,u}/*!
  * devtools-if v9.2.2
  * (c) 2022 kazuya kawaguchi
  * Released under the MIT License.
  */const re={I18nInit:"i18n:init",FunctionTranslate:"function:translate"};/*!
  * core-base v9.2.2
  * (c) 2022 kazuya kawaguchi
  * Released under the MIT License.
  */const w=[];w[0]={w:[0],i:[3,0],["["]:[4],o:[7]};w[1]={w:[1],["."]:[2],["["]:[4],o:[7]};w[2]={w:[2],i:[3,0],[0]:[3,0]};w[3]={i:[3,0],[0]:[3,0],w:[1,1],["."]:[2,1],["["]:[4,1],o:[7,1]};w[4]={["'"]:[5,0],['"']:[6,0],["["]:[4,2],["]"]:[1,3],o:8,l:[4,0]};w[5]={["'"]:[4,0],o:8,l:[5,0]};w[6]={['"']:[4,0],o:8,l:[6,0]};const Ie=/^\s?(?:true|false|-?[\d.]+|'[^']*'|"[^"]*")\s?$/;function Le(e){return Ie.test(e)}function he(e){const t=e.charCodeAt(0),n=e.charCodeAt(e.length-1);return t===n&&(t===34||t===39)?e.slice(1,-1):e}function Ce(e){if(e==null)return"o";switch(e.charCodeAt(0)){case 91:case 93:case 46:case 34:case 39:return e;case 95:case 36:case 45:return"i";case 9:case 10:case 13:case 160:case 65279:case 8232:case 8233:return"w"}return"i"}function Fe(e){const t=e.trim();return e.charAt(0)==="0"&&isNaN(parseInt(e))?!1:Le(t)?he(t):"*"+t}function ye(e){const t=[];let n=-1,a=0,r=0,l,o,u,s,c,m,E;const d=[];d[0]=()=>{o===void 0?o=u:o+=u},d[1]=()=>{o!==void 0&&(t.push(o),o=void 0)},d[2]=()=>{d[0](),r++},d[3]=()=>{if(r>0)r--,a=4,d[0]();else{if(r=0,o===void 0||(o=Fe(o),o===!1))return!1;d[1]()}};function g(){const T=e[n+1];if(a===5&&T==="'"||a===6&&T==='"')return n++,u="\\"+T,d[0](),!0}for(;a!==null;)if(n++,l=e[n],!(l==="\\"&&g())){if(s=Ce(l),E=w[a],c=E[s]||E.l||8,c===8||(a=c[0],c[1]!==void 0&&(m=d[c[1]],m&&(u=l,m()===!1))))return;if(a===7)return t}}const Q=new Map;function Se(e,t){return h(e)?e[t]:null}function lt(e,t){if(!h(e))return null;let n=Q.get(t);if(n||(n=ye(t),n&&Q.set(t,n)),!n)return null;const a=n.length;let r=e,l=0;for(;l<a;){const o=r[n[l]];if(o===void 0)return null;r=o,l++}return r}const pe=e=>e,Me=e=>"",Re="text",we=e=>e.length===0?"":e.join(""),ke=Ae;function Z(e,t){return e=Math.abs(e),t===2?e?e>1?1:0:1:e?Math.min(e,2):0}function We(e){const t=y(e.pluralIndex)?e.pluralIndex:-1;return e.named&&(y(e.named.count)||y(e.named.n))?y(e.named.count)?e.named.count:y(e.named.n)?e.named.n:t:t}function Pe(e,t){t.count||(t.count=e),t.n||(t.n=e)}function Ue(e={}){const t=e.locale,n=We(e),a=h(e.pluralRules)&&i(t)&&F(e.pluralRules[t])?e.pluralRules[t]:Z,r=h(e.pluralRules)&&i(t)&&F(e.pluralRules[t])?Z:void 0,l=f=>f[a(n,f.length,r)],o=e.list||[],u=f=>o[f],s=e.named||{};y(e.pluralIndex)&&Pe(n,s);const c=f=>s[f];function m(f){const b=F(e.messages)?e.messages(f):h(e.messages)?e.messages[f]:!1;return b||(e.parent?e.parent.message(f):Me)}const E=f=>e.modifiers?e.modifiers[f]:pe,d=N(e.processor)&&F(e.processor.normalize)?e.processor.normalize:we,g=N(e.processor)&&F(e.processor.interpolate)?e.processor.interpolate:ke,T=N(e.processor)&&i(e.processor.type)?e.processor.type:Re,I={list:u,named:c,plural:l,linked:(f,...b)=>{const[L,_]=b;let A="text",D="";b.length===1?h(L)?(D=L.modifier||D,A=L.type||A):i(L)&&(D=L||D):b.length===2&&(i(L)&&(D=L||D),i(_)&&(A=_||A));let C=m(f)(I);return A==="vnode"&&M(C)&&D&&(C=C[0]),D?E(D)(C,A):C},message:m,type:T,interpolate:g,normalize:d};return I}let P=null;function ot(e){P=e}function xe(e,t,n){P&&P.emit(re.I18nInit,{timestamp:Date.now(),i18n:e,version:t,meta:n})}const Ve=ve(re.FunctionTranslate);function ve(e){return t=>P&&P.emit(e,t)}const ct={NOT_FOUND_KEY:1,FALLBACK_TO_TRANSLATE:2,CANNOT_FORMAT_NUMBER:3,FALLBACK_TO_NUMBER_FORMAT:4,CANNOT_FORMAT_DATE:5,FALLBACK_TO_DATE_FORMAT:6,__EXTEND_POINT__:7};function Ge(e,t,n){return[...new Set([n,...M(t)?t:h(t)?Object.keys(t):i(t)?[t]:[n]])]}function it(e,t,n){const a=i(n)?n:se,r=e;r.__localeChainCache||(r.__localeChainCache=new Map);let l=r.__localeChainCache.get(a);if(!l){l=[];let o=[n];for(;M(o);)o=q(l,o,t);const u=M(t)||!N(t)?t:t.default?t.default:null;o=i(u)?[u]:u,M(o)&&q(l,o,!1),r.__localeChainCache.set(a,l)}return l}function q(e,t,n){let a=!0;for(let r=0;r<t.length&&S(a);r++){const l=t[r];i(l)&&(a=Ke(e,t[r],n))}return a}function Ke(e,t,n){let a;const r=t.split("-");do{const l=r.join("-");a=$e(e,l,n),r.splice(-1,1)}while(r.length&&a===!0);return a}function $e(e,t,n){let a=!1;if(!e.includes(t)&&(a=!0,t)){a=t[t.length-1]!=="!";const r=t.replace(/!/g,"");e.push(r),(M(n)||N(n))&&n[r]&&(a=n[r])}return a}const je="9.2.2",j=-1,se="en-US",ut="",ee=e=>`${e.charAt(0).toLocaleUpperCase()}${e.substr(1)}`;function Be(){return{upper:(e,t)=>t==="text"&&i(e)?e.toUpperCase():t==="vnode"&&h(e)&&"__v_isVNode"in e?e.children.toUpperCase():e,lower:(e,t)=>t==="text"&&i(e)?e.toLowerCase():t==="vnode"&&h(e)&&"__v_isVNode"in e?e.children.toLowerCase():e,capitalize:(e,t)=>t==="text"&&i(e)?ee(e):t==="vnode"&&h(e)&&"__v_isVNode"in e?ee(e.children):e}}let He,le;function ft(e){le=e}let oe;function mt(e){oe=e}let ce=null;const _t=e=>{ce=e},Ye=()=>ce;let ie=null;const dt=e=>{ie=e},gt=()=>ie;let te=0;function Et(e={}){const t=i(e.version)?e.version:je,n=i(e.locale)?e.locale:se,a=M(e.fallbackLocale)||N(e.fallbackLocale)||i(e.fallbackLocale)||e.fallbackLocale===!1?e.fallbackLocale:n,r=N(e.messages)?e.messages:{[n]:{}},l=N(e.datetimeFormats)?e.datetimeFormats:{[n]:{}},o=N(e.numberFormats)?e.numberFormats:{[n]:{}},u=U({},e.modifiers||{},Be()),s=e.pluralRules||{},c=F(e.missing)?e.missing:null,m=S(e.missingWarn)||X(e.missingWarn)?e.missingWarn:!0,E=S(e.fallbackWarn)||X(e.fallbackWarn)?e.fallbackWarn:!0,d=!!e.fallbackFormat,g=!!e.unresolving,T=F(e.postTranslation)?e.postTranslation:null,O=N(e.processor)?e.processor:null,I=S(e.warnHtmlMessage)?e.warnHtmlMessage:!0,f=!!e.escapeParameter,b=F(e.messageCompiler)?e.messageCompiler:He,L=F(e.messageResolver)?e.messageResolver:le||Se,_=F(e.localeFallbacker)?e.localeFallbacker:oe||Ge,A=h(e.fallbackContext)?e.fallbackContext:void 0,D=F(e.onWarn)?e.onWarn:Te,C=e,V=h(C.__datetimeFormatters)?C.__datetimeFormatters:new Map,v=h(C.__numberFormatters)?C.__numberFormatters:new Map,x=h(C.__meta)?C.__meta:{};te++;const R={version:t,cid:te,locale:n,fallbackLocale:a,messages:r,modifiers:u,pluralRules:s,missing:c,missingWarn:m,fallbackWarn:E,fallbackFormat:d,unresolving:g,postTranslation:T,processor:O,warnHtmlMessage:I,escapeParameter:f,messageCompiler:b,messageResolver:L,localeFallbacker:_,fallbackContext:A,onWarn:D,__meta:x};return R.datetimeFormats=l,R.numberFormats=o,R.__datetimeFormatters=V,R.__numberFormatters=v,__INTLIFY_PROD_DEVTOOLS__&&xe(R,t,x),R}function B(e,t,n,a,r){const{missing:l,onWarn:o}=e;if(l!==null){const u=l(e,n,t,r);return i(u)?u:t}else return t}function Tt(e,t,n){const a=e;a.__localeChainCache=new Map,e.localeFallbacker(e,n,t)}let ue=De.__EXTEND_POINT__;const G=()=>++ue,k={INVALID_ARGUMENT:ue,INVALID_DATE_ARGUMENT:G(),INVALID_ISO_DATE_ARGUMENT:G(),__EXTEND_POINT__:G()};function W(e){return Oe(e,null,void 0)}const ne=()=>"",p=e=>F(e);function Nt(e,...t){const{fallbackFormat:n,postTranslation:a,unresolving:r,messageCompiler:l,fallbackLocale:o,messages:u}=e,[s,c]=Je(...t),m=S(c.missingWarn)?c.missingWarn:e.missingWarn,E=S(c.fallbackWarn)?c.fallbackWarn:e.fallbackWarn,d=S(c.escapeParameter)?c.escapeParameter:e.escapeParameter,g=!!c.resolvedMessage,T=i(c.default)||S(c.default)?S(c.default)?l?s:()=>s:c.default:n?l?s:()=>s:"",O=n||T!=="",I=i(c.locale)?c.locale:e.locale;d&&Xe(c);let[f,b,L]=g?[s,I,u[I]||{}]:fe(e,s,I,o,E,m),_=f,A=s;if(!g&&!(i(_)||p(_))&&O&&(_=T,A=_),!g&&(!(i(_)||p(_))||!i(b)))return r?j:s;let D=!1;const C=()=>{D=!0},V=p(_)?_:me(e,s,b,_,A,C);if(D)return _;const v=Ze(e,b,L,c),x=Ue(v),R=ze(e,V,x),H=a?a(R,s):R;if(__INTLIFY_PROD_DEVTOOLS__){const Y={timestamp:Date.now(),key:i(s)?s:p(_)?_.key:"",locale:b||(p(_)?_.locale:""),format:i(_)?_:p(_)?_.source:"",message:H};Y.meta=U({},e.__meta,Ye()||{}),Ve(Y)}return H}function Xe(e){M(e.list)?e.list=e.list.map(t=>i(t)?J(t):t):h(e.named)&&Object.keys(e.named).forEach(t=>{i(e.named[t])&&(e.named[t]=J(e.named[t]))})}function fe(e,t,n,a,r,l){const{messages:o,onWarn:u,messageResolver:s,localeFallbacker:c}=e,m=c(e,a,n);let E={},d,g=null;const T="translate";for(let O=0;O<m.length&&(d=m[O],E=o[d]||{},(g=s(E,t))===null&&(g=E[t]),!(i(g)||F(g)));O++){const I=B(e,t,d,l,T);I!==t&&(g=I)}return[g,d,E]}function me(e,t,n,a,r,l){const{messageCompiler:o,warnHtmlMessage:u}=e;if(p(a)){const c=a;return c.locale=c.locale||n,c.key=c.key||t,c}if(o==null){const c=()=>a;return c.locale=n,c.key=t,c}const s=o(a,Qe(e,n,r,a,u,l));return s.locale=n,s.key=t,s.source=a,s}function ze(e,t,n){return t(n)}function Je(...e){const[t,n,a]=e,r={};if(!i(t)&&!y(t)&&!p(t))throw W(k.INVALID_ARGUMENT);const l=y(t)?String(t):(p(t),t);return y(n)?r.plural=n:i(n)?r.default=n:N(n)&&!K(n)?r.named=n:M(n)&&(r.list=n),y(a)?r.plural=a:i(a)?r.default=a:N(a)&&U(r,a),[l,r]}function Qe(e,t,n,a,r,l){return{warnHtmlMessage:r,onError:o=>{throw l&&l(o),o},onCacheKey:o=>de(t,n,o)}}function Ze(e,t,n,a){const{modifiers:r,pluralRules:l,messageResolver:o,fallbackLocale:u,fallbackWarn:s,missingWarn:c,fallbackContext:m}=e,d={locale:t,modifiers:r,pluralRules:l,messages:g=>{let T=o(n,g);if(T==null&&m){const[,,O]=fe(m,g,t,u,s,c);T=o(O,g)}if(i(T)){let O=!1;const f=me(e,g,t,T,g,()=>{O=!0});return O?ne:f}else return p(T)?T:ne}};return e.processor&&(d.processor=e.processor),a.list&&(d.list=a.list),a.named&&(d.named=a.named),y(a.plural)&&(d.pluralIndex=a.plural),d}function bt(e,...t){const{datetimeFormats:n,unresolving:a,fallbackLocale:r,onWarn:l,localeFallbacker:o}=e,{__datetimeFormatters:u}=e,[s,c,m,E]=et(...t),d=S(m.missingWarn)?m.missingWarn:e.missingWarn;S(m.fallbackWarn)?m.fallbackWarn:e.fallbackWarn;const g=!!m.part,T=i(m.locale)?m.locale:e.locale,O=o(e,r,T);if(!i(s)||s==="")return new Intl.DateTimeFormat(T,E).format(c);let I={},f,b=null;const L="datetime format";for(let D=0;D<O.length&&(f=O[D],I=n[f]||{},b=I[s],!N(b));D++)B(e,s,f,d,L);if(!N(b)||!i(f))return a?j:s;let _=`${f}__${s}`;K(E)||(_=`${_}__${JSON.stringify(E)}`);let A=u.get(_);return A||(A=new Intl.DateTimeFormat(f,U({},b,E)),u.set(_,A)),g?A.formatToParts(c):A.format(c)}const qe=["localeMatcher","weekday","era","year","month","day","hour","minute","second","timeZoneName","formatMatcher","hour12","timeZone","dateStyle","timeStyle","calendar","dayPeriod","numberingSystem","hourCycle","fractionalSecondDigits"];function et(...e){const[t,n,a,r]=e,l={};let o={},u;if(i(t)){const s=t.match(/(\d{4}-\d{2}-\d{2})(T|\s)?(.*)/);if(!s)throw W(k.INVALID_ISO_DATE_ARGUMENT);const c=s[3]?s[3].trim().startsWith("T")?`${s[1].trim()}${s[3].trim()}`:`${s[1].trim()}T${s[3].trim()}`:s[1].trim();u=new Date(c);try{u.toISOString()}catch{throw W(k.INVALID_ISO_DATE_ARGUMENT)}}else if(Ee(t)){if(isNaN(t.getTime()))throw W(k.INVALID_DATE_ARGUMENT);u=t}else if(y(t))u=t;else throw W(k.INVALID_ARGUMENT);return i(n)?l.key=n:N(n)&&Object.keys(n).forEach(s=>{qe.includes(s)?o[s]=n[s]:l[s]=n[s]}),i(a)?l.locale=a:N(a)&&(o=a),N(r)&&(o=r),[l.key||"",u,l,o]}function At(e,t,n){const a=e;for(const r in n){const l=`${t}__${r}`;!a.__datetimeFormatters.has(l)||a.__datetimeFormatters.delete(l)}}function Dt(e,...t){const{numberFormats:n,unresolving:a,fallbackLocale:r,onWarn:l,localeFallbacker:o}=e,{__numberFormatters:u}=e,[s,c,m,E]=nt(...t),d=S(m.missingWarn)?m.missingWarn:e.missingWarn;S(m.fallbackWarn)?m.fallbackWarn:e.fallbackWarn;const g=!!m.part,T=i(m.locale)?m.locale:e.locale,O=o(e,r,T);if(!i(s)||s==="")return new Intl.NumberFormat(T,E).format(c);let I={},f,b=null;const L="number format";for(let D=0;D<O.length&&(f=O[D],I=n[f]||{},b=I[s],!N(b));D++)B(e,s,f,d,L);if(!N(b)||!i(f))return a?j:s;let _=`${f}__${s}`;K(E)||(_=`${_}__${JSON.stringify(E)}`);let A=u.get(_);return A||(A=new Intl.NumberFormat(f,U({},b,E)),u.set(_,A)),g?A.formatToParts(c):A.format(c)}const tt=["localeMatcher","style","currency","currencyDisplay","currencySign","useGrouping","minimumIntegerDigits","minimumFractionDigits","maximumFractionDigits","minimumSignificantDigits","maximumSignificantDigits","compactDisplay","notation","signDisplay","unit","unitDisplay","roundingMode","roundingPriority","roundingIncrement","trailingZeroDisplay"];function nt(...e){const[t,n,a,r]=e,l={};let o={};if(!y(t))throw W(k.INVALID_ARGUMENT);const u=t;return i(n)?l.key=n:N(n)&&Object.keys(n).forEach(s=>{tt.includes(s)?o[s]=n[s]:l[s]=n[s]}),i(a)?l.locale=a:N(a)&&(o=a),N(r)&&(o=r),[l.key||"",u,l,o]}function Ot(e,t,n){const a=e;for(const r in n){const l=`${t}__${r}`;!a.__numberFormatters.has(l)||a.__numberFormatters.delete(l)}}typeof __INTLIFY_PROD_DEVTOOLS__!="boolean"&&(Ne().__INTLIFY_PROD_DEVTOOLS__=!1);export{_t as A,gt as B,ct as C,qe as D,j as E,Je as F,Nt as G,et as H,bt as I,nt as J,Dt as K,dt as L,ut as M,tt as N,De as a,U as b,i as c,h as d,S as e,K as f,mt as g,Ne as h,y as i,Oe as j,se as k,M as l,rt as m,N as n,X as o,F as p,at as q,ft as r,ot as s,lt as t,Tt as u,it as v,st as w,Et as x,At as y,Ot as z};

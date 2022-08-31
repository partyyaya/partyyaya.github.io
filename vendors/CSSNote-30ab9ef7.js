import{m as g}from"./markdown-it-75be01fa.js";import{H as f}from"./highlight.js-867ee1b1.js";import{_ as u,L as y,t as i,s as a,u as w}from"../js/index-3fb62596.js";import{m as k}from"./mdCopy-c8cfacf4.js";import{a as e,o as _,j as S,e as t,f as r,k as z,l as c,m as x,q as C,F as B}from"./@vue-6bb656f0.js";import"./clipboard-3a281e2a.js";import"./entities-96bc23f9.js";import"./uc.micro-174787a3.js";import"./mdurl-4b1f5cdc.js";import"./linkify-it-59decb82.js";import"./vue-router-ec6d6ff4.js";/* empty css                      */import"./lodash-7e818ff8.js";const M=`## CSS \u7B46\u8A18
<a id="user-content-top"></a>

### \u76EE\u9304
<details>
<summary style="cursor: pointer;">&nbsp;BEM \u8A2D\u8A08\u6A21\u5F0F\u3001\u9078\u64C7\u5668\u3001\u6587\u672C\u5B57\u9AD4\u3001\u76D2\u6A21\u578B </summary>

- [BEM \u8A2D\u8A08\u6A21\u5F0F](#user-content-bem)
- [\u52A0\u5165CSS\u7684\u56DB\u7A2E\u65B9\u5F0F](#user-content-add)
- [CSS\u9078\u64C7\u5668](#user-content-selector)
  - [\u5143\u7D20\u95DC\u4FC2\u9078\u64C7\u5668](#user-content-selector)
  - [\u507D\u5143\u7D20](#user-content-pseudo-element)
  - [\u507D\u985E](#user-content-pseudo-class)
  - [\u5C64\u758A\u6027](#user-content-cascading)
  - [\u5E8F\u865F\u9078\u64C7\u5668](#user-content-sequence-selector)
  - [\u8907\u5408\u9078\u64C7\u5668](#user-content-compound-selector)
  - [\u5C6C\u6027\u9078\u64C7\u5668](#user-content-attribute-selector)
- [\u6587\u672C\u8207\u5B57\u9AD4\u5C6C\u6027](#user-content-font-text)
  - [\u5B57\u9AD4\u5C6C\u6027](#user-content-font-text)
  - [\u5E38\u7528\u6587\u672C\u6A23\u5F0F\u5C6C\u6027](#user-content-text-style-attribute)
  - [\u5B57\u9AD4\u5408\u5BEB\u5C6C\u6027](#user-content-font-combine-attribute)
- [\u76D2\u6A21\u578B](#user-content-box-model)
  - [margin \u5916\u908A\u8DDD](#user-content-box-model)
  - [padding \u5167\u908A\u8DDD](#user-content-padding)
  - [\u5143\u7D20\u96B1\u85CF\u8207\u8A8D\u8B58\u76D2\u6A21\u578B](#user-content-element-hidden-and-know-box)
  - [\u884C\u5167\u8207\u584A\u7D1A\u5143\u7D20](#user-content-inline-and-box)

</details>
<details>
<summary style="cursor: pointer;">&nbsp;\u6D6E\u52D5\u5B9A\u4F4D\u3001\u908A\u6846\u5713\u89D2\u3001\u80CC\u666F\u30012D3D\u4F4D\u79FB </summary>

- [\u6D6E\u52D5\u8207\u5B9A\u4F4D](#user-content-float-and-position)
  - [\u6D6E\u52D5](#user-content-float-and-position)
  - [\u6E05\u9664\u6D6E\u52D5](#user-content-clear-float)
  - [\u56FA\u5B9A\u5B9A\u4F4D](#user-content-position-fixed)
  - [\u76F8\u5C0D\u5B9A\u4F4D](#user-content-position-relative)
  - [\u7D55\u5C0D\u5B9A\u4F4D](#user-content-position-absolute)
  - [BFC](#user-content-bfc)
  - [z-index](#user-content-z-index)
- [\u908A\u6846\u8207\u5713\u89D2](#user-content-borders-and-corners)
  - [\u908A\u6846](#user-content-borders-and-corners)
  - [\u5713\u89D2](#user-content-corners)
  - [\u5BB9\u5668\u9670\u5F71](#user-content-box-shadow)
- [\u80CC\u666F\u8207\u6F38\u8B8A](#user-content-background-and-gradient)
  - [\u6F38\u8B8A](#user-content-background-and-gradient)
  - [\u80CC\u666F](#user-content-background)
- [2D&3D\u8F49\u63DB](#user-content-transform)
  - [\u4F4D\u79FB](#user-content-transform)
  - [\u6B6A\u659C](#user-content-skew)
  - [\u65CB\u8F49](#user-content-rotate)
  - [\u7E2E\u653E](#user-content-scale)
  - [3D\u7A7A\u9593\u79FB\u52D5](#user-content-3d-translate)

</details>
<details>
<summary style="cursor: pointer;">&nbsp;\u904E\u6E21\u8207\u52D5\u756B</summary>

- [\u904E\u6E21](#user-content-transition)
- [\u52D5\u756B](#user-content-animation)

</details>
<details>
<summary style="cursor: pointer;">&nbsp;Flex \u5E03\u5C40</summary>

- [\u57FA\u672C\u6982\u5FF5\u8207\u4ECB\u7D39](#user-content-flex-introduce)
- \u5BB9\u5668\u5C6C\u6027
  - [display \u5C6C\u6027](#user-content-flex-display)
  - [flex-direction \u5C6C\u6027](#user-content-flex-flex-direction)
  - [flex-wrap \u5C6C\u6027](#user-content-flex-flex-wrap)
  - [flex-flow \u5C6C\u6027](#user-content-flex-flex-flow)
  - [justify-content \u5C6C\u6027](#user-content-flex-justify-content)
  - [align-items \u5C6C\u6027](#user-content-flex-align-items)
  - [align-content \u5C6C\u6027](#user-content-flex-align-content)
- \u9805\u76EE\u5C6C\u6027
  - [order \u5C6C\u6027](#user-content-flex-item-order)
  - [flex-grow \u5C6C\u6027](#user-content-flex-item-flex-grow)
  - [flex-shrink \u5C6C\u6027](#user-content-flex-item-flex-shrink)
  - [flex-basis \u5C6C\u6027](#user-content-flex-item-flex-basis)
  - [flex \u5C6C\u6027](#user-content-flex-item-flex)
  - [align-self \u5C6C\u6027](#user-content-flex-item-align-self)

</details>
<details>
<summary style="cursor: pointer;">&nbsp;\u5176\u4ED6\u5BE6\u7528\u529F\u80FD</summary>

- [\u6C34\u5E73\u5C45\u4E2D](#user-content-horizontal-center)
- [\u5782\u76F4\u5C45\u4E2D](#user-content-vertical-center)
- [\u6587\u5B57\u7701\u7565\u865F\uFF1A\`\`\`...\`\`\`](#user-content-text-ellipsis)

</details>

<style>
  /* \u6F14\u793A\u4F7F\u7528 */
  @media (min-width: 768px){
    .flex_layout .box {
      background-color: #FF8000;
      margin: 1vw 0px;
      display: flex;
      max-width: 30vw;
    }
    .flex_layout .box-item {
      width: 3vw;
      height: 3vw;
      line-height: 3vw;
      vertical-align: middle;
      margin: 0.5vw;
      background-color: #ffd200;
      font-size: 2vw;
      color: white;
      text-align: center;
    }
  }

  @media (max-width: 767px){
    .flex_layout .box {
     display: none;
    }
  }
</style>

<hr id="user-content-bem" style="height: 4px;">

### BEM \u8A2D\u8A08\u6A21\u5F0F\u3001\u9078\u64C7\u5668\u3001\u6587\u672C\u5B57\u9AD4\u3001\u76D2\u6A21\u578B
#### <a href="#user-content-top" >BEM \u8A2D\u8A08\u6A21\u5F0F</a>
- \u4EC0\u9EBC\u662FBEM\uFF1F
  \`\`\`txt
  BEM \u662F\u4E00\u7A2E CSS class \u547D\u540D\u7684\u8A2D\u8A08\u6A21\u5F0F\uFF0C\u5C07\u4ECB\u9762\u5207\u5272\u6210\u8A31\u591A\u7368\u7ACB\u7684\u5340\u584A\uFF0C
  \u4EE5\u5340\u584A\uFF08Block\uFF09\u3001\u5143\u7D20\uFF08Element\uFF09\u548C\u4FEE\u98FE\u5B50\uFF08Modifier\uFF09\u4F86\u547D\u540D\uFF0C
  \u512A\u9EDE\u662F\u4EE5\u5143\u4EF6\u89C0\u5FF5\u9032\u884C\u958B\u767C\uFF0C\u5177\u6709\u91CD\u7528\u6027\u3002
  \`\`\`
- \u8A2D\u8A08\u7BC4\u4F8B
  - \`\`\`Element(\u5143\u7D20)\`\`\` \u4F7F\u7528\u96D9\u5E95\u7DDA\u505A\u5206\u9694\u3001\`\`\`Modifier(\u4FEE\u98FE\u7B26)\`\`\` \u4F7F\u7528\u96D9 dash \u505A\u5206\u9694
  \`\`\`html
  <!-- 
    menu \u662F\u5340\u584A
    menu__item \u662F menu \u7684\u5143\u7D20
    menu__item--active \u662F menu__item \u7684\u5176\u4E2D\u4E00\u7A2E\u72C0\u614B
  -->
  <ul class="menu">
    <li class="menu__item menu__item--active">\u9996\u9801</li>
    <li class="menu__item">\u95DC\u65BC\u6211</li>
    <li class="menu__item">\u985E\u5225</li>
  </ul>
  \`\`\`
<hr id="user-content-add" style="height: 2px;">

#### <a href="#user-content-top" >\u52A0\u5165CSS\u7684\u56DB\u7A2E\u65B9\u5F0F</a>
- \u5167\u5D4C\u5F0F
\`\`\`html
<style>
  h1 {
    color: red;
  }
</style>
\`\`\`
- \u5916\u93C8\u5F0F
  - rel: \u95DC\u4FC2
  - stylesheet: \u6A23\u5F0F\u8868
  - href: \u8DEF\u5F91
\`\`\`html
<link rel="stylesheet" href="css/css.css">
\`\`\`
- \u5C0E\u5165\u5F0F
  - \u5C0E\u5165\u5F0F\u7684\u6A23\u5F0F\u8868\u4E0D\u6703\u7B49\u5F85css\u52A0\u8F09\u5B8C\u7562<br>\u800C\u662F\u7ACB\u5373\u6E32\u67D3html\u7D50\u69CB,\u6703\u6709\u5E7E\u79D2\u7D20\u9762\u671D\u5929\u7684\u6642\u9593
\`\`\`html
<style>
  @import url(css/css.css);
</style>
\`\`\`
- \u884C\u5167\u5F0F
\`\`\`html
<h1 style="color: red;">test</h1>
\`\`\`
<hr id="user-content-selector" style="height: 2px;">

#### <a href="#user-content-top" >CSS\u9078\u64C7\u5668</a>
#### <a href="#user-content-top" >\u5143\u7D20\u95DC\u4FC2\u9078\u64C7\u5668</a>
\`\`\`css
/* \u53EA\u5C0D\u5152\u5B50\u6A19\u7C64 */
.box > p {
  color: red;
}

/* \u53EA\u5C0D\u540C\u7D1A\u4E0B\u4E00\u500B\u6A19\u7C64 */
img + span {
  color: green;
}

/* \u5C0D\u4E4B\u5F8C\u6240\u6709\u540C\u7D1A\u6A19\u7C64 */
h3 ~ span {
  font-style: italic;
}
\`\`\`

<hr id="user-content-pseudo-element" style="height: 2px;">

#### <a href="#user-content-top" >\u507D\u5143\u7D20</a>
\`\`\`css
/* before after \u7684 content \u70BA\u5FC5\u9808\u5C6C\u6027 */
/* \u8868\u793A\u5728\u6240\u6709a\u6A19\u7C64\u88E1\u6240\u6709\u6587\u672C\u4E4B\u524D\u90FD\u589E\u52A0\u25A0(\u610F\u6307\u9023\u25A0\u90FD\u53EF\u9EDE\u9078) */
a::before {
  content: "\u25A0";
}

/* 
\u91CD\u9EDE:\u9084\u53EF\u4EE5\u4F7F\u7528\u7D55\u5C0D\u5B9A\u4F4D\u5728\u7279\u5B9A\u7684\u76EE\u6A19\u524D(\u5F8C::after)\u52A0\u4E0A\u5716\u7247 
\u8209\u4F8B:
footer .part1 dl::before {
  content: '';
  position: absolute;
  width: 60px;
  height: 60px;
  background-image: url(../images/icons.png);
  left: 0;
}
*/

/* \u8868\u793A\u5728\u6240\u6709a\u6A19\u7C64\u88E1\u6240\u6709\u6587\u672C\u4E4B\u5F8C\u90FD\u589E\u52A0\u2764(\u610F\u6307\u9023\u2764\u90FD\u53EF\u9EDE\u9078) */
a::after {
    content: "\u2764";
}

.box1::selection {
  /* \u8A2D\u5B9A\u9078\u53D6\u5F8C\u80CC\u666F\u989C\u8272 */
  background-color: springgreen;
  /* \u8A2D\u5B9A\u9078\u53D6\u5F8C\u6587\u5B57\u989C\u8272 */
  color: deeppink;
}

/* \u9396\u5B9A\u8A72\u584A\u7D1A\u5143\u7D20\u88E1\u7684\u7B2C\u4E00\u500B\u5B57 */
.box1::first-letter {
  font-size: 50px;
}

/* \u9396\u5B9A\u8A72\u584A\u7D1A\u5143\u7D20\u88E1\u7684\u7B2C\u4E00\u884C\u5B57 */
.box1::first-line {
  /* \u6DFB\u52A0\u4E0B\u5212\u7EBF */
  text-decoration: underline;
}
\`\`\`
<hr id="user-content-pseudo-class" style="height: 2px;">

#### <a href="#user-content-top" >\u507D\u985E</a>
- a \u6A19\u7C64\u507D\u985E
  - link \u8207 visited \u5148\u5F8C\u90FD\u53EF
  - hover \u9700\u5728 active \u4E4B\u524D
  - link & visited \u9700\u5728 hover & active \u4E4B\u524D
\`\`\`css
/* \u6C92\u6709\u88AB\u8A2A\u554F */
a:link {
  color: dodgerblue;
}

/* \u88AB\u8A2A\u554F\u904E */
a:visited {
  color: darkgoldenrod;
}

/* \u9F20\u6A19\u61F8\u505C\u5728\u9023\u7D50\u4E0A */
a:hover {
  background-color: gold;
}

/* \u6309\u4E0B\u4F46\u672A\u9B06\u958B */
a:active {
  font-size: 50px;
}
\`\`\`

- css3\u507D\u985E
\`\`\`css
/* \u82E5\u6A19\u7C64\u5167\u70BA\u7A7A\u5247\u751F\u6548 */
.para:empty {
  background-color: red;
}

/* \u805A\u7126\u6642\u751F\u6548(\u82E5\u8A2D\u5B9A disable \u5247\u7121\u6CD5\u805A\u7126) */
input:focus {
  background-color: rgb(239, 243, 181);
}

input:disabled {
  border: 1px solid #000;
}

input:enabled {
  border: 1px solid rgb(17, 84, 209);
}

/* 
\u53EA\u7528\u65BC\u55AE\u9078\u6309\u9215\u548C\u8907\u9078\u6846
\u6B64\u7BC4\u4F8B\u76EE\u6A19\u70BA checked \u72C0\u614B\u7684 input \u5F8C\u9762\u7684\u7B2C\u4E00\u500B span
*/
input:checked+span {
  color: red;
}

/* \u76F8\u7B49\u65BChtml\u6A19\u7C64 */
:root {
  font-size: 20px;
}
\`\`\`
<hr id="user-content-cascading" style="height: 2px;">

#### <a href="#user-content-top" >\u5C64\u758A\u6027</a>
- \u884C\u5185\u5F0F > \u5185\u5D4C\u5F0F\u7684\u512A\u5148\u7EA7
- id > class > \u6A19\u7C64
- \u82E5\u5C64\u7D1A\u4E00\u6A23\u5247\u6309\u7167\u5148\u5F8C\u9806\u5E8F
- \u5C31\u8FD1\u539F\u5247
  - \u82E5\u90FD\u6C92\u9078\u4E2D\u5247\u770B\u8AB0\u6BD4\u8F03\u63A5\u8FD1,\u82E5\u90FD\u9078\u4E2D\u5247\u770B\u6B0A\u91CD
  - \u8FD1 > \u6B0A\u91CD
\`\`\`html
<style>
p {
  color: red;
}

#para {
  color: green;
}

.spec {
  color: blue;
}

/* 
  id > class > \u6A19\u7C64
  \u6B0A\u91CD(2, 0, 1)
*/
#box1 #box2 p {
  color: red;
}

/* 
  \u6B0A\u91CD(2, 1, 2)
*/
#box1 div.box2 #box3 p {
  color: green;
}

/* 
  \u6B0A\u91CD(0, 3, 1)
*/
.box1 .box2 .box3 p {
  color: blue;
}

/* 
  \u6B0A\u91CD(0, 1, 1)
*/
.list li {
  color: red;
}

/* 
  \u6B0A\u91CD(0, 1, 0)
  \u5982\u679C\u52A0 !important \u5247\u8996\u70BA\u6700\u512A\u5148
*/
.spec {
  color: blue !important;
}
</style>
<body>
  <p id="para" class="spec">\u6211\u662F\u6BB5\u843D</p>
  <div id="box1" class="box1">
    <div id="box2" class="box2">
      <div id="box3" class="box3">
        <p>\u6211\u662F\u6BB5\u843D</p>
      </div>
    </div>
  </div>

  <ul class="list">
    <li>\u5217\u8868\u9879</li>
    <li class="spec">\u5217\u8868\u9879</li>
    <li class="spec">\u5217\u8868\u9879</li>
    <li>\u5217\u8868\u9879</li>
    <li>\u5217\u8868\u9879</li>
    <li>\u5217\u8868\u9879</li>
    <li>\u5217\u8868\u9879</li>
  </ul>
</body>
\`\`\`
<hr id="user-content-sequence-selector" style="height: 2px;">

#### <a href="#user-content-top" >\u5E8F\u865F\u9078\u64C7\u5668</a>
- \u82E5\u6307\u5B9A(:\u524D\u9762)\u7684\u6A19\u7C64\u4E0D\u7B26\u5247\u4E0D\u6703\u751F\u6548 
\`\`\`html
<style>
  /* \u7B2C1\u500B\u662Fp\u6A19\u7C64\u751F\u6548 */
  .box1 p:first-child {
    color: red;
  }

  /* \u6700\u5F8C1\u500B\u662Fp\u6A19\u7C64\u751F\u6548 */
  .box1 p:last-child {
    color: blue;
  }

  /* \u82E5\u7B2C3\u500B\u4E0D\u662Fp\u6A19\u7C64\u5247\u4E0D\u751F\u6548 */
  .box2 p:nth-child(3) {
    color: green;
  }

  /* \u5947\u6578: odd=2n+1 */
  .box3 p:nth-child(odd) {
    color: orange;
  }

  /* \u5076\u6578: even=2n */
  .box3 p:nth-child(even) {
    color: red;
  }

  /* \u9078\u64C7\u7B2C\u4E09\u500Bp\u6A19\u7C64 */
  .box4 p:nth-of-type(3) {
    color: blue;
  }

  /* \u5012\u6578\u7B2C\u4E8C\u500B\u662Fp\u6A19\u7C64\u5247\u751F\u6548 */
  .box5 p:nth-last-child(2) {
    color: sienna;
  }

  /* \u9078\u64C7\u5012\u6578\u7B2C\u4E8C\u500Bp\u6A19\u7C64 */
  .box5 p:nth-last-of-type(2) {
    color: sienna;
  }
</style>
\`\`\`
<hr id="user-content-compound-selector" style="height: 2px;">

#### <a href="#user-content-top" >\u8907\u5408\u9078\u64C7\u5668</a>
\`\`\`html
<style>
  /* \u5F8C\u4EE3\u9078\u64C7\u5668\u5FC5\u9808\u4EE5\u7A7A\u683C\u9694\u958B */
  div.box p.spec em {
    color: red;
  }

  /* \u4EA4\u96C6\u9078\u64C7\u5668\u901A\u5E38\u7528\u5728\u985E\u4E2D\u6307\u5B9A\u7684\u6A19\u7C64 */
  h3.spec {
    font-style: italic;
  }

  /* \u591A\u91CD\u9078\u64C7\u5668 */
  ul, ol {
    list-style: none;
  }
</style>
<body>
  <div class="box">
    <ul>
      <li>
        <p class="spec">\u6BB5\u843D<em>\u5F37\u8ABF\u6587\u5B57</em></p>
      </li>
    </ul>
  </div>
  <h3 class="spec">\u4E09\u7D1A\u6A19\u984C</h3>
  <ul>
    <li>\u7121\u5E8F\u5217\u8868\u7684\u5217\u8868\u9805</li>
  </ul>
  <ol>
    <li>\u6709\u5E8F\u5217\u8868\u7684\u5217\u8868\u9805</li>
  </ol>
</body>
\`\`\`
<hr id="user-content-attribute-selector" style="height: 2px;">

#### <a href="#user-content-top" >\u5C6C\u6027\u9078\u64C7\u5668</a>
\`\`\`html
<style>
  img {
    width: 300px;
  }

  /* 
    [alt] \u6709\u9019\u500B\u5C6C\u6027
    [alt="abc"] \u7CBE\u78BA\u5339\u914D
    [alt^="abc"] \u958B\u982D\u5339\u914D
    [alt$="abc"] \u7D50\u5C3E\u5339\u914D
    [alt*="abc"] \u4EFB\u610F\u4F4D\u7F6E\u5339\u914D
    [alt|="abc"] abc\u70BA\u958B\u982D
    [alt~="abc"] abc\u70BA\u7A7A\u683C\u5206\u958B\u7684\u7368\u7ACB\u90E8\u5206\u5982:777 abc 888
   */

  img[alt~="\u624B\u6A5F\u62CD\u651D"] {
    border: 3px solid red;
  }
</style>
<img src="images/image.jpg" alt="\u624B\u6A5F\u62CD\u651D">
\`\`\`
<hr id="user-content-font-text" style="height: 2px;">

#### <a href="#user-content-top" >\u6587\u672C\u8207\u5B57\u9AD4\u5C6C\u6027</a>
#### <a href="#user-content-top" >\u5B57\u9AD4\u5C6C\u6027</a>
\`\`\`css
/* \u64C1\u6709\u5B57\u9AD4\u6587\u4EF6\u6642\u53EF\u7528\u4EE5\u4E0B\u65B9\u5F0F\u5B9A\u7FA9\u5B57\u9AD4 */
@font-face {
  /* \u53D6\u540D */
  font-family: 'webfont';
  /* \u70BA\u5B57\u9AD4\u63D0\u4F9B\u4E00\u500B\u975E\u5E38\u5C0F\u7684\u963B\u585E\u9031\u671F\u548C\u7121\u9650\u7684\u4EA4\u63DB\u9031\u671F */
  font-display: swap;
  /* IE9*/
  src: url('fonts/webfont.eot');
  /* IE6-IE8 */
  src: url('fonts/webfont.eot') format('embedded-opentype'),
      /* chrome\u3001firefox */
      url('fonts/webfont.woff2') format('woff2'),
      url('fonts/webfont.woff') format('woff'),
      /* chrome\u3001firefox\u3001opera\u3001Safari, Android, iOS 4.2+*/
      url('fonts/webfont.ttf') format('truetype'),
      /* iOS 4.1- */
      url('fonts/webfont.svg') format('svg');
}

/* 
  \u6703\u5148\u67E5\u770B\u4F7F\u7528\u8005\u4E3B\u6A5F\u6709\u7121\u5B89\u88DD\u5B57\u9AD4
  \u82E5\u7B2C\u4E00\u500B\u5B57\u9AD4\u6C92\u6709\u5247\u9678\u7E8C\u5F80\u4E0B\u5C0B\u627E\u5408\u9069\u7684\u5B57\u9AD4
*/
.para5 {
  font-family: 'Times New Roman', serif, 'Microsoft Yahei';
}

/* 
  \u901A\u5E38\u4E2D\u6587\u5B57\u9AD4\u6703\u64FA\u5728\u82F1\u6587\u5B57\u9AD4\u5F8C\u9762\u4EE5\u5C08\u6CE8\u986F\u793A\u4E2D\u6587
  \u5B57\u9AD4\u5982\u679C\u662F\u4E2D\u6587\u6216\u82F1\u6587\u4E2D\u9593\u6709\u7A7A\u683C\uFF0C\u7528\u5F15\u865F\u5305\u8D77\u6765
  \u591A\u500B\u5B57\u9AD4\u8A2D\u7F6E\uFF0C\u5B57\u9AD4\u8207\u5B57\u9AD4\u4E4B\u95F4\u7528\u9017\u865F\u9694\u958B
  \u5F15\u865F\u5D4C\u5957:\u5916\u9762\u4F7F\u7528\u96D9\u5F15\u865F\uFF0C\u88E1\u9762\u4F7F\u7528\u55AE\u5F15\u865F
*/
.para6 {
  font-family: 'Times New Roman', serif, '\u5FAE\u8F6F\u96C5\u9ED1';
}

h3 {
  font-family: 'webfont';
  color: rgb(250, 50, 190);
}
\`\`\`
<hr id="user-content-text-style-attribute" style="height: 2px;">

#### <a href="#user-content-top" >\u5E38\u7528\u6587\u672C\u6A23\u5F0F\u5C6C\u6027</a>
\`\`\`css
.test {
  /* \u80CC\u666F\u984F\u8272 */
  background-color: #f36;
  /* \u5B57\u9AD4\u984F\u8272 */
  color: #ffffff;
  /* \u6700\u5927\u5230255 \u900F\u660E\u5EA6\u70BA0~1*/
  color: rgba(255, 0, 0, .6);
  /* \u5B57\u9AD4\u7C97\u7D30(\u9810\u8A2D: normal(400), \u52A0\u7C97: bold(700)) */
  font-weight: bold;
  /* \u5B57\u9AD4\u98A8\u683C(\u9810\u8A2D normal) */
  font-style: italic;
  /* \u6587\u5B57\u5927\u5C0F */
  font-size: 26px;
  /* 
    \u6587\u672C\u5167\u5BB9\u4E4B\u524D\u7684\u7E2E\u9032\u91CF
    2em: \u8868\u793A\u5169\u500B\u5B57\u7B26\u7684\u5BEC\u5EA6
    %: \u4EE5\u8A72\u5167\u5BB9\u584A\u5BEC\u5EA6\u6C7A\u5B9A
  */
  text-indent: 2em;
  /* \u6587\u5B57\u7279\u6548(\u9810\u8A2D: none, underline: \u5E95\u7DDA, line-through: \u522A\u9664\u7DDA) */
  text-decoration: underline;
  /* 
    \u884C\u9AD8:
    1.75 \u4EE3\u8868\u8A72\u5B57\u9AD4\u5927\u5C0F x 1.75\u500D
    \u4E5F\u53EF\u4EE5\u5BEB\u6210 175% \u6216 26x1.75=45.5px \u6216 1.75em
    \u901A\u5E38\u4EE5\u500D\u6578\u8868\u793A 
  */
  line-height: 1.75;
}
\`\`\`
<hr id="user-content-font-combine-attribute" style="height: 2px;">

#### <a href="#user-content-top" >\u5B57\u9AD4\u5408\u5BEB\u5C6C\u6027</a>
- \u5FC5\u9808\u5305\u542B: \`\`\`font-size\`\`\` \`\`\`font-family\`\`\`
- \u53EF\u9078\u64C7\u5305\u542B: \`\`\`font-style\`\`\` \`\`\`font-variant\`\`\` \`\`\`font-weight\`\`\` \`\`\`line-height\`\`\`
- \`\`\`font-style\`\`\` \`\`\`font-variant\`\`\` \`\`\`font-weight\`\`\` \u5FC5\u987B\u5728 \`\`\`font-size\`\`\` \u4E4B\u524D
- \`\`\`line-height\`\`\` \u9700\u5728 \`\`\`font-size\`\`\` \u5F8C\u9762\uFF0C\u7531 \`\`\`/\`\`\` \u5206\u9694\uFF0C\u5982: \`\`\`16px/3\`\`\`
- font-family \u5FC5\u987B\u6700\u540E\u6307\u5B9A
\`\`\`css
 p {
  font: bold italic 40px/1.5 "Times New Roman", "\u5FAE\u8F6F\u96C5\u9ED1";
}
\`\`\`
<hr id="user-content-box-model" style="height: 2px;">

#### <a href="#user-content-top" >\u76D2\u6A21\u578B</a>
#### <a href="#user-content-top" >margin \u5916\u908A\u8DDD</a>
\`\`\`css
/* 
  \u4E0B\u9762\u9019\u4E09\u500B\u6A19\u7C64\u90FD\u6709\u9810\u8A2D padding \u8207 margin \u6240\u4EE5\u8981\u5C07\u4ED6\u5011\u53BB\u9664
  \u82E5 ul \u8A2D\u5B9Apadding\u70BA0\u5247\u4E0D\u986F\u793A\u5C0F\u5713\u9EDE
*/
body,
ul,
p {
    margin: 0;
    padding: 0;
}

/* 
  margin \u5728\u5782\u76F4\u65B9\u5411\u6703\u4EE5\u5927\u503C\u70BA\u4E3B(\u6C34\u5E73\u70BA\u76F8\u52A0)
  \u4F9D\u4E0B\u9762\u7BC4\u4F8B\u5169\u500B\u76D2\u5B50\u4E4B\u9593\u9593\u8DDD\u70BA 80px
*/
.box1 {
  width: 200px;
  height: 200px;
  margin-bottom: 70px;
}

.box2 {
  width: 200px;
  height: 200px;
  margin-top: 80px;
}

/* 
  \u61C9\u7528: \u6C34\u5E73\u5C45\u4E2D
  margin
    \u500B\u5225\u5C6C\u6027:
      margin-top
      margin-bottom
      margin-left
      margin-right
    \u7C21\u5316\u5BEB\u6CD5:
      1.margin: \u4E0A \u53F3 \u4E0B \u5DE6;
      2.margin: \u4E0A\u4E0B \u5DE6\u53F3;
      3.margin: \u4E0A \u5DE6\u53F3 \u4E0B;
      4.margin: \u56DB\u908A\u540C\u5024; 
*/
section {
  width: 600px;
  height: 100px;
  background-color: rgb(240, 151, 151);
  /* \u4E0A\u4E0B\u70BA0 \u6C34\u5E73\u5C45\u4E2D */
  margin: 0 auto;
  /* \u6587\u5B57\u5C45\u4E2D */
  text-align: center;
  /* \u884C\u9AD8\u7B49\u65BC\u76D2\u5B50\u9AD8\uFF0C\u8B93\u6587\u5B57\u5782\u76F4\u5C45\u4E2D */
  line-height: 100px;
}
\`\`\`
<hr id="user-content-padding" style="height: 2px;">

#### <a href="#user-content-top" >padding \u5167\u908A\u8DDD</a>
\`\`\`css
/* 
  padding
    \u500B\u5225\u5C6C\u6027:
      padding-top
      padding-bottom
      padding-left
      padding-right
    \u7C21\u5316\u5BEB\u6CD5:
      1.padding: \u4E0A \u53F3 \u4E0B \u5DE6;
      2.padding: \u4E0A\u4E0B \u5DE6\u53F3;
      3.padding: \u4E0A \u5DE6\u53F3 \u4E0B;
      4.padding: \u56DB\u908A\u540C\u5024;
*/
.box2 {
  width: 200px;
  height: 200px;
  background-color: orange;
  padding: 10px 20px 30px 40px;
}
.box3 {
  width: 200px;
  height: 200px;
  background-color: orange;
  padding: 10px 20px 30px;
}
.box4 {
  width: 200px;
  height: 200px;
  background-color: orange;
  padding: 10px 20px;
}
.box5 {
  width: 200px;
  height: 200px;
  background-color: orange;
  padding: 10px;
}
\`\`\`
<hr id="user-content-element-hidden-and-know-box" style="height: 2px;">

#### <a href="#user-content-top" >\u5143\u7D20\u96B1\u85CF\u8207\u8A8D\u8B58\u76D2\u6A21\u578B</a>
\`\`\`css
/* \u5143\u7D20\u96B1\u85CF */
.box1{
  width: 200px;
  height: 200px;
  /* \u96B1\u85CF\uFF0C\u653E\u68C4\u4F4D\u7F6E */
  display: none;
  /* \u96B1\u85CF\uFF0C\u4E0D\u653E\u68C4\u4F4D\u7F6E */
  visibility: hidden;
}

/* \u8A8D\u8B58\u76D2\u6A21\u578B */
.box2 {
  /* 
    total:\u76D2\u5B50\u5BEC:340px \u9AD8:240px
    width height \u70BA"\u5167\u5BB9\u5BEC\u9AD8";
  */
  width: 300px;
  height: 200px;
  background-color: gold;
  /* \u908A\u6846 */
  border: 10px solid red;
  /* \u5167\u908A\u8DDD */
  padding: 10px;
}

/* 
  box-sizing\u5C5E\u6027
  \u82E5\u8A2D\u7F6E border-box \u5C6C\u6027(content-box\u70BA\u9810\u8A2D)
  width height \u5247\u6703\u4EE5\u76D2\u5B50\u5BEC\u9AD8\u8A08\u7B97
  \u5982\u4E0B\u9762\u7BC4\u4F8B\u5BE6\u969B\u80FD\u4F7F\u7528\u5BEC\u9AD8\u53EA\u5269 160x160 
*/
.box3 {
  box-sizing: border-box;
  width: 200px;
  height: 200px;
  border: 10px solid #000;
  padding: 10px;
}
\`\`\`
<hr id="user-content-inline-and-box" style="height: 2px;">

#### <a href="#user-content-top" > \u884C\u5167\u8207\u584A\u7D1A\u5143\u7D20</a>
\`\`\`css
/* 
  \u884C\u5167\u5143\u7D20(\u5982:span)\u8207\u584A\u7D1A\u5143\u7D20(\u5982:div) 
  \u5DEE\u5225:
    1.\u584A\u7D1A\u5143\u7D20\u6703\u7368\u5360\u4E00\u884C\uFF0C\u5176\u5BEC\u5EA6\u81EA\u52D5\u586B\u6EFF\u5176\u7236\u5143\u7D20\u5BEC\u5EA6
      \u884C\u5167\u5143\u7D20\u4E0D\u6703\u7368\u5360\u4E00\u884C\uFF0C\u76F8\u9130\u7684\u884C\u5167\u5143\u7D20\u6703\u6392\u5217\u5728\u540C\u4E00\u884C\uFF0C\u76F4\u81F3\u6392\u4E0D\u4E0B\u624D\u6703\u63DB\u884C\uFF0C\u5176\u5BEC\u5EA6\u96A8\u5143\u7D20\u7684\u5167\u5BB9\u800C\u8B8A\u5316
    2.\u584A\u7D1A\u5143\u7D20\u53EF\u4EE5\u5305\u542B\u884C\u5167\u5143\u7D20\u548C\u584A\u7D1A\u5143\u7D20\uFF1B\u884C\u5167\u5143\u7D20\u4E0D\u80FD\u5305\u542B\u584A\u7D1A\u5143\u7D20
    3.\u884C\u5167\u5143\u7D20\u8A2D\u7F6E\u4EE5\u4E0B\u5C6C\u6027\u7121\u6548
      width\u3001height\u3001margin-top\u3001margin-bottom\u3001
      padding-top\u3001padding-bottom 

  \u76F8\u4E92\u8F49\u63DB:
    1.\u8F49\u70BA\u884C\u5167\u584A: display:inline-block;
    2.\u8F49\u70BA\u884C\u5167\u5143\u7D20: display:inline;
    3.\u8F49\u70BA\u584A\u7D1A\u5143\u7D20: display:block;
*/
span {
  /* \u8F49\u70BA\u884C\u5167\u584A */
  display: inline-block;
}

/* \u584A\u7EA7\u5143\u7D20\u61C9\u7528 */
.box1 {
  /* \u5BEC\u5EA6\u7701\u7565\u6389\uFF0C\u7531\u65BC\u662F\u584A\u7EA7\u5143\u7D20\uFF0C\u5BEC\u5EA6\u6703\u81EA\u52D5\u6490\u6EFF */
  height: 100px;
}

.box2 {
  /* \u9AD8\u5EA6\u7701\u7565\u6389\uFF0C\u6703\u88AB\u5167\u5BB9\u81EA\u52D5\u6490\u958B */
  width: 200px;
}
\`\`\`
<hr  id="user-content-float-and-position" style="height: 4px;">

### \u6D6E\u52D5\u5B9A\u4F4D\u3001\u908A\u6846\u5713\u89D2\u3001\u80CC\u666F\u30012D3D\u4F4D\u79FB
#### <a href="#user-content-top" >\u6D6E\u52D5\u8207\u5B9A\u4F4D</a>
#### <a href="#user-content-top" >\u6D6E\u52D5</a>
- \u6D6E\u52D5\u7684\u5143\u7D20\u4E00\u5B9A\u80FD\u8A2D\u7F6E\u5BEC\u9AD8
\`\`\`css
/* \u5DE6\u6D6E\u52D5 */
.box1 {
  float: left;
}

/* \u53F3\u6D6E\u52D5 */
.box2 {
  float: right;
}

/* 
  1.\u6D6E\u52D5\u7684\u9806\u5E8F\u8CBC\u9760\u7279\u6027
    \u9806\u5E8F\u6703\u4F9D\u6A19\u7C64\u5F9E\u4E0A\u5F80\u4E0B
    \u6700\u4E0B\u9762\u7684\u6A19\u7C64\u6703\u4E00\u76F4\u5F80\u4E0A\u76F4\u5230\u627E\u5230\u9808\u8CBC\u9760\u7684\u5C0D\u8C61

  2.\u95DC\u65BC\u5BEC\u5EA6
    \u7236\u76D2\u5B50\u5FC5\u9808\u6DB5\u84CB\u6240\u6709\u5B50\u76D2\u5B50\u7684\u5BEC\u5EA6\u5426\u5247\u5B50\u76D2\u5B50\u53EF\u80FD\u6703\u88AB\u64E0\u4E0B\u53BB
    \u7236\u76D2\u5B50\u82E5\u4E0D\u8A2D\u9AD8\u5EA6\u5247\u4E0D\u6703\u88AB\u5B50\u76D2\u5B50\u6D6E\u52D5\u6490\u958B(\u53BB\u9664\u6D6E\u52D5\u5247\u6703\u6490\u958B)
*/
/* \u7236\u76D2\u5B50 div */
.box {
  width: 600px;
  height: 200px;
  border: 1px solid #000;
}
/* \u5B50\u76D2\u5B50 div c1 */
.box .c1 {
  width: 200px;
  height: 200px;
  background-color: orange;
  float: left;
}
/* \u5B50\u76D2\u5B50 div c2 */
.box .c2 {
  width: 200px;
  height: 200px;
  background-color: green;
  float: left;
}
/* \u5B50\u76D2\u5B50 div c3 */
.box .c3 {
  width: 200px;
  height: 200px;
  background-color: blue;
  float: left;
}

/* \u6EA2\u51FA\u96B1\u85CF:overflow: hidden; */
div{
  width: 200px;
  height: 200px;
  padding: 50px;
  border: 1px solid #000;
  /* \u6EA2\u51FA\u76D2\u5B50\u908A\u6846\u7684\u5167\u5BB9\u5C07\u88AB\u96B1\u85CF\uFF0C\u4F46\u6703\u4FDD\u7559\u76D2\u5B50padding\u90E8\u5206\u7684\u6EA2\u51FA */
  overflow: hidden;
}
\`\`\`
<hr id="user-content-clear-float" style="height: 2px;">

#### <a href="#user-content-top" >\u6E05\u9664\u6D6E\u52D5</a>
- \u5E38\u7528\u65B9\u6CD5\u4E00
\`\`\`html
<style>
  /* 
    \u82E5\u6C92\u8A2D\u7F6E height \u5247\u4E0D\u88AB\u8996\u70BABFC 
    \u4F46\u53C8\u6703\u78B0\u5230\u4E0D\u78BA\u5B9Aheight\u591A\u5C11\u7684\u60C5\u6CC1\u4E14\u5B50\u5143\u7D20\u6709\u6D6E\u52D5\u73FE\u8C61
    \u6240\u4EE5\u9700\u8981\u7528\u7279\u5225\u7684\u65B9\u6CD5\u505A\u5230BFC
    \u9019\u908A\u7528 overflow: hidden; \u4F86\u53D6\u6D88\u5C0D\u5B50\u5143\u7D20\u5C0D\u5916\u9762\u5143\u7D20\u5F71\u97FF
  */
  /* ================ \u65B9\u6CD5 ================== */
  div {
    overflow: hidden;
    margin-bottom: 10px;
  }
  /* ======================================== */

  p {
    float: left;
    width: 100px;
    height: 100px;
    background-color: orange;
    margin-right: 20px;
  }
</style>
<body>
  <div>
    <p></p>
    <p></p>
  </div>
  <div>
    <p></p>
    <p></p>
  </div>
</body>
\`\`\`
- \u5E38\u7528\u65B9\u6CD5\u4E8C
\`\`\`html
<style>
  /* ================ \u65B9\u6CD5 ================== */
  /* after \u7684 content \u5FC5\u9808\u8981\u5BEB\u5426\u5247\u5931\u6548 */
  /* \u5728\u7B2C\u4E00\u500B div \u5F8C\u9762\u52A0\u4E0A\u4E00\u500B"\u6E05\u9664\u5DE6\u53F3\u6D6E\u52D5"\u7684\u5143\u7D20 */
  .clearfix::after {
    content: '';
    clear: both;
    /* \u5FC5\u9808\u8F6C\u4E3A\u5757\u7EA7\u5143\u7D20 */
    display: block;
  }
  /* ======================================== */

  p {
    float: left;
    width: 100px;
    height: 100px;
    background-color: orange;
    margin-right: 20px;
  }
</style>
<body>
  <div class="clearfix">
    <p></p>
    <p></p>
  </div>
  <div>
    <p></p>
    <p></p>
  </div>
</body>
\`\`\`
<hr id="user-content-position-fixed" style="height: 2px;">

#### <a href="#user-content-top" >\u56FA\u5B9A\u5B9A\u4F4D</a>
- \u4F7F\u7528\u65B9\u5F0F: \`\`\`position: fixed;\`\`\`
- \u4E26\u9078\u64C7\u8A2D\u5B9A\u4EE5\u4E0B\u56DB\u7A2E\u5C6C\u6027: \`\`\`top\`\`\` \`\`\`bottom\`\`\` \`\`\`left\`\`\` \`\`\`right\`\`\`
- \u7279\u9EDE
  - \u4EE5\u9801\u9762\u8996\u7A97\u70BA\u5B9A\u4F4D\u6A19\u6E96
  - \u5E38\u7528\u4F86\u505A\u5C0E\u822A\u8207\u8FD4\u56DE\u9802\u90E8\u7528\u9014
\`\`\`css
.box {
  position: fixed;
  bottom: 100px;
  right: 100px;
  width: 100px;
  height: 100px;
  background-color: orange;
}
\`\`\`
<hr id="user-content-position-relative" style="height: 2px;">

#### <a href="#user-content-top" >\u76F8\u5C0D\u5B9A\u4F4D</a>
- \u4F7F\u7528\u65B9\u5F0F: \`\`\`position: relative;\`\`\`
- \u4E26\u9078\u64C7\u8A2D\u5B9A\u4EE5\u4E0B\u56DB\u7A2E\u5C6C\u6027: \`\`\`top\`\`\` \`\`\`bottom\`\`\` \`\`\`left\`\`\` \`\`\`right\`\`\`
- \u7279\u9EDE
  - \u4E3B\u8981\u7528\u4F86\u5FAE\u8ABF\u6E32\u67D3\u4F4D\u7F6E
  - \u9801\u9762\u6E32\u67D3\u6703\u4F9D\u76F8\u5C0D\u4F4D\u7F6E\u6E32\u67D3
  - \u76F8\u5C0D\u4F4D\u7F6E\u4E0D\u6703\u91CB\u653E\u539F\u672C\u4F4D\u7F6E(\u539F\u4F4D\u7F6E\u4EE5\u4E0B\u7684\u6A19\u7C64\u4F9D\u7136\u5728\u539F\u6A19\u7C64\u4F4D\u7F6E\u4E0B\u9762)
\`\`\`html
<style>
/* 
  \u82E5\u540C\u8EF8\u65B9\u5411\u6703\u4EE5\u6700\u5F8C\u70BA\u4E3B 
  left:100px right:100px;
  \u5247\u6703\u4EE5\u6700\u5F8Cright:100px;\u8868\u793A
*/
div{
  width: 400px;
  height: 400px;
  border: 1px solid #000;
  margin: 40px auto;
}

p {
  width: 100px;
  height: 100px;
  background-color: orange;
  position: relative;
  top: 100px;
  left: 100px;
}
</style>
<body>
  <div>
    <p></p>
    <ul>
      <li>\u5217\u8868</li>
      <li>\u5217\u8868</li>
      <li>\u5217\u8868</li>
    </ul>
  </div>
</body>
\`\`\`
<hr id="user-content-position-absolute" style="height: 2px;">

#### <a href="#user-content-top" >\u7D55\u5C0D\u5B9A\u4F4D</a>
- \u4F7F\u7528\u65B9\u5F0F: \`\`\`position: absolute;\`\`\`
- \u53EF\u9078\u64C7\u8A2D\u5B9A\u4EE5\u4E0B\u56DB\u7A2E\u5C6C\u6027: \`\`\`top\`\`\` \`\`\`bottom\`\`\` \`\`\`left\`\`\` \`\`\`right\`\`\`
- \u7279\u9EDE:
  - \u7D55\u5C0D\u5B9A\u4F4D\u6703\u91CB\u653E\u81EA\u5DF1\u4F4D\u7F6E(\u812B\u96E2\u6A19\u6E96\u6587\u6A94\u6D41)
  - \u6703\u76F4\u63A5\u58D3\u84CB\u6389\u5176\u4ED6\u5143\u7D20(\u4E3B\u8981\u7528\u9014)
  - \u8A2D\u7F6E "\u7D55\u5C0D" \u6216 "\u56FA\u5B9A" \u5B9A\u4F4D\u7684\u5143\u7D20\u5C31\u53EF\u4EE5\u8A2D\u7F6E\u5BEC\u9AD8
- \u5176\u4ED6\u61C9\u7528\u5982\u4E0B
\`\`\`html
<head>
  <style>
    /*
      \u82E5\u8981\u8A2D\u5B9A\u5C45\u4E2D:
      margin \u70BA\u5BEC\u9AD8\u7684\u4E00\u534A
    */
    .test {
      width: 80px;
      height: 80px;
      position: absolute;
      top: 50%;
      left: 50%;
      margin-top: -40px;
      margin-left: -40px;
    }

    /* 
      \u7D55\u5C0D\u5B9A\u4F4D\u4E4B\u5B50\u7D55\u7236\u76F8\u95DC\u4FC2
      \u7D55\u5C0D\u5B9A\u4F4D\u7684\u6A19\u7C64\u6703\u53BB\u627E\u8207\u4ED6\u6700\u8FD1\u542B\u6709 position \u7236\u6A19\u7C64\u7576\u4F5C\u53C3\u8003\u9EDE
      \u7D93\u904E\u6E2C\u8A66: \u7236\u6A19\u7C64\u5E36\u6709 \u56FA\u5B9A\u5B9A\u4F4D ,\u76F8\u5C0D\u5B9A\u4F4D, \u56FA\u5B9A\u5B9A\u4F4D \u7686\u6703\u7522\u751F\u6548\u679C
      \u4E0B\u9762\u7BC4\u4F8B\u70BA p \u6703\u5728 \u7236\u6A19\u7C64box2\u7684 \u5DE6\u4E0A\u89D2 
    */
    .box1 {
      width: 402px;
      height: 402px;
      border: 1px solid #000;
      padding: 100px;
      margin: 0 auto;
    }

    .box2 {
      width: 200px;
      height: 200px;
      padding: 100px;
      border: 1px solid #000;
      position: relative;
    }

    .box3 {
      width: 98px;
      height: 98px;
      padding: 50px;
      border: 1px solid #000;
    }

    p {
      width: 50px;
      height: 50px;
      background-color: orange;
      position: absolute;
      top: 0;
      left: 0;
    }
  </style>
</head>

<body>
  <a href="">111</a>
  <div class="box1">
    <div class="box2">
      <div class="box3">
        <p></p>
      </div>
    </div>
  </div>
</body>
\`\`\`
<hr id="user-content-bfc" style="height: 2px;">

#### <a href="#user-content-top" >BFC</a>
- BFC \u610F\u601D: Block formatting context \u584A\u7D1A\u683C\u5F0F\u4E0A\u4E0B\u6587
- \u5B9A\u7FA9: \u70BA\u9801\u9762\u4E0A\u4E00\u500B\u7368\u7ACB\u5BB9\u5668\uFF0C\u5BB9\u5668\u88E1\u9762\u5B50\u5143\u7D20\u4E0D\u6703\u5F71\u97FF\u5230\u5916\u9762\u7684\u5143\u7D20\uFF0C\u53CD\u4E4B\u4EA6\u7136
- \u5E38\u7528\u5275\u5EFA BFC \u65B9\u5F0F: [\u8A73\u7D30\u8ACB\u898B MDN](https://developer.mozilla.org/en-US/docs/Web/Guide/CSS/Block_formatting_context)
  - float \u4E0D\u662F \`\`\`none\`\`\`
  - position \u4E0D\u662F \`\`\`static\`\`\` \`\`\`relative\`\`\`
  - display \u662F \`\`\`inline-block\`\`\` \`\`\`flex\`\`\` \`\`\`inline-flex\`\`\`
  - \`\`\`overflow: hidden;\`\`\`

<hr id="user-content-z-index" style="height: 2px;">

#### <a href="#user-content-top" >z-index</a>
- z-index \u8F03\u5927\u7684\u5143\u7D20\u6703\u8986\u84CB\u8F03\u5C0F\u7684\u5143\u7D20\u5728\u4E0A\u5C64\u9032\u884C\u986F\u793A
- \u4E0B\u9762\u7BC4\u4F8B box1 \u6703\u8986\u84CB\u5728 box2 \u4E0A\u9762
\`\`\`html
<head>
  <style>
    .box1 {
      width: 300px;
      height: 300px;
      background-color: orange;
      position: absolute;
      top: 100px;
      left: 100px;
      z-index: 9999;
    }

    .box2 {
      width: 300px;
      height: 300px;
      background-color: blue;
      position: absolute;
      top: 200px;
      left: 200px;
      z-index: 999;
    }
  </style>
</head>

<body>
  <div class="box1"></div>
  <div class="box2"></div>
</body>
\`\`\`

<hr  id="user-content-borders-and-corners" style="height: 4px;">

#### <a href="#user-content-top" >\u908A\u6846\u8207\u5713\u89D2</a>
#### <a href="#user-content-top" >\u908A\u6846</a>
- \u4F7F\u7528\u8AAA\u660E: \`\`\`border: \u7C97\u7D30 \u6A23\u5F0F \u984F\u8272\`\`\`
- \u53EF\u7D30\u5206\u70BA\u4EE5\u4E0B\u4E09\u7A2E\u7D30\u9805\u5C6C\u6027 
  - \u7C97\u7D30 \`\`\`border-width\`\`\` 
  - \u6A23\u5F0F \`\`\`border-style\`\`\`
    - \u5BE6\u7DDA \`\`\`solid\`\`\`
    - \u9EDE\u72C0\u7DDA \`\`\`dotted\`\`\`
    - \u865B\u7DDA \`\`\`dashed\`\`\`
  - \u984F\u8272 \`\`\`border-color\`\`\`
- \u53EF\u7D30\u5206\u70BA\u4EE5\u4E0B\u56DB\u908A
  - \u4E0A\u908A \`\`\`border-top\`\`\`
  - \u4E0B\u908A \`\`\`border-bottom\`\`\`
  - \u5DE6\u908A \`\`\`border-left\`\`\`
  - \u53F3\u908A \`\`\`border-right\`\`\`
- \u7BC4\u4F8B
  - \u5B9A\u7FA9\u908A\u6846: \`\`\`border: 3px solid #000;\`\`\`
  - \u4FEE\u6539\u56DB\u908A\u7684\u984F\u8272: \`\`\`border-color: red;\`\`\`
  - \u4FEE\u6539\u4E0A\u908A\u7684\u6A23\u5F0F: \`\`\`border-top-style: dotted;\`\`\`
  - \u53BB\u6389\u5DE6\u908A\u908A\u6846: \`\`\`border-left: none;\`\`\`
  - \u88FD\u4F5C\u671D\u4E0B\u7684\u7D05\u8272\u4E09\u89D2\u5F62
    \`\`\`txt
    width: 0;
    height: 0;
    border: 20px solid transparent;
    border-top-color: red;
    \`\`\`

<hr id="user-content-corners" style="height: 2px;">

#### <a href="#user-content-top" >\u5713\u89D2</a>
- [\u8A73\u7D30\u8ACB\u770B MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/border-radius)
- \u7406\u89E3\u8AAA\u660E: \u5C07\u6307\u5B9A\u534A\u5F91\u7684\u5713\u653E\u5728\u5BB9\u5668"\u5167"\u56DB\u89D2\u5283\u51FA\u5713\u5F27\u56DB\u908A\u5F62
- \u4F7F\u7528\u8AAA\u660E
  - \`\`\`border-radius: \u534A\u5F91(\u53EF\u591A\u500B\u503C)\`\`\`
  - \u534A\u5F91\u53EF\u4EE5\u7528\`\`\`%\`\`\`\u6216\u5176\u4ED6\u55AE\u4F4D(px\u3001em...)
    - \`\`\`border-radius: 50%;\`\`\`\u4EE3\u8868\u7528\u8A72\u5BB9\u5668\u4E00\u534A\u5BEC\u5EA6\u505A\u534A\u5F91\u756B\u6210"\u5713\u5F62"
  - \u4E00\u500B\u503C(\u56DB\u89D2)
  - \u4E8C\u500B\u503C
    - 1.\u5DE6\u4E0A\u89D2\u548C\u53F3\u4E0B\u89D2
    - 2.\u53F3\u4E0A\u89D2\u548C\u5DE6\u4E0B\u89D2
  - \u4E09\u500B\u503C
    - 1.\u5DE6\u4E0A\u89D2
    - 2.\u53F3\u4E0A\u89D2\u548C\u5DE6\u4E0B\u89D2
    - 3.\u53F3\u4E0B\u89D2
  - \u56DB\u500B\u503C
    - 1.\u5DE6\u4E0A\u89D2
    - 2.\u53F3\u4E0A\u89D2
    - 3.\u53F3\u4E0B\u89D2
    - 4.\u5DE6\u4E0B\u89D2
- \u9AD8\u7D1A\u65B9\u6CD5\u7BC4\u4F8B: \`\`\`border-radius: 70% 30% 30% 70% / 60% 40% 60% 40%;\`\`\`
  - \u7406\u89E3\u8AAA\u660E: \`\`\`border-radius: top(\u5DE61 \u53F32) bottom(\u53F33 \u5DE64)/ right(\u4E0A1 \u4E0B4) left(\u4E0A2 \u4E0B3);\`\`\`
    - 1 ~ 4\u4EE3\u8868\u9806\u5E8F
    - \u6BCF\u4E00\u89D2\u90FD\u53EF\u5206\u70BA(\u6C34\u5E73\u908A & \u5782\u76F4\u908A,\u6240\u4EE5top=\u5DE6\u4E0A\u89D2\u6C34\u5E73\u908A+\u53F3\u4E0A\u89D2\u6C34\u5E73\u908A,\u4F9D\u6B64\u985E\u63A8)
    - \u5176\u4ED6\u7BC4\u4F8B:
      \`\`\`txt
      border-radius: 70% 30%/ 60% 40%;
      \u7B49\u65BC:
      border-radius: top(\u5DE670% \u53F330%) bottom(\u53F370% \u5DE630%)/ right(\u4E0A60% \u4E0B40%) left(\u4E0A40% \u4E0B60%);
      \`\`\`
- \u53EF\u7D30\u5206\u70BA\u56DB\u89D2
  - \u5DE6\u4E0A\u89D2 \`\`\`border-top-left-radius\`\`\`
  - \u53F3\u4E0A\u89D2 \`\`\`border-top-right-radius\`\`\`
  - \u53F3\u4E0B\u89D2 \`\`\`border-bottom-right-radius\`\`\`
  - \u5DE6\u4E0B\u89D2 \`\`\`border-bottom-left-radius\`\`\`

<hr id="user-content-box-shadow" style="height: 2px;">

#### <a href="#user-content-top">\u5BB9\u5668\u9670\u5F71</a>
- \u4F7F\u7528\u8AAA\u660E
  - \u56DB\u500B\u503C
    - \`\`\`box-shadow: x\u504F\u79FB\u91CF y\u504F\u79FB\u91CF \u6A21\u7CCA\u7A0B\u5EA6 \u984F\u8272;\`\`\`
  - \u4E94\u500B\u503C
    - \`\`\`box-shadow: x\u504F\u79FB\u91CF y\u504F\u79FB\u91CF \u6A21\u7CCA\u7A0B\u5EA6 \u5EF6\u5C55\u51FA\u53BB\u7684\u5BEC\u5EA6 \u984F\u8272;\`\`\`
  - \u5167\u9670\u5F71(\u524D\u9762\u52A0\u5165 inset \u95DC\u9375\u5B57)
    - \`\`\`box-shadow: inset x\u504F\u79FB\u91CF y\u504F\u79FB\u91CF \u6A21\u7CCA\u7A0B\u5EA6 (\u5EF6\u5C55\u51FA\u53BB\u7684\u5BEC\u5EA6) \u984F\u8272;\`\`\`
  - \u53EF\u4EE5\u7528\u9017\u865F\u591A\u91CD\u758A\u52A0
    - \`\`\`box-shadow: 2px 2px 30px red, 4px 4px 40px blue, 6px 6px 50px green, inset 0px 0px 6px orange;\`\`\`

<hr id="user-content-background-and-gradient" style="height: 4px;">

#### <a href="#user-content-top">\u80CC\u666F\u8207\u6F38\u8B8A</a>
#### <a href="#user-content-top">\u6F38\u8B8A</a>
- \u9015\u5411\u6F38\u8B8A
  - [\u8A73\u7D30\u8ACB\u770B MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/gradient/radial-gradient())
  - \u4F7F\u7528\u65B9\u5F0F(\u88E1\u9762\u53EF\u586B\u591A\u7A2E\u984F\u8272\u5E73\u5747\u5206\u914D)
    - \`\`\`background-image: radial-gradient(\u5713\u5FC3\u5EA7\u6A19, \u958B\u59CB\u984F\u8272, \u7D50\u675F\u984F\u8272);\`\`\`
  - \u7BC4\u4F8B
  \`\`\`css
  background-image: radial-gradient(50% 50%, white, rgb(211, 211, 211));
  /*\u4E0A\u9762\u7B49\u540C\u65BC\u4E0B\u9762*/
  background-image: radial-gradient(50% 50%, white 0%, rgb(211, 211, 211) 100%);
  \`\`\` 
- \u7DDA\u6027\u6F38\u8B8A
  - [\u8A73\u7D30\u8ACB\u770B MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/gradient/linear-gradient())
  - \u4F7F\u7528\u65B9\u5F0F
    - \`\`\`linear-gradient(\u65B9\u5411, \u958B\u59CB\u984F\u8272, \u7D50\u675F\u984F\u8272);\`\`\`
  - \u7BC4\u4F8B
  \`\`\`css
  background-image: linear-gradient(to right, red, blue);
  /* \u53EF\u4EE5\u8A2D\u5B9A\u89D2\u5EA6 */
  background-image: linear-gradient(45deg, red, blue);
  /* \u5F9E\u5DE6\u5230\u53F3\u5E73\u5747\u5206\u914D\u984F\u8272 */
  background-image: linear-gradient(to right, red, yellow, orange, green, blue, purple);
  /* \u8A2D\u5B9A\u9EC3\u8272\u5728\u5F9E\u5DE6\u5230\u53F3\u768420%\u51FA\u73FE */
  background-image: linear-gradient(to right, red, yellow 20%, blue);
  \`\`\`

<hr id="user-content-background" style="height: 2px;">

#### <a href="#user-content-top">\u80CC\u666F</a>
- \`\`\`background-color\`\`\`
  - \u4F7F\u7528\u8AAA\u660E
      - \`\`\`background-color: \u984F\u8272;\`\`\`
- \`\`\`background-image\`\`\`
  - \u4F7F\u7528\u8AAA\u660E
    - \`\`\` background-image: url(\u5716\u7247\u9023\u7D50);\`\`\`
- \`\`\`background-attachment\`\`\`
  - \u4F7F\u7528\u8AAA\u660E
    - \`\`\`background-attachment: \u5C6C\u6027;\`\`\`
    - \u5C6C\u6027\u6709\u4E09\u7A2E\u4F9D "\u5BB9\u5668\u80CC\u666F\u5716\u7247" \u67E5\u770B\u8B8A\u5316
      - \`\`\`fixed\`\`\` \u5BB9\u5668\u62C9\u6EFE\u52D5\u689D\u4E0D\u52D5,\u8996\u7A97\u62C9\u6EFE\u52D5\u689D\u4E0D\u52D5
      - \`\`\`scroll\`\`\` \u5BB9\u5668\u62C9\u6EFE\u52D5\u689D\u4E0D\u52D5,\u8996\u7A97\u62C9\u6EFE\u52D5\u689D\u52D5
      - \`\`\`local\`\`\` \u5BB9\u5668\u62C9\u6EFE\u52D5\u689D\u52D5,\u8996\u7A97\u62C9\u6EFE\u52D5\u689D\u52D5
- \`\`\`background-clip\`\`\`
  - \u4F7F\u7528\u8AAA\u660E
    - \`\`\` background-clip: \u5C6C\u6027;\`\`\`
    - \u5C6C\u6027\u6709\u4E09\u7A2E
      - \`\`\`border-box\`\`\` \u80CC\u666F\u88AB\u526A\u88C1\u5230\u908A\u6846\u76D2
      - \`\`\`padding-box\`\`\` \u80CC\u666F\u88AB\u526A\u88C1\u5230\u5167\u908A\u8DDD\u6846
      - \`\`\`content-box\`\`\` \u80CC\u666F\u88AB\u526A\u88C1\u5230\u5167\u5BB9\u6846
- \`\`\`background-origin\`\`\`
  - \u4F7F\u7528\u8AAA\u660E
    - \`\`\` background-origin: \u5C6C\u6027;\`\`\`
    - \u5C6C\u6027\u6709\u4E09\u7A2E
      - \`\`\`border-box\`\`\` \u80CC\u666F\u5716\u7247\u4EE5border\u5340\u57DF\u70BA\u53C3\u8003
      - \`\`\`padding-box\`\`\` \u80CC\u666F\u5716\u7247\u4EE5padding\u5340\u57DF\u70BA\u53C3\u8003
      - \`\`\`content-box\`\`\` \u80CC\u666F\u5716\u7247\u4EE5content\u5340\u57DF\u70BA\u53C3\u8003
- \`\`\`background-position\`\`\`
  - \u4F7F\u7528\u8AAA\u660E
    - \`\`\` background-position: \u4F4D\u7F6E;\`\`\`
  - \u7BC4\u4F8B
  \`\`\`css
  /* \u5E38\u7528\u5C6C\u6027 */
  background-position: top;
  background-position: bottom;
  background-position: left;
  background-position: right;
  background-position: center;

  /* \u5F9E\u4E0B\u5F80\u4E0A50px \u5F9E\u53F3\u5230\u5DE6100px */
  background-position: bottom 50px right 100px;

  /* \u4EE5\u5DE6\u4E0A\u89D2\u70BA\u57FA\u6E96 x y */
  background-position: 25% 75%;
  background-position: 0 0;
  background-position: 1cm 2cm;
  background-position: 10ch 8em;
  \`\`\`
- \`\`\`background-repeat\`\`\`
  - [\u8A73\u7D30\u8ACB\u770B MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/background-repeat)
  - \u4F7F\u7528\u8AAA\u660E
    - \`\`\` background-repeat: \u5C6C\u6027;\`\`\`
  - \u7BC4\u4F8B
  \`\`\`css
  /* \u6A6B\u5411\u91CD\u8907 */
  background-repeat: repeat-x;
  /* \u5782\u76F4\u91CD\u8907 */
  background-repeat: repeat-y;
  /* \u9ED8\u8A8D */
  background-repeat: repeat;
  /* \u4E0D\u91CD\u8907 */
  background-repeat: no-repeat;

  /* \u6C34\u5E73horizontal \u5782\u76F4vertical */
  background-repeat: no-repeat repeat;
  \`\`\`
- \`\`\`background-size\`\`\`
  - [\u8A73\u7D30\u8ACB\u770B MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/background-size)
  - \u4F7F\u7528\u8AAA\u660E
    - \`\`\` background-size: \u5C6C\u6027;\`\`\`
  - \u7BC4\u4F8B
  \`\`\`css
  /* \u4EE3\u8868\u5BEC300px \u9AD8\u96A8\u610F\u64F4\u5C55 */
  background-size: 300px auto;
  /* \u4EE3\u8868\u76D2\u5B50\u5BEC25% \u9AD825% */
  background-size: 25% 25%;
  /* 
    \u7528\u4E00\u5F35\u5716\u7247\u5145\u6EFF\u76D2\u5B50(\u4E0D\u5EF6\u5C55)
    \u4F46\u82E5\u52A0\u5165no-repeat\u5247\u4E0D\u5145\u6EFF
  */
  background-size: contain;
  background-repeat: no-repeat;
  /* \u7528\u4E00\u5F35\u5716\u7247\u5145\u6EFF\u76D2\u5B50(\u5EF6\u5C55) */ 
  background-size: cover;
  background-repeat: no-repeat;
  \`\`\`
- \`\`\`background \u7D9C\u5408\u7C21\u5BEB\`\`\`
  - [\u8A73\u7D30\u8ACB\u770B MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/background)
  - \u4F7F\u7528\u8AAA\u660E
  \`\`\`css
  /* \u88E1\u9762\u53EF\u4EE5+-\u5C6C\u6027,\u5F8C\u9762\u5169\u500B\u5C6C\u6027\u70BA background-position */
  background: yellow url(images/image.png) no-repeat center center;
  \`\`\`
- \`\`\`CSS\u7CBE\u9748\`\`\`
  - \u4F7F\u7528\u8AAA\u660E
  \`\`\`css
  /* 
    \u7528\u4E00\u5F35\u5927\u5716\u7247\u88E1\u9762\u6709\u591A\u5F35icon
    \u5229\u7528 background-position \u53BB\u53D6\u5F97\u88E1\u9762\u5176\u4E2D\u4E00\u5F35icon
    \u91CD\u9EDE: \u53F3\u4E0B\u89D2\u70BA(0,0) \u5230\u9054\u8981\u526A\u88C1\u5716\u793A\u5DE6\u4E0A\u89D2\u518D\u7528\u5BEC\u9AD8\u53BB\u526A\u88C1\u5716\u7247
  */
  width: 34px;
  height: 32px;
  background-image: url(images/image.png);
  background-position: -66px -488px;
  \`\`\`

<hr id="user-content-transform" style="height: 4px;">

#### <a href="#user-content-top">2D&3D\u8F49\u63DB</a>
#### <a href="#user-content-top">\u4F4D\u79FB</a>
- \u8207\u76F8\u5C0D\u5B9A\u4F4D\u76F8\u540C,\u6703\u4FDD\u7559\u5BE6\u969B\u4F4D\u7F6E\u4E26\u6E32\u67D3\u4F4D\u79FB\u5F8C\u7684\u4F4D\u7F6E
- \u53EF\u4EE5\u62C6\u5206 \`\`\`translateX\`\`\` \`\`\`translateY\`\`\` \`\`\`translateZ\`\`\`
\`\`\`css
transform: translate(400px, 100px);
/* \u4EE5\u4E0B\u4E09\u500B\u7B49\u50F9 */
transform: translate(400px);
transform: translate(400px, 0px);
transform: translateX(400px);
/* \u4E5F\u53EF\u4EE5\u7528 % */
transform: translate(-50%, -50%);
\`\`\`
<hr id="user-content-skew" style="height: 2px;">

#### <a href="#user-content-top">\u6B6A\u659C</a>
\`\`\`css
/* x:\u6A6B\u5411\u626D\u66F2 y:\u7E31\u5411\u626D\u66F2 */
transform: skew(10deg, 20deg);
/* 
  \u7576\u53EA\u6709\u4E00\u500B\u53C3\u6578\u7684\u6642\u5019\uFF0C\u7B2C\u4E8C\u500B\u53C3\u6578\u9ED8\u8A8D\u70BA0deg\uFF0C
  \u4E0B\u9762\u70BA\u5143\u7D20\u7684\u6C34\u5E73\u65B9\u5411\u9006\u6642\u91DD\u50BE\u659C45\u5EA6\uFF0C\u8C4E\u76F4\u65B9\u5411\u50BE\u659C0\u5EA6
*/
transform: skew(45deg);
\`\`\`

<hr id="user-content-rotate" style="height: 2px;">

#### <a href="#user-content-top">\u65CB\u8F49</a>
\`\`\`css
/* \u6B63:\u9806\u6642\u91DD \u8CA0:\u9006\u6642\u91DD */
transform: rotate(30deg);
/* \u4EE5\u76D2\u5B50\u5DE6\u4E0A\u89D2\u4E3A\u4E2D\u5FC3\u70B9\u8FDB\u884C\u65CB\u8F6C(\u53EF\u7528%\u6578\u66FF\u63DB:50% 50%\u70BA\u4E2D\u5FC3) */
transform-origin: 0 0;
transform: rotate(30deg);
\`\`\`

<hr id="user-content-scale" style="height: 2px;">

#### <a href="#user-content-top">\u7E2E\u653E</a>
\`\`\`css
/* \u6574\u9AD4\u7E2E\u5C0F 0.66 \u500D */
transform: scale(.66);
/* 
  \u82E5\u8981\u5C07 width: 1000px; height: 500px; \u7684\u5143\u7D20
  \u7E2E\u653E\u70BA width: 300px; height: 100px;
  \u5247 transform: scale(sx, sy)\uFF0C
  sx \u8868\u793A\u5BBD\u5EA6\u7F29\u653E\u70BA\u539F\u5143\u7D20\u7684 sx \u500D\uFF0Csy \u8868\u793A\u9AD8\u5EA6\u7F29\u653E\u70BA\u539F\u5143\u7D20\u7684 sy \u500D\u3002
  \u6240\u4EE5\u7F29\u653E\u70BA transform: scale(300/1000, 100/500)\uFF0C
  \u5373 transform: scale(.3, .2)
*/
\`\`\`

<hr id="user-content-3d-translate" style="height: 2px;">

#### <a href="#user-content-top">3D\u7A7A\u9593\u79FB\u52D5</a>
\`\`\`html
<head>
  <style>
    p {
      width: 200px;
      height: 200px;
      border: 1px solid #000;
      background-color: orange;
    }

    .box1 {
      width: 202px;
      height: 202px;
      border: 1px solid #000;
      margin: 50px auto;
      /* \u82E5\u5B50\u6A19\u7C64(\u6F14\u54E1)\u8981\u986F\u793A3d\u6548\u679C\u5247\u7236\u6A19\u7C64(\u821E\u53F0)\u5FC5\u9808\u589E\u52A0 perspective(\u8996\u89D2\u9060\u8FD1) */
      perspective: 300px;
    }

    /* \u60F3\u50CF\u9762\u5C0D\u87A2\u5E55\u70BAx\u8EF8,\u65C1\u908A\u64F4\u5C55\u70BAy\u8EF8*/
    .box1 p {
      /* \u8981\u6CE8\u610F\u75763d\u8B8A\u578B\u5F8C,\u79FB\u52D5\u7684x,y,z\u8EF8\u4E5F\u6703\u8DDF\u8457\u50BE\u659C */
      /* x\u8EF8\u9806\u6642\u9418\u8F4930\u5EA6 */
      transform: rotateX(30deg) translateX(100px) translateY(100px) translateZ(100px);
    }
    /* \u4E0D\u63D0transform: rotateZ(); \u56E0\u70BA\u53EA\u662F\u5E73\u9762\u65CB\u8F49 */
  </style>
</head>

<body>
  <div class="box1">
    <p></p>
  </div>
</body>
\`\`\`

<hr id="user-content-transition" style="height: 4px;">

### \u904E\u6E21\u8207\u52D5\u756B
#### <a href="#user-content-top">\u904E\u6E21</a>
- \u6240\u6709\u6578\u503C\u985E\u578B\u7684\u5C6C\u6027\u90FD\u53EF\u4F7F\u7528\u904E\u6E21
- \u80CC\u666F\u984F\u8272\u8207\u6587\u5B57\u984F\u8272\u90FD\u53EF\u4F7F\u7528\u904E\u6E21
- \u6240\u6709\u8B8A\u5F62(2d\u82073d)\u90FD\u53EF\u4F7F\u7528\u904E\u6E21
- \u5EFA\u8B70\u4E8B\u9805: \u8ACB\u5148\u8A2D\u5B9A\u521D\u59CB\u72C0\u614B
- \u904E\u6E21\u53EF\u5207\u5206\u56DB\u500B\u5C6C\u6027
  - \`\`\`transition-property\`\`\` \u90A3\u4E9B\u5C6C\u6027\u9700\u8981\u904E\u6E21
  - \`\`\`transition-duration\`\`\` \u52D5\u756B\u6642\u9593
  - \`\`\`transition-timing-function\`\`\` \u52D5\u756B\u8B8A\u5316\u66F2\u7DDA(\u7DE9\u52D5\u6548\u679C)
  - \`\`\`transition-delay\`\`\` \u5EF6\u9072\u6642\u9593
- \u5E38\u7528\u7684\u7DE9\u885D\u5C6C\u6027
  - \`\`\`\u7DDA\u6027\`\`\` transition-timing-function: linear;
  - \`\`\`\u7DE9\u6162\u7684\u958B\u59CB\uFF0C\u4E2D\u9593\u8B8A\u5FEB\uFF0C\u6700\u5F8C\u6162\u6162\u7D50\u675F\`\`\` transition-timing-function: ease;
  - \`\`\`\u5148\u6162\u5F8C\u5FEB\`\`\` transition-timing-function: ease-in;
  - \`\`\`\u5148\u5FEB\u5F8C\u6162\`\`\` transition-timing-function: ease-out;
  - \`\`\`\u7DE9\u6162\u7684\u958B\u59CB\u548C\u7D50\u675F\`\`\` transition-timing-function: ease-in-out;
  - [\u8C9D\u585E\u723E\u66F2\u7DDA](https://cubic-bezier.com) transition-timing-function: cubic-bezier(.29,-0.98,.5,1.76);

- \u5BE6\u969B\u4F7F\u7528
\`\`\`css
/* 
  \u53EF\u4EE5\u53EA\u8A2D\u5B9A\u5169\u500B\u5C6C\u6027:
  1.\u7528\u4F86\u8A2D\u7F6E\u54EA\u500B\u5C6C\u6027\u9700\u8981\u904E\u6E21
  2.\u8A2D\u7F6E\u904E\u6E21\u7684\u6642\u9593 
*/
transition: background 1s;

/* 
  1:\u9700\u8981\u8B8A\u5316\u7684\u5C6C\u6027 
  2:\u52D5\u756B\u6642\u9577(\u5FC5\u9808\u4EE5s(\u79D2)\u70BA\u55AE\u4F4D) 
  3.\u8B8A\u5316\u901F\u5EA6\u66F2\u7DDA 
  4.\u5EF6\u9072\u6642\u9593(\u53EFms) 
*/
transition: width 5s linear 0s;

/* \u904E\u6E21\u52D5\u756B\u7BC4\u4F8B */
.test {
  width: 200px;
  height: 200px;
  background-color: orange;
  margin-bottom: 10px;
  transition: transform 1s linear 0s;
}

.test:hover {
  transform: scale(1.2) rotate(360deg);
}

/* 
  \u82E5\u6709\u591A\u500B\u5C6C\u6027\u4F7F\u7528\u904E\u6E21
  \u5247\u53EF\u7528all\u5C6C\u6027\u4EE3\u66FF(\u82E5\u5C6C\u6027\u53EA\u6709\u4E00\u500B\u5247\u8ACB\u52FF\u4F7F\u7528,\u6709\u6548\u7387\u554F\u984C) */
.test2 {
  /* \u8A2D\u5B9A\u521D\u59CB\u72C0\u614B */
  width: 200px;
  height: 200px;
  background-color: orange;
  border-radius: 0;
  /* \u8A2D\u7F6E\u904E\u6E21 */
  transition: all 1s linear 0s;
}
.test2:hover {
  width: 400px;
  height: 160px;
  background-color: green;
  border-radius: 50%;
}
\`\`\`
- \u7279\u6B8A\u7BC4\u4F8B:\u65CB\u8F49\u7ACB\u9AD4\u6B63\u65B9\u5F62
\`\`\`html
<head>
  <style>
    section {
      width: 200px;
      height: 200px;
      margin: 100px auto;
      perspective: 10000px;
    }

    .box {
      width: 200px;
      height: 200px;
      perspective: 10000px;
      position: relative;
      /* \u8A2D\u7F6E\u8B8A\u5316\u985E\u578B\uFF0C\u4FDD\u7559\u5BB9\u5668\u51853D\u6548\u679C */
      /* \u8A72\u5BB9\u5668\u662F\u821E\u53F0\u4E5F\u662F\u6F14\u54E1\uFF0C\u5BB9\u5668\u651C\u5E36\u88E1\u9762\u7684p\u4E00\u8D77\u8F49 */
      transform-style: preserve-3d;
      transition: all 10s ease 0s;
    }

    section:hover .box {
      transform: rotateX(360deg) rotateY(360deg);
    }

    .box p {
      position: absolute;
      top: 0;
      left: 0;
      width: 200px;
      height: 200px;
    }

    .box p:nth-child(1) {
      background-color: rgba(219, 56, 211, 0.486);
      /* \u524D\u9762 */
      transform: translateZ(100px);
    }

    .box p:nth-child(2) {
      background-color: rgba(42, 128, 199, 0.486);
      /* \u9876\u90E8\u9762 */
      transform: rotateX(90deg) translateZ(100px);
    }

    .box p:nth-child(3) {
      background-color: rgba(56, 219, 83, 0.486);
      /* \u80CC\u9762 */
      transform: rotateX(180deg) translateZ(100px);
    }

    .box p:nth-child(4) {
      background-color: rgba(213, 216, 32, 0.486);
      /* \u5E95\u90E8\u9762 */
      transform: rotateX(-90deg) translateZ(100px);
    }

    .box p:nth-child(5) {
      background-color: rgba(236, 82, 102, 0.486);
      /* \u4FA7\u9762 */
      transform: rotateY(90deg) translateZ(100px);
    }

    .box p:nth-child(6) {
      background-color: rgba(119, 17, 236, 0.486);
      /* \u4FA7\u9762 */
      transform: rotateY(-90deg) translateZ(100px);
    }
  </style>
</head>

<body>
  <section>
    <div class="box">
      <p></p>
      <p></p>
      <p></p>
      <p></p>
      <p></p>
      <p></p>
    </div>
  </section>
</body>
\`\`\`

<hr id="user-content-animation" style="height: 2px;">

#### <a href="#user-content-top">\u52D5\u756B</a>
- \u4F7F\u7528\u65B9\u5F0F
  - \`\`\`animation: \u52D5\u756B\u540D\u7A31 \u6301\u7E8C\u5E7E\u79D2 \u7DE9\u885D\u6548\u679C \u5EF6\u9072\u5E7E\u79D2 \u591A\u5C11\u6B21(infinite: \u7121\u6578\u6B21);\`\`\`
- \u53EF\u7D30\u5206\u591A\u500B\u5B50\u5C6C\u6027
  - \`\`\`animation-delay\`\`\` \u5B9A\u7FA9\u5143\u7D20\u8B80\u53D6\u5B8C\u7562\u5230\u52D5\u756B\u958B\u59CB\u7684\u9593\u9694\u6642\u9593\u3002
  - \`\`\`animation-direction\`\`\` \u5B9A\u7FA9\u662F\u5426\u52D5\u756B\u64AD\u653E\u5B8C\u7562\u5F8C\u5C07\u6703\u53CD\u5411\u64AD\u653E\u3002
  - \`\`\`animation-duration\`\`\` \u5B9A\u7FA9\u52D5\u756B\u5B8C\u6210\u4E00\u6B21\u9031\u671F\u7684\u6642\u9593\u3002
  - \`\`\`animation-iteration-count\`\`\` \u5B9A\u7FA9\u52D5\u756B\u91CD\u8907\u7684\u6B21\u6578\u3002\u53EF\u7528 infinite \u4F86\u8B93\u52D5\u756B\u6C38\u9060\u91CD\u8907\u64AD\u653E\u3002
  - \`\`\`animation-name\`\`\`  @keyframes \u7684\u540D\u5B57\u3002
  - \`\`\`animation-play-state\`\`\` \u63A7\u5236\u52D5\u756B\u7684\u64AD\u653E\u72C0\u614B\u3002\u6709 \`\`\`pause\`\`\` \`\`\`running\`\`\` \u5169\u7A2E\u503C\uFF0C\u5F8C\u8005\u70BA\u9810\u8A2D\u503C\u3002
  - \`\`\`animation-timing-function\`\`\` \u5B9A\u7FA9\u52D5\u756B\u8F49\u8B8A\u6642\u6642\u9593\u7684\u52A0\u901F\u66F2\u7DDA (\u4F8B\u5982 linear)\u3002
  - \`\`\`animation-fill-mode\`\`\` \u5B9A\u7FA9\u5143\u7D20\u5728\u52D5\u756B\u64AD\u653E\u5916(\u52D5\u756B\u958B\u59CB\u524D\u53CA\u7D50\u675F\u5F8C)\u7684\u72C0\u614B\u3002
- \u7BC4\u4F8B
\`\`\`css
/* \u7121\u9650\u6B21\u57F7\u884C */
animation: r 1s linear 0s infinite;
/* alternate: \u5076\u6578\u6B21\u81EA\u52D5\u9006\u5411\u57F7\u884C */
animation: r 2s linear 0s infinite alternate;
/* forwards: \u505C\u6B62\u5728\u6700\u5F8C\u7D50\u675F\u72C0\u614B */
animation: r 1s linear 0s forwards;

@keyframes r {
  from {
      transform: rotate(0);
  }

  to {
      transform: rotate(360deg);
  }
}

/* \u53EF\u4EE5\u5229\u7528\u767E\u5206\u6BD4\u5206\u968E\u6BB5\u4F86\u505A\u52D5\u756B */
@keyframes changeColor {
  0% {
    background-color: red;
  }
  20% {
    background-color: yellow;
  }
  40% {
    background-color: blue;
  }
  60% {
    background-color: green;
  }
  80% {
    background-color: purple;
  }
  100% {
    background-color: orange;
  }
}
\`\`\`

<hr id="user-content-flex-introduce" style="height: 4px;">

### Flex \u5E03\u5C40
#### <a href="#user-content-top">\u57FA\u672C\u6982\u5FF5\u8207\u4ECB\u7D39</a>
- \u4ECB\u7D39\uFF1A\`\`\`flex\`\`\` \u662F \`\`\`Flexible Box\`\`\` \u7E2E\u5BEB\uFF0C\u4EE3\u8868\u9748\u6D3B\u6216\u5F48\u6027\u7684\u76D2\u5B50\uFF0C\u6240\u4EE5\u4E5F\u7A31\u505A"\u5F48\u6027\u5E03\u5C40"
- \`\`\`flex\`\`\` \u5BB9\u5668\u5B9A\u7FA9\uFF1A\u63A1\u7528 \`\`\`flex\`\`\` \u5E03\u5C40\u7684\u5143\u7D20
- \`\`\`flex\`\`\` \u9805\u76EE\u5B9A\u7FA9\uFF1A\`\`\`flex\`\`\` \u5BB9\u5668\u7684\u6240\u6709\u5B50\u5143\u7D20
- \u82E5\u9700\u8981\u4F7F\u7528 \`\`\`flex\`\`\` \u7A0B\u5F0F\u78BC\u8ACB\u642D\u914D\u4EE5\u4E0B \`\`\`css\`\`\` \u88DD\u98FE
  \`\`\`css
  .box {
    background-color: white;
    margin: 0 0 55px;
  }
  .box-item {
    width: 200px;
    height: 200px;
    line-height: 200px;
    vertical-align: middle;
    margin: 5px;
    background-color: #ffd200;
    font-size: 100px;
    color: white;
    text-align: center;
  }
  \`\`\`

<hr id="user-content-flex-display" style="height: 2px;">

#### <a href="#user-content-top">display \u5C6C\u6027</a>
- \u5728 \`\`\`flex\`\`\` \u5E03\u5C40\u4E2D\u53EF\u4EE5\u4F7F\u7528 \`\`\`display\`\`\` \u5C6C\u6027\u4F7F\u5143\u7D20\u505A\u5F48\u6027\u986F\u793A
- \`\`\`display\`\`\` \u76EE\u524D\u6709\u4EE5\u4E0B\u986F\u793A\u65B9\u5F0F\uFF1A
  - \`\`\`flex\`\`\`\uFF1A\u5C07\u5C0D\u8C61\u4F5C\u70BA\u5F48\u6027\u76D2\u5B50\u986F\u793A\uFF0C\u5BEC\u5EA6\u81EA\u52D5\u70BA \`\`\`100%\`\`\`\uFF0C\u5982\uFF1A
    <div class="flex_layout">
      <div class="box">
        <div class="box-item">1</div>
        <div class="box-item">2</div>
        <div class="box-item">3</div>
        <div class="box-item">4</div>
      </div>
    </div>
    
    \`\`\`html
    <style>
      .box {
        display: flex;
        /*width: 100%;*/
      }
    </style>
    <body>
      <div class="box">
        <div class="box-item">1</div>
        <div class="box-item">2</div>
        <div class="box-item">3</div>
        <div class="box-item">4</div>
      </div>
    </body>
    \`\`\`
  - \`\`\`inline-flex\`\`\`\uFF1A\u5C07\u5C0D\u8C61\u4F5C\u70BA\u5167\u806F\u584A(\`\`\`inline-block\`\`\`)\u5F48\u6027\u76D2\u5B50\u986F\u793A
    <div class="flex_layout" style="display: inline-flex;">
      <div class="box">
        <div class="box-item">1</div>
        <div class="box-item">2</div>
        <div class="box-item">3</div>
        <div class="box-item">4</div>
      </div>
    </div>

    \`\`\`html
    <style>
      .box {
        /* \u82E5\u8A2D\u7F6E width \u6703\u5931\u6548\u8B8A\u70BA flex */
        display: inline-flex;
      }
    </style>
    <body>
      <div class="box">
        <div class="box-item">1</div>
        <div class="box-item">2</div>
        <div class="box-item">3</div>
        <div class="box-item">4</div>
      </div>
    </body>
    \`\`\`

<hr id="user-content-flex-flex-direction" style="height: 2px;">

#### <a href="#user-content-top">flex-direction \u5C6C\u6027</a>
- \`\`\`flex-direction\`\`\` \u5C6C\u6027\uFF1A\u6C7A\u5B9A\u9805\u76EE\u6392\u5217(\u4E3B\u8EF8)\u7684\u65B9\u5411
- \u6709\u56DB\u500B\u9078\u9805\uFF1A\`\`\`row\`\`\`\u3001\`\`\`row-reverse\`\`\`\u3001\`\`\`column\`\`\`\u3001\`\`\`column-reverse\`\`\`
- \u4EE5\u4E0B\u5206\u5225\u4F86\u4ECB\u7D39\uFF1A
  - \`\`\`row\`\`\` (\u9ED8\u8A8D\u503C)\uFF1A\u6C34\u5E73\u65B9\u5411\u3001\u8D77\u9EDE\u5728\u5DE6\u7AEF\u3001\u9805\u76EE\u5F80\u53F3\u6392\u5217
    <div class="flex_layout" >
      <div class="box" style="flex-direction: row;">
        <div class="box-item">1</div>
        <div class="box-item">2</div>
        <div class="box-item">3</div>
        <div class="box-item">4</div>
      </div>
    </div>

    \`\`\`html
    <style>
      .box {
        display: flex;
        flex-direction: row;
      }
    </style>
    <body>
      <div class="box">
        <div class="box-item">1</div>
        <div class="box-item">2</div>
        <div class="box-item">3</div>
        <div class="box-item">4</div>
      </div>
    </body>
    \`\`\`
  - \`\`\`row-reverse\`\`\`\uFF1A\u6C34\u5E73\u65B9\u5411\u3001\u8D77\u9EDE\u5728\u53F3\u7AEF\u3001\u9805\u76EE\u5F80\u5DE6\u6392\u5217
    <div class="flex_layout">
      <div class="box" style="flex-direction: row-reverse;">
        <div class="box-item">1</div>
        <div class="box-item">2</div>
        <div class="box-item">3</div>
        <div class="box-item">4</div>
      </div>
    </div>

    \`\`\`html
    <style>
      .box {
        display: flex;
        flex-direction: row-reverse;
      }
    </style>
    <body>
      <div class="box">
        <div class="box-item">1</div>
        <div class="box-item">2</div>
        <div class="box-item">3</div>
        <div class="box-item">4</div>
      </div>
    </body>
    \`\`\`
  - \`\`\`column\`\`\`\uFF1A\u5782\u76F4\u65B9\u5411\u3001\u8D77\u9EDE\u5728\u9802\u7AEF\u3001\u9805\u76EE\u5F80\u4E0B\u6392\u5217(1234\u3001\u9810\u8A2D\u9760\u5DE6)
    <div class="flex_layout">
      <div class="box" style="flex-direction: column">
        <div class="box-item">1</div>
        <div class="box-item">2</div>
        <div class="box-item">3</div>
        <div class="box-item">4</div>
      </div>
    </div>

    \`\`\`html
    <style>
      .box {
        display: flex;
        flex-direction: column;
      }
    </style>
    <body>
      <div class="box">
        <div class="box-item">1</div>
        <div class="box-item">2</div>
        <div class="box-item">3</div>
        <div class="box-item">4</div>
      </div>
    </body>
    \`\`\`
  - \`\`\`column-reverse\`\`\`\uFF1A\u5782\u76F4\u65B9\u5411\u3001\u8D77\u9EDE\u5728\u9802\u7AEF\u3001\u9805\u76EE\u5F80\u4E0B\u6392\u5217
    <div class="flex_layout">
      <div class="box" style="flex-direction: column-reverse">
        <div class="box-item">1</div>
        <div class="box-item">2</div>
        <div class="box-item">3</div>
        <div class="box-item">4</div>
      </div>
    </div>

    \`\`\`html
    <style>
      .box {
        display: flex;
        flex-direction: column-reverse;
      }
    </style>
    <body>
      <div class="box">
        <div class="box-item">1</div>
        <div class="box-item">2</div>
        <div class="box-item">3</div>
        <div class="box-item">4</div>
      </div>
    </body>
    \`\`\`

<hr id="user-content-flex-flex-wrap" style="height: 2px;">

#### <a href="#user-content-top">flex-wrap \u5C6C\u6027</a>
- \`\`\`flex-wrap\`\`\` \u5C6C\u6027\uFF1A\u82E5\u6700\u5927\u5BEC\u5EA6\u6392\u4E0D\u4E0B\u8A72\u5982\u4F55\u63DB\u884C
- \u6709\u4E09\u500B\u9078\u9805\uFF1A\`\`\`nowrap\`\`\`\u3001\`\`\`wrap\`\`\`\u3001\`\`\`wrap-reverse\`\`\`
- \u4EE5\u4E0B\u5206\u5225\u4F86\u4ECB\u7D39(\u4E3B\u8EF8\u4EE5\u6C34\u5E73\u65B9\u5411\u505A\u7BC4\u4F8B)\uFF1A
  - \`\`\`nowrap\`\`\` (\u9ED8\u8A8D\u503C)\uFF1A\u4E0D\u63DB\u884C\uFF0C\u82E5\u6709\u591A\u500B\u9805\u76EE\uFF0C\u5247\u6703\u5C07\u6BCF\u9805\u5BEC\u5EA6\u5E73\u5747\u7E2E\u6E1B
    <div class="flex_layout">
      <div class="box" style="flex-direction: row;flex-wrap: nowrap;">
        <div class="box-item">1</div>
        <div class="box-item">2</div>
        <div class="box-item">3</div>
        <div class="box-item">4</div>
        <div class="box-item">5</div>
        <div class="box-item">6</div>
        <div class="box-item">7</div>
      </div>
    </div>

    \`\`\`html
    <style>
      .box {
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
      }
    </style>
    <body>
      <div class="box">
        <div class="box-item">1</div>
        <div class="box-item">2</div>
        <div class="box-item">3</div>
        <div class="box-item">4</div>
      </div>
    </body>
    \`\`\`
  - \`\`\`wrap\`\`\`\uFF1A\u82E5\u9805\u76EE\u4E00\u884C\u4E0D\u5920\u653E\u5247\u63DB\u884C\uFF0C\u7B2C\u4E00\u884C\u5728\u4E0A\u65B9\uFF0C\u5F9E\u4E0A\u5F80\u4E0B\u653E
    <div class="flex_layout">
      <div class="box" style="flex-direction: row;flex-wrap: wrap;">
        <div class="box-item">1</div>
        <div class="box-item">2</div>
        <div class="box-item">3</div>
        <div class="box-item">4</div>
        <div class="box-item">5</div>
        <div class="box-item">6</div>
        <div class="box-item">7</div>
        <div class="box-item">8</div>
        <div class="box-item">9</div>
      </div>
    </div>

    \`\`\`html
    <style>
      .box {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
      }
    </style>
    <body>
      <div class="box">
        <div class="box-item">1</div>
        <div class="box-item">2</div>
        <div class="box-item">3</div>
        <div class="box-item">4</div>
        <div class="box-item">4</div>
        <div class="box-item">5</div>
        <div class="box-item">6</div>
        <div class="box-item">7</div>
        <div class="box-item">8</div>
        <div class="box-item">9</div>
      </div>
    </body>
    \`\`\`
  - \`\`\`wrap-reverse\`\`\`\uFF1A\u82E5\u9805\u76EE\u4E00\u884C\u4E0D\u5920\u653E\u5247\u63DB\u884C\uFF0C\u7B2C\u4E00\u884C\u5728\u4E0B\u65B9\uFF0C\u5F9E\u4E0B\u5F80\u4E0A\u653E
    <div class="flex_layout">
      <div class="box" style="flex-direction: row;flex-wrap: wrap-reverse;">
        <div class="box-item">1</div>
        <div class="box-item">2</div>
        <div class="box-item">3</div>
        <div class="box-item">4</div>
        <div class="box-item">5</div>
        <div class="box-item">6</div>
        <div class="box-item">7</div>
        <div class="box-item">8</div>
        <div class="box-item">9</div>
      </div>
    </div>

    \`\`\`html
    <style>
      .box {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap-reverse;
      }
    </style>
    <body>
      <div class="box">
        <div class="box-item">1</div>
        <div class="box-item">2</div>
        <div class="box-item">3</div>
        <div class="box-item">4</div>
        <div class="box-item">5</div>
        <div class="box-item">6</div>
        <div class="box-item">7</div>
        <div class="box-item">8</div>
        <div class="box-item">9</div>
      </div>
    </body>
    \`\`\`

<hr id="user-content-flex-flex-flow" style="height: 2px;">

#### <a href="#user-content-top">flex-flow \u5C6C\u6027</a>
- \`\`\`flex-flow\`\`\` \u5C6C\u6027\u70BA \`\`\`flex-direction\`\`\` \u8207 \`\`\`flex-wrap\`\`\` \u7684\u7C21\u5BEB\u5F62\u5F0F\uFF0C\u9ED8\u8A8D\u503C\u70BA \`\`\`row nowrap\`\`\`
- \u7BC4\u4F8B
  \`\`\`css
  .box {
    flex-flow: row nowrap;
    flex-flow: row wrap;
    flex-flow: row wrap-reverse;
  }
  \`\`\`

<hr id="user-content-flex-justify-content" style="height: 2px;">

#### <a href="#user-content-top">justify-content \u5C6C\u6027</a>
- \`\`\`justify-content\`\`\` \u5C6C\u6027\uFF1A\u5BB9\u5668\u4E2D\u9805\u76EE\u5728\u4E3B\u8EF8\u4E0A\u7684\u5C0D\u9F4A\u65B9\u5F0F
- \u6709\u4E94\u500B\u9078\u9805\uFF1A\`\`\`flex-start\`\`\`\u3001\`\`\`flex-end\`\`\`\u3001\`\`\`center\`\`\`\u3001\`\`\`space-between\`\`\`\u3001\`\`\`space-around\`\`\`
- \u4EE5\u4E0B\u5206\u5225\u4F86\u4ECB\u7D39(\u4E3B\u8EF8\u4EE5\u6C34\u5E73\u65B9\u5411\u505A\u7BC4\u4F8B)\uFF1A
  - \`\`\`flex-start\`\`\` (\u9ED8\u8A8D\u503C)\uFF1A\u4E3B\u8EF8\u4E0A\u8D77\u9EDE\u5C0D\u9F4A(\u5411\u5DE6\u9760)
    <div class="flex_layout">
      <div class="box" style="flex-direction: row; justify-content: flex-start;">
        <div class="box-item">1</div>
        <div class="box-item">2</div>
        <div class="box-item">3</div>
        <div class="box-item">4</div>
      </div>
    </div>

    \`\`\`html
    <style>
      .box {
        display: flex;
        justify-content: flex-start;
      }
    </style>
    <body>
      <div class="box">
        <div class="box-item">1</div>
        <div class="box-item">2</div>
        <div class="box-item">3</div>
        <div class="box-item">4</div>
      </div>
    </body>
    \`\`\`
  - \`\`\`flex-end\`\`\`\uFF1A\u4E3B\u8EF8\u4E0A\u7D42\u9EDE\u5C0D\u9F4A(\u5411\u53F3\u9760)
    <div class="flex_layout">
      <div class="box" style="flex-direction: row; justify-content: flex-end;">
        <div class="box-item">1</div>
        <div class="box-item">2</div>
        <div class="box-item">3</div>
        <div class="box-item">4</div>
      </div>
    </div>

    \`\`\`html
    <style>
      .box {
        display: flex;
        justify-content: flex-end;
      }
    </style>
    <body>
      <div class="box">
        <div class="box-item">1</div>
        <div class="box-item">2</div>
        <div class="box-item">3</div>
        <div class="box-item">4</div>
      </div>
    </body>
    \`\`\`
  - \`\`\`center\`\`\`\uFF1A\u4E3B\u8EF8\u4E0A\u5C45\u4E2D
    <div class="flex_layout">
      <div class="box" style="flex-direction: row; justify-content: center;">
        <div class="box-item">1</div>
        <div class="box-item">2</div>
        <div class="box-item">3</div>
        <div class="box-item">4</div>
      </div>
    </div>

    \`\`\`html
    <style>
      .box {
        display: flex;
        justify-content: center;
      }
    </style>
    <body>
      <div class="box">
        <div class="box-item">1</div>
        <div class="box-item">2</div>
        <div class="box-item">3</div>
        <div class="box-item">4</div>
      </div>
    </body>
    \`\`\`
  - \`\`\`space-between\`\`\`\uFF1A\u5C07\u6240\u6709\u9805\u76EE\u5E73\u5747\u5206\u6563\u5728\u5BB9\u5668\u7684\u4E3B\u8EF8\u4E0A\uFF0C\u9805\u76EE\u9593\u9593\u9694\u90FD\u76F8\u540C\uFF0C\u8D77\u59CB\u8207\u6700\u7D42"\u4E0D\u542B"\u9593\u9694
    <div class="flex_layout">
      <div class="box" style="flex-direction: row; justify-content: space-between;">
        <div class="box-item">1</div>
        <div class="box-item">2</div>
        <div class="box-item">3</div>
        <div class="box-item">4</div>
      </div>
    </div>

    \`\`\`html
    <style>
      .box {
        display: flex;
        justify-content: space-between;
      }
    </style>
    <body>
      <div class="box">
        <div class="box-item">1</div>
        <div class="box-item">2</div>
        <div class="box-item">3</div>
        <div class="box-item">4</div>
      </div>
    </body>
    \`\`\`
  - \`\`\`space-around\`\`\`\uFF1A\u5C07\u6240\u6709\u9805\u76EE\u5E73\u5747\u5206\u6563\u5728\u5BB9\u5668\u7684\u4E3B\u8EF8\u4E0A\uFF0C\u9805\u76EE\u9593\u9593\u9694\u90FD\u76F8\u540C(\u70BA\u6700\u5DE6/\u53F3\u908A\u9593\u9694\u5169\u500D)\uFF0C\u8D77\u59CB\u8207\u6700\u7D42"\u542B"\u9593\u9694
    <div class="flex_layout">
      <div class="box" style="flex-direction: row; justify-content: space-around;">
        <div class="box-item">1</div>
        <div class="box-item">2</div>
        <div class="box-item">3</div>
        <div class="box-item">4</div>
      </div>
    </div>

    \`\`\`html
    <style>
      .box {
        display: flex;
        justify-content: space-around;
      }
    </style>
    <body>
      <div class="box">
        <div class="box-item">1</div>
        <div class="box-item">2</div>
        <div class="box-item">3</div>
        <div class="box-item">4</div>
      </div>
    </body>
    \`\`\`

<hr id="user-content-flex-align-items" style="height: 2px;">

#### <a href="#user-content-top">align-items \u5C6C\u6027</a>
- \`\`\`align-items\`\`\` \u5C6C\u6027\uFF1A\u5728\u5BB9\u5668\u4E2D\u9805\u76EE\u5728\u4EA4\u53C9\u8EF8\u4E0A\u5982\u4F55\u5C0D\u9F4A
- \u6709\u4E94\u500B\u9078\u9805\uFF1A\`\`\`flex-start\`\`\`\u3001\`\`\`flex-end\`\`\`\u3001\`\`\`center\`\`\`\u3001\`\`\`baseline\`\`\`\u3001\`\`\`stretch\`\`\`
- \u4EE5\u4E0B\u5206\u5225\u4F86\u4ECB\u7D39(\u4EA4\u53C9\u8EF8\u4EE5\u5782\u76F4\u65B9\u5411\u505A\u7BC4\u4F8B)\uFF1A
  - \`\`\`flex-start\`\`\`\uFF1A\u4EE5\u4EA4\u53C9\u8EF8\u8D77\u9EDE\u5C0D\u9F4A(\u9802\u90E8\u5C0D\u9F4A)
    <div class="flex_layout">
      <div class="box" style="flex-direction: row; align-items: flex-start;">
        <div class="box-item">1</div>
        <div class="box-item" style="height: 5vw; line-height: 5vw;">2</div>
        <div class="box-item">3</div>
        <div class="box-item" style="height: 5vw; line-height: 5vw;">4</div>
      </div>
    </div>

    \`\`\`html
    <style>
      .box {
        display: flex;
        align-items: flex-start;
      }
      .item-tall {
        height: 400px;
        line-height: 400px;
      }
    </style>
    <body>
      <div class="box">
        <div class="box-item">1</div>
        <div class="box-item item-tall">2</div>
        <div class="box-item">3</div>
        <div class="box-item item-tall">4</div>
      </div>
    </body>
    \`\`\`
  - \`\`\`flex-end\`\`\`\uFF1A\u4EE5\u4EA4\u53C9\u8EF8\u7D42\u9EDE\u5C0D\u9F4A(\u5E95\u90E8\u5C0D\u9F4A)
    <div class="flex_layout">
      <div class="box" style="flex-direction: row; align-items: flex-end;">
        <div class="box-item">1</div>
        <div class="box-item" style="height: 5vw; line-height:5vw;">2</div>
        <div class="box-item">3</div>
        <div class="box-item" style="height: 5vw; line-height:5vw;">4</div>
      </div>
    </div>

    \`\`\`html
    <style>
      .box {
        display: flex;
        align-items: flex-end;
      }
      .item-tall {
        height: 400px;
        line-height: 400px;
      }
    </style>
    <body>
      <div class="box">
        <div class="box-item">1</div>
        <div class="box-item item-tall">2</div>
        <div class="box-item">3</div>
        <div class="box-item item-tall">4</div>
      </div>
    </body>
    \`\`\`
  - \`\`\`center\`\`\`\uFF1A\u4EE5\u4EA4\u53C9\u8EF8\u4E2D\u9EDE\u5C0D\u9F4A(\u4E2D\u9593\u5C0D\u9F4A\u3001\u9810\u8A2D\u9760\u5DE6)
    <div class="flex_layout">
      <div class="box" style="flex-direction: row; align-items: center;">
        <div class="box-item">1</div>
        <div class="box-item" style="height: 5vw; line-height:5vw;">2</div>
        <div class="box-item">3</div>
        <div class="box-item" style="height: 5vw; line-height:5vw;">4</div>
      </div>
    </div>

    \`\`\`html
    <style>
      .box {
        display: flex;
        align-items: center;
      }
      .item-tall {
        height: 400px;
        line-height: 400px;
      }
    </style>
    <body>
      <div class="box">
        <div class="box-item">1</div>
        <div class="box-item item-tall">2</div>
        <div class="box-item">3</div>
        <div class="box-item item-tall">4</div>
      </div>
    </body>
    \`\`\`
  - \`\`\`baseline\`\`\`\uFF1A\u5BB9\u5668\u5167\u9805\u76EE\u7684\u7B2C\u4E00\u884C\u6587\u5B57\u7684\u57FA\u7DDA\u5C0D\u9F4A(\u9810\u8A2D\u9760\u5DE6)
    <div class="flex_layout">
      <div class="box" style="flex-direction: row; align-items: baseline;">
        <div class="box-item" style="text-decoration:underline;">1</div>
        <div class="box-item" style="height: 5vw; line-height:5vw;text-decoration:underline;">2</div>
        <div class="box-item" style="text-decoration:underline;">3</div>
        <div class="box-item" style="height: 5vw; line-height:5vw;text-decoration:underline;">4</div>
      </div>
    </div>

    \`\`\`html
    <style>
      .box {
        display: flex;
        align-items: baseline;
      }
      .box-item{
        font-size: 88px;
        line-height: initial;
        text-decoration: underline;
      }
      .item-tall {
        font-size: 122px;
        line-height: initial;
      }
    </style>
    <body>
      <div class="box">
        <div class="box-item">1</div>
        <div class="box-item item-tall">2</div>
        <div class="box-item">3</div>
        <div class="box-item item-tall">4</div>
      </div>
    </body>
    \`\`\`
  - \`\`\`stretch\`\`\` (\u9ED8\u8A8D\u503C)\uFF1A\u82E5\u5BB9\u5668\u5167\u9805\u76EE\u672A\u8A2D\u9AD8\u5EA6\u6216 \`\`\`auto\`\`\`\uFF0C\u5247\u81EA\u52D5\u5EF6\u5C55\u81F3\u5BB9\u5668\u7684\u9AD8\u5EA6
    <div class="flex_layout">
      <div class="box" style="flex-direction: row; align-items: stretch; height: 80px;">
        <div class="box-item" style="height: auto;">1</div>
        <div class="box-item" style="height: auto;">2</div>
        <div class="box-item" style="height: auto;">3</div>
        <div class="box-item" style="height: auto;">4</div>
      </div>
    </div>

    \`\`\`html
    <style>
      .box {
        display: flex;
        align-items: stretch;
      }
      .box-item {
        height: auto;
      }
      .item-tall {
        height: 400px;
        line-height: 400px;
      }
    </style>
    <body>
      <div class="box">
        <div class="box-item">1</div>
        <div class="box-item item-tall">2</div>
        <div class="box-item">3</div>
        <div class="box-item item-tall">4</div>
      </div>
    </body>
    \`\`\`

<hr id="user-content-flex-align-content" style="height: 2px;">

#### <a href="#user-content-top">align-content \u5C6C\u6027</a>
- \`\`\`align-content\`\`\` \u5C6C\u6027\uFF1A\u5728\u5BB9\u5668\u4E2D\u9805\u76EE\u6709\u591A\u884C(\u591A\u500B\u4E3B\u8EF8)\u5728\u4EA4\u53C9\u8EF8\u7684\u5C0D\u9F4A\u65B9\u5F0F
  - \u82E5\u53EA\u6709\u4E00\u884C(\u55AE\u4E3B\u8EF8)\uFF0C\u5247\u8A72\u5C6C\u6027\u4E0D\u8D77\u4F5C\u7528
- \u6709\u516D\u500B\u9078\u9805\uFF1A\`\`\`flex-start\`\`\`\u3001\`\`\`flex-end\`\`\`\u3001\`\`\`center\`\`\`\u3001\`\`\`space-between\`\`\`\u3001\`\`\`space-around\`\`\`\u3001\`\`\`stretch\`\`\`
- \u4EE5\u4E0B\u5206\u5225\u4F86\u4ECB\u7D39(\u4EA4\u53C9\u8EF8\u4EE5\u5782\u76F4\u65B9\u5411\u505A\u7BC4\u4F8B)\uFF1A
  - \`\`\`flex-start\`\`\`\uFF1A\u4EE5\u4EA4\u53C9\u8EF8\u7684\u8D77\u9EDE\u5C0D\u9F4A(\u9802\u90E8\u5C0D\u9F4A)
    <div class="flex_layout">
      <div class="box" style="flex-direction: row;flex-wrap: wrap;align-content: flex-start; height: 12vw;">
        <div class="box-item">1</div>
        <div class="box-item">2</div>
        <div class="box-item">3</div>
        <div class="box-item">4</div>
        <div class="box-item">5</div>
        <div class="box-item">6</div>
        <div class="box-item">7</div>
        <div class="box-item">8</div>
        <div class="box-item">9</div>
      </div>
    </div>

    \`\`\`html
    <style>
      .box {
        height: 800px;
        display: flex;
        flex-wrap: wrap;
        align-content: flex-start;
      }
    </style>
    <body>
      <div class="box">
        <div class="box-item">1</div>
        <div class="box-item">2</div>
        <div class="box-item">3</div>
        <div class="box-item">4</div>
        <div class="box-item">5</div>
        <div class="box-item">6</div>
        <div class="box-item">7</div>
        <div class="box-item">8</div>
        <div class="box-item">9</div>
      </div>
    </body>
    \`\`\`
  - \`\`\`flex-end\`\`\`\uFF1A\u4EE5\u4EA4\u53C9\u8EF8\u7684\u7D42\u9EDE\u5C0D\u9F4A(\u5E95\u90E8\u5C0D\u9F4A)
    <div class="flex_layout">
      <div class="box" style="flex-direction: row;flex-wrap: wrap;align-content: flex-end; height: 12vw;">
        <div class="box-item">1</div>
        <div class="box-item">2</div>
        <div class="box-item">3</div>
        <div class="box-item">4</div>
        <div class="box-item">5</div>
        <div class="box-item">6</div>
        <div class="box-item">7</div>
        <div class="box-item">8</div>
        <div class="box-item">9</div>
      </div>
    </div>

    \`\`\`html
    <style>
      .box {
        height: 800px;
        display: flex;
        flex-wrap: wrap;
        align-content: flex-end;
      }
    </style>
    <body>
      <div class="box">
        <div class="box-item">1</div>
        <div class="box-item">2</div>
        <div class="box-item">3</div>
        <div class="box-item">4</div>
        <div class="box-item">5</div>
        <div class="box-item">6</div>
        <div class="box-item">7</div>
        <div class="box-item">8</div>
        <div class="box-item">9</div>
      </div>
    </body>
    \`\`\`
  - \`\`\`center\`\`\`\uFF1A\u4EE5\u4EA4\u53C9\u8EF8\u7684\u4E2D\u9EDE\u5C0D\u9F4A(\u4E2D\u9593\u5C0D\u9F4A\u3001\u9810\u8A2D\u9760\u5DE6)
    <div class="flex_layout">
      <div class="box" style="flex-direction: row;flex-wrap: wrap;align-content: center; height: 12vw;">
        <div class="box-item">1</div>
        <div class="box-item">2</div>
        <div class="box-item">3</div>
        <div class="box-item">4</div>
        <div class="box-item">5</div>
        <div class="box-item">6</div>
        <div class="box-item">7</div>
        <div class="box-item">8</div>
        <div class="box-item">9</div>
      </div>
    </div>

    \`\`\`html
    <style>
      .box {
        height: 800px;
        display: flex;
        flex-wrap: wrap;
        align-content: center;
      }
    </style>
    <body>
      <div class="box">
        <div class="box-item">1</div>
        <div class="box-item">2</div>
        <div class="box-item">3</div>
        <div class="box-item">4</div>
        <div class="box-item">5</div>
        <div class="box-item">6</div>
        <div class="box-item">7</div>
        <div class="box-item">8</div>
        <div class="box-item">9</div>
      </div>
    </body>
    \`\`\`
  - \`\`\`space-between\`\`\`\uFF1A\u5C07\u6240\u6709\u9805\u76EE\u5E73\u5747\u5206\u6563\u5728\u5BB9\u5668\u4EA4\u53C9\u8EF8\u4E0A\uFF0C\u9805\u76EE\u9593\u9593\u9694\u90FD\u76F8\u540C\uFF0C\u8D77\u59CB(\u9802\u90E8)\u8207\u6700\u7D42(\u5E95\u90E8)"\u4E0D\u542B"\u9593\u9694
    <div class="flex_layout">
      <div class="box" style="flex-direction: row;flex-wrap: wrap;align-content: space-between; height: 12vw;">
        <div class="box-item">1</div>
        <div class="box-item">2</div>
        <div class="box-item">3</div>
        <div class="box-item">4</div>
        <div class="box-item">5</div>
        <div class="box-item">6</div>
        <div class="box-item">7</div>
        <div class="box-item">8</div>
        <div class="box-item">9</div>
      </div>
    </div>

    \`\`\`html
    <style>
      .box {
        height: 800px;
        display: flex;
        flex-wrap: wrap;
        align-content: space-between;
      }
    </style>
    <body>
      <div class="box">
        <div class="box-item">1</div>
        <div class="box-item">2</div>
        <div class="box-item">3</div>
        <div class="box-item">4</div>
        <div class="box-item">5</div>
        <div class="box-item">6</div>
        <div class="box-item">7</div>
        <div class="box-item">8</div>
        <div class="box-item">9</div>
      </div>
    </body>
    \`\`\`
  - \`\`\`space-around\`\`\`\uFF1A\u5C07\u6240\u6709\u9805\u76EE\u5E73\u5747\u5206\u6563\u5728\u5BB9\u5668\u4EA4\u53C9\u8EF8\u4E0A\uFF0C\u9805\u76EE\u9593\u9593\u9694\u90FD\u76F8\u540C(\u70BA\u9802/\u5E95\u90E8\u9593\u9694\u5169\u500D)\uFF0C\u8D77\u59CB(\u9802\u90E8)\u8207\u6700\u7D42(\u5E95\u90E8)"\u542B"\u9593\u9694
    <div class="flex_layout">
      <div class="box" style="flex-direction: row;flex-wrap: wrap;align-content: space-around; height: 12vw;">
        <div class="box-item">1</div>
        <div class="box-item">2</div>
        <div class="box-item">3</div>
        <div class="box-item">4</div>
        <div class="box-item">5</div>
        <div class="box-item">6</div>
        <div class="box-item">7</div>
        <div class="box-item">8</div>
        <div class="box-item">9</div>
      </div>
    </div>

    \`\`\`html
    <style>
      .box {
        height: 800px;
        display: flex;
        flex-wrap: wrap;
        align-content: space-around;
      }
    </style>
    <body>
      <div class="box">
        <div class="box-item">1</div>
        <div class="box-item">2</div>
        <div class="box-item">3</div>
        <div class="box-item">4</div>
        <div class="box-item">5</div>
        <div class="box-item">6</div>
        <div class="box-item">7</div>
        <div class="box-item">8</div>
        <div class="box-item">9</div>
      </div>
    </body>
    \`\`\`
  - \`\`\`stretch\`\`\` (\u9ED8\u8A8D\u503C)\uFF1A\u82E5\u5BB9\u5668\u5167\u591A\u884C\u7684\u9805\u76EE\u672A\u8A2D\u9AD8\u5EA6\u6216 \`\`\`auto\`\`\`\uFF0C\u5247\u81EA\u52D5\u5EF6\u5C55\u81F3\u5BB9\u5668\u7684\u9AD8\u5EA6
    <div class="flex_layout">
      <div class="box" style="flex-direction: row;flex-wrap: wrap;align-content: stretch; height: 12vw;">
        <div class="box-item" style="height: auto;">1</div>
        <div class="box-item" style="height: auto;">2</div>
        <div class="box-item" style="height: auto;">3</div>
        <div class="box-item" style="height: auto;">4</div>
        <div class="box-item" style="height: auto;">5</div>
        <div class="box-item" style="height: auto;">6</div>
        <div class="box-item" style="height: auto;">7</div>
        <div class="box-item" style="height: auto;">8</div>
        <div class="box-item" style="height: auto;">9</div>
      </div>
    </div>

    \`\`\`html
    <style>
      .box {
        height: 800px;
        display: flex;
        flex-wrap: wrap;
        align-content: stretch;
      }
      .box-item {
        height: auto;
      }
    </style>
    <body>
      <div class="box">
        <div class="box-item">1</div>
        <div class="box-item">2</div>
        <div class="box-item">3</div>
        <div class="box-item">4</div>
        <div class="box-item">5</div>
        <div class="box-item">6</div>
        <div class="box-item">7</div>
        <div class="box-item">8</div>
        <div class="box-item">9</div>
      </div>
    </body>
    \`\`\`

<hr id="user-content-flex-item-order" style="height: 2px;">

#### <a href="#user-content-top">order \u5C6C\u6027</a>
- \`\`\`order\`\`\` \u5C6C\u6027\uFF1A\u4EE3\u8868\u9805\u76EE\u7684\u6392\u5217\u9806\u5E8F\uFF0C\u6578\u503C(\u6574\u6578)\u8D8A\u5C0F\u6392\u5217\u8D8A\u9760\u524D\uFF0C\u9ED8\u8A8D\u503C\u70BA \`\`\`0\`\`\`
- \u7BC4\u4F8B
  <div class="flex_layout">
    <div class="box">
      <div class="box-item">1</div>
      <div class="box-item">2</div>
      <div class="box-item" style="order: -1;">3</div>
    </div>
  </div>

  \`\`\`html
  <style>
    .box {
      display: flex;
    }
    .order {
        order: -1;
    }
  </style>
  <body>
    <!-- 312 -->
    <div class="box">
      <div class="box-item">1</div>
      <div class="box-item">2</div>
      <div class="box-item order">3</div>
    </div>
  </body>
  \`\`\`

<hr id="user-content-flex-item-flex-grow" style="height: 2px;">

#### <a href="#user-content-top">flex-grow \u5C6C\u6027</a>
- \`\`\`flex-grow\`\`\` \u5C6C\u6027\uFF1A\u4EE3\u8868\u5BB9\u5668\u5167\u9805\u76EE\u653E\u5927\u6BD4\u4F8B\uFF0C\u9ED8\u8A8D\u503C\u70BA \`\`\`0\`\`\`(\u7121\u6548\u679C\uFF0C\u5373\u82E5\u5B58\u5728\u5269\u9918\u7A7A\u9593\u4E5F\u4E0D\u653E\u5927)
  - \u82E5\u6240\u6709\u9805\u76EE\u5C6C\u6027\u503C\u7686\u70BA \`\`\`1\`\`\`\uFF0C\u5247\u9805\u76EE\u5C07\u7B49\u5206\u5269\u9918\u7A7A\u9593
  - \u82E5\u5176\u4E2D\u4E00\u500B\u9805\u76EE\u5C6C\u6027\u503C\u70BA \`\`\`2\`\`\` \uFF0C\u5176\u4ED6\u9805\u76EE\u5C6C\u6027\u7686\u70BA \`\`\`1\`\`\`\uFF0C\u5247\u524D\u8005\u4F54\u64DA\u7684\u5269\u9918\u7A7A\u9593\u6703\u6BD4\u5176\u4ED6\u9805\u76EE\u591A\u4E00\u500D
  - \u82E5\u5176\u4E2D\u4E00\u500B\u9805\u76EE\u70BA\u9ED8\u8A8D\u5C6C\u6027\u503C\u4E26\u4E14\u6709\u5BEC\u5EA6\uFF0C\u5247\u5269\u9918\u5C6C\u6027\u503C\u5927\u65BC \`\`\`0\`\`\` \u7684\u9805\u76EE\u5C07\u7B49\u5206\u5176\u4ED6\u5BB9\u5668\u5BEC\u5EA6
- \u7BC4\u4F8B
  <div class="flex_layout">
    <div class="box">
      <div class="box-item"  style="flex-grow: 1;">1</div>
      <div class="box-item"  style="flex-grow: 1;">2</div>
      <div class="box-item" style="flex-grow: 2;">3</div>
    </div>
  </div>

  \`\`\`html
  <style>
    .box {
      display: flex;
    }
    .box-item {
      flex-grow: 1;
    }
    .grow-2 {
      flex-grow: 2;
    }
  </style>
  <body>
    <!-- \u5340\u584A3 \u6703\u6BD4\u5340\u584A1\u3001\u5340\u584A2\u5EF6\u5C55\u4E00\u500D -->
    <div class="box">
      <div class="box-item">1</div>
      <div class="box-item">2</div>
      <div class="box-item grow-2">3</div>
    </div>
  </body>
  \`\`\`

<hr id="user-content-flex-item-flex-shrink" style="height: 2px;">

#### <a href="#user-content-top">flex-shrink \u5C6C\u6027</a>
- \`\`\`flex-shrink\`\`\` \u5C6C\u6027\uFF1A\u4EE3\u8868\u9805\u76EE\u7684\u7E2E\u5C0F\u6BD4\u4F8B\uFF0C\u9ED8\u8A8D\u503C\u70BA \`\`\`1\`\`\`\uFF0C\u82E5\u5BB9\u5668\u5BEC\u5EA6\u4E0D\u8DB3\uFF0C\u5247\u6703\u5C07\u9805\u76EE\u7E2E\u5C0F
  - \u82E5\u6240\u6709\u9805\u76EE\u7684\u5C6C\u6027\u503C\u7686\u70BA \`\`\`1\`\`\`\uFF0C\u5247\u7B49\u6BD4\u4F8B\u7E2E\u5C0F
  - \u82E5\u5176\u4E2D\u4E00\u500B\u9879\u76EE\u7684\u5C6C\u6027\u503C\u70BA \`\`\`0\`\`\`\uFF0C\u5176\u4ED6\u9805\u76EE\u5C6C\u6027\u503C\u70BA \`\`\`1\`\`\`\uFF0C\u5247\u524D\u8005\u4E0D\u7E2E\u5C0F\uFF0C\u5176\u4ED6\u9805\u76EE\u7B49\u6BD4\u4F8B\u7E2E\u5C0F
  - \u8CA0\u503C\u5C0D\u8A72\u5C6C\u6027\u7121\u6548
- \u7BC4\u4F8B
  <div class="flex_layout" style="width: 150px;">
    <div class="box">
      <div class="box-item" style="flex-shrink: 1;">1</div>
      <div class="box-item" style="flex-shrink: 1;">2</div>
      <div class="box-item" style="flex-shrink: 0;">3</div>
    </div>
  </div>

  \`\`\`html
  <style>
    .box {
      display: flex;
    }
    .box-item {
        flex-shrink: 1;
    }
    .shrink{
      flex-shrink: 0;
    }
  </style>
  <body>
    <!-- \u82E5\u7A7A\u9593\u4E0D\u8DB3\u5247\u5340\u584A3\u4E0D\u6703\u8B8A\uFF0C\u5340\u584A1245\u5C07\u7E2E\u5C0F  -->
    <div class="box">
      <div class="box-item">1</div>
      <div class="box-item">2</div>
      <div class="box-item shrink">3</div>
    </div>
  </body>
  \`\`\`

<hr id="user-content-flex-item-flex-basis" style="height: 2px;">

#### <a href="#user-content-top">flex-basis \u5C6C\u6027</a>
- \`\`\`flex-basis\`\`\` \u5C6C\u6027\uFF1A\u4EE3\u8868\u5728\u5206\u914D\u591A\u9918\u7684\u7A7A\u9593\u6642\uFF0C\u9805\u76EE\u4F54\u64DA\u591A\u5C11\u4E3B\u8EF8\u7A7A\u9593
  - \u700F\u89BD\u5668\u5C07\u6839\u64DA\u6B64\u5C6C\u6027\u8A08\u7B97\u4E3B\u8EF8\u662F\u5426\u6709\u591A\u9918\u7A7A\u9593\uFF0C\u9ED8\u8A8D\u503C\u70BA \`\`\`auto\`\`\`\uFF0C\u5373\u9805\u76EE\u672C\u4F86\u5927\u5C0F
- \u8207 \`\`\`width/height\`\`\` \u7684\u5DEE\u5225\u5728\u65BC\uFF1A
  - \u7576 \`\`\`flex-direction: row\`\`\` \u6642\uFF0C\u8A72\u5C6C\u6027\u6703\u6C7A\u5B9A\u5BEC\u5EA6
  - \u7576 \`\`\`flex-direction: column\`\`\` \u6642\uFF0C\u8A72\u5C6C\u6027\u6703\u6C7A\u5B9A\u9AD8\u5EA6
- \u7BC4\u4F8B
  <div class="flex_layout" style="width: 200px;">
    <div class="box">
      <div class="box-item">1</div>
      <div class="box-item">2</div>
      <div class="box-item" style="flex-basis: 90px;">3</div>
    </div>
  </div>

  \`\`\`html
  <style>
    .box {
      display: flex;
    }
    .box-item {
      flex-basis: 400px;
    }
  </style>
  <body>
    <!-- \u82E5\u7A7A\u9593\u4E0D\u8DB3\u5247\u5340\u584A3\u4E0D\u6703\u8B8A\uFF0C\u5340\u584A12\u5C07\u7E2E\u5C0F  -->
    <div class="box">
      <div class="box-item">1</div>
      <div class="box-item">2</div>
      <div class="box-item">3</div>
    </div>
  </body>
  \`\`\`

<hr id="user-content-flex-item-flex" style="height: 2px;">

#### <a href="#user-content-top">flex \u5C6C\u6027</a>
- \`\`\`flex\`\`\` \u5C6C\u6027\u70BA \`\`\`flex-grow\`\`\`\u3001\`\`\`flex-shrink\`\`\`\u3001\`\`\`flex-basis\`\`\` \u7684\u7C21\u5BEB\uFF0C\u9ED8\u8A8D\u503C\u70BA \`\`\`0 1 auto\`\`\`
  - \u5F8C\u5169\u500B\u5C6C\u6027\u53EF\u9078\u64C7\u4E0D\u5BEB\uFF1A\`\`\`flex: 1;\`\`\` = \`\`\`flex: 1 1 auto;\`\`\` = \`\`\`flex: auto;\`\`\`
- \u8A72\u5C6C\u6027\u6709\u5169\u500B\u5FEB\u6377\u5C6C\u6027\u53EF\u9078\u64C7\uFF1A
  - \`\`\`auto (1 1 auto)\`\`\`
  - \`\`\`none (0 0 auto)\`\`\`

<hr id="user-content-flex-item-align-self" style="height: 2px;">

#### <a href="#user-content-top">align-self \u5C6C\u6027</a>
- \`\`\`align-self\`\`\` \u5C6C\u6027\u5141\u8A31\u55AE\u500B\u9805\u76EE\u8207\u5176\u4ED6\u9805\u76EE\u6709\u4E0D\u4E00\u6A23\u7684\u5C0D\u9F4A\u65B9\u5F0F\uFF0C\u53EF\u8986\u84CB \`\`\`align-items\`\`\` \u5C6C\u6027
- \u9ED8\u8A8D\u503C\u70BA \`\`\`auto\`\`\`\uFF0C\u6703\u7E7C\u627F\u5BB9\u5668\u7684 \`\`\`align-items\`\`\` \u5C6C\u6027\uFF0C\u82E5\u7121\u5247\u5C6C\u6027\u9ED8\u8A8D\u70BA \`\`\`stretch\`\`\`
- \u8207 \`\`\`align-items\`\`\` \u76F8\u540C\u6709\u4E94\u500B\u5C6C\u6027(\u4E0D\u542B \`\`\`auto\`\`\`)\u4E14\u529F\u80FD\u76F8\u540C
  - \`\`\`flex-start\`\`\`\u3001\`\`\`flex-end\`\`\`\u3001\`\`\`center\`\`\`\u3001\`\`\`baseline\`\`\`\u3001\`\`\`stretch\`\`\`

<hr id="user-content-horizontal-center" style="height: 4px;">

### \u5176\u4ED6\u5BE6\u7528\u529F\u80FD
#### <a href="#user-content-top">\u6C34\u5E73\u5C45\u4E2D</a>
- \u8072\u660E\uFF1A\`\`\`.parent\`\`\` \u70BA\u7236\u5143\u7D20\uFF0C\`\`\`.son\`\`\` \u70BA\u5B50\u5143\u7D20
- \u884C\u5167\u5143\u7D20\uFF1A\`\`\`display: inline;\`\`\`
  \`\`\`css
  .parent {
    text-align: center;
  }
  \`\`\`
- \u584A\u7D1A\u5143\u7D20\uFF1A\`\`\`display: inline-block;\`\`\`\u3001\`\`\`display: block;\`\`\`
  - \u57FA\u672C\u5C45\u4E2D
    \`\`\`css
    /* \u5DE6\u53F3\u5916\u908A\u8DDD\u81EA\u52D5\u5C45\u4E2D */
    .son {
      margin: 0 auto;
    }
    \`\`\`
  - \u5B50\u5143\u7D20\u542B\u6D6E\u52D5
    \`\`\`css
    /* \u7236\u5143\u7D20\u6703\u96A8\u8457\u5167\u5BB9\u6539\u8B8A\u5BEC\u5EA6 */
    .parent {
      width: fit-content;
      margin: 0 auto; 
    }
    .son {
      float: right;
    }
    \`\`\`
  - \u4F7F\u7528 \`\`\`flex\`\`\` \u5E03\u5C40
    \`\`\`css
    .parent {
      display: flex;
      /* \u9805\u76EE\u6392\u5217(\u4E3B\u8EF8)\u65BC\u4E2D\u9593 */
      justify-content: center;
    }
    \`\`\`
  - \u4F7F\u7528\u7D55\u5C0D\u5B9A\u4F4D\uFF1A\`\`\`position: absolute;\`\`\`
    - \u7236\u5143\u7D20\u5FC5\u9808\u4E5F\u8A2D\u5B9A \`\`\`position\`\`\` \u5C6C\u6027
    \`\`\`css
    /* 1.transform */
    .son {
      position: absolute;
      left: 50%;
      transform: translate(-50%, 0);
    }

    /* 2.left & width & margin */
    .son {
      position: absolute;
      left: 50%;
      width: \u5BEC\u5EA6;
      margin-left: \u5BEC\u5EA6 * -0.5
    }

    /* 3.left\u3001right\u3001width\u3001margin */
    .son {
      position: absolute;
      /* \u5FC5\u9808\u70BA\u6700\u5DE6\u5230\u6700\u53F3 */
      left: 0;
      right: 0;
      /* \u8A2D\u5B9A width \u5F8C margin \u624D\u6703\u751F\u6548 */
      width: \u5BEC\u5EA6;
      margin: 0 auto;
    }
    \`\`\`

<hr id="user-content-vertical-center" style="height: 2px;">

#### <a href="#user-content-top">\u5782\u76F4\u5C45\u4E2D</a>
- \u8072\u660E\uFF1A\`\`\`.parent\`\`\` \u70BA\u7236\u5143\u7D20\uFF0C\`\`\`.son\`\`\` \u70BA\u5B50\u5143\u7D20
- \u884C\u5167\u5143\u7D20\uFF1A\`\`\`display: inline;\`\`\`
  - \u7236\u5143\u7D20\u70BA\u584A(\u884C\u584A)\u5143\u7D20\uFF0C\u5B50\u5143\u7D20\u70BA\u884C\u5167\u5143\u7D20
  \`\`\`css
  /* \u5169\u8005\u9AD8\u5EA6\u9700\u4E00\u6A23 */
  .parent {
    height: \u9AD8\u5EA6;
  }
  .son {
    line-height: \u9AD8\u5EA6;
  }
  \`\`\`
- \u584A\u7D1A\u5143\u7D20\uFF1A\`\`\`display: inline-block;\`\`\`\u3001\`\`\`display: block;\`\`\`
  - \`\`\`display: table\`\`\`
    - \u512A\u9EDE\uFF1A\u9AD8\u5EA6\u53EF\u52D5\u614B\u6539\u8B8A\uFF0C\u82E5\u7236\u5143\u7D20\u7A7A\u9593\u4E0D\u8DB3\uFF0C\u5167\u5BB9\u4E5F\u4E0D\u6703\u622A\u65B7
    \`\`\`css
    .parent {
      display: table;
    }
    .son {
      display: table-cell;
      vertical-align: middle;
    }
    \`\`\`
  - \u4F7F\u7528 \`\`\`flex\`\`\` \u5E03\u5C40
    \`\`\`css
    .parent {
      display: flex;
      /* \u5C07\u9805\u76EE\u8A2D\u7F6E\u70BA\u4EA4\u53C9\u8EF8\u4E2D\u9593 */
      align-items: center;
    }
    \`\`\`
  - \u4F7F\u7528\u7D55\u5C0D\u5B9A\u4F4D\uFF1A\`\`\`position: absolute;\`\`\`
    - \u7236\u5143\u7D20\u5FC5\u9808\u4E5F\u8A2D\u5B9A \`\`\`position\`\`\` \u5C6C\u6027
    \`\`\`css
    /* 1.transform */
    .son {
      position: absolute;
      top: 50%;
      transform: translate( 0, -50%);
    }

    /* 2.top & height & margin */
    .son {
      position: absolute;
      top: 50%;
      height: \u9AD8\u5EA6;
      margin-top: \u9AD8\u5EA6 * -0.5;
    }

    /* 3.top\u3001bottom\u3001margin */
    .son {
      position: absolute;
      /* \u5FC5\u9808\u70BA\u6700\u9802\u5230\u6700\u5E95 */
      top: 0;
      bottom: 0;
      /* \u8A2D\u5B9A height \u5F8C margin \u624D\u6703\u751F\u6548 */
      height: \u9AD8\u5EA6;
      margin: auto 0;
    }
    \`\`\`

<hr id="user-content-text-ellipsis" style="height: 2px;">

#### <a href="#user-content-top">\u6587\u5B57\u7701\u7565\u865F\uFF1A\`\`\`...\`\`\`</a>
- \u901A\u5E38\u7528\u65BC\u591A\u500B\u724C\u5361\u6392\u5217\u6642\uFF0C\u724C\u5361\u5167\u5BB9\u904E\u9577\u6642\u4F7F\u7528
- \u7BC4\u4F8B
  \`\`\`html
  <style>
    /* \u901A\u5E38\u6703\u642D\u914D\u4EE5\u4E0B\u4E09\u500B\u70BA\u4E00\u9AD4 */
    .text-ellipsis {
      /* \u9700\u96B1\u85CF\u6EA2\u51FA\u5426\u5247\u7167\u5E38\u8F38\u51FA\u5167\u5BB9 */
      overflow: hidden;
      /* \u7576\u6587\u5B57\u6EA2\u51FA\u6642\u52A0\u4E0A\u7701\u7565\u865F... */
      text-overflow: ellipsis;
      /* \u4EE3\u8868\u78B0\u5230\u7A7A\u767D\u5B57\u5143\u4E0D\u63DB\u884C */
      white-space: nowrap;
    }
  </style>
  <body>
    <!-- \u7B2C\u4E00\u6392\u8207\u7B2C\u4E09\u6392\u6703\u56E0\u8D85\u904E\u5BEC\u5EA6\u800C\u52A0\u4E0A\u7701\u7565\u865F -->
    <div class="text-ellipsis" style="width: 100px;">
      test12345test12345test12345<br>
      test12345 <br>
      test12345test12345test12345test12345test12345
    </div>
  </body>
  \`\`\`
`;let o=e(!0),v=e(!1),b=e(!0),p=e(!1);const h=e(""),j={name:"CSSNote",components:{Loading:y},setup(){return _(async()=>{if(o.value){const s=g({html:!0,linkify:!0,typographer:!0,highlight(l,d){return f.highlight(l,{language:d}).value}}).use(k);h.value=s.render(`${M}`),await i(()=>{o.value=!1},1e3).then(()=>i(()=>{b.value=!1,p.value=!0},500)).then(()=>i(()=>{v.value=!0,a()},100))}else a()}),w(),{showLoading:o,showContent:v,displayLoading:b,displayContent:p,htmlContent:h}}},D=["innerHTML"];function N(s,l,d,n,F,E){const m=S("Loading");return t(),r(B,null,[n.displayLoading?(t(),z(m,{key:0,class:c({"content--hide":!n.showLoading,"content--show":n.showLoading})},null,8,["class"])):x("",!0),n.displayContent?(t(),r("div",{key:1,class:c({"markdown-content":!0,"content--hide":!n.showContent,"content--show":n.showContent})},[C("div",{class:"markdown-body",innerHTML:n.htmlContent},null,8,D)],2)):x("",!0)],64)}const A=u(j,[["render",N]]);export{A as default};

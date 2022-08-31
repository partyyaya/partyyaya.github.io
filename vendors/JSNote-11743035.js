import{m as y}from"./markdown-it-75be01fa.js";import{H as b}from"./highlight.js-867ee1b1.js";import{_ as x,L as v,t,s as c,u as j}from"../js/index-3fb62596.js";import{m as w}from"./mdCopy-c8cfacf4.js";import{a as e,o as S,j as P,e as o,f as i,k,l as u,m as d,q as N,F as E}from"./@vue-6bb656f0.js";import"./clipboard-3a281e2a.js";import"./entities-96bc23f9.js";import"./uc.micro-174787a3.js";import"./mdurl-4b1f5cdc.js";import"./linkify-it-59decb82.js";import"./vue-router-ec6d6ff4.js";/* empty css                      */import"./lodash-7e818ff8.js";const I=`## JS \u7B46\u8A18
<a id="user-content-top"></a>

### \u76EE\u9304
<details>
<summary style="cursor: pointer;">&nbsp;\u8A9E\u6CD5\u8207\u8868\u9054\u5F0F </summary>

- [ECMAScript & JS \u95DC\u4FC2](#user-content-ecmascript-js)
- [\u8B8A\u91CF\u8207\u6578\u64DA\u985E\u578B](#user-content-variable-datatype)
  - [\u8B8A\u91CF](#user-content-variable-datatype)
  - [const\u3001let\u3001var](#user-content-const-let)
  - [\u8F38\u51FA\u8A9E\u53E5](#user-content-output-statement)
  - [\u6578\u503C](#user-content-number)
  - [undefined & null](#user-content-undefined-null)
  - [typeof](#user-content-typeof)
  - [\u6578\u64DA\u985E\u578B\u8F49\u63DB](#user-content-datatype-convert)
  - [\u6578\u64DA\u985E\u578B\u8868](#user-content-datatype-table)
- [\u5B57\u4E32](#user-content-string-splicing)
  - [\u5B57\u4E32\u8207\u62FC\u63A5](#user-content-string-splicing)
  - [includes](#user-content-string-includes)
  - [padStart\u3001padEnd](#user-content-string-padstart-padend)
  - [trimStart\u3001trimEnd](#user-content-string-trimstart-trimend)
  - [\u6A21\u677F\u5B57\u7B26\u4E32](#user-content-string-template-literals)
- [\u8868\u9054\u5F0F\u8207\u64CD\u4F5C\u7B26](#user-content-expressions-operators)
  - [\u9673\u8FF0\u5F0F\u8207\u8868\u9054\u5F0F\u5DEE\u7570](#user-content-expressions-operators)
  - [\u904B\u7B97\u7B26](#user-content-operator)
  - [Math\u51FD\u6578](#user-content-math)

</details>
<details>
<summary style="cursor: pointer;">&nbsp;\u6D41\u7A0B\u63A7\u5236\u8207\u6578\u7D44</summary>

- [\u6D41\u7A0B\u63A7\u5236](#user-content-process-control)
  - [\u5224\u65B7\u8A9E\u53E5](#user-content-process-control)
  - [\u5FAA\u74B0\u8A9E\u53E5](#user-content-loop)
- [\u6578\u7D44](#user-content-array)
  - [\u5275\u5EFA\u6578\u7D44](#user-content-array)
  - [\u53D6\u5F97\u8207\u66F4\u6539\u6578\u7D44\u9805](#user-content-modify)
  - [\u6578\u7D44\u53BB\u91CD](#user-content-de-duplication)
  - [\u4E8C\u7DAD\u6578\u7D44](#user-content-two-dimensional)
  - \u5E38\u7528\u65B9\u6CD5
    | \u5206\u985E | \u5E38\u7528\u65B9\u6CD5 |
    | :-- | :-- |
    | \u64CD\u4F5C\u539F\u6578\u7D44 | [push-O(1)\u3001unshift-O(n)\u3001pop-O(1)\u3001shift-O(n)](#user-content-pups)\u3001[splice-O(n)](#user-content-splice)\u3001[reverse-O(n)](#user-content-reverse)\u3001[sort-O(n)](#user-content-sort) |
    | \u53D6\u5F97\u6578\u7D44\u8CC7\u8A0A | [indexOf](#user-content-indexof)\u3001[lastIndexOf](#user-content-lastindexof)\u3001[find\u3001findIndex](#user-content-array-find-findindex)\u3001[filter](#user-content-filter) |
    | \u53D6\u5F97\u65B0\u6578\u7D44\u6216\u65B0\u503C | [join](#user-content-join)\u3001[concat](#user-content-concat)\u3001[slice](#user-content-slice)\u3001[map](#user-content-map)\u3001[reduce\u3001reduceRight](#user-content-reduce-reduceright)\u3001[flat\u3001flatMap](#user-content-flat-flatMap)\u3001[Array.from](#user-content-array-from) |
    | \u5224\u65B7\u56DE\u50B3\u5E03\u6797\u503C | [every](#user-content-array-every)\u3001[some](#user-content-array-some)\u3001[includes](#user-content-array-includes)\u3001[Array.isArray](#user-content-array-isarray) |
</details>
<details>
<summary style="cursor: pointer;">&nbsp;\u51FD\u6578\u3001DOM\u3001BOM</summary>

- [\u51FD\u6578](#user-content-function)
  - [\u4F5C\u7528\u57DF\u8207\u8B8A\u91CF](#user-content-function)
  - [\u51FD\u6578\u512A\u5148\u63D0\u5347](#user-content-function-promotion)
  - [\u51FD\u6578\u7684\u4F7F\u7528](#user-content-function-use)
  - [\u9589\u5305](#user-content-closure)
  - [IIFE](#user-content-iife)
  - [\u7BAD\u982D\u51FD\u6578](#user-content-arrow-function)
- [DOM](#user-content-dom)
  - [\u7C21\u4ECB](#user-content-dom)
  - [onload \u4F7F\u7528](#user-content-onload)
  - [\u5E38\u7528\u8A2A\u554F\u7BC0\u9EDE\u65B9\u6CD5](#user-content-get-element)
  - [nodeType \u5E38\u7528\u5C6C\u6027\u503C](#user-content-node-type)
  - [\u7BC0\u9EDE\u5C6C\u6027](#user-content-node-attributes)
  - [\u7BC0\u9EDE\u64CD\u4F5C](#user-content-node-operate)
  - [\u7BC0\u9EDE\u81EA\u5B9A\u7FA9\u5C6C\u6027](#user-content-node-customize)
  - [\u4E8B\u4EF6\u76E3\u807D](#user-content-event-listener)
    - [\u8868\u55AE](#user-content-event-listener)
    - [\u9801\u9762](#user-content-event-listener-page)
    - [\u9F20\u6A19](#user-content-event-listener-mouse)
    - [\u9375\u76E4](#user-content-event-listener-keybored)
    - [on \u8207 addEventListener](#user-content-event-listener-on-add)
    - [\u4E8B\u4EF6\u59D4\u8A17](#user-content-event-listener-entrust)
  - [\u7570\u6B65\u8A9E\u53E5](#user-content-async-statment)
- [BOM](#user-content-bom)
  - [\u7C21\u4ECB](#user-content-bom)
  - [History \u5C0D\u8C61](#user-content-history)
  - [Location \u5C0D\u8C61](#user-content-location)
  - [Navigator \u5C0D\u8C61](#user-content-navigator)
  - [offsetTop \u5C6C\u6027](#user-content-offsettop)
</details>
<details>
<summary style="cursor: pointer;">&nbsp;\u57FA\u65BC\u5C0D\u8C61\u3001\u6B63\u5247\u8868\u9054\u5F0F</summary>

- [\u57FA\u65BC\u5C0D\u8C61](#user-content-object-based)
  - [\u7C21\u4ECB](#user-content-object-based)
  - [\u95DC\u65BC\u5C0D\u8C61](#user-content-about-object)
  - [\u69CB\u9020\u51FD\u6578\u8207\u5C0D\u8C61](#user-content-constructor-object)
  - [\u539F\u578B\u539F\u578B\u93C8](#user-content-object-prototype)
  - [\u4E0A\u4E0B\u6587\u898F\u5247\u8207\u4F7F\u7528](#user-content-object-context)
  - [call \u8207 apply](#user-content-call-apply)
  - [Object.assign](#user-content-object-assign)
  - [Object.keys\u3001Object.values\u3001Object.entries](#user-content-object-keys-values-entries)
  - [Date \u5C0D\u8C61](#user-content-object-date)
  - [Math \u5C0D\u8C61](#user-content-object-math)
- [\u6B63\u5247\u8868\u9054\u5F0F](#user-content-regexp)
  - [\u5275\u5EFA\u8207\u4F7F\u7528](#user-content-regexp)
  - [\u5143\u5B57\u7B26](#user-content-metacharacter)
  - [\u65B9\u62EC\u865F\u8868\u793A\u6CD5](#user-content-square-brackets)
  - [\u5B57\u4E32\u76F8\u95DC\u65B9\u6CD5](#user-content-string-regexp)
  - [\u91CF\u8A5E](#user-content-measure-word)
</details>
<details>
<summary style="cursor: pointer;">&nbsp;Promise</summary>

- [\u7C21\u4ECB](#user-content-promise-introduce)
- [\u57FA\u672C\u7528\u6CD5](#user-content-promise-basic-use)
- [\u5BE6\u4F8B\u65B9\u6CD5](#user-content-promise-instance-function-then)
- [then](#user-content-promise-instance-function-then)
- [catch](#user-content-promise-instance-function-catch)
- [finally](#user-content-promise-instance-function-finally)
- [\u69CB\u9020\u51FD\u6578\u65B9\u6CD5](#user-content-promise-constructor-function-resolve)
- [Promise.resolve](#user-content-promise-constructor-function-resolve)
- [Promise.reject](#user-content-promise-constructor-function-reject)
- [Promise.all](#user-content-promise-constructor-function-all)
- [Promise.race](#user-content-promise-constructor-function-race)
- [Promise.allSettled](#user-content-promise-constructor-function-allsettled)
- [Promise.any](#user-content-promise-constructor-function-any)
- [\u6CE8\u610F\u4E8B\u9805](#user-content-promise-constructor-function-notice)
- [\u61C9\u7528\u7BC4\u4F8B](#user-content-promise-example)
</details>
<details>
<summary style="cursor: pointer;">&nbsp;Class</summary>

- [\u7C21\u4ECB](#user-content-class)
- [\u5B9A\u7FA9\u5F62\u5F0F](#user-content-class-definition-form)
- [\u5C6C\u6027\u8207\u65B9\u6CD5](#user-content-class-property-function)
- [getter \u8207 setter](#user-content-class-getter-setter)
- [\u79C1\u6709\u5C6C\u6027\u8207\u65B9\u6CD5](#user-content-class-private-property-function)
- [extends](#user-content-class-extends)
- [super](#user-content-class-super)
</details>
<details>
<summary style="cursor: pointer;">&nbsp;\u5176\u4ED6\u7528\u6CD5</summary>

- JS \u672C\u8EAB\u984D\u5916\u7528\u6CD5
  - [\u89E3\u69CB\u8CE6\u503C](#user-content-destructuring-assignment)
  - [\u5C0D\u8C61\u8207\u51FD\u6578\u7684\u63D0\u5347](#user-content-object-function-promote)
  - [\u5269\u9918\u53C3\u6578](#user-content-rest-parameter)
  - [\u5C55\u958B\u904B\u7B97\u7B26](#user-content-spread-operator)
  - [Set \u7269\u4EF6](#user-content-set-object)
  - [Map \u7269\u4EF6](#user-content-map-object)
  - [Iterator \u8207 for-of \u5FAA\u74B0](#user-content-iterator-for-of)
  - [Symbol](#user-content-symbol)
- \u5176\u4ED6\u5E38\u7528\u7528\u6CD5
  - [Throttle \u7BC0\u6D41\u9396](#user-content-function-throttle-lock)
  - [debounce \u53BB\u6296\u52D5](#user-content-function-debounce)
  - [\u5206\u6642\u51FD\u6578](#user-content-separate-time-function)
  - [\u65B7\u9EDE\u8ABF\u8A66 debugger](#user-content-debugger)
</details>

<hr id="user-content-ecmascript-js" style="height: 4px;">

### \u8A9E\u6CD5\u8207\u8868\u9054\u5F0F
#### <a href="#user-content-top" >ECMAScript & JS \u95DC\u4FC2</a>
- ECMAScript: JS \u7684\u6A19\u6E96\u5316\u898F\u7BC4
- JS: ECMAScript \u7684\u5BE6\u73FE

<hr id="user-content-variable-datatype" style="height: 2px;">

#### <a href="#user-content-top" >\u8B8A\u91CF\u8207\u6578\u64DA\u985E\u578B</a>
#### <a href="#user-content-top" >\u8B8A\u91CF</a>
\`\`\`html
<script>
  /*
    \u8B8A\u91CF\u5BA3\u544A\u65B9\u5F0F('myValue'\u53EF\u66FF\u63DB\u5176\u4ED6\u6578\u64DA\u985E\u578B)
    \u8B8A\u91CF\u540D\u53EA\u80FD\u7528 \u5B57\u6BCD\u3001\u6578\u5B57\u3001\u5E95\u7DDA\u3001$ \u7D44\u6210\u4E26\u4E14\u4E0D\u80FD\u7528 \u6578\u5B57 \u958B\u982D
          \u4E0D\u80FD\u7528 \u95DC\u9375\u5B57 \u8207 \u4FDD\u7559\u5B57
          \u4E26\u4E14\u5340\u5206\u5927\u5C0F\u5BEB
    \u8B8A\u91CF\u540D\u76E1\u91CF\u4F7F\u7528\u99DD\u5CF0\u5F0F\u547D\u540D\u6CD5: exampleLikeThis
  */
  var name = 'myValue'

  // \u8B8A\u91CF\u63D0\u5347
  // \u57F7\u884C\u4EE3\u78BC\u524D,JS\u6709\u9810\u89E3\u6790\u968E\u6BB5,\u6703\u9810\u8B80\u6240\u6709\u8B8A\u91CF\u7684"\u5B9A\u7FA9"
  // \u8B8A\u91CF\u63D0\u5347\u53EA\u6703\u8B80\u53D6\u5B9A\u7FA9\u4F46\u4E0D\u6703\u8B80\u53D6\u8CE6\u503C(\u6240\u4EE5\u7B2C\u4E00\u500B\u6703\u8F38\u51FAundefined)
  console.log(a);// undefined
  console.log(typeof a);// undefined
  var a = 123;
  console.log(a); // 123
  // \u4E0A\u9762\u7B49\u50F9\u65BC\u4E0B\u9762
  var a;
  console.log(a);// undefined
  console.log(typeof a);// undefined
  a = 123;
  console.log(a); // 123
<\/script>
\`\`\`

<hr id="user-content-const-let" style="height: 4px;">

#### <a href="#user-content-top">const\u3001let\u3001var</a>
- \`\`\`const\`\`\` \u70BA\u8072\u660E\u5E38\u91CF\uFF0C\u4E00\u65E6\u521D\u59CB\u5316\uFF0C\u5C31\u4E0D\u80FD\u91CD\u65B0\u8D4B\u503C
  - \u70BA\u4E86\u521D\u59CB\u5316\u5F8C\u4E0D\u5E0C\u671B\u91CD\u65B0\u8CE6\u503C\u7684\u60C5\u6CC1\u8A2D\u8A08\u7684
  - \u4E00\u65E6\u8072\u660E\uFF0C\u5C31\u9700\u7ACB\u5373\u521D\u59CB\u5316\uFF0C\u7121\u6CD5\u7559\u5230\u4EE5\u5F8C\u8CE6\u503C
  - \u5141\u8A31\u5728\u4E0D\u91CD\u65B0\u8D4B\u503C\u7684\u60C5\u51B5\u4E0B\u4FEE\u6539\u5B83\u7684\u503C(\u5F15\u7528\u985E\u578B)
  - \u5EFA\u8B70\u90FD\u5148\u7528 \`\`\`const\`\`\` \u82E5\u9700\u8981\u91CD\u65B0\u8CE6\u503C\u518D\u6539\u4F7F\u7528 \`\`\`let\`\`\`
- \`\`\`var\u3001let\`\`\` \u70BA\u8072\u660E\u8B8A\u91CF\uFF0C\u4E00\u65E6\u521D\u59CB\u5316\u5F8C\uFF0C\u53EF\u4EE5\u91CD\u65B0\u8D4B\u503C
- \u4E09\u8005\u5340\u5225
  - \u91CD\u8907\u8072\u660E
    - \`\`\`var\`\`\` \u5141\u8A31
    - \`\`\`let\u3001const\`\`\` \u4E0D\u5141\u8BB8
  - \u8B8A\u91CF\u63D0\u5347
    - \`\`\`var\`\`\` \u6703\u63D0\u5347\u8072\u660E\u5230\u7576\u524D\u4F5C\u7528\u57DF\u7684\u9802\u90E8
    - \`\`\`let\u3001const\`\`\` \u4E0D\u6703\u63D0\u5347
    - \u53EF\u4EE5\u990A\u6210\u826F\u597D\u7684\u7FD2\u6163\uFF0C\u5148\u8072\u660E\u5F8C\u4F7F\u7528
  - \u4F5C\u7528\u57DF
    - \`\`\`var\`\`\` \u6C92\u6709\u584A\u7D1A\u4F5C\u7528\u57DF
    - \`\`\`let\u3001const\`\`\` \u6709\u584A\u7D1A\u4F5C\u7528\u57DF
    - \u6703\u81EA\u52D5\u7D81\u5B9A\u8A72\u4F5C\u7528\u57DF\uFF0C\u4E0D\u53D7\u5230\u5916\u90E8\u4F5C\u7528\u57DF\u7684\u5F71\u97FF
  - window \u5C0D\u8C61
    - \`\`\`var\`\`\` \u8072\u660E\u7684\u8B8A\u91CF\uFF0C\u900F\u904E \`\`\`function\`\`\` \u8072\u660E\u7684\u51FD\u6578\uFF0C\u6703\u81EA\u52D5\u8B8A\u6210 window \u5C0D\u8C61\u7684\u5C6C\u6027\u8207\u65B9\u6CD5
    - \`\`\`let\u3001const\`\`\` \u4E0D\u6703\u8B8A\u6210 window \u5C0D\u8C61

<hr id="user-content-output-statement" style="height: 2px;">

#### <a href="#user-content-top" >\u8F38\u51FA\u8A9E\u53E5</a>
\`\`\`js
// \u88E1\u9762 'value' \u53EF\u66FF\u63DB\u5176\u4ED6\u6578\u64DA\u985E\u578B
// \u5F48\u51FA\u8996\u7A97
alert('value');
/*
  \u63A7\u5236\u53F0\u8F38\u51FA
  \u63A7\u5236\u53F0\u662F\u4E00\u7A2EREPL\u74B0\u5883
  read(\u8B80) => eval(\u57F7\u884C) => print(\u6253\u5370) => loop(\u5FAA\u74B0:\u56DE\u5230read)
*/
console.log('value');
\`\`\`

<hr id="user-content-number" style="height: 2px;">

#### <a href="#user-content-top" >\u6578\u503C</a>
\`\`\`js
// e \u4EE3\u8868 10\u7684\u6B21\u65B9
console.log(3e4) //30000
console.log(.3e5) // 0.3x100000=30000
console.log(3e-4) // 0.0003
console.log(-3e4) // -30000

// 2\u9032\u5236:0b
console.log(0b1111) //15

// 8\u9032\u5236:0
console.log(017) //15

// 16\u9032\u5236:0x
console.log(0xf) //15

// \u5176\u4ED6\u7279\u6B8A\u904B\u7B97
console.log(0/0) //NaN
console.log('1'-'2') //NaN
console.log(typeof NaN) //Number
console.log(NaN == NaN) //false

/*
  Infinity \u662F\u7121\u9650\u5927
  \u975E\u96F6\u6578\u5B57\u9664\u4EE50\uFF0C\u6703\u662FInfinity\u6216-Infinity
  Infinity \u662F\u4E00\u500B\u6578\u5B57\u985E\u578B
*/
console.log(typeof Infinity)// Number
\`\`\`

<hr id="user-content-undefined-null" style="height: 2px;">

#### <a href="#user-content-top" >undefined & null</a>
\`\`\`js
// undefined \u662F\u503C\u4E5F\u662F\u985E\u578B(\u9ED8\u8A8D\u503C)
console.log(typeof undefined)// undefined
// null: \u7A7A\u5C0D\u8C61\uFF0C\u82E5\u8981\u5C07 \u5C0D\u8C61\u3001\u6578\u7D44\u3001\u4E8B\u4EF6\u76E3\u807D \u92B7\u6BC0\u53EF\u4EE5\u8A2D\u70BA null
console.log(typeof null)// object
\`\`\`

<hr id="user-content-typeof" style="height: 2px;">

#### <a href="#user-content-top" >typeof</a>
- \u7528\u4F86\u6AA2\u6E2C\u8B8A\u91CF\u7684\u6578\u64DA\u985E\u578B
- \u8FD4\u56DE\u503C\u6709 \`\`\`undefined\u3001Null\u3001Boolean\u3001Number\u3001String\u3001Object\`\`\`
- \u4F7F\u7528\u65B9\u6CD5\u6709\u5169\u7A2E\uFF1Atypeof \u8B8A\u91CF \u548C typeof(\u8B8A\u91CF)
  \`\`\`js
  var a = 123;
  var b = 'test';

  console.log(typeof a);// number
  console.log(typeof b);// string
  \`\`\`

<hr id="user-content-datatype-convert" style="height: 2px;">

#### <a href="#user-content-top">\u6578\u64DA\u985E\u578B\u8F49\u63DB</a>
- \u4EE5\u4E0B\u70BA\u8F49\u63DB\u7BC4\u4F8B
  \`\`\`js
  Number('123');// 123
  Number('123.4');// 123.4
  Number('123\u5E74');// NaN
  Number('2e3');// 2000
  Number('');// 0
  Number(true);// 1
  Number(false);// 0
  Number(undefined);// NaN
  Number(null);// 0

  // \u5C07\u5B57\u4E32\u8F49\u70BA\u6574\u6578(\u7121\u689D\u4EF6\u6368\u53BB)
  parseInt('3.14')// 3
  parseInt('3.14\u662F\u5713\u5468\u7387')// 3(.\u4EE5\u5F8C\u90FD\u53BB\u6389)
  parseInt('\u5713\u5468\u7387\u662F3.14')// NaN(\u975E\u6578\u5B57\u958B\u982D)
  parseInt('3.99')// 3
  parseInt('33m44.99')// 33(\u975E\u6578\u5B57\u4EE5\u5F8C\u90FD\u53BB\u6389)
  parseInt(3.99)// 3
  parseInt('200px')// 200

  parseFloat('3.14')// 3.14
  parseFloat('3.14\u662F\u5713\u5468\u7387')// 3.14
  parseFloat('\u5713\u5468\u7387\u662F3.14')// NaN(\u975E\u6578\u5B57\u958B\u982D)
  parseFloat('3.99')// 3.99

  String(123) // '123'
  String(123.4)// '123.4'
  String(2e3)// '2000'
  String(NaN)// 'NaN'
  String(Infinity)// 'Infinity'
  String(0xf)// '15'(\u6703\u88AB\u8F49\u621010\u9032\u5236)
  String(true);// 'true'
  String(false);// 'false'
  String(undefined);// 'undefined'
  String(null);// 'null'

  (6).toString();// '6'
  var a = 6;
  a.toString();// '6'
  true.toString();// 'true'
  NaN.toString();// 'NaN'

  Boolean(123);// true
  Boolean(0);// false
  Boolean(NaN);// false
  Boolean(Infinity);// true
  Boolean(-Infinity);// true
  Boolean('');// false
  Boolean('abc');// true
  Boolean('false');// true
  Boolean(undefined);// false
  Boolean(null);// false
  \`\`\`

<hr id="user-content-datatype-table" style="height: 2px;">

#### <a href="#user-content-top">\u6578\u64DA\u985E\u578B\u8868</a>
| \u985E\u578B | typeof\u6AA2\u6E2C\u503C | \u7BC4\u4F8B |
| :-- | :-- | :-- |
| \u6578\u5B57\u985E\u578B | number | 1 |
| \u5B57\u4E32\u985E\u578B | string | 'test' |
| \u5E03\u723E\u985E\u578B | boolean | true false |
| undefined\u985E\u578B | undefined | undefined |
| null\u985E\u578B | object | null |

<hr id="user-content-string-splicing" style="height: 2px;">

#### <a href="#user-content-top" >\u5B57\u4E32</a>
#### <a href="#user-content-top" >\u5B57\u4E32\u8207\u62FC\u63A5</a>
\`\`\`js
var a = 10;
var str = '\u6211\u8CB7\u4E86' + a + '\u9846\u860B\u679C';
console.log(str);// \u6211\u8CB7\u4E8610\u9846\u860B\u679C
console.log(str.length) // 8

// \u82E5charAt\u8D85\u904E\u8A72\u5B57\u7B26\u4E32\u9577\u5EA6\u5247\u8F38\u51FA''
console.log(str.charAt(2)) //0\u70BA\u958B\u59CB\u7B97\u52302 => \u4E86

// substring(a, b) \u5F9Ea\u4F4D\u5230b\u4F4D\u4F46\u4E0D\u5305\u542Bb\u4F4D(\u7701\u7565b\u5247\u64F7\u53D6\u81F3\u672B\u7AEF)\uFF0Ca\u8207b\u53EF\u5C0D\u8ABF str.substring(0,3) = str.substring(3,0))
console.log(str.substring(0,3)) //\u6211\u8CB7\u4E86
console.log(str.substring(-1,3)) //\u6211\u8CB7\u4E86(\u82E5a\u70BA\u8CA0\u6578\u5247\u8996\u70BA0)
console.log(str.substring(6,10)) //\u860B\u679C(\u82E5b\u8D85\u904E\u9577\u5EA6\u5247\u64F7\u53D6\u81F3\u672B\u7AEF)
console.log(str.substring(6)) //\u860B\u679C

// substr(a, b) \u5F9Ea\u4F4D\u958B\u59CB\u9577\u5EA6\u70BAb\u7684\u5B57\u4E32(\u7701\u7565b\u5247\u64F7\u53D6\u81F3\u672B\u7AEF)
// a\u53EF\u4EE5\u70BA\u8CA0\u6578\uFF0C\u5247\u6703\u5F9E\u6700\u5F8C\u4E00\u4F4D\u958B\u59CB\u5F80\u524D\u6578
// \u7576b\u70BA\u8CA0\u6578\u6642\uFF0C\u8FD4\u56DE\u7A7A\u5B57\u7B26\u4E32
console.log(str.substr(0,2)) // \u6211\u8CB7
console.log(str.substr(0)) // \u6211\u8CB7\u4E8610\u9846\u860B\u679C

// \u7576\u6709\u8CA0\u6578\u6642(\u82E5\u5F80\u524D\u6578\u5230\u5B57\u4E32\u672B\u7AEF\u5247\u53EA\u64F7\u53D6\u5230\u672B\u7AEF)
console.log('\u6211\u8CB7\u4E8610\u9846\u860B\u679C'.substr(-2, 5))// \u860B\u679C
console.log('123456'.substr(-4, 2)) //34(\u65BC\u7B2C-4\u4F4D\u5F80\u524D\u65782\u4F4D)
console.log('123456'.substr(-2, 2)) //56(\u65BC\u7B2C-2\u4F4D\u5F80\u524D\u65782\u4F4D)

/*
  slice(a,b) \u8207 substring(a,b) \u985E\u4F3C\u5F9Ea\u4F4D\u5230b\u4F4D\u4F46\u4E0D\u5305\u542Bb\u4F4D
  \u4F46 slice a\u8207b\u53EF\u4EE5\u70BA\u8CA0\u6578\u4E14a\u5FC5\u9808\u5C0F\u65BCb
*/ 
console.log('123456'.slice(5, 2)) //''
console.log('123456'.slice(-5, -2)) //234
console.log('123456'.slice(-5))//23456

console.log('aBc'.toUpperCase())//ABC
console.log('aBc'.toLowerCase())//abc

console.log('abcdef'.indexOf('de'))//3
console.log('abcdef'.indexOf('g'))//\u627E\u4E0D\u5230\u5247\u70BA-1
\`\`\`

<hr id="user-content-string-includes" style="height: 2px;">

#### <a href="#user-content-top">includes</a>
- \u7528\u65BC\u5224\u65B7\u5B57\u7B26\u4E32\u4E2D\u662F\u5426\u542B\u6709\u5B57\u7B26
- \u7B2C\u4E8C\u500B\u53C3\u6578\u8868\u793A\u958B\u59CB\u641C\u7D22\u7684\u4F4D\u7F6E\uFF0C\u9ED8\u8A8D\u70BA0
- \u7528\u6CD5
  \`\`\`js
  // \u5224\u65B7\u5B57\u7B26\u4E32\u4E2D\u662F\u5426\u542B\u6709\u5B57\u7B26
  console.log('abc'.includes('a'));// true
  console.log('abc'.includes('ab'));// true
  console.log('abc'.includes('bc'));// true
  console.log('abc'.includes('ac'));// false
  // \u7B2C\u4E8C\u500B\u53C3\u6578\u8868\u793A\u958B\u59CB\u641C\u7D22\u7684\u4F4D\u7F6E\uFF0C\u9ED8\u8A8D\u70BA0
  console.log('abc'.includes('a'));// true
  console.log('abc'.includes('a', 0));// true
  console.log('abc'.includes('a', 1)); // false
  \`\`\`

<hr id="user-content-string-padstart-padend" style="height: 2px;">

#### <a href="#user-content-top">padStart\u3001padEnd</a>
- \u7528\u65BC\u88DC\u5168\u5B57\u7B26\u4E32\u9577\u5EA6
- \`\`\`padStart\`\`\` \u5F80\u524D\u88DC\u5168\u5B57\u7B26\u4E32
- \`\`\`padEnd\`\`\` \u5F80\u5F8C\u88DC\u5168\u5B57\u7B26\u4E32
- \u6CE8\u610F\u4E8B\u9805
  - \u82E5\u9577\u5EA6\u5927\u65BC\u7B49\u65BC\u6700\u5927\u9577\u5EA6\uFF0C\u6703\u76F4\u63A5\u8FD4\u56DE\u539F\u5B57\u7B26\u4E32
  - \u82E5\u88DC\u5168\u7684\u8207\u539F\u672C\u7684\u9577\u5EA6\u548C\u8D85\u904E\u6700\u5927\u9577\u5EA6\uFF0C\u6703\u622A\u53BB\u90E8\u5206\u7684\u88DC\u5168\u5B57\u7B26\u4E32
  - \u5982\u679C\u7701\u7565\u7B2C\u4E8C\u500B\u53C2\u6570\uFF0C\u9ED8\u8A8D\u4F7F\u7528\u7A7A\u683C\u88DC\u5168\u9577\u5EA6
- \u7528\u6CD5
  \`\`\`js
  // \u88DC\u5168\u5B57\u7B26\u4E32\u9577\u5EA6
  console.log('x'.padStart(5, 'ab'));// ababx
  console.log('x'.padEnd(5, 'ab'));// xabab
  console.log('x'.padEnd(4, 'ab'));// xaba
  // \u9577\u5EA6\u5927\u65BC\u7B49\u65BC\u6700\u5927\u9577\u5EA6\uFF0C\u6703\u76F4\u63A5\u8FD4\u56DE\u539F\u5B57\u7B26\u4E32
  console.log('xxx'.padStart(2, 'ab'));// xxx
  console.log('xxx'.padEnd(2, 'ab'));// xxx
  // \u8D85\u904E\u6700\u5927\u9577\u5EA6\u6703\u622A\u53BB\u90E8\u5206\u7684\u88DC\u5168\u5B57\u7B26\u4E32
  console.log('abc'.padStart(10, '0123456789'));// 0123456abc
  console.log('abc'.padEnd(10, '0123456789'));// abc0123456
  // \u5982\u679C\u7701\u7565\u7B2C\u4E8C\u500B\u53C2\u6570\uFF0C\u9ED8\u8A8D\u4F7F\u7528\u7A7A\u683C\u88DC\u5168\u9577\u5EA6
  console.log('x'.padStart(4));//    x
  console.log('x'.padEnd(4));// x   
  \`\`\`


<hr id="user-content-string-trimstart-trimend" style="height: 2px;">

#### <a href="#user-content-top">trimStart\u3001trimEnd</a>
- \u6E05\u9664\u5B57\u7B26\u4E32\u7684\u9996\u6216\u5C3E\u7A7A\u683C\uFF0C\u4E2D\u9593\u7684\u7A7A\u683C\u4E0D\u6703\u6E05\u9664
- \u7528\u6CD5
  \`\`\`js
  const s = '  a b c  ';
  // \u6E05\u9664\u5B57\u4E32\u524D\u9762\u6240\u6709\u7A7A\u683C
  // trimStart = trimLeft
  console.log(s.trimStart());// a b c  
  console.log(s.trimLeft());// a b c  
  // \u6E05\u9664\u5B57\u4E32\u5F8C\u9762\u6240\u6709\u7A7A\u683C
  // trimEnd = trimRight
  console.log(s.trimEnd());//  a b c
  console.log(s.trimRight());//  a b c
  \`\`\`

<hr id="user-content-string-template-literals" style="height: 2px;">

#### <a href="#user-content-top">\u6A21\u677F\u5B57\u7B26\u4E32</a>
- \u53EF\u900F\u904E\u6A23\u677F\u5B57\u9762\u503C\u4F86\u4F7F\u7528\u591A\u884C\u5B57\u4E32\u53CA\u5B57\u4E32\u5167\u63D2\u529F\u80FD
- \u6CE8\u610F\u4E8B\u9805
  - \u51E1\u6700\u7EC8\u53EF\u4EE5\u5F97\u51FA\u4E00\u500B\u503C\u7684\u5C31\u53EF\u900F\u904E \`\`\`\${}\`\`\` \u6CE8\u5165
  - \u6240\u6709\u7684\u7A7A\u683C\u3001\u63DB\u884C\u6216\u7E2E\u9032\u90FD\u6703\u4FDD\u7559\u5728\u8F38\u51FA\u4E4B\u4E2D
- \u7BC4\u4F8B
  \`\`\`js
  const age = 18;
  const introduce = \`\u4ECA\u5E74\${age}\u6B72\`
  console.log(introduce);// \u4ECA\u5E7418\u6B72
  \`\`\`

<hr id="user-content-expressions-operators" style="height: 4px;">

#### <a href="#user-content-top">\u8868\u9054\u5F0F\u8207\u904B\u7B97\u7B26</a>
#### <a href="#user-content-top">\u9673\u8FF0\u5F0F\u8207\u8868\u9054\u5F0F\u5DEE\u7570</a>
- \u9673\u8FF0\u5F0F
  - \u57F7\u884C\u7A0B\u5F0F\u78BC\u55AE\u8A5E\u6216\u7247\u6BB5,\u4E3B\u8981\u7279\u5FB5\u5728\u65BC\`\`\`\u4F46\u4E0D\u6703\u56DE\u50B3\u7D50\u679C\`\`\`
  - \u6BD4\u5982\`\`\`\u5BA3\u544A\`\`\` \`\`\`\u6D41\u7A0B\u63A7\u5236\`\`\` \`\`\`\u8FF4\u5708\`\`\`
- \u8868\u9054\u5F0F
  - \u7279\u5FB5\u5728\u65BC\`\`\`\u6703\u56DE\u50B3\u7D50\u679C\`\`\`
  - \u6BD4\u5982\`\`\`\u8B8A\u6578\`\`\` \`\`\`\u904B\u7B97\u5B50\`\`\` \`\`\`\u6B63\u898F\u8868\u9054\u5F0F\`\`\`

<hr id="user-content-operator" style="height: 2px;">

#### <a href="#user-content-top">\u904B\u7B97\u7B26</a>
- \u904B\u7B97\u9806\u5E8F: \`\`\`NOT !\`\`\` > \`\`\`\u7B97\u8853\u904B\u7B97\u7B26\`\`\` > \`\`\`\u95DC\u4FC2\u904B\u7B97\u7B26\`\`\` > \`\`\`\u908F\u8F2F\u904B\u7B97\u7B26\`\`\`
- \u7B97\u8853\u904B\u7B97\u7B26
  - \`\`\`\u52A0 +\`\`\` \`\`\`\u6E1B -\`\`\` \`\`\`\u4E58 *\`\`\` \`\`\`\u9664 /\`\`\` \`\`\`\u53D6\u9918 %\`\`\`
  \`\`\`js
  /*
    IEEE754 \u5C0F\u6578\u9EDE\u904B\u7B97\u554F\u984C
    \u6709\u6642\u6709\u7CBE\u5EA6\u554F\u984C\u6240\u4EE5\u9700\u8981\u7528 toFixed(a)\u51FD\u6578
    a\u4EE3\u8868\u4FDD\u7559\u5C0F\u6578\u9EDE\u5F8C\u591A\u5C11\u4F4D
    \u6703\u8F38\u51FA\u70BA\u5B57\u4E32,\u6240\u4EE5\u9700\u8981\u984D\u5916\u8F49\u63DB\u6210\u6578\u5B57
  */
  console.log(0.1+0.2)//0.30000000000000004
  console.log(Number((0.1+0.2).toFixed(2)))
  \`\`\`
- \u95DC\u4FC2\u904B\u7B97\u7B26
  - \`\`\`\u5927\u65BC >\`\`\` \`\`\`\u5C0F\u65BC <\`\`\` 
  - \`\`\`\u5927\u65BC\u7B49\u65BC >=\`\`\` \`\`\`\u5C0F\u65BC\u7B49\u65BC <=\`\`\` 
  - \`\`\`\u7B49\u65BC ==\`\`\` \`\`\`\u4E0D\u7B49\u65BC !=\`\`\`
  - \`\`\`\u5168\u7B49\u65BC ===\`\`\` \`\`\`\u4E0D\u5168\u7B49\u65BC !==\`\`\`
  \`\`\`js
  1 == true;// true
  1 === true;// false
  0 == false;// true
  0 === false;// false
  0 == undefined;// false
  0 === undefined;// false
  null == undefined;// true
  null === undefined;// false
  \`\`\`
- \u908F\u8F2F\u904B\u7B97\u7B26
  - \u4F9D\u904B\u7B97\u9806\u5E8F\u6392\u5217: \`\`\`NOT !\`\`\` \`\`\`AND &&\`\`\` \`\`\`OR ||\`\`\`
  \`\`\`js
  // NOT !
  !true;// false
  !false;// true
  !0;// true
  !undefined;// true
  !'';// true
  !'test';// false
  !!true;//true 
  !!0;// false
  !!'';// false
  !!'test';// true
  
  // AND &&
  // \u5148\u5224\u65B7\u771F\u5047\u518D\u5224\u65B7\u503C
  3 && 6;// 6
  undefined && 15;// undefined
  15 && undefined;// undefined
  null && 2;// null
  '' && 16;// ''
  NaN && undefined;// NaN

  // OR ||
  3 || 6;// 3
  0 || 6;// 6
  null || undefined;// undefined
  'a' || 'b';// 'a'
  NaN || null;// null

  !true || true;// true
  3 && 4 || 5 && 6;// 4
  \`\`\`
- \u8CE6\u503C\u904B\u7B97\u7B26
  - \`\`\`\u8CE6\u503C =\`\`\`
  - \`\`\`\u5FEB\u6377\u8CE6\u503C += -= *= /= %=\`\`\`
  - \`\`\`\u81EA\u589E ++\`\`\`
  - \`\`\`\u81EA\u6E1B --\`\`\`
  \`\`\`js
  // \u5FEB\u6377\u8CE6\u503C
  var a = 6;
  a *= 2;// 12
  a += 3;// 15
  a /= 3;// 5
  a %= 2;// 1

  // \u81EA\u589E\u81EA\u6E1B
  // \u5148\u52A0\u5728\u8CE6\u503C
  var a = 3;
  var b = ++a;
  console.log(b);// 4
  console.log(a);// 4
  // \u8CE6\u503C\u5F8C\u518D\u52A0
  var a = 3;
  var b = a++;
  console.log(b);// 3
  console.log(a);// 4
  \`\`\`
- isNaN \u51FD\u6578
  \`\`\`js
  // isNaN \u51FD\u6578\u53EF\u4EE5\u7528\u4F86\u5224\u65B7\u8B8A\u91CF\u662F\u5426\u70BANaN
  // \u539F\u7406:\u53EA\u8981\u50B3\u5165Number()\u5F8C\u7684\u7D50\u679C\u662FNaN\u5C31\u6703\u5F97\u5230true
  isNaN(NaN);// true
  isNaN(5);// false
  isNaN(undefined);// true
  isNaN('3');// true
  isNaN(null);// false
  \`\`\`

<hr id="user-content-math" style="height: 2px;">

#### <a href="#user-content-top">Math\u51FD\u6578</a>
\`\`\`js
/*
  Math.ceil \u5411\u4E0A\u53D6\u6574
  Math.floor \u5411\u4E0B\u53D6\u6574
*/
console.log(Math.ceil(2.4))// 3
console.log(Math.floor(2.4))// 2
// \u51AA\u8207\u958B\u6839\u865F
console.log(Math.pow(2,3))//8: 2\u76843\u6B21\u65B9
console.log(Math.sqrt(81))//81\u958B\u6839\u865F=9
console.log(Math.sqrt(-81))//NaN
// \u53D6\u4E82\u6578
console.log(Math.random())
// \u53D6 a\u5230b \u4E4B\u9593\u7684\u96A8\u6A5F\u6574\u6578
console.log(parseInt(Math.random()*(b-a+1))+a)
\`\`\`

<hr id="user-content-process-control" style="height: 4px;">

### \u6D41\u7A0B\u63A7\u5236\u8207\u6578\u7D44
#### <a href="#user-content-top">\u6D41\u7A0B\u63A7\u5236</a>
#### <a href="#user-content-top">\u5224\u65B7\u8A9E\u53E5</a>
- if \u8A9E\u53E5
  - [\u8A73\u7D30\u8ACB\u770B MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else)
  - \u5305\u542B \`\`\`if\u3001else if\u3001else\`\`\`
  \`\`\`js
  if (condition1)
   statement1
  else if (condition2)
    statement2
  else if (condition3)
    statement3
  else
    statementN
  \`\`\`
- switch \u8A9E\u53E5
  - [\u8A73\u7D30\u8ACB\u770B MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch)
  \`\`\`js
  switch (expression) {
    case value1:
      //Statements executed when the
      //result of expression matches value1
      [break;]
    case value2:
      //Statements executed when the
      //result of expression matches value2
      [break;]
    ...
    case valueN:
      //Statements executed when the
      //result of expression matches valueN
      [break;]
    [default:
      //Statements executed when none of
      //the values match the value of the expression
      [break;]]
  }
  \`\`\`
- \u4E09\u5143\u904B\u7B97\u7B26
  \`\`\`js
  var ans = age >= 18 ? '\u6210\u5E74\u4EBA' : '\u672A\u6210\u5E74\u4EBA';
  \`\`\`

<hr id="user-content-loop" style="height: 2px;">

#### <a href="#user-content-top">\u5FAA\u74B0\u8A9E\u53E5</a>
- while \u8A9E\u53E5
  - [\u8A73\u7D30\u8ACB\u770B MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/while)
  \`\`\`js
  while (condition){
    statement
  }
  \`\`\`
- do-while \u8A9E\u53E5
  - [\u8A73\u7D30\u8ACB\u770B MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/do...while)
  \`\`\`js
  do{
    statement
  }while (condition);
  \`\`\`
- for \u8A9E\u53E5
  - [\u8A73\u7D30\u8ACB\u770B MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for)
  \`\`\`js
  for ([initialization]; [condition]; [final-expression]){
    statement
  }
  \`\`\`

<hr id="user-content-array" style="height: 2px;">

#### <a href="#user-content-top">\u6578\u7D44</a>
#### <a href="#user-content-top">\u5275\u5EFA\u6578\u7D44</a>
\`\`\`js
// \u65B9\u6CD51
var arr1 = [33, 44, 55, 66];
// \u65B9\u6CD52
var arr2 = new Array(33, 44, 55, 66);
// \u65B9\u6CD53
var arr3 = new Array(4);
\`\`\`

<hr id="user-content-modify" style="height: 2px;">

#### <a href="#user-content-top">\u53D6\u5F97\u8207\u66F4\u6539\u6578\u7D44\u9805</a>
\`\`\`js
// \u53D6\u5F97\u6578\u7D44\u9805
var arr = ['A', 'B', 'C', 'D'];
console.log(arr[0]);// A
console.log(arr[4]);// undefined
console.log(arr[-1]);// undefined
console.log(arr.length);// 4
console.log(arr[arr.length - 1]);// D
// \u66F4\u6539\u6578\u7D44\u9805
var arr = ['1', '2', '3', '4', '5'];
arr[6] = 'A';
console.log(arr);//(7)\xA0["1", "2", "3", "4", "5", empty, "A"]
\`\`\`

<hr id="user-content-de-duplication" style="height: 2px;">

#### <a href="#user-content-top">\u6578\u7D44\u53BB\u91CD</a>
\`\`\`js
// \u539F\u6578\u7D44
var arr = [1, 1, 1, 2, 2, 3, 3, 3, 2, 1];
// \u7ED3\u679C\u6578\u7D44
var result = [...new Set(arr)];
\`\`\`

<hr id="user-content-two-dimensional" style="height: 2px;">

#### <a href="#user-content-top">\u4E8C\u7DAD\u6578\u7D44</a>
\`\`\`js
// \u6578\u7D44\u5305\u542B\u591A\u500B\u4E00\u7DAD\u6578\u7D44
var matrix = [
  [11, 33, 55],
  [22, 33, 44],
  [36, 49, 52],
  [56, 10, 23]
];
\`\`\`

<hr id="user-content-pups" style="height: 2px;">

#### <a href="#user-content-top">push\u3001unshift\u3001pop\u3001shift</a>
\`\`\`js
/*
  push() \u628A\u65B0\u7684\u53C3\u6578\u6DFB\u52A0\u5230\u6578\u7D44\u7684\u5C3E\u90E8\uFF0C\u8FD4\u56DE\u503C\u662F\u6578\u7D44\u7684\u65B0\u9577\u5EA6
  unshift() \u628A\u65B0\u7684\u53C3\u6578\u6DFB\u52A0\u5230\u6578\u7D44\u7684\u6700\u524D\u9762\uFF0C\u8FD4\u56DE\u503C\u662F\u6578\u7D44\u7684\u65B0\u9577\u5EA6
  pop() \u522A\u9664\u6578\u7D44\u4E2D\u7684\u6700\u5F8C\u4E00\u500B\u5143\u7D20\uFF0C\u8FD4\u56DE\u503C\u662F\u88AB\u522A\u9664\u7684\u90A3\u500B\u5143\u7D20
  shift() \u522A\u9664\u6578\u7D44\u4E2D\u7684\u7B2C\u4E00\u500B\u5143\u7D20\uFF0C\u8FD4\u56DE\u503C\u662F\u88AB\u522A\u9664\u7684\u90A3\u500B\u5143\u7D20
*/

// push()
var arr = [22, 33, 44, 55];
arr.push(66);
arr.push(77, 88, 99);
console.log(arr);// [22, 33, 44, 55, 66, 77, 88, 99]
// ***********************************
// pop()
var arr = [22, 33, 44, 55];
var item = arr.pop();// \u522A\u9664\u6700\u5F8C\u4E00\u9805\u4E26\u8FD4\u56DE\u6700\u5F8C\u4E00\u9805
console.log(arr);// [22, 33, 44]
console.log(item);// 55
// ***********************************
// unshift()
var arr = [22, 33, 44, 55];
arr.unshift(11);// \u5728\u9996\u9805\u524D\u9762\u65B0\u589E\u4E00\u9805
arr.unshift(0);
console.log(arr);// [ 0, 11, 22, 33, 44, 55]

// ***********************************
// shift()
var arr = [22, 33, 44, 55];
var item = arr.shift();// \u522A\u9664\u9996\u9805\u4E26\u8FD4\u56DE\u9996\u9805
console.log(arr);// [33, 44, 55]
console.log(item);// 22
\`\`\`

<hr id="user-content-splice" style="height: 2px;">

#### <a href="#user-content-top">splice</a>
\`\`\`js
// 1
var arr = [0, 1, 2, 3];
arr.splice(2, 1);// \u82E5\u7B2C\u4E8C\u500B\u53C3\u6578\u5F8C\u9762\u4E0D\u5BEB\u5247\u76F4\u63A5\u522A\u9664
console.log(arr);// [0, 1, 3]
// 2
var arr = [0, 1, 2, 3, 4, 5];
var items = arr.splice(3, 0, 66, 77, 88, 99);
var items2 = arr.splice(3, 2, 66, 77, 88, 99);
console.log(arr);// [0, 1, 2, 66, 77, 88, 99, 88, 99, 3, 4, 5]
console.log(items);// []
console.log(items2);// [66, 77] <= \u6703\u8FD4\u56DE\u6578\u7D44\u5305\u542B\u88AB\u522A\u9664\u7684\u9805
\`\`\`

<hr id="user-content-reverse" style="height: 2px;">

#### <a href="#user-content-top">reverse</a>
\`\`\`js
[0, 1, 2, 3, 4, 5].reverse();// [5, 4, 3, 2, 1, 0]
// \u5C07\u5B57\u4E32\u53CD\u8F49
'012345'.split('').reverse().join();// '5,4,3,2,1,0'
'012345'.split('').reverse().join('');// '543210'
\`\`\`

<hr id="user-content-sort" style="height: 2px;">

#### <a href="#user-content-top">sort</a>
\`\`\`js
var arr = [33, 22, 11, 55];
/*
  a, b \u5206\u5225\u70BA\u9760\u524D\u9760\u5F8C\u7684\u9805
  \u82E5\u9700\u8981\u4EA4\u63DB\u4F4D\u7F6E\u5247\u8FD4\u56DE\u6B63\u503C,\u5426\u5247\u8FD4\u56DE\u8CA0\u503C
*/
arr.sort(function (a, b) {
    return b - a;
});

console.log(arr);// [55, 33, 22, 11]
\`\`\`

<hr id="user-content-indexof" style="height: 2px;">

#### <a href="#user-content-top">indexOf</a>
\`\`\`js
/*
  indexOf \u65B9\u6CD5\u7686\u662F\u4EE5"==="\u505A\u5224\u65B7
  \u82E5\u6709\u5169\u500B\u53C3\u6578\u5247
  \u7B2C\u4E00\u500B\u53C3\u6578: \u67E5\u627E\u7684\u9805\u76EE
  \u7B2C\u4E8C\u500B\u53C3\u6578: \u5F9E\u8A72\u9EDE\u4F4D\u7F6E\u958B\u59CB\u67E5\u627E
*/
[0, 1, 2, 3, 4, 5].indexOf(6);// -1
[0, 1, 2, 3, 4, 5, 2].indexOf(2);// \u8FD4\u56DE\u7B2C\u4E00\u500B\u51FA\u73FE\u7684\u4F4D\u7F6E:2
[0, 1, 2, 3, 4, 5].indexOf(3, 4);// -1
\`\`\`

<hr id="user-content-lastindexof" style="height: 2px;">

#### <a href="#user-content-top">lastIndexOf</a>
\`\`\`js
/*
  lastIndexof \u65B9\u6CD5\u7686\u662F\u4EE5"==="\u505A\u5224\u65B7
  \u82E5\u6709\u5169\u500B\u53C3\u6578\u5247
  \u7B2C\u4E00\u500B\u53C3\u6578: \u67E5\u627E\u7684\u9805\u76EE
  \u7B2C\u4E8C\u500B\u53C3\u6578: \u5F9E\u8A72\u9EDE\u4F4D\u7F6E\u958B\u59CB\u5F80\u5167\u67E5\u627E
*/
let arr = [1,2,3,4,1,2,3];
console.log(arr.lastIndexOf(3));// 6
console.log(arr.lastIndexOf(2,6));// 5
\`\`\`

<hr id="user-content-array-find-findindex" style="height: 2px;">

#### <a href="#user-content-top">find\u3001findIndex</a>
- \`\`\`find()\`\`\`\uFF1A\u6EFF\u8DB3\u689D\u4EF6\u4E4B\u5F8C\u7ACB\u5373\u8FD4\u56DE\u5176\u503C
- \`\`\`findIndex()\`\`\`\uFF1A\u6EFF\u8DB3\u689D\u4EF6\u5F8C\u7ACB\u5373\u8FD4\u56DE\u5176\u7D22\u5F15
- \u7B2C\u4E00\u500B\u53C3\u6578\u653E\u5165\u51FD\u6578\u7528\u6765\u5C0D\u6BCF\u500B\u5143\u7D20\u9032\u884C\u5224\u65B7\u8207\u56DE\u50B3
  - \u88E1\u9762\u51FD\u6578\u53C3\u6578\u4F9D\u5E8F\u70BA\uFF1A\u5167\u5BB9\u503C\u3001\u7D22\u5F15\u503C\u3001\u6578\u7D44\u5C0D\u8C61
- \u7B2C\u4E8C\u500B\u53C3\u6578\u70BAfunction\u88E1\u9762\u7684this\u5C0D\u8C61(\u82E5\u70BA\u7BAD\u982D\u51FD\u6578\u5247\u7121this\u5C0D\u8C61)
- \u7528\u6CD5
  \`\`\`js
  const testArray = [1, 5, 10, 15];
  // find()
  console.log(
    testArray.find(function (value, index, arr) {
      console.log(testArray === arr);// true
      console.log(this);// #document
      console.log(value, index);// \u8F38\u51FA\u5167\u5BB9\u503C\u8207\u7D22\u5F15\u503C
      return value > 9;
    }, document)
  );// 10\uFF0C\u5FAA\u74B0\u523010\u7ACB\u5373\u8FD4\u56DE\u5167\u5BB9\u503C

  // findIndex()
  console.log(
    testArray.findIndex(function (value, index, arr) {
      console.log(testArray === arr);// true
      console.log(this);// #document
      console.log(value, index);// \u8F38\u51FA\u5167\u5BB9\u503C\u8207\u7D22\u5F15\u503C
      return value > 9;
    }, document)
  );// 2\uFF0C\u5FAA\u74B0\u523010\u7ACB\u5373\u8FD4\u56DE\u7D22\u5F15\u503C
  \`\`\`

<hr id="user-content-filter" style="height: 2px;">

#### <a href="#user-content-top">filter</a>
\`\`\`js
// filter \u6703\u5C07\u6BCF\u4E00\u9805\u4EE3\u5165\u51FD\u6578\u5224\u65B7\uFF0C\u82E5\u70BAtrue\u5247\u8FD4\u56DE\u7D66\u65B0\u6578\u7D44
[1,2,3,4,5,6,7,8].filter(e => e > 3);    // [4, 5, 6, 7, 8]
[1,2,3,4,5,6,7,8].filter(e => e%2 == 0); // [2, 4, 6, 8]
\`\`\`

<hr id="user-content-join" style="height: 2px;">

#### <a href="#user-content-top">join</a>
\`\`\`js
[0, 1, 2, 3, 4, 5].join();// \u7B49\u540C\u65BC toString
[0, 1, 2, 3, 4, 5].toString();// '0,1,2,3,4,5'
[0, 1, 2, 3, 4, 5].join('-');// '0-1-2-3-4-5'
[0, 1, 2, 3, 4, 5].join('');// '012345'
\`\`\`

<hr id="user-content-concat" style="height: 2px;">

#### <a href="#user-content-top">concat</a>
\`\`\`js
// \u5408\u4F75\u591A\u500B\u6578\u7D44(\u4E0D\u6539\u8B8A\u6578\u7D44\u672C\u8EAB)
var arr1 = [1, 2, 3];
var arr2 = [4, 5, 6];
var arr3 = [7, 8, 9];
var arr = arr1.concat(arr2, arr3);
console.log(arr);// [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(arr1);// [1, 2, 3]
\`\`\`

<hr id="user-content-slice" style="height: 2px;">

#### <a href="#user-content-top">slice</a>
\`\`\`js
// \u4E0D\u6703\u66F4\u6539\u539F\u6578\u7D44\u53EA\u6703\u8FD4\u56DE
var arr = ['A', 'B', 'C', 'D', 'E', 'F'];
var child_arr1 = arr.slice(2, 5);
var child_arr2 = arr.slice(2);// \u6C92\u5BEB\u7B2C\u4E8C\u500B\u53C3\u6578\u5247\u9810\u8A2D\u5230\u6700\u5F8C\u4E00\u9805
var child_arr3 = arr.slice(2, -1);// = arr.slice(2, 5)\uFF0C-1 = \u6700\u5F8C\u4E00\u9805(\u5F80\u56DE\u6578)
console.log(child_arr1);// ["C", "D", "E"]
console.log(child_arr2);// ["C", "D", "E", "F"]
console.log(child_arr3);// ["C", "D", "E"]
\`\`\`

<hr id="user-content-map" style="height: 2px;">

#### <a href="#user-content-top">map</a>
\`\`\`js
/*
  map \u6703\u8655\u7406\u6578\u7D44\u7684\u6BCF\u4E00\u9805\u4E26\u56DE\u50B3\u65B0\u6578\u7D44
  \u65B9\u6CD5\u5167\u6709\u5169\u500B\u53C3\u6578:1.\u51FD\u6578\u30012.this\u53C3\u6578(\u9078\u586B)
  \u51FD\u6578\u88E1\u6709\u53EF\u53D6\u5F97\u7684\u4E09\u500B\u53C3\u6578:
  1.\u8A72\u9805\u7684\u503C
  2.\u8A72\u9805\u7684\u7D22\u5F15\u503C(\u9078\u586B)
  3.\u7576\u524D\u6578\u7D44(\u9078\u586B)
*/
let test1 = [1,2,3,4,5,6,7,8].map(e => {
    return e + 10;
});
console.log(test1); // [11, 12, 13, 14, 15, 16, 17, 18]

// \u6CE8\u610F:\u82E5\u8981\u5C07\u51FD\u6578this\u6307\u541110\u4E0D\u80FD\u4F7F\u7528\u7BAD\u982D\u51FD\u6578
let test2 = [1,2,3,4,5,6,7,8].map(function(e){
    return e + this; // \u6B64\u8655\u7684 this \u70BA 10
}, 10);
console.log(test2); // [11, 12, 13, 14, 15, 16, 17, 18]
\`\`\`

<hr id="user-content-reduce-reduceright" style="height: 2px;">

#### <a href="#user-content-top">reduce\u3001reduceRight</a>
\`\`\`js
/*
 reduce(\u5DE6\u5230\u53F3)\u3001reduceRight(\u53F3\u5230\u5DE6)
 \u6703\u8A08\u7B97\u6578\u7D44\u7684\u6BCF\u4E00\u9805\uFF0C\u6BCF\u6B21\u7D50\u679C\u6703\u518D\u8207\u4E0B\u4E00\u9805\u505A\u8A08\u7B97\uFF0C\u76F4\u5230\u7D50\u675F
 \u65B9\u6CD5\u5167\u6709\u5169\u500B\u53C3\u6578:1.\u51FD\u6578\u30012.\u521D\u59CB\u8A08\u7B97\u503C(\u9078\u586B)
  \u51FD\u6578\u88E1\u6709\u53EF\u53D6\u5F97\u7684\u56DB\u500B\u53C3\u6578:
  1.\u8A08\u7B97\u7684\u503C 
  2.\u8A72\u9805\u7684\u503C
  3.\u8A72\u9805\u7684\u7D22\u5F15\u503C(\u9078\u586B)
  4.\u7576\u524D\u6578\u7D44(\u9078\u586B)
*/
let test1 = [1,2,3,4,5,6,7,8].reduce(function(total, e){
    return total + e;
});
console.log(test1); // 36 ( 1+2+3+4+5+6+7+8=36 )
let test2 = [1,2,3,4,5,6,7,8].reduceRight(function(total, e){
    return total - e;
});
console.log(test2); // -20 ( 8-7-6-5-4-3-2-1 = -20 )
\`\`\`

<hr id="user-content-flat-flatMap" style="height: 2px;">

#### <a href="#user-content-top">flat\u3001flatMap</a>
\`\`\`js
/*
 flat\u3001flatMap(\u5148 map \u5F8C flat )
 flat \u5C07\u591A\u7DAD\u6578\u7D44\u8F49\u6210\u4E00\u7DAD\uFF0C
 \u4E00\u500B\u53EF\u9078\u586B\u53C3\u6578\uFF0C\u8868\u793A\u8981\u8F49\u63DB\u7684\u6DF1\u5EA6\uFF0C\u9810\u8A2D\u70BA1\uFF0C
 \u82E5\u6DF1\u5EA6\u6709\u591A\u5C64\uFF0C\u53EF\u7528Infinity\u5C55\u958B\u6210\u4E00\u7DAD\u9663\u5217
*/
// flat
let a = [1,2,[3],[4,[5,[6]]]];
let b = a.flat();
let c = a.flat(2);
let d = a.flat(Infinity);
console.log(b);// [1, 2, 3, 4, [5, [6]]]
console.log(c);// [1, 2, 3, 4, 5, [6]]
console.log(d);// [1, 2, 3, 4, 5, 6]
// flatMap
let a = [1,2,[3],[4,5]];
let b = a.flatMap(e => e+1);
let c = a.map(e => e+1).flat();
console.log(b);  // [2, 3, "31", "4,51"]
console.log(c);  // [2, 3, "31", "4,51"]
\`\`\`

<hr id="user-content-array-from" style="height: 2px;">

#### <a href="#user-content-top">Array.from</a>
- \u5C07\u5176\u4ED6\u6578\u64DA\u985E\u578B\u8F49\u63DB\u6210\u6578\u7D44
- \u7B2C\u4E00\u500B\u53C3\u6578\u653E\u5165\u8981\u8F49\u63DB\u6578\u7D44\u7684\u6578\u64DA
- \u7B2C\u4E8C\u500B\u53C3\u6578\u653E\u5165\u51FD\u6578\u7528\u6765\u5C0D\u6BCF\u500B\u5143\u7D20\u9032\u884C\u8655\u7406\u4E26\u5C07\u503C\u653E\u5165\u8FD4\u56DE\u7684\u6578\u7D44
- \u7B2C\u4E09\u500B\u53C3\u6578\u70BAfunction\u88E1\u9762\u7684this\u5C0D\u8C61(\u82E5\u70BA\u7BAD\u982D\u51FD\u6578\u5247\u7121this\u5C0D\u8C61)
- \u4EE5\u4E0B\u689D\u4EF6\u7686\u53EF\u8F49\u63DB\u6210\u6578\u7D44
  - \u53EF\u904D\u6B77\u7684 \`\`\`Array\u3001String\u3001Set\u3001Map\u3001NodeList\u3001arguments\`\`\`
  - \u64C1\u6709 length \u5C5E\u6027\u7684\u5C0D\u8C61 \`\`\`const test = {a:1, b:2, c:3, length:3}\`\`\`
- \u7528\u6CD5
  \`\`\`js
  console.log(Array.from('str'));// (3)\xA0['s', 't', 'r']
  // \u7B2C\u4E8C\u500B\u53C3\u6578\u653E\u5165\u51FD\u6578\u7528\u6765\u5C0D\u6BCF\u500B\u5143\u7D20\u9032\u884C\u8655\u7406
  console.log(Array.from('12', value => value * 2));// [2, 4]
  // \u7B2C\u4E09\u500B\u53C3\u6578\u70BAfunction\u88E1\u9762\u7684this\u5C0D\u8C61
  Array.from(
    '12',
    function (value) {
      console.log(this);// #document
      console.log(value);// \u4F9D\u5E8F\u5370\u51FA 1 2
    },
    document
  );
  \`\`\`

<hr id="user-content-array-every" style="height: 2px;">

#### <a href="#user-content-top">every</a>
\`\`\`js
/*
  every \u6703\u5C07\u6578\u7D44\u6BCF\u4E00\u9805\u5E36\u5165\u51FD\u5F0F\u5167\u505A\u5224\u65B7\uFF0C
  \u82E5\u6709\u4EFB\u4F55\u4E00\u9805\u4E0D\u7B26\u5408\u689D\u4EF6\uFF0C\u56DE\u50B3 false\uFF0C
  \u82E5\u5168\u90E8\u7B26\u5408\uFF0C\u5247\u56DE\u50B3 true\u3002
*/
let test1 = [1,2,3,4,5,6];
console.log(test1.every(e => e > 3));// false 
console.log(test1.every(e => e > 0));// true
\`\`\`

<hr id="user-content-array-some" style="height: 2px;">

#### <a href="#user-content-top">some</a>
\`\`\`js
/*
  some \u6703\u5C07\u6578\u7D44\u6BCF\u4E00\u9805\u5E36\u5165\u51FD\u5F0F\u5167\u505A\u5224\u65B7\uFF0C
  \u82E5\u6709\u4EFB\u4F55\u4E00\u9805\u7B26\u5408\u689D\u4EF6\uFF0C\u56DE\u50B3 true
  \u82E5\u5168\u90E8\u4E0D\u7B26\u5408\uFF0C\u5247\u56DE\u50B3 false
*/
let test1 = [1,2,3,4,5,6];
console.log(test1.some(e => e > 3));// true 
console.log(test1.some(e => e < 0));// false
\`\`\`

<hr id="user-content-array-includes" style="height: 2px;">

#### <a href="#user-content-top">includes</a>
- \u5224\u65B7\u6578\u7D44\u4E2D\u662F\u5426\u6709\u8A72\u6210\u54E1
- \u7B2C\u4E8C\u500B\u53C3\u6578\u70BA\u641C\u7D22\u7684\u8D77\u59CB\u4F4D\u7F6E\uFF0C\u9ED8\u8A8D\u70BA0
- \u9075\u5FAA\u56B4\u683C\u76F8\u7B49(===)\uFF0C\u4E26\u4E14 NaN \u7B49\u65BC NaN
- \u57FA\u672C\u7528\u6CD5
  \`\`\`js
  // \u5224\u65B7\u6578\u7D44\u4E2D\u662F\u5426\u6709\u8A72\u6210\u54E1
  console.log([1, 2, 3].includes('2'));// false
  console.log([1, 2, 3].includes(2));// true
  // \u7B2C\u4E8C\u500B\u53C3\u6578\u70BA\u641C\u7D22\u7684\u8D77\u59CB\u4F4D\u7F6E\uFF0C\u9ED8\u8A8D\u70BA0
  console.log([1, 2, 3].includes(2, 2));// false
  // \u9075\u5FAA\u56B4\u683C\u76F8\u7B49(===)\uFF0C\u4E26\u4E14 NaN \u7B49\u65BC NaN
  console.log([1, 2, NaN].includes(NaN));// true
  \`\`\`

<hr id="user-content-array-isarray" style="height: 2px;">

#### <a href="#user-content-top">Array.isArray</a>
\`\`\`js
/*
  Array.isArray \u80FD\u5224\u65B7\u4E00\u500B\u7269\u4EF6\u662F\u5426\u70BA\u9663\u5217\uFF0C
  \u5982\u679C\u662F\u56DE\u50B3 true\uFF0C\u5426\u5247\u56DE\u50B3 false\u3002
*/
let a = [1,2,3,4,5,6,7,8];
let b = 123;
let c = 'hello';
let d = {};
console.log(Array.isArray(a)); // true
console.log(Array.isArray(b)); // false
console.log(Array.isArray(c)); // false
console.log(Array.isArray(d)); // false
\`\`\`

<hr id="user-content-function" style="height: 4px;">

### \u51FD\u6578\u3001DOM\u3001BOM
#### <a href="#user-content-top">\u51FD\u6578</a>
#### <a href="#user-content-top">\u4F5C\u7528\u57DF\u8207\u8B8A\u91CF</a>
\`\`\`js
// \u7BC4\u4F8B1
var a = 1;
var b = 2;
function fun() {
  // \u67E5\u770B\u51FD\u6578\u5167\u90E8\u662F\u5426\u6709\u8A72\u8B8A\u91CF\u82E5\u7121\u5247\u67E5\u627E\u5168\u5C40\u8B8A\u91CF
  c = 3;// \u51FD\u6578\u5167\u4E0D\u52A0var\u5247\u8F49\u8B8A\u70BA\u5168\u5C40\u8B8A\u91CF
  c++;
  a++;// \u51FD\u6578\u5167\u90E8\u67E5\u7121a\u8B8A\u91CF\u5247\u4EE5\u5168\u5C40\u8B8A\u91CFa\u70BA\u4E3B\u89D2
  var b = 4;
  b++;
  console.log(b);// 5
}
fun();
console.log(a);// 2
console.log(b);// 2
console.log(c);// \u53EF\u4EE5\u8A2A\u554F\u5230\u8B8A\u91CFc:4

// \u7BC4\u4F8B2(\u906E\u853D\u6548\u61C9)
var m = 1;
function fun() {
  m++;
  console.log(m);// undefined + 1 = NaN
  var m = 4; 
  console.log(m);// 4
}
fun();
console.log(m);// 1

// \u7BC4\u4F8B3(\u4F5C\u7528\u57DF)
var a = 10;
var b = 20;
function fun() {
  var c = 30;
  function inner() {
    var a = 40;
    var d = 50;
    // \u5F9E\u88E1\u5230\u5916\u5C0B\u627E\u8B8A\u91CF
    console.log(a, b, c, d);// 40 20 30 50
  }
  inner();
}
fun();
\`\`\`

<hr id="user-content-function-promotion" style="height: 2px;">

#### <a href="#user-content-top">\u51FD\u6578\u512A\u5148\u63D0\u5347</a>
\`\`\`js
// \u51FD\u6578\u6703\u88AB\u63D0\u5347\u81F3\u6700\u4E0A\u65B9
fun();// B

var fun = function () {
  console.log('A');
};

function fun() {
  console.log('B');
}

fun();// A
\`\`\`

<hr id="user-content-function-use" style="height: 2px;">

#### <a href="#user-content-top">\u51FD\u6578\u7684\u4F7F\u7528</a>
\`\`\`js
// 1.\u51FD\u6578\u5167\u53EF\u5B9A\u7FA9\u53C3\u6578
function add(a, b, c) {
  var sum = a + b + c;
  console.log(sum);
}
// \u5B9A\u7FA9\u51FD\u6578\u9700\u88AB\u547C\u53EB\u624D\u6703\u57F7\u884C
add(4, 5, 5);// 14
add(2, 2);// NaN
add(6, 3, 2, 4);// 11

// 2.\u5982\u679C return \u5F8C\u9762\u6C92\u6709\u8FD4\u56DE\u503C\uFF0C\u9ED8\u8A8D\u8FD4\u56DE undefined
function sum(a, b) {
  return a + b;
}
var result = sum(3, 4);
console.log(result);// 7

// 3.arguments
/*
  arguments \u985E\u4F3C\u6578\u7D44(\u5C0D\u8C61)\uFF0C\u4F46\u4E26\u975E\u771F\u6B63\u7684\u6578\u7D44(\u5C0D\u8C61)
  arguments.length \u53EF\u4EE5\u7372\u5F97\u53C3\u6578\u7684\u6578\u91CF
  arguments[0] \u62EC\u865F\u88E1\u9762\u653E\u7D22\u5F15\u53EF\u4EE5\u53D6\u5F97\u53C3\u6578\u503C 
*/
// \u8A08\u7B97\u53C3\u6578\u7E3D\u548C
function fun() {
  var sum = 0;
  for (var i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  console.log('\u53C3\u6578\u548C=' + sum);
}
\`\`\`

<hr id="user-content-closure" style="height: 2px;">

#### <a href="#user-content-top">\u9589\u5305</a>
\`\`\`js
// 1.\u5C01\u88DD\u51FD\u6578\u4F86\u4F7F\u7528\u79C1\u6709\u8B8A\u91CF
function fun() {
  // \u5B9A\u7FA9\u5C40\u90E8(\u79C1\u6709)\u8B8A\u91CF
  var a = 0;
  return {
    getA: function () {
      return a;
    },
    add: function () {
      a++;
    },
    pow: function () {
      a *= 2;
    }
  };
}
var obj = fun();
console.log(obj.getA());// 0
// \u64CD\u4F5C\u79C1\u6709\u8B8A\u91CF
obj.add();
obj.add();
obj.add();
console.log(obj.getA());// 3
obj.pow();
console.log(obj.getA());// 6

// 2.\u5167\u90E8\u51FD\u6578\u547C\u53EB
// \u5275\u5EFA\u4E00\u500B\u51FD\u6578
function fun() {
    // \u5B9A\u7FA9\u5C40\u90E8\u8B8A\u91CF
    var name = 'test';
    // \u8F38\u51FA\u5C40\u90E8\u8B8A\u91CF
    return function () {
        console.log(name);
    };
}
// \u7372\u5F97\u5167\u90E8\u51FD\u6578\uFF0C\u4F7F\u7528\u8B8A\u91CFinn\u63A5\u6536
var inn = fun();
// \u5B9A\u7FA9\u5168\u5C40\u8B8A\u91CF
var name = 'ABC';
// \u57F7\u884Cinn\u51FD\u6578\uFF0C\u76F8\u7576\u65BC\u5728fun\u51FD\u6578\u7684\u5916\u90E8\uFF0C\u6267\u884C\u4E86\u5185\u90E8\u51FD\u6570
inn();// test

// 3.\u9589\u5305\u7684\u8A18\u61B6\u6027
function createCheckTemp(standardTemp) {
  function checkTemp(n) {
    if (n <= standardTemp) {
      console.log('\u9AD4\u6EAB\u6B63\u5E38');
    } else {
      console.log('\u9AD4\u6EAB\u504F\u9AD8');
    }
  }
  return checkTemp;
}
// \u4EE5 37.1 \u5EA6\u70BA\u6A19\u6E96
var checkTemp_A = createCheckTemp(37.1);
// \u4EE5 37.3 \u5EA6\u70BA\u6A19\u6E96
var checkTemp_B = createCheckTemp(37.3);
checkTemp_A(37.2);// \u9AD4\u6EAB\u504F\u9AD8
checkTemp_B(37.2);// \u9AD4\u6EAB\u6B63\u5E38
\`\`\`

<hr id="user-content-iife" style="height: 2px;">

#### <a href="#user-content-top">IIFE</a>
- \u7528\u8655
  - 1.\u53EF\u4EE5\u907F\u514D\u88E1\u9762\u7684\u8B8A\u6578\u5F71\u97FF\u5230\u5168\u57DF
  - 2.JavaScript \u5F15\u64CE\u770B\u5230\u5373\u7ACB\u523B\u8F49\u8B6F\u8A72 function
- \u8B8A\u91CF\u8CE6\u503C
  \`\`\`js
  (function () {
      var name = "Barry";
  })();
  console.log(name);// Uncaught ReferenceError: name is not defined

  var result = (function () {
      var name = "Barry";
      return name;
  })();
  // Immediately creates the output:
  console.log(result); // "Barry"
  \`\`\`
- \u5168\u5C40\u8F49\u63DB\u5C40\u90E8\u8B8A\u91CF
  \`\`\`js
  var arr = [];
  for (var i = 0; i < 5; i++) {
    //\u4F7F\u7528IIFE\u5C07\u5168\u5C40\u8B8A\u91CF\u8F38\u5165\u81F3\u51FD\u6578\u88E1\u9762\u4F5C\u70BA\u5C40\u90E8\u8B8A\u91CF\u4F7F\u7528
    //\u82E5\u4E0D\u4F7F\u7528IIFE\u5247\u5168\u90E8\u8F38\u51FA\u90FD\u70BA5
    (function(i){
        arr.push(function () {
            console.log(i);
        });
    })(i);
  }
  arr[0]();
  arr[1]();
  arr[2]();
  arr[3]();
  arr[4]();
  \`\`\`

<hr id="user-content-arrow-function" style="height: 2px;">

#### <a href="#user-content-top">\u7BAD\u982D\u51FD\u6578</a>
- \u4E3B\u8981\u70BA\u7C21\u5316\u51FD\u6578\u8868\u9054\u5F0F
- \u9069\u7528\u65BC\u975E\u65B9\u6CD5\u7684\u51FD\u5F0F\uFF0C\u4F46\u4E0D\u80FD\u88AB\u7528\u4F5C\u5EFA\u69CB\u5F0F
- \u7D50\u69CB
  - \`\`\` const/let \u51FD\u6578\u540D = \u53C3\u6578 => \u51FD\u6578\u9AD4\`\`\`
- \u6CE8\u610F\u4E8B\u9805
  - \u55AE\u500B\u53C3\u6578\u53EF\u4EE5\u7701\u7565\u5C0F\u62EC\u865F
    - \`\`\`const add = x => { return x + 1; };\`\`\`
  - \u7121\u53C3\u6578\u6216\u591A\u500B\u53C3\u6578\u4E0D\u80FD\u7701\u7565\u5C0F\u62EC\u865F
    - \`\`\`const add = () => { return 1 + 1; };\`\`\`
    - \`\`\`const add = (x, y) => { return x + y; };\`\`\`
  - \u55AE\u884C\u51FD\u6578\u9AD4\u53EF\u540C\u6642\u7701\u7565\u5927\u62EC\u865F\u548Creturn
    - \`\`\`const add = (x, y) => x + y;\`\`\`
  - \u7BAD\u982D\u51FD\u6578\u6C92\u6709\u81EA\u5DF1\u7684 \`\`\`this\`\`\` \u5C0D\u8C61(\u6703\u5F80\u4E0A\u4E00\u5C64\u627E \`\`\`this\`\`\` \u5C0D\u8C61)
    - \u76F8\u7576\u65BC\u56B4\u683C\u6A21\u5F0F \`\`\`use strict\`\`\` \u4E0B\u7684\u4E00\u822C\u51FD\u6578
  - \u7BAD\u982D\u51FD\u6578\u4E2D\u6C92\u6709 \`\`\`arguments\`\`\`


<hr id="user-content-dom" style="height: 2px;">

#### <a href="#user-content-top">DOM</a>
#### <a href="#user-content-top">\u7C21\u4ECB</a>
- DOM ( Document Object Model\uFF0C\u6587\u6A94\u5C0D\u8C61\u6A21\u578B )
- \u662F JS \u64CD\u4F5C HTML \u6587\u6A94\u7684\u63A5\u53E3
- \u7279\u9EDE\u70BA\u5C07\u6587\u6A94\u8868\u793A\u70BA\u7BC0\u9EDE\u6A39

<hr id="user-content-onload" style="height: 2px;">

#### <a href="#user-content-top">onload \u4F7F\u7528</a>
\`\`\`html
<head>
  <script>
    // \u901A\u5E38js\u6703\u5BEB\u5728html\u5F8C\u9762,\u82E5\u8981\u5BEB\u5728\u524D\u9762\u5247\u4F7F\u7528 window.onload
    // \u7D66 window \u5C0D\u8C61\u6DFB\u52A0 onload \u4E8B\u4EF6\u76E3\u807D\u3002
    // onload \u8868\u793A\u9801\u9762\u90FD\u52A0\u8F09\u5B8C\u7562\u3002
    window.onload = function () {
      // \u5F97\u5230\u76D2\u5B501(\u53D6\u5F97\u7B2C\u4E00\u500Bid\u5143\u7D20)
      var box1 = document.getElementById('box1');
      // \u5F97\u5230\u76D2\u5B502
      var box2 = document.getElementById('box2');

      console.log(box1);
      console.log(box2);
      // \u8F38\u51FAclass\u540D
      console.log(box1.className);
      // \u53EF\u4EE5\u66FF\u63DBclass\u540D
      box1.className = 'test1'
      console.log(box1.className);
    };
  <\/script>
</head>

<body>
  <div id="box1" class="box1">\u6211\u662F\u76D2\u5B501</div>
  <div id="box2">\u6211\u662F\u76D2\u5B502</div>
</body>
\`\`\`

<hr id="user-content-get-element" style="height: 2px;">

#### <a href="#user-content-top">\u5E38\u7528\u8A2A\u554F\u7BC0\u9EDE\u65B9\u6CD5</a>
| \u8A9E\u6CD5 | \u529F\u80FD | \u517C\u5BB9\u6027 |
| :-- | :-- | :-- |
| \`\`\`document.getElementById()\`\`\` | \u901A\u904E \`\`\`id\`\`\` \u5F97\u5230\u5143\u7D20 | IE6 |
| \`\`\`document.getElementsByTagName()\`\`\` | \u901A\u904E \`\`\`\u6A19\u7C64\u540D\`\`\` \u5F97\u5230\u5143\u7D20\u6578\u7D44 | IE6 |
| \`\`\`document.getElementsByClassName()\`\`\` | \u901A\u904E \`\`\`\u985E\u540D\`\`\` \u5F97\u5230\u5143\u7D20\u6578\u7D44 | IE9 |
| \`\`\`document.querySelector()\`\`\` | \u901A\u904E \`\`\`\u9078\u64C7\u5668\`\`\` \u5F97\u5230\u5143\u7D20 | IE9\uFF0CIE8\u90E8\u5206\u517C\u5BB9 |
| \`\`\`document.querySelectorAll()\`\`\` | \u901A\u904E \`\`\`\u9078\u64C7\u5668\`\`\` \u5F97\u5230\u5143\u7D20\u6578\u7D44 | IE9\uFF0CIE8\u90E8\u5206\u517C\u5BB9 |

- \u7BC4\u4F8B
  \`\`\`js
  // \u5148\u5F97\u5230box1(\u53D6\u5F97\u7B2C\u4E00\u500Bid\u5143\u7D20)
  var box1 = document.getElementById('box1');
  // \u5F97\u5230box1\u4E2D\u7684p\u6A19\u7C64\u7684\u6578\u7D44
  var ps_inbox1 = box1.getElementsByTagName('p');
  // \u82E5\u4E0D\u6307\u5B9A\u5247\u53D6\u5F97\u5168\u90E8p\u5143\u7D20
  var p = document.getElementsByTagName('p');

  // \u53EA\u80FD\u5F97\u5230\u9801\u9762\u4E0A\u7684\u4E00\u500B\u5143\u7D20(\u6709\u591A\u500B\u5247\u53D6\u7B2C\u4E00\u500B)
  // \u4F7F\u7528css\u8A9E\u6CD5
  var the_p = document.querySelector('#box p:nth-child(1)');

  // \u8FD4\u56DE\u4E00\u500B\u5143\u7D20\u6578\u7D44 NodeList
  var lis_inlist1 = document.querySelectorAll('#list1 li');
  \`\`\`

<hr id="user-content-node-type" style="height: 2px;">

#### <a href="#user-content-top">nodeType \u5E38\u7528\u5C6C\u6027\u503C</a>
| \u5C6C\u6027\u503C | \u7BC0\u9EDE\u985E\u578B |
| :-- | :-- |
| 1 | \u5143\u7D20\u7BC0\u9EDE(\u5982 \`\`\`<p>\`\`\`) |
| 3 | \u6587\u672C\u7BC0\u9EDE |
| 8 | \u8A3B\u91CB\u7BC0\u9EDE |
| 9 | document\u7BC0\u9EDE |
| 10 | DTD\u7BC0\u9EDE |

- \u4F7F\u7528\u65B9\u5F0F
  \`\`\`js
  var box = document.getElementById('box');
  var para = document.getElementById('para');

  // \u8A72\u7BC0\u9EDE\u5C6C\u6027\u503C
  console.log(box.nodeType);
  // \u7B2C\u4E00\u500B\u5B50\u7BC0\u9EDE\u5C6C\u6027\u503C
  console.log(box.firstChild.nodeType);
  \`\`\`

<hr id="user-content-node-attributes" style="height: 2px;">

#### <a href="#user-content-top">\u7BC0\u9EDE\u5C6C\u6027</a>
| \u95DC\u4FC2 | \u6240\u6709\u7BC0\u9EDE | \u53EA\u8003\u616E\u5143\u7D20\u7BC0\u9EDE |
| :-- | :-- | :-- |
| \u5B50\u7BC0\u9EDE | childNodes | children |
| \u7236\u7BC0\u9EDE | parentNode | \u4E00\u6A23 |
| \u7B2C\u4E00\u500B\u5B50\u7BC0\u9EDE | firstChild | firstElementChild |
| \u6700\u5F8C\u4E00\u500B\u5B50\u7BC0\u9EDE | lastChild | lastElementChild |
| \u524D\u9762\u4E00\u500B\u5144\u5F1F\u7BC0\u9EDE | previousSibling | previousElementSibling |
| \u5F8C\u9762\u4E00\u500B\u5144\u5F1F\u7BC0\u9EDE | nextSibling | nextElementSibling |

- \u4F7F\u7528\u65B9\u5F0F
  \`\`\`js
  var box = document.getElementById('box');
  var para = document.getElementById('para');

  // \u6240\u6709\u5B50\u7BC0\u9EDE
  console.log(box.childNodes);
  // \u6240\u6709\u7684\u5143\u7D20\u5B50\u7BC0\u9EDE\uFF08IE9\u958B\u59CB\u517C\u5BB9\uFF09
  console.log(box.children);
  // \u82E5\u88E1\u9762\u6A19\u7C64\u6709id\u5247\u53EF\u4EE5\u76F4\u63A5\u8ABF\u7528
  console.log(box.children.para);
  // \u7B2C\u4E00\u500B\u5B50\u7BC0\u9EDE
  console.log(box.firstChild);
  // \u7B2C\u4E00\u500B\u5143\u7D20\u5B50\u7BC0\u9EDE\uFF08IE9\u958B\u59CB\u517C\u5BB9\uFF09
  console.log(box.firstElementChild);
  // \u6700\u5F8C\u4E00\u500B\u5B50\u7BC0\u9EDE
  console.log(box.lastChild);
  // \u6700\u5F8C\u4E00\u500B\u5143\u7D20\u5B50\u7BC0\u9EDE\uFF08IE9\u958B\u59CB\u517C\u5BB9\uFF09
  console.log(box.lastElementChild);
  // \u7236\u7BC0\u9EDE
  console.log(para.parentNode);
  // \u524D\u4E00\u500B\u5144\u5F1F\u7BC0\u9EDE
  console.log(para.previousSibling);
  // \u524D\u4E00\u500B\u5143\u7D20\u5144\u5F1F\u7BC0\u9EDE\uFF08IE9\u958B\u59CB\u517C\u5BB9\uFF09
  console.log(para.previousElementSibling);
  // \u5F8C\u4E00\u500B\u5144\u5F1F\u7BC0\u9EDE
  console.log(para.nextSibling);
  // \u5F8C\u4E00\u4E2A\u5143\u7D20\u5144\u5F1F\u7BC0\u9EDE\uFF08IE9\u958B\u59CB\u517C\u5BB9\uFF09
  console.log(para.nextElementSibling);
  \`\`\`
<hr id="user-content-node-operate" style="height: 2px;">

#### <a href="#user-content-top">\u7BC0\u9EDE\u64CD\u4F5C</a>
- \u5275\u5EFA\u8207\u79FB\u52D5\u7BC0\u9EDE
  \`\`\`js
  var oBox = document.getElementById('box');
  var oPs = oBox.getElementsByTagName('p');
  // \u5275\u5EFA\u7BC0\u9EDE
  var oP = document.createElement('p');
  // \u8A2D\u7F6E\u6587\u5B57
  oP.innerText = '\u6211\u662F\u65B0\u6765\u7684';
  // \u79FB\u52D5\u7BC0\u9EDE:\u9023\u540C\u5F8C\u4EE3\u4E00\u8D77\u79FB\u52D5
  // appendChild:\u589E\u52A0\u81F3\u7236\u6A19\u7C64\u7684\u6700\u5F8C
  oBox.appendChild(oP);
  // insertBefore(a,b):\u5C07a\u5143\u7D20\u63D2\u5165\u5728b\u5143\u7D20\u4E4B\u524D
  oBox.insertBefore(oP, oPs[0]);
  \`\`\`

- \u514B\u9686\u7BC0\u9EDE
  \`\`\`js
  var box1 = document.getElementById('box1');
  var box2 = document.getElementById('box2');
  var theul = box1.getElementsByTagName('ul')[0];
  // true\u4EE3\u8868\u5F8C\u4EE3\u7BC0\u9EDE\u90FD\u6703\u88AB\u514B\u9686,\u82E5\u4E0D\u8981\u6DF1\u514B\u9686\u5247\u5BEBcloneNode()
  var new_ul = theul.cloneNode(true);
  box2.appendChild(new_ul);
  \`\`\`

- \u522A\u9664\u7BC0\u9EDE
  \`\`\`js
  var box = document.getElementById('box');
  var the_first_p = box.getElementsByTagName('p')[0];
  // \u5FC5\u9808\u7531\u7236\u89AA\u522A\u9664(\u6703\u9023\u540C\u88E1\u9762\u5F8C\u4EE3\u4E00\u8D77\u522A\u9664)
  box.removeChild(the_first_p);
  \`\`\`

- \u66F4\u6539\u7BC0\u9EDE\u5167\u5BB9
  \`\`\`js
  var oBox = document.getElementById('box');
  var oBox2 = document.getElementById('box2');
  /*
    innerHTML \u8207 innerText: 
    \u7372\u53D6\u5143\u7D20\u7684\u958B\u59CB\u548C\u7D50\u675F\u6A19\u7C64\u4E4B\u9593\u7684\u5167\u5BB9
    \u4E5F\u53EF\u4EE5\u901A\u904EinnerHTML\u91CD\u65B0\u8A2D\u7F6E\u5143\u7D20\u4E2D\u7684\u5167\u5BB9
  */
  // \u4E0B\u9762\u5169\u500B\u53EA\u5DEE\u5728\u662F\u5426\u53D6\u5F97\u542Bhtml\u6A19\u7C64\u5167\u5BB9
  console.log(oBox2.innerHTML)// 123 <p>456</p>789
  console.log(oBox2.innerText)// 123 456 789
  \`\`\`

- \u66F4\u6539\u7BC0\u9EDEcss\u6A23\u5F0F
  \`\`\`js
  // \u4F7F\u7528 style \u66F4\u6539\u7BC0\u9EDE\u5167\u5BB9\u6A23\u5F0F
  var oBox = document.getElementById('box');
  oBox.style.fontSize = '50px';
  \`\`\`

- \u66F4\u6539\u975E\u7279\u6B8A\u7BC0\u9EDE\u5C6C\u6027
  \`\`\`js
  var box = document.getElementById('box');
  box.setAttribute('data-n', 10);
  var n = box.getAttribute('data-n');
  console.log(n);// 10
  \`\`\`

- \u66F4\u6539\u7279\u6B8A\u7BC0\u9EDE\u5C6C\u6027
  \`\`\`html
  <img src="image.jpg" id="pic">
  <a href="https://www.google.com/" id="link">google</a>

  <script>
    var oPic = document.getElementById('pic');
    // setAttribute \u4E5F\u53EF\u4EE5\u66FF\u63DB(\u53EA\u662F\u901A\u5E38\u662F\u7528\u5728\u975Ew3c\u6A19\u6E96\u5C6C\u6027)
    // oPic.setAttribute('src','image2.jpg');
    oPic.src = 'image2.jpg';

    var oLink = document.getElementById('link');
    oLink.href = 'https://github.com/';
    oLink.innerText = 'github';
  <\/script>
  \`\`\`

<hr id="user-content-node-customize" style="height: 2px;">

#### <a href="#user-content-top">\u7BC0\u9EDE\u81EA\u5B9A\u7FA9\u5C6C\u6027</a>
- \u7C21\u4ECB
  \`\`\`txt
  HTML5 \u6DFB\u52A0 data-n \u65B9\u5F0F\u4F86\u81EA\u5B9A\u7FA9\u5C6C\u6027\uFF0Cn\u53EF\u4EE5\u63DB\u6210\u81EA\u5B9A\u7FA9\u5C6C\u6027\u540D
  \u4F7F\u7528\u9019\u6A23\u7684\u7D50\u69CB\u53EF\u9032\u884C\u6578\u64DA\u5B58\u653E\uFF0C\u4E26\u4E14\u65B9\u4FBF\u597D\u7BA1\u7406
  \`\`\`

- \u5B9A\u7FA9\u65B9\u5F0F
  - html \u6A19\u7C64
    \`\`\`html
    <h2 data-weather="rain"></h2>
    <!-- \u82E5\u6709\u591A\u91CD\u540D\u8A5E\u7D44\u6210\u5247\u7528 - \u5206\u958B -->
    <h2 data-number-two="2"></h2>
    \`\`\`
  - js
    \`\`\`js
    var h2 = document.querySeletor('h2');
    h2.dataset.weather = "rain";
    // \u82E5\u6709\u591A\u91CD\u540D\u8A5E\u5247\u7528\u99DD\u5CF0\u547D\u540D\u6CD5\u66F8\u5BEB
    h2.dataset.numberTwo = '2';
    \`\`\`

- \u8B80\u53D6\u81EA\u5B9A\u7FA9\u5C6C\u6027
  - js
    \`\`\`html
    <h2 data-weather="rain" data-number-two="2"></h2>
    <script>
      var h2 = document.querySeletor('h2');
      console.log(h2.dataset.weather);// rain
      console.log(h2.dataset.numberTwo);// 2
    <\/script>
    \`\`\`
  - css
    \`\`\`html
    <style>
      h2[data-number-two="2"]{
        color: green;
      }
    </style>
    <h2 data-weather="rain" data-number-two="2"></h2>
    \`\`\`

<hr id="user-content-event-listener" style="height: 2px;">

#### <a href="#user-content-top">\u4E8B\u4EF6\u76E3\u807D</a>
#### <a href="#user-content-top">\u8868\u55AE</a>
- \u5E38\u7528\u4E8B\u4EF6\u76E3\u807D

  | \u4E8B\u4EF6\u540D | \u4E8B\u4EF6\u63CF\u8FF0 |
  | :-- | :-- |
  | onchange | \u7576\u7528\u6236\u6539\u8B8A\u5167\u5BB9(onchange => onblur) |
  | onfocus | \u7576\u5143\u7D20\u7372\u5F97\u7126\u9EDE |
  | onblur | \u7576\u5143\u7D20\u5931\u53BB\u7126\u9EDE |
  | onsubmit | \u7576\u8868\u55AE\u88AB\u63D0\u4EA4 |
  | onreset | \u7576\u8868\u55AE\u88AB\u91CD\u7F6E |
  | oninput | \u7576\u7528\u6236\u4FEE\u6539\u5167\u5BB9 |

- \u7BC4\u4F8B
  \`\`\`html
  <form id="myform">
    <p>
      \u59D3\u540D\uFF1A
      <input type="text" name="nameField">
    </p>
    <p>
      \u5E74\u9F61\uFF1A
      <input type="text" name="ageField">
    </p>
    <p>
      <input type="submit">
      <input type="reset">
    </p>
  </form>

  <script>
    var myform = document.getElementById('myform');
    var nameField = myform.nameField;
    var ageField = myform.ageField;

    nameField.onchange = function () {
      console.log('\u5DF2\u7D93\u4FEE\u6539\u5B8C\u59D3\u540D');
    };

    nameField.oninput = function () {
      console.log('\u6B63\u5728\u4FEE\u6539\u59D3\u540D');
    };

    nameField.onfocus = function () {
      console.log('\u59D3\u540D\u6846\u5F97\u5230\u7126\u9EDE');
    }

    nameField.onblur = function () {
      console.log('\u59D3\u540D\u6846\u5931\u53BB\u7126\u9EDE');
    }

    myform.onsubmit = function () {
      alert('\u6B63\u5728\u5617\u8A66\u63D0\u4EA4\u8868\u55AE');
    }

    myform.onreset = function () {
      console.log('\u8868\u55AE\u88AB\u91CD\u7F6E');
    }
  <\/script>
  \`\`\`

<hr id="user-content-event-listener-page" style="height: 1px;">

#### <a href="#user-content-top">\u9801\u9762</a>
- \u5E38\u7528\u4E8B\u4EF6\u76E3\u807D

  | \u4E8B\u4EF6\u540D | \u4E8B\u4EF6\u63CF\u8FF0 |
  | :-- | :-- |
  | onload | \u7576\u9801\u9762\u6216\u5716\u50CF\u5B8C\u6210\u52A0\u8F09 |
  | onunload | \u7576\u7528\u6236\u9000\u51FA\u9801\u9762 |

<hr id="user-content-event-listener-mouse" style="height: 1px;">

#### <a href="#user-content-top">\u9F20\u6A19</a>
- \u5E38\u7528\u4E8B\u4EF6\u76E3\u807D

  | \u4E8B\u4EF6\u540D | \u4E8B\u4EF6\u63CF\u8FF0 |
  | :-- | :-- |
  | onclick | \u9F20\u6A19\`\`\`\u55AE\u64CA\`\`\`\u67D0\u500B\u5C0D\u8C61 |
  | ondblclick | \u9F20\u6A19\`\`\`\u96D9\u64CA\`\`\`\u67D0\u500B\u5C0D\u8C61 |
  | onmousedown | \u9F20\u6A19\u5728\u67D0\u500B\u5C0D\u8C61\u88AB\`\`\`\u6309\u4E0B\`\`\` |
  | onmouseup | \u9F20\u6A19\u5728\u67D0\u500B\u5C0D\u8C61\u88AB\`\`\`\u9B06\u958B\`\`\` |
  | onmousemove | \u9F20\u6A19\u5728\u67D0\u500B\u5C0D\u8C61\`\`\`\u79FB\u52D5\`\`\` |
  | onmouseenter | \u9F20\u6A19\`\`\`\u9032\u5165\`\`\`\u67D0\u500B\u5C0D\u8C61(\u76F8\u4F3C onmouseover ) |
  | onmouseleave | \u9F20\u6A19\`\`\`\u96E2\u958B\`\`\`\u67D0\u500B\u5C0D\u8C61(\u76F8\u4F3C onmouseout ) |

- \u53D6\u5F97\u9F20\u6A19\u4F4D\u7F6E

  | \u4E8B\u4EF6\u540D | \u4E8B\u4EF6\u63CF\u8FF0 |
  | :-- | :-- |
  | clientX | \u9F20\u6A19\u6307\u91DD\u5C0D\u65BC\`\`\`\u700F\u89BD\u5668\`\`\`\u7684\`\`\`\u6C34\u5E73\`\`\`\u5EA7\u6A19(\u542B\u6EFE\u52D5\u5167\u5BB9) |
  | clientY | \u9F20\u6A19\u6307\u91DD\u5C0D\u65BC\`\`\`\u700F\u89BD\u5668\`\`\`\u7684\`\`\`\u5782\u76F4\`\`\`\u5EA7\u6A19(\u542B\u6EFE\u52D5\u5167\u5BB9) |
  | pageX | \u9F20\u6A19\u6307\u91DD\u5C0D\u65BC\`\`\`\u6574\u5F35\u7DB2\u9801\`\`\`\u7684\`\`\`\u6C34\u5E73\`\`\`\u5EA7\u6A19(\u4E0D\u542B\u6EFE\u52D5\u5167\u5BB9) |
  | pageY | \u9F20\u6A19\u6307\u91DD\u5C0D\u65BC\`\`\`\u6574\u5F35\u7DB2\u9801\`\`\`\u7684\`\`\`\u5782\u76F4\`\`\`\u5EA7\u6A19(\u4E0D\u542B\u6EFE\u52D5\u5167\u5BB9) |
  | offsetX | \u9F20\u6A19\u6307\u91DD\u5C0D\u65BC\`\`\`\u4E8B\u4EF6\u5143\u7D20\`\`\`\u7684\`\`\`\u6C34\u5E73\`\`\`\u5EA7\u6A19(\u5230\u5340\u584A\u7684\u908A\u754C) |
  | offsetY | \u9F20\u6A19\u6307\u91DD\u5C0D\u65BC\`\`\`\u4E8B\u4EF6\u5143\u7D20\`\`\`\u7684\`\`\`\u5782\u76F4\`\`\`\u5EA7\u6A19(\u5230\u5340\u584A\u7684\u908A\u754C) |

- \u7BC4\u4F8B
  \`\`\`js
  // \u756B\u51FA\u4E00\u500B\u5340\u584A
  var oBox = document.getElementById('box');
  // \u986F\u793A\u5EA7\u6A19
  var oInfo = document.getElementById('info');
  // \u4EE5\u5340\u584A\u505A\u6A19\u6E96\uFF0C\u82E5\u8D85\u904E\u5340\u584A\u5916\u5247\u5EA7\u6A19\u4E0D\u66F4\u65B0
  oBox.onmousemove = function (e) {
    oInfo.innerHTML = 
      'offsetX/Y\uFF1A' + e.offsetX + ',' + e.offsetY + '<br>'
      + 'clientX/Y\uFF1A' + e.clientX + ',' + e.clientY + '<br>'
      + 'pageX/Y\uFF1A' + e.pageX + ',' + e.pageY;
  };
  \`\`\`

<hr id="user-content-event-listener-keybored" style="height: 1px;">

#### <a href="#user-content-top">\u9375\u76E4</a>
- \u5E38\u7528\u4E8B\u4EF6\u76E3\u807D

  | \u4E8B\u4EF6\u540D | \u4E8B\u4EF6\u63CF\u8FF0 |
  | :-- | :-- |
  | onkeypress | \u7576\u9375\u76E4\u6309\u9375\u6309\u4E0B(\u7121\u6CD5\u8B58\u5225\u7CFB\u7D71\u6309\u9375\u5982\u7BAD\u982D\u9375) |
  | onkeydown | \u7576\u9375\u76E4\u6309\u9375\u6309\u4E0B(\u53EF\u8B58\u5225\u7CFB\u7D71\u9375\u4E26\u5148\u65BConkeypress\u89F8\u767C) |
  | onkeyup | \u7576\u9375\u76E4\u6309\u9375\u88AB\u9B06\u958B |

- charCode \u5B57\u7B26\u78BC
  - \`\`\`e.charCode\`\`\` \u5E38\u7528\u65BC \`\`\`onkeypress\`\`\` \u4E8B\u4EF6

  | \u5B57\u7B26 | \u5B57\u7B26\u78BC |
  | :-- | :-- |
  | \u6578\u5B57 0 ~ 9 | 48 ~ 57 |
  | \u5927\u5BEB\u5B57\u6BCD A-Z | 65 ~ 90 |
  | \u5C0F\u5BEB\u5B57\u6BCD a-z | 97 ~ 122 |

- keyCode \u9375\u78BC
  - \`\`\`e.keyCode\`\`\` \u5E38\u7528\u65BC \`\`\`onkeydown\`\`\`\u8207\`\`\`onkeyup\`\`\` \u4E8B\u4EF6

  | \u6309\u9375 | \u9375\u78BC |
  | :-- | :-- |
  | \u6578\u5B57 0 ~ 9 | 48 ~ 57 |
  | \u4E0D\u5340\u5206\u5927\u5C0F\u5BEB A-Z | 65 ~ 90 |
  | \u65B9\u5411\u9375(\u5DE6\u3001\u4E0A\u3001\u53F3\u3001\u4E0B) | 37\u300138\u300139\u300140 |
  | Enter | 13 |
  | \u7A7A\u767D\u9375 | 32 |

- \u7BC4\u4F8B
  \`\`\`html
  <input type="text" id="field1">
  <h1 id="info1"></h1>
  <input type="text" id="field2">
  <h1 id="info2"></h1>

  <script>
    var oField1 = document.getElementById('field1');
    var oInfo1 = document.getElementById('info1');
    var oField2 = document.getElementById('field2');
    var oInfo2 = document.getElementById('info2');

    // \u6CE8\u610Fonkeypress\u4E0D\u6703\u76E3\u6E2C\u7CFB\u7D71\u9375(\u5982shift}
    oField1.onkeypress = function (e) {
      oInfo1.innerText = '\u4F60\u8F93\u5165\u7684\u5B57\u7B26\u7684\u5B57\u7B26\u7801\u662F' + e.charCode;
    };

    oField2.onkeydown = function (e) {
      oInfo2.innerText = '\u4F60\u6309\u4E0B\u7684\u6309\u952E\u7684\u952E\u7801\u662F' + e.keyCode;
    };
  <\/script>
  \`\`\`

<hr id="user-content-event-listener-on-add" style="height: 1px;">

#### <a href="#user-content-top">on\u8207addEventListener</a>
- \u5192\u6CE1 \u8207 \u6355\u7372\u4E8B\u4EF6
  - \u6355\u7372\u4E8B\u4EF6\u7531 \`\`\`\u5916\u9762\`\`\` \u5230 \`\`\`\u88E1\u9762\`\`\` \u4F9D\u5E8F\u89F8\u767C
  - \u5192\u6CE1\u4E8B\u4EF6\u7531 \`\`\`\u88E1\u9762\`\`\` \u5230 \`\`\`\u5916\u9762\`\`\` \u4F9D\u5E8F\u89F8\u767C
  - \u5148\u6355\u7372\u5F8C\u5192\u6CE1
    \`\`\`txt
    \u5047\u8A2D\u6709\u4E09\u500B\u5340\u57DF
    \u7531\u5916\u5230\u5167\u5206\u5225\u70BA box1\u3001box2\u3001box3
    \u82E5\u9EDE\u64CA box3 \u5340\u57DF\u5247\u9806\u5E8F\u70BA
    box1\u6355\u7372 > box2\u6355\u7372 > box3\u6355\u7372 > 
    box3\u5192\u6CE1 > box2\u5192\u6CE1 > box1\u5192\u6CE1
    \`\`\`
  - \u5192\u6CE1\u6BD4\u5982\u6C34\u6CE2\u7D0B\u5411\u5916\u50B3\u905E\uFF0C\u6355\u7372\u5247\u76F8\u53CD
- onxxx \u4E8B\u4EF6
  - \u70BA DOM0\u7D1A\u4E8B\u4EF6\u76E3\u807D
  - \u53EA\u6703\u76E3\u807D\u5230\u5192\u6CE1\u4E8B\u4EF6
  - \u5F8C\u9762\u6703\u53D6\u4EE3\u524D\u9762\u6709\u540C\u5143\u7D20\u540C\u6A23\u7684on\u4E8B\u4EF6
- addEventListener \u4E8B\u4EF6
  - \u70BA DOM2\u7D1A\u4E8B\u4EF6\u76E3\u807D
  - \u76F8\u540C\u4E8B\u4EF6\u4E0D\u6703\u88AB\u8986\u84CB
  - onxxx \u4E8B\u4EF6\u4E0D\u7528\u52A0\u4E0A on\uFF0C\u5982 \`\`\`onclick => click\`\`\`
  - \u7B2C\u4E8C\u500B\u53C3\u6578 
    true\uFF1A\u76E3\u807D\u6355\u7372\u968E\u6BB5
    false\uFF1A\u76E3\u807D\u5192\u6CE1\u968E\u6BB5
  - \u7BC4\u4F8B
    \`\`\`js
    var oBox2 = document.getElementById('box2');
    oBox2.addEventListener('click', function() {
      console.log('click');
    }, false);
    \`\`\`
- stopPropagation \u963B\u6B62\u4E8B\u4EF6\u50B3\u64AD
  \`\`\`js
  oBtn.onclick = function (e) {
    // \u963B\u6B62\u4E8B\u4EF6\u7E7C\u7E8C\u50B3\u64AD
    e.stopPropagation();
    console.log('\u6211\u662F\u6309\u9215');
  };

  oBox.addEventListener('click', function(e) {
    // \u963B\u6B62\u4E8B\u4EF6\u7E7C\u7E8C\u50B3\u64AD
    e.stopPropagation();
    console.log('\u6211\u662F\u76D2\u5B50');
  }, true);
  \`\`\`
- preventDefault \u963B\u6B62\u9810\u8A2D\u529F\u80FD\u89F8\u767C
  \`\`\`js
  var oField = document.getElementById('field');
  oField.onkeypress = function (e) {
    console.log(e.charCode);
    if (!(e.charCode >= 48 && e.charCode <= 57 || e.charCode >= 97 && e.charCode <= 122)) {
      /*
        \u82E5\u4F7F\u7528\u8005\u4E0D\u662F\u8F38\u5165
        \u6578\u5B57 0~9\uFF0C\u5B57\u7B26\u78BC 48 ~ 57
        \u5C0F\u5BEB\u5B57\u6BCD a~z\uFF0C\u5B57\u7B26\u78BC 97 ~ 122
        \u5247\u8F38\u5165\u6846\u4E0D\u6703\u51FA\u73FE\u8A72\u5B57\u78BC\u6587\u5B57
      */
      e.preventDefault();
    }
  };
  \`\`\`

<hr id="user-content-event-listener-entrust" style="height: 1px;">

#### <a href="#user-content-top">\u4E8B\u4EF6\u59D4\u8A17</a>
- \u4F7F\u7528\u6642\u6A5F
  - \u9700\u8981\u6279\u91CF\u589E\u52A0\u76E3\u807D\u4E8B\u4EF6\uFF0C\u4F7F\u7528\u59D4\u8A17\u53EF\u6E1B\u5C11\u5167\u5B58\u958B\u92B7
  - \u7576\u6709\u52D5\u614B\u5143\u7D20\u4E0A\u5143\u7D20\u6A39\u6642\uFF0C\u6703\u81EA\u52D5\u5177\u6709\u4E8B\u4EF6\u76E3\u807D\u529F\u80FD
- target \u8207 currentTarget
  - target\uFF1A\u89F8\u767C\u4E8B\u4EF6\u6700\u65E9\u7684\u5143\u7D20\uFF0C\u5373"\u4E8B\u4EF6\u6E90\u5143\u7D20"
  - currentTarget\uFF1A\u4E8B\u4EF6\u8655\u7406\u7A0B\u5E8F\u9644\u52A0\u5230\u7684\u5143\u7D20(this)
- \u7BC4\u4F8B
  \`\`\`html
  <button id="btn">\u6309\u6211\u521B\u5EFA\u4E00\u4E2A\u65B0\u5217\u8868\u9879</button>
  <ul id="list">
    <li>\u5217\u8868\u9879</li>
    <li>\u5217\u8868\u9879</li>
    <li>\u5217\u8868\u9879</li>
  </ul>
  <script>
    var oList = document.getElementById('list');
    var oBtn = document.getElementById('btn');

    // onmouseenter \u6703\u4F7F\u8A72DOM\u7BC0\u9EDE\u89F8\u767C\u81EA\u5DF1\u7684\u4E8B\u4EF6\u4E26\u7121\u5192\u6CE1
    // \u82E5\u63DB\u6210 onmouseenter \u5C31\u6703\u4E00\u6B21\u5168\u90E8\u8B8A\u6210\u7D05\u8272
    oList.onmouseover = function (e) {
      // \u907F\u514D\u89F8\u767Cul\u4E00\u6B21\u8B8A\u7D05
      e.currentTarget.style.color = '';
      // e.target\u8868\u793A\u4F7F\u7528\u8005\u771F\u6B63\u9EDE\u64CA\u7684\u5143\u7D20
      e.target.style.color = 'red';
    };

    oBtn.onclick = function () {
      // \u5275\u5EFA\u65B0\u7684li\u5143\u7D20
      var oLi = document.createElement('li');
      // \u52A0\u5165\u5167\u5BB9
      oLi.innerText = '\u6211\u662F\u65B0\u6765\u7684';
      // \u4E0A\u6587\u6A94\u6A39
      oList.appendChild(oLi);
    };
  <\/script>
  \`\`\`

<hr id="user-content-async-statment" style="height: 1px;">

#### <a href="#user-content-top">\u7570\u6B65\u8A9E\u53E5</a>
- setInterval \u8207 clearInterval
  - setInterval 
    - \u8A2D\u5B9A\u6BCF\u9694\u4E00\u6BB5\u6642\u9593\u57F7\u884C\u51FD\u6578(\u7121\u9650\u5FAA\u74B0)
    - \u53EF\u4EE5\u63A5\u6536\u591A\u500B\u53C3\u6578\u4E26\u6309\u9806\u5E8F\u50B3\u5165\u51FD\u6578
  - clearInterval
    - \u89E3\u9664\u5B9A\u6642\u5668
  - \u7BC4\u4F8B
    \`\`\`js
    var a = 0;
    // \u7121\u8A2D\u5B9A\u53C3\u6578
    setInterval(function () {
      console.log(++a);
    }, 1000);
    // \u8A2D\u5B9A\u53C3\u6578
    var timer = setInterval(function (b, c) {
      console.log(b);// 88
      console.log(c);// 66
    }, 1000, 88, 66);
    // \u89E3\u9664\u5B9A\u6642\u5668
    clearInterval(timer);
    \`\`\`
- setTimeout \u8207 clearTimeout
  - setTimeout
    - \u9694\u4E00\u6BB5\u6642\u9593\u5F8C\u57F7\u884C\u51FD\u6578(\u53EA\u57F7\u884C\u4E00\u6B21)
    - \u4E00\u6A23\u53EF\u4EE5\u63A5\u6536\u591A\u500B\u53C3\u6578\u4E26\u6309\u9806\u5E8F\u50B3\u5165\u51FD\u6578
  - clearTimeout
    - \u89E3\u9664\u5B9A\u6642\u5668
    - \u53EA\u6709\u672A\u57F7\u884C\u51FD\u6578\u6642\u624D\u6709\u4F5C\u7528
  - \u7BC4\u4F8B
    \`\`\`js
    var btn1 = document.getElementById('btn1');
    var btn2 = document.getElementById('btn2');
    var timer;

    btn1.onclick = function () {
      timer = setTimeout(function () {
        console.log('\u4F60\u597D');
      }, 2000);
    }

    btn2.onclick = function () {
      clearTimeout(timer);
    }
    \`\`\`

<hr id="user-content-bom" style="height: 2px;">

#### <a href="#user-content-top">BOM</a>
#### <a href="#user-content-top">\u7C21\u4ECB</a>
- BOM(Browser Object Model)\u70BA\u700F\u89BD\u5668\u5C0D\u8C61\u6A21\u578B
- \u6838\u5FC3\u70BAwindow\u5C0D\u8C61\uFF0C\u5168\u5C40\u8B8A\u91CF\u8207\u51FD\u6578\u7686\u5305\u542B\u5728\u5167
- \u7A97\u53E3\u5C3A\u5BF8\u76F8\u95DC\u5C6C\u6027
  - \`\`\`innerWidth\`\`\` \u7A97\u53E3\u5167\u5BEC(\u542B\u6EFE\u52D5\u689D)
  - \`\`\`innerHeight\`\`\` \u7A97\u53E3\u5167\u9AD8(\u542B\u6EFE\u52D5\u689D)
  - \`\`\`outerWidth\`\`\` \u7A97\u53E3\u5916\u5BEC(\u542B\u6EFE\u52D5\u689D\u8207\u700F\u89BD\u5668\u908A\u6846)
  - \`\`\`outerHeight\`\`\` \u7A97\u53E3\u5916\u9AD8(\u542B\u6EFE\u52D5\u689D\u8207\u700F\u89BD\u5668\u908A\u6846)
  - \`\`\`document.documentElement.clientWidth\`\`\` \u7A97\u53E3\u5167\u5BEC(\u4E0D\u542B\u6EFE\u52D5\u689D)
  - \`\`\`document.documentElement.clientHeight\`\`\` \u7A97\u53E3\u5167\u9AD8(\u4E0D\u542B\u6EFE\u52D5\u689D)
  - \`\`\`scrollTop\`\`\` \u8207 \`\`\`scrollY\`\`\` \u4EE3\u8868\u5DF2\u6372\u52D5\u7684\u9577\u5EA6
    - \`\`\`document.documentElement.scrollTop\`\`\` \u53EF\u8B80\u53EF\u5BEB
    - \`\`\`window.scrollY\`\`\` \u53EA\u80FD\u8B80\u53D6
    - \u5E38\u7528\u5BEB\u6CD5
      \`\`\`js
      var scrollTop = 
          window.scrollY || 
          document.documentElement.scrollTop;
      \`\`\`
- resize \u4E8B\u4EF6
  - \u7576\u7A97\u53E3\u6539\u8B8A\u5927\u5C0F\u6642\u89F8\u767C
  - \u7BC4\u4F8B
    \`\`\`js
    window.onresize = function () {
      var root = document.documentElement;
      console.log(
        '\u7A97\u53E3\u6539\u8B8A\u5C3A\u5BF8\u4E86',
        root.clientWidth,
        root.clientHeight
      );
    };
    \`\`\`
- scroll \u4E8B\u4EF6
  - \u7576\u7A97\u53E3\u6EFE\u52D5\u6642\u89F8\u767C
  - \u7BC4\u4F8B
    \`\`\`js
    window.onscroll = function () {
      console.log('\u7A97\u53E3\u6372\u52D5\u4E86', window.scrollY);
    };
    \`\`\`
- hasOwnProperty \u67E5\u770B\u5C6C\u6027\u662F\u5426\u5B58\u5728
  \`\`\`js
  var a = 3;
  console.log(window.hasOwnProperty('a')); // true
  console.log(window.a);  // 3
  \`\`\`

<hr id="user-content-history" style="height: 2px;">

#### <a href="#user-content-top">History \u5C0D\u8C61</a>
- window.history \u5C0D\u8C61\u63D0\u4F9B\u64CD\u4F5C\u700F\u89BD\u5668\u6703\u8A71\u6B77\u53F2\u7684\u63A5\u53E3
- \u5E38\u7528\u529F\u80FD\u5982\u4E0B
  - \`\`\`history.back()\`\`\` \u7B49\u65BC\u700F\u89BD\u5668\u56DE\u9000\u6309\u9215
  - \`\`\`history.go(-1)\`\`\` \u7B49\u540C\u65BC \`\`\`history.back()\`\`\`
- \u7BC4\u4F8B
  \`\`\`js
  /*
    go(-1)\u8868\u793A\u52A0\u8F7D\u4E0A\u4E00\u500B\u9801\u9762
    go(1)\u8868\u793A\u52A0\u8F09\u4E0B\u4E00\u500B\u9801\u9762
    back()\u8868\u793A\u52A0\u8F7D\u4E0A\u4E00\u500B\u9801\u9762
  */
  var btn = document.getElementById('btn');
  btn.onclick = function () {
    // history.back();
    history.go(-1);
  };
  \`\`\`

<hr id="user-content-location" style="height: 2px;">

#### <a href="#user-content-top">Location \u5C0D\u8C61</a>
- window.location \u6A19\u793A\u7576\u524D\u6240\u5728\u7DB2\u5740
- \u53EF\u900F\u904E\u8A72\u5C6C\u6027\u8CE6\u503C\u4F7F\u700F\u89BD\u5668\u8DF3\u8F49
  - \`\`\`window.location = 'https://www.google.com';\`\`\`
  - \`\`\`window.location.href = 'https://www.google.com';\`\`\`
- search \u5C6C\u6027
  - \u53EF\u4EE5\u53D6\u5F97get\u8ACB\u6C42\u7684\u67E5\u8A62\u53C3\u6578
  - \u7BC4\u4F8B
    \`\`\`js
    // \u82E5\u7DB2\u5740\u70BA: https://www.google.com?a=1&b=2
    console.log(window.location.search);// "?a=1&b=2"
    \`\`\`

<hr id="user-content-navigator" style="height: 2px;">

#### <a href="#user-content-top">Navigator \u5C0D\u8C61</a>
- navigator \u5C0D\u8C61\u5177\u6709\u4F7F\u7528\u8005\u6B64\u6B21\u6D3B\u52D5\u7684\u700F\u89BD\u5668\u76F8\u95DC\u5C6C\u6027\u8207\u6A19\u8B58
- \u6709\u4EE5\u4E0B\u5E7E\u500B\u5E38\u7528\u5C6C\u6027
  - \`\`\`navigator.language\`\`\` \u700F\u89BD\u5668\u8A2D\u5B9A\u7684\u8A9E\u7CFB
  - \`\`\`navigator.cookieEnabled\`\`\` \u700F\u89BD\u5668cookie\u529F\u80FD\u662F\u5426\u958B\u555F
  - \`\`\`navigator.javaEnabled()\`\`\` \u700F\u89BD\u5668\u662F\u5426\u5141\u8A31 Java \u7A0B\u5F0F
  - \`\`\`navigator.appName\`\`\` \u700F\u89BD\u5668\u5B98\u65B9\u540D\u7A31
  - \`\`\`navigator.appVersion\`\`\` \u700F\u89BD\u5668\u7248\u672C
  - \`\`\`navigator.userAgent\`\`\` \u700F\u89BD\u5668\u5B8C\u6574\u7684\u7248\u672C\u8CC7\u8A0A
  - \`\`\`navigator.platform\`\`\` \u7528\u6236\u64CD\u4F5C\u7CFB\u7D71
  - \`\`\`navigator.vendor\`\`\` \u700F\u89BD\u5668\u5EE0\u5546\u540D\u7A31

<hr id="user-content-offsettop" style="height: 2px;">

#### <a href="#user-content-top">offsetTop \u5C6C\u6027</a>
- \u8A08\u7B97\u8A72\u5143\u7D20\u5230\u4E0A\u908A\u754C\u7684\u8DDD\u96E2
- \u82E5\u7236\u5C64\u6709\u5B9A\u4F4D\u5247\u8A08\u7B97\u5230\u7236\u5143\u7D20\u7684\u908A\u754C
- \u7BC4\u4F8B
  \`\`\`html
  <style>
    #box {
      width: 400px;
      height: 400px;
      margin: 60px auto;
      border: 4px solid red;
    }

    ul {
      padding-top: 10px;
    }

    li {
      padding-top: 10px;
    }

    #para {
      width: 80px;
      height: 80px;
      background-color: orange;
    }
  </style>
  </head>

  <body>
    <div id="box">
      <ul>
        <li>
          <p id="para"></p>
        </li>
      </ul>
    </div>
    <script>
      var para = document.getElementById('para');
      // \u8A08\u7B97top\u503C
      // \u82E5 #box  \u52A0 position \u5C6C\u6027\u5247\u8F38\u51FA 20
      //        \u6C92\u52A0 position \u5C6C\u6027\u5247\u8F38\u51FA 84
      console.log(para.offsetTop);
    <\/script>
  </body>
  \`\`\`

<hr id="user-content-object-based" style="height: 4px;">

### \u57FA\u65BC\u5C0D\u8C61\u3001\u6B63\u5247\u8868\u9054\u5F0F
#### <a href="#user-content-top">\u57FA\u65BC\u5C0D\u8C61</a>
#### <a href="#user-content-top">\u7C21\u4ECB</a>
- \u9762\u5411\u5C0D\u8C61\u8207\u57FA\u65BC\u5C0D\u8C61\u5DEE\u5225
  - \u57FA\u65BC\u5C0D\u8C61(object-based)
    - \u57FA\u65BC\u5C0D\u8C61\u7684\u8A9E\u8A00\u652F\u6301\u5C0D\u8C61\u548C\u5C01\u88DD\u7684\u4F7F\u7528\u3002
    - \u5B83\u5011\u4E0D\u652F\u6301\u7E7C\u627F\u6216\u591A\u614B\u6027\u6216\u5169\u8005\u3002
    - \u57FA\u65BC\u5C0D\u8C61\u7684\u8A9E\u8A00\u4E0D\u652F\u6301\u5167\u7F6E\u5C0D\u8C61\u3002
  - \u9762\u5411\u5C0D\u8C61(object-oriented)
    - \u9762\u5411\u5C0D\u8C61\u8A9E\u8A00\u652F\u6301 Oops \u7684\u6240\u6709\u7279\u6027\uFF0C\u5305\u62EC\u7E7C\u627F\u548C\u591A\u614B\u3002
    - \u5B83\u5011\u652F\u6301\u5167\u7F6E\u5C0D\u8C61\u3002

<hr id="user-content-about-object" style="height: 2px;">

#### <a href="#user-content-top">\u95DC\u65BC\u5C0D\u8C61</a>
- \u5C0D\u8C61\u57FA\u672C\u4F7F\u7528
  \`\`\`js
  var xiaoming = {
    name: '\u5C0F\u660E',
    age: 12,
    sex: '\u7537',
    hobbies: ['\u8DB3\u7403', '\u7F16\u7A0B'],
    // \u4E0D\u7B26\u5408\u547D\u540D\u898F\u7BC4\u9808\u4EE5\u5F15\u865F\u5305\u88F9
    'favorite-book': '\u8212\u514B\u548C\u8D1D\u5854'
  };

  console.log(xiaoming.name);// \u5C0F\u660E
  console.log(xiaoming.age);// 12
  console.log(xiaoming.sex);// \u7537
  console.log(xiaoming.hobbies);// (2)\xA0['\u8DB3\u7403', '\u7F16\u7A0B']
  // \u4E0D\u7B26\u5408\u547D\u540D\u898F\u7BC4\u9808\u7528\u65B9\u62EC\u865F\u53D6\u503C
  console.log(xiaoming['favorite-book']);

  var key = 'sex';
  // \u5982\u679C\u7528\u8B8A\u91CF\u4F86\u547C\u53EB\u5C0D\u8C61\u5247\u9808\u7528\u65B9\u62EC\u865F
  console.log(xiaoming[key]);
  // \u5C0D\u8C61\u662F\u5F15\u7528\u985E\u578B\u503C
  // \u4F8B\u5B501
  var obj1 = {
    a: 1, b: 2, c: 3
  };
  var obj2 = {
    a: 1, b: 2, c: 3
  };
  console.log(obj1 == obj2); // false
  console.log(obj1 === obj2);// false
  console.log({} == {});     // false
  console.log({} === {});    // false
  // \u4F8B\u5B502
  var obj3 = {
    a: 10
  };
  var obj4 = obj3;
  obj3.a++;
  console.log(obj4);// {a: 11}
  \`\`\`

- \u5305\u88DD\u985E
  - \u8B93\u57FA\u672C\u985E\u578B\u503C\u53EF\u4EE5\u5F9E\u5B83\u5011\u7684\u69CB\u9020\u51FD\u6578prototype\u4E0A\u7372\u5F97\u65B9\u6CD5
  - \u7BC4\u4F8B
    \`\`\`js
    var a = new Number(123);
    var b = new String('test');
    var c = new Boolean(true);

    // \u5305\u88DD\u5F8C\u6703\u8B8A\u70BA\u5C0D\u8C61
    console.log(typeof a);// object
    console.log(typeof b);// object
    console.log(typeof c);// object
    console.log(5 + a);// 128
    console.log(b.slice(0, 2));// 'te'
    console.log(c && true);// true

    var d = 123;
    console.log(d.__proto__ == Number.prototype);// true
    var e = 'test';
    console.log(e.__proto__ == String.prototype);// true

    // \u67E5\u770B\u81EA\u5DF1\u662F\u5426\u64C1\u6709\u8A72\u65B9\u6CD5
    console.log(String.prototype.hasOwnProperty('toLowerCase'));// true
    console.log(String.prototype.hasOwnProperty('slice'));// true
    console.log(String.prototype.hasOwnProperty('substr'));// true
    console.log(String.prototype.hasOwnProperty('substring'));// true
    \`\`\`

- \u5C0D\u8C61\u65B9\u6CD5
  \`\`\`js
  // \u8A2D\u7F6E\u5C0D\u8C61\u7684\u65B9\u6CD5
  var xiaoming = {
    name: '\u5C0F\u660E',
    age: 12,
    sex: '\u7537',
    sayHello: function () {
      console.log(this.sex);
    },
    sleep: function () {
      console.log('sleep');
    }
  };
  // \u8ABF\u7528\u5C0D\u8C61\u7684\u65B9\u6CD5
  xiaoming.sayHello();
  \`\`\` 

- \u6DFA\u514B\u9686\u8207\u6DF1\u514B\u9686
  - \u6DFA\u514B\u9686
    \`\`\`js
    var obj1 = {
      a: 1,
      b: 2,
      c: [44, 55, 66]
    };

    // \u5BE6\u73FE\u6DFA\u514B\u9686
    var obj2 = {};
    for (var k in obj1) {
      obj2[k] = obj1[k];
    }
    console.log(obj1.c == obj2.c);// true \u8B49\u660E\u4E86\u6578\u7D44\u70BA\u540C\u4E00\u500B\u5C0D\u8C61
    \`\`\`
  - \u6DF1\u514B\u9686
    \`\`\`js
    function deepClone(o) {
      var result
      // \u5224\u65AD\u662F\u5C0D\u8C61\u9084\u662F\u6578\u7D44
      if (Array.isArray(o)) {
        // \u6578\u7D44
        result = [];
        for (var i = 0; i < o.length; i++) {
          result.push(deepClone(o[i]));
        }
      } else if (typeof o == 'object') {
        // \u56E0\u70BAtypeof\u6578\u7D44\u6703\u986F\u793Aobject\uFF0C\u6240\u4EE5\u8981\u5148\u5224\u65B7\u662F\u5426\u70BA\u6578\u7D44\u624D\u80FD\u5224\u65B7\u5C0D\u8C61)
        result = {};
        for (var k in o) {
          result[k] = deepClone(o[k]);
        }
      } else {
        // \u57FA\u672C\u7C7B\u578B\u503C
        result = o;
      }
      return result;
    }
    \`\`\`

- \u5C0D\u8C61\u5C6C\u6027\u65B0\u589E\u4FEE\u6539\u8207\u522A\u9664
  \`\`\`js
  var obj = {
    a: 10,
    b: 20
  };

  // \u4FEE\u6539\u5C6C\u6027
  obj.b = 40;
  obj.b++;
  console.log(obj.b);

  // \u65B0\u589E\u5C6C\u6027
  obj.c = 60;
  console.log(obj);

  // \u5220\u9664\u5C6C\u6027
  delete obj.a;
  console.log(obj);
  \`\`\`

<hr id="user-content-constructor-object" style="height: 2px;">

#### <a href="#user-content-top">\u69CB\u9020\u51FD\u6578\u8207\u5C0D\u8C61</a>
\`\`\`js
// \u901A\u5E38\u7FD2\u6163\u5C07\u9996\u5B57\u6BCD\u5927\u5BEB\u7684\u51FD\u6578\u5B9A\u7FA9\u70BA\u69CB\u9020\u51FD\u6578(\u65B9\u4FBF\u8FA8\u8A8D)
function People(name, age, sex) {
  this.name = name;
  this.age = age;
  this.sex = sex;
  this.sayHello = function () {
    console.log('\u4F60\u597D\uFF0C\u6211\u662F' + this.name);
  };
  // \u4E0D\u7BA1\u6709\u7121return\u90FD\u6703\u8FD4\u56DE this(\u5C0D\u8C61)
}
// \u7528new\u95DC\u9375\u5B57\u521D\u59CB\u5275\u5EFA\u5C0D\u8C61:{}
var test1 = new People('\u5C0F\u660E', 12, '\u7537');
// {name: '\u5C0F\u660E', age: 12, sex: '\u7537', sayHello: \u0192}
console.log(test1);
test1.sayHello();
\`\`\`

<hr id="user-content-object-prototype" style="height: 2px;">

#### <a href="#user-content-top">\u539F\u578B\u539F\u578B\u93C8</a>
- prototype\u7684\u4F7F\u7528\u8207\u7701\u5167\u5B58
  \`\`\`js
  // \u82E5\u65B9\u6CD5\u5BEB\u5728\u51FD\u6578\u672C\u8EAB\u88E1\u9762\u5247\u5BE6\u4F8B\u5316\u4E00\u500B\u5C0D\u8C61\u5C31\u6703\u591A\u4F54\u4E00\u6B21\u5167\u5B58
  function People(name, age, sex) {
    this.name = name;
    this.age = age;
    this.sex = sex;
  }
  // \u5C07\u65B9\u6CD5\u5BEB\u5728\u539F\u578B\u4E0A\u5C31\u4E0D\u6703\u56E0\u5BE6\u4F8B\u5316\u800C\u4F54\u5167\u5B58
  People.prototype.sayHello = function () {
    console.log('\u4F60\u597D\uFF0C\u6211\u662F' + this.name);
  }
  People.prototype.growup = function () {
    this.age++;
  }
  // \u4E5F\u53EF\u4EE5\u5F80\u539F\u578B\u4E0A\u65B0\u589E\u5C6C\u6027
  People.prototype.nationality = '\u7F8E\u570B';
  var test1 = new People('\u5C0F\u660E', 12, '\u7537');
  var test2 = new People('\u5C0F\u7EA2', 11, '\u5973');
  // \u67E5\u627E\u8A72\u5C6C\u6027\u662F\u5426\u5B58\u5728
  'nationality' in test1;// true

  // \u56E0\u51FD\u6578\u70BA\u5F15\u7528\u985E\u578B\u53EF\u4EE5\u89C0\u5BDF\u662F\u5426\u8ABF\u7528\u540C\u4E00\u500B\u65B9\u6CD5
  // \u82E5\u65B9\u6CD5\u653E\u5728\u51FD\u6578\u5167\u90E8\u6703\u56E0\u5BE6\u4F8B\u5316\u800C\u8ABF\u7528\u8A72\u5BE6\u4F8B\u65B9\u6CD5: false
  console.log(test1.sayHello === test2.sayHello);//true
  console.log(test1.__proto__.sayHello === test2.__proto__.sayHello);// true
  \`\`\`

- \u5BE6\u73FE\u7E7C\u627F
  \`\`\`js
  // \u5275\u5EFA\u7236\u985E
  function People(name, age, sex) {
    this.name = name;
    this.age = age;
    this.sex = sex;
  }
  // \u5C07\u65B9\u6CD5\u5BEB\u5728\u539F\u578B\u4E0A\u5C31\u4E0D\u6703\u56E0\u5BE6\u4F8B\u5316\u800C\u4F54\u5167\u5B58
  People.prototype.sayHello = function () {
    console.log('\u4F60\u597D\uFF0C\u6211\u662F' + this.name);
  }
  People.prototype.sleep = function () {
    console.log(this.name + '\u7761\u89BA\uFF0Czzzzz');
  };
  // \u5B50\u985E(\u9808\u542B\u6709\u7236\u985E\u6240\u6709\u53C3\u6578\uFF0C\u82E5\u6F0F\u6389\u5176\u4E2D\u4E00\u500B\u5C31\u4F7F\u7528\u7236\u985Eprototype\u65B9\u6CD5\u6703\u62B1\u932F)
  function Student(name, age, sex, school, studentNumber) {
    this.name = name;
    this.age = age;
    this.sex = sex;
    this.school = school;
    this.studentNumber = studentNumber;
  }
  // ***\u7528\u5B50\u985E\u539F\u578B\u7E7C\u627F\u7236\u985E(\u7E7C\u627F\u4E0D\u9700\u586B\u53C3\u6578)***
  Student.prototype = new People();
  // \u8986\u5BEB\uFF08override\uFF09\u7236\u985E\u65B9\u6CD5
  Student.prototype.sayHello = function () {
    console.log('\u4F60\u597D\u6211\u662F' + this.name);
  }
  // \u5BE6\u4F8B\u5316
  var test = new Student('test', 29, '\u7537', '\u5B78\u6821', 100556);
  // \u547C\u53EB\u4F7F\u7528\u7236\u985E\u65B9\u6CD5
  test.sleep();// test\u7761\u89BA\uFF0Czzzzz
  // \u53E6\u5916\u82E5\u6709\u586B\u53C3\u6578\uFF0C\u5275\u5EFA\u7684Student\u5C0D\u8C61\u4E5F\u4E0D\u6703\u4F7F\u7528
  Student.prototype = new People('test2',20,'yyy');
  var test = new Student();
  test.sleep();// undefined\u7761\u89BA\uFF0Czzzzz
  test.__proto__.sleep();// test2\u7761\u89BA\uFF0Czzzzz

  /*
    \u6574\u9AD4\u7E7C\u627F\u6D41\u7A0B
    1.\u5275\u5EFA\u7236\u985E(\u7236\u985E\u7684prototype\u82E5\u7121\u7E7C\u627F\u5247\u70BAobject)
    2.\u5275\u5EFA\u7236\u985E\u5BE6\u4F8B
    3.\u5275\u5EFA\u5B50\u985E
    4.\u5C07\u5B50\u985E\u7684prototype\u6307\u5411\u7236\u985E\u5BE6\u4F8B(\u5F62\u6210\u7E7C\u627F)

    \u4EE5\u4E0A\u5B8C\u6210\u6703\u5F62\u6210\u4EE5\u4E0B\u4E09\u89D2\u95DC\u4FC2
                prototype
      \u5B50\u985E ---------------> \u7236\u985E\u5BE6\u4F8B
        \uFF3C <--------------    \uFF0F
          \uFF3C   constructor  \uFF0F
      new   \uFF3C            \uFF0F __proto__
              \uFF3C        \uFF0F
                \u5B50\u985E\u5BE6\u4F8B
    \u5B50\u985E\u5BE6\u4F8B.__proto__ \u7B49\u65BC \u5B50\u985E.prototype \u7B49\u65BC \u7236\u985E\u5BE6\u4F8B
    \u5B50\u985E\u5BE6\u4F8B.__proto__.constructor \u7B49\u65BC \u5B50\u985E
    \u5B50\u985E.prototype.constructor \u7B49\u65BC \u5B50\u985E
  */
  \`\`\`

- \u539F\u578B\u93C8\u7D42\u9EDE
  \`\`\`js
  function People(name, age) {
    this.name = name;
    this.age = age;
  }
  var test = new People('test', 12);
  console.log(test.__proto__.__proto__ === Object.prototype);// true
  // \u900F\u904EObject\u539F\u578B\u67E5\u627E\u53EF\u767C\u73FE\u7121\u4E0A\u5C64\u7E7C\u627F
  console.log(Object.prototype.__proto__);// null
  \`\`\`

- hasOwnProperty\u65B9\u6CD5 \u8207 in\u95DC\u9375\u5B57 \u4F7F\u7528
  \`\`\`js
  function People(name, age, sex) {
    this.name = name;
    this.age = age;
    this.sex = sex;
  }
  // \u5F80\u539F\u578B\u4E0A\u52A0\u5165nationality\u5C6C\u6027
  People.prototype.nationality = '\u7F8E\u570B';
  var test = new People('test', 12, '\u7537');

  // hasOwnProperty \u53EA\u6703\u5C0B\u627E\u81EA\u5DF1\u662F\u5426\u542B\u6709\u8A72\u5C6C\u6027\u4E0D\u542B\u539F\u578B\u5C6C\u6027
  console.log(test.hasOwnProperty('name'));// true
  console.log(test.hasOwnProperty('age'));// true
  console.log(test.hasOwnProperty('sex'));// true
  console.log(test.hasOwnProperty('nationality'));// false

  // in \u6703\u5C0B\u627E\u81EA\u5DF1\u8207\u539F\u578B\u662F\u5426\u542B\u6709\u8A72\u5C6C\u6027
  console.log('name' in test);// true
  console.log('age' in test);// true
  console.log('sex' in test);// true
  console.log('nationality' in test);// true
  \`\`\`

<hr id="user-content-object-context" style="height: 2px;">

#### <a href="#user-content-top">\u4E0A\u4E0B\u6587\u898F\u5247\u8207\u4F7F\u7528</a>
- \u4E0A\u4E0B\u6587\u898F\u52471
  - \`\`\`\u5C0D\u8C61.\u65B9\u6CD5()\`\`\` \u4E0A\u4E0B\u6587\u662F \`\`\`\u6B64\u5C0D\u8C61\`\`\`
  - \u7BC4\u4F8B
    \`\`\`js
    function fun(){
      return this.a + this.b;
    }
    var a = 1;
    var b = 2;
    var obj = {
      a: 3,
      b: 3,
      fun: fun
    }
    console.log(obj.fun());// 6 => obj.a + obj.b
    \`\`\`

- \u4E0A\u4E0B\u6587\u898F\u52472
  - \`\`\`\u51FD\u6578()\`\`\` \u4E0A\u4E0B\u6587\u662F \`\`\`window\u5C0D\u8C61\`\`\`
  - \u7BC4\u4F8B
    \`\`\`js
    function fun(){
      return this.a + this.b;
    }
    var a = 1;
    var b = 2;
    var obj = {
      a: 3,
      b: fun(),
      fun: fun
    }
    console.log(obj.b);// 3 => window.a + window.b 
    \`\`\`

- \u4E0A\u4E0B\u6587\u898F\u52473
  - \`\`\`\u6578\u7D44\u6216\u985E\u6578\u7D44argument[index]()\`\`\` \u4E0A\u4E0B\u6587\u662F \`\`\`\u6B64\u6578\u7D44(\u985E\u6578\u7D44)\`\`\`
  - \u7BC4\u4F8B
    \`\`\`js
    var arr = ['A','B','C',function(){console.log(this[0])}];
    console.log(arr[3]());// 'A'
    \`\`\`
- \u4E0A\u4E0B\u6587\u898F\u52474
  - \`\`\`IIFE (function(){})()\`\`\` \u4E0A\u4E0B\u6587\u662F \`\`\`window\u5C0D\u8C61\`\`\`
  - \u7BC4\u4F8B
    \`\`\`js
    var a = 1;
    var obj = {
      a: 2,
      fun: (function(){
        var a = this.a;
        console.log(this.a);// 1 => window.a
        return function(){
          console.log(a);// 1 => \u9589\u5305\u7279\u6027
        }
      })()
    }
    \`\`\`

- \u4E0A\u4E0B\u6587\u898F\u52475
  - \`\`\`setTimeout setInterval\`\`\` \u4E0A\u4E0B\u6587\u662F \`\`\`window\u5C0D\u8C61\`\`\`
  - \u7BC4\u4F8B
    \`\`\`js
    var a = 1;
    setTimeout(function(){
      var a = 2;
      console.log(this.a);// 1
      console.log(a);// 2
    },1000)
    \`\`\`

- \u4E0A\u4E0B\u6587\u898F\u52476
  - \`\`\`Dom\u5143\u7D20.onclick=function(){} \`\`\` \u4E0A\u4E0B\u6587\u662F \`\`\`Dom\u5143\u7D20\`\`\`
  - \u7BC4\u4F8B
    \`\`\`html
    <div id="test">test</div>
    <script>
      var test = document.getElementById("test");
      test.onclick = function(){
        console.log(this);// <div id="test">test</div>
      }
    <\/script>
    \`\`\`

<hr id="user-content-call-apply" style="height: 2px;">

#### <a href="#user-content-top">call \u8207 apply</a> 
\`\`\`js
function sum(b1, b2) {
  console.log(this.c + this.m + this.e + b1 + b2);
};

var xiaoming = {
  c: 100,
  m: 90,
  e: 80
};

// call & apply \u90FD\u53EF\u4EE5\u5E36\u5165\u4E0A\u4E0B\u6587
sum.call(xiaoming, 3, 5);// call \u9700\u8981\u4F7F\u7528\u9017\u865F
sum.apply(xiaoming, [3, 5]);// apply \u9700\u8981\u4F7F\u7528\u6578\u7D44
\`\`\`

<hr id="user-content-object-assign" style="height: 2px;">

#### <a href="#user-content-top">Object.assign</a>
- \u5408\u4F75\u5230\u7B2C\u4E00\u500B\u53C2\u6578\u4E2D\uFF0C\u8FD4\u56DE\u5408\u4F75\u5F8C\u7684\u7B2C\u4E00\u500B\u53C3\u6578\u5C0D\u8C61
- \u8A9E\u6CD5 \`\`\`Object.assign(\u76EE\u6A19\u5C0D\u8C61, \u6E90\u5C0D\u8C611, \u6E90\u5C0D\u8C612,...): \u76EE\u6A19\u5C0D\u8C61\`\`\`
- \u82E5\u8981\u8FD4\u56DE\u4E00\u500B\u65B0\u5C0D\u8C61\u5247\u7B2C\u4E00\u500B\u53C3\u6578\u653E\u5165\u7A7A\u5C0D\u8C61
- \u57FA\u672C\u7528\u6CD5
  \`\`\`js
  const apple = {
    color: '\u7EA2\u8272',
    shape: '\u5713\u5F62',
    taste: '\u751C'
  };
  const pen = {
    color: '\u9ED1\u8272',
    shape: '\u5713\u67F1\u5F62',
    use: '\u5BEB\u5B57'
  };
  // \u5F8C\u9762\u6703\u8986\u84CB\u524D\u9762\u5C6C\u6027\u7684\u503C
  // {color: "\u9ED1\u8272", shape: "\u5713\u67F1\u5F62", taste: "\u751C", use: "\u5BEB\u5B57"}
  console.log(Object.assign(apple, pen));
  console.log(apple === Object.assign(apple, pen));// true
  \`\`\`
- \u6CE8\u610F\u4E8B\u9805
  - \u57FA\u672C\u6578\u64DA\u6703\u5148\u8F49\u63DB\u70BA\u5C0D\u8C61\u5728\u5408\u4F75
    \`\`\`js
    console.log(Object.assign({}, undefined));// {}
    console.log(Object.assign({}, null));// {}
    console.log(Object.assign({}, 1));// {}
    console.log(Object.assign({}, true));// {}
    console.log(Object.assign({}, 'str'));// {0: "s", 1: "t", 2: "r"}
    \`\`\`

<hr id="user-content-object-keys-values-entries" style="height: 2px;">

#### <a href="#user-content-top">Object.keys\u3001Object.values\u3001Object.entries</a>
- \u57FA\u672C\u7528\u6CD5
  \`\`\`js
  const person = {
    name: 'test',
    age: 18
  };

  console.log(Object.keys(person));// (2)\xA0['name', 'age']
  console.log(Object.values(person));// (2)\xA0['test', 18]
  console.log(Object.entries(person));// (2)\xA0[Array(2), Array(2)]
  \`\`\`
- \u8207\u6578\u7D44\u65B9\u6CD5\u7684\u5340\u5225
  - \u5C0D\u8C61\u7684 keys()\u3001values()\u3001entries() \u662F\u69CB\u9020\u51FD\u6578\u4E26\u8FD4\u56DE\u6578\u7D44
  - \u6578\u7D44\u7684 keys()\u3001values()\u3001entries() \u662F\u5BE6\u4F8B\u65B9\u6CD5\u4E26\u8FD4\u56DE Iterator

<hr id="user-content-object-date" style="height: 2px;">

#### <a href="#user-content-top">Date \u5C0D\u8C61</a>
- \u5275\u5EFA\u65E5\u671F\u5C0D\u8C61
  \`\`\`js
  // \u53C3\u6578\u4E0D\u52A0\u5247\u53D6\u5F97\u4ECA\u5929\u6B64\u65F6\u6B64\u523B\u7684\u65E5\u671F\u5BF9\u8C61
  var d1 = new Date();
  // Mon Oct 04 2021 17:20:18 GMT+0800 (\u53F0\u5317\u6A19\u6E96\u6642\u9593)
  console.log(d1);
  console.log(typeof d1);// object
  // \u5F97\u5230\u516D\u6708\u4E00\u65E5
  var d2 = new Date(2020, 5, 1);      // \u4E0D\u7B97\u6642\u5340
  var d3 = new Date('2020-06-01');    // \u7B97\u6642\u5340\uFF0C8\u9EDE
  // Mon Jun 01 2020 00:00:00 GMT+0800 (\u53F0\u5317\u6A19\u6E96\u6642\u9593)
  console.log(d2);
  // Mon Jun 01 2020 08:00:00 GMT+0800 (\u53F0\u5317\u6A19\u6E96\u6642\u9593)
  console.log(d3);
  \`\`\`

- \u65E5\u671F\u5C0D\u8C61\u65B9\u6CD5
  \`\`\`js
  var d = new Date();
  console.log('\u65E5\u671F', d.getDate());// 1~31
  console.log('\u661F\u671F', d.getDay());// 0~6(0=\u661F\u671F\u5929)
  console.log('\u5E74\u4EFD', d.getFullYear());
  console.log('\u6708\u4EFD', d.getMonth() + 1);// 1~12
  console.log('\u5C0F\u6642', d.getHours());// 0~23
  console.log('\u5206\u9418', d.getMinutes());// 0~59
  console.log('\u79D2\u6578', d.getSeconds());// 0~59
  \`\`\`

- \u6642\u9593\u6233
  \`\`\`js
  // \u65E5\u671F\u5C0D\u8C61
  var d = new Date();
  // \u53D6\u5F97\u6642\u9593\u6233\u7684\u5169\u7A2E\u65B9\u6CD5\u3002\u6642\u9593\u6233\u8868\u793A1970\u5E741\u67081\u65E5\u8DDD\u96E2\u6B64\u6642\u7684\u6BEB\u79D2\u6578
  var timestamp1 = d.getTime();// \u7CBE\u786E\u5230\u6BEB\u79D2
  var timestamp2 = Date.parse(d);// \u7CBE\u786E\u5230\u79D2\uFF0C\u986F\u793A\u6BEB\u79D2\uFF0C\u4F46\u6700\u5F8C\u4E09\u4F4D\u4E00\u5B9A\u662F000
  // \u5C07\u65F6\u95F4\u6233\u8B8A\u56DE\u65E5\u671F\u5C0D\u8C61
  var dd = new Date(1601536565000);
  // Thu Oct 01 2020 15:16:05 GMT+0800 (\u53F0\u5317\u6A19\u6E96\u6642\u9593)
  console.log(dd);
  console.log(dd.getFullYear());// 2020
  \`\`\`

<hr id="user-content-object-math" style="height: 2px;">

#### <a href="#user-content-top">Math \u5C0D\u8C61</a> 
- \u56DB\u6368\u4E94\u5165
  \`\`\`js
  console.log(Math.round(3.49));// 3
  console.log(Math.round(3.51));// 4
  // \u9032\u4F4D\u5230\u5C0F\u6578\u9EDE\u5F8C\u9762\u7B2C\u4E8C\u4F4D
  var a = 3.7554;
  console.log(Math.round(a * 100) / 100);// 3.76
  \`\`\`

- \u96A8\u6A5F\u6578
  \`\`\`js
  // 0 ~ 1(\u5305\u542B 0\uFF0C\u4E0D\u5305\u542B1)
  console.log(Math.random());
  // \u5982\u679C\u8981\u751F\u6210[a, b]\u4E4B\u5185\u7684\u6574\u6578\uFF0C\u5C31\u8981\u4F7F\u7528\u516C\u5F0F
  // parseInt(Math.random() * (b - a + 1)) + a
  // [3, 8]
  console.log(parseInt(Math.random() * 6) + 3);
  \`\`\`

- \u6700\u5927\u8207\u6700\u5C0F\u6578
  \`\`\`js
  console.log(Math.max(44, 55, 33, 22));// 55
  console.log(Math.min(44, 55, 33, 22));// 22
  var arr = [3, 4, 4, 3, 2, 2, 1, 3, 5, 7, 4, 3];
  console.log(Math.max.apply(null, arr));// 7
  \`\`\`

<hr id="user-content-regexp" style="height: 4px;">

#### <a href="#user-content-top">\u6B63\u5247\u8868\u9054\u5F0F</a> 
#### <a href="#user-content-top">\u5275\u5EFA\u8207\u4F7F\u7528</a>
- \u5275\u5EFA\u8868\u9054\u5F0F
  \`\`\`js
  // \u5275\u5EFA\u6B63\u5247\u8868\u9054\u5F0F\u65B9\u6CD51(\u80FD\u75281\u5247\u75281)
  // ^:\u4EE3\u8868\u958B\u59CB $:\u4EE3\u8868\u7D50\u675F \\d:\u4EE3\u8868\u6578\u5B57 {6}:\u4EE3\u8868\u91CF\u8A5E
  var regexp1 = /^\\d{6}$/;
  // \u5275\u5EFA\u6B63\u5247\u8868\u9054\u5F0F\u65B9\u6CD52(\u56E0\u70BA\u5B57\u7B26\u4E32\u5167\u90E8\u53CD\u659C\u7DDA\u9700\u8981\u5169\u500B\u624D\u80FD\u6B63\u5E38\u986F\u793A)
  var regexp2 = new RegExp('^\\\\d{6}$');
  var str = '555666';
  // \u6B63\u5247\u8868\u9054\u5F0F\u70BA\u5F15\u7528\u985E\u578B\u503C regexp1 \u4E0D\u7B49\u65BC regexp2
  console.log(regexp1 === regexp2);// false
  console.log(typeof regexp1);// object
  \`\`\`

- \u76F8\u95DC\u65B9\u6CD5
  - \u4FEE\u98FE\u7B26
    - \u4FEE\u98FE\u7B26\u4E5F\u53EB\u6A19\u8A8C \`\`\`flags\`\`\` \u53EF\u4EE5\u4F7F\u7528\u4F86\u9032\u884C\u9AD8\u7D1A\u641C\u7D22
    - \u8AAA\u660E

    | \u4FEE\u98FE\u7B26 | \u610F\u7FA9 |
    | :-- | :-- |
    | \`\`\`i\`\`\` | \u4E0D\u5340\u5206\u5927\u5C0F\u5BEB\u641C\u7D22 |
    | \`\`\`g\`\`\` | \u5168\u5C40\u641C\u7D22 |
  - \`\`\`test()\`\`\`
    - \u6E2C\u8A66\u67D0\u5B57\u7B26\u4E32\u662F\u5426\u5339\u914D\u6B63\u5247\u8868\u9054\u5F0F\uFF0C\u8FD4\u56DE\u5E03\u6797\u503C
    - \u7BC4\u4F8B
    \`\`\`js
    var regexp1 = /^\\d{6}$/;
    var str = '555666';
    console.log(regexp1.test(str));// true
    \`\`\`
  - \`\`\`exec()\`\`\`
    - \u6839\u64DA\u6B63\u5247\u8868\u9054\u5F0F\uFF0C\u5728\u5B57\u7B26\u4E32\u4E2D\u67E5\u627E\uFF0C\u8FD4\u56DE\u6578\u7D44\u6216null
    - \u7BC4\u4F8B
    \`\`\`js
    var str = 'abc123def456ghi789';
    // \u82E5\u4E0D\u52A0g\u5247\u6B63\u5247\u8868\u9054\u5F0F\u4E0D\u6703\u8A18\u9304\u5DF2\u641C\u7D22\u5230\u54EA
    var regexp = /\\d+/g;// +\u8868\u793A\u76E1\u53EF\u80FD\u591A\u7684\u5339\u914D
    // \u4F7F\u7528\u5FAA\u74B0\u8A9E\u53E5\u6765\u5FAA\u74B0\u57F7\u884Cexec\uFF0C\u5C0B\u627E\u6240\u6709\u5339\u914D\u7D50\u679C
    var result;
    // null=false
    while (result = regexp.exec(str)) {
      console.log(result);
      /*
        ['123', index: 3, input: 'abc123def456ghi789', groups: undefined]
        ['456', index: 9, input: 'abc123def456ghi789', groups: undefined]
        ['789', index: 15, input: 'abc123def456ghi789', groups: undefined]
      */
    }
    console.log(result);// null
    \`\`\`

<hr id="user-content-metacharacter" style="height: 2px;">

#### <a href="#user-content-top">\u5143\u5B57\u7B26</a> 
- \u8AAA\u660E
  | \u5143\u5B57\u7B26 | \u529F\u80FD |
  | :-- | :-- |
  | \`\`\`\\d\`\`\` | \u5339\u914D\u4E00\u500B\u6578\u5B57 |
  | \`\`\`\\D\`\`\` | \u5339\u914D\u4E00\u500B\u975E\u6578\u5B57 |
  | \`\`\`\\w\`\`\` | \u5339\u914D\u4E00\u500B\u55AE\u5B57\u5B57\u7B26(\u5B57\u6BCD\u3001\u6578\u5B57\u6216\u5E95\u7DDA) |
  | \`\`\`\\W\`\`\` | \u5339\u914D\u4E00\u500B\u975E\u55AE\u5B57\u5B57\u7B26 |
  | \`\`\`\\s\`\`\` | \u5339\u914D\u4E00\u500B\u7A7A\u767D\u5B57\u7B26(\u7A7A\u683C\u3001\u5236\u8868\u7B26\u3001\u63DB\u884C\u7B26) |
  | \`\`\`.\`\`\`| \u4EFB\u610F\u5B57\u7B26 |

- \u7BC4\u4F8B
  \`\`\`js
  // 1\uFF1A\u67D0\u683C\u5F0F\u70BA\uFF1A123-4567-890\uFF0C\u4F7F\u7528\u6B63\u5247\u8868\u9054\u5F0F\u6AA2\u67E5\u67D0\u5B57\u7B26\u4E32\u662F\u5426\u7B26\u5408\u6B64\u683C\u5F0F
  // \u6B63\u5247\u8868\u9054\u5F0F
  var regexp1 = /^\\d\\d\\d-\\d\\d\\d\\d-\\d\\d\\d$/;
  // \u5F85\u6E2C\u8A66\u7684\u5B57\u7B26\u4E32
  var str1 = '444-5555-000';
  console.log(regexp1.test(str1));

  // 2\uFF1A\u67D0\u683C\u5F0F\u70BA\uFF1A\u25A1\u25A1\u25A1-\u25A1\u25A1\u25A1\u25A1-\u25A1\u25A1\u25A1\uFF0C\u5176\u4E2D\u25A1\u8868\u793A\u5B57\u6BCD\u6578\u5B57\u6216\u8005\u5E95\u7DDA\uFF0C\u4F7F\u7528\u6B63\u5247\u8868\u9054\u5F0F\u6AA2\u67E5\u67D0\u5B57\u7B26\u4E32\u662F\u5426\u7B26\u5408\u6B64\u683C\u5F0F
  // \u6B63\u5247\u8868\u9054\u5F0F
  var regexp2 = /^\\w\\w\\w-\\w\\w\\w\\w-\\w\\w\\w$/;
  // \u5F85\u6E2C\u8A66\u7684\u5B57\u7B26\u4E32
  var str2 = 'abc-__ab-123';
  console.log(regexp2.test(str2));

  // 3\uFF1A\u67D0\u683C\u5F0F\u70BA\uFF1A123.45^67#89\uFF0C\u4F7F\u7528\u6B63\u5247\u8868\u9054\u5F0F\u6AA2\u67E5\u67D0\u5B57\u7B26\u4E32\u662F\u5426\u7B26\u5408\u6B64\u683C\u5F0F
  // \u901A\u5E38\u5728\u4E0D\u78BA\u5B9A\u662F\u5426\u70BA\u7279\u6B8A\u5B57\u7B26\u6642,\u5728\u524D\u9762\u52A0\u5165\u53CD\u659C\u69D3\u4EE5\u4FDD\u8B49\u4E0D\u5177\u7279\u6B8A\u610F\u7FA9
  var regexp3 = /^\\d\\d\\d\\.\\d\\d\\^\\d\\d\\#\\d\\d$/;
  // \u5F85\u6D4B\u8BD5\u7684\u5B57\u7B26\u4E32
  var str3 = '666.66^66#66';
  console.log(regexp3.test(str3));
  \`\`\`

<hr id="user-content-square-brackets" style="height: 2px;">

#### <a href="#user-content-top">\u65B9\u62EC\u865F\u8868\u793A\u6CD5</a>
- \u8AAA\u660E
  - \u77ED\u6A6B \`\`\`-\`\`\` \u4EE3\u8868\u5B57\u7B26\u7BC4\u570D
  - \`\`\`^\`\`\` \u4EE3\u8868\u5426\u5B9A

  | \u5143\u5B57\u7B26 | \u7B49\u50F9\u7684\u65B9\u62EC\u865F\u8868\u793A\u6CD5 |
  | :-- | :-- |
  | \`\`\`\\d\`\`\` | \`\`\`[0-9]\`\`\` |
  | \`\`\`\\D\`\`\` | \`\`\`[^0-9]\`\`\` |
  | \`\`\`\\w\`\`\` | \`\`\`[A-Za-z0-9_]\`\`\` |
  | \`\`\`\\W\`\`\` | \`\`\`[^A-Za-z0-9_]\`\`\` |

- \u7BC4\u4F8B
  \`\`\`js
  // \u67D0\u683C\u5F0F\u70BA\uFF1A\u7B2C1\u4F4D\u662F\u4E00\u500B\u5B57\u6BCD\uFF0Cb\u8868\u793A\u672C\u79D1\u751F\uFF0Cy\u8868\u793A\u7814\u7A76\u751F\uFF0C\u5F8C\u9762\u662F7\u4F4D\u6570\u5B57\uFF0C\u7528\u6B63\u5247\u8868\u9054\u5F0F\u8868\u793A\uFF1A
  // \u6E2C\u8A66\u5B57\u7B26\u4E32
  var str1 = 'm4444555';
  // \u7528\u6B63\u5247\u8868\u9054\u5F0F\u6AA2\u67E5
  console.log(/^[by]\\d{7}$/.test(str1));

  // *******************************************
  // \u9A57\u8B49\u67D0\u5B57\u7B26\u4E32\u662F\u5426\u662F5\u4F4D\u5B57\u6BCD\uFF0C\u5927\u5C0F\u5BEB\u5747\u53EF
  var str2 = 'abcde';
  var str3 = 'abcd5';
  console.log(/^[a-zA-Z]{5}$/.test(str2));
  console.log(/^[a-zA-Z]{5}$/.test(str3));

  // \u9A57\u8B49\u67D0\u5B57\u7B26\u4E32\u662F\u5426\u662F5\u4F4D\uFF0C\u50C5\u7531\u5C0F\u5BEB\u5B57\u6BCD\u3001\u9EDE\u69CB\u6210
  var str4 = 'mnp..';
  var str5 = 'mnp.#';
  console.log(/^[a-z\\.]{5}$/.test(str4));
  console.log(/^[a-z\\.]{5}$/.test(str5));

  // \u9A57\u8B49\u67D0\u5B57\u7B26\u4E32\u70BA4\u4F4D\u5C0F\u5BEB\u5B57\u6BCD\uFF0C\u4E14\u6700\u5F8C\u4E00\u4F4D\u4E0D\u80FD\u662Fm
  var str6 = 'abcd';
  var str7 = 'abcm';
  var str8 = 'ab1c';
  // \u76F4\u63A5\u6392\u9664\u5C0F\u5BEB\u82F1\u6587\u88E1\u9762\u7684m
  console.log(/^[a-z]{3}[a-ln-z]$/.test(str6));
  console.log(/^[a-z]{3}[a-ln-z]$/.test(str7));
  console.log(/^[a-z]{3}[a-ln-z]$/.test(str8));
  \`\`\`

<hr id="user-content-string-regexp" style="height: 2px;">

#### <a href="#user-content-top">\u5B57\u4E32\u76F8\u95DC\u65B9\u6CD5</a>
- \u8AAA\u660E

  | \u65B9\u6CD5 | \u7C21\u4ECB |
  | :-- | :-- |
  | \`\`\`search()\`\`\` | \u6839\u64DA\u6B63\u5247\u8868\u9054\u5F0F\u9032\u884C\u5339\u914D<br>\u8FD4\u56DE\u9996\u6B21\u5339\u914D\u7684\u7D22\u5F15\uFF0C\u82E5\u7121\u5247\u8FD4\u56DE-1 |
  | \`\`\`match()\`\`\` | \u6839\u64DA\u6B63\u5247\u8868\u9054\u5F0F\u9032\u884C\u5339\u914D<br>\u8FD4\u56DE\u4E00\u500B\u6578\u7D44\uFF0C\u82E5\u7121\u5247\u8FD4\u56DEnull |
  | \`\`\`replace()\`\`\` | \u4F7F\u7528\u66FF\u63DB\u5B57\u7B26\u4E32\u66FF\u63DB\u5339\u914D\u5230\u7684\u5B57\u7B26\u4E32<br>\u53EF\u4EE5\u4F7F\u7528\u6B63\u5247\u8868\u9054\u5F0F |
  | \`\`\`split()\`\`\` | \u5206\u9694\u5B57\u4E32\u70BA\u6578\u7D44<br>\u53EF\u4EE5\u4F7F\u7528\u6B63\u5247\u8868\u9054\u5F0F |

- \u7BC4\u4F8B
  \`\`\`js
  var str = 'abc123def4567ghi89';
  // search()\u65B9\u6CD5 \u8FD4\u56DE\u627E\u5230\u7684\u7B2C\u4E00\u500B\u4E0B\u6A19\uFF0C\u82E5\u627E\u4E0D\u5230\u5247\u8FD4\u56DE-1
  // \u50CFindexOf()\u4F46\u4E0D\u80FD\u7528\u6B63\u5247\u8868\u9054\u5F0F
  var result1 = str.search(/\\d+/g);
  var result2 = str.search(/m/g);
  console.log(result1);// 3
  console.log(result2);// -1

  // match()\u65B9\u6CD5\uFF0C\u8FD4\u56DE\u67E5\u627E\u5230\u7684\u6578\u7D44\uFF0C\u627E\u4E0D\u5230\u5C31\u662Fnull
  var result3 = str.match(/\\d+/g);
  console.log(result3);// ["123", "4567", "89"]

  // replace()\u65B9\u6CD5\uFF0C\u9032\u884C\u66FF\u63DB; 
  // \u4E0B\u9762\u7684+\u865F\u662F\u6307\u5C07\u76E1\u53EF\u80FD\u591A\u7684\u5C0F\u5BEB\u5B57\u6BCD\u8F49\u63DB\u6210*,\u82E5\u4E0D\u5BEB+\u865F\u5C07\u6703\u628A\u6BCF\u4E00\u500B\u5C0F\u5BEB\u5B57\u6BCD\u90FD\u63DB\u6210*
  // +\u8868\u793A\u76E1\u53EF\u80FD\u591A\u9023\u7E8C\u5339\u914D\u5C0F\u5BEB\u5B57\u6BCD
  var result4 = str.replace(/[a-z]+/g, '*');      
  console.log(result4);// *123*4567*89

  // split()\u65B9\u6CD5\uFF0C\u9032\u884C\u5B57\u7B26\u4E32\u62C6\u70BA\u6578\u7D44
  var result5 = str.split(/\\d+/g);
  console.log(result5);// ["abc", "def", "ghi", ""]
  \`\`\`

<hr id="user-content-measure-word" style="height: 2px;">

#### <a href="#user-content-top">\u91CF\u8A5E</a>
- \u8AAA\u660E

  | \u91CF\u8A5E | \u610F\u7FA9 |
  | :-- | :-- |
  | \`\`\`*\`\`\` | \u5339\u914D\u524D\u4E00\u500B\u8868\u9054\u5F0F0\u6B21\u6216\u591A\u6B21\uFF0C\u7B49\u50F9\u65BC \`\`\`{0,}\`\`\` |
  | \`\`\`+\`\`\` | \u5339\u914D\u524D\u4E00\u500B\u8868\u9054\u5F0F1\u6B21\u6216\u591A\u6B21\uFF0C\u7B49\u50F9\u65BC \`\`\`{1,}\`\`\` |
  | \`\`\`?\`\`\` | \u5339\u914D\u524D\u4E00\u500B\u8868\u9054\u5F0F0\u6B21\u62161\u6B21\uFF0C\u7B49\u50F9\u65BC \`\`\`{0,1}\`\`\` |
  | \`\`\`{n}\`\`\` | n\u662F\u4E00\u500B\u6B63\u6574\u6578\uFF0C\u5339\u914D\u524D\u4E00\u500B\u5B57\u7B26\u525B\u597D\u51FA\u73FEn\u6B21 |
  | \`\`\`{n,}\`\`\` | n\u662F\u4E00\u500B\u6B63\u6574\u6578\uFF0C\u5339\u914D\u524D\u4E00\u500B\u5B57\u7B26\u81F3\u5C11\u51FA\u73FEn\u6B21 |
  | \`\`\`{n,m}\`\`\` | n\u8207m\u90FD\u662F\u6574\u6578\uFF0C\u5339\u914D\u524D\u4E00\u500B\u5B57\u7B26\u81F3\u5C11n\u6B21\u6700\u591Am\u6B21 |

- \u7BC4\u4F8B
  \`\`\`js
  // \u9A57\u8B49\u5B57\u7B26\u4E32\u662F\u5426\u7B26\u5408\u898F\u5247\uFF1A11\u4F4D\u6578\u5B57\uFF0C\u4E26\u4E14\u4EE51\u958B\u982D
  var str1 = '13812345678';
  var str2 = '138123456789';
  var str3 = '38123456789';
  var regexp1 = /^1\\d{10}$/;
  console.log(regexp1.test(str1));
  console.log(regexp1.test(str2));
  console.log(regexp1.test(str3));

  /*
    \u9A57\u8B49\u5B57\u7B26\u4E32\u662F\u5426\u7B26\u5408\u898F\u5247\uFF1A
    \u4EE5\u5B57\u6BCD\u958B\u982D\uFF0C\u4E2D\u9593\u70BA\u4EFB\u610F\u4F4D\u6578\u5B57\uFF08\u6700\u5C111\u4F4D\uFF09\u69CB\u6210\uFF0C\u4EE5\u5B57\u6BCD\u7ED3\u5C3E
  */
  var str4 = 'a123123123b';
  var str5 = 'abcd';
  var str6 = 'a1b';
  var regexp2 = /^[a-zA-Z]\\d+[a-zA-Z]$/;
  console.log(regexp2.test(str4));
  console.log(regexp2.test(str5));
  console.log(regexp2.test(str6));

  /*
    \u9A57\u8B49\u67D0\u5B57\u7B26\u4E32\u662F\u5426\u7B26\u5408\u898F\u5247\uFF1A
    \u4EE5www.\u958B\u982D\uFF0C\u4E2D\u9593\u70BA\u4EFB\u610F\u4F4D\u7684\u5B57\u7B26\uFF08\u5B57\u6BCD\u6578\u5B57\u6216\u5E95\u7DDA\uFF0C\u81F3\u5C11\u4E00\u4F4D\uFF09\uFF0C
    \u6700\u5F8C\u4EE5.com\u7ED3\u5C3E\uFF0C\u4E5F\u53EF\u4EE5.com.cn\u7ED3\u5C3E
  */
  var str7 = 'www.google.com';
  var str8 = 'www.sina.com.cn';
  var str9 = 'www.news.cn';
  var regexp3 = /^www\\.\\w+\\.com(\\.cn)?$/;//()\u4EE3\u8868\u9019\u6574\u4E32\u5B57\u7B26\u4E32 ?\u4EE3\u8868\u53EF\u6709\u53EF\u7121
  console.log(regexp3.test(str7));
  console.log(regexp3.test(str8));
  console.log(regexp3.test(str9));
  \`\`\`

<hr id="user-content-promise-introduce" style="height: 4px;">

### <a href="#user-content-top">Promise</a>
#### <a href="#user-content-top">\u7C21\u4ECB</a>
- \`\`\`Promise\`\`\` \u662F\u7570\u6B65\u64CD\u4F5C\u7684\u89E3\u6C7A\u65B9\u6848
- \u4E00\u822C\u7528\u6765\u89E3\u6C7A\u5C64\u5C64\u5D4C\u5957\u7684 \`\`\`\u56DE\u8ABF\u5730\u7344\`\`\` \u554F\u984C
- \u56DE\u8ABF\u5730\u7344\u4F8B\u5B50
  \`\`\`js
  // \u6BCF\u4E00\u6B21\u79FB\u52D5\u5B8C\u6210\u81EA\u52D5\u8ABF\u7528\u7D50\u675F\u51FD\u6578
  const move = (el, { x = 0, y = 0 } = {}, end = () => {}) => {
    el.style.transform = \`translate3d(\${x}px, \${y}px, 0)\`;
    el.addEventListener(
      'transitionend',
      () => {
        end();
      },
      false
    );
  };
  const boxEl = document.getElementById('box');
  // \u56E0\u6BCF\u4E00\u6B21\u90FD\u9700\u8ABF\u7528\u7D50\u675F\u51FD\u6578\u9032\u884C\u4E0B\u4E00\u6B21\u79FB\u52D5\u800C\u9020\u6210\u56DE\u8ABF\u5730\u7344
  document.addEventListener(
    'click',
    () => {
      move(boxEl, { x: 150 }, () => {
        move(boxEl, { x: 150, y: 150 }, () => {
          move(boxEl, { y: 150 }, () => {
            move(boxEl, { x: 0, y: 0 });
          });
        });
      });
    },
    false
  );
  \`\`\`

<hr id="user-content-promise-basic-use" style="height: 2px;">

#### <a href="#user-content-top">\u57FA\u672C\u7528\u6CD5</a>
- 1.\u5BE6\u4F8B\u5316\u69CB\u9020\u51FD\u6578\u751F\u6210\u5BE6\u4F8B\u5C0D\u8C61
  \`\`\`js
  const p = new Promise(() => {});
  \`\`\`
- 2.\`\`\`Promise\`\`\` \u4E09\u7A2E\u72C0\u614B
  - \u5BE6\u4F8B\u5316\u5F8C\u662F \`\`\`pending\uFF08\u672A\u5B8C\u6210\uFF09\`\`\`
  - \u57F7\u884C \`\`\`resolve\`\`\`\uFF0C\u8B8A\u6210 \`\`\`fulfilled(resolved)\`\`\`\uFF0C\u5DF2\u6210\u529F
  - \u57F7\u884C \`\`\`reject\`\`\`\uFF0C\u8B8A\u6210 \`\`\`rejected\`\`\`\uFF0C\u5DF2\u5931\u8D25
  \`\`\`js
  // resolve\u3001reject \u53EF\u4EE5\u6539\u540D
  const p = new Promise((resolve, reject) => {
    // \u901A\u5E38reject\u6703\u50B3error
    reject(new Error('reason'));
  });

  p.then(
    data => {
      // \u6703\u5F97\u5230 resolve \u7684\u53C3\u6578
      console.log('success', data);
    },
    err => {
      // \u6703\u5F97\u5230 reject \u7684 err \u53C3\u6578
      console.log('error', err);
    }
  );
  console.log(p);// Promise
  \`\`\`
<hr id="user-content-promise-instance-function-then" style="height: 2px;">

#### <a href="#user-content-top">\u5BE6\u4F8B\u65B9\u6CD5</a>
#### <a href="#user-content-top">then</a>
- \`\`\`resolved\`\`\` \u6642\uFF0C\u57F7\u884C \`\`\`then\`\`\` \u7684\u7B2C\u4E00\u500B\u56DE\u8ABF\u51FD\u6578
- \`\`\`rejected\`\`\` \u6642\uFF0C\u57F7\u884C \`\`\`then\`\`\` \u7684\u7B2C\u4E8C\u500B\u56DE\u8ABF\u51FD\u6578
- \u57F7\u884C\u5F8C\u8FD4\u56DE\u503C
  - \u7121\u8FD4\u56DE\u5247 \`\`\`return undefined\`\`\` \u4E26\u8FD4\u56DE\u6210\u529F\u72C0\u614B Promise \u5C0D\u8C61
  - return \u5F8C\u9762\u7684\u6578\u64DA\uFF0C\u6703\u7528 Promise \u5305\u88DD
- \u7BC4\u4F8B  
  \`\`\`js
  const p = new Promise((resolve, reject) => {
    // resolve();
    reject();
  });

  p.then(
    () => {
      // \u7576 resolve() \u6642\u57F7\u884C\u8A72\u51FD\u6578
    },
    () => {
      // \u7576 reject() \u6642\u57F7\u884C\u8A72\u51FD\u6578

      // \u82E5\u8981\u8FD4\u56DE\u932F\u8AA4\u72C0\u614B
      // return new Promise((resolve, reject) => {
      //   reject('reason');
      // });

      // return 123;
      // \u8207\u4EE5\u4E0B\u4EE3\u78BC\u7B49\u50F9(\u82E5\u53EA\u6709resolve\u5247reject\u53EF\u7701\u7565)
      // return new Promise(resolve => {
      //  // \u9ED8\u8BA4\u8FD4\u56DE\u7684\u6C38\u8FDC\u90FD\u662F\u6210\u529F\u72B6\u6001\u7684 Promise \u5BF9\u8C61
      //   resolve(123);
      // });
      return 123;
    }
  )
  .then(
    data => {
      console.log('success2', data);// 123
      // \u7B49\u50F9\u65BC return undefined;
      return new Promise(resolve => {
        resolve(undefined);
      });
    },
    err => {
      console.log('err2', err);
    }
  )
  .then(
    data => {
      console.log('success3', data);// undefined
    },
    err => {
      console.log('err3', err);
    }
  );
  \`\`\`

<hr id="user-content-promise-instance-function-catch" style="height: 2px;">

#### <a href="#user-content-top">catch</a>
- \u5C08\u9580\u7528\u4F86\u8655\u7406 \`\`\`rejected\`\`\` \u72C0\u614B
- \u662F \`\`\`then\`\`\` \u7684\u7279\u4F8B \`\`\`then(null, err => {});\`\`\`
- \u7528\u6CD5
  \`\`\`js
  new Promise((resolve, reject) => {
    reject('reason');
  }).then(data => {
    // \u56E0\u70BA\u662Freject\u6240\u4EE5\u7B2C\u4E00\u500B\u51FD\u6578\u4E0D\u6703\u8F38\u51FA
    // \u4E26\u4E14\u7121reject\u5B8C\u5F8C\u7684\u57F7\u884C\u51FD\u6578\u6240\u4EE5\u6703\u8DF3\u5230catch
    console.log(data);
  })
  // .then(null, err => {
  //   console.log(err);
  // });
  // \u6CE8\u610F!\u82E5\u6C92\u767C\u751F\u932F\u8AA4\u5247\u6703\u57F7\u884C\u4E0B\u4E00\u500Bthen\u4E26\u8DF3\u904Ecatch
  .catch(err => {
    console.log(err);// reason
    // \u4E5F\u53EF\u4EE5\u62CB\u51FA\u932F\u8AA4
    throw new Error('reason');
  }).then(data => {
    console.log('test',data); 
  }).catch(err => {
    console.log('err', err);// err Error: reason
  });
  \`\`\`

<hr id="user-content-promise-instance-function-finally" style="height: 2px;">

#### <a href="#user-content-top">finally</a>
- \u4E0D\u8AD6\u662F resolve \u6216 reject \u90FD\u6703\u57F7\u884C\uFF0C\u4E0D\u8B8A\u5316\u4E0D\u6703\u57F7\u884C
- \u662F \`\`\`then\`\`\` \u7684\u7279\u4F8B\uFF0C
  - \u4E0D\u6703\u53D6\u5F97\u53C3\u6578\u4E26\u57F7\u884C\u5B8C\u51FD\u6578\u5F8C\u5C07\u524D\u9762\u7684\u53C3\u6578\u5F80\u5F8C\u62CB
  - \u7B49\u50F9\u65BC\u4EE5\u4E0B
    \`\`\`js
    .then(
      result => {
        return result;
      },
      err => {
        return new Promise((resolve, reject) => {
          reject(err);
        });
      }
    )
    \`\`\`
- \u901A\u5E38\u7528\u5728\u6700\u5F8C\u57F7\u884C\u7D50\u675F\u7684\u7A0B\u5F0F
- \u7528\u6CD5
  \`\`\`js
  new Promise((resolve, reject) => {
    resolve(123);
    // reject('reason');
  })
  .finally(data => {
    // \u82E5\u5728\u4E2D\u9593\u4E5F\u4E0D\u6703\u6709\u4EFB\u4F55\u7684\u53C3\u6578
    console.log(data);// undefined
  })
  .then(result =>{
    console.log(result);// 123
  })
  .catch(err => {});
  \`\`\`

<hr id="user-content-promise-constructor-function-resolve" style="height: 2px;">

#### <a href="#user-content-top">\u69CB\u9020\u51FD\u6578\u65B9\u6CD5</a>
#### <a href="#user-content-top">Promise.resolve</a>
- \u70BA\u6210\u529F\u72C0\u614B \`\`\`Promise\`\`\` \u7684\u4E00\u7A2E\u7C21\u5BEB\u5F62\u5F0F
- \u6703\u5148\u57F7\u884C \`\`\`resolve\`\`\` \u62EC\u865F\u5167\u7684\u6771\u897F
- \u4EE5\u4E0B\u5169\u8005\u7B49\u50F9\u76F8\u7B49
  \`\`\`js
  new Promise(resolve => resolve('foo'));
  // \u7C21\u5BEB
  Promise.resolve('foo');
  \`\`\`
- \u4E00\u822C\u53C3\u6578(\u9810\u8A2D\u70BA\u6210\u529F\u72C0\u614B\u6240\u4EE5\u76F4\u63A5\u8F38\u51FA)
  \`\`\`js
  Promise.resolve('foo').then(data => {
    console.log(data);// foo
  });
  \`\`\`
- \`\`\`Promise\`\`\` \u4F5C\u70BA\u53C3\u6578
  - \u6703\u6839\u64DA \`\`\`resolve\`\`\` \u62EC\u865F\u5167\u7684 \`\`\`Promise \u5C0D\u8C61\`\`\`\u7684\u72C0\u614B\u8B8A\u5316\u4F86\u6C7A\u5B9A
  \`\`\`js
  const p1 = new Promise((resolve,reject) => {
    setTimeout(resolve, 1000, '\u57F7\u884C\u4E86');
    // \u4E0A\u9762\u7B49\u50F9\u65BC\u4E0B\u9762
    // setTimeout(() => {
    //   resolve('\u6211\u6267\u884C\u4E86');
    // }, 1000);
  });
  Promise.resolve(p1).then(data => {
    console.log(data);// \u57F7\u884C\u4E86
  }).catch(data => {
    // \u82E5 p1 \u57F7\u884C reject\uFF0C\u5247\u6703\u9032\u5165 catch
    console.log(data);
  });
  // \u7B49\u50F9\u65BC
  p1.then(data => {
    console.log(data);// \u57F7\u884C\u4E86
  }).catch(data => {
    console.log(data);
  });
  console.log(Promise.resolve(p1) === p1);// true
  \`\`\`
- \`\`\`then \u65B9\u6CD5\u5C0D\u8C61\`\`\` \u4F5C\u70BA\u53C3\u6578
  - \u6703\u8F49\u70BA \`\`\`Promise \u5C0D\u8C61\`\`\`\uFF0C\u4E26\u7ACB\u5373\u57F7\u884C \`\`\`thenable \u5C0D\u8C61\`\`\`\u7684 \`\`\`then \u65B9\u6CD5\`\`\`
  \`\`\`js
  const thenable = {
    then(resolve, reject) {
      resolve('data');
    }
  };
  // Promise.resolve(thenable) \u6574\u500B\u6703\u8F49\u70BA Promise \u5C0D\u8C61
  // \u8F49\u5B8C Promise \u5C0D\u8C61\u5F8C\u76F4\u63A5\u57F7\u884C then \u65B9\u6CD5
  // \u82E5\u88E1\u9762\u89F8\u767C reject \u5247\u6703\u5230 err 
  Promise.resolve(thenable).then(
    data => console.log(data),// data
    err => console.log(err)
  );
  console.log(Promise.resolve(thenable));// Promise\xA0{<pending>}
  \`\`\`

<hr id="user-content-promise-constructor-function-reject" style="height: 2px;">

#### <a href="#user-content-top">Promise.reject</a>
- \u70BA\u5931\u6557\u72C0\u614B \`\`\`Promise\`\`\` \u7684\u4E00\u7A2E\u7C21\u5BEB\u5F62\u5F0F
- \u4EE5\u4E0B\u5169\u8005\u7B49\u50F9\u76F8\u7B49
  \`\`\`js
  new Promise((resolve, reject) => {
    reject('reason');
  });
  // \u7B49\u50F9\u65BC
  Promise.reject('reason');
  \`\`\`
- \u7528\u6CD5
  \`\`\`js
  const p1 = new Promise((resolve,reject) => {
    setTimeout(resolve, 1000, '\u57F7\u884C\u4E86');
  });
  // \u4E0D\u7BA1 resolve\u3001reject \u90FD\u6703\u8DF3\u5230catch(rejected)
  Promise.reject(p1)
  .then(data => console.log(data))
  .catch(err => {
    // \u82E5 p1 \u72C0\u614B\u70BA resolve \u5247\u6703\u4FDD\u6301 promise \u5C0D\u8C61
    // \u82E5 p1 \u72C0\u614B\u70BA reject \u5247\u6703\u8F38\u51FA "\u57F7\u884C\u4E86"
    console.log(err);//Promise\xA0{<pending>}
    return err;// \u5C07 p1 \u7684 resolve promise \u5C0D\u8C61\u5F80\u5F8C\u62CB
  })
  .then(data => console.log(data));// \u57F7\u884C\u4E86
  \`\`\`

<hr id="user-content-promise-constructor-function-all" style="height: 2px;">

#### <a href="#user-content-top">Promise.all</a>
- \u53EF\u89C0\u6E2C\u591A\u500B \`\`\`Promise \u5BE6\u4F8B\u5C0D\u8C61\`\`\`\u7684\u72C0\u614B\u8B8A\u5316
- \u50B3\u5165\u591A\u500B \`\`\`Promise \u5BE6\u4F8B\`\`\`\u4E26\u5305\u88DD\u6210\u4E00\u500B \`\`\`\u65B0\u7684 Promise \u5BE6\u4F8B\`\`\`\u8FD4\u56DE
- \u6240\u6709\u5BE6\u4F8B\u72C0\u614B\u90FD\u8B8A\u6210 \`\`\`resolved\`\`\`\uFF0C\u6700\u7EC8\u72C0\u614B\u624D\u6703\u8B8A\u6210 \`\`\`resolved\`\`\`
- \u53EA\u8981\u6709\u4E00\u500B\u8B8A\u6210 \`\`\`rejected\`\`\`\uFF0C\u6700\u7D42\u72C0\u614B\u5C31\u8B8A\u6210 \`\`\`rejected\`\`\`(\u53EA\u6703\u8F38\u51FA\`\`\`\u7B2C\u4E00\u500B rejected \u7D50\u679C\`\`\`)
- \u4E0D\u7BA1\u4E2D\u9593\u6210\u529F\u6216\u5931\u6557\u90FD\u6703\u4F9D\u5E8F\u57F7\u884C
- \u53C3\u6578\u82E5\u70BA\u7A7A\u6578\u7D44\uFF0C\u6700\u7D42\u72C0\u614B\u70BA \`\`\`resolved\`\`\`
  \`\`\`js
  const p = Promise.all([]);
  p.then(
    data => {
      console.log(data);// []
    }
  );
  \`\`\`
- \u7528\u6CD5
  \`\`\`js
  const delay = ms => {
    return new Promise(resolve => {
      setTimeout(resolve, ms);
    });
  };
  const p1 = delay(1000).then(() => {
    console.log('p1 \u5B8C\u6210\u4E86');
    return 'p1';
  });
  const p2 = delay(2000).then(() => {
    console.log('p2 \u5B8C\u6210\u4E86');
    return 'p2';
  });
  const p = Promise.all([p1, p2]);
  p.then(
    data => {
      // \u53EA\u6709\u6240\u6709\u90FD\u6210\u529F\u6642\u624D\u6703\u8F38\u51FA
      console.log(data);// ["p1", "p2"]
    },
    err => {
      // \u53EA\u8981\u4E00\u500B\u662F\u5931\u6557\u5C31\u76F4\u63A5\u8F38\u51FA(\u4E26\u4E14\u53EA\u6703\u8F38\u51FA\u7B2C\u4E00\u500B\u5931\u6557)
      console.log(err);
    }
  );
  \`\`\`

<hr id="user-content-promise-constructor-function-race" style="height: 2px;">

#### <a href="#user-content-top">Promise.race</a>
- \u72C0\u614B\u53D6\u6C7A\u65BC\u591A\u500B\u5C0D\u8C61\u4E2D\u7B2C\u4E00\u500B\u5B8C\u6210\u7684 \`\`\`Promise \u5BE6\u4F8B\u5C0D\u8C61\`\`\`
- \u4E0D\u7BA1\u4E2D\u9593\u6210\u529F\u5931\u6557\u90FD\u6703\u4F9D\u5E8F\u57F7\u884C
\`\`\`js
const delay = ms => {
  return new Promise(resolve => {
    setTimeout(resolve, ms);
  });
};
const p1 = delay(1000).then(() => {
  return 'p1';
});
const p2 = delay(2000).then(() => {
  return Promise.reject('reason');
});
const racePromise = Promise.race([p1, p2]);
racePromise.then(
  data => {
    console.log(data);// \u53EA\u6703\u8F38\u51FA\u7B2C\u4E00\u500B\u6210\u529F\u7684:p1
  },
  err => {
    console.log(err);
  }
);
\`\`\`

<hr id="user-content-promise-constructor-function-allsettled" style="height: 2px;">

#### <a href="#user-content-top">Promise.allSettled</a>
- \u4E0D\u7BA1\u4E2D\u9014\u70BA\u6210\u529F\u6216\u5931\u6557\u6C38\u9060\u90FD\u662F\u6210\u529F\u7684
- \u4E26\u6703\u5FE0\u5BE6\u5730\u8A18\u9304\u6240\u6709 \`\`\`Promise \u5BE6\u4F8B\u5C0D\u8C61\`\`\`\u7684\u56DE\u50B3
\`\`\`js
const delay = ms => {
  return new Promise(resolve => {
    setTimeout(resolve, ms);
  });
};
const p1 = delay(1000).then(() => {
  return 'p1';
});
const p2 = delay(2000).then(() => {
  return Promise.reject('p2');
});
const allSettledPromise = Promise.allSettled([p1, p2]);
allSettledPromise.then(data => {
  console.log('success', data);
});
/*
  success (2) [{\u2026}, {\u2026}]
    0: {status: 'fulfilled', value: 'p1'}
    1: {status: 'rejected', reason: 'p2'}
    length: 2
    [[Prototype]]: Array(0)
*/
\`\`\`

<hr id="user-content-promise-constructor-function-any" style="height: 2px;">

#### <a href="#user-content-top">Promise.any</a>
- \u53EA\u6709\u5168\u90E8 \`\`\`Promise \u5BE6\u4F8B\u5C0D\u8C61\`\`\`\u90FD\u662F\u5931\u6557\uFF0C\u72C0\u614B\u624D\u6703\u8F49\u8B8A\u70BA\u5931\u6557
- \u53EA\u8981\u6709\u4E00\u500B \`\`\`Promise \u5BE6\u4F8B\u5C0D\u8C61\`\`\`\u662F\u6210\u529F
  - \u5247\u72C0\u614B\u8F49\u8B8A\u70BA\u6210\u529F
  - \u53D6\u5F97\u8A72\u5BE6\u4F8B\u5C0D\u8C61\u56DE\u50B3(\u4E0D\u518D\u7406\u6703\u5176\u4ED6\u5BE6\u4F8B\u5C0D\u8C61\u56DE\u50B3)
  - \u4E0D\u7BA1\u4E2D\u9593\u6210\u529F\u6216\u5931\u6557\u90FD\u6703\u4F9D\u5E8F\u57F7\u884C
  - \u82E5\u540C\u6642\u5247\u6309\u7167\u6587\u6A94\u6D41\u9806\u5E8F
- \u53EF\u7528\u5728\u54EA\u5F35\u5716\u7247\u52A0\u8F09\u6BD4\u8F03\u5FEB\u5C31\u7528\u54EA\u5F35\u5716\u7247
\`\`\`js
const delay = ms => {
  return new Promise(resolve => {
    setTimeout(resolve, ms);
  });
};
const p1 = delay(1000).then(() => {
  return 'p1';
});
const p2 = delay(2000).then(() => {
  return 'p2';
});
const anyPromise = Promise.any([p1, p2]);
anyPromise.then(data => {
  console.log('success', data);
});
\`\`\`

<hr id="user-content-promise-constructor-function-notice" style="height: 2px;">

#### <a href="#user-content-top">\u6CE8\u610F\u4E8B\u9805</a>
- \`\`\`Promise.all\`\`\` / \`\`\`race\`\`\` / \`\`\`allSettled\`\`\` \u7684\u53C3\u6578\u554F\u984C
  - \u82E5\u53C3\u6578\u975E \`\`\`Promise \u6578\u7D44\`\`\`\uFF0C\u6703\u5C07\u6578\u7D44\u5143\u7D20\u8F49\u8B8A\u6210 \`\`\`Promise \u5C0D\u8C61\`\`\`
  - \u4EFB\u4F55\u53EF\u904D\u6B77\u7684\u90FD\u53EF\u4EE5\u4F5C\u4E3A\u53C3\u6578
    - \`\`\`Array\u3001String\u3001Set\u3001Map\u3001NodeList\u3001arguments\`\`\`
  \`\`\`js
  Promise.all([1, 2, 3]).then(datas => {
    console.log(datas);// [1, 2, 3]
  });
  // \u4E0A\u4E0B\u7B49\u50F9
  Promise.all([
    Promise.resolve(1),
    Promise.resolve(2),
    Promise.resolve(3)
  ]).then(datas => {
    console.log(datas);
  });
  \`\`\`
- \`\`\`Promise.all\`\`\` / \`\`\`race\`\`\` / \`\`\`allSettled\`\`\` \u7684\u932F\u8AA4\u8655\u7406
  - \u932F\u8AA4\u4E00\u65E6\u88AB\u500B\u5225\u8655\u7406\uFF0C\u5C31\u4E0D\u6703\u518D\u8655\u7406\u4E00\u904D
  - \u82E5\u6709\u591A\u500B\u932F\u8AA4\uFF0C\u7B2C\u4E00\u500B\u932F\u8AA4\u82E5\u500B\u5225\u8655\u7406\u5247\u6703\u5EF6\u7E8C\u81F3\u7B2C\u4E8C\u500B
  \`\`\`js
  const delay = ms => {
    return new Promise(resolve => {
      setTimeout(resolve, ms);
    });
  };

  const p1 = delay(1000).then(() => {
    return Promise.reject('reason p1');
  })
  .catch(err => {});

  const p2 = delay(2000).then(() => {
    return Promise.reject('reason p2');
  });

  const allPromise = Promise.all([p1, p2]);
  allPromise
    .then(datas => {
      console.log(datas);
    })
  .catch(err => console.log(err));// reason p2
  \`\`\`

<hr id="user-content-promise-example" style="height: 2px;">

#### <a href="#user-content-top">\u61C9\u7528\u7BC4\u4F8B</a>
\`\`\`html
<body>
  <img
    src="https://one.jpg"
    alt=""
    id="img"
  />

  <script>
    // \u7570\u6B65\u52A0\u8F09\u5716\u7247
    const loadImgAsync = url => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        // \u52A0\u8F09\u5B8C\u6642\u8ABF\u7528
        img.onload = () => {
          resolve(img);
        };
        // \u52A0\u8F09\u932F\u8AA4\u6642\u8ABF\u7528
        img.onerror = () => {
          reject(new Error(\`Could not load image at \${url}\`));
        };
        // \u958B\u59CB\u52A0\u8F09
        img.src = url;
      });
    };

    const imgDOM = document.getElementById('img');
    loadImgAsync('https://two.jpg')
      .then(img => {
        // \u5982\u679C\u52A0\u8F09\u6210\u529F\u5247\u4E00\u79D2\u9418\u5F8C\u66FF\u63DB\u6389\u539F\u5716\u7247
        setTimeout(() => {
          imgDOM.src = img.src;
        }, 1000);
      })
      .catch(err => {
        // \u5426\u5247\u8F38\u51FA\u5931\u6557
        console.log(err);
      });
  <\/script>
</body>
\`\`\`

<hr id="user-content-class" style="height: 2px;">

### <a href="#user-content-top">Class</a>
#### <a href="#user-content-top">\u7C21\u4ECB</a>
- \u4F5C\u70BA JavaScript \u73FE\u6709\u539F\u578B\u7A0B\u5F0F(prototype-based)\u7E7C\u627F\u7684\u8A9E\u6CD5\u7CD6
- \u4F7F\u7528\u66F4\u7C21\u6F54\u7684\u8A9E\u6CD5\u4F86\u5EFA\u7ACB\u7269\u4EF6\u548C\u8655\u7406\u7E7C\u627F
- \u985E\u53EF\u770B\u505A\u662F\u5C0D\u8C61\u7684\u6A21\u677F\uFF0C\u53EF\u4EE5\u5275\u5EFA\u8A31\u591A\u4E0D\u540C\u7684\u5C0D\u8C61
- \u57FA\u672C\u7528\u6CD5
  - \u985E\u540D\u4E00\u822C\u70BA\u5927\u5BEB
  - \u5BE6\u4F8B\u5316\u6642\u6703\u57F7\u884C\u69CB\u9020\u65B9\u6CD5\uFF0C\u6240\u4EE5\u5FC5\u9808\u6709\u69CB\u9020\u65B9\u6CD5\uFF0C\u4F46\u53EF\u4EE5\u4E0D\u5BEB
  - \u5FC5\u9808\u4F7F\u7528 \`\`\`new\`\`\` \u95DC\u9375\u5B57\u5275\u5EFA\u5BE6\u4F8B\u5C0D\u8C61
    \`\`\`js
    // \u985E\u540D\u4E00\u822C\u70BA\u5927\u5BEB
    class Person {
      // \u5BE6\u4F8B\u5316\u6642\u6703\u57F7\u884C\u69CB\u9020\u65B9\u6CD5
      constructor(name, age) {
        // this \u4EE3\u8868\u5BE6\u4F8B\u5C0D\u8C61\uFF0C\u5B9A\u7FA9\u7684\u662F\u5C6C\u6027\u6216\u65B9\u6CD5
        // \u4E00\u822C\u5728\u69CB\u9020\u51FD\u6578\u4E2D\u5B9A\u7FA9\u5C6C\u6027\uFF0C\u65B9\u6CD5\u4E0D\u5728\u88E1\u9762\u5B9A\u7FA9
        this.name = name;
        this.age = age;
        // this.speak = () => {};
      }
      // \u6240\u6709\u5BE6\u4F8B\u7684\u5171\u4EAB\u65B9\u6CD5(\u5728\u69CB\u9020\u65B9\u6CD5\u5B9A\u7FA9\u65B9\u6CD5\u6703\u4F54\u5167\u5B58)
      speak () {
        console.log('speak');
      }
    }
    // \u5FC5\u9808\u4F7F\u7528 new \u95DC\u9375\u5B57\u5275\u5EFA\u5BE6\u4F8B\u5C0D\u8C61
    const ls = new Person('LS', 28);
    console.log(typeof Person) // function
    console.log(typeof new Person()) // object
    \`\`\`

<hr id="user-content-class-definition-form" style="height: 2px;">

#### <a href="#user-content-top">\u5B9A\u7FA9\u5F62\u5F0F</a>
- \u8072\u660E\u5F62\u5F0F
  \`\`\`js
  class Person {
    constructor() {}
    speak() {}
  }
  // es5
  function Person(){}
  Person.prototype.speak = function (){}
  \`\`\`
- \u8868\u9054\u5F0F\u5F62\u5F0F
  \`\`\`js
  const Person = class {
    constructor() {
      console.log('constructor');
    }
    speak() {}
  };
  // es5
  var Person = function () {};
  \`\`\`
- IIFE
  \`\`\`js
  // \u7ACB\u5373\u57F7\u884C\u7684\u533F\u540D\u985E
  new class {
    constructor() {
      console.log('constructor');
    }
  }();
  // es5
  // \u7ACB\u5373\u57F7\u884C\u7684\u533F\u540D\u69CB\u9020\u51FD\u6578
  (function () {
    console.log('function');
  })();
  \`\`\`

<hr id="user-content-class-property-function" style="height: 2px;">

#### <a href="#user-content-top">\u5C6C\u6027\u8207\u65B9\u6CD5</a>
- \u5BE6\u4F8B\u5C6C\u6027\u8207\u65B9\u6CD5
  \`\`\`js
  class Person {
    // \u5728class\u5167\u53EF\u4EE5\u76F4\u63A5\u5B9A\u7FA9\u5C6C\u6027(\u4F46\u4E0D\u80FD\u52A0const\u8207let)
    age = 0;
    sex = 'male';
    // \u5EFA\u8B70\u9084\u662F\u4F7F\u7528\u5EFA\u69CB\u5F0F\u5B9A\u7FA9\u5C6C\u6027(\u82E5\u8207\u4E0A\u9762\u5C6C\u6027\u91CD\u8907\u5247\u4EE5\u5EFA\u69CB\u5F0F\u5C6C\u6027\u70BA\u4E3B)
    constructor(name, sex) {
      this.name = name;
      this.sex = sex;
    }
    /*
      \u5BE6\u4F8B\u65B9\u6CD5\u5C31\u662F\u503C\u70BA\u51FD\u6578\u7684\u7279\u6B8A\u5C6C\u6027
      \u5EFA\u8B70\u5225\u4F7F\u7528\u6B64\u5275\u5EFA\u65B9\u5F0F: getSex = function(){}
      \u56E0\u70BA\u6BCF\u5BE6\u4F8B\u4E00\u500B\u5C31\u6703\u7D66\u4E88\u4E00\u500B\u65B0\u7684\u51FD\u6578\u6703\u5360\u5167\u5B58
    */
    getSex () {
      return this.sex;
    };
  }
  // \u4E5F\u53EF\u4EE5\u76F4\u63A5\u5B9A\u7FA9\u65B0\u589E\u5C6C\u6027
  const p = new Person('test');
  p.heigh = 180;
  \`\`\`
- \u975C\u614B\u5C6C\u6027\u8207\u65B9\u6CD5
  - \u5C6C\u65BC\u8A72\u985E\u7684\u5C6C\u6027\u8207\u65B9\u6CD5
  - \u5BE6\u4F8B\u6703\u8ABF\u7528\u5BE6\u4F8B\u7684\u65B9\u6CD5\uFF0C\u985E\u6703\u8ABF\u7528\u985E\u7684\u65B9\u6CD5
  - \u82E5\u6C92\u5BA3\u544A\u975C\u614B\u5C6C\u6027 \`\`\`name\`\`\` \u800C\u76F4\u63A5\u8ABF\u7528\u5247\u6703\u8F38\u51FA\u985E\u540D
  \`\`\`js
  class Person {
    // \u5B9A\u7FA9\u5BE6\u4F8B\u5C6C\u6027
    constructor(name) {
      this.name = name;
    }
    // \u5B9A\u7FA9\u5BE6\u4F8B\u65B9\u6CD5
    speak () {
      console.log(this.name)
      return this.name;
    };

    // \u5B9A\u7FA9\u985E\u7684\u5C6C\u6027
    static name = 'test2';
    // \u5B9A\u7FA9\u985E\u7684\u65B9\u6CD5
    static speak() {
      console.log('\u53EF\u4EE5\u8AAA\u8A71');
      // this \u6307\u5411\u985E
      console.log(this);
    }
  }
  // \u4E5F\u53EF\u4EE5\u5728\u5916\u5BA3\u544A
  Person.height = 180;

  const p = new Person('test');
  p.speak();// test
  Person.speak();// \u53EF\u4EE5\u8AAA\u8A71 class Person {...}
  console.log(Person.name);// test2
  \`\`\`

<hr id="user-content-class-private-getter-setter" style="height: 2px;">

#### <a href="#user-content-top">getter \u8207 setter</a>
- \`Class\` \u4E5F\u540C\u6A23\u652F\u63F4 \`Function\` \u7684 \`getter\` \u8207 \`setter\`
- \u7BC4\u4F8B\uFF1A
  \`\`\`js
  class Person{
    set name(name){
      console.log("setting name")
      this.personName = name;
    }
    
    get name(){
      console.log("getting name");
      return this.personName;
    }
  }

  let person = new Person();
  person.personName = "ming";
  console.log(person.personName);
  \`\`\`

<hr id="user-content-class-private-property-function" style="height: 2px;">

#### <a href="#user-content-top">\u79C1\u6709\u5C6C\u6027\u8207\u65B9\u6CD5</a>
- \u4E00\u822C\u5C6C\u6027\u8207\u65B9\u6CD5\u662F\u516C\u958B\u7684\uFF0C\u6709\u88AB\u4FEE\u6539\u7684\u53EF\u80FD\uFF0C\u9020\u6210\u610F\u60F3\u4E0D\u5230\u7684\u932F\u8AA4
- \u4EE5\u4E0B\u70BA\u5E38\u898B\u7684\u5169\u7A2E\u89E3\u6C7A\u65B9\u6CD5
  - \u7B2C\u4E00\u7A2E\uFF1A\u958B\u982D \`\`\`_\`\`\` \u8868\u793A\u79C1\u6709
    \`\`\`js
    class Person {
      constructor(name) {
        this._name = name;
      }

      speak() {
        console.log('speak');
      }

      getName() {
        return this._name;
      }
    }
    \`\`\` 
  - \u7B2C\u4E8C\u7A2E\uFF1A\u5C07\u79C1\u6709\u5C6C\u6027\u6216\u65B9\u6CD5\u79FB\u51FA\u985E
    \`\`\`js
    (function () {
      let name = '';
      class Person {
        constructor(username) {
          name = username;
        }

        speak() {
          console.log('speak');
        }

        getName() {
          return name;
        }
      }

      window.Person = Person;
    })();
    const p = new Person('Test');
    console.log(p.name);// undefined
    console.log(p.getName());// Test
    \`\`\` 

<hr id="user-content-class-extends" style="height: 2px;">

#### <a href="#user-content-top">extends</a>
- \u5B50\u985E\u4F7F\u7528 \`\`\`extends\`\`\` \u95DC\u9375\u5B57\u7E7C\u627F\u7236\u985E
- \u5B50\u985E\u6703\u7E7C\u627F\u7236\u985E\u7684\u5168\u90E8\u5C6C\u6027\u8207\u65B9\u6CD5
- \u82E5\u5B50\u985E\u8207\u7236\u985E\u6709\u4E00\u6A23\u7684\u5C6C\u6027\u8207\u65B9\u6CD5\u5247\u6703\u8986\u84CB\u7236\u985E
  - \u6709\u500B\u4F8B\u5916\u72C0\u6CC1\uFF1A
    \`\`\`js
    // \u82E5\u5B50\u985E\u65B9\u6CD5\u5BEB\u6CD5\u70BA
    say(){}
    // \u7236\u985E\u65B9\u6CD5\u5BEB\u6CD5\u70BA
    say = function(){}
    // \u5247\u5B50\u985E\u8ABF\u7528 say \u65B9\u6CD5\u6703\u4F7F\u7528\u7236\u985E say \u65B9\u6CD5
    \`\`\`
- \u7BC4\u4F8B
  \`\`\`js
  // \u5275\u5EFA\u7236\u985E
  class Person {
    constructor(name, sex) {
      this.name = name;
      this.sex = sex;

      this.say = function () {
        console.log('say');
      };
    }

    speak() {
      console.log('speak');
    }

    static speak() {
      console.log('static speak');
    }
  }
  Person.version = '1.0';

  // \u5275\u5EFA\u5B50\u985E
  class Programmer extends Person {
    constructor(name, sex, feature) {
      // this \u64CD\u4F5C\u4E0D\u80FD\u653E\u5728 super \u524D\u9762
      super(name, sex);
      // this.feature = feature;
    }
    // \u5B50\u985E\u8986\u84CB\u7236\u985E\u7684\u5C6C\u6027\u8207\u65B9\u6CD5
    // \u540C\u540D\u8986\u76D6\u5BE6\u4F8B\u65B9\u6CD5
    speak() {
      console.log('Programmer speak');
    }
    // \u540C\u540D\u8986\u76D6\u975C\u614B\u65B9\u6CD5
    static speak() {
      console.log('Programmer static speak');
    }
  }
  // \u540C\u540D\u8986\u76D6\u975C\u614B\u5C6C\u6027
  Programmer.version = '2.0';

  const zs = new Programmer('zs', '\u7537', '\u5F37');
  zs.say();// say
  zs.speak();// Programmer speak
  Programmer.speak();// Programmer static speak
  console.log(Programmer.version);// 2.0
  \`\`\`

<hr id="user-content-class-super" style="height: 2px;">

#### <a href="#user-content-top">super</a>
- \u4F5C\u70BA\u51FD\u6578\u8ABF\u7528
  - \u4EE3\u8868\u7236\u985E\u7684\u69CB\u9020\u65B9\u6CD5\uFF0C\u53EA\u80FD\u7528\u5728\u5B50\u985E\u7684\u69CB\u9020\u65B9\u6CD5\u4E2D
  - \`\`\`super\`\`\` \u96D6\u7136\u4EE3\u8868\u7236\u985E\u7684\u69CB\u9020\u65B9\u6CD5\uFF0C\u4F46\u7236\u985E\u5167\u90E8\u7684 \`\`\`this\`\`\` \u6307\u5411\u5B50\u985E\u7684\u5BE6\u4F8B
  \`\`\`js
  class Person {
    constructor(name) {
      this.name = name;
      console.log(this);
    }
  }

  class Programmer extends Person {
    constructor(name, sex) {
      super(name, sex);
    }
  }
  // \u5275\u5EFA Programmer \u5BE6\u4F8B\u5F8C\uFF0C\u7236\u985E super \u6703\u8F38\u51FA Programmer
  new Programmer();
  \`\`\`
- \u4F5C\u70BA\u5C0D\u8C61\u4F7F\u7528
  -  \`\`\`super\`\`\` \u4EE3\u8868\u7236\u985E\u7684\u539F\u578B\u5C0D\u8C61 \`\`\`\u7236\u985E.prototype\`\`\`
  - \u900F\u904E \`\`\`super\`\`\` \u8ABF\u7528\u7236\u985E\u7684\u65B9\u6CD5\u6642\uFF0C\u5185\u90E8\u7684 \`this\` \u6307\u5411\u7576\u524D\u7684\u5B50\u985E\u5BE6\u4F8B
  - \u5728\u975C\u614B\u65B9\u6CD5\u4E2D\u4F7F\u7528 \`\`\`super\`\`\`
    - \u6307\u5411\u7236\u985E\uFF0C\u800C\u975E\u7236\u7C7B\u7684\u539F\u578B\u5C0D\u8C61(\`prototype\`)
    - \u900F\u904E \`\`\`super\`\`\` \u8ABF\u7528\u7236\u985E\u65B9\u6CD5\u6642\uFF0C\u5185\u90E8\u7684 \`\`\`this\`\`\` \u6307\u5411\u5B50\u985E\u975E\u5B50\u985E\u7684\u5BE6\u4F8B
  \`\`\`js
  class Person {
    constructor(name) {
      this.name = name;
      console.log(this);
    }

    speak() {
      console.log('speak');
      console.log(this);// \u82E5\u662F\u5B50\u985E\u547C\u53EB\u5247\u8F38\u51FA\u5B50\u985E\u5BE6\u4F8B
    }

    static speak() {
      console.log('Person speak');
      console.log(this);// \u82E5\u662F\u5B50\u985E\u547C\u53EB\u5247\u8F38\u51FA\u5B50\u985E\u539F\u578B
    }
  }

  class Programmer extends Person {
    constructor(name, sex) {
      super(name, sex);
      console.log(super.name);// undefined
    }

    speak() {
      super.speak();// \u547C\u53EB\u7236\u985E\u5BE6\u4F8B\u65B9\u6CD5
      console.log('Programmer speak');
    }

    // \u5728\u975C\u614B\u65B9\u6CD5\u4E2D\u4F7F\u7528 super
    static speak() {
      super.speak();// \u547C\u53EB\u7236\u985E\u975C\u614B\u65B9\u6CD5
      console.log('Programmer speak');
    }
  }
  new Programmer('test').speak();
  Programmer.speak();
  \`\`\`

<hr id="user-content-destructuring-assignment" style="height: 4px;">

### \u5176\u4ED6\u7528\u6CD5
#### <a href="#user-content-top">\u89E3\u69CB\u8CE6\u503C</a>
- \u4E3B\u8981\u70BA\u89E3\u6790\u67D0\u6578\u64DA\u7D50\u69CB\u4E26\u65B9\u4FBF\u53D6\u5F97\u7D50\u69CB\u4E2D\u8CC7\u6599
- \u6578\u7D44\u6216\u985E\u6578\u7D44(\u5982\`\`\`arguments\`\`\`)\u7684\u89E3\u69CB\u8CE6\u503C
  - \u4F9D\u7D50\u69CB\u5339\u914D\u5BE6\u4F8B
    \`\`\`js
    // \u4F9D\u7D22\u5F15\u503C\u7684\u5B8C\u6210\u8D4B\u503C
    const [a, b, c] = [1, 2, 3];
    console.log(a, b, c);// 1 2 3

    // \u82E5\u4E0D\u53D6\u8A72\u7D22\u5F15\u5167\u5BB9\uFF0C\u53EF\u7528\u9017\u865F\u8DF3\u904E
    const [a, [, , b], c] = [1, [2, 4, 5], 3];
    console.log(a, b, c);// 1 5 3

    // \u4EA4\u63DB\u8B8A\u91CF\u7684\u503C
    let x = 1;
    let y = 2;
    [x, y] = [y, x];
    console.log(x, y);// 2 1
    \`\`\`
  - \u4F7F\u7528\u9ED8\u8A8D\u503C\u5BE6\u4F8B
    - \u82E5\u9ED8\u8A8D\u503C\u70BA\u8868\u9054\u5F0F\uFF0C\u5247\u70BA\u60F0\u6027\u6C42\u503C
    - \u7576\u6578\u7D44\u6210\u54E1\`\`\`\u56B4\u683C\u7B49\u65BC(===)undefined\`\`\`\uFF0C\u5C0D\u61C9\u7684\u9ED8\u8A8D\u503C\u624D\u6703\u751F\u6548
      \`\`\`js
      // \u57FA\u672C\u7528\u6CD5
      const [a = 1, b = 2] = [];
      console.log(a, b);// 1 2

      // \u751F\u6548\u689D\u4EF6\u7BC4\u4F8B
      const [a = 1, b = 2] = [3, null];
      console.log(a, b);// 3 null

      /*
        \u9ED8\u8A8D\u503C\u8868\u9054\u5F0F\u70BA\u60F0\u6027\u6C42\u503C
        \u5148\u89E3\u69CB\uFF0C\u82E5\u53D6\u503C\u4E0D\u5230\u518D\u53BB\u57F7\u884C\u8868\u9054\u5F0F
      */
      const func = () => {
        console.log('did');
        return 2;
      };
      const [x = func()] = [];// did
      console.log(x);// 2
      \`\`\`
- \u5C0D\u8C61\u7684\u89E3\u69CB\u8CE6\u503C
  - \u4F9D\u5C5E\u6027\u540D\u5B8C\u6210\u8D4B\u503C
    \`\`\`js
    // \u82E5\u540D\u7A31\u8207\u5C6C\u6027\u540D\u76F8\u540C\u53EF\u7701\u7565\u540D\u7A31(\u4E0B\u9762\u5169\u884C\u76F8\u7B49)
    const { age, username } = { username: 'test', age: 18 };
    const { age: age, username: username } = { username: 'test', age: 18 };

    // \u53D6\u5225\u540D
    const { age: age, username: uname } = { username: 'test', age: 18 };
    console.log(age, uname);// 18 test
    \`\`\`
  - \u4F7F\u7528\u9ED8\u8A8D\u503C\u5BE6\u4F8B
    - \u82E5\u9ED8\u8A8D\u503C\u70BA\u8868\u9054\u5F0F\uFF0C\u5247\u70BA\u60F0\u6027\u6C42\u503C
    \`\`\`js
    const { username = 'ZhangSan', age = 0 } = { username: 'test' };
    console.log(username, age);// test 0
    \`\`\`
  - \u5728\u5DF2\u8072\u660E\u7684\u8B8A\u91CF\u7528\u65BC\u5C0D\u8C61\u7684\u89E3\u69CB\u8CE6\u503C\uFF0C\u5247\u8CE6\u503C\u9700\u5728\u5C0F\u62EC\u865F\u5167\u9032\u884C
    \`\`\`js
    let x = 2;
    ({ x } = { x: 1 });// \u700F\u89BD\u5668\u6703\u8AA4\u8A8D{}\u70BA\u5340\u584A\u975E\u5C0D\u8C61
    console.log(x);// 1
    \`\`\`
- \u5176\u4ED6\u985E\u578B\u7684\u89E3\u69CB\u8CE6\u503C
  - \u5B57\u7B26\u4E32\u7684\u89E3\u69CB\u8CE6\u503C
    \`\`\`js
    // \u6578\u7D44\u5F62\u5F0F\u7684\u89E3\u69CB\u8CE6\u503C
    const [a, b, , , c] = 'hello';
    console.log(a, b, c);// h e o

    // \u5C0D\u8C61\u5F62\u5F0F\u7684\u89E3\u69CB\u8CE6\u503C
    const { 0: a, 1: b, length } = 'hello';
    console.log(a, b, length);// h e 5
    \`\`\`
  - \u6578\u503C(\u6216\u5E03\u6797\u503C)\u7684\u89E3\u69CB\u8CE6\u503C
    \`\`\`js
    // \u6703\u5148\u5C07\u7B49\u865F\u53F3\u908A\u8F49\u70BA\u5C0D\u8C61
    // = new Number(123);
    const { toString:b } = 123;
    console.log(b);// \u0192 toString() { [native code] }
    \`\`\`
  - undefined \u548C null \u7121\u6CD5\u89E3\u69CB\u8CE6\u503C
    \`\`\`js
    const { toString } = undefined;// Cannot destructure property 'toString'
    const { toString } = null;// Cannot destructure property 'toString'
    \`\`\`

<hr id="user-content-object-function-promote" style="height: 2px;">

#### <a href="#user-content-top">\u5C0D\u8C61\u8207\u51FD\u6578\u7684\u63D0\u5347</a>
- \u5C0D\u8C61\u7684\u7C21\u6F54\u8868\u793A\u6CD5
  - \u5C6C\u6027\u7C21\u6F54\u8868\u793A\u6CD5
    \`\`\`js
    // key\u503C\u82E5\u8207\u8B8A\u91CF\u6216\u5E38\u91CF\u540D\u4E00\u6A23\uFF0C\u53EF\u53EA\u5BEB\u4E00\u500B
    const age = 18;
    const person = {
      // age: age
      age
    };
    console.log(person);
    \`\`\`
  - \u65B9\u6CD5\u7C21\u6F54\u8868\u793A\u6CD5
    \`\`\`js
    // \u53EF\u4EE5\u7701\u7565\u5192\u865F\u548Cfunction\u95DC\u9375\u5B57
    const person = {
      // speak: function () {}
      speak() {}
    };
    console.log(person);
    \`\`\`
- \u51FD\u6578\u7684\u9ED8\u8A8D\u53C3\u6578
  - \u51FD\u6578\u8ABF\u7528\u6642\u6C92\u6709\u50B3\u53C3\u6578\u624D\u4F7F\u7528\u9ED8\u8A8D\u53C3\u6578
  - \u6CE8\u610F\u4E8B\u9805
    - \u4E0D\u50B3\u53C3\u6578\u6216\u50B3undefined\u4F5C\u70BA\u53C3\u6578\uFF0C\u9ED8\u8A8D\u503C\u624D\u6703\u751F\u6548
    - \u8207\u524D\u9762\u76F8\u540C\u9ED8\u8A8D\u503C\u70BA\u8868\u9054\u5F0F\u6642\u662F\u60F0\u6027\u6C42\u503C\u7684
    - \u8A2D\u7F6E\u9ED8\u8A8D\u53C3\u6578\u5EFA\u8B70\u5F9E\u6700\u53F3\u908A\u958B\u59CB(\u50B3\u7684\u53C3\u6578\u8F03\u5C11\u6642\u6703\u8B80\u53D6\u9ED8\u8A8D\u503C)
    \`\`\`js
    const multiply = (x, y = 1) => x * y;
    console.log(multiply(2));// 2

    const multiply2 = (x = 1, y) => x * y;
    console.log(multiply2(2));// NaN
    console.log(multiply2(2, undefined));// NaN
    \`\`\`
  - \u7D93\u5178\u7BC4\u4F8B(\u7D50\u5408\u9ED8\u8A8D\u53C3\u6578\u8207\u89E3\u69CB\u8CE6\u503C)
    \`\`\`js
    /*
      1.\u5229\u7528\u89E3\u69CB\u8CE6\u503C\u7279\u6027\u65B9\u4FBF\u8ABF\u7528\u5C6C\u6027
      2.\u5229\u7528\u9ED8\u8A8D\u503C\u7279\u6027\u7D66\u4E88\u8A72\u5C0D\u8C61\u6C92\u503C\u6642\u7684\u9ED8\u8A8D\u503C
      3.\u70BA\u907F\u514D\u50B3\u9032\u53BB\u7684\u53C3\u6578\u975E\u5C0D\u8C61,\u6240\u4EE5\u9810\u8A2D\u5148\u7D66\u4E00\u500B\u7A7A\u5C0D\u8C61(={})
        \u518D\u5229\u7528\u7B2C2\u9EDE\u8207\u7B2C1\u9EDE\u7279\u6027\u4F7F\u7528\u89E3\u69CB\u8CE6\u503C\u7D66\u4E88\u5C0D\u8C61\u5C6C\u6027\u8207\u9ED8\u8A8D\u503C
    */
    const logUser = 
    ({ username = 'test', age = 0, sex = 'male' } = {}) =>
    console.log(username, age, sex);
    logUser();// test 0 male
    \`\`\`

<hr id="user-content-rest-parameter" style="height: 2px;">

#### <a href="#user-content-top">\u5269\u9918\u53C3\u6578</a>
- \u8868\u793A\u4E0D\u78BA\u5B9A\u6578\u91CF\u7684\u53C3\u6578\uFF0C\u4E26\u5C07\u5176\u8996\u70BA\u4E00\u500B\u6578\u7D44
- \u5373\u4F7F\u6C92\u6709\u591A\u9918\u7684\u53C3\u6578\uFF0C\u5269\u9918\u53C3\u6578\u4E5F\u6703\u662F\u4E00\u500B\u7A7A\u6578\u7D44
- \u6CE8\u610F\u4E8B\u9805
  - \u7BAD\u982D\u51FD\u6578\u7684\u53C3\u6578\u5373\u4F7F\u53EA\u6709\u4E00\u500B\u5269\u9918\u53C3\u6578\uFF0C\u4E5F\u4E0D\u80FD\u7701\u7565\u62EC\u865F
    \`\`\`js
    // \u4E0D\u80FD\u7701\u7565\u5C0F\u62EC\u865F
    // \u5EFA\u8B70\u4F7F\u7528\u5269\u9918\u53C3\u6578\u53D6\u4EE3arguments
    const add = (...args) => {};
    \`\`\`
  - \u5269\u9918\u53C3\u6578\u53EA\u80FD\u70BA\u6700\u5F8C\u4E00\u500B\u53C3\u6578\uFF0C\u4E4B\u5F8C\u4E0D\u80FD\u518D\u6709\u5176\u4ED6\u53C3\u6578\uFF0C\u5426\u5247\u5831\u932F
    \`\`\`js
    const add = (x, y, ...args) => {
      console.log(args);
    };
    \`\`\`
- \u7BC4\u4F8B
  \`\`\`js
  // \u642D\u914D\u89E3\u69CB\u8CE6\u503C
  // \u6578\u7D44
  const [num, ...args] = [1, 2, 3, 4];
  console.log(args);// (3)\xA0[2, 3, 4]
  // \u5C0D\u8C61
  const { x, y, ...z } = { a: 3, x: 1, y: 2, b: 4 };
  console.log(z);// {a: 3, b: 4}
  \`\`\`

<hr id="user-content-spread-operator" style="height: 2px;">

#### <a href="#user-content-top">\u5C55\u958B\u904B\u7B97\u7B26</a>
- \u5C07\u53EF\u8FED\u4EE3\u7684\u9663\u5217\u6216\u5B57\u4E32\u5C55\u958B\u6210\u591A\u500B\u5143\u7D20
- \u5982\u679C\u662F\u7269\u4EF6\u7684\u8A71\u5247\u5C55\u958B\u6210\u591A\u500Bkey-value
- \u6578\u7D44\u5C55\u958B\u7BC4\u4F8B
  \`\`\`js
  // \u4EE5\u524D\u7121\u5C55\u958B\u904B\u7B97\u7B26\u505A\u6CD5(\u56E0\u70BAMath.min()\u53EA\u80FD\u4F9D\u5E8F\u653E\u5165\u53C3\u6578)
  console.log(Math.min.apply(null,[3, 1, 2]));
  // \u73FE\u5728\u505A\u6CD5
  console.log(Math.min(...[3, 1, 2]));
  // \u76F8\u7576\u65BC
  console.log(Math.min(3, 1, 2));
  // \u5408\u4F75\u6578\u7D44
  const a = [1, 2];
  const b = [3];
  const c = [4, 5];
  console.log([1, ...b, 2, ...a, ...c, 3]);// (8)\xA0[1, 3, 2, 1, 2, 4, 5, 3]
  // \u5B57\u4E32\u5C55\u958B\u6210\u6578\u7D44
  console.log(...'test');// t e s t
  // \u985E\u6578\u7D44\u8F49\u63DB\u70BA\u6578\u7D44
  function func() {
    console.log([...arguments]);
  }
  \`\`\`
- \u5C0D\u8C61\u5C55\u958B\u7BC4\u4F8B
  - \u5C0D\u8C61\u4E0D\u80FD\u76F4\u63A5\u5C55\u958B\uFF0C\u9700\u5728 \`\`\`{}\`\`\` \u4E2D\u5C55\u5F00
  - \u5728\u5408\u4F75\u5C0D\u8C61\u6642\uFF0C\u5F8C\u8005\u6703\u8986\u84CB\u524D\u8005\u76F8\u540C\u5C6C\u6027
    \`\`\`js
    const apple = {
      color: '\u7EA2\u8272',
      shape: '\u7403\u5F62',
      taste: '\u751C'
    };
    const pen = {
      color: '\u9ED1\u8272',
      shape: '\u5706\u67F1\u5F62',
      use: '\u5BEB\u5B57'
    };
    console.log({ ...apple, ...pen });
    // {color: '\u9ED1\u8272', shape: '\u5706\u67F1\u5F62', taste: '\u751C', use: '\u5BEB\u5B57'}
    \`\`\`
  - \u975E\u5C0D\u8C61\u5C55\u958B
    - \u6703\u81EA\u52D5\u8F49\u63DB\u6210\u5C0D\u8C61\uFF0C\u5C07\u5176\u5C6C\u6027\u7F85\u5217\u51FA\u4F86
    \`\`\`js
    console.log({ ...1 });// {}
    console.log({ ...undefined });// {}
    console.log({ ...null });// {}
    console.log({ ...true });// {}
    // \u82E5\u662F\u5B57\u7B26\u4E32\uFF0C\u6703\u81EA\u52D5\u8F49\u63DB\u4E00\u500B\u985E\u4F3C\u6578\u7D44\u5C0D\u8C61
    console.log({ ...'test' });// {0: "t", 1: "e", 2: "s", 3: "t"}
    \`\`\`

<hr id="user-content-set-object" style="height: 2px;">

#### <a href="#user-content-top">Set \u7269\u4EF6</a>
- Set\u70BA\u4E00\u7CFB\u5217\u7121\u5E8F\u3001\u7121\u91CD\u8907\u503C\u7684\u6578\u64DA\u96C6\u5408
- \u985E\u4F3C\u6578\u7D44\u4E0D\u80FD\u50CF\u6578\u7D44\u4E00\u6A23\u901A\u904E\u5B57\u9762\u91CF\u7684\u65B9\u5F0F\u5275\u5EFA \`\`\`const s = new Set();\`\`\`
- Set \u5C0D\u91CD\u8907\u503C\u7684\u5224\u65B7\u57FA\u672C\u9075\u5FAA\u56B4\u683C\u76F8\u7B49(===)\uFF0C\u4E26\u4E14\u5B9A\u7FA9 NaN \u7B49\u65BC NaN
- \u4F7F\u7528\u6642\u6A5F
  - \u6578\u7D44\u6216\u5B57\u7B26\u4E32\u53BB\u91CD\u6642
  - \u7121\u9808\u8A2A\u554F\u5167\u90E8\u6307\u5B9A\u9805\uFF0C\u53EA\u9700\u8981\u904D\u6B77\u6642
  - \u9700\u4F7F\u7528 Set \u63D0\u4F9B\u7684\u65B9\u6CD5\u548C\u5C6C\u6027\u6642
- Set \u53EF\u50B3\u5165\u7684\u53C3\u6578
  - \u6578\u7D44
    \`\`\`js
    const s = new Set([1, 2, 1]);
    console.log(s);// Set(2)\xA0{1, 2}
    \`\`\`
  - \u5B57\u7B26\u4E32
    \`\`\`js
    console.log(new Set('hi'));// Set(2)\xA0{'h', 'i'}
    \`\`\`
  - arguments
    \`\`\`js
    function func() {
      console.log(new Set(arguments));
    }
    func(1, 2, 1);// Set(2)\xA0{1, 2}
    \`\`\`
  - NodeList
    \`\`\`html
    <body>
      <p>1</p>
      <p>2</p>
      <p>3</p>
      <script>
        // Set(3)\xA0{p, p, p}
        console.log(new Set(document.querySelectorAll('p')));
      <\/script>
    </body>
    \`\`\`
  - Set
    \`\`\`js
    const s = new Set([1, 2, 1]);
    // \u8907\u88FDset
    console.log(new Set(s) === s);//false (\u5F15\u7528\u985E\u578B)
    console.log(s);// Set(2)\xA0{1, 2}
    \`\`\`
- Set \u5C6C\u6027\u8207\u65B9\u6CD5
  - size \u5C6C\u6027
    \`\`\`js
    const s = new Set();
    s.add(1).add(2).add(2);
    console.log(s);// Set(2)\xA0{1, 2}
    console.log(s.size);// 2
    \`\`\`
  - add \u65B9\u6CD5
    \`\`\`js
    const s = new Set();
    s.add(1).add(2).add(2);
    console.log(s);// Set(2)\xA0{1, 2}
    \`\`\`
  - has \u65B9\u6CD5
    \`\`\`js
    const s = new Set();
    s.add(1).add(2).add(2);
    console.log(s.has(1));// true
    console.log(s.has(3));// false
    \`\`\`
  - delete \u65B9\u6CD5
    - delete \u4E0D\u5B58\u5728\u7684\u6210\u54E1\uFF0C\u4E0D\u6703\u5831\u932F\u4E5F\u4E0D\u6703\u8F38\u51FA
    \`\`\`js
    const s = new Set();
    s.add(1).add(2).add(2);
    s.delete(1);
    s.delete(3);
    console.log(s);// Set(1)\xA0{2}
    \`\`\`
  - clear \u65B9\u6CD5
    \`\`\`js
    const s = new Set();
    s.add(1).add(2).add(2);
    s.clear();
    console.log(s);// Set(0)\xA0{size: 0}
    \`\`\`
  - forEach \u65B9\u6CD5
    - \u7B2C\u4E00\u500B\u53C3\u6578\u662F\u56DE\u8ABF\u51FD\u6578\uFF0C\u7B2C\u4E8C\u500B\u53C3\u6578\u6307\u5B9A\u4E86\u56DE\u8ABF\u51FD\u6578\u4E2Dthis\u5C0D\u8C61
    - \u82E5\u56DE\u8ABF\u51FD\u6578\u662F\u7BAD\u982D\u51FD\u6578\uFF0C\u5247\u7B2C\u4E8C\u500B\u53C3\u6578\u4E0D\u6703\u5F71\u97FF\u8A72\u51FD\u6578\u5167\u7684this\u6307\u5411
    - \u6703\u6309\u7167\u6210\u54E1\u6DFB\u52A0\u96C6\u5408\u7684\u9806\u5E8F\u904D\u6B77
    \`\`\`js
    s.forEach( function (value, key, set) {
      // Set \u4E2D value = key\u3001set = s
      console.log(value, key, set === s);
      // \u82E5\u70BA function \u5247\u8F38\u51FA document(\u8981\u56DE\u50B3\u7684\u5C0D\u8C61)
      // \u82E5\u70BA \u7BAD\u982D\u51FD\u6578 \u5247\u8F38\u51FA window (\u56E0\u70BA\u8A72\u51FD\u6578\u5728\u5168\u5C40\u5B9A\u7FA9)
      console.log(this);// #document
    }, document);
    \`\`\`
- \u7BC4\u4F8B
  \`\`\`html
  <body>
    <p>1</p>
    <p>2</p>
    <p>3</p>
    <script>
      // \u6578\u7D44\u53BB\u91CD
      console.log([...new Set([1, 2, 1])]);// [1, 2]
      // \u5B57\u7B26\u4E32\u53BB\u91CD
      console.log([...new Set('abbacbd')].join(''));// abcd
      // \u904D\u6B77
      const s = new Set(document.querySelectorAll('p'));
      s.forEach(function (elem) {
        elem.style.color = 'red';
        elem.style.backgroundColor = 'yellow';
      });
    <\/script>
  </body>
  \`\`\`

<hr id="user-content-map-object" style="height: 2px;">

#### <a href="#user-content-top">Map \u7269\u4EF6</a>
- Map \u662F\u9375\u503C\u5C0D\u7684\u96C6\u5408
- Map \u5224\u65AD\u952E\u540D\u662F\u5426\u76F8\u540C\u57FA\u672C\u9075\u5FAA\u56B4\u683C\u76F8\u7B49(===)\uFF0C\u4E26\u4E14\u5B9A\u7FA9 NaN \u7B49\u65BC NaN
- \u4F7F\u7528\u6642\u6A5F
  - \u9700\u8981 key -> value \u7D50\u69CB\uFF0C\u6216\u5B57\u7B26\u4E32\u4EE5\u5916\u7684\u503C\u505Akey
  - \u6A21\u62DF\u73FE\u5BE6\u5BE6\u9AD4\u6642\uFF0C\u5EFA\u8B70\u624D\u4F7F\u7528\u5C0D\u8C61
- Map \u548C\u5C0D\u8C61\u7684\u5340\u522B
  - \u5C0D\u8C61\u4E00\u822C\u7528\u5B57\u7B26\u4E32\u7576\u9375
  - Map \u53EF\u5C07\u4EE5\u4E0B\u90FD\u4F5C\u70BA\u9375
    - \u57FA\u672C\u6578\u64DA\u985E\u578B\uFF1Anumber\u3001string\u3001boolean\u3001undefined\u3001null
    - \u5F15\u7528\u6578\u64DA\u985E\u578B\uFF1A\u5C0D\u8C61\uFF08[]\u3001{}\u3001\u51FD\u6570\u3001Set\u3001Map \u7B49\uFF09
    \`\`\`js
    const m = new Map();
    m.set('name', 'test');
    m.set(true, 'true');
    m.set({}, 'object');
    m.set(new Set([1, 2]), 'set');
    m.set(undefined, 'undefined');
    /*
      {
        "name" => "test",
        true => "true",
        {\u2026} => "object",
        Set(2) => "set",
        undefined => "undefined"
      }
    */
    console.log(m);
    \`\`\`
- Map \u53EF\u50B3\u5165\u7684\u53C3\u6578
  - \u4E8C\u7DAD\u6578\u7D44\uFF0C\u5FC5\u987B\u9AD4\u73FE\u9375\u548C\u503C
    \`\`\`js
    console.log(
      new Map([
        ['name', 'test'],
        ['age', 18]
      ])
    );// {"name" => "test", "age" => 18}
    \`\`\`
  - Set\uFF0C\u5FC5\u987B\u9AD4\u73FE\u9375\u548C\u503C
    \`\`\`js
    const s = new Set([
      ['name', 'test'],
      ['age', 18]
    ]);
    console.log(new Map(s));// {"name" => "test", "age" => 18}
    console.log(s);// {Array(2), Array(2)}
    \`\`\`
  - Map
    \`\`\`js
    // \u8907\u88FD\u4E86\u4E00\u4E2A\u65B0Map
    const m1 = new Map([
      ['name', 'test'],
      ['age', 18]
    ]);
    console.log(m1);// {"name" => "test", "age" => 18}
    const m2 = new Map(m1);
    console.log(m2, m2 === m1);// {"name" => "test", "age" => 18} false
    \`\`\`
- Map \u5C6C\u6027\u8207\u65B9\u6CD5
  - size \u5C6C\u6027
    \`\`\`js
    const m = new Map();
    m.set('age', 18).set(true, 'true').set('age', 20);
    console.log(m.size);// 2
    \`\`\`
  - set \u65B9\u6CD5
    - \u6DFB\u52A0\u7684\u65B0\u6210\u5458\uFF0C\u9375\u82E5\u5DF2\u5B58\u5728\uFF0C\u5F8C\u6DFB\u52A0\u7684\u9375\u503C\u6703\u8986\u84CB\u524D\u9762\u7684
    \`\`\`js
    const m = new Map();
    m.set('age', 18).set(true, 'true').set('age', 20);
    console.log(m);// Map(2)\xA0{'age' => 20, true => 'true'}
    \`\`\`
  - get \u65B9\u6CD5
    - \u7372\u53D6\u4E0D\u5B58\u5728\u7684\u6210\u54E1\uFF0C\u8FD4\u56DE \`\`\`undefined\`\`\`
    \`\`\`js
    const m = new Map();
    m.set('age', 18).set(true, 'true').set('age', 20);
    console.log(m.get('true'));// undefined
    console.log(m.get(true));// true
    \`\`\`
  - has \u65B9\u6CD5
    \`\`\`js
    const m = new Map();
    m.set('age', 18).set(true, 'true').set('age', 20);
    console.log(m.has('age'));// true
    console.log(m.has('true'));// false
    \`\`\`
  - delete \u65B9\u6CD5
    - delete \u4E0D\u5B58\u5728\u7684\u6210\u54E1\uFF0C\u4E0D\u6703\u5831\u932F\u4E5F\u4E0D\u6703\u8F38\u51FA
    \`\`\`js
    const m = new Map();
    m.set('age', 18).set(true, 'true').set('age', 20);
    m.delete('age');
    m.delete('name');
    console.log(m);// Map(1)\xA0{true => 'true'}
    \`\`\`
  - clear \u65B9\u6CD5
    \`\`\`js
    const m = new Map();
    m.set('age', 18).set(true, 'true').set('age', 20);
    m.clear();
    console.log(m);// Map(0)\xA0{size: 0}
    \`\`\`
  - forEach \u65B9\u6CD5
    - \u7B2C\u4E00\u500B\u53C3\u6578\u662F\u56DE\u8ABF\u51FD\u6578\uFF0C\u7B2C\u4E8C\u500B\u53C3\u6578\u6307\u5B9A\u4E86\u56DE\u8ABF\u51FD\u6578\u4E2Dthis\u5C0D\u8C61
    - \u82E5\u56DE\u8ABF\u51FD\u6578\u662F\u7BAD\u982D\u51FD\u6578\uFF0C\u5247\u7B2C\u4E8C\u500B\u53C3\u6578\u4E0D\u6703\u5F71\u97FF\u8A72\u51FD\u6578\u5167\u7684this\u6307\u5411
    \`\`\`js
    const m = new Map();
    m.set('age', 18).set(true, 'true').set('age', 20);
    m.forEach(function (value, key, map) {
      console.log(value, key, map === m);
      console.log(this);// #document
    }, document);
    \`\`\`
- \u7BC4\u4F8B
  \`\`\`html
  <body>
    <p>1</p>
    <p>2</p>
    <p>3</p>
    <script>
      const [p1, p2, p3] = document.querySelectorAll('p');
      const m = new Map([
        [
          p1,
          {
            color: 'red',
            backgroundColor: 'yellow',
            fontSize: '40px'
          }
        ],
        [
          p2,
          {
            color: 'green',
            backgroundColor: 'pink',
            fontSize: '40px'
          }
        ],
        [
          p3,
          {
            color: 'blue',
            backgroundColor: 'orange',
            fontSize: '40px'
          }
        ]
      ]);

      // \u5229\u7528\u6BCF\u4E00\u500B\u5143\u7D20\u8207css\u5C6C\u6027\u7684\u5C0D\u61C9\u95DC\u4FC2\u505A\u904D\u6B77
      m.forEach((propObj, elem) => {
        for (const p in propObj) {
          elem.style[p] = propObj[p];
        }
      });
    <\/script>
  </body>
  \`\`\`

<hr id="user-content-iterator-for-of" style="height: 2px;">

#### <a href="#user-content-top">Iterator \u8207 for-of \u5FAA\u74B0</a>
- Iterator \u8FED\u4EE3\u5668
  - \u4F55\u8B02 Iterator
    \`\`\`txt
    Symbol.iterator\uFF08\u53EF\u904D\u5386\u5BF9\u8C61\u7684\u751F\u6210\u65B9\u6CD5\uFF09 ->
    it\uFF08\u53EF\u904D\u5386\u5BF9\u8C61\uFF09 -> it.next() ->...\uFF08\u76F4\u5230 done \u4E3A true\uFF09
    \`\`\`
  - \u70BA\u4F55\u9700\u8981 Iterator
    - Iterator \u662F\u4E00\u500B\u7D71\u4E00\u7684\u904D\u6B77\u65B9\u5F0F
    - \u904D\u6B77\u6578\u7D44\uFF1Afor \u5FAA\u74B0 \u548C forEach\u65B9\u6CD5
    - \u904D\u6B77\u5C0D\u8C61\uFF1Afor in \u5FAA\u74B0
  - \u4EE5\u4E0B\u70BA\u5E38\u7528\u5230 Iterator \u7684\u5834\u5408
    - for-of
    - \u5C55\u958B\u904B\u7B97\u7B26
    - \u89E3\u69CB\u8CE6\u503C
    - Set \u548C Map \u7684\u69CB\u9020\u51FD\u6578
  - \u7BC4\u4F8B
    \`\`\`js
    const it = [1, 2][Symbol.iterator]();
    console.log(it.next()); // {value: 1, done: false}
    console.log(it.next()); // {value: 2, done: false}
    console.log(it.next()); // {value: undefined, done: true}
    \`\`\`
- for-of \u5FAA\u74B0
  - \u70BA iterator \u7684\u5C01\u88DD
  - \u53EA\u6703\u904D\u6B77\u51FA done \u70BA false \u6642\u5C0D\u61C9\u7684 value \u503C
  - \u7BC4\u4F8B
    - keys() \u5F97\u5230\u53EF\u904D\u6B77\u5C0D\u8C61\u7D22\u5F15\u503C
    - values() \u5F97\u5230\u53EF\u904D\u6B77\u5C0D\u8C61\u5167\u5BB9
    - entries() \u5F97\u5230\u53EF\u904D\u6B77\u5C0D\u8C61\u7D22\u5F15+\u5167\u5BB9\u7EC4\u6210\u7684\u6578\u7D44
    \`\`\`js
    const arr = [1, 2, 3];
    // \u4F9D\u5E8F\u5217\u51FA 1 2 3
    for (const item of arr) {
      console.log(item);
    }

    // \u8207 break\u3001continue \u4E00\u8D77\u4F7F\u7528
    // \u4F9D\u5E8F\u5217\u51FA 1 3
    for (const item of arr) {
      if (item === 2) {
        continue;
      }
      console.log(item);
    }

    // entries() \u5F97\u5230\u53EF\u904D\u6B77\u5C0D\u8C61\u7D22\u5F15+\u5167\u5BB9\u7EC4\u6210\u7684\u6578\u7D44
    // \u4E26\u5229\u7528\u89E3\u69CB\u8CE6\u503C\u89E3\u69CB
    for (const [index, value] of arr.entries()) {
      console.log(index, value);
    }
    \`\`\`
- \u539F\u751F\u53EF\u904D\u6B77\u5C0D\u8C61
  - \u4F55\u8B02\u539F\u751F\u53EF\u904D\u6B77\u5C0D\u8C61
    \`\`\`txt
    \u53EA\u8981\u6709 Symbol.iterator \u65B9\u6CD5\uFF0C
    \u4E26\u4E14\u6B64\u65B9\u6CD5\u53EF\u751F\u6210\u53EF\u904D\u6B77\u5C0D\u8C61\uFF0C\u5C31\u662F\u53EF\u904D\u6B77
    \u4E5F\u5C31\u53EF\u4F7F\u7528 for-of \u5FAA\u74B0\u6765\u904D\u6B77
    \`\`\`
  - \u539F\u751F\u53EF\u904D\u6B77\u5C0D\u8C61\u5927\u81F4\u4EE5\u4E0B\u5E7E\u7A2E
    - Array
    - String
    - Set
    - Map
    - Arguments
    - NodeList
  - \u5EFA\u7ACB\u975E\u539F\u751F\u53EF\u904D\u6B77\u5C0D\u8C61\u7684for-of
    \`\`\`js
    // \u5275\u5EFA\u4E00\u822C\u5C0D\u8C61
    const person = { sex: 'male', age: 18 };
    // \u5BE6\u73FEnext\u65B9\u6CD5\u4E26\u542B value & done \u5C6C\u6027 {next()} {value,done}
    person[Symbol.iterator] = () => {
      let index = 0;
      return {
        next() {
          index++;
          if (index === 1) {
            return {
              value: person.age,
              done: false
            };
          } else if (index === 2) {
            return {
              value: person.sex,
              done: false
            };
          } else {
            return {
              done: true
            };
          }
        }
      };
    };
    // \u4F9D\u5E8F\u5217\u51FA 18 male
    for (const item of person) {
      console.log(item);
    }
    \`\`\`
<hr id="user-content-symbol" style="height: 2px;">

#### <a href="#user-content-top">Symbol</a>
- \u70BAES6\u5F15\u5165\u7684\u57FA\u672C\u6578\u64DA\u985E\u578B
- \u4E3B\u8981\u7528\u9014\u662F\u8868\u793A\u7368\u4E00\u7121\u4E8C\u7684\u503C\uFF0C\u907F\u514D\u5C0D\u8C61\u5C6C\u6027\u88AB\u8986\u84CB
- \u57FA\u672C\u8A9E\u6CD5
  \`\`\`js
  // \u5275\u5EFA Symbol
  let test1 = Symbol();
  let test2 = Symbol();
  console.log(test1);// Symbol()
  console.log(test1 === test2);// false
  \`\`\`
- \u65B0\u589E Symbol \u8B8A\u91CF\u7684\u6558\u8FF0
  - \u589E\u52A0 Symbol \u7684\u53EF\u8B80\u6027
  \`\`\`js
  // \u5275\u5EFA\u4E26\u6558\u8FF0\u8A72Symbol
  let test1 = Symbol('test1');
  let test2 = Symbol('test2');
  console.log(test1);// Symbol(test1)
  console.log(test2);// Symbol(test2)
  \`\`\`
- Symbol \u5C6C\u6027\u7684\u904D\u6B77
  - Symbol\u4F5C\u70BA\u5C0D\u8C61\u5C6C\u6027\u6642\uFF0C\u4E0D\u6703\u51FA\u73FE\u5728for-in\u3001for-of\u5FAA\u74B0\u4E2D
  \`\`\`js
  let test1 = Symbol('test1');
  let test2 = Symbol('test2');
  let a = {
    name: 'test3',
    [test1]: 18,
    [test2]: function(){}
  }
  // \u53EA\u6703\u8F38\u51FA name
  for(const i in a){
    console.log(i);
  }
  \`\`\`
- Symbol.for()
  - \u53EF\u4EE5\u5275\u5EFA\u76F8\u540C\u7684Symbol
  \`\`\`js
  // \u5168\u5C40\u8A3B\u518A\u4EE5'test'\u70BA\u63CF\u8FF0\u7B26\u7684Symbol
  // \u82E5\u88E1\u9762\u53C3\u6578\u975E\u5B57\u4E32\u5247\u81EA\u52D5\u8F49\u63DB\u6210\u5B57\u4E32
  let test1 = Symbol.for('test');
  let test2 = Symbol.for('test');
  console.log(test1);// Symbol(test)
  console.log(test1 === test2);// true
  \`\`\`
- Symbol.keyFor()
  - \u67E5\u8A62\u5168\u5C40\u8A3B\u518ASymbol\u7684\u63CF\u8FF0\u7B26
  \`\`\`js
  let test1 = Symbol.for('test');
  let key = Symbol.keyFor(test1);
  console.log(key);// test
  \`\`\`
- Symbol \u8F49\u63DB\u5176\u4ED6\u985E\u578B\u503C
  \`\`\`js
  let s1 = Symbol('test');
  let s2 = String(s1);
  let s3 = Boolean(s1);
  let s4 = Number(s1);
  console.log(s2);// Symbol(test)
  console.log(s3);// true
  console.log(s4);// Cannot convert a Symbol value to a number
  \`\`\`

<hr id="user-content-function-throttle-lock" style="height: 2px;">

#### <a href="#user-content-top">Throttle \u7BC0\u6D41\u9396</a>
- \u529F\u80FD\uFF1A\u78BA\u4FDD\u51FD\u6578\u57F7\u884C\u4E2D\u9014\u4E0D\u6703\u518D\u6B21\u57F7\u884C
- \u4F7F\u7528\u60C5\u5883\uFF1A\u5E38\u4F7F\u7528\u5728\u52D5\u756B\u6216\u8F2A\u64AD\u5716\uFF0C\u907F\u514D\u4F7F\u7528\u8005\u77ED\u6642\u9593\u89F8\u767C\u591A\u6B21
- \u7BC4\u4F8B
  \`\`\`js
  var lock = true;
  function needToLock(){
    // \u5982\u679C\u95DC\u9589\u72C0\u614B\u5247\u4E0D\u57F7\u884C
    if(!lock) return;
    // \u9396\u4F4F
    lock = false;
    // \u4E00\u79D2\u904E\u5F8C\u958B\u9396
    setTimeout(function(){
      lock = true;
    }, 1000);
  }
  \`\`\`

<hr id="user-content-function-debounce" style="height: 2px;">

#### <a href="#user-content-top">debounce \u53BB\u6296\u52D5</a>
- \u529F\u80FD\uFF1A\u9810\u9632\u4F7F\u7528\u8005\u6216\u786C\u9AD4\u8A2D\u5099\u77ED\u6642\u9593\u5167\u89F8\u767C\u591A\u6B21
- \u4F7F\u7528\u60C5\u5883\uFF1A\u5E38\u4F7F\u7528\u5728\u767C\u9001\u8ACB\u6C42\u6216\u6EFE\u52D5\u4E8B\u4EF6\u6642\u4F7F\u7528
- \u7BC4\u4F8B
  \`\`\`js
  const input1 = document.getElementById('input1')
  function debounce(fn, delay = 500) {
    let timer = null
    return function () {
      // \u82E5\u91CD\u8907\u89F8\u767C\uFF0C\u5247\u6E05\u9664\u4E0A\u4E00\u500B\u6E96\u5099\u57F7\u884C\u7684\u8A08\u6642\u5668
      if (timer) {
          clearTimeout(timer)
      }
      timer = setTimeout(() => {
          // \u4F7F\u7528apply\u53EF\u4EE5\u8B93input\u7684e\u50B3\u5165\u4E26\u9032\u884C\u89F8\u767C
          fn.apply(this, arguments)
          // this=input1(\u56E0\u70BA\u662Finput1\u547C\u53EB)
          console.log('this=',this) 
          timer = null
      }, delay)
    }
  }

  input1.addEventListener('keyup', debounce(function (e) {
    console.log(e.target)
    console.log(input1.value)
  }, 600))
  \`\`\`

<hr id="user-content-separate-time-function" style="height: 2px;">

#### <a href="#user-content-top">\u5206\u6642\u51FD\u6578</a>
- \u529F\u7528\uFF1A\u9700\u55AE\u6B21\u6E32\u67D3\u5927\u91CF\u8CC7\u6599\u6642\u4F7F\u7528\uFF0C\u907F\u514D\u9020\u6210\u756B\u9762\u505C\u9813\u5361\u4F4F
- \u4F7F\u7528\u60C5\u5883\uFF1A\u7576\u5F8C\u7AEF\u4E00\u6B21\u6027\u7D66\u4E88\u5927\u91CF\u9805\u76EE\u8CC7\u6599\u6642\u53EF\u4F7F\u7528
- \u7BC4\u4F8B
  \`\`\`js
  /*
    dataArray\uFF1A\u9700\u4F9D\u5E8F\u653E\u5165\u6307\u5B9A\u51FD\u6578\u7684\u8CC7\u6599\u7684\u9663\u5217
    fn\uFF1A\u5C07\u9663\u5217\u4E2D\u55AE\u500B\u8CC7\u6599\u653E\u5165\u5F8C\u57F7\u884C\u7684\u51FD\u6578
    count\uFF1A\u6BCF\u6B21\u57F7\u884C\u8981\u8655\u7406\u9663\u5217\u5167\u591A\u5C11\u500B\u6578\u64DA
    duration\uFF1A\u6BCF\u6B21\u57F7\u884C\u7684\u79D2\u6578
  */
  const timeChunk = function(dataArray, fn, count, duration) {
    // \u82E5\u6C92\u6709\u8981\u8655\u7406\u7684\u8CC7\u6599\u5247\u76F4\u63A5\u8FD4\u56DE
    if(!dataArray || !dataArray.length) return;
    // \u5B58\u5132\u5B9A\u6642\u5668
    let timer;
    // \u9632\u6B62\u91CD\u8907\u57F7\u884C
    let isRunning = false;
    // \u5206\u6279\u57F7\u884C\u51FD\u6578
    let eachExecute = function() {
      for(let i = 0; i < Math.min(count || 1, dataArray.length); i++) {
        const obj = dataArray.shift();
        fn(obj);// \u57F7\u884C\u6307\u5B9A\u51FD\u6578
      }
    }

    return function() {
      if (isRunning) return;
      isRunning = true;
      // \u4F7F\u7528\u5B9A\u6642\u5668
      timer = setInterval(function() {
        // \u7576\u8CC7\u6599\u8655\u7406\u5B8C\u6210\u6642\uFF0C\u5C07\u5B9A\u6642\u5668\u6E05\u9664
        if (dataArray.length == 0) {
          clearInterval(timer);
          isRunning = false;
        }
        // \u82E5\u9084\u672A\u8655\u7406\u5B8C\u6210\u5247\u7E7C\u7E8C\u5206\u6279\u8655\u7406
        eachExecute();
      }, duration);
    }
  }

  const render = timeChunk(new Array(10), function() {console.log('render')}, 5, 1000);
  /*
    \u8F38\u51FA:
    render
    render
  */
  \`\`\`

<hr id="user-content-debugger" style="height: 2px;">

#### <a href="#user-content-top">\u65B7\u9EDE\u8ABF\u8A66 debugger</a>
- \u529F\u7528\uFF1A\u9700\u8981\u89C0\u5BDF\u5728\u7A0B\u5F0F\u4E2D\u5404\u9EDE\u9020\u6210\u7684\u9801\u9762\u8B8A\u5316\u6642
- \u67E5\u770B\u5404\u5BB6\u700F\u89BD\u5668\u652F\u6301\uFF1A[debugger](https://caniuse.com/?search=debugger)
- \u7BC4\u4F8B\uFF1A
  \`\`\`js
  console.log(111)
  // \u52A0\u5165 debugger\uFF0C\u700F\u89BD\u5668\u6703\u5728\u8A72\u9EDE\u66AB\u505C\u4E26\u53EA\u8F38\u51FA 111
  debugger
  console.log(222)
  \`\`\`
`;let s=e(!0),p=e(!1),g=e(!0),m=e(!1);const h=e(""),M={name:"JSNote",components:{Loading:v},setup(){return S(async()=>{if(s.value){const r=y({html:!0,linkify:!0,typographer:!0,highlight(a,l){return b.highlight(a,{language:l}).value}}).use(w);h.value=r.render(`${I}`),await t(()=>{s.value=!1},1e3).then(()=>t(()=>{g.value=!1,m.value=!0},500)).then(()=>t(()=>{p.value=!0,c()},100))}else c()}),j(),{showLoading:s,showContent:p,displayLoading:g,displayContent:m,htmlContent:h}}},B=["innerHTML"];function _(r,a,l,n,A,T){const f=P("Loading");return o(),i(E,null,[n.displayLoading?(o(),k(f,{key:0,class:u({"content--hide":!n.showLoading,"content--show":n.showLoading})},null,8,["class"])):d("",!0),n.displayContent?(o(),i("div",{key:1,class:u({"markdown-content":!0,"content--hide":!n.showContent,"content--show":n.showContent})},[N("div",{class:"markdown-body",innerHTML:n.htmlContent},null,8,B)],2)):d("",!0)],64)}const U=x(M,[["render",_]]);export{U as default};

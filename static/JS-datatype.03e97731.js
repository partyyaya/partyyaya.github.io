const n=`<span style="font-size: 32px; font-weight: 600;">JS \u8B8A\u91CF\u8207\u6578\u64DA\u985E\u578B</span>

## \u95DC\u65BC\u8B8A\u91CF
\`\`\`js
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
\`\`\`

## const\u3001let\u3001var
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

## \u8F38\u51FA\u8A9E\u53E5
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

## \u6578\u503C
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

## undefined & null
\`\`\`js
// undefined \u662F\u503C\u4E5F\u662F\u985E\u578B(\u9ED8\u8A8D\u503C)
console.log(typeof undefined)// undefined
// null: \u7A7A\u5C0D\u8C61\uFF0C\u82E5\u8981\u5C07 \u5C0D\u8C61\u3001\u6578\u7D44\u3001\u4E8B\u4EF6\u76E3\u807D \u92B7\u6BC0\u53EF\u4EE5\u8A2D\u70BA null
console.log(typeof null)// object
\`\`\`

## typeof
- \u7528\u4F86\u6AA2\u6E2C\u8B8A\u91CF\u7684\u6578\u64DA\u985E\u578B
- \u8FD4\u56DE\u503C\u6709 \`\`\`undefined\u3001Null\u3001Boolean\u3001Number\u3001String\u3001Object\`\`\`
- \u4F7F\u7528\u65B9\u6CD5\u6709\u5169\u7A2E\uFF1Atypeof \u8B8A\u91CF \u548C typeof(\u8B8A\u91CF)
  \`\`\`js
  var a = 123;
  var b = 'test';

  console.log(typeof a);// number
  console.log(typeof b);// string
  \`\`\`

## \u6578\u64DA\u985E\u578B\u8F49\u63DB
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

## \u6578\u64DA\u985E\u578B\u8868
| \u985E\u578B | typeof\u6AA2\u6E2C\u503C | \u7BC4\u4F8B |
| :-- | :-- | :-- |
| \u6578\u5B57\u985E\u578B | number | 1 |
| \u5B57\u4E32\u985E\u578B | string | 'test' |
| \u5E03\u723E\u985E\u578B | boolean | true false |
| undefined\u985E\u578B | undefined | undefined |
| null\u985E\u578B | object | null |
`;export{n as default};

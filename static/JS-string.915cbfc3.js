const n=`<span style="font-size: 32px; font-weight: 600;">JS \u5B57\u4E32</span>

## \u5B57\u4E32\u8207\u62FC\u63A5
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

## includes
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

## padStart\u3001padEnd
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

## trimStart\u3001trimEnd
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

## \u6A21\u677F\u5B57\u7B26\u4E32
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
`;export{n as default};

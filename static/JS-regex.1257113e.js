const n=`<span style="font-size: 32px; font-weight: 600;">JS \u6B63\u5247\u8868\u9054\u5F0F</span>

## \u5275\u5EFA\u8207\u4F7F\u7528
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

- \`\\r\`\u3001\`\\n\`\u3001\`\\r\\n\` \u5340\u5225
  
  | \u5B57\u7B26 | \u610F\u7FA9 |
  | :-- | :-- |
  | \`\\r\` | CR (Carriage Return)\uFF0C\u5C07\u5149\u6A19\u79FB\u52D5\u5230\u884C\u9996\uFF0C\u4E0D\u5230\u4E0B\u4E00\u884C |
  | \`\\n\` | Line Feed\uFF0C\u5C07\u5149\u6A19\u5411\u4E0B\u79FB\u52D5\u5230\u4E0B\u4E00\u884C\uFF0C\u4E0D\u8FD4\u56DE\u5230\u884C\u9996(unix\u6703\u56DE\u884C\u9996) |
  | \`\\r\\n\` | End Of Line\uFF0C\u7D50\u5408\u4E0A\u9762\u4E8C\u8005 |

- \u76F8\u95DC\u65B9\u6CD5
  - \u4FEE\u98FE\u7B26
    - \u4FEE\u98FE\u7B26\u4E5F\u53EB\u6A19\u8A8C \`flags\` \u53EF\u4EE5\u4F7F\u7528\u4F86\u9032\u884C\u9AD8\u7D1A\u641C\u7D22
    - \u8AAA\u660E

    | \u4FEE\u98FE\u7B26 | \u610F\u7FA9 |
    | :-- | :-- |
    | \`m\` | \u591A\u884C\u641C\u7D22\uFF0C\u53EA\u9069\u7528\u5728\u6709 \`^\` \u8207 \`$\` \u7684\u6A21\u5F0F |
    | \`i\` | \u4E0D\u5340\u5206\u5927\u5C0F\u5BEB\u641C\u7D22 |
    | \`g\` | \u5168\u5C40\u641C\u7D22 |
    
    - \u7BC4\u4F8B
    \`\`\`js
    var regx = /^b./g
    var str = 'ret76 dfsdf\\r\\nbjfsdfs dffs\\r\\nb76dsf sdfsdf'
    console.log(str.match(regx))// null
    
    var regx = /^b./m
    var str = 'ret76 dfsdf\\r\\nbjfsdfs dffs\\r\\nb76dsf sdfsdf'
    console.log(str.match(regx))// ['bj']
    
    var regx = /^b./mg // g\u3001m \u53EF\u4EA4\u63DB
    var str = 'ret76 dfsdf\\r\\nbjfsdfs dffs\\r\\nb76dsf sdfsdf'
    console.log(str.match(regx))//\xA0['bj', 'b7']
    \`\`\`
  - \`test()\`
    - \u6E2C\u8A66\u67D0\u5B57\u7B26\u4E32\u662F\u5426\u5339\u914D\u6B63\u5247\u8868\u9054\u5F0F\uFF0C\u8FD4\u56DE\u5E03\u6797\u503C
    - \u7BC4\u4F8B
    \`\`\`js
    var regexp1 = /^\\d{6}$/;
    var str = '555666';
    console.log(regexp1.test(str));// true
    \`\`\`
  - \`exec()\`
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

## \u5143\u5B57\u7B26
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

## \u65B9\u62EC\u865F\u8868\u793A\u6CD5
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

## \u5B57\u4E32\u76F8\u95DC\u65B9\u6CD5
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

## \u91CF\u8A5E
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
`;export{n as default};

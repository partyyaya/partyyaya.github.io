const n=`<span style="font-size: 32px; font-weight: 600;">JS \u5176\u4ED6\u7528\u6CD5</span>

## \u89E3\u69CB\u8CE6\u503C
- \u4E3B\u8981\u70BA\u89E3\u6790\u67D0\u6578\u64DA\u7D50\u69CB\u4E26\u65B9\u4FBF\u53D6\u5F97\u7D50\u69CB\u4E2D\u8CC7\u6599

### \u6578\u7D44\u6216\u985E\u6578\u7D44\u7684\u89E3\u69CB\u8CE6\u503C
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

### \u5C0D\u8C61\u7684\u89E3\u69CB\u8CE6\u503C
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
  
  // \u7D50\u5408\u5225\u540D\u8207\u9ED8\u8A8D\u503C
  const { username: uname = 'ZhangSan', age = 123 } = { username: 'test' };
  console.log(uname, age);// test 123
  \`\`\`
- \u5728\u5DF2\u8072\u660E\u7684\u8B8A\u91CF\u7528\u65BC\u5C0D\u8C61\u7684\u89E3\u69CB\u8CE6\u503C\uFF0C\u5247\u8CE6\u503C\u9700\u5728\u5C0F\u62EC\u865F\u5167\u9032\u884C
  \`\`\`js
  let x = 2;
  ({ x } = { x: 1 });// \u700F\u89BD\u5668\u6703\u8AA4\u8A8D{}\u70BA\u5340\u584A\u975E\u5C0D\u8C61
  console.log(x);// 1
  \`\`\`

### \u5176\u4ED6\u985E\u578B\u7684\u89E3\u69CB\u8CE6\u503C
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

## \u5C0D\u8C61\u8207\u51FD\u6578\u7684\u63D0\u5347
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
    ({ username = 'test', age = 0, sex = 'male' } = {}) => console.log(username, age, sex);
    logUser();// test 0 male
    \`\`\`

## \u5269\u9918\u53C3\u6578
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

## \u5C55\u958B\u904B\u7B97\u7B26
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

## Set \u7269\u4EF6
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

## Map \u7269\u4EF6
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

## Iterator \u8207 for-of \u5FAA\u74B0
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

## Symbol
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

## fetch
- \u70BA\u5168\u57DF\u7684 \`window\` \u7269\u4EF6\uFF0C\u7528\u4F86\u7DB2\u8DEF\u8ACB\u6C42\uFF0C\u4E26\u56DE\u50B3 \`promise\`
- [\u8A73\u7D30\u8ACB\u770B MDN](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)\uFF0C\u4E3B\u8981 \`response\` \u7684\u5E7E\u7A2E\u65B9\u6CD5\uFF1A
  - \`response.json()\`\uFF1A\u628A\u8CC7\u6599\u8F49\u6210JSON\u683C\u5F0F
  - \`response.text()\`\uFF1A\u628A\u8CC7\u6599\u8F49\u6210text\u683C\u5F0F(\u8B8A\u6210\u7D14\u5B57\u4E32)
  - \`response.blob()\`\uFF1A\u628A\u8CC7\u6599\u8F49\u6210Blob\u7269\u4EF6
  - \`response.formData()\`\uFF1A\u628A\u8CC7\u6599\u8F49\u6210FormData\u7269\u4EF6
  - \`response.arrayBuffer()\`\uFF1A\u628A\u8CC7\u6599\u8F49\u6210\u4E8C\u9032\u5236\u6578\u7D44
- \u512A\u52E2
  - \u70BA\u539F\u751F \`API\`\uFF0C\u6709\u672A\u4F86\u767C\u5C55\u6027
  - \u53EF\u4EE5\u914D\u7F6E\u662F\u5426\u651C\u5E36 \`cookie\`
  - \u53EF\u5728 \`service worker\` \u4E2D\u4F7F\u7528 
- \u52A3\u52E2
  - \`fetch\` \u4E0D\u652F\u63F4\u8001\u820A\u700F\u89BD\u5668
  - \`fetch\` \u6C92\u6709\u6514\u622A\u5668 \`interceptors\`
  - \u6C92\u6709 \`progress\` \u4E8B\u4EF6
  - \u76F8\u5C0D \`axios\`\uFF0C\u8F03\u4E0D\u666E\u904D\u4F7F\u7528
- \u5BE6\u6230\u4E00\uFF1A\u5E36\u6709 \`token\` \u7684 \`POST\` \u8ACB\u6C42
  \`\`\`js
  const uuid = 'uuid'
  const token = 'token'
  const url = \`https://domain/api/\${uuid}/product\`
  let headers = {
      "Content-Type": "application/json",
      "Accept": "application/json",
      "Authorization": \`Bearer \${token}\`,
  }
  let body = {
    "title": "title1",
    "category": "category1",
  }
  // \u9810\u8A2D\u70BA GET \u8ACB\u6C42
  fetch(url, {
    method: "POST",
    headers: headers,
    // \u5C07\u5C0D\u8C61\u8F49\u70BA\u5B57\u4E32\uFF0C\u907F\u514D\u8B8A\u6210[object Object]
    body: JSON.stringify(body)
  })
  .then(response => response.json())
  .then(json => console.log(json));
  \`\`\`
- \u5BE6\u6230\u4E8C\uFF1A\u6AA2\u6E2C\u7DB2\u8DEF\u8207\u4F3A\u670D\u5668
  - \u529F\u7528\uFF1A\u5224\u65B7 \`\u4F7F\u7528\u8005\u7121\u7DB2\u8DEF\` \u9084\u662F \`\u4F3A\u670D\u5668\u7121\u53CD\u61C9\`
  - \u7BC4\u4F8B\uFF1A\u53EF\u81EA\u884C\u8F49\u63DB\u6210 \`axios\`
    \`\`\`js
    /*
      \u5224\u65B7\u9806\u5E8F\uFF1A
      \u4F3A\u670D\u5668(\u82E5\u6709\u5247\u76F4\u63A5\u8FD4\u56DE)
      > \u6E2C\u8A66\u7DB2\u8DEF(O) > \u8FD4\u56DE\u7DAD\u8B77\u4E2D\u4E26\u56DE\u5831
      > \u6E2C\u8A66\u7DB2\u8DEF(X) > \u901A\u77E5\u4F7F\u7528\u8005\u7121\u7DB2\u8DEF\u9023\u7DDA
    */
    const Ajax = async (url, options, onSuccess = () => {}, onError = () => {}, timeout, testNetwork = false) => {
      const controller = new AbortController()
      setTimeout(() => {
        controller.abort()
      }, timeout);

      // \u7576\u547C\u53EB abortController.abort \u6642\uFF0Cfetch \u63A5\u6536\u5230 signal \u6642\u8ACB\u6C42\u9084\u6C92\u5B8C\u6210\uFF0C\u8ACB\u6C42\u5C31\u6703\u88AB\u53D6\u6D88\u3002
      let config = { ...options, signal: controller.signal }
      await fetch(url, config)
      .then((result) => {
          onSuccess(result)
      })
      .catch(async e => {
        // \u82E5\u767C\u751F\u932F\u8AA4\uFF0C\u5247\u6AA2\u6E2C\u662F\u5426\u9700\u8981\u5224\u65B7\u7DB2\u8DEF
        if (testNetwork) {
          await Ajax('https://google.com', {
            method: 'GET',
            mode: 'no-cors',
          }, onError, () => console.log('network error'), timeout)
        } else {
          onError()
        }
      })
    }

    // \u4F7F\u7528\u7BC4\u4F8B
    const getData = async () => {
      await Ajax('https://test:3000/posts', null, () => console.log('ok!!'), () => console.log('server error'), 3000, true)
    }
    await getData()
    \`\`\`

## requestAnimationFrame
- \u529F\u7528\uFF1A\u914D\u5408\u700F\u89BD\u5668\u7684\u986F\u793A\u983B\u7387\u53BB\u57F7\u884C\u76EE\u7684
- \u6703\u8FD4\u56DE\u4E00\u500B \`number\` \u985E\u578B\u503C\uFF0C\u53EF\u4EE5\u50B3\u5165 \`cancelAnimationFrame\` \u4F86\u53D6\u6D88\u57F7\u884C
- \u8207 \`setTimeout\`\u3001\`setInterval\`\u7684\u4E0D\u540C
  - \`setTimeout\`\u3001\`setInterval\` \u9700\u7B49\u540C\u6B65\u3001\u5FAE\u4EFB\u52D9\u5B8C\u6210\u5F8C\uFF0C\u624D\u6703\u57F7\u884C
  - \u800C \`requestAnimationFrame\` \u7531\u7CFB\u7D71\u4F86\u6C7A\u5B9A\u56DE\u8ABF\u51FD\u6578\u7684\u57F7\u884C\u6642\u6A5F\uFF0C\u6642\u9593\u9593\u9694\u6703\u8DDF\u8457\u7CFB\u7D71\u7684\u7E6A\u88FD\u983B\u7387\uFF0C\u5982\uFF1A\`\u7E6A\u88FD\u7387\uFF1A60hz => \u6BCF16.7ms\u66F4\u65B0\u4E00\u6B21\`
- \u4F7F\u7528\u53C3\u8003\uFF1A
  \`\`\`js
  function testFuc () {
    console.log('test')
  }
  // \u975E\u56B4\u683C\u6A21\u5F0F window \u53EF\u7701\u7565
  let cancelID = window.requestAnimationFrame(testFuc)
  // \u53D6\u6D88\u57F7\u884C
  window.cancelAnimationFrame(cancelID)
  \`\`\`
`;export{n as default};

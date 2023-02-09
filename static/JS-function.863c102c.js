const n=`<span style="font-size: 32px; font-weight: 600;">JS \u51FD\u6578</span>

## \u4F5C\u7528\u57DF\u8207\u8B8A\u91CF
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

## \u51FD\u6578\u512A\u5148\u63D0\u5347
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

## \u51FD\u6578\u7684\u4F7F\u7528
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

## \u9589\u5305
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

## IIFE
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

## \u7BAD\u982D\u51FD\u6578
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

## call\u3001apply \u3001bind
- \u4E09\u8005\u7684\u4E0D\u540C
  - \`call\`\u3001\`apply\` \u6703\u56DE\u50B3\u51FD\u6578\u57F7\u884C\u7684\u7D50\u679C
  - \`call\` \u7528\u9017\u865F\u5340\u9694\u6BCF\u500B\u53C3\u6578
  - \`apply\` \u9664 \`this\` \u4EE5\u5916\u4F7F\u7528\u6578\u7D44\u50B3\u905E\u53C3\u6578
  - \`bind\` \u6703\u56DE\u50B3\u7D81\u5B9A \`this\` \u7684\u539F\u51FD\u6578\uFF0C\u4E00\u65E6\u7D81\u5B9A\u5C31\u7121\u6CD5\u518D\u6539\u8B8A \`this\` \u8207\u53C3\u6578
- \u7BC4\u4F8B
  \`\`\`js
  function sum(b1, b2) {
    console.log(this.c + this.m + this.e + b1 + b2);
  };

  const test1 = {
    c: 100,
    m: 90,
    e: 80
  };
  
  const test2 = {
    c: 100,
    m: 100,
    e: 100
  };

  // call & apply \u90FD\u53EF\u4EE5\u5E36\u5165\u4E0A\u4E0B\u6587
  sum.call(test1, 3, 5) // 278\uFF0Ccall \u9700\u8981\u4F7F\u7528\u9017\u865F
  sum.apply(test1, [3, 5]) // 278\uFF0Capply \u9700\u8981\u4F7F\u7528\u6578\u7D44
  // bind
  const test = sum.bind(test1, 3, 5)
  console.log(test.bind(test2, 7, 10)()) // 278
  \`\`\`
`;export{n as default};

const n=`<span style="font-size: 32px; font-weight: 600;">JS \u6578\u7D44</span>

## \u5275\u5EFA\u6578\u7D44
\`\`\`js
// \u65B9\u6CD51
var arr1 = [33, 44, 55, 66];
// \u65B9\u6CD52
var arr2 = new Array(33, 44, 55, 66);
// \u65B9\u6CD53
var arr3 = new Array(4);
\`\`\`

## \u53D6\u5F97\u8207\u66F4\u6539\u6578\u7D44\u9805
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

## \u6578\u7D44\u53BB\u91CD
\`\`\`js
// \u539F\u6578\u7D44
var arr = [1, 1, 1, 2, 2, 3, 3, 3, 2, 1];
// \u7ED3\u679C\u6578\u7D44
var result = [...new Set(arr)];
\`\`\`

## \u4E8C\u7DAD\u6578\u7D44
\`\`\`js
// \u6578\u7D44\u5305\u542B\u591A\u500B\u4E00\u7DAD\u6578\u7D44
var matrix = [
  [11, 33, 55],
  [22, 33, 44],
  [36, 49, 52],
  [56, 10, 23]
];
\`\`\`

## \u64CD\u4F5C\u539F\u6578\u7D44
### push\u3001unshift\u3001pop\u3001shift
\`\`\`js
/*
  push-O(1)\u3001unshift-O(n)\u3001pop-O(1)\u3001shift-O(n)
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

### splice
\`\`\`js
// splice-O(n)
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

### reverse
\`\`\`js
// reverse-O(n)
[0, 1, 2, 3, 4, 5].reverse();// [5, 4, 3, 2, 1, 0]
// \u5C07\u5B57\u4E32\u53CD\u8F49
'012345'.split('').reverse().join();// '5,4,3,2,1,0'
'012345'.split('').reverse().join('');// '543210'
\`\`\`

### sort
\`\`\`js
// sort-O(n)
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

## \u53D6\u5F97\u6578\u7D44\u8CC7\u8A0A
### indexOf
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

### lastIndexOf
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

### find\u3001findIndex
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

### filter
\`\`\`js
// filter \u6703\u5C07\u6BCF\u4E00\u9805\u4EE3\u5165\u51FD\u6578\u5224\u65B7\uFF0C\u82E5\u70BAtrue\u5247\u8FD4\u56DE\u7D66\u65B0\u6578\u7D44
[1,2,3,4,5,6,7,8].filter(e => e > 3);    // [4, 5, 6, 7, 8]
[1,2,3,4,5,6,7,8].filter(e => e%2 == 0); // [2, 4, 6, 8]
\`\`\`

## \u53D6\u5F97\u65B0\u6578\u7D44\u3001\u65B0\u503C
### join
\`\`\`js
[0, 1, 2, 3, 4, 5].join();// \u7B49\u540C\u65BC toString
[0, 1, 2, 3, 4, 5].toString();// '0,1,2,3,4,5'
[0, 1, 2, 3, 4, 5].join('-');// '0-1-2-3-4-5'
[0, 1, 2, 3, 4, 5].join('');// '012345'
\`\`\`

### concat
\`\`\`js
// \u5408\u4F75\u591A\u500B\u6578\u7D44(\u4E0D\u6539\u8B8A\u6578\u7D44\u672C\u8EAB)
var arr1 = [1, 2, 3];
var arr2 = [4, 5, 6];
var arr3 = [7, 8, 9];
var arr = arr1.concat(arr2, arr3);
console.log(arr);// [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(arr1);// [1, 2, 3]
\`\`\`

### slice
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

### map
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

### reduce\u3001reduceRight
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

### flat\u3001flatMap
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

### Array.from
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

## \u5224\u65B7\u56DE\u50B3\u5E03\u6797\u503C
### every
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

### some
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

### includes
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

### Array.isArray
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
`;export{n as default};

const n=`<span style="font-size: 32px; font-weight: 600;">TS \u7C21\u6613\u7B46\u8A18</span>

## \u5B89\u88DD Typescript
- \u5B89\u88DD\u5168\u5C40\u74B0\u5883\uFF1A\`\`\`npm install -g typescript\`\`\`
- \u6AA2\u67E5\u662F\u5426\u5DF2\u5B89\u88DD\uFF1A\`\`\`tsc -v\`\`\`
- \u7522\u751F\u521D\u59CB\u8A2D\u5B9A\u6A94\uFF1A\`\`\`tsc --init\`\`\`
  - \u82E5\u5B89\u88DD\u5728 \`devDependencies\`\uFF0C\u5247\u9808\u52A0\u958B\u982D \`npx\`
  - \u8A2D\u5B9A\u6A94\u5167\u53EF\u4EE5\u8A3B\u91CB\uFF0C\u4E26\u5305\u542B\u6240\u6709\u8A2D\u5B9A\u89E3\u91CB
- \`tsconfig.json\` \u8A2D\u5B9A\u81EA\u5B9A\u7FA9\u5316\u91CD\u9EDE\uFF1A
  - \`outDir\` \u53EF\u8A2D\u5B9A\u7DE8\u8B6F\u8DEF\u5F91\u3001\`rootDir\` \u53EF\u8A2D\u5B9A\u8F38\u51FA\u8DEF\u5F91
  - \u82E5\u8981\u5BEB\u65B0\u8A9E\u6CD5\u4E26\u7DE8\u8B6F\u7D66\u820A\u700F\u89BD\u5668\uFF0C\u9808\u5C07 \`target\` \u8A2D\u5B9A\u6210 \`es5\`\uFF0C\u5373\u53EF\u751F\u6210 \`es5\` \u8A9E\u6CD5\u6587\u4EF6
  - \u82E5\u4F7F\u7528\u5982 \`set\` \u8A9E\u6CD5\uFF0C\u5247 \`target es5\` \u6703\u51FA\u932F\uFF0C\u9700\u900F\u904E \`lib\` \u65B0\u589E \`es2020\` \u65B0\u589E\u65B0\u5EAB
    - \u901A\u5E38\u8A2D\u7F6E\u70BA\uFF1A\`"lib": ["DOM","ES2020"]\`
  - \u4FEE\u6539 \`module\` \u53EF\u4EE5\u8F49\u63DB\u8F38\u51FA\u5176\u4ED6\u6A21\u5F0F
  - \u8A2D\u5B9A \`strictNullChecks\` \u70BA \`true\`\uFF0C\u5247\u4E0D\u80FD\u8A2D\u7F6E\u7A7A\u503C
  - \u8A2D\u5B9A \`noImplicitAny\` \u70BA \`true\`\uFF0C\u5247\u53EA\u8981\u6709 \`any\` \u985E\u578B\u5C31\u62B1\u932F
  - \u8A2D\u5B9A \`declaration\` \u70BA \`true\`\uFF0C\u5247\u6703\u751F\u7522\u8072\u660E\u6587\u4EF6(\u9700 \`export\` \u8A72\u8B8A\u91CF\u624D\u6703\u6709\u8A72\u8B8A\u91CF\u7684\u8072\u660E)
  - \u8A2D\u5B9A \`removeComments\` \u70BA \`true\`\uFF0C\u5247\u6703\u522A\u9664\u6240\u6709\u7684\u8A3B\u91CB
  - \u8A2D\u5B9A \`baseUrl\u3001path\` \u80FD\u5FEB\u901F\u5F15\u5165\u6587\u4EF6\uFF0C\u5C31\u50CF \`alias\`
  - \u8A2D\u5B9A \`include\` \u53EF\u8A2D\u5B9A\u5305\u542B\u9700\u8981\u7DE8\u8B6F\u7684 \`ts\` \u6587\u4EF6\uFF0C\u4E0D\u5BEB\u5247\u4EE5 \`rootDir\` \u8A2D\u5B9A\u70BA\u4E3B
  - \u8A2D\u5B9A \`exclude\` \u53EF\u6392\u9664\u4E0D\u7DE8\u8B6F\u7684\u6587\u4EF6
  - \u8A2D\u5B9A \`esModuleInterop\` \u70BA \`true\`\uFF0C\u8B93 \`export =\` \u9019\u7A2E\u683C\u5F0F(\u70BA\u4E86\u517C\u5BB9 \`commonjs\`\u3001\`amd\` \u898F\u7BC4\u800C\u4F7F\u7528)\u53EF\u4EE5\u517C\u5BB9
  - \u8A2D\u5B9A \`ts\` \u6587\u4EF6\u4E2D\u5F15\u5165 \`js\` \u6587\u4EF6\uFF1A\u6253\u958B \`"allowJs": true\` \u5141\u8A31 \`js\` \u6587\u4EF6\u88AB\u7DE8\u8B6F
- \u7DE8\u8B6F\u6587\u4EF6\u6307\u4EE4\uFF1A\`tsc fileName.ts\`\uFF0C\u6703\u751F\u6210\u5169\u500B\u6A94\u6848\uFF1A
  - \u8072\u660E\u6587\u4EF6 \`.d.ts\`
  - \u7DE8\u8B6F\u5B8C\u7684 \`js\` \u6587\u4EF6

## \u57FA\u672C\u6578\u64DA\u985E\u578B
- [\u6587\u6A94\u7DB2\u5740](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html)
- \u57FA\u672C\u985E\u578B\u6709\u4EE5\u4E0B\u5E7E\u7A2E\uFF1A
  - Boolean
  - Null
  - Undefined
  - Number
  - BigInt
  - String
  - Symbol
  - Any(\u5728\u672A\u78BA\u5B9A\u6578\u64DA\u985E\u578B\u6642\u53EF\u8A2D\u5B9A Any:\u6240\u6709\u985E\u578B)
- \u5BA3\u544A\u65B9\u5F0F\uFF1A\`\`\`let test: boolean = true;\`\`\`

## \u985E\u578B
### \u985E\u578B\u8A3B\u89E3\u3001\u985E\u578B\u65B7\u8A00\u3001\u985E\u578B\u63A8\u8AD6\u3001\u806F\u5408\u985E\u578B
- [\u6587\u6A94\u7DB2\u5740](https://www.typescriptlang.org/docs/handbook/type-inference.html)
- \u5BA3\u544A\u65B9\u5F0F\uFF1A
  \`\`\`typescript
  // \u5192\u865F\u5F8C\u9762\u5C31\u662F\u985E\u578B\u8A3B\u89E3
  let price:number = 123
  type Student {
    name: string,
    age: number
  }
  let stuObj:Student = {
    name: "test",
    age: 23
  }
  
  // \u985E\u578B\u65B7\u8A00
  // \u7528 as \u544A\u8A34\u7DE8\u8B6F\u5668\uFF0C\u8ACB\u628A\u5B83\u770B\u4F5C\u662F\u4E00\u500B string \u985E\u578B\u4E26\u53EF\u4EE5\u7528 string \u7684\u65B9\u6CD5\u3002
  function getLength(input: string | number): number {
    const str = input as string
    if (str.length) {
      return str.length
    } else {
      const number = input as number
      return number.toString().length
    }
  }
  
  // \u985E\u578B\u63A8\u8AD6
  // 1.\u4E00\u65E6\u8CE6\u503C\u5F8C\u5C31\u4E0D\u80FD\u66F4\u6539\u5176\u4ED6\u985E\u578B\u503C
  let count = 3;
  count = ""; // \u62B1\u932F
  // \u5E38\u898B\u7684\u53D6\u503C\u932F\u8AA4
  let obj = { username: "wangwu", age: 23 };
  const username = "username"; // \u82E5\u4F7F\u7528 let\uFF0Cts \u6703\u5831\u932F\uFF0C\u56E0\u70BA\u8981\u78BA\u4FDD\u9019\u500Bkey\u4E0D\u6703\u8B8A
  obj[username];
  
  let obj: object = { username: "wangwu", age: 23 };
  const username = "username";
  // \u56E0\u70BA ts \u5728 object \u627E\u4E0D\u5230 username \u5C6C\u6027\u6240\u4EE5\u9700\u8F49\u70BA any
  let result = (obj as any)[username]; 
  
  // 2.\u5728\u4E0D\u540C\u7684\u689D\u4EF6\u88E1\u9762\uFF0C\u6703\u667A\u80FD\u7684\u7E2E\u5C0F\u63A8\u8AD6\u7BC4\u570D\uFF0C\u51FA\u932F\u7684\u6A5F\u7387\u5C31\u964D\u4F4E\u4E86\u3002
  function getLength2(input: string | number): number {
    if (typeof input === 'string') {
      return input.length
    } else {
      return input.toString().length
    }
  }

  // \u806F\u5408\u985E\u578B
  // \u8A72\u8B8A\u6578\u53EF\u4EE5\u662F \u6578\u5B57 \u6216 \u5B57\u4E32
  let numberOrString: number | string 
  // \u7576\u6B65\u78BA\u5B9A\u76EE\u524D\u806F\u5408\u985E\u578B\u76EE\u524D\u662F\u54EA\u500B\u985E\u578B\u6642\uFF0C\u53EA\u80FD\u8A2A\u554F\u8A72\u806F\u5408\u985E\u578B\u5167\u6240\u6709\u985E\u578B\u5171\u540C\u7684\u5C6C\u6027\u8207\u65B9\u6CD5
  numberOrString.length
  numberOrString.toString()
  \`\`\`
  
### any \u8207 unknown 
- \u76F8\u540C\u9EDE\uFF1A\u90FD\u53EF\u4EE5\u70BA\u5176\u4ED6\u985E\u578B\u7684\u5B50\u985E
- \u4E0D\u540C\u9EDE\uFF1A
  - any \u53EF\u4EE5\u4F5C\u70BA\u5176\u4ED6\u985E\u578B\u7236\u985E\u7684\u5B58\u5728\uFF0Cunknown \u4E0D\u884C
  - any \u53EF\u4EE5\u9EDE\u51FA\u5176\u4ED6\u985E\u578B\u7684\u6578\u64DA\uFF0Cunknown \u4E0D\u884C
\`\`\`ts
let test: any = 123;
// \u5DE6\u908A\u70BA\u5B50\u985E\uFF0C\u53F3\u908A\u70BA\u7236\u985E
let test2: number = test;
\`\`\`

### string \u8207 String \u5DEE\u5225
- \u524D\u8005\u53EA\u662F\u5F8C\u8005\u7684\u985E\u578B\u8868\u73FE
- \u524D\u8005\u76F4\u63A5\u6253\u9EDE\u6C92\u6709\u4EFB\u4F55\u65B9\u6CD5\u8207\u5C6C\u6027\uFF0C\u9700\u985E\u578B\u8A3B\u89E3\u5F8C\u624D\u80FD
- \u5F8C\u8005\u76F4\u63A5\u6253\u9EDE\u6709\u65B9\u6CD5\u8207\u5C6C\u6027

### BigInt
- \u82E5\u8981\u4F7F\u7528\u6BD4\u6700\u5927\u6574\u6578\u9084\u5927\u7684\u6574\u6578\u6642\u4F7F\u7528\uFF0C\u907F\u514D\u8A08\u7B97\u932F\u8AA4
- \u9700\u8981\u5728 lib \u589E\u52A0 ES2020 \u624D\u80FD\u4F7F\u7528
\`\`\`ts
const max = BigInt(Number.MAX_SAFE_INTEGER);
// \u82E5\u8981\u9032\u884C\u904B\u7B97\u9700\u4F7F\u7528 BigInt \u5305\u8986
const maxBigOne = max + BigInt(1);
console.log(maxBigOne);
const maxBigtwo = max + BigInt(2);
console.log(maxBigtwo);
\`\`\`

- \u7C21\u5BEB\u5BEB\u6CD5\uFF1A\`1n\` \u7B49\u50F9\u65BC \`BigInt(1)\`\uFF0C\u82E5\u8981\u7528\u7C21\u5BEB\u9700\u5C07 \`target\`\u3001\`lib\` \u8A2D\u5B9A\u8207\u589E\u52A0 \`ES2020\`
\`\`\`ts
const max = BigInt(Number.MAX_SAFE_INTEGER);
console.log(max);
const maxBigOne = max + 1n;
console.log(maxBigOne);
const maxBigtwo = max + 2n;
console.log(maxBigtwo);
\`\`\`

### never \u6578\u64DA\u985E\u578B
- \u907F\u514D\u672A\u4F86\u64F4\u5C55\u65B0\u7684\u6DDA\u6C92\u6709\u5C0D\u61C9\u7684\u985E\u578B\u5BE6\u73FE\uFF0C\u76EE\u7684\u70BA\u5BEB\u51FA\u985E\u578B\u7D55\u5C0D\u5B89\u5168\u7684\u4EE3\u78BC
\`\`\`ts
// dataFlowAnalysisWithNever \u65B9\u6CD5\u7A77\u5C3D\u4E86 DataFlow \u7684\u6240\u6709\u53EF\u80FD\u7C7B\u578B\u3002
type DataFlow = string | number;
function dataFlowAnalysisWithNever(dataFlow: DataFlow) {
  if (typeof dataFlow === "string") {
    console.log("\u5B57\u7B26\u4E32\u7C7B\u578B:", dataFlow.length);
  } else if (typeof dataFlow === "number") {
    console.log("\u6570\u503C\u7C7B\u578B:", dataFlow.toFixed(2));
  } else {
    // \u82E5 DataFlow \u672A\u589E\u52A0\u5176\u4ED6\u6578\u64DA\u985E\u578B\uFF0C\u5247\u6578\u64DA\u985E\u578B\u70BA never
    let data = dataFlow;
  }
}
\`\`\`

## Array \u8207 Tuple
### Array \u6578\u7D44
- \u5BA3\u544A\u70BA\u56FA\u5B9A\u4E00\u7A2E\u6578\u64DA\u985E\u578B\u7684\u6578\u7D44
- \u7BC4\u4F8B\uFF1A
  \`\`\`typescript
  let arrOfNumbers: number[] = [1, 2, 3]
  \`\`\`

### Tuple \u5143\u7D44
- \u5B9A\u7FA9\u6642\u7684\u5143\u7D20\u7684\u985E\u578B\u78BA\u5B9A\uFF0C\u4F46\u5404\u500B\u5143\u7D20\u7684\u985E\u578B\u4E0D\u5FC5\u76F8\u540C\u3002
- \u70BA\u5143\u7D20\u8CE6\u503C\u6642\uFF0C\u8A72\u503C\u5FC5\u9808\u662F\u7576\u524D\u4F4D\u7F6E\u7684\u985E\u578B
- \u7BC4\u4F8B\uFF1A
  \`\`\`typescript
  let salary: [string, number, number, string] = ["test", 8000, 10000, "ok"];
  // \u53D6\u503C\u65B9\u5F0F
  console.log(salary[3]);
  \`\`\`

## Interface \u63A5\u53E3
- [\u6587\u6A94\u7DB2\u5740](https://www.typescriptlang.org/docs/handbook/2/objects.html)
- \u5B9A\u7FA9\uFF1A\u70BA\u4E00\u7CFB\u5217\u540C\u985E\u5C0D\u8C61\u6216\u540C\u985E\u5225\u7684\u985E\u63D0\u4F9B\u5C6C\u6027\u5B9A\u7FA9\u548C\u65B9\u6CD5\u8072\u660E\u4F46\u6C92\u6709\u4EFB\u4F55\u8CE6\u503C\u548C\u5BE6\u73FE\u7684\u6578\u64DA\u985E\u578B\u3002
- \u61C9\u7528\uFF1A
  - \u63D0\u4F9B\u65B9\u6CD5\u7684\u5C0D\u50CF\u985E\u578B\u7684\u53C3\u6578\u6642\u4F7F\u7528
  - \u70BA\u591A\u500B\u540C\u985E\u5225\u7684\u985E\u63D0\u4F9B\u7D71\u4E00\u7684\u65B9\u6CD5\u548C\u5C6C\u6027\u8072\u660E
- \u5BA3\u544A\u65B9\u5F0F\uFF1A
  \`\`\`typescript
  // \u901A\u5E38 Interface \u9996\u5B57\u6BCD\u70BA\u5927\u5BEB
  interface Person {
    // \u53EA\u8B80\u5C6C\u6027\uFF0C\u8A2D\u5B9A\u521D\u59CB\u503C\u5F8C\u4E0D\u80FD\u518D\u505A\u66F4\u6539
    readonly id: number;
    name: string;
    // \u53EF\u9078\u5C6C\u6027\uFF0C\u8A2D\u5B9A\u8A72\u53C3\u6578\u53EF\u4EE5\u4E0D\u5B58\u5728
    age?: number;
  }

  let viking: Person = {
    id: 1,
    name: 'Viking'
  }
  \`\`\`
  
### \u53EF\u9078\u5C6C\u6027\uFF0C\u53EF\u7D22\u5F15\u985E\u578B\uFF0C\u51FD\u6578\u985E\u578B
\`\`\`typescript
interface Product {
  id: number;
  name: string;
  price: number;
  count: number;
  // \u53EF\u9078\u5C6C\u6027
  mark?: string;
  // \u53EF\u7D22\u5F15\u985E\u578B\uFF0C\u7528\u65BC\u4E0D\u78BA\u5B9A\u6709\u5E7E\u500B\u9700\u52A0\u5165\u7684\u9375
  [key: string]: any;
  // \u51FD\u6578\u985E\u578B
  transfer: () => void;
}

function calTotal(product: Product) {
  console.log("product \u7E3D\u50F9:", product.price * product.count);
  product.transfer();
}

calTotal({
  id: 100,
  name: "\u7535\u8111",
  price: 5000,
  count: 10,
  mark: "\u6CE8\u610F\u8F7B\u7EBA",
  place: "",
  quatity: "\u4E8C\u624B",
  transfer() {
    console.log(this.name, "\u8FD0\u8F93");
  },
});

interface Getter {
  // \u53EF\u7D22\u5F15\u985E\u578B+\u51FD\u6578\u985E\u578B
  [key: string]: (state: any) => void;
}

let getter: Getter = {
  getProductInfo(state: string) {},
  getOneProduct(state: string) {},
};
\`\`\`

### \u63A5\u53E3\u7576\u540D\u5B57\u7684\u51FD\u6578\u985E\u578B

\`\`\`ts
interface ActionContext {
  // \u53EF\u4EE5\u767C\u73FE\u5230\u9019\u51FD\u6578\u6C92\u6709\u540D\u5B57
  (state: any, commit: any): void;
}

let actionContext: ActionContext = (state: any, commit: any): void => {
  console.log("state:", state); // state: abc
};
actionContext("abc", "df");
\`\`\`

### \u806F\u5408\u985E\u578B
- \u4F7F\u7528\u5728\u53C3\u6578\u53EF\u80FD\u6709\u591A\u7A2E\u6578\u64DA\u985E\u578B\u7684\u6642\u5019\uFF0C\u63D0\u793A\u53EA\u6703\u986F\u793A\u5171\u6709\u7684\u5C6C\u6027\u8207\u65B9\u6CD5
\`\`\`ts
// \u5F15\u7528\u985E\u578B\u7684\u806F\u5408\u985E\u578B
interface Car {
  brand: string; //  \u54C1\u724C
  No: number; // \u8ECA\u724C\u865F
  price: number;
  placeOrigin: string; //\u4EA7\u5730
  load(): void;
}

interface Plane {
  category: string; // \u98DB\u6A5F\u985E\u5225
  price: number; // \u50F9\u683C
  placeOrigin: string; // \u7522\u5730
  airline: string; // \u6240\u5C5E\u822A\u7A7A\u516C\u53F8
  load(): void;
}

function carry(vechile: Car | Plane) {
  vechile.load();
}
\`\`\`

## Type Aliases \u985E\u578B\u5225\u540D
- [\u6587\u6A94\u7DB2\u5740](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#type-aliases)
- \u5BA3\u544A\u65B9\u5F0F\uFF1A
  \`\`\`typescript
  // \u7D66\u63CF\u8FF0\u51FD\u6578\u985E\u578B\u8D77\u5225\u540D
  type PlusType = (x: number, y: number) => number
  let sum2: PlusType

  // \u806F\u5408\u985E\u578B
  type StrOrNumber = string | number
  let result2: StrOrNumber = '123'
  result2 = 123
  
  // \u806F\u5408\u985E\u578B-\u63A5\u53E3
  interface Car {
    brandNo: string;
  }
  interface Plane {
    No: string;
    brandNo: string;
  }
  type TypVechile = Car | Plane;

  //  \u5143\u7EC4
  interface Car {
    brandNo: string;
  }
  interface Plane {
    No: string;
    brandNo: string;
  }
  type TypVechile = [Car, Plane];

  // \u4EA4\u53C9\u985E\u578B(\u5C07\u591A\u500B\u63A5\u53E3\u88E1\u7684\u5C6C\u6027\u52A0\u5728\u4E00\u8D77)
  // \u82E5\u6709\u91CD\u8907\u5C6C\u6027\u4E0D\u540C\u6578\u64DA\u985E\u578B\u5247\u6703\u5831\u932F(\u82E5\u4E00\u500B\u70BAany\u985E\u578B\uFF0C\u53E6\u4E00\u500B\u70BA number \u6578\u64DA\u985E\u578B\uFF0C\u5247\u6700\u5F8C\u9078\u70BA number \u6578\u64DA\u985E\u578B)
  interface IName  {
    name: string
  }
  type IPerson = IName & { age: number }
  let person: IPerson = { name: 'hello', age: 12 }
  
  type Group = { groupName: string; memberNum: number };
  type GroupInfoLog = { info: string; happen: string };
  type GroupMemeber = Group & GroupInfoLog; // type \u4EA4\u53C9\u7C7B\u578B\u5408\u5E76
  let data: GroupMemeber = {
    groupName: "001",
    memberNum: 10,
    info: "\u96C6\u4F53\u722C\u5C71",
    happen: "\u4E2D\u9014\u6709\u7EC4\u5458\u5DEE\u70B9\u6ED1\u843D,\u6709\u60CA\u65E0\u9669",
  };

  // \u5B57\u7B26\u4E32\u5B57\u9762\u91CF
  type Directions = 'Up' | 'Down' | 'Left' | 'Right'
  let toWhere: Directions = 'Up'
  \`\`\`

### \u7528\u503C\u7576\u985E\u578B\u6280\u5DE7
\`\`\`ts
type IncreaseBoolean = Boolean | 1 | 0;
function mounted(isStartUp: IncreaseBoolean) {
  if (isStartUp) {
    console.log("yes");
  } else {
    console.log("no");
  }
}
mounted(1); // yes
\`\`\`

### \u8207\u63A5\u53E3\u7684\u4E0D\u540C
- 1.\u985E\u578B\u4F7F\u7528\u65B9\u5F0F
  - \`interface\` \u53EA\u80FD\u5B9A\u7FA9\u5C0D\u8C61\u985E\u578B\u6216\u63A5\u53E3\u7576\u540D\u5B57\u7684\u51FD\u6570\u985E\u578B
  - \`type\` \u53EF\u4EE5\u5B9A\u7FA9\u4EFB\u4F55\u985E\u578B\uFF0C\u5305\u62EC\u57FA\u7840\u985E\u578B\u3001\u806F\u5408\u985E\u578B\u3001\u4EA4\u53C9\u985E\u578B\u3001\u5143\u7EC4
- 2.\u7E7C\u627F\u529F\u80FD
  - \`interface\` \u53EF\u4F7F\u7528 \`extends\` \u7E7C\u627F\u4E00\u500B\u6216\u8005\u591A\u500B\u63A5\u53E3\u6216\u985E\uFF0C\u4E5F\u53EF\u7E7C\u627F \`type\`
  - \`type\` \u985E\u578B\u6C92\u6709\u7E7C\u627F\u529F\u80FD
- 3.\u4EA4\u53C9\u5408\u4F75
  - \`type\` \u4EA4\u53C9\u985E\u578B \`&\` \u53EF\u8B93\u985E\u578B\u4E2D\u7684\u6210\u54E1\u5408\u4F75\u6210\u4E00\u500B\u65B0\u7684 \`type\` \u985E\u578B
  - \`interface\` \u4E0D\u80FD\u4EA4\u53C9\u5408\u4F75
- 4.\u5408\u4F75\u8072\u660E
  - \u5169\u500B\u76F8\u540C\u540D\u7A31\u7684 \`interface\` \u6703\u5408\u4F75\u8072\u660E
  - \u5169\u500B\u76F8\u540C\u540D\u7A31\u7684 \`type\` \u6703\u7DE8\u8B6F\u932F\u8AA4
  \`\`\`typescript
  interface Error {
    name: string;
  }

  interface Error {
    message: string;
    stack?: string;
  }
  // \u63A5\u53E3\u5408\u4F75
  let error: Error = {
    message: "\u7A7A\u6307\u9488",
    name: "NullPointException",
  };
  \`\`\`

## Function \u51FD\u6578
- [\u6587\u6A94\u7DB2\u5740](https://www.typescriptlang.org/docs/handbook/2/functions.html)
- \u5BA3\u544A\u65B9\u5F0F\uFF1A
  \`\`\`typescript
  // \u666E\u904D\u7684\u5BA3\u544A\u65B9\u5F0F
  let info = function (name: string, age: number) {
    console.log("name:", name, " age:", age);
    return 3;
  };
  
  // \u53EF\u5C07\u51FD\u6578\u8CE6\u4E88\u63CF\u8FF0\u51FD\u6578
  // z \u70BA\u53EF\u9078\u53C3\u6578
  function add(x: number, y: number, z?: number): number {
    // z (number | undefined)
    if (z) {
      return x + y + z
    } else {
      return x + y
    }
  }
  const add2: (x: number, y: number, z?:number) => number = add
  
  // \u7528\u8B8A\u6578\u63CF\u8FF0\u51FD\u6578\u985E\u578B
  let sum: (x: number, y: number) => number;
  let sum2: typeof sum;
  \`\`\`

### interface \u63CF\u8FF0\u51FD\u6578\u985E\u578B
\`\`\`typescript
interface ISum {
  (x: number, y: number): number
}
const sum = (x: number, y: number): number => {
  return x + y
}
const sum2: ISum = sum
\`\`\`

### type \u63CF\u8FF0\u51FD\u6578\u985E\u578B
\`\`\`typescript
type TypInfoFun = (name: string, age: number) => number;
let info: TypInfoFun = function (name, age) {
  console.log("name:", name, " age:", age);
  return 3;
};

type TypStuobj = { username: string; age: number; phone: string };
function info(stuObj: TypStuobj) {
  console.log("name:", stuObj.username, " age:", stuObj.age);
  return 3;
}
\`\`\`

### rest \u5269\u9918\u53C3\u6578
\`\`\`typescript
function info(name: string, age: number, ...rest: any) {
  console.log("name:", name, " age:", age, " rest:", rest);
  return rest;
}

info("wangwu", 23, "1111", "beijing", 23);
\`\`\`

### \u51FD\u6578\u89E3\u69CB
\`\`\`typescript
type TypStuobj = { username: string; age: number; phone: string };
function subInfo({ username, phone }: TypStuobj) {
  console.log("name:", username, " phone:", phone);
  return 3;
}
subInfo({ username: "lisi", age: 33, phone: "222" });
\`\`\`

## Enums \u679A\u8209
- [\u6587\u6A94\u7DB2\u5740](https://www.typescriptlang.org/docs/handbook/enums.html)
- \u5B9A\u7FA9\uFF1A\u7528\u6765\u5B58\u653E\u4E00\u7EC4\u56FA\u5B9A\u7684\u5E38\u91CF\u7684\u5E8F\u5217
- \u4E3B\u8981\u89E3\u6C7A\uFF1A
  - \u5E38\u91CF\u7684\u5C40\u9650\u6027
  - \u591A\u6B21 if /switch \u5224\u65AD\u4E2D\u503C\u7684\u8A9E\u610F\u5316\u7684\u554F\u984C
- \u679A\u8209\u7684\u597D\u8655\uFF1A
  - 1.\u6709\u9ED8\u8A8D\u503C\u548C\u53EF\u4EE5\u81EA\u589E\u503C\uFF0C\u7BC0\u7701\u7DE8\u78BC\u6642\u9593
  - 2.\u8A9E\u610F\u66F4\u6E05\u695A\u3001\u53EF\u8B80\u6027\u66F4\u597D\uFF1A\u56E0\u70BA\u679A\u8209\u662F\u4E00\u7A2E\u503C\u7684\u6578\u64DA\u985E\u578B\uFF0C\u65B9\u6CD5\u53EF\u660E\u78BA\u88E1\u9762\u7684\u53C3\u6578\u70BA\u679A\u8209\u985E\u578B
- \u5BA3\u544A\u8207\u53D6\u503C\u65B9\u5F0F
\`\`\`ts
// \u6570\u5B57\u679A\u4E3E\uFF0C\u53EA\u9700\u8A2D\u958B\u982D\u503C\u5247\u6703\u9678\u7E8C\u905E\u589E
enum Week {
  Monday = 1,
  Tuesday,
  Wensday,
  ThirsDay,
  Friday,
  Sarturday,
  Sunday,
}

console.log(Week.Monday); // 1
console.log(Week["Monday"]); // 1
// \u53CD\u5411\u53D6\u503C
console.log(Week[1]); // Monday
console.log(Week[5]); // Friday

//  \u5B57\u7B26\u4E32\u679A\u4E3E\uFF0C\u8207\u6578\u5B57\u4E0D\u540C\u4E0D\u80FD\u53CD\u5411\u53D6\u503C
enum WeekEnd {
  Monday = "Monday",
  Tuesday = "Tuesday",
  Wensday = "Wensday",
  ThirsDay = "ThirsDay",
  Friday = "Friday",
  Sarturday = "Sarturday",
  Sunday = "Sunday",
}

console.log(Week.Monday); // Monday
\`\`\`

### \u679A\u8209\u7684\u5E95\u5C64\u5BE6\u73FE
\`\`\`ts
var Week;
(function (Week) {
  Week[(Week["Monday"] = 1)] = "Monday";
  Week[(Week["Tuesday"] = 2)] = "Tuesday";
  Week[(Week["Wensday"] = 3)] = "Wensday";
  Week[(Week["ThirsDay"] = 4)] = "ThirsDay";
  Week[(Week["Friday"] = 5)] = "Friday";
  Week[(Week["Sarturday"] = 6)] = "Sarturday";
  Week[(Week["Sunday"] = 7)] = "Sunday";
})(Week || (Week = {}));
var WeekEnd;
(function (WeekEnd) {
  WeekEnd["Monday"] = "myMonday";
  WeekEnd["Tuesday"] = "Tuesday";
  WeekEnd["Wensday"] = "Wensday";
  WeekEnd["ThirsDay"] = "ThirsDay";
  WeekEnd["Friday"] = "Friday";
  WeekEnd["Sarturday"] = "Sarturday";
  WeekEnd["Sunday"] = "Sunday";
})(WeekEnd || (WeekEnd = {}));
\`\`\`

### \u679A\u8209\u7684\u61C9\u7528
\`\`\`ts
export enum EnumAuditStatus {
  MANAGER_ADUIT_FAIL = -1, // \u7B2C\u4E00\u4E2A\u5E38\u91CF\u503C\u8BBE\u7F6E\u4E3A-1
  NO_ADUIT, // 0
  MANAGER_ADUIT_SUCCESS, // 1
  FINAL_ADUIT_SUCCESS, //  2
}

type Expense = {
  id: number;
  events: string;
  time: Date;
  enumAuditStatus: EnumAuditStatus;
};

// \u5BA1\u6838\u7C7B
class MyAduit {
  mycase: Expense;
  getAduitStatus(status: EnumAuditStatus): void {
    if (status === EnumAuditStatus.NO_ADUIT) {
      console.log("\u6CA1\u6709\u5BA1\u6838");
    } else if (status === EnumAuditStatus.MANAGER_ADUIT_SUCCESS) {
      console.log("\u7ECF\u7406\u5BA1\u6838\u901A\u8FC7");
      this.mycase.enumAuditStatus = status;
    } else if (status === EnumAuditStatus.FINAL_ADUIT_SUCCESS) {
      console.log("\u8D22\u52A1\u5BA1\u6838\u901A\u8FC7");
    }
  }
}

const aduit = new MyAduit();
// \u53EF\u50B3\u5165\u679A\u8209\u7684key\u589E\u52A0\u8A9E\u610F\u5316
aduit.getAduitStatus(EnumAuditStatus.NO_ADUIT);
\`\`\`

## Class \u985E
- [Class \u985E](https://www.typescriptlang.org/docs/handbook/2/classes.html)
  - \u9762\u76F8\u5C0D\u8C61\u4E09\u5927\u7279\u9EDE
    - \u5C01\u88DD(Encapsulation)\uFF1A\u96B1\u85CF\u5C0D\u6578\u64DA\u7684\u64CD\u4F5C\uFF0C\u53EA\u66B4\u9732\u5C0D\u5916\u63A5\u53E3\uFF0C\u901A\u904E\u5C0D\u5916\u63D0\u4F9B\u7684\u63A5\u53E3\u4F86\u8A2A\u554F\u8A72\u5C0D\u8C61
    - \u7E7C\u627F(Inheritance)\uFF1A\u5B50\u985E\u7E7C\u627F\u7236\u985E\uFF0C\u9664\u4E86\u64C1\u6709\u7236\u985E\u7684\u6240\u6709\u7279\u6027\u5916\uFF0C\u53EF\u589E\u52A0\u4E9B\u66F4\u5177\u9AD4\u7684\u7279\u6027
    - \u591A\u614B(Polymorphism)\uFF1A\u7531\u7E7C\u627F\u800C\u7522\u751F\u4E0D\u540C\u7684\u985E\uFF0C\u540C\u4E00\u500B\u65B9\u6CD5\u53EF\u4EE5\u6709\u4E0D\u540C\u7684\u97FF\u61C9
- [\u8A2A\u554F\u4FEE\u98FE\u7B26](https://www.typescriptlang.org/docs/handbook/2/classes.html#member-visibility)
  - public\uFF1A\u4FEE\u98FE\u7684\u5C6C\u6027\u6216\u65B9\u6CD5\u662F\u516C\u6709\u7684\uFF0C\u53EF\u5728\u4EFB\u4F55\u5730\u65B9\u88AB\u8A2A\u554F\uFF0C\u9ED8\u8A8D\u6240\u6709\u7684\u5C6C\u6027\u548C\u65B9\u6CD5\u90FD\u662F public \u7684 
  - private\uFF1A\u4FEE\u98FE\u7684\u5C6C\u6027\u6216\u65B9\u6CD5\u662F\u79C1\u6709\u7684\uFF0C\u4E0D\u80FD\u5728\u8072\u660E\u5B83\u7684\u985E\u7684\u5916\u90E8\u8A2A\u554F 
  - protected\uFF1A\u4FEE\u98FE\u7684\u5C6C\u6027\u6216\u65B9\u6CD5\u662F\u53D7\u4FDD\u8B77\u7684\uFF0C\u5B83\u548C private \u985E\u4F3C\uFF0C\u5340\u5225\u662F\u5B83\u5728\u5B50\u985E\u4E2D\u4E5F\u662F\u5141\u8A31\u88AB\u8A2A\u554F\u7684
- \u5BA3\u544A\u65B9\u5F0F\uFF1A
  \`\`\`typescript
  class Animal {
    // \u8A2D\u7F6E\u5C6C\u6027\u8207\u6578\u64DA\u985E\u578B
    name: string;
    // \u5FC5\u9808\u8207\u8981\u8CE6\u4E88\u7684\u5C6C\u6027\u540C\u6578\u64DA\u985E\u578B
    constructor(name: string) {
      this.name = name
    }
    run() {
      return \`\${this.name} is running\`
    }
  }
  const snake = new Animal('lily');

  // \u7E7C\u627F\u7684\u7279\u6027
  class Dog extends Animal {
    bark() {
      return \`\${this.name} is barking\`
    }
  }

  const xiaobao = new Dog('xiaobao')
  // \u53EF\u8ABF\u7528\u7E7C\u627F\u4F86\u7684\u65B9\u6CD5
  console.log(xiaobao.run())
  console.log(xiaobao.bark())

  // \u5728\u5B50\u985E\u7684\u69CB\u9020\u51FD\u6578\u4E2D\uFF0C\u5FC5\u9808\u4F7F\u7528 super \u8ABF\u7528\u7236\u985E\u7684\u65B9\u6CD5\uFF0C\u5426\u5247\u5831\u932F
  class Cat extends Animal {
    constructor(name) {
      super(name)
      console.log(this.name)
    }
    run() {
      return 'Meow, ' + super.run()
    }
  }
  const maomao = new Cat('maomao')
  console.log(maomao.run())
  \`\`\`

## Class \u5BE6\u73FE Interface \u65B9\u6CD5
- [\u6587\u6A94\u7DB2\u5740](https://www.typescriptlang.org/docs/handbook/2/classes.html#implements-clauses)
- \u5BA3\u544A\u65B9\u5F0F\uFF1A
  \`\`\`typescript
  interface Radio {
    switchRadio(trigger: boolean): void;
  }

  interface Battery {
    checkBatteryStatus(): void;
  }

  class Car implements Radio {
    switchRadio(trigger: boolean) {
      return 123
    }
  }

  // \u53EF\u5BE6\u73FE\u591A\u500B\u63A5\u53E3\uFF0C\u4E2D\u9593\u53EA\u9700\u7528\u9017\u865F\u9694\u958B
  class Cellphone implements Radio, Battery {
    switchRadio() {
    }
    checkBatteryStatus() {

    }
  }
  \`\`\`

## Generics \u6CDB\u578B
- [\u6587\u6A94\u7DB2\u5740](https://www.typescriptlang.org/docs/handbook/2/generics.html)
- \u57FA\u672C\u4F7F\u7528\uFF1A
  \`\`\`typescript
  // \u53EF\u8A2D\u5B9A\u53C3\u6578\u8207\u56DE\u50B3\u503C\u7684\u6578\u64DA\u985E\u578B\u76F8\u540C
  function echo<T>(arg: T): T {
    return arg
  }
  const result = echo(123)

  // \u53EF\u4EE5\u50B3\u5165\u591A\u503C
  function swap<T, U>(tuple: [T, U]): [U, T] {
      return [tuple[1], tuple[0]]
  }
  const result2 = swap(['string', 123])
  \`\`\`

- \u6CDB\u578B\u7EA6\u675F\uFF1A
  \`\`\`typescript
  interface TestLength {
    length: number;
  }
  // \u901A\u904E\u7E7C\u627F\u63A5\u53E3\u4F86\u7D04\u675F\u662F\u5426\u8A72\u985E\u578B\u7B26\u5408\u689D\u4EF6
  function echoWithLength<T extends TestLength>(arg: T): T {
      console.log(arg.length)
      return arg
  }

  const result3 = echoWithLength({ length: 10 })
  const result4 = echoWithLength([1, 2, 3])
  \`\`\`
- \u6CDB\u578B\u7D50\u5408\u985E\u3001\u63A5\u53E3\uFF1A
  \`\`\`typescript
  // \u901A\u904E\u6CDB\u578B\u53EF\u8A2D\u5B9A\u985E\u5225\u88E1\u65B9\u6CD5\u53C3\u6578\u56DE\u50B3\u7684\u6578\u64DA\u985E\u578B
  class Queue<T> {
    private data = [];
    push(item: T) {
      return this.data.push(item)
    }
    pop(): T {
      return this.data.shift()
    }
  }
  const queue = new Queue<number>()

  // \u6CDB\u578B \u548C \u63A5\u53E3
  // \u901A\u904E\u6CDB\u578B\u53EF\u8A2D\u5B9A\u63A5\u53E3\u5167\u53C3\u6578\u7684\u6578\u64DA\u985E\u578B
  interface KeyPair<T, U> {
    key: T;
    value: U;
  }
  let kp1: KeyPair<number, string> = { key: 1, value: "str"}
  let kp2: KeyPair<string, number> = { key: "str", value: 123}
  \`\`\`

## \u8072\u660E\u6587\u4EF6
- \u70BA\u4F55\u9700\u8981\u8072\u660E\u6587\u4EF6\uFF1A\u82E5 \`Typescript\` \u5C08\u6848\u4F7F\u7528 \`JS\` \u7B2C\u4E09\u65B9\u5EAB\u6642\u6703\u7121\u6CD5\u76F4\u63A5\u5F15\u7528\uFF0C\u9019\u6642\u5C31\u9700\u8072\u660E\u6587\u4EF6\u4F86\u5354\u52A9\u5411 \`Typescript\` \u89E3\u91CB\u8A9E\u53E5
- \u6A94\u540D\u89E3\u91CB\uFF1A\`.d\` \u4EE3\u8868\u8072\u660E \`.d.ts\` \u4EE3\u8868\u53EA\u6709\u9069\u914D \`ts\` \u7684\u8072\u660E
- \u82E5\u8981\u751F\u6210 \`.d.ts\` \u6587\u4EF6\uFF0C\u5247\u9700\u6253\u958B \`tsconfig\` \u7684 \`"declaration": true\` \u8A2D\u5B9A
  - \`.d.ts\` \u6587\u4EF6\u4E0D\u5E36\u6709\u5BE6\u73FE\uFF0C\u53EA\u6709 \`export\` \u51FA\u4F86\u7684\u624D\u6703\u88AB\u8072\u660E\u6587\u4EF6\u8072\u660E
  - \u7576\u9EDE\u64CA\u4F7F\u7528\u7684\u5C6C\u6027\u6216\u51FD\u6578\u6642\uFF0C\u6703\u5C0E\u5F15\u5230 \`.d.ts\` \u6587\u4EF6\uFF0C\u6C92\u6709\u5247\u5C0E\u5F15\u5230\u8F49\u63DB\u5F8C\u7684 \`.js\` \u6587\u4EF6
- \u82E5\u8981\u6AA2\u67E5\u8072\u660E\u6587\u4EF6\u6B63\u78BA\u8207\u5426\uFF0C\u9700\u6253\u958B \`tsconfig\` \u7684 \`"skipLibCheck": true\` \u8A2D\u5B9A

### declare \u95DC\u9375\u5B57
- \u8868\u793A\u8072\u660E\u7684\u610F\u601D\uFF0C\u53EF\u4EE5\u7528\u5B83\u4F86\u505A\u51FA\u5404\u7A2E\u8072\u660E
- \u51E1\u4E8B\u8F49\u63DB\u6210 \`js\` \u80FD\u88AB\u8B58\u5225\u51FA\u4F86\u7684\uFF0C\u90FD\u8981\u52A0 declare
  - \u5982\uFF1A\`type\`\u3001\`interface\` \u56E0\u70BA \`js\` \u8B58\u5225\u4E0D\u51FA\u4F86\u6240\u4EE5\u4E0D\u7528\u52A0
- \u7BC4\u4F8B\uFF1A
  \`\`\`txt
  declare let/const  // \u8072\u660E\u5168\u5C40\u8B8A\u91CF
  declare function   // \u8072\u660E\u5168\u5C40\u65B9\u6CD5
  declare class      // \u8072\u660E\u5168\u5C40\u985E
  declare enum       // \u8072\u660E\u5168\u5C40\u679A\u8209\u985E\u578B
  declare namespace  // \u8072\u660E\uFF08\u542B\u6709\u5B50\u5C6C\u6027\u7684\uFF09\u5168\u5C40\u5C0D\u8C61
  interface/type     // \u8072\u660E\u5168\u5C40\u985E\u578B
  \`\`\`

### \u547D\u540D\u7A7A\u9593\u7528\u6CD5
- \u547D\u540D\u4E00\u500B \`declare\` \u7A7A\u9593\uFF0C\u88E1\u9762\u5C31\u7121\u9700\u518D\u52A0\u524D\u7DB4 \`declare\`
- \u7BC4\u4F8B\uFF1A
  - \u5B9A\u7FA9
    \`\`\`typescript
    declare namespace JQuery {
      type cssSelector = {
        css: (key: string, value: string) => cssSelector;
      };
      export function $(ready: () => void): void;
      export function $(selector: any): cssSelector;
      export namespace $ {
        function ajax(url: string, settings?: any): void;
        function get(url: string, settings?: any): void;
        function post(url: string, settings?: any): void;
      }
    }
    \`\`\`
  - \u4F7F\u7528
    \`\`\`js
    JQuery.$(function () {});
    JQuery.$("div").css("border", "1px solid red").css("marginTop", "20px");
    JQuery.$.post("http://localhost:5000/search");
    \`\`\`

### \u6A21\u584A\u7A7A\u9593\u7528\u6CD5
- \u53EF\u907F\u514D\u547D\u540D\u7A7A\u9593\u90FD\u8981\u52A0\u540D\u7A31\u524D\u7DB4\uFF0C\u5982\uFF1A\`Jquery.xxx\`
- \u7BC4\u4F8B\uFF1A
  - \u5B9A\u7FA9
    \`\`\`typescript
    declare module "JQueryModule" {
      type cssSelector = {
        css: (key: string, value: string) => cssSelector;
      };
      function $(ready: () => void): void;
      function $(selector: any): cssSelector;
      namespace $ {
        function ajax(url: string, settings?: any): void;
        function get(url: string, settings?: any): void;
        function post(url: string, settings?: any): void;
      }
      // \u70BA\u4E86\u517C\u5BB9\u5176\u4ED6\u7528\u6CD5\uFF0C\u5EFA\u8B70\u5BEB\u6210\u6B64\u65B9\u5F0F
      export = $;
    }
    \`\`\`
  - \u4F7F\u7528
    \`\`\`js
    import $ from "JQueryModule";

    $(function () {});
    $("div").css("border", "1px solid red").css("position", "relative");
    \`\`\`

### \u76F8\u95DC\u9023\u7D50
- [\u6587\u6A94\u7DB2\u57401](https://www.typescriptlang.org/docs/handbook/declaration-files/introduction.html)
- [\u6587\u6A94\u7DB2\u57402](https://ts.xcatliu.com/basics/declaration-files.html)
- [\u5B98\u65B9\u8072\u660E\u6587\u4EF6\u5EAB](https://github.com/DefinitelyTyped/DefinitelyTyped/)
- [\u5B98\u65B9\u641C\u7D22\u8072\u660E\u5EAB](https://www.typescriptlang.org/dt/search?search=)

## \u5167\u7F6E\u5C0D\u8C61
- [\u6587\u6A94\u7DB2\u5740](https://github.com/Microsoft/TypeScript/tree/main/src/lib)
- ECMAScript \u7684\u5185\u7F6E\u5BF9\u8C61
  - Boolean
  - Error
  - Date
  - RegExp
  - \u66F4\u591A\u5167\u7F6E\u5C0D\u8C61\u53EF\u53C3\u8003 [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects)
  - \u5BA3\u544A\u65B9\u5F0F\uFF1A
    \`\`\`typescript
    let b: Boolean = new Boolean(1);
    let e: Error = new Error('Error');
    let d: Date = new Date();
    let r: RegExp = /[a-z]/;
    \`\`\`
    
### DOM \u548C BOM \u7684\u5185\u7F6E\u5BF9\u8C61
- Document
- HTMLElement
- Event
- NodeList
- \u5BA3\u544A\u65B9\u5F0F\uFF1A
  \`\`\`typescript
  let body: HTMLElement = document.body;
  let div: NodeList = document.querySelectorAll('div');
  \`\`\`

### Utility Types \u5BE6\u7528\u7A0B\u5E8F\u985E\u578B
- [\u6587\u6A94\u7DB2\u5740](https://www.typescriptlang.org/docs/handbook/utility-types.html)
- \u8A72\u985E\u578B\u70BA\u5E6B\u52A9\u6027\u7684\u985E\u578B\uFF0C\u63D0\u4F9B\u4E00\u4E9B\u65B9\u4FBF\u7684\u529F\u80FD
- \u7BC4\u4F8B\uFF1A
  \`\`\`typescript
  // partial\uFF0C\u5B83\u53EF\u4EE5\u628A\u50B3\u5165\u7684\u985E\u578B\u90FD\u8B8A\u6210\u53EF\u9078
  interface Person {
      name: string
      age: number
  }
  let ming: Person = { name: 'viking', age: 20 }
  type IPartial = Partial<Person>
  let ming2: IPartial = {}

  // Omit\uFF0C\u5B83\u8FD4\u56DE\u7684\u985E\u578B\u53EF\u4EE5\u5FFD\u7565\u50B3\u5165\u985E\u578B\u7684\u67D0\u500B\u5C6C\u6027
  type IOmit = Omit<Person, 'name'>
  let viking3: IOmit = { age: 20 }
  \`\`\`
`;export{n as default};

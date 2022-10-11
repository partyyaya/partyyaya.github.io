const n=`## Typescript \u7B46\u8A18
<a id="user-content-top"></a>

### \u76EE\u9304
<details open>
<summary style="cursor: pointer;">&nbsp;\u76EE\u9304\u6E05\u55AE </summary>

- [\u5B89\u88DD\u958B\u767C\u74B0\u5883](#user-content-install)
- [\u57FA\u672C\u6578\u64DA\u985E\u578B](#user-content-basic-type)
- [Array(\u6578\u7D44) \u8207 Tuple(\u5143\u7D44)](#user-content-array-tuple)
- [Interface \u63A5\u53E3](#user-content-interface)
- [Function \u51FD\u6578](#user-content-function)
- [\u985E\u578B\u63A8\u8AD6\u3001\u806F\u5408\u985E\u578B\u3001\u985E\u578B\u65B7\u8A00](#user-content-type-inference-union-assertions)
- [Class \u985E](#user-content-class)
- [Class \u5BE6\u73FE Interface \u65B9\u6CD5](#user-content-class-interface)
- [Enums \u679A\u8209](#user-content-enums)
- [Generics \u6CDB\u578B](#user-content-generics)
- [Type Aliases \u985E\u578B\u5225\u540D](#user-content-type-aliases)
- [\u8072\u660E\u6587\u4EF6](#user-content-declaration-files)
- [\u5167\u7F6E\u5C0D\u8C61](#user-content-built-in-objects)

</details>

<hr id="user-content-install" style="height: 4px;">

#### <a href="#user-content-top" >\u5B89\u88DD\u958B\u767C\u74B0\u5883</a>
#### \u5B89\u88DD \`\`\`nvm\`\`\`
- \u7528\u9014\uFF1A\`\`\`nvm\`\`\` \u53EF\u5207\u63DB \`\`\`Node.js\`\`\` \u7248\u672C\u74B0\u5883\uFF0C\u4EE5\u65B9\u4FBF\u5404\u5834\u5408\u958B\u767C
- \u82E5\u5148\u524D\u6709\u5B89\u88DD \`\`\`Node.js\`\`\` \u6703\u8A62\u554F\u662F\u5426\u4E00\u8D77\u7BA1\u7406\u8A72\u7248\u672C
- [Windows \u5B89\u88DD](https://github.com/coreybutler/nvm-windows/releases)
  - \u9078\u64C7\u6700\u65B0\u7248\u672C\u4E26\u4E0B\u8F09 \`\`\`nvm-setup.zip\`\`\`
  - \u89E3\u58D3\u7E2E\u4E26\u57F7\u884C \`\`\`nvm-setup.exe\`\`\` \u9032\u884C\u5B89\u88DD\u5373\u53EF
- [Linux \u5B89\u88DD](https://github.com/nvm-sh/nvm#installing-and-updating)
- \u5E38\u7528\u6307\u4EE4\u5982\u4E0B\uFF1A
  - \u5B89\u88DD\u7279\u5B9A\u7248\u672C\u7684 \`\`\`nvm\`\`\`\uFF1A\`\`\`nvm install \u7248\u672C\u865F\`\`\`
  - \u5217\u51FA\u5DF2\u5B89\u88DD\u6E05\u55AE\uFF1A\`\`\`nvm list\`\`\`
  - \u5207\u63DB\u5230\u7279\u5B9A \`\`\`Node.js\`\`\` \u7248\u672C(\u5DF2\u5B89\u88DD\u7684\u7248\u672C)\uFF1A\`\`\`nvm use v\u7248\u672C\u865F\`\`\`
    - \u5FC5\u9808\u4F7F\u7528\u7CFB\u7D71\u7BA1\u7406\u54E1\u57F7\u884C

#### \u5B89\u88DD \`\`\`Typescript\`\`\`
- \u5B89\u88DD\u5168\u5C40\u74B0\u5883\uFF1A\`\`\`npm install -g typescript\`\`\`
- \u6AA2\u67E5\u662F\u5426\u5DF2\u5B89\u88DD\uFF1A\`\`\`tsc -v\`\`\`
- \u7522\u751F\u521D\u59CB\u8A2D\u5B9A\u6A94\uFF1A\`\`\`tsc --init\`\`\`
  - \u8A2D\u5B9A\u6A94\u5167\u53EF\u4EE5\u8A3B\u91CB\uFF0C\u4E26\u5305\u542B\u6240\u6709\u8A2D\u5B9A\u89E3\u91CB
- \u7DE8\u8B6F\u6587\u4EF6\uFF1A\`\`\`tsc fileName.ts\`\`\`


<hr id="user-content-basic-type" style="height: 2px;">

#### <a href="#user-content-top" >\u57FA\u672C\u6578\u64DA\u985E\u578B</a>
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

<hr id="user-content-array-tuple" style="height: 2px;">

#### <a href="#user-content-top" >Array(\u6578\u7D44) \u8207 Tuple(\u5143\u7D44)</a>
- Array \u5BA3\u544A\u70BA\u56FA\u5B9A\u4E00\u7A2E\u6578\u64DA\u985E\u578B\u7684\u6578\u7D44
  - \u5BA3\u544A\u65B9\u5F0F\uFF1A\`\`\`let arrOfNumbers: number[] = [1, 2, 3]\`\`\`
- Tuple \u70BA\u5728\u540C\u4E00\u6578\u7D44\u5167\u6709\u591A\u7A2E\u6578\u64DA\u985E\u578B
  - \u5BA3\u544A\u65B9\u5F0F\uFF1A\`\`\`let test: [string, number] = ['test', 123]\`\`\`

<hr id="user-content-interface" style="height: 2px;">

#### <a href="#user-content-top" >Interface \u63A5\u53E3</a>
- [\u6587\u6A94\u7DB2\u5740](https://www.typescriptlang.org/docs/handbook/2/objects.html)
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

<hr id="user-content-function" style="height: 2px;">

#### <a href="#user-content-top" >Function \u51FD\u6578</a>
- [\u6587\u6A94\u7DB2\u5740](https://www.typescriptlang.org/docs/handbook/2/functions.html)
- \u5BA3\u544A\u65B9\u5F0F\uFF1A
  \`\`\`typescript
  // z \u70BA\u53EF\u9078\u53C3\u6578
  function add(x: number, y: number, z?: number): number {
    // z (number | undefined)
    if (z) {
      return x + y + z
    } else {
      return x + y
    }
  }
  // \u53EF\u5C07\u51FD\u6578\u8CE6\u4E88\u63CF\u8FF0\u51FD\u6578
  const add2: (x: number, y: number, z?:number) => number = add

  // interface \u63CF\u8FF0\u51FD\u6578\u985E\u578B
  interface ISum {
    (x: number, y: number): number
  }
  const sum = (x: number, y: number): number => {
    return x + y
  }
  const sum2: ISum = sum

  // \u7528\u8B8A\u6578\u63CF\u8FF0\u51FD\u6578\u985E\u578B
  let sum: (x: number, y: number) => number;
  let sum2: typeof sum;
  \`\`\`

<hr id="user-content-type-inference-union-assertions" style="height: 2px;">

#### <a href="#user-content-top" >\u985E\u578B\u63A8\u8AD6\u3001\u806F\u5408\u985E\u578B\u3001\u985E\u578B\u65B7\u8A00</a>
- [\u6587\u6A94\u7DB2\u5740](https://www.typescriptlang.org/docs/handbook/type-inference.html)
- \u5BA3\u544A\u65B9\u5F0F\uFF1A
  \`\`\`typescript
  // \u985E\u578B\u63A8\u8AD6
  // \u5728\u4E0D\u540C\u7684\u689D\u4EF6\u88E1\u9762\uFF0C\u6703\u667A\u80FD\u7684\u7E2E\u5C0F\u63A8\u8AD6\u7BC4\u570D\uFF0C\u51FA\u932F\u7684\u6A5F\u7387\u5C31\u964D\u4F4E\u4E86\u3002
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
  \`\`\`

<hr id="user-content-class" style="height: 2px;">

#### <a href="#user-content-top" >Class \u985E</a>
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

<hr id="user-content-class-interface" style="height: 2px;">

#### <a href="#user-content-top" >Class \u5BE6\u73FE Interface \u65B9\u6CD5</a>
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

<hr id="user-content-enums" style="height: 2px;">

#### <a href="#user-content-top" >Enums \u679A\u8209</a>
- [\u6587\u6A94\u7DB2\u5740](https://www.typescriptlang.org/docs/handbook/enums.html)
- \u5BA3\u544A\u65B9\u5F0F\uFF1A
  \`\`\`typescript
  // \u7BC4\u4F8B1
  enum Direction {
    Up,
    Down,
    Left,
    Right,
  }
  console.log(Direction.Up);// 0
  // \u679A\u8209\u6703\u505A\u53CD\u5411\u6620\u5C04
  console.log(Direction[0]);// Up

  // \u7BC4\u4F8B2
  enum Direction {
    Up = 1,
    Down,
    Left,
    Right,
  }
  console.log(Direction.Up);// 1
  // \u7576\u5176\u4E2D\u4E00\u500B\u8A2D\u5B9A\u6578\u5B57\u6642\uFF0C\u679A\u8209\u5C07\u6703\u7167\u9806\u5E8F\u6392\u4E0B\u53BB
  // \u4E26\u4E14\u8A2D\u5B9A\u6578\u7D44[\u6578\u5B57]\u6620\u5C04\u70BA\u8A72\u503C
  console.log(Direction[1]);

  // \u7BC4\u4F8B3
  // \u5B57\u7B26\u4E32\u679A\u8209
  enum Direction {
    Up = 'UP',
    Down = 'DOWN',
    Left = 'LEFT',
    Right = 'RIGHT',
  }
  const value = 'UP'
  if (value === Direction.Up) {
    console.log('go up!')
  }
  \`\`\`

<hr id="user-content-generics" style="height: 2px;">

#### <a href="#user-content-top" >Generics \u6CDB\u578B</a>
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

<hr id="user-content-type-aliases" style="height: 2px;">

#### <a href="#user-content-top" >Type Aliases \u985E\u578B\u5225\u540D</a>
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

  // \u4EA4\u53C9\u985E\u578B(\u5C07\u591A\u500B\u63A5\u53E3\u88E1\u7684\u5C6C\u6027\u52A0\u5728\u4E00\u8D77)
  // \u82E5\u6709\u91CD\u8907\u5C6C\u6027\u4E0D\u540C\u6578\u64DA\u985E\u578B\u5247\u6703\u5831\u932F(\u82E5\u4E00\u500B\u70BAany\u985E\u578B\uFF0C\u53E6\u4E00\u500B\u70BA number \u6578\u64DA\u985E\u578B\uFF0C\u5247\u6700\u5F8C\u9078\u70BA number \u6578\u64DA\u985E\u578B)
  interface IName  {
    name: string
  }
  type IPerson = IName & { age: number }
  let person: IPerson = { name: 'hello', age: 12 }

  // \u5B57\u7B26\u4E32\u5B57\u9762\u91CF
  type Directions = 'Up' | 'Down' | 'Left' | 'Right'
  let toWhere: Directions = 'Up'
  \`\`\`

<hr id="user-content-declaration-files" style="height: 2px;">

#### <a href="#user-content-top" >\u8072\u660E\u6587\u4EF6</a>
- \u7C21\u4ECB\uFF1A
  \`\`\`txt
  \u82E5 Typescript \u5C08\u6848\u9700\u4F7F\u7528 JS \u7B2C\u4E09\u65B9\u5EAB\u6642\u6703\u7121\u6CD5\u76F4\u63A5\u5F15\u7528\uFF0C
  \u9019\u6642\u5C31\u9700\u8981\u8072\u660E\u6587\u4EF6\u4F86\u5354\u52A9\u5411 Typescript \u89E3\u91CB\u8A9E\u53E5
  \u901A\u5E38\u8072\u660E\u8A9E\u53E5\u901A\u5E38\u6703\u653E\u5165 .d.ts \u7684\u6587\u4EF6\u88E1
  .d \u4EE3\u8868\u8072\u660E .d.ts \u4EE3\u8868\u53EA\u6709\u9069\u914D ts \u7684\u8072\u660E
  \`\`\`
- [\u6587\u6A94\u7DB2\u57401](https://www.typescriptlang.org/docs/handbook/declaration-files/introduction.html)
- [\u6587\u6A94\u7DB2\u57402](https://ts.xcatliu.com/basics/declaration-files.html)
- [\u5B98\u65B9\u8072\u660E\u6587\u4EF6\u5EAB](https://github.com/DefinitelyTyped/DefinitelyTyped/)
- [\u5B98\u65B9\u641C\u7D22\u8072\u660E\u5EAB](https://www.typescriptlang.org/dt/search?search=)

<hr id="user-content-built-in-objects" style="height: 2px;">

#### <a href="#user-content-top" >\u5167\u7F6E\u5C0D\u8C61</a>
- [\u6587\u6A94\u7DB2\u5740](https://github.com/Microsoft/TypeScript/tree/main/src/lib)
- ECMAScript \u7684\u5185\u7F6E\u5BF9\u8C61
  - Boolean
  - Error
  - Date
  - RegExp
  - \u66F4\u591A\u5167\u7F6E\u5C0D\u8C61\u53EF\u53C3\u8003 [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects)
  - \u5BA3\u544A\u65B9\u5F0F\uFF1A
    \`\`\`js
    let b: Boolean = new Boolean(1);
    let e: Error = new Error('Error');
    let d: Date = new Date();
    let r: RegExp = /[a-z]/;
    \`\`\`
- DOM \u548C BOM \u7684\u5185\u7F6E\u5BF9\u8C61
  - Document
  - HTMLElement
  - Event
  - NodeList
  - \u5BA3\u544A\u65B9\u5F0F\uFF1A
    \`\`\`js
    let body: HTMLElement = document.body;
    let div: NodeList = document.querySelectorAll('div');
    \`\`\`
- Utility Types \u5BE6\u7528\u7A0B\u5E8F\u985E\u578B
  - [\u6587\u6A94\u7DB2\u5740](https://www.typescriptlang.org/docs/handbook/utility-types.html)
  - \u8A72\u985E\u578B\u70BA\u5E6B\u52A9\u6027\u7684\u985E\u578B\uFF0C\u63D0\u4F9B\u4E00\u4E9B\u65B9\u4FBF\u7684\u529F\u80FD
  - \u7BC4\u4F8B\uFF1A
    \`\`\`js
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

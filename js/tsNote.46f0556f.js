(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["tsNote"],{"16d7":function(n,e,t){},"6be8":function(n,e,t){"use strict";t.r(e);var r=t("7a23");function s(n,e,t,s,o,i){var a=Object(r["y"])("Loading");return Object(r["r"])(),Object(r["d"])(r["a"],null,[s.displayLoading?(Object(r["r"])(),Object(r["d"])(a,{key:0,class:{"content--hide":!s.showLoading,"content--show":s.showLoading}},null,8,["class"])):Object(r["e"])("",!0),s.displayContent?(Object(r["r"])(),Object(r["d"])("div",{key:1,class:{"markdown-content":!0,"content--hide":!s.showContent,"content--show":s.showContent}},[Object(r["h"])("div",{class:"markdown-body",innerHTML:s.htmlContent},null,8,["innerHTML"])],2)):Object(r["e"])("",!0)],64)}var o=t("1da1"),i=(t("96cf"),t("d4cd")),a=t.n(i),c=t("2338"),u=t("1487"),l=t.n(u),p=t("3a5e"),h='## Typescript 筆記\n<a id="user-content-top"></a>\n\n### 目錄\n<details open>\n<summary style="cursor: pointer;">&nbsp;目錄清單 </summary>\n\n- [安裝開發環境](#user-content-install)\n- [基本數據類型](#user-content-basic-type)\n- [Array(數組) 與 Tuple(元組)](#user-content-array-tuple)\n- [Interface 接口](#user-content-interface)\n- [Function 函數](#user-content-function)\n- [類型推論、聯合類型、類型斷言](#user-content-type-inference-union-assertions)\n- [Class 類](#user-content-class)\n- [Class 實現 Interface 方法](#user-content-class-interface)\n- [Enums 枚舉](#user-content-enums)\n- [Generics 泛型](#user-content-generics)\n- [Type Aliases 類型別名](#user-content-type-aliases)\n- [聲明文件](#user-content-declaration-files)\n- [內置對象](#user-content-built-in-objects)\n\n</details>\n\n<hr id="user-content-install" style="height: 4px;">\n\n#### <a href="#user-content-top" >安裝開發環境</a>\n#### 安裝 ```nvm```\n- 用途：```nvm``` 可切換 ```Node.js``` 版本環境，以方便各場合開發\n- 若先前有安裝 ```Node.js``` 會詢問是否一起管理該版本\n- [Windows 安裝](https://github.com/coreybutler/nvm-windows/releases)\n  - 選擇最新版本並下載 ```nvm-setup.zip```\n  - 解壓縮並執行 ```nvm-setup.exe``` 進行安裝即可\n- [Linux 安裝](https://github.com/nvm-sh/nvm#installing-and-updating)\n- 常用指令如下：\n  - 安裝特定版本的 ```nvm```：```nvm install 版本號```\n  - 列出已安裝清單：```nvm list```\n  - 切換到特定 ```Node.js``` 版本(已安裝的版本)：```nvm install 版本號```\n\n#### 安裝 ```Typescript```\n- 安裝全局環境：```npm install -g typescript```\n- 檢查是否已安裝：```tsc -v```\n- 產生初始設定檔：```tsc --init```\n  - 設定檔內可以註釋，並包含所有設定解釋\n- 編譯文件：```tsc fileName.ts```\n\n\n<hr id="user-content-basic-type" style="height: 2px;">\n\n#### <a href="#user-content-top" >基本數據類型</a>\n- [文檔網址](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html)\n- 基本類型有以下幾種：\n  - Boolean\n  - Null\n  - Undefined\n  - Number\n  - BigInt\n  - String\n  - Symbol\n  - Any(在未確定數據類型時可設定 Any:所有類型)\n- 宣告方式：```let test: boolean = true;```\n\n<hr id="user-content-array-tuple" style="height: 2px;">\n\n#### <a href="#user-content-top" >Array(數組) 與 Tuple(元組)</a>\n- Array 宣告為固定一種數據類型的數組\n  - 宣告方式：```let arrOfNumbers: number[] = [1, 2, 3]```\n- Tuple 為在同一數組內有多種數據類型\n  - 宣告方式：```let test: [string, number] = [\'test\', 123]```\n\n<hr id="user-content-interface" style="height: 2px;">\n\n#### <a href="#user-content-top" >Interface 接口</a>\n- [文檔網址](https://www.typescriptlang.org/docs/handbook/2/objects.html)\n- 宣告方式：\n  ```typescript\n  // 通常 Interface 首字母為大寫\n  interface Person {\n    // 只讀屬性，設定初始值後不能再做更改\n    readonly id: number;\n    name: string;\n    // 可選屬性，設定該參數可以不存在\n    age?: number;\n  }\n\n  let viking: Person = {\n    id: 1,\n    name: \'Viking\'\n  }\n  ```\n\n<hr id="user-content-function" style="height: 2px;">\n\n#### <a href="#user-content-top" >Function 函數</a>\n- [文檔網址](https://www.typescriptlang.org/docs/handbook/2/functions.html)\n- 宣告方式：\n  ```typescript\n  // z 為可選參數\n  function add(x: number, y: number, z?: number): number {\n    // z (number | undefined)\n    if (z) {\n      return x + y + z\n    } else {\n      return x + y\n    }\n  }\n  // 可將函數賦予描述函數\n  const add2: (x: number, y: number, z?:number) => number = add\n\n  // interface 描述函數類型\n  interface ISum {\n    (x: number, y: number): number\n  }\n  const sum = (x: number, y: number): number => {\n    return x + y\n  }\n  const sum2: ISum = sum\n\n  // 用變數描述函數類型\n  let sum: (x: number, y: number) => number;\n  let sum2: typeof sum;\n  ```\n\n<hr id="user-content-type-inference-union-assertions" style="height: 2px;">\n\n#### <a href="#user-content-top" >類型推論、聯合類型、類型斷言</a>\n- [文檔網址](https://www.typescriptlang.org/docs/handbook/type-inference.html)\n- 宣告方式：\n  ```typescript\n  // 類型推論\n  // 在不同的條件裡面，會智能的縮小推論範圍，出錯的機率就降低了。\n  function getLength2(input: string | number): number {\n    if (typeof input === \'string\') {\n      return input.length\n    } else {\n      return input.toString().length\n    }\n  }\n\n  // 聯合類型\n  // 該變數可以是 數字 或 字串\n  let numberOrString: number | string \n  // 當步確定目前聯合類型目前是哪個類型時，只能訪問該聯合類型內所有類型共同的屬性與方法\n  numberOrString.length\n  numberOrString.toString()\n\n  // 類型斷言\n  // 用 as 告訴編譯器，請把它看作是一個 string 類型並可以用 string 的方法。\n  function getLength(input: string | number): number {\n    const str = input as string\n    if (str.length) {\n      return str.length\n    } else {\n      const number = input as number\n      return number.toString().length\n    }\n  }\n  ```\n\n<hr id="user-content-class" style="height: 2px;">\n\n#### <a href="#user-content-top" >Class 類</a>\n- [Class 類](https://www.typescriptlang.org/docs/handbook/2/classes.html)\n  - 面相對象三大特點\n    - 封裝(Encapsulation)：隱藏對數據的操作，只暴露對外接口，通過對外提供的接口來訪問該對象\n    - 繼承(Inheritance)：子類繼承父類，除了擁有父類的所有特性外，可增加些更具體的特性\n    - 多態(Polymorphism)：由繼承而產生不同的類，同一個方法可以有不同的響應\n- [訪問修飾符](https://www.typescriptlang.org/docs/handbook/2/classes.html#member-visibility)\n  - public：修飾的屬性或方法是公有的，可在任何地方被訪問，默認所有的屬性和方法都是 public 的 \n  - private：修飾的屬性或方法是私有的，不能在聲明它的類的外部訪問 \n  - protected：修飾的屬性或方法是受保護的，它和 private 類似，區別是它在子類中也是允許被訪問的\n- 宣告方式：\n  ```typescript\n  class Animal {\n    // 設置屬性與數據類型\n    name: string;\n    // 必須與要賦予的屬性同數據類型\n    constructor(name: string) {\n      this.name = name\n    }\n    run() {\n      return `${this.name} is running`\n    }\n  }\n  const snake = new Animal(\'lily\');\n\n  // 繼承的特性\n  class Dog extends Animal {\n    bark() {\n      return `${this.name} is barking`\n    }\n  }\n\n  const xiaobao = new Dog(\'xiaobao\')\n  // 可調用繼承來的方法\n  console.log(xiaobao.run())\n  console.log(xiaobao.bark())\n\n  // 在子類的構造函數中，必須使用 super 調用父類的方法，否則報錯\n  class Cat extends Animal {\n    constructor(name) {\n      super(name)\n      console.log(this.name)\n    }\n    run() {\n      return \'Meow, \' + super.run()\n    }\n  }\n  const maomao = new Cat(\'maomao\')\n  console.log(maomao.run())\n  ```\n\n<hr id="user-content-class-interface" style="height: 2px;">\n\n#### <a href="#user-content-top" >Class 實現 Interface 方法</a>\n- [文檔網址](https://www.typescriptlang.org/docs/handbook/2/classes.html#implements-clauses)\n- 宣告方式：\n  ```typescript\n  interface Radio {\n    switchRadio(trigger: boolean): void;\n  }\n\n  interface Battery {\n    checkBatteryStatus(): void;\n  }\n\n  class Car implements Radio {\n    switchRadio(trigger: boolean) {\n      return 123\n    }\n  }\n\n  // 可實現多個接口，中間只需用逗號隔開\n  class Cellphone implements Radio, Battery {\n    switchRadio() {\n    }\n    checkBatteryStatus() {\n\n    }\n  }\n  ```\n\n<hr id="user-content-enums" style="height: 2px;">\n\n#### <a href="#user-content-top" >Enums 枚舉</a>\n- [文檔網址](https://www.typescriptlang.org/docs/handbook/enums.html)\n- 宣告方式：\n  ```typescript\n  // 範例1\n  enum Direction {\n    Up,\n    Down,\n    Left,\n    Right,\n  }\n  console.log(Direction.Up);// 0\n  // 枚舉會做反向映射\n  console.log(Direction[0]);// Up\n\n  // 範例2\n  enum Direction {\n    Up = 1,\n    Down,\n    Left,\n    Right,\n  }\n  console.log(Direction.Up);// 1\n  // 當其中一個設定數字時，枚舉將會照順序排下去\n  // 並且設定數組[數字]映射為該值\n  console.log(Direction[1]);\n\n  // 範例3\n  // 字符串枚舉\n  enum Direction {\n    Up = \'UP\',\n    Down = \'DOWN\',\n    Left = \'LEFT\',\n    Right = \'RIGHT\',\n  }\n  const value = \'UP\'\n  if (value === Direction.Up) {\n    console.log(\'go up!\')\n  }\n  ```\n\n<hr id="user-content-generics" style="height: 2px;">\n\n#### <a href="#user-content-top" >Generics 泛型</a>\n- [文檔網址](https://www.typescriptlang.org/docs/handbook/2/generics.html)\n- 基本使用：\n  ```typescript\n  // 可設定參數與回傳值的數據類型相同\n  function echo<T>(arg: T): T {\n    return arg\n  }\n  const result = echo(123)\n\n  // 可以傳入多值\n  function swap<T, U>(tuple: [T, U]): [U, T] {\n      return [tuple[1], tuple[0]]\n  }\n  const result2 = swap([\'string\', 123])\n  ```\n\n- 泛型约束：\n  ```typescript\n  interface TestLength {\n    length: number;\n  }\n  // 通過繼承接口來約束是否該類型符合條件\n  function echoWithLength<T extends TestLength>(arg: T): T {\n      console.log(arg.length)\n      return arg\n  }\n\n  const result3 = echoWithLength({ length: 10 })\n  const result4 = echoWithLength([1, 2, 3])\n  ```\n- 泛型結合類、接口：\n  ```typescript\n  // 通過泛型可設定類別裡方法參數回傳的數據類型\n  class Queue<T> {\n    private data = [];\n    push(item: T) {\n      return this.data.push(item)\n    }\n    pop(): T {\n      return this.data.shift()\n    }\n  }\n  const queue = new Queue<number>()\n\n  // 泛型 和 接口\n  // 通過泛型可設定接口內參數的數據類型\n  interface KeyPair<T, U> {\n    key: T;\n    value: U;\n  }\n  let kp1: KeyPair<number, string> = { key: 1, value: "str"}\n  let kp2: KeyPair<string, number> = { key: "str", value: 123}\n  ```\n\n<hr id="user-content-type-aliases" style="height: 2px;">\n\n#### <a href="#user-content-top" >Type Aliases 類型別名</a>\n- [文檔網址](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#type-aliases)\n- 宣告方式：\n  ```typescript\n  // 給描述函數類型起別名\n  type PlusType = (x: number, y: number) => number\n  let sum2: PlusType\n\n  // 聯合類型\n  type StrOrNumber = string | number\n  let result2: StrOrNumber = \'123\'\n  result2 = 123\n\n  // 交叉類型(將多個接口裡的屬性加在一起)\n  // 若有重複屬性不同數據類型則會報錯(若一個為any類型，另一個為 number 數據類型，則最後選為 number 數據類型)\n  interface IName  {\n    name: string\n  }\n  type IPerson = IName & { age: number }\n  let person: IPerson = { name: \'hello\', age: 12 }\n\n  // 字符串字面量\n  type Directions = \'Up\' | \'Down\' | \'Left\' | \'Right\'\n  let toWhere: Directions = \'Up\'\n  ```\n\n<hr id="user-content-declaration-files" style="height: 2px;">\n\n#### <a href="#user-content-top" >聲明文件</a>\n- 簡介：\n  ```txt\n  若 Typescript 專案需使用 JS 第三方庫時會無法直接引用，\n  這時就需要聲明文件來協助向 Typescript 解釋語句\n  通常聲明語句通常會放入 .d.ts 的文件裡\n  .d 代表聲明 .d.ts 代表只有適配 ts 的聲明\n  ```\n- [文檔網址1](https://www.typescriptlang.org/docs/handbook/declaration-files/introduction.html)\n- [文檔網址2](https://ts.xcatliu.com/basics/declaration-files.html)\n- [官方聲明文件庫](https://github.com/DefinitelyTyped/DefinitelyTyped/)\n- [官方搜索聲明庫](https://www.typescriptlang.org/dt/search?search=)\n\n<hr id="user-content-built-in-objects" style="height: 2px;">\n\n#### <a href="#user-content-top" >內置對象</a>\n- [文檔網址](https://github.com/Microsoft/TypeScript/tree/main/src/lib)\n- ECMAScript 的内置对象\n  - Boolean\n  - Error\n  - Date\n  - RegExp\n  - 更多內置對象可參考 [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects)\n  - 宣告方式：\n    ```js\n    let b: Boolean = new Boolean(1);\n    let e: Error = new Error(\'Error\');\n    let d: Date = new Date();\n    let r: RegExp = /[a-z]/;\n    ```\n- DOM 和 BOM 的内置对象\n  - Document\n  - HTMLElement\n  - Event\n  - NodeList\n  - 宣告方式：\n    ```js\n    let body: HTMLElement = document.body;\n    let div: NodeList = document.querySelectorAll(\'div\');\n    ```\n- Utility Types 實用程序類型\n  - [文檔網址](https://www.typescriptlang.org/docs/handbook/utility-types.html)\n  - 該類型為幫助性的類型，提供一些方便的功能\n  - 範例：\n    ```js\n    // partial，它可以把傳入的類型都變成可選\n    interface Person {\n        name: string\n        age: number\n    }\n    let ming: Person = { name: \'viking\', age: 20 }\n    type IPartial = Partial<Person>\n    let ming2: IPartial = {}\n\n    // Omit，它返回的類型可以忽略傳入類型的某個屬性\n    type IOmit = Omit<Person, \'name\'>\n    let viking3: IOmit = { age: 20 }\n    ```\n',m=Object(r["w"])(!0),g=Object(r["w"])(!1),d=Object(r["w"])(!0),y=Object(r["w"])(!1),b=Object(r["w"])(""),w={name:"TSNote",components:{Loading:p["a"]},setup:function(){return Object(r["p"])(Object(o["a"])(regeneratorRuntime.mark((function n(){var e,t;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:m.value&&(e=a()({html:!0,linkify:!0,typographer:!0,highlight:function(n,e){return l.a.highlight(n,{language:e}).value}}).use(c["a"]),t=e.render("".concat(h)),b.value=t,setTimeout((function(){m.value=!1,setTimeout((function(){d.value=!1,y.value=!0,setTimeout((function(){g.value=!0}),100)}),500)}),1e3));case 1:case"end":return n.stop()}}),n)})))),{showLoading:m,showContent:g,displayLoading:d,displayContent:y,htmlContent:b}}};t("fbcc");w.render=s;e["default"]=w},fbcc:function(n,e,t){"use strict";t("16d7")}}]);
//# sourceMappingURL=tsNote.46f0556f.js.map
const n=`<span style="font-size: 32px; font-weight: 600;">JS Class</span>

## \u7C21\u4ECB
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

## \u5B9A\u7FA9\u5F62\u5F0F
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

## \u5C6C\u6027\u8207\u65B9\u6CD5
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

## getter \u8207 setter
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

## \u79C1\u6709\u5C6C\u6027\u8207\u65B9\u6CD5
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

## extends
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

## super
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
`;export{n as default};

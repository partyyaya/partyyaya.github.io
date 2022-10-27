const n=`<span style="font-size: 32px; font-weight: 600;">JS \u5C0D\u8C61</span>

## \u9762\u5411\u5C0D\u8C61\u8207\u57FA\u65BC\u5C0D\u8C61\u5DEE\u5225
- \u57FA\u65BC\u5C0D\u8C61(object-based)
  - \u57FA\u65BC\u5C0D\u8C61\u7684\u8A9E\u8A00\u652F\u6301\u5C0D\u8C61\u548C\u5C01\u88DD\u7684\u4F7F\u7528\u3002
  - \u5B83\u5011\u4E0D\u652F\u6301\u7E7C\u627F\u6216\u591A\u614B\u6027\u6216\u5169\u8005\u3002
  - \u57FA\u65BC\u5C0D\u8C61\u7684\u8A9E\u8A00\u4E0D\u652F\u6301\u5167\u7F6E\u5C0D\u8C61\u3002
- \u9762\u5411\u5C0D\u8C61(object-oriented)
  - \u9762\u5411\u5C0D\u8C61\u8A9E\u8A00\u652F\u6301 Oops \u7684\u6240\u6709\u7279\u6027\uFF0C\u5305\u62EC\u7E7C\u627F\u548C\u591A\u614B\u3002
  - \u5B83\u5011\u652F\u6301\u5167\u7F6E\u5C0D\u8C61\u3002

## \u95DC\u65BC\u5C0D\u8C61
### \u5C0D\u8C61\u57FA\u672C\u4F7F\u7528
\`\`\`js
var xiaoming = {
  name: '\u5C0F\u660E',
  age: 12,
  sex: '\u7537',
  hobbies: ['\u8DB3\u7403', '\u7F16\u7A0B'],
  // \u4E0D\u7B26\u5408\u547D\u540D\u898F\u7BC4\u9808\u4EE5\u5F15\u865F\u5305\u88F9
  'favorite-book': '\u8212\u514B\u548C\u8D1D\u5854'
};

console.log(xiaoming.name);// \u5C0F\u660E
console.log(xiaoming.age);// 12
console.log(xiaoming.sex);// \u7537
console.log(xiaoming.hobbies);// (2)\xA0['\u8DB3\u7403', '\u7F16\u7A0B']
// \u4E0D\u7B26\u5408\u547D\u540D\u898F\u7BC4\u9808\u7528\u65B9\u62EC\u865F\u53D6\u503C
console.log(xiaoming['favorite-book']);

var key = 'sex';
// \u5982\u679C\u7528\u8B8A\u91CF\u4F86\u547C\u53EB\u5C0D\u8C61\u5247\u9808\u7528\u65B9\u62EC\u865F
console.log(xiaoming[key]);
// \u5C0D\u8C61\u662F\u5F15\u7528\u985E\u578B\u503C
// \u4F8B\u5B501
var obj1 = {
  a: 1, b: 2, c: 3
};
var obj2 = {
  a: 1, b: 2, c: 3
};
console.log(obj1 == obj2); // false
console.log(obj1 === obj2);// false
console.log({} == {});     // false
console.log({} === {});    // false
// \u4F8B\u5B502
var obj3 = {
  a: 10
};
var obj4 = obj3;
obj3.a++;
console.log(obj4);// {a: 11}
\`\`\`

### \u5305\u88DD\u985E
- \u8B93\u57FA\u672C\u985E\u578B\u503C\u53EF\u4EE5\u5F9E\u5B83\u5011\u7684\u69CB\u9020\u51FD\u6578prototype\u4E0A\u7372\u5F97\u65B9\u6CD5
- \u7BC4\u4F8B
  \`\`\`js
  var a = new Number(123);
  var b = new String('test');
  var c = new Boolean(true);

  // \u5305\u88DD\u5F8C\u6703\u8B8A\u70BA\u5C0D\u8C61
  console.log(typeof a);// object
  console.log(typeof b);// object
  console.log(typeof c);// object
  console.log(5 + a);// 128
  console.log(b.slice(0, 2));// 'te'
  console.log(c && true);// true

  var d = 123;
  console.log(d.__proto__ == Number.prototype);// true
  var e = 'test';
  console.log(e.__proto__ == String.prototype);// true

  // \u67E5\u770B\u81EA\u5DF1\u662F\u5426\u64C1\u6709\u8A72\u65B9\u6CD5
  console.log(String.prototype.hasOwnProperty('toLowerCase'));// true
  console.log(String.prototype.hasOwnProperty('slice'));// true
  console.log(String.prototype.hasOwnProperty('substr'));// true
  console.log(String.prototype.hasOwnProperty('substring'));// true
  \`\`\`

### \u5C0D\u8C61\u65B9\u6CD5
\`\`\`js
// \u8A2D\u7F6E\u5C0D\u8C61\u7684\u65B9\u6CD5
var xiaoming = {
  name: '\u5C0F\u660E',
  age: 12,
  sex: '\u7537',
  sayHello: function () {
    console.log(this.sex);
  },
  sleep: function () {
    console.log('sleep');
  }
};
// \u8ABF\u7528\u5C0D\u8C61\u7684\u65B9\u6CD5
xiaoming.sayHello();
\`\`\` 

### \u6DFA\u514B\u9686\u8207\u6DF1\u514B\u9686
- \u6DFA\u514B\u9686
  \`\`\`js
  var obj1 = {
    a: 1,
    b: 2,
    c: [44, 55, 66]
  };

  // \u5BE6\u73FE\u6DFA\u514B\u9686
  var obj2 = {};
  for (var k in obj1) {
    obj2[k] = obj1[k];
  }
  console.log(obj1.c == obj2.c);// true \u8B49\u660E\u4E86\u6578\u7D44\u70BA\u540C\u4E00\u500B\u5C0D\u8C61
  \`\`\`
- \u6DF1\u514B\u9686
  \`\`\`js
  function deepClone(o) {
    var result
    // \u5224\u65AD\u662F\u5C0D\u8C61\u9084\u662F\u6578\u7D44
    if (Array.isArray(o)) {
      // \u6578\u7D44
      result = [];
      for (var i = 0; i < o.length; i++) {
        result.push(deepClone(o[i]));
      }
    } else if (typeof o == 'object') {
      // \u56E0\u70BAtypeof\u6578\u7D44\u6703\u986F\u793Aobject\uFF0C\u6240\u4EE5\u8981\u5148\u5224\u65B7\u662F\u5426\u70BA\u6578\u7D44\u624D\u80FD\u5224\u65B7\u5C0D\u8C61)
      result = {};
      for (var k in o) {
        result[k] = deepClone(o[k]);
      }
    } else {
      // \u57FA\u672C\u7C7B\u578B\u503C
      result = o;
    }
    return result;
  }
  \`\`\`

### \u5C0D\u8C61\u5C6C\u6027\u65B0\u589E\u4FEE\u6539\u8207\u522A\u9664
\`\`\`js
var obj = {
  a: 10,
  b: 20
};

// \u4FEE\u6539\u5C6C\u6027
obj.b = 40;
obj.b++;
console.log(obj.b);

// \u65B0\u589E\u5C6C\u6027
obj.c = 60;
console.log(obj);

// \u5220\u9664\u5C6C\u6027
delete obj.a;
console.log(obj);
\`\`\`

## \u69CB\u9020\u51FD\u6578\u8207\u5C0D\u8C61
\`\`\`js
// \u901A\u5E38\u7FD2\u6163\u5C07\u9996\u5B57\u6BCD\u5927\u5BEB\u7684\u51FD\u6578\u5B9A\u7FA9\u70BA\u69CB\u9020\u51FD\u6578(\u65B9\u4FBF\u8FA8\u8A8D)
function People(name, age, sex) {
  this.name = name;
  this.age = age;
  this.sex = sex;
  this.sayHello = function () {
    console.log('\u4F60\u597D\uFF0C\u6211\u662F' + this.name);
  };
  // \u4E0D\u7BA1\u6709\u7121return\u90FD\u6703\u8FD4\u56DE this(\u5C0D\u8C61)
}
// \u7528new\u95DC\u9375\u5B57\u521D\u59CB\u5275\u5EFA\u5C0D\u8C61:{}
var test1 = new People('\u5C0F\u660E', 12, '\u7537');
// {name: '\u5C0F\u660E', age: 12, sex: '\u7537', sayHello: \u0192}
console.log(test1);
test1.sayHello();
\`\`\`

## \u539F\u578B\u539F\u578B\u93C8
### prototype\u7684\u4F7F\u7528\u8207\u7701\u5167\u5B58
\`\`\`js
// \u82E5\u65B9\u6CD5\u5BEB\u5728\u51FD\u6578\u672C\u8EAB\u88E1\u9762\u5247\u5BE6\u4F8B\u5316\u4E00\u500B\u5C0D\u8C61\u5C31\u6703\u591A\u4F54\u4E00\u6B21\u5167\u5B58
function People(name, age, sex) {
  this.name = name;
  this.age = age;
  this.sex = sex;
}
// \u5C07\u65B9\u6CD5\u5BEB\u5728\u539F\u578B\u4E0A\u5C31\u4E0D\u6703\u56E0\u5BE6\u4F8B\u5316\u800C\u4F54\u5167\u5B58
People.prototype.sayHello = function () {
  console.log('\u4F60\u597D\uFF0C\u6211\u662F' + this.name);
}
People.prototype.growup = function () {
  this.age++;
}
// \u4E5F\u53EF\u4EE5\u5F80\u539F\u578B\u4E0A\u65B0\u589E\u5C6C\u6027
People.prototype.nationality = '\u7F8E\u570B';
var test1 = new People('\u5C0F\u660E', 12, '\u7537');
var test2 = new People('\u5C0F\u7EA2', 11, '\u5973');
// \u67E5\u627E\u8A72\u5C6C\u6027\u662F\u5426\u5B58\u5728
'nationality' in test1;// true

// \u56E0\u51FD\u6578\u70BA\u5F15\u7528\u985E\u578B\u53EF\u4EE5\u89C0\u5BDF\u662F\u5426\u8ABF\u7528\u540C\u4E00\u500B\u65B9\u6CD5
// \u82E5\u65B9\u6CD5\u653E\u5728\u51FD\u6578\u5167\u90E8\u6703\u56E0\u5BE6\u4F8B\u5316\u800C\u8ABF\u7528\u8A72\u5BE6\u4F8B\u65B9\u6CD5: false
console.log(test1.sayHello === test2.sayHello);//true
console.log(test1.__proto__.sayHello === test2.__proto__.sayHello);// true
\`\`\`

### \u5BE6\u73FE\u7E7C\u627F
\`\`\`js
// \u5275\u5EFA\u7236\u985E
function People(name, age, sex) {
  this.name = name;
  this.age = age;
  this.sex = sex;
}
// \u5C07\u65B9\u6CD5\u5BEB\u5728\u539F\u578B\u4E0A\u5C31\u4E0D\u6703\u56E0\u5BE6\u4F8B\u5316\u800C\u4F54\u5167\u5B58
People.prototype.sayHello = function () {
  console.log('\u4F60\u597D\uFF0C\u6211\u662F' + this.name);
}
People.prototype.sleep = function () {
  console.log(this.name + '\u7761\u89BA\uFF0Czzzzz');
};
// \u5B50\u985E(\u9808\u542B\u6709\u7236\u985E\u6240\u6709\u53C3\u6578\uFF0C\u82E5\u6F0F\u6389\u5176\u4E2D\u4E00\u500B\u5C31\u4F7F\u7528\u7236\u985Eprototype\u65B9\u6CD5\u6703\u62B1\u932F)
function Student(name, age, sex, school, studentNumber) {
  this.name = name;
  this.age = age;
  this.sex = sex;
  this.school = school;
  this.studentNumber = studentNumber;
}
// ***\u7528\u5B50\u985E\u539F\u578B\u7E7C\u627F\u7236\u985E(\u7E7C\u627F\u4E0D\u9700\u586B\u53C3\u6578)***
Student.prototype = new People();
// \u8986\u5BEB\uFF08override\uFF09\u7236\u985E\u65B9\u6CD5
Student.prototype.sayHello = function () {
  console.log('\u4F60\u597D\u6211\u662F' + this.name);
}
// \u5BE6\u4F8B\u5316
var test = new Student('test', 29, '\u7537', '\u5B78\u6821', 100556);
// \u547C\u53EB\u4F7F\u7528\u7236\u985E\u65B9\u6CD5
test.sleep();// test\u7761\u89BA\uFF0Czzzzz
// \u53E6\u5916\u82E5\u6709\u586B\u53C3\u6578\uFF0C\u5275\u5EFA\u7684Student\u5C0D\u8C61\u4E5F\u4E0D\u6703\u4F7F\u7528
Student.prototype = new People('test2',20,'yyy');
var test = new Student();
test.sleep();// undefined\u7761\u89BA\uFF0Czzzzz
test.__proto__.sleep();// test2\u7761\u89BA\uFF0Czzzzz

/*
  \u6574\u9AD4\u7E7C\u627F\u6D41\u7A0B
  1.\u5275\u5EFA\u7236\u985E(\u7236\u985E\u7684prototype\u82E5\u7121\u7E7C\u627F\u5247\u70BAobject)
  2.\u5275\u5EFA\u7236\u985E\u5BE6\u4F8B
  3.\u5275\u5EFA\u5B50\u985E
  4.\u5C07\u5B50\u985E\u7684prototype\u6307\u5411\u7236\u985E\u5BE6\u4F8B(\u5F62\u6210\u7E7C\u627F)

  \u4EE5\u4E0A\u5B8C\u6210\u6703\u5F62\u6210\u4EE5\u4E0B\u4E09\u89D2\u95DC\u4FC2
              prototype
    \u5B50\u985E ---------------> \u7236\u985E\u5BE6\u4F8B
      \uFF3C <--------------    \uFF0F
        \uFF3C   constructor  \uFF0F
    new   \uFF3C            \uFF0F __proto__
            \uFF3C        \uFF0F
              \u5B50\u985E\u5BE6\u4F8B
  \u5B50\u985E\u5BE6\u4F8B.__proto__ \u7B49\u65BC \u5B50\u985E.prototype \u7B49\u65BC \u7236\u985E\u5BE6\u4F8B
  \u5B50\u985E\u5BE6\u4F8B.__proto__.constructor \u7B49\u65BC \u5B50\u985E
  \u5B50\u985E.prototype.constructor \u7B49\u65BC \u5B50\u985E
*/
\`\`\`

### \u539F\u578B\u93C8\u7D42\u9EDE
\`\`\`js
function People(name, age) {
  this.name = name;
  this.age = age;
}
var test = new People('test', 12);
console.log(test.__proto__.__proto__ === Object.prototype);// true
// \u900F\u904EObject\u539F\u578B\u67E5\u627E\u53EF\u767C\u73FE\u7121\u4E0A\u5C64\u7E7C\u627F
console.log(Object.prototype.__proto__);// null
\`\`\`

### hasOwnProperty\u65B9\u6CD5 \u8207 in\u95DC\u9375\u5B57 \u4F7F\u7528
\`\`\`js
function People(name, age, sex) {
  this.name = name;
  this.age = age;
  this.sex = sex;
}
// \u5F80\u539F\u578B\u4E0A\u52A0\u5165nationality\u5C6C\u6027
People.prototype.nationality = '\u7F8E\u570B';
var test = new People('test', 12, '\u7537');

// hasOwnProperty \u53EA\u6703\u5C0B\u627E\u81EA\u5DF1\u662F\u5426\u542B\u6709\u8A72\u5C6C\u6027\u4E0D\u542B\u539F\u578B\u5C6C\u6027
console.log(test.hasOwnProperty('name'));// true
console.log(test.hasOwnProperty('age'));// true
console.log(test.hasOwnProperty('sex'));// true
console.log(test.hasOwnProperty('nationality'));// false

// in \u6703\u5C0B\u627E\u81EA\u5DF1\u8207\u539F\u578B\u662F\u5426\u542B\u6709\u8A72\u5C6C\u6027
console.log('name' in test);// true
console.log('age' in test);// true
console.log('sex' in test);// true
console.log('nationality' in test);// true
\`\`\`

## \u4E0A\u4E0B\u6587\u898F\u5247\u8207\u4F7F\u7528
### \u4E0A\u4E0B\u6587\u898F\u52471
- \`\`\`\u5C0D\u8C61.\u65B9\u6CD5()\`\`\` \u4E0A\u4E0B\u6587\u662F \`\`\`\u6B64\u5C0D\u8C61\`\`\`
- \u7BC4\u4F8B
  \`\`\`js
  function fun(){
    return this.a + this.b;
  }
  var a = 1;
  var b = 2;
  var obj = {
    a: 3,
    b: 3,
    fun: fun
  }
  console.log(obj.fun());// 6 => obj.a + obj.b
  \`\`\`

### \u4E0A\u4E0B\u6587\u898F\u52472
- \`\`\`\u51FD\u6578()\`\`\` \u4E0A\u4E0B\u6587\u662F \`\`\`window\u5C0D\u8C61\`\`\`
- \u7BC4\u4F8B
  \`\`\`js
  function fun(){
    return this.a + this.b;
  }
  var a = 1;
  var b = 2;
  var obj = {
    a: 3,
    b: fun(),
    fun: fun
  }
  console.log(obj.b);// 3 => window.a + window.b 
  \`\`\`

### \u4E0A\u4E0B\u6587\u898F\u52473
- \`\`\`\u6578\u7D44\u6216\u985E\u6578\u7D44argument[index]()\`\`\` \u4E0A\u4E0B\u6587\u662F \`\`\`\u6B64\u6578\u7D44(\u985E\u6578\u7D44)\`\`\`
- \u7BC4\u4F8B
  \`\`\`js
  var arr = ['A','B','C',function(){console.log(this[0])}];
  console.log(arr[3]());// 'A'
  \`\`\`

### \u4E0A\u4E0B\u6587\u898F\u52474
- \`\`\`IIFE (function(){})()\`\`\` \u4E0A\u4E0B\u6587\u662F \`\`\`window\u5C0D\u8C61\`\`\`
- \u7BC4\u4F8B
  \`\`\`js
  var a = 1;
  var obj = {
    a: 2,
    fun: (function(){
      var a = this.a;
      console.log(this.a);// 1 => window.a
      return function(){
        console.log(a);// 1 => \u9589\u5305\u7279\u6027
      }
    })()
  }
  \`\`\`

### \u4E0A\u4E0B\u6587\u898F\u52475
- \`\`\`setTimeout setInterval\`\`\` \u4E0A\u4E0B\u6587\u662F \`\`\`window\u5C0D\u8C61\`\`\`
- \u7BC4\u4F8B
  \`\`\`js
  var a = 1;
  setTimeout(function(){
    var a = 2;
    console.log(this.a);// 1
    console.log(a);// 2
  },1000)
  \`\`\`

### \u4E0A\u4E0B\u6587\u898F\u52476
- \`\`\`Dom\u5143\u7D20.onclick=function(){} \`\`\` \u4E0A\u4E0B\u6587\u662F \`\`\`Dom\u5143\u7D20\`\`\`
- \u7BC4\u4F8B
  \`\`\`html
  <div id="test">test</div>
  <script>
    var test = document.getElementById("test");
    test.onclick = function(){
      console.log(this);// <div id="test">test</div>
    }
  <\/script>
  \`\`\`

## call \u8207 apply
\`\`\`js
function sum(b1, b2) {
  console.log(this.c + this.m + this.e + b1 + b2);
};

var xiaoming = {
  c: 100,
  m: 90,
  e: 80
};

// call & apply \u90FD\u53EF\u4EE5\u5E36\u5165\u4E0A\u4E0B\u6587
sum.call(xiaoming, 3, 5);// call \u9700\u8981\u4F7F\u7528\u9017\u865F
sum.apply(xiaoming, [3, 5]);// apply \u9700\u8981\u4F7F\u7528\u6578\u7D44
\`\`\`

## Object.create
- \u70BA es5 \u65B0\u589E\u7684\u5EFA\u7ACB\u7269\u4EF6\u7684\u65B9\u6CD5
- \u57FA\u672C\u7528\u6CD5
  \`\`\`js
  let test = {
    a: '111',
    b: '222'
  }
  // \u65B0\u5275\u5EFA\u7684\u7269\u4EF6\u539F\u578B\u6307\u5411\u50B3\u5165\u7269\u4EF6
  let test2 = Object.create(test)
  console.log(test2.__proto__ === test) // true
  \`\`\`
- \u5BE6\u73FE \`Object.create\`
  \`\`\`js
  if (!Object.create) {
    Object.create = function (obj) {
      function Obj2 () {}
      // \u65B0\u5275\u5EFA\u7684\u7269\u4EF6\u539F\u578B\u6307\u5411\u50B3\u5165\u7269\u4EF6
      Obj2.prototype = obj
      return new Obj2()
    }
  }
  \`\`\`

## Object.assign
- \u5408\u4F75\u5230\u7B2C\u4E00\u500B\u53C2\u6578\u4E2D\uFF0C\u8FD4\u56DE\u5408\u4F75\u5F8C\u7684\u7B2C\u4E00\u500B\u53C3\u6578\u5C0D\u8C61
- \u8A9E\u6CD5 \`\`\`Object.assign(\u76EE\u6A19\u5C0D\u8C61, \u6E90\u5C0D\u8C611, \u6E90\u5C0D\u8C612,...): \u76EE\u6A19\u5C0D\u8C61\`\`\`
- \u82E5\u8981\u8FD4\u56DE\u4E00\u500B\u65B0\u5C0D\u8C61\u5247\u7B2C\u4E00\u500B\u53C3\u6578\u653E\u5165\u7A7A\u5C0D\u8C61
- \u57FA\u672C\u7528\u6CD5
  \`\`\`js
  const apple = {
    color: '\u7EA2\u8272',
    shape: '\u5713\u5F62',
    taste: '\u751C'
  };
  const pen = {
    color: '\u9ED1\u8272',
    shape: '\u5713\u67F1\u5F62',
    use: '\u5BEB\u5B57'
  };
  // \u5F8C\u9762\u6703\u8986\u84CB\u524D\u9762\u5C6C\u6027\u7684\u503C
  // {color: "\u9ED1\u8272", shape: "\u5713\u67F1\u5F62", taste: "\u751C", use: "\u5BEB\u5B57"}
  console.log(Object.assign(apple, pen));
  console.log(apple === Object.assign(apple, pen));// true
  \`\`\`
- \u6CE8\u610F\u4E8B\u9805
  - \u57FA\u672C\u6578\u64DA\u6703\u5148\u8F49\u63DB\u70BA\u5C0D\u8C61\u5728\u5408\u4F75
    \`\`\`js
    console.log(Object.assign({}, undefined));// {}
    console.log(Object.assign({}, null));// {}
    console.log(Object.assign({}, 1));// {}
    console.log(Object.assign({}, true));// {}
    console.log(Object.assign({}, 'str'));// {0: "s", 1: "t", 2: "r"}
    \`\`\`

## Object.keys\u3001Object.values\u3001Object.entries
- \u57FA\u672C\u7528\u6CD5
  \`\`\`js
  const person = {
    name: 'test',
    age: 18
  };

  console.log(Object.keys(person));// (2)\xA0['name', 'age']
  console.log(Object.values(person));// (2)\xA0['test', 18]
  console.log(Object.entries(person));// (2)\xA0[Array(2), Array(2)]
  \`\`\`
- \u8207\u6578\u7D44\u65B9\u6CD5\u7684\u5340\u5225
  - \u5C0D\u8C61\u7684 keys()\u3001values()\u3001entries() \u662F\u69CB\u9020\u51FD\u6578\u4E26\u8FD4\u56DE\u6578\u7D44
  - \u6578\u7D44\u7684 keys()\u3001values()\u3001entries() \u662F\u5BE6\u4F8B\u65B9\u6CD5\u4E26\u8FD4\u56DE Iterator

## Date \u5C0D\u8C61
- \u5275\u5EFA\u65E5\u671F\u5C0D\u8C61
  \`\`\`js
  // \u53C3\u6578\u4E0D\u52A0\u5247\u53D6\u5F97\u4ECA\u5929\u6B64\u65F6\u6B64\u523B\u7684\u65E5\u671F\u5BF9\u8C61
  var d1 = new Date();
  // Mon Oct 04 2021 17:20:18 GMT+0800 (\u53F0\u5317\u6A19\u6E96\u6642\u9593)
  console.log(d1);
  console.log(typeof d1);// object
  // \u5F97\u5230\u516D\u6708\u4E00\u65E5
  var d2 = new Date(2020, 5, 1);      // \u4E0D\u7B97\u6642\u5340
  var d3 = new Date('2020-06-01');    // \u7B97\u6642\u5340\uFF0C8\u9EDE
  // Mon Jun 01 2020 00:00:00 GMT+0800 (\u53F0\u5317\u6A19\u6E96\u6642\u9593)
  console.log(d2);
  // Mon Jun 01 2020 08:00:00 GMT+0800 (\u53F0\u5317\u6A19\u6E96\u6642\u9593)
  console.log(d3);
  \`\`\`

- \u65E5\u671F\u5C0D\u8C61\u65B9\u6CD5
  \`\`\`js
  var d = new Date();
  console.log('\u65E5\u671F', d.getDate());// 1~31
  console.log('\u661F\u671F', d.getDay());// 0~6(0=\u661F\u671F\u5929)
  console.log('\u5E74\u4EFD', d.getFullYear());
  console.log('\u6708\u4EFD', d.getMonth() + 1);// 1~12
  console.log('\u5C0F\u6642', d.getHours());// 0~23
  console.log('\u5206\u9418', d.getMinutes());// 0~59
  console.log('\u79D2\u6578', d.getSeconds());// 0~59
  \`\`\`

- \u6642\u9593\u6233
  \`\`\`js
  // \u65E5\u671F\u5C0D\u8C61
  var d = new Date();
  // \u53D6\u5F97\u6642\u9593\u6233\u7684\u5169\u7A2E\u65B9\u6CD5\u3002\u6642\u9593\u6233\u8868\u793A1970\u5E741\u67081\u65E5\u8DDD\u96E2\u6B64\u6642\u7684\u6BEB\u79D2\u6578
  var timestamp1 = d.getTime();// \u7CBE\u786E\u5230\u6BEB\u79D2
  var timestamp2 = Date.parse(d);// \u7CBE\u786E\u5230\u79D2\uFF0C\u986F\u793A\u6BEB\u79D2\uFF0C\u4F46\u6700\u5F8C\u4E09\u4F4D\u4E00\u5B9A\u662F000
  // \u5C07\u65F6\u95F4\u6233\u8B8A\u56DE\u65E5\u671F\u5C0D\u8C61
  var dd = new Date(1601536565000);
  // Thu Oct 01 2020 15:16:05 GMT+0800 (\u53F0\u5317\u6A19\u6E96\u6642\u9593)
  console.log(dd);
  console.log(dd.getFullYear());// 2020
  \`\`\`

## Math \u5C0D\u8C61
- \u56DB\u6368\u4E94\u5165
  \`\`\`js
  console.log(Math.round(3.49));// 3
  console.log(Math.round(3.51));// 4
  // \u9032\u4F4D\u5230\u5C0F\u6578\u9EDE\u5F8C\u9762\u7B2C\u4E8C\u4F4D
  var a = 3.7554;
  console.log(Math.round(a * 100) / 100);// 3.76
  \`\`\`

- \u96A8\u6A5F\u6578
  \`\`\`js
  // 0 ~ 1(\u5305\u542B 0\uFF0C\u4E0D\u5305\u542B1)
  console.log(Math.random());
  // \u5982\u679C\u8981\u751F\u6210[a, b]\u4E4B\u5185\u7684\u6574\u6578\uFF0C\u5C31\u8981\u4F7F\u7528\u516C\u5F0F
  // parseInt(Math.random() * (b - a + 1)) + a
  // [3, 8]
  console.log(parseInt(Math.random() * 6) + 3);
  \`\`\`

- \u6700\u5927\u8207\u6700\u5C0F\u6578
  \`\`\`js
  console.log(Math.max(44, 55, 33, 22));// 55
  console.log(Math.min(44, 55, 33, 22));// 22
  var arr = [3, 4, 4, 3, 2, 2, 1, 3, 5, 7, 4, 3];
  console.log(Math.max.apply(null, arr));// 7
  \`\`\`
`;export{n as default};

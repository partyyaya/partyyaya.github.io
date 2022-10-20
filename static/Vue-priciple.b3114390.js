const n=`<span style="font-size: 32px; font-weight: 600;">Vue \u6DF1\u5165\u539F\u7406</span>

## \u4F7F\u7528 Object.defineProperty \u5BE6\u73FE\u97FF\u61C9\u5F0F
- \u512A\u9EDE\uFF1A
  - \u53EF\u652F\u63F4\u4F4E\u7248\u672C\u700F\u89BD\u5668
- \u7F3A\u9EDE\uFF1A
  - \u6DF1\u5EA6\u76E3\u807D\u5FC5\u9808\u905E\u6B78\u5230\u5E95\uFF0C\u4E00\u6B21\u6027\u8A08\u7B97\u91CF\u5927
  - \u7121\u6CD5\u76E3\u807D\u65B0\u589E\u8207\u522A\u9664\u5C6C\u6027
  - \u539F\u751F\u4E0D\u5177\u5099\u76E3\u807D\u6578\u7D44\u80FD\u529B\uFF0C\u9700\u7279\u6B8A\u8655\u7406
- \u53C3\u8003\u7BC4\u4F8B
  \`\`\`js
  // \u89F8\u767C\u66F4\u65B0\u8996\u5716
  function updateView() {
    console.log('\u66F4\u65B0\u8996\u5716')
  }
  // \u97FF\u61C9\u5F0F\u76E3\u807D\u5668
  function defineReactive(target, key, value) {
    // \u82E5 value \u662F\u5C0D\u8C61\u5247\u9032\u4E00\u6B65\u6DF1\u5EA6\u76E3\u807D
    observer(value)
    // \u6838\u5FC3 API
    Object.defineProperty(target, key, {
      get() {
        return value
      },
      set(newValue) {
        if (newValue !== value) {
          // \u5224\u65B7\u65B0\u503C\u662F\u5426\u70BA\u5C0D\u8C61\u6216\u6578\u7D44\uFF0C\u53EF\u80FD\u9700\u8981\u6DF1\u5EA6\u76E3\u807D
          observer(newValue)
          // \u8CE6\u4E88\u65B0\u503C\uFF0C\u6CE8\u610F! \u56E0\u70BA\u5728\u9589\u5305\u4E2D\uFF0C\u8A2D\u7F6E\u5B8C\u5F8C\u4F7F\u7528 get \u6703\u7372\u53D6\u6700\u65B0\u7684\u503C
          value = newValue
          // \u89F8\u767C\u66F4\u65B0\u8996\u5716
          updateView()
        }
      }
    })
  }
  // \u76E3\u807D\u5C0D\u8C61\u5C6C\u6027
  function observer(target) {
    if (typeof target !== 'object' || target === null) {
      // \u82E5\u975E\u5C0D\u8C61\u6216\u6578\u7D44\u5247\u8FD4\u56DE
      return target
    }

    // \u6B64\u505A\u6CD5\u6703\u6C61\u67D3\u5168\u5C40\u7684 Array \u539F\u578B\uFF0C\u70BA\u5927\u5FCC
    // Array.prototype.push = function () { updateView() }
    // \u82E5\u662F\u6578\u7D44\u5C31\u628A\u4ED6\u7684\u539F\u578B\u6307\u5411 arrProto
    if (Array.isArray(target)) {
      target.__proto__ = arrProto
    }

    // \u70BA\u5C0D\u8C61\u5167\u5404\u500B\u5C6C\u6027\u589E\u52A0\u97FF\u61C9\u5F0F\u76E3\u807D\uFF08for in \u4E5F\u53EF\u904D\u6B77\u6578\u7D44\uFF09
    for (let key in target) {
      defineReactive(target, key, target[key])
    }
  }

  // \u91CD\u65B0\u5B9A\u7FA9\u6578\u7D44\u539F\u578B
  const oldArrayProperty = Array.prototype
  // \u5275\u5EFA\u65B0\u5C0D\u8C61\uFF0C\u539F\u578B(__proto__)\u6307\u5411 oldArrayProperty \u518D\u64F4\u5C55\u65B0\u7684\u65B9\u6CD5\u6216\u5C6C\u6027\u5C31\u90E8\u6703\u5F71\u97FF\u539F\u578B
  const arrProto = Object.create(oldArrayProperty);// \u7B49\u540C\u65BC { __proto__: oldArrayProperty }
  ['push', 'pop', 'shift', 'unshift', 'splice'].forEach(methodName => {
    // \u52A0\u5165\u6307\u5B9A\u7684\u539F\u6578\u7D44\u529F\u80FD(Array.prototype.push)
    arrProto[methodName] = function () {
      // \u89F8\u767C\u8996\u5716\u66F4\u65B0
      updateView()
      // \u547C\u53EB\u539F\u6578\u7D44\u51FD\u6578\uFF0C\u4E26\u50B3\u5165\u51FD\u6578\u8207\u51FD\u6578\u7684\u53C3\u6578
      // Array.prototype.push.call(this, ...arguments)
      oldArrayProperty[methodName].call(this, ...arguments)
    }
  })

  // \u9700\u76E3\u807D\u7684\u8CC7\u6599
  const data = {
    name: 'ming',
    age: 20,
    info: {
      address: 'address1' // \u9700\u6DF1\u5165\u76E3\u807D
    },
    nums: [10, 20, 30]
  }
  // \u958B\u59CB\u9032\u884C\u76E3\u807D
  observer(data)
  // \u6E2C\u8A66
  data.name = 'test'
  // data.age = 23
  // data.x = '100' // \u65B0\u589E\u5C6C\u6027\u6703\u76E3\u807D\u4E0D\u5230\uFF0C\u6240\u4EE5\u6709 Vue.set
  // delete data.name // \u5220\u9664\u5C6C\u6027\u6703\u76E3\u807D\u4E0D\u5230\uFF0C\u6240\u4EE5\u6709 Vue.delete
  // data.info.address = 'address2' // \u6DF1\u5EA6\u76E3\u807D
  // data.nums.push(4) // \u76E3\u807D\u6578\u7D44
  \`\`\`

## Virtual DOM \u4ECB\u7D39
- \u4EC0\u9EBC\u662F \`Virtual DOM(vdom)\`\uFF1F\uFF1A\u7528 \`JS\` \u6A21\u64EC \`DOM\` \u7D50\u69CB\uFF0C\u8A08\u7B97\u51FA\u6700\u5C0F\u7684\u8B8A\u66F4\u4F86\u64CD\u4F5C \`DOM\`
- \u7528 \`vdom\`  \u7684\u539F\u56E0\uFF1A\u4E3B\u8981\u56E0\u70BA\u64CD\u4F5C \`DOM\` \u975E\u5E38\u8017\u6027\u80FD
- \`vdom\` \u70BA\u5BE6\u73FE \`Vue\`\u3001\`React\` \u7684\u57FA\u77F3
- \`diff\` \u7B97\u6CD5\u70BA \`vdom\` \u6700\u6838\u5FC3\u95DC\u9375\u7684\u90E8\u5206\uFF0C\u8A08\u7B97\u65B0\u820A\u7684\u8B8A\u66F4\u90E8\u5206
- \u7528 \`JS\` \u6A21\u64EC \`DOM\` \u7BC4\u4F8B\uFF1A
  - \u4E3B\u8981\u9700\u6CE8\u610F\u5305\u542B\u5E7E\u500B\u7279\u9EDE\uFF1A\`\u4EC0\u9EBC\u6A19\u7C64\`\u3001\`\u6A19\u7C64\u5C6C\u6027\`\u3001\`\u662F\u5426\u6709\u4E8B\u4EF6\`\u3001\`\u662F\u5426\u6709\u5B50\u5143\u7D20\`
  - \u5047\u8A2D \`HTML\` \u7D50\u69CB\u70BA\uFF1A
    \`\`\`html
    <div id="div1" class="container">
      <input type="button" onclick="addItem()">add</p>
      <ul style="font-size: 20px">
        <li>a</li>
      </ul>
    </div>
    \`\`\`
  - \u5247 \`JS\` \u8F49\u63DB\u5F8C\u7D50\u69CB(\u8209\u4F8B)\uFF1A
    \`\`\`js
    {
      tag: 'div',
      props: {
        className: 'container',
        id: 'div1'
      },
      children: [
        {
          tag: 'input',
          props: {
            type: 'button',
          },
          events: {
            onClick: 'addItem()'
          },
          children: 'add'
        },
        {
          tag: 'ul',
          props: {
            style: 'font-size: 20px'
          },
          children: [
            {
              tag: 'li',
              children: 'a'
            },
          ]
        }
      ]
    }
    \`\`\`

## Snabbdom \u4F7F\u7528
- [Snabbdom Github](https://github.com/snabbdom/snabbdom)
- \u4EC0\u9EBC\u662F \`Snabbdom\`\uFF1F\uFF1A\u4E00\u500B\u6027\u80FD\u5353\u8D8A\u7684 \`\u865B\u64EC DOM\` \u5EAB
- \u4F7F\u7528\u7BC4\u4F8B\uFF1A
  \`\`\`html
  <body>
    <div id="container"></div>
    <button id="btn-change">change</button>
    <script src="https://cdn.bootcss.com/snabbdom/0.7.3/snabbdom.js"><\/script>
    <script src="https://cdn.bootcss.com/snabbdom/0.7.3/snabbdom-class.js"><\/script>
    <script src="https://cdn.bootcss.com/snabbdom/0.7.3/snabbdom-props.js"><\/script>
    <script src="https://cdn.bootcss.com/snabbdom/0.7.3/snabbdom-style.js"><\/script>
    <script src="https://cdn.bootcss.com/snabbdom/0.7.3/snabbdom-eventlisteners.js"><\/script>
    <script src="https://cdn.bootcss.com/snabbdom/0.7.3/h.js"><\/script>
    <script type="text/javascript">
    const snabbdom = window.snabbdom
    // \u5B9A\u7FA9\u95DC\u9375\u51FD\u6578 patch(\u9700\u8981\u9032\u884C\u5C0D\u6BD4\u904B\u7B97\u7684\u6A21\u584A)
    const patch = snabbdom.init([
        snabbdom_class,
        snabbdom_props,
        snabbdom_style,
        snabbdom_eventlisteners
    ])
    // \u5B9A\u7FA9\u95DC\u9375\u51FD\u6578 h
    const h = snabbdom.h
    // \u5B9A\u7FA9\u539F\u59CB\u8CC7\u6599
    const data = [
        {
            name: '111',
            age: '20',
            address: 'home1'
        },
        {
            name: '222',
            age: '21',
            address: 'home2'
        },
        {
            name: '333',
            age: '22',
            address: 'home3'
        }
    ]
    // \u5C07\u8868\u982D\u4E5F\u653E\u5165
    data.unshift({
        name: '\u59D3\u540D',
        age: '\u5E74\u9F61',
        address: '\u5730\u5740'
    })
    const container = document.getElementById('container')
    // \u6E32\u67D3\u8CC7\u6599\u52A0\u5165 DOM
    let vnode
    function render(data) {
        const newVnode = h('table', {}, data.map(item => {
            // table \u4F7F\u7528\u9663\u5217\u52A0\u5165\u65B0\u5B50\u5143\u7D20
            const tds = []
            for (let i in item) {
              // \u5C07\u8CC7\u6599\u4E00\u4E00\u52A0\u5165\u81F3td\u7684\u5B50\u5143\u7D20(\u6587\u5B57)
              if (item.hasOwnProperty(i)) {
                  tds.push(h('td', {}, item[i] + ''))
              }
            }
            return h('tr', {}, tds)
        }))
        if (vnode) {
            // patch \u4E4B\u5F8C\uFF0C\u61C9\u4F7F\u7528\u65B0\u7684\u8986\u84CB\u73FE\u6709\u7684 vnode \uFF0C\u5426\u5247\u6BCF\u6B21\u90FD\u662F\u521D\u59CB\u6E32\u67D3
            patch(vnode, newVnode)
        } else {
            // \u521D\u6B21\u6E32\u67D3
            patch(container, newVnode)
        }
        // \u5B58\u5132\u7576\u524D vnode\uFF0C\u4EE5\u6E1B\u5C11\u4E0B\u6B21\u5C0D\u6BD4\u5DEE\u7570
        vnode = newVnode
    }
    // \u521D\u6B21\u6E32\u67D3
    render(data)
    const btnChange = document.getElementById('btn-change')
    btnChange.addEventListener('click', () => {
        data[1].age = 30
        data[2].address = 'home7'
        // \u518D\u6B21\u6E32\u67D3\uFF0C\u6703\u767C\u73FE\u53EA\u6539\u8B8A\u66F4\u65B0\u7684\u90E8\u5206
        // \u82E5\u672A\u4F7F\u7528\u865B\u64EC DOM \u5F88\u96E3\u53BB\u4E00\u4E00\u5C0D\u6BD4\u66F4\u65B0\u5DEE\u7570
        render(data)
    })
    <\/script>
  </body>
  \`\`\`

## diff \u7B97\u6CD5
- [JSON Diff and Patch](https://github.com/cujojs/jiff)
- \u4EC0\u9EBC\u662F \`diff \u7B97\u6CD5\`\uFF1F\uFF1A\u53D6\u5F97\u5169\u6A39\u4E4B\u9593\u5DEE\u7570\u7684\u8A08\u7B97\u65B9\u5F0F
- \u50B3\u7D71\u7684 \`\`\`diff \u7B97\u6CD5\`\`\` \u7684\u6642\u9593\u8907\u96DC\u5EA6\u70BA \`\`\`O(n^3)\`\`\`
  - \u904D\u6B77\u7B2C\u4E00\u68F5\u6A39 & \u7B2C\u4E8C\u68F5\u6A39\uFF1A\`\`\`O(n^2)\`\`\`
  - \u4F7F\u7528\u6A39\u7684\u6700\u5C0F\u8DDD\u96E2\u7DE8\u8F2F\u7B97\u6CD5\uFF1A\`\`\`O(n^2m(1+logmn))\`\`\`\uFF0C\u5047\u8A2D \`\`\`m=n\`\`\` \u5247\uFF1A\`\`\`O(n^3)\`\`\`
- \u76EE\u524D\u512A\u5316\u65B9\u5F0F\uFF0C\u5176\u6642\u9593\u8907\u96DC\u5EA6\u70BA \`\`\`O(n)\`\`\`
  - \u53EA\u6BD4\u8F03\u540C\u4E00\u5C64\u7D1A\uFF0C\u7236\u5C64\u5C0D\u7236\u5C64\u3001\u5B50\u5C64\u5C0D\u5B50\u5C64
  - \u82E5 \`\`\`tag\`\`\` \u4E0D\u540C\uFF0C\u5247\u76F4\u63A5\u522A\u9664\u4E0D\u6DF1\u5165\u6BD4\u8F03
  - \u82E5 \`\`\`tag\`\`\` \u8207 \`\`\`key\`\`\` \u90FD\u76F8\u540C\uFF0C\u5247\u8A8D\u70BA\u76F8\u540C\u7BC0\u9EDE\u4FBF\u4E0D\u6DF1\u5165\u6BD4\u8F03
  - \u4F7F\u7528\u6848\u4F8B\uFF1A\`v-for\`

## JS with \u8A9E\u6CD5
- \u8A72\u8A9E\u6CD5\u4E0D\u5E38\u4F7F\u7528\uFF0C\u4E14\u6703\u9020\u6210\u6613\u8B80\u6027\u5DEE\uFF0C\u6253\u7834\u4F5C\u7528\u57DF\u898F\u5247
- \u7528\u6CD5\uFF1A\u5C07\u50B3\u5165\u5C0D\u8C61\u5F8C\uFF0C\u5C0D\u8C61\u5C6C\u6027\u4EE5\u4F5C\u7528\u57DF\u5167\u7684\u8B8A\u6578\u4F86\u4F7F\u7528
- \u4F7F\u7528\u7BC4\u4F8B
  \`\`\`js
  const obj = {
    a: 100,
    b: 200
  }
  console.log(obj.c) // undefined

  /*
    \u4F7F\u7528 with \u6703\u6539\u8B8A {} \u5167\u7684\u67E5\u627E\u8B8A\u91CF\u7684\u65B9\u5F0F
    \u5C07 {} \u5167\u7684\u8B8A\u91CF\uFF0C\u7576\u505A obj \u7684\u5C6C\u6027\u4F86\u67E5\u627E
  */
  with(obj){
    console.log(a)
    console.log(b)
    console.log(c) // \u56E0\u70BA\u5339\u914D\u4E0D\u5230 obj \u5C6C\u6027\u6240\u4EE5\u5831\u932F
  }
  \`\`\`

## template compiler
- \u5B89\u88DD\u74B0\u5883\uFF1A\`npm i vue-template-compiler --save\`
- \`vnode\` \u751F\u6210\u904E\u7A0B\u5982\u4E0B\uFF1A
  \`\`\`txt
  \u85C9\u7531 vue-template-compiler 
  \u5C07\u6A21\u677F\u7DE8\u8B6F\u70BA render \u51FD\u6578
  \u57F7\u884C render \u51FD\u6578(\u6703\u89F8\u767C data getter)\u751F\u6210 vnode
  \`\`\`
- \u6E90\u78BC\u5404\u5C6C\u6027\u4EE3\u8868\u610F\u601D\uFF1A
  \`\`\`js
  /*
    \u6B64\u5916 _c \u4EE3\u8868 createElement \u6703\u8FD4\u56DE\u4E00\u500B vnode\uFF0C
    \u8207 snabbdom \u7684 h \u51FD\u6578\u4E00\u6A23
  */
  function installRenderHelpers (target) {
    target._o = markOnce;
    target._n = toNumber;
    target._s = toString;
    target._l = renderList;
    target._t = renderSlot;
    target._q = looseEqual;
    target._i = looseIndexOf;
    target._m = renderStatic;
    target._f = resolveFilter;
    target._k = checkKeyCodes;
    target._b = bindObjectProps;
    target._v = createTextVNode;
    target._e = createEmptyVNode;
    target._u = resolveScopedSlots;
    target._g = bindObjectListeners;
    target._d = bindDynamicKeys;
    target._p = prependModifier;
  }
  \`\`\`
- \u6848\u4F8B1\uFF1A\u63D2\u503C
  \`\`\`js
  /*
    \u8F38\u51FA\uFF1Awith(this){return _c('p',[_v(_s(message))])}
    \u9019\u908A\u5C31\u6703\u7528\u5230js \u7684 with \u8A9E\u6CD5\uFF0C\u4E26\u4E14 this \u70BA\uFF1Anew Vue({...})
    \u5176\u4E2D _c('p',[_v(_s(message))]) \u5F88\u50CF snabbdom \u7684 h \u51FD\u6578\uFF1Ah('p', {}, [...])
  */
  const template = \`<p>{{message}}</p>\`
  console.log(compiler.compile(template));
  \`\`\`
- \u6848\u4F8B2\uFF1A\u8868\u9054\u5F0F
  \`\`\`js
  /*
    \u8F38\u51FA\uFF1Awith(this){return _c('p',[_v(_s(flag ? message : 'no message found'))])}
  */
  const template = \`<p>{{flag ? message : 'no message found'}}</p>\`
  console.log(compiler.compile(template));
  \`\`\`
- \u6848\u4F8B3\uFF1A\u7236\u5B50\u6A19\u7C64\u8207\u5C6C\u6027
  \`\`\`js
  /*
    \u8F38\u51FA\uFF1A
    with(this){
      return _c('div',
      {staticClass:"container",attrs:{"id":"div1"}},[_c('img',{attrs:{"src":imgUrl}})])
    }
  */
  const template = \`
    <div id="div1" class="container">
      <img :src="imgUrl"/>
    </div>
  \`
  console.log(compiler.compile(template));
  \`\`\`
- \u6848\u4F8B4\uFF1A\u689D\u4EF6\u5224\u65B7
  \`\`\`js
  /*
    \u8F38\u51FA\uFF1A
    with(this){return _c('div',[(flag === 'a')?_c('p',[_v("A")]):_c('p',[_v("B")])])}
  */
  const template = \`
    <div>
      <p v-if="flag === 'a'">A</p>
      <p v-else>B</p>
    </div>
  \`
  console.log(compiler.compile(template));
  \`\`\`
- \u6848\u4F8B5\uFF1A\u5FAA\u74B0
  \`\`\`js
  /*
    \u8F38\u51FA\uFF1A
    with(this){
      return _c('ul',
      _l((list),function(item){return _c('li',{key:item.id},[_v(_s(item.title))])}),0)
    }
  */
  const template = \`
    <ul>
      <li v-for="item in list" :key="item.id">{{item.title}}</li>
    </ul>
  \`
  console.log(compiler.compile(template));
  \`\`\`
- \u6848\u4F8B6\uFF1A\u4E8B\u4EF6
  \`\`\`js
  /*
    \u8F38\u51FA\uFF1A
    with(this){
      _c('button',{on:{"click":clickHandler}},[_v("submit")])
    }
  */
  const template = \`<button @click="clickHandler">submit</button>\`
  console.log(compiler.compile(template));
  \`\`\`
- \u6848\u4F8B7\uFF1A\`v-model\`
  \`\`\`js
  /*
    \u8F38\u51FA\uFF1A
    with(this){
      return _c('input',{
        directives:[{
          name:"model",
          rawName:"v-model",
          value:(name),expression:"name"
        }],
        attrs:{
          "type":"text"
        },
        domProps:{"value":(name)},
        on:{"input":function($event){if($event.target.composing)return;name=$event.target.value}
      })
    }
  */
  const template = \`<input type="text" v-model="name">\`
  console.log(compiler.compile(template));
  \`\`\`
- \u7D50\u5408\u4EE5\u4E0A\u5373\u770B\u61C2 \`render\` \u51FD\u6578\u5982\u4F55\u61C9\u7528\uFF1A
  \`\`\`js
  Vue.component('anchored-heading', {
    // template: \`xxx\`,
    render: function (createElement) {
      return createElement(
        'h' + this.level,   // tag name
        this.$slots.default // array of children
      )
    },
    props: {
      level: {
        type: Number,
        required: true
      }
    }
  })
  \`\`\`

## \u7D44\u4EF6\u6E32\u67D3\u8207\u66F4\u65B0\u6D41\u7A0B
- \u4EE5\u4E0B\u70BA\u89F8\u767C\u66F4\u65B0\u7D44\u4EF6\u6642\uFF0C\`\u7570\u6B65\u6E32\u67D3\` \u7684\u904E\u7A0B\uFF1A
  - 1.\u57F7\u884C \`render\` \u51FD\u6578\u6642\u6703\u89F8\u767C \`getter\`\uFF0C\u4E26\u751F\u6210 \`Virtual DOM\`
  - 2.\u89F8\u767C \`getter\` \u4E26\u6536\u96C6\u4F9D\u8CF4\u81F3 \`watcher\` \u88E1\u9762
  - 3.\u82E5\u89F8\u767C \`setter\` \u5247\u6AA2\u67E5\u662F\u5426\u6709\u4F9D\u8CF4\u53BB\u89F8\u767C \`watcher\`\uFF0C\u4E26\u518D\u6B21\u89F8\u767C \`render\` \u51FD\u6578\uFF0C\u9032\u884C\u91CD\u65B0\u6E32\u67D3
- \u70BA\u4F55\u9700\u8981\u7570\u6B65\u6E32\u67D3\uFF1F
  - \u5F59\u7E3D\u8CC7\u6599\u7684\u4FEE\u6539\uFF0C\u4E00\u6B21\u6027\u66F4\u65B0\u9801\u9762\uFF0C\u4EE5\u6E1B\u5C11 \`DOM\` \u64CD\u4F5C\u6B21\u6578
  - \u5982\u9700\u8981\u53D6\u5F97\u66F4\u65B0\u5F8C\u9801\u9762\u7D44\u4EF6\uFF0C\u9700\u4F7F\u7528 \`nextTick\`
- \u4E00\u500B\u6709\u8DA3\u7684\u554F\u984C\uFF1A\u70BA\u4F55 \`data\` \u5C6C\u6027\u9700\u8981\u7528\u51FD\u6578\uFF1A\`data(){}\`
  - \u7B54\uFF1A\u56E0\u70BA\u6700\u5F8C\u6703\u5C01\u88DD\u6210 \`class\`\uFF0C\u9019\u6A23\u5BEB\u53EF\u4EE5\u7BC0\u7701\u8A18\u61B6\u9AD4
  - \u53C3\u8003[\u89E3\u7B54](https://stackoverflow.com/a/46826903/9151543)

## Proxy \u5BE6\u73FE\u97FF\u61C9\u5F0F
- \u700F\u89BD\u5668[\u652F\u63F4](https://caniuse.com/?search=proxy)
  - \u4E0D\u652F\u63F4 \`IE\` \u700F\u89BD\u5668
- \u8207 \`Object.defineProperty\` \u6BD4\u8F03
  - \u6DF1\u5EA6\u76E3\u807D\uFF0C\u6027\u80FD\u66F4\u597D
  - \u53EF\u76E3\u807D\u65B0\u589E\u8207\u522A\u9664\u5C6C\u6027
  - \u53EF\u76E3\u807D\u6578\u7D44\u7684\u8B8A\u5316
  - \u7121\u6CD5\u517C\u5BB9\u6240\u6709\u700F\u89BD\u5668\u3001\u7121\u6CD5 \`polyfill\`
    - \`polyfill\` \u6307\u820A\u700F\u89BD\u5668\u5BE6\u73FE\u6216\u6A21\u64EC\u73FE\u6709\u7248\u672C\u5DF2\u5BE6\u73FE\u4E4B\u529F\u80FD\u7684\u7A0B\u5F0F\u78BC
- \`Reflect\` \u7684\u4F5C\u7528
  - \u548C \`proxy\` \u80FD\u529B\u4E00\u4E00\u5C0D\u61C9
  - \u898F\u7BC4\u5316\u3001\u6A19\u6E96\u5316\u3001\u51FD\u6578\u5F0F\uFF0C\u5982\u4EE5\u4E0B\uFF1A
    - \`key in obj\` \u8207 \`Reflect.has(obj, 'key')\` \u76F8\u5C0D\u61C9
    - \`delete obj.key\` \u8207 \`Reflect.deleteProperty(obj, 'key')\` \u76F8\u5C0D\u61C9
  - \u66FF\u4EE3\u6389 \`Object\` \u7684\u5DE5\u5177\u51FD\u6578\uFF0C\u4F7F \`Object\` \u76E1\u53EF\u80FD\u4F5C\u70BA\u7D14\u8CC7\u6599\u7D50\u69CB\uFF0C\u5982\u4EE5\u4E0B\uFF1A
    - \`Object.getOwnPropertyNames\` \u8207 \`Reflect.ownKeys\`
- \u53C3\u8003\u7BC4\u4F8B\uFF1A
  \`\`\`js
  // \u5EFA\u7ACB\u97FF\u61C9\u5F0F
  function reactive(target = {}) {
    if (typeof target !== 'object' || target == null) {
      // \u82E5\u975E\u5C0D\u8C61\u6216\u6578\u7D44\u5247\u8FD4\u56DE
      return target
    }

    // \u4EE3\u7406\u914D\u7F6E
    const proxyConf = {
      get(target, key, receiver) {
        // \u53EA\u8655\u7406\u672C\u8EAB(\u975E\u539F\u578B)\u5C6C\u6027
        const ownKeys = Reflect.ownKeys(target)
        if (ownKeys.includes(key)) {
          console.log('get', key)
        }

        const result = Reflect.get(target, key, receiver)
        /*
          \u82E5\u6709\u4E0B\u4E00\u5C64\u5247\u5F80\u4E0B\u76E3\u807D
          \u8207 Object.defineProperty \u4E0D\u540C\u7684\u5730\u65B9\uFF1A
          \u4E0D\u6703\u4E00\u6B21\u6027\u6DF1\u5165\u76E3\u807D\u5B8C\u7562\uFF0C\u6703\u4F9D\u9700\u6C42\u547C\u53EB\uFF0C\u5982\uFF1A
          \u82E5\u5C64\u7D1A\u95DC\u4FC2\u70BA\uFF1A obj.a.b.c\uFF0C\u8ABF\u7528 obj.a
          \u5247 proxy \u53EA\u6703\u5230 a \u5C64\u7D1A\u4E0D\u6703\u7E7C\u7E8C\u5F80\u4E0B
          \u4F46 Object.defineProperty \u6703\u4E00\u76F4\u5411\u4E0B\u76F4\u5230\u7D50\u675F
        */
        return reactive(result)
      },
      set(target, key, val, receiver) {
        // \u4E0D\u8655\u7406\u91CD\u8907\u7684\u8CC7\u6599
        if (val === target[key]) {
          return true
        }

        const ownKeys = Reflect.ownKeys(target)
        if (ownKeys.includes(key)) {
          console.log('\u5DF2\u6709\u7684 key', key)
        } else {
          console.log('\u65B0\u589E\u7684 key', key)
        }

        const result = Reflect.set(target, key, val, receiver)
        console.log('set', key, val)
        return result // \u6703\u56DE\u50B3 boolean \u4EE5\u4EE3\u8868\u662F\u5426\u8BBE\u7F6E\u6210\u529F
      },
      deleteProperty(target, key) {
        const result = Reflect.deleteProperty(target, key)
        console.log('delete property', key)
        return result // \u6703\u56DE\u50B3 boolean \u4EE5\u4EE3\u8868\u662F\u5426\u5220\u9664\u6210\u529F
      }
    }

    // \u5275\u5EFA\u4EE3\u7406\u5C0D\u8C61
    const observed = new Proxy(target, proxyConf)
    return observed
  }

  // \u6E2C\u8A66\u6578\u64DA
  const data = {
    name: 'mingming',
    age: 20,
    info: {
      city: 'taipei',
      a: {
        b: {
          c: {
            d: {
              e: 100
            }
          }
        }
      }
    }
  }

  const proxyData = reactive(data)
  \`\`\`
`;export{n as default};

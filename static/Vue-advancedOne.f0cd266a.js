const n=`<span style="font-size: 32px; font-weight: 600;">Vue \u9032\u968E\u4F7F\u7528\u4E00</span>

## \u5C40\u90E8\u8207\u5168\u5C40\u7D44\u4EF6
- \u7D44\u4EF6\uFF1A\u4EE3\u8868\u6210\u54C1\u7684\u4E00\u90E8\u4EFD\uFF0C\u4E14\u5177\u5099\u91CD\u8907\u4F7F\u7528\u7684\u7279\u6027
- \u5168\u5C40\u7D44\u4EF6\uFF1A\u53EA\u8981\u5B9A\u7FA9\u4E86\uFF0C\u8655\u8655\u7686\u53EF\u4F7F\u7528
  - \u9700\u4F7F\u7528 \`\`\` app.component\`\`\` \u65B9\u6CD5\u5275\u5EFA
  - \u6027\u80FD\u4E0D\u9AD8\uFF0C\u4F46\u5F88\u65B9\u4FBF
  - \u540D\u5B57\u5E38\u7528\u5C0F\u5BEB\u5B57\u6BCD\u4E2D\u9593\u7528 \`\`\`-\`\`\` \u9694\u958B
- \u5C40\u90E8\u7D44\u4EF6\uFF1A\u5B9A\u7FA9\u5F8C\u9700\u8981\u8A3B\u518A\u624D\u80FD\u4F7F\u7528
  - \u9700\u653E\u7F6E\u5728 \`\`\`components\`\`\` \u5C0D\u8C61\u5167\u624D\u80FD\u4F7F\u7528
  - \u6027\u80FD\u8F03\u9AD8
  - \u540D\u5B57\u5E38\u7528\u5927\u5BEB\u5B57\u6BCD\u958B\u982D\uFF0C\u99DD\u5CF0\u5F0F\u547D\u540D\uFF0C\u907F\u514D\u6DF7\u4E82
  - \u4F7F\u7528\u6642\u9700\u7528\u4E00\u540D\u5B57\u505A\u6620\u5C04\u5C0D\u8C61\uFF0C\u4E26\u4E14\u5E95\u5C64\u4E5F\u6703\u81EA\u52D5\u5617\u8A66\u505A\u6620\u5C04
    - \u5982\uFF1A\`\`\`<hello-world /> \u8207 HelloWorld\`\`\`
- \u7BC4\u4F8B
  \`\`\`js
  // \u5C40\u90E8\u7EC4\u4EF6
  const Counter = {
    data() {
      return {
        count: 1
      }
    },
    template: \`<div @click="count += 1">{{count}}</div>\`
  }

  const HelloWorld = {
    template: \`<div>hello world</div>\`
  }

  const app = Vue.createApp({
    components: {
      // counter: Counter,
      // 'hello-world': HelloWorld,
      Counter, HelloWorld,
    },
    template: \`
      <div>
        <hello-world />
        <counter />
      </div>
    \`
  });

  // \u5168\u5C40\u7EC4\u4EF6
  // app.component('counter', {
  //   data() {
  //     return {
  //       count: 1
  //     }
  //   },
  //   template: \`<div @click="count += 1">{{count}}</div>\`
  // })

  const vm = app.mount('#root');
  \`\`\`

## \u7D44\u4EF6\u9593\u50B3\u503C\u8207\u6548\u9A57
- \u50B3\u503C\u65B9\u5F0F(\u4E0D\u9650\u5C40\u90E8\u6216\u5168\u5C40\u7D44\u4EF6)\uFF1A
  \`\`\`js
  const app = Vue.createApp({
    data() {
      // \u85C9\u7531 data \u4F86\u50B3\u503C\uFF0C\u4E26\u4E14\u53EF\u4EE5\u662F\u5176\u4ED6\u985E\u578B\u6578\u64DA
      return { num: 1234 }
    },
    // \u8A2D\u5B9A\u53D6\u503C\u53C3\u6578\u540D\u7A31(\u82E5\u662F\u975C\u614B\u50B3\u503C\u5247\u4E0D\u7528 v-bind)
    template: \`
      <div><test :content="num" /></div>
    \`
  });
  app.component('test', {
    // \u4F7F\u7528 props \u53D6\u503C
    props:['content'],
    template: \`<div>{{content}}</div>\`
  });
  \`\`\`
- \u50B3\u503C\u8F14\u52A9\u6709\u4EE5\u4E0B\u5E7E\u7A2E
  - \u6AA2\u67E5\u50B3\u503C\u662F\u5426\u7B26\u5408\u9019\u4E9B\u6578\u64DA\u985E\u578B\uFF1A\`\`\`String\u3001Boolean\u3001Array\u3001Object\u3001Function\u3001Symbol\`\`\`
    - \u7BC4\u4F8B\uFF1A
      \`\`\`js
      app.component('test', {
        props:{
          content: Boolean,
        },
        template: \`<div>{{content}}</div>\`
      });
      \`\`\`
  - \`\`\`required\`\`\` \u8981\u6C42\u5FC5\u586B\u53C3\u6578\uFF0C\u7BC4\u4F8B\uFF1A
    \`\`\`js
    app.component('test', {
      props:{
        content: {
          type: Number,
          required: true, 
        },
      },
      template: \`<div>{{content}}</div>\`
    });
    \`\`\`
  - \`\`\`validator\`\`\`\uFF1A\u8A2D\u5B9A\u6AA2\u9A57\u7684\u689D\u4EF6(\u4E0D\u7B26\u5408\u689D\u4EF6\u5247\u63D0\u793A\u932F\u8AA4)
  - \`\`\`default\`\`\`\uFF1A\u9ED8\u8A8D\u503C(\u53EF\u4EE5\u7528\u65B9\u6CD5\u56DE\u50B3\uFF0C\u4E5F\u53EF\u4EE5\u76F4\u63A5\u7D66\u503C)
  - \`\`\`validator\`\`\` \u8207 \`\`\`default\`\`\` \u4F7F\u7528\u7BC4\u4F8B\uFF1A
    \`\`\`js
    app.component('test', {
      props:{
        content: {
          type: Number,
          validator: function(value) {
            return value < 1000;
          },
          default: function() {
            return 456;
          }, 
        },
      },
      template: \`<div>{{content}}</div>\`
    });
    \`\`\`
- \u7E3D\u7D50\u4F7F\u7528\u7BC4\u4F8B
  \`\`\`js
  const app = Vue.createApp({
    data() {
      return { num: 1234 }
    },
    template: \`
      <div><test :content="num" /></div>
    \`
  });

  app.component('test', {
    props: {
      content: {
        type: Number,
        validator: function(value) {
          return value < 1000;
        },
        default: function() {
          return 456;
        }
      }
    },
    template: \`<div>{{content}}</div>\`
  });

  const vm = app.mount('#root');
  \`\`\`

## \u55AE\u5411\u8CC7\u6599\u50B3\u8F38
- \u55AE\u5411\u8CC7\u6599\u50B3\u8F38 \`v-bind\`\uFF1A\u5B50\u7D44\u4EF6\u6216\u6A19\u7C64\u53EF\u7528\u50B3\u905E\u7684\u8CC7\u6599\uFF0C\u4F46\u4E0D\u80FD\u4FEE\u6539
  - \u7BC4\u4F8B
    \`\`\`js
    const app = Vue.createApp({
      data() {
        return { num: 1 }
      },
      template: \`
        <div>
          <counter :count="num" />
        </div>
      \`
    });

    app.component('counter', {
      // props \u7531\u7236\u7D44\u4EF6\u50B3\u7684\u53C3\u6578\u53EA\u80FD\u8B80\u4E0D\u80FD\u6539
      // \u53EF\u4EE5\u8A2D\u5728 data \u5176\u4E2D\u4E00\u500B\u5C6C\u6027\u7576\u4F5C\u521D\u59CB\u503C
      props: ['count'],
      data() {
        return {
          myCount: this.count,
        }
      },
      template: \`<div @click="myCount += 1">{{myCount}}</div>\`
    });

    const vm = app.mount('#root');
    \`\`\`
- \u8CC7\u6599\u50B3\u8F38\u5E38\u7528\u547D\u540D\u65B9\u5F0F
  - \u8209\u4F8B\uFF1A\u9700\u8981\u50B3\u8F38\u8CC7\u6599\u6642\uFF0C\u5247\u4F7F\u7528 \`\`\`content-abc\`\`\` \u8A72\u547D\u540D\u65B9\u5F0F\uFF0C\u4F7F\u7528\u50B3\u8F38\u8CC7\u6599\u6642\uFF0C\u4F7F\u7528 \`\`\`contentAbc\`\`\` \u547D\u540D\u65B9\u5F0F
  - \u7BC4\u4F8B
    \`\`\`js
    const app = Vue.createApp({
      data() {
        return {
          params:{
            content: 1234,
          }
        }
      },
      template: \`
        <div>
          <test :content-abc="content" />
        </div>
      \`
    });

    app.component('test', {
      props: ['contentAbc'],
      template: \`<div @click="count += 1">{{contentAbc}}</div>\`
    });

    const vm = app.mount('#root');
    \`\`\`
- \u9032\u968E\u7528\u6CD5\uFF1A\u4F7F\u7528\u5C0D\u8C61\u50B3\u8F38\u8CC7\u6599
  - \u7BC4\u4F8B
    \`\`\`js
    /*
      v-bind="params" \u7B49\u540C\u65BC 
      :content="params.content" 
      :a="params.a" 
      :b="params.b" 
      :c="params.c"
    */

    const app = Vue.createApp({
      data() {
        return {
          params:{
            content: 1234,
            a: 123,
            b: 234,
            c: 345,
          }
        }
      },
      template: \`
        <div>
          <test v-bind="params"/>
        </div>
      \`
    });

    app.component('test', {
      // \u4F9D\u7167\u5C0D\u8C61\u5C6C\u6027\u9078\u64C7\u8981\u63A5\u6536\u7684\u8CC7\u6599
      props: ['content','a','b','c'],
      data (){
        return {
          count: this.content
        }
      },
      template: \`<div @click="count += 1">{{count}}</div>\`
    });

    const vm = app.mount('#root');
    \`\`\`

## \u7E7C\u627F\u5C6C\u6027
- \u7E7C\u627F\u5C6C\u6027\u5B9A\u7FA9\uFF1A\u5B50\u7D44\u4EF6\u6703\u7E7C\u627F\u7236\u7D44\u4EF6\u7D66\u4E88\u5B50\u7D44\u4EF6\u6A19\u7C64\u4E0A\u7684\u5C6C\u6027
- \u82E5\u5B50\u7D44\u4EF6 \`\`\`props\`\`\` \u5167\u6709\u8A2D\u5B9A\u8A72\u5C6C\u6027\uFF0C\u5247\u7121\u6CD5\u7E7C\u627F
- \u7E7C\u627F\u65B9\u5F0F
  - \u4F7F\u7528 \`\`\`$attrs\`\`\` \u53D6\u5F97\u53EF\u4EE5\u7E7C\u627F\u7684\u5C6C\u6027
  - \u8B93\u7279\u5B9A\u6A19\u7C64\u7E7C\u627F\u6240\u6709\u5C6C\u6027\uFF1A\`\`\`v-bind="$attrs"\`\`\`
  - \u8B93\u7279\u5B9A\u6A19\u7C64\u7E7C\u627F\u55AE\u4E00\u5C6C\u6027\uFF0C\u5982\uFF1A\`\`\`:yourProperty="$attrs.msg"\`\`\`
  - \u7BC4\u4F8B
    \`\`\`js
    const app = Vue.createApp({
      template: \`
        <div>
          <counter msg="hello" msg1="hello1" />
        </div>
      \`
    });

    app.component('counter', {
      mounted() {
        // \u53EF\u4EE5\u900F\u904E this.$attrs \u53D6\u5F97
        console.log(this.$attrs.msg);// hello
      },
      /*
        \u4E0B\u9762\u6A19\u7C64\u8F38\u51FA\uFF1A
        <div msg="hello">Counter</div>
        <div msg="hello" msg1="hello1">Counter</div>
        <div msg1="hello1">Counter</div>
      */
      template: \`
        <div :msg="$attrs.msg">Counter</div>
        <div v-bind="$attrs">Counter</div>
        <div :msg1="$attrs.msg1">Counter</div>
      \`
    });

    const vm = app.mount('#root');
    \`\`\`
- \`\`\`inheritAttrs\`\`\`\uFF1A
  - \u82E5\u8A72\u5C6C\u6027\u8A2D\u70BA \`\`\`false\`\`\` \u5247\u5B50\u7D44\u4EF6\u4E0D\u6703\u81EA\u52D5\u7E7C\u627F\u5C6C\u6027
  - \u82E5\u8A72\u5C6C\u6027\u8A2D\u70BA \`\`\`true\`\`\` (\u53EF\u7701\u7565\u4E0D\u5BEB\u8A72\u5C6C\u6027)\uFF0C\u5247\u5B50\u7D44\u4EF6\u6703\u81EA\u52D5\u7E7C\u627F\u5C6C\u6027
    - \u82E5\u5B50\u7D44\u4EF6\u5167\u6709\u591A\u500B\u6A19\u7C64\u4E5F\u4E0D\u6703\u81EA\u52D5\u7E7C\u627F\uFF0C\u53EA\u6709\u55AE\u500B\u6A19\u7C64\u6703\u81EA\u52D5\u7E7C\u627F
  - \u7BC4\u4F8B
    \`\`\`js
    const app = Vue.createApp({
      template: \`
        <div>
          <counter msg="hello" />
        </div>
      \`
    });

    app.component('counter', {
      inheritAttrs: false,
      // \u82E5\u8A2D\u70BA false \u5247\u8F38\u51FA <div>Counter</div>
      // \u82E5\u8A2D\u70BA true \u6216\u4E0D\u5BEB\u5247\u8F38\u51FA <div msg="hello">Counter</div>
      template: \`
        <div>Counter</div>
      \`
    });

    const vm = app.mount('#root');
    \`\`\`

## \u7236\u5B50\u7D44\u4EF6\u7684\u4E8B\u4EF6\u901A\u4FE1
- \u8A2D\u5B9A\u65B9\u6CD5\uFF1A\u5B50\u7D44\u4EF6\u8A2D\u5B9A \`\`\`$emit\`\`\` \u6E9D\u901A\u5A92\u4ECB\uFF0C\u8B93\u7236\u7D44\u4EF6\u900F\u904E\u5B50\u7D44\u4EF6\u89F8\u767C\u81EA\u5DF1\u7684\u65B9\u6CD5\u4F86\u9032\u884C\u901A\u4FE1
  - \u56E0\u70BA \`\`\`HTML\`\`\` \u5927\u5C0F\u5BEB\u4E0D\u654F\u611F\uFF0C\u5EFA\u8B70\u7528 \`\`\`-\`\`\` \u5340\u9694\u6216\u5168\u5C0F\u5BEB(\u6703\u81EA\u52D5\u8F49\u5C0F\u5BEB)
  - \u7C21\u55AE\u7BC4\u4F8B\uFF1A
    \`\`\`js
    const app = Vue.createApp({
      data() {
        return { count: 1 }
      },
      methods: {
        handleAddOne(){
          this.count += 1;
        },
      },
      // \u85C9\u7531\u7236\u7D44\u4EF6\u8A2D\u5B9A\u5B50\u7D44\u4EF6\u6A19\u7C64\u65B9\u5F0F\uFF0C\u4F86\u89F8\u767C\u7236\u7D44\u4EF6\u65B9\u6CD5
      template: \`
        <counter :count="count" @add-one="handleAddOne" />
      \`
    });

    app.component('counter', {
      props: ['count'],
      // \u4F7F\u7528 this.$emit() \u8B93\u5B50\u7D44\u4EF6\u8207\u7236\u7D44\u4EF6\u900F\u904E\u4E8B\u4EF6\u4EA4\u6D41
      methods: {
        handleClick() {
          this.$emit('add-one');
        }
      },
      template: \`
        <div @click="handleClick">{{count}}</div>
      \`
    });
    const vm = app.mount('#root');
    \`\`\`
- \`\`\`$emit\`\`\` \u53C3\u6578
  - \u82E5\u55AE\u500B\u53C3\u6578\uFF0C\u5982\uFF1A\`\`\`this.$emit('add')\`\`\`\uFF0C\u5247\u53EA\u547C\u53EB\u7236\u7D44\u4EF6\u65B9\u6CD5\u4E14\u7121\u4EFB\u4F55\u53C3\u6578\u586B\u5165
  - \u82E5\u591A\u500B\u53C3\u6578\uFF0C\u5982\uFF1A\`\`\`this.$emit('add', 2)\`\`\`\uFF0C\u5247\u547C\u53EB\u7236\u7D44\u4EF6\u65B9\u6CD5\u4E14\u5E36\u6709\u53C3\u6578\`\`\`2\`\`\`\u586B\u5165\uFF0C\u4F9D\u6B64\u985E\u63A8
  - \u82E5\u542B\u6709 \`\`\`emits\`\`\` \u5C6C\u6027\uFF0C\u5247\u53EF\u6AA2\u67E5\u50B3\u5165\u7684\u53C3\u6578\u662F\u5426\u7B26\u5408\u7236\u7D44\u4EF6\u8981\u6C42
  - \u7BC4\u4F8B
    \`\`\`js
    const app = Vue.createApp({
      data() {
        return { count: 1 }
      },
      methods: {
        handleAddOne(param1, param2){
          this.count += param2;
        },
      },
      template: \`
        <counter :count="count" @add="handleAddOne" />
      \`
    });

    app.component('counter', {
      props: ['count'],
      // emits \u4E3B\u8981\u662F\u5E6B\u5FD9\u6AA2\u67E5\u6709\u54EA\u4E9B\u6703\u5C0D\u5916\u63D0\u4F9B\u6E9D\u901A
      // emits \u4E5F\u53EF\u4EE5\u662F\u9663\u5217: emits:['add']
      emits: {
        // \u4E5F\u53EF\u4EE5\u662F\u5C0D\u8C61\u4E26\u6AA2\u67E5\u8A72\u53C3\u6578\u662F\u5426\u7B26\u5408
        add: (count) => {
          if(count > 0){
            // \u82E5\u5927\u65BC0\u5247\u5141\u8A31\u4F60\u5C0D\u5916
            return true;
          }
          return false;
        }
      },
      // \u53E6\u5916\u53EF\u4EE5\u50B3\u53C3\u6578\u81F3\u7236\u7D44\u4EF6
      methods: {
        handleClick() {
          // \u4E5F\u53EF\u4EE5\u7B97\u597D\u518D\u50B3\u9001\u904E\u53BB this.$emit('add', this.count + 3);
          this.$emit('add', 2);
        },
        // \u82E5\u4F7F\u7528 emits:['add']
        add(count) {
          if(count > 0){
            // \u82E5\u5927\u65BC0\u5247\u5141\u8A31\u4F60\u5C0D\u5916
            return true;
          }
          return false;
        }
      },
      template: \`
        <div @click="handleClick">{{count}}</div>
      \`
    });
    const vm = app.mount('#root');
    \`\`\`

## \u7236\u5B50\u7D44\u4EF6\u7684\u96D9\u5411\u7D81\u5B9A
- \u4F7F\u7528\u65B9\u5F0F\uFF1A\`\`\`v-model\`\`\` \u8B93\u7236\u7D44\u4EF6\u85C9\u7531\u5B50\u7D44\u4EF6\u89F8\u767C\u66F4\u65B0\u7236\u7D44\u4EF6  \`\`\`data\`\`\`
  - \u82E5\u6709 \`\`\`\u591A\u500B v-model \u96D9\u5411\u7D81\u5B9A\`\`\` \u5247\u5FC5\u9808\u4F7F\u7528\u81EA\u5B9A\u7FA9\u5225\u540D\uFF0C\u5982\uFF1A\`\`\`v-model:app="count"\`\`\`
  - \u7BC4\u4F8B
    \`\`\`js
    // \u7236\u5B50\u7D44\u4EF6\u4F7F\u7528v-model\u96D9\u5411\u7D81\u5B9A
    const app = Vue.createApp({
      data() {
        return { count: 1 }
      },
      // \u82E5\u8981\u81EA\u5B9A\u7FA9\u5247\u53EF\u4EE5\u5BEB\u6210(app\u53EF\u63DB\u5176\u4ED6\u547D\u540D) <counter v-model:app="count" />
      template: \`
        <counter v-model="count" />
      \`
    });

    app.component('counter', {
      // \u82E5\u7236\u7D44\u4EF6\u53EA\u7528 v-model="" \u5247\u53EA\u80FD\u7528 modelValue
      // \u82E5\u81EA\u5B9A\u7FA9(v-model:app="count")\u5247\u5BEB\u6210 props: ['app'],
      props: ['modelValue'],
      methods: {
        handleClick() {
          // \u66F4\u65B0\u7236\u7D44\u4EF6\u7684\u5C6C\u6027
          // \u82E5\u81EA\u5B9A\u7FA9(v-model:app="count")\u5247\u5BEB\u6210 this.$emit('update:app', this.app + 3);
          this.$emit('update:modelValue', this.modelValue + 3);
        }
      },
      template: \`
        <div @click="handleClick">{{modelValue}}</div>
      \`
    });

    const vm = app.mount('#root');
    \`\`\`
- \u81EA\u5B9A\u7FA9\u4FEE\u98FE\u7B26
  - \u8A2D\u5B9A\u65B9\u5F0F\uFF1A\`\`\`v-model.yourname\`\`\`\uFF0C\u53EF\u642D\u914D\u81EA\u5B9A\u7FA9\u5225\u540D
  - \u7BC4\u4F8B
    \`\`\`js
    const app = Vue.createApp({
      data() {
        return {
          str: 'a',
        }
      },
      // \u82E5\u5728\u7236\u7D44\u4EF6\u4F7F\u7528\u4E00\u500B\u81EA\u5B9A\u7FA9\u4FEE\u98FE\u7B26 uppercase
      // \u52A0\u4E0A\u81EA\u5B9A\u7FA9\u547D\u540D:v-model:app.uppercase="str"
      template: \`
        <counter v-model.uppercase="str" />
      \`
    });

    app.component('counter', {
      props: {
        'modelValue': String,
        // \u5728 modelModifiers \u53EF\u4EE5\u770B\u5230\u7236\u7D44\u4EF6\u4F7F\u7528\u7684\u81EA\u5B9A\u7FA9\u4FEE\u98FE\u7B26 { uppercase: true }
        // \u82E5\u547D\u540D:v-model:app.uppercase="str" \u5247\u9808\u5C07 modelModifiers \u6539\u70BA appModifiers
        'modelModifiers': {
          // \u9810\u8A2D\u70BA\u7A7A
          default: ()=> ({})
        }
      },
      methods: {
        handleClick() {
          let newValue = this.modelValue + 'b';
          // \u5982\u679C\u7236\u7D44\u4EF6\u6709\u4F7F\u7528 uppercase \u4FEE\u98FE\u7B26\u5247\u90FD\u8F49\u5927\u5BEB
          // \u82E5\u547D\u540D:v-model:app.uppercase="str" \u5247\u9808\u6539\u70BA this.appModifiers.uppercase
          if(this.modelModifiers.uppercase) {
            newValue = newValue.toUpperCase();
          }
          // \u82E5\u547D\u540D:v-model:app.uppercase="str" \u5247\u9808\u6539\u70BA this.$emit('update:app', newValue);
          this.$emit('update:modelValue', newValue);
        },
      },
      // \u82E5\u547D\u540D:v-model:app.uppercase="str" \u5247\u9808\u6539\u70BA {{app}}
      template: \`
        <div @click="handleClick">{{modelValue}}</div>
      \`
    });

    const vm = app.mount('#root');
    \`\`\`

## \u63D2\u69FD\u3001\u5177\u540D\u63D2\u69FD\u3001\u4F5C\u7528\u57DF\u63D2\u69FD
### \u63D2\u69FD
- \u82F1\u6587 \`slot\`\uFF1A\u6703\u5C07\u7236\u7D44\u4EF6\u8ABF\u7528\u5B50\u7D44\u4EF6\u88E1\u7684\u5167\u5BB9\u66FF\u63DB\u6389
- \u7BC4\u4F8B
  \`\`\`js
  const app = Vue.createApp({
    data(){
      return { text: '\u63D0\u4EA4' }
    },
    template: \`
      <myform>
        <div>{{text}}</div>
      </myform>
      <myform>
        <button>{{text}}</button>
      </myform>
    \`
  });

  app.component('myform', {
    methods:{
      handleClick(){
        alert(123)
      },
    },
    /*
      <slot>default value</slot> \u6703\u4F9D\u7167 <myform> \u88E1\u9762\u7684\u5167\u5BB9\u9032\u884C\u66F4\u63DB
      \u7236\u7D44\u4EF6\u7B2C\u4E00\u500B <myform> slot \u6703\u63DB\u6210 <div>\u63D0\u4EA4</div>
      \u7236\u7D44\u4EF6\u7B2C\u4E8C\u500B <myform> slot \u6703\u63DB\u6210 <button>\u63D0\u4EA4</button>

      \u82E5\u7236\u7D44\u4EF6 <myform> \u88E1\u9762\u5167\u5BB9\u70BA\u7A7A\uFF0C\u5247 slot \u6703\u76F4\u63A5\u8F38\u51FA slot \u6A19\u7C64\u5167\u6587\u5B57
      \u4F9D myform \u5B50\u7D44\u4EF6\u70BA\u4F8B\uFF0Cslot \u88AB span \u5305\u8986\uFF0C\u5247\u6703\u8F49\u63DB\u6210 <span>default value</span>
    */
    template: \`
      <div>
        <span @click="handleClick">
          <slot>default value</slot>
        </span>
      </div>
    \`
  });

  const vm = app.mount('#root');
  \`\`\`

### \u5177\u540D\u63D2\u69FD
- \u4F7F\u7528\u5834\u666F\uFF1A\u7576\u9700\u8981\u591A\u500B\u63D2\u69FD\u6642\uFF0C\u53EF\u70BA\u63D2\u69FD\u547D\u540D\uFF0C\u85C9\u6B64\u6307\u5B9A\u8981\u8F38\u51FA\u5167\u5BB9
- \u5177\u540D\u8207\u4E0D\u5177\u540D\u63D2\u69FD\u53EF\u4E00\u8D77\u4F7F\u7528\uFF0C\u4E0D\u5177\u540D\u63D2\u69FD\u6703\u53D6\u5F97\u9664\u4E86\u5177\u540D\u63D2\u69FD\u7684\u5167\u5BB9
- \u7236\u7D44\u4EF6\u8A2D\u5B9A\u65B9\u5F0F\uFF1A\`\`\`v-slot:yourSlotName\`\`\`\uFF0C\u53EF\u4EE5\u7C21\u5BEB\u6210 \`\`\`#yourSlotName\`\`\`
  - \u9700\u642D\u914D \`\`\`template\`\`\` \u4E00\u8D77\u4F7F\u7528\uFF0C\u5982\uFF1A\`\`\`<template #yourSlotName>\`\`\`
  - \`\`\`template\`\`\` \u672C\u8EAB\u4E0D\u6703\u7522\u751F\u4EFB\u4F55\u6A19\u7C64\u642D\u914D \`\`\`slot\`\`\`\uFF0C\u88E1\u9762\u5C31\u6703\u8B8A\u4E00\u500B\u5177\u540D\u63D2\u69FD
- \u5B50\u7D44\u4EF6\u8A2D\u5B9A\u65B9\u662F\uFF1A\`\`\`<slot name="yourSlotName">123</slot>\`\`\`
- \u7BC4\u4F8B
  \`\`\`js
  const app = Vue.createApp({
    template: \`
      <layout>
        <template v-slot:header>
          <div>header</div>
        </template>
        <template v-slot:footer>
          <div>footer</div>
        </template>
        <div>456</div>
      </layout>
    \`
  });
  /*
    \u4EE5\u4E0B\u5167\u5BB9\u6703\u8F38\u51FA\uFF1A
    <div>header</div>
    <div>content</div>
    <div>footer</div>
    <div>footer</div>
    <div>456</div>
  */
  app.component('layout', {
    template: \`
      <div>
        <slot name="header"></slot>
        <div>content</div>
        <slot name="footer"></slot>
        <slot name="footer"></slot>
        <slot>123</slot>
      </div>
    \`
  });

  const vm = app.mount('#root');
  \`\`\`

### \u4F5C\u7528\u57DF\u63D2\u69FD
- \u7531\u5B50\u7D44\u4EF6\u63D2\u69FD\u50B3\u7D66\u7236\u7D44\u4EF6\u8981\u986F\u793A\u7684\u5167\u5BB9
- \u7BC4\u4F8B
  \`\`\`js
  const app = Vue.createApp({
    /*
      \u5B50\u7D44\u4EF6\u5B9A\u7FA9 item\uFF0C\u8B93\u7236\u7D44\u4EF6\u4F7F\u7528 v-slot \u53D6\u5F97 item \u503C\u4E26\u8F38\u51FA
      \u4F9D\u6848\u4F8B\u7531\u5B50\u7D44\u4EF6 item \u4F9D\u5E8F\u50B3\u5165\u7684\u503C\u70BA\uFF1A{"item":1}\u3001{"item":2}\u3001{"item":3}
      1.\u53EF\u4EE5\u7528\u89E3\u69CB\u7684\u65B9\u5F0F\u53D6\u503C\uFF1Aconst { item } = items \u5247\u8B8A\u6210 v-slot="{item}" \u642D\u914D <div>{{item}}</div>
      2.\u76F4\u63A5\u53D6\u503C\uFF1Av-slot="itemObj" \u642D\u914D {{itemObj.item}} \u53D6\u5F97\u5C0D\u8C61 item \u5C6C\u6027
    */
    template: \`
      <list v-slot="{item}">
        <div>{{item}}</div>
      </list>
    \`
  });

  app.component('list', {
    data() {return {list: [1, 2, 3]}},
    /*
      slot \u88E1\u9762\u7684 item \u4EE3\u8868\u8981\u8F38\u51FA\u7684\u5167\u5BB9
      \u85C9\u7531 v-bind \u7D81\u5B9A item \u9032\u884C\u8F38\u51FA
      <div>1</div>
      <div>2</div>
      <div>3</div>
    */
    template: \`
      <div>
        <slot v-for="item in list" :item="item" />
      </div>
    \`
  });

  const vm = app.mount('#root');
  \`\`\`

## \u52D5\u614B\u3001\u7570\u6B65\u7D44\u4EF6\u3001keep-alive \u4F7F\u7528
- \u52D5\u614B\u7D44\u4EF6\uFF1A\u6839\u64DA\u8CC7\u6599\u8B8A\u5316\uFF0C\u4F7F\u7528 \`\`\`component\`\`\` \u6A19\u7C64\u4F86\u5207\u63DB\u8981\u986F\u793A\u7684\u7D44\u4EF6
  - \u5C07\u7D44\u4EF6\u540D\u7A31\u586B\u5165 \`\`\`component\`\`\` \u7684 \`\`\`is\`\`\` \u5C6C\u6027\uFF0C\u53EF\u986F\u793A\u6307\u5B9A\u7684\u7D44\u4EF6(\u4E0D\u9650\u5C40\u90E8\u6216\u5168\u5C40\u7D44\u4EF6)
  - \u4F7F\u7528 \`<keep-alive>\` \u7D44\u4EF6\u53EF\u4FDD\u7559\u5207\u63DB\u524D\u7684\u72C0\u614B\uFF0C\u5982 \`input\` \u7684\u8F38\u5165\u6846\u503C\uFF0C\u4E3B\u8981\u4F5C\u7528\u5982\u4E0B
    - \u7DE9\u5B58\u7D44\u4EF6\uFF0C\u4E0D\u9700\u8981\u91CD\u65B0\u6E32\u67D3
    - \u591A\u7D44\u4EF6\u5F7C\u6B64\u5207\u63DB(\u5982 \`\`\`tab\`\`\` )\uFF0C\u55AE\u4E00\u7D44\u4EF6\u4F7F\u7528 \`\`\`v-show\`\`\` (\u539F\u751F \`\`\`css\`\`\` \u63A7\u5236)\u5373\u53EF
    - \u6027\u80FD\u512A\u5316\u65B9\u6848\u4E4B\u4E00
  - \u4F7F\u7528\u60C5\u5883\uFF1A\u65B0\u805E\u9801\u9762\u6709\u591A\u500B\u6587\u5B57\u6216\u5716\u50CF\u9805\u76EE\u7D44\u5408\u5C55\u793A\uFF0C\u9019\u6642\u53EF\u900F\u904E\u8DD1\u8FF4\u5708\u52A0\u4E0A\u52D5\u614B\u7D44\u4EF6\u65B9\u5F0F\u76F4\u63A5\u7D44\u51FA\u6574\u500B\u9801\u9762
  - \u7BC4\u4F8B
    \`\`\`js
    const app = Vue.createApp({
      data(){
        return { currentItem: 'input-item' }
      },
      methods: {
        handleClick() {
          if(this.currentItem === 'input-item') {
            this.currentItem = 'common-item';
          } else {
            this.currentItem = 'input-item';
          }
        }
      },
      // component \u53EF\u4EE5\u53D6\u4EE3\u5982\u9019\u6A23\u7684\u7D44\u4EF6 <input-item v-show="currentItem === 'input-item'"/> 
      // keep-alive \u53EF\u4EE5\u4F7F\u7528 include\u3001exclude\u3001max \u95DC\u9375\u5B57\u589E\u52A0\u6548\u80FD\uFF0C\u4E5F\u53EF\u4F7F\u7528 \`regex\` (\u9700\u4F7F\u7528 \`v-bind\`)
      template: \`
        <keep-alive>
          <component :is="currentItem"/>
        </keep-alive>
        <button @click="handleClick">\u5207\u63DB</button>
      \`
    });

    app.component('input-item', {
      template: \`<input />\`
    });

    app.component('common-item', {
      template: \`<div>hello world</div>\`
    });

    const vm = app.mount('#root');
    \`\`\`
- \u7570\u6B65\u7D44\u4EF6\uFF1A\u7570\u6B65\u57F7\u884C\u7279\u5B9A\u7D44\u4EF6
  - \u4F7F\u7528\u60C5\u5883\uFF1A\u52A0\u8F09\u5927\u7D44\u4EF6\u3001\u8DEF\u7531\u52A0\u8F09\u6642\uFF0C\u53EF\u512A\u5316\u6027\u80FD
  - 1.\u4F7F\u7528 \`\`\`Vue.defineAsyncComponent\`\`\` \u65B9\u6CD5\u9032\u884C\u7570\u6B65\u64CD\u4F5C
    - \u7BC4\u4F8B\uFF1A\u56DB\u79D2\u5F8C\u5275\u5EFA\u7279\u5B9A\u7D44\u4EF6
      \`\`\`js
      const app = Vue.createApp({
        template: \`
          <div>
            <common-item />
            <async-common-item />
          </div>
        \`
      });

      app.component('common-item', {
        template: \`<div>hello world</div>\`
      });

      // \u6B64\u6848\u4F8B\u70BA4\u79D2\u9418\u5F8C\u5275\u5EFA\u8A72\u7D44\u4EF6
      app.component('async-common-item', Vue.defineAsyncComponent(() => {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            resolve({
              template: \`<div>this is an async component</div>\`
            })
          }, 4000)
        })
      }))

      const vm = app.mount('#root');
      \`\`\`
  - 2.(\u5E38\u7528!)\u4F7F\u7528 \`\`\`import()\`\`\` \u51FD\u6578\u6309\u9808\u52A0\u8F09\u7D44\u4EF6
    - \u7BC4\u4F8B 
      \`\`\`html
      <FormDemo v-if="showFormDemo"/>
      <button @click="showFormDemo = true">show form demo</button>
      <script>
      export default {
          components: {
              FormDemo: () => import('../BaseUse/FormDemo'),
          },
          data() {
              return {
                  showFormDemo: false
              }
          }
      }
      <\/script>
      \`\`\`

## ref\u8207provide\u3001inject
- \`\`\`ref\`\`\`\uFF1A\u53D6\u5F97\u6307\u5B9A\u7BC0\u9EDE\u8CC7\u8A0A
  - \u5EFA\u8B70\u5728 \`\`\`mounted\`\`\` \u65B9\u6CD5\u5167\u4F7F\u7528(\u7D44\u4EF6\u6E32\u67D3\u5B8C\u4F7F\u7528)
  - \u82E5\u5728\u6A19\u7C64\u52A0\u4E0A\u5247\u7372\u53D6\u8A72 \`\`\`DOM\`\`\` \u7BC0\u9EDE
  - \u82E5\u5728\u5B50\u7D44\u4EF6\u52A0\u4E0A\u5247\u53EF\u53D6\u5F97 \`\`\`data\`\`\` \u8CC7\u8A0A\u6216\u547C\u53EB\u5B50\u7D44\u4EF6\u65B9\u6CD5
- \`\`\`provide/inject\`\`\`\uFF1A\u4F7F\u5B50\u5B6B\u7D44\u4EF6\u53EF\u76F4\u63A5\u53D6\u5F97\u7236\u8F29\u4EE5\u4E0A\u8CC7\u8A0A
  - \u53EF\u4EE5\u907F\u514D\u7236\u50B3\u5B50\u518D\u50B3\u5B6B\u5B50\u7684\u7E41\u91CD\u5BEB\u6CD5
  - \u82E5\u7236\u8F29\u4EE5\u4E0A\u542B\u6709\u591A\u500B \`\`\`provide\`\`\` \u4E14\u88E1\u9762\u6709\u76F8\u540C\u5C6C\u6027\uFF0C\u5247\u6703\u53D6\u8F03\u8FD1\u7684\u5C6C\u6027\u503C
  - \u5B50\u5B6B\u4F7F\u7528 \`\`\`inject\`\`\` \u53D6\u5F97\u7684\u7236\u8F29\u5C6C\u6027\u7121\u6CD5\u4FEE\u6539\uFF0C\u56E0\u70BA \`\`\`provide\`\`\` \u53EA\u6703\u50B3\u7B2C\u4E00\u6B21\uFF0C\u9808\u91CD\u65B0\u8CE6\u503C\u7D66\u81EA\u5DF1\u7684\u5C6C\u6027
  - \u7BC4\u4F8B
    \`\`\`js
    const app = Vue.createApp({
      data() {
        return { count: 1, vvv: 234 }
      },
      // \u50B3\u9001\u8CC7\u8A0A\u7D66\u5B50\u5B6B\u7D44\u4EF6
      provide() {
        return {
          count: this.count,
          vvv: this.vvv
        }
      },
      template: \`
        <div>
          <child :count="count" />
          <button @click="count += 1">Add</button>
        </div>
      \`
    });

    app.component('child', {
      data() {
        return { count: 777, bbb: 222}
      },
      // \u50B3\u9001\u8CC7\u8A0A\u7D66\u5B50\u5B6B\u7D44\u4EF6
      provide() {
        return {
          count: this.count,
          bbb: this.bbb,
        }
      },
      template: \`<child-child/>\`
    });

    app.component('child-child', {
      mounted(){
        // ref\u7528\u6CD5\uFF1A2.\u53D6\u5F97\u6216\u4F7F\u7528\u5B50\u7D44\u4EF6\u8CC7\u8A0A
        console.log(this.$refs.count.vvv) // 234 (\u53D6\u5F97\u5B50\u7D44\u4EF6\u7684 vvv \u5C6C\u6027\u503C)
        console.log(this.$refs.count.handleClick()) // \u547C\u53EB\u5B50\u7D44\u4EF6\u7684 handleClick \u65B9\u6CD5
      },
      // ref\u7528\u6CD5\uFF1A1.\u8A2D\u5B9A\u8981\u53D6\u5F97\u7684\u5B50\u7D44\u4EF6(\u6A19\u7C64)
      template: \`<child-child-child ref="count" />\`
    });

    app.component('child-child-child', {
       // \u4F7F\u7528 inject \u53D6\u5F97\u7236\u8F29\u7D44\u4EF6\u7684 data
      inject: ['count','bbb','vvv'],
      methods: {
        handleClick(){
          console.log(this.count) // 777 (\u53D6\u5F97\u8F03\u8FD1\u7236\u8F29\u7684 count \u5C6C\u6027\u503C)
          console.log(this.bbb) // 222
          console.log(this.vvv) // 234
        }
      },
      template: \`<div @click="handleClick">{{bbb}}</div>\`
    });

    const vm = app.mount('#root');
    \`\`\`

## \u7D44\u4EF6\u7684\u904E\u6E21\u8207\u52D5\u756B
- \u82E5\u8A72\u7D44\u4EF6\u9700\u8981\u904E\u6E21\u8207\u52D5\u756B\u6548\u679C\uFF0C\u53EF\u7528\u4EE5\u4E0B\u7D44\u4EF6\u542B\u4F7F\u7528\u5340\u5225\uFF1A 
  - \`\`\`transition(Transition)\`\`\`\uFF1A\u7D44\u4EF6\u5167\u53EA\u80FD\u6709\u4E00\u500B\u5143\u7D20\u5B58\u5728\uFF0C\u5728\u64CD\u4F5C\u55AE\u4E00\u5143\u7D20\u9032\u5165\u548C\u96E2\u958B\u6642\u61C9\u7528
  - \`\`\`transition-group(TransitionGroup)\`\`\`\uFF1A\u7D44\u4EF6\u5167\u53EF\u4EE5\u6709\u591A\u500B\u5143\u7D20\u5B58\u5728\uFF0C\u7528\u65BC\u5728\u5217\u8868\u4E2D\u64CD\u4F5C(\u589E\u3001\u522A...)\u6642\u61C9\u7528
- \u5165\u5834\u8207\u51FA\u5834\uFF1A
  - \u5165\u5834\u8207\u51FA\u5834\u5404\u6709\u4E09\u968E\u6BB5
  - \u82E5 \`\`\`transition\`\`\` \u7D44\u4EF6\u7684 \`\`\`name\`\`\` \u70BA\u7A7A\uFF0C\u5247 \`\`\`class\`\`\` \u540D\u70BA \`\`\`v\`\`\` \u958B\u982D\uFF0C\u5982\uFF1A\`\`\`.v-xxxx-xxxx\`\`\`
  - \u5165\u5834(\`\`\`v\`\`\` \u6703\u96A8\u8457 \`\`\`transition\`\`\` \u7684 \`\`\`name\`\`\` \u8B8A\u66F4)
    - v-enter-from\uFF1A\u5B9A\u7FA9\u5143\u7D20\u5728\u5165\u5834\u300C\u4E4B\u524D\u300D\u7684\u6A23\u5F0F
    - v-enter-active\uFF1A\u5B9A\u7FA9\u5143\u7D20\u5728\u5165\u5834\u300C\u904E\u7A0B\u300D\u7684\u6A23\u5F0F
    - v-enter-to\uFF1A\u5B9A\u7FA9\u5143\u7D20\u5728\u5165\u5834\u300C\u7D50\u675F\u6642\u300D\u7684\u6A23\u5F0F
  - \u51FA\u5834(\`\`\`v\`\`\` \u6703\u96A8\u8457 \`\`\`transition\`\`\` \u7684 \`\`\`name\`\`\` \u8B8A\u66F4)
    - v-leave-from\uFF1A\u5B9A\u7FA9\u5143\u7D20\u5728\u51FA\u5834\u300C\u4E4B\u524D\u300D\u7684\u6A23\u5F0F
    - v-leave-active\uFF1A\u5B9A\u7FA9\u5143\u7D20\u5728\u51FA\u5834\u300C\u904E\u7A0B\u300D\u7684\u6A23\u5F0F
    - v-leave-to\uFF1A\u5B9A\u7FA9\u5143\u7D20\u5728\u51FA\u5834\u300C\u7D50\u675F\u6642\u300D\u7684\u6A23\u5F0F
  - \u7BC4\u4F8B\uFF1A
    \`\`\`html
    <style>
    @keyframes shake {
      0% {
        transform: translateX(-100px)
      }
      50% {
        transform: translateX(-50px)
      }
      100% {
        transform: translateX(50px)
      }
    }
    /*
      transition name \u70BA hello\uFF0C\u5247 class \u70BA hello-xxx-xxx 
    */
    .hello-leave-active {
      animation: shake 3s;
    }
    .hello-enter-active {
      animation: shake 3s;
    }
    </style>
    <script>
    // \u5355\u5143\u7D20\uFF0C\u5355\u7EC4\u4EF6\u7684\u5165\u573A\u51FA\u573A\u52A8\u753B
    const app = Vue.createApp({
      data() {
        return {
          show: false
        }
      },
      methods: {
        handleClick() {
          this.show = !this.show;
        }
      },
      template: \`
        <div>
          <transition name="hello">
            <div v-if="show">hello world</div>
          </transition>
          <button @click="handleClick">\u5207\u6362</button>
        </div>
      \`
    });

    const vm = app.mount('#root');
    <\/script>
    \`\`\`
- \u81EA\u5B9A\u7FA9 \`\`\`class\`\`\`\uFF1A
  - \u53EF\u4EE5\u8207 [Animate.css](https://animate.style/) \u9032\u884C\u7D50\u5408\u4F7F\u7528
  - \u6709\u4EE5\u4E0B\u5E7E\u7A2E\u8A2D\u5B9A\u65B9\u5F0F\uFF0C\u529F\u80FD\u8207\u4E0A\u9762\u5165\u51FA\u5834\u76F8\u540C\uFF1A
    - enter-from-class
    - enter-active-class
    - enter-to-class
    - leave-from-class
    - leave-active-class
    - leave-to-class
  - \u82E5\u6709\u540C\u6642\u4F7F\u7528 \`\`\`transition\`\`\` \u8207 \`\`\`animation\`\`\` \u60C5\u6CC1
    - \u82E5\u8A2D\u5B9A \`\`\`type="transition"\`\`\`\uFF0C\u5247\u8A2D\u5B9A\u7684\u79D2\u6578\u5F8C\u5F37\u5236\u5B8C\u6210 \`\`\`animation\`\`\` \u52D5\u756B
    - \u82E5\u8A2D\u5B9A \`\`\`type="animation"\`\`\`\uFF0C\u5247\u8A2D\u5B9A\u7684\u79D2\u6578\u5F8C\u5F37\u5236\u5B8C\u6210 \`\`\`transition\`\`\` \u904E\u6E21
  - \`\`\`duration\`\`\`
    - \u82E5\u8A2D\u5B9A \`\`\`:duration="1000"\`\`\`\uFF0C\u5247\u4E00\u79D2\u5F8C\u5F8C\u5F37\u5236\u5B8C\u6210\u904E\u6E21\u52D5\u756B
    - \u82E5 \`\`\`:duration="{enter: 1000, leave: 3000}"\`\`\`\uFF0C\u5247\u5165\u5834\u4E00\u79D2\u5F8C\u5F37\u5236\u7D50\u675F\u904E\u6E21\u52D5\u756B\uFF0C\u51FA\u5834\u4E09\u79D2\u5F8C\u5F37\u5236\u7D50\u675F\u904E\u6E21\u52D5\u756B
  - \u7BC4\u4F8B
    \`\`\`js
    /*
      1.\u5148\u81EA\u5B9A\u7FA9\u7684\u540D\u7A31\u5BEBcss
        .hello { \u4EE3\u8868\u5165\u5834\u7684\u52D5\u4F5C } .bye { \u4EE3\u8868\u51FA\u5834\u7684\u52D5\u4F5C }
      2.\u5728 transition \u7D44\u4EF6\u4E0A\u8A2D\u5B9A\u5982\uFF1Aenter-active-class="hello" \u5373\u53EF\u751F\u6548
        \u4E26\u4E14\u53EF\u540C\u6642\u7528\u591A\u500B class\uFF0C\u5982\uFF1Aenter-active-class="yourFirstClass yourSecondClass"
    */
    const app = Vue.createApp({
      data() {
        return {
          show: false
        }
      },
      methods: {
        handleClick() {
          this.show = !this.show;
        },
      },
      template: \`
        <div>
          <transition
            enter-active-class="hello"
            leave-active-class="bye"
          >
            <div v-show="show">hello world</div>
          </transition>
          <button @click="handleClick">\u5207\u6362</button>
        </div>
      \`
    });

    const vm = app.mount('#root');
    \`\`\`
- \`\`\`JavaScript Hooks\`\`\`\uFF1A
  - [\u5B98\u7DB2\u4ECB\u7D39](https://vuejs.org/guide/built-ins/transition.html#javascript-hooks)
  - \u53EF\u4EE5\u5075\u807D \`\`\`Transition\`\`\` \u7D44\u4EF6\u4E0A\u52D5\u756B\u8F49\u63DB\u904E\u7A0B
  - \u82E5\u8A2D\u5B9A \`\`\`:css="false"\`\`\` \u5247\u4EE3\u8868\u4E0D\u7528 \`\`\`css\`\`\` \u52D5\u756B\u8207\u904E\u6E21\u6548\u679C
  - \u7BC4\u4F8B
    \`\`\`js
    const app = Vue.createApp({
      data() {
        return {
          show: false
        }
      },
      methods: {
        handleClick() {
          this.show = !this.show;
        },
        handleBeforeEnter(el) {
          // el \u53EF\u4EE5\u53D6\u5F97 transition \u5167\u7684\u7BC0\u9EDE/\u7D44\u4EF6\u8CC7\u8A0A
          el.style.color = "red";
        },
        handleEnterActive(el, done) {
          const animation = setInterval(() => {
            const color = el.style.color;
            if(color === 'red') {
              el.style.color = 'green';
            } else {
              el.style.color = 'red';
            }
          }, 1000)
          setTimeout(() => {
            clearInterval(animation);
            done();
          }, 3000)
        },
        handleEnterEnd(el) {
          console.log(123);
        }
      },
      /*
        @before-enter \u4EE3\u8868\u5165\u5834\u57F7\u884C\uFF0C\u6709 el \u53C3\u6578(transition\u672C\u9AD4)
        @enter \u4EE3\u8868\u5165\u5834\u4E2D\u57F7\u884C\uFF0C\u6709 el \u53C3\u6578(transition\u672C\u9AD4)\u8207 done\u53C3\u6578(\u8981\u7D50\u675F\u52D5\u756B\u6642\u9700\u547C\u53EB:done())
        @after-enter \u4EE3\u8868\u5165\u5834\u5B8C\uFF0C\u6709 el \u53C3\u6578(transition\u672C\u9AD4)
        \u5176\u4ED6\u53EF\u8A73\u7D30\u770B\u5B98\u7DB2
      */
      template: \`
        <div>
          <transition
            :css="false"
            @before-enter="handleBeforeEnter"
            @enter="handleEnterActive"
            @after-enter="handleEnterEnd"
          >
            <div v-show="show">hello world</div>
          </transition>
          <button @click="handleClick">\u5207\u6362</button>
        </div>
      \`
    });

    const vm = app.mount('#root');
    \`\`\`
- \`\`\`transition\`\`\` \u7D44\u4EF6\u52D5\u756B\u5207\u63DB\u5143\u7D20/\u7D44\u4EF6\uFF0C\`\`\`transition-group\`\`\` \u5B98\u65B9\u4E0D\u652F\u6301\u4F7F\u7528\uFF1A
  - \u82E5\u8981\u9054\u5230\u5148\u5165\u5834\u518D\u51FA\u5834\u52D5\u756B\u6548\u679C\u5247\u52A0\u5165 \`\`\`mode="in-out"\`\`\`\uFF0C\u6C92\u6709\u52A0\u5247\u9810\u8A2D\u540C\u6642
  - \u82E5\u8981\u9054\u5230\u5148\u51FA\u5834\u518D\u5165\u5834\u52D5\u756B\u6548\u679C\u5247\u52A0\u5165 \`\`\`mode="out-in"\`\`\`\uFF0C\u6C92\u6709\u52A0\u5247\u9810\u8A2D\u540C\u6642
  - \`\`\`appear\`\`\` \u8868\u793A\u7576\u6E32\u67D3\u5B8C\u6642\uFF0C\u9032\u884C\u5165\u5834\u52D5\u756B
  - \u7BC4\u4F8B
    \`\`\`js
    // \u5229\u7528 component \u7D44\u4EF6\u4F86\u5207\u63DB\u5169\u500B\u81EA\u5B9A\u7FA9\u7D44\u4EF6
    const ComponentA = {
      template: '<div>hello world</div>'
    }

    const ComponentB = {
      template: '<div>bye world</div>'
    }

    const app = Vue.createApp({
      data() {
        return { component: 'component-a' }
      },
      methods: {
        handleClick() {
          if(this.component === 'component-a') {
            this.component = 'component-b';
          }else {
            this.component = 'component-a';
          }
        },
      },
      components: {
        'component-a': ComponentA,
        'component-b': ComponentB,
      },
      template: \`
        <div>
          <transition mode="out-in" appear>
            <component :is="component" />
          </transition>
          <button @click="handleClick">\u5207\u6362</button>
        </div>
      \`
    });
    const vm = app.mount('#root');
    \`\`\`
- \u4F7F\u7528 \`\`\`transition-group\`\`\` \u88FD\u4F5C\u5217\u8868\u52D5\u756B
  - \u6CE8\u610F\uFF1A\u5167\u90E8\u7684\u5143\u7D20\u9700\u5177\u6709\u552F\u4E00\u7684 \`\`\`key\`\`\` \u503C(\u82E5\u6C92\u6709\u5247\u52D5\u756B\u5931\u6548)
  - \u7BC4\u4F8B
    \`\`\`html
    <style>
      .v-enter-from {
        opacity: 0;
        transform: translateY(30px);
      }
      .v-enter-active {
        transition: all .5s ease-in;
      }
      .v-enter-to {
        opacity: 1;
        transform: translateY(0);
      }
      .v-move {
        transition: all .5s ease-in;
      }
      .list-item {
        display: inline-block;
        margin-right: 10px;
      }
    </style>
    <script>
      const app = Vue.createApp({
        data() {
          return { list: [1, 2, 3] }
        },
        methods: {
          handleClick() {
            this.list.unshift(this.list.length + 1);
          },
        },
        template: \`
          <div>
            <transition-group>
              <span class="list-item" v-for="item in list" :key="item">{{item}}</span>
            </transition-group>
            <button @click="handleClick">\u589E\u52A0</button>
          </div>
        \`
      });
      const vm = app.mount('#root');
    <\/script>
    \`\`\`
`;export{n as default};

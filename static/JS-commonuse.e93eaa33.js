const n=`<span style="font-size: 32px; font-weight: 600;">JS \u5E38\u7528\u7528\u6CD5</span>

## Throttle \u7BC0\u6D41\u9396
- \u529F\u80FD\uFF1A\u78BA\u4FDD\u51FD\u6578\u57F7\u884C\u4E2D\u9014\u4E0D\u6703\u518D\u6B21\u57F7\u884C
- \u4F7F\u7528\u60C5\u5883\uFF1A\u5E38\u4F7F\u7528\u5728\u52D5\u756B\u6216\u8F2A\u64AD\u5716\uFF0C\u907F\u514D\u4F7F\u7528\u8005\u77ED\u6642\u9593\u89F8\u767C\u591A\u6B21
- \u7BC4\u4F8B
  \`\`\`js
  var lock = true;
  function needToLock(){
    // \u5982\u679C\u95DC\u9589\u72C0\u614B\u5247\u4E0D\u57F7\u884C
    if(!lock) return;
    // \u9396\u4F4F
    lock = false;
    // \u4E00\u79D2\u904E\u5F8C\u958B\u9396
    setTimeout(function(){
      lock = true;
    }, 1000);
  }
  \`\`\`

## debounce \u53BB\u6296\u52D5
- \u529F\u80FD\uFF1A\u9810\u9632\u4F7F\u7528\u8005\u6216\u786C\u9AD4\u8A2D\u5099\u77ED\u6642\u9593\u5167\u89F8\u767C\u591A\u6B21
- \u4F7F\u7528\u60C5\u5883\uFF1A\u5E38\u4F7F\u7528\u5728\u767C\u9001\u8ACB\u6C42\u6216\u6EFE\u52D5\u4E8B\u4EF6\u6642\u4F7F\u7528
- \u7BC4\u4F8B
  \`\`\`js
  const input1 = document.getElementById('input1')
  function debounce(fn, delay = 500) {
    let timer = null
    return function () {
      // \u82E5\u91CD\u8907\u89F8\u767C\uFF0C\u5247\u6E05\u9664\u4E0A\u4E00\u500B\u6E96\u5099\u57F7\u884C\u7684\u8A08\u6642\u5668
      if (timer) {
          clearTimeout(timer)
      }
      timer = setTimeout(() => {
          // \u4F7F\u7528apply\u53EF\u4EE5\u8B93input\u7684e\u50B3\u5165\u4E26\u9032\u884C\u89F8\u767C
          fn.apply(this, arguments)
          // this=input1(\u56E0\u70BA\u662Finput1\u547C\u53EB)
          console.log('this=',this) 
          timer = null
      }, delay)
    }
  }

  input1.addEventListener('keyup', debounce(function (e) {
    console.log(e.target)
    console.log(input1.value)
  }, 600))
  \`\`\`

## \u5206\u6642\u51FD\u6578
- \u529F\u7528\uFF1A\u9700\u55AE\u6B21\u6E32\u67D3\u5927\u91CF\u8CC7\u6599\u6642\u4F7F\u7528\uFF0C\u907F\u514D\u9020\u6210\u756B\u9762\u505C\u9813\u5361\u4F4F
- \u4F7F\u7528\u60C5\u5883\uFF1A\u7576\u5F8C\u7AEF\u4E00\u6B21\u6027\u7D66\u4E88\u5927\u91CF\u9805\u76EE\u8CC7\u6599\u6642\u53EF\u4F7F\u7528
- \u7BC4\u4F8B
  \`\`\`js
  /*
    dataArray\uFF1A\u9700\u4F9D\u5E8F\u653E\u5165\u6307\u5B9A\u51FD\u6578\u7684\u8CC7\u6599\u7684\u9663\u5217
    fn\uFF1A\u5C07\u9663\u5217\u4E2D\u55AE\u500B\u8CC7\u6599\u653E\u5165\u5F8C\u57F7\u884C\u7684\u51FD\u6578
    count\uFF1A\u6BCF\u6B21\u57F7\u884C\u8981\u8655\u7406\u9663\u5217\u5167\u591A\u5C11\u500B\u6578\u64DA
    duration\uFF1A\u6BCF\u6B21\u57F7\u884C\u7684\u79D2\u6578
  */
  const timeChunk = function(dataArray, fn, count, duration) {
    // \u82E5\u6C92\u6709\u8981\u8655\u7406\u7684\u8CC7\u6599\u5247\u76F4\u63A5\u8FD4\u56DE
    if(!dataArray || !dataArray.length) return;
    // \u5B58\u5132\u5B9A\u6642\u5668
    let timer;
    // \u9632\u6B62\u91CD\u8907\u57F7\u884C
    let isRunning = false;
    // \u5206\u6279\u57F7\u884C\u51FD\u6578
    let eachExecute = function() {
      for(let i = 0; i < Math.min(count || 1, dataArray.length); i++) {
        const obj = dataArray.shift();
        fn(obj);// \u57F7\u884C\u6307\u5B9A\u51FD\u6578
      }
    }

    return function() {
      if (isRunning) return;
      isRunning = true;
      // \u4F7F\u7528\u5B9A\u6642\u5668
      timer = setInterval(function() {
        // \u7576\u8CC7\u6599\u8655\u7406\u5B8C\u6210\u6642\uFF0C\u5C07\u5B9A\u6642\u5668\u6E05\u9664
        if (dataArray.length == 0) {
          clearInterval(timer);
          isRunning = false;
        }
        // \u82E5\u9084\u672A\u8655\u7406\u5B8C\u6210\u5247\u7E7C\u7E8C\u5206\u6279\u8655\u7406
        eachExecute();
      }, duration);
    }
  }

  const render = timeChunk(new Array(10), function() {console.log('render')}, 5, 1000);
  /*
    \u8F38\u51FA:
    render
    render
  */
  \`\`\`

## \u65B7\u9EDE\u8ABF\u8A66 debugger
- \u529F\u7528\uFF1A\u9700\u8981\u89C0\u5BDF\u5728\u7A0B\u5F0F\u4E2D\u5404\u9EDE\u9020\u6210\u7684\u9801\u9762\u8B8A\u5316\u6642
- \u67E5\u770B\u5404\u5BB6\u700F\u89BD\u5668\u652F\u6301\uFF1A[debugger](https://caniuse.com/?search=debugger)
- \u7BC4\u4F8B\uFF1A
  \`\`\`js
  console.log(111)
  // \u52A0\u5165 debugger\uFF0C\u700F\u89BD\u5668\u6703\u5728\u8A72\u9EDE\u66AB\u505C\u4E26\u53EA\u8F38\u51FA 111
  debugger
  console.log(222)
  \`\`\`
  
## \u81EA\u88FD getType \u51FD\u6578
- \u529F\u7528\uFF1A\u53EF\u66F4\u52A0\u7CBE\u78BA\u7684\u5224\u65B7\u6578\u64DA\u985E\u578B
- \u5E38\u898B\u7684\u5224\u65B7\u65B9\u6CD5
  - \`typeof\`\uFF1A\u53EA\u80FD\u5224\u65B7\u503C\u985E\u578B\uFF0C\u5176\u4ED6\u70BA \`function\`\u3001\`object\`
  - \`instanceof\`\uFF1A\u9700\u8981\u5169\u500B\u53C3\u6578\u5224\u65B7\u6B63\u78BA\u8207\u5426\uFF0C\u975E\u7372\u53D6\u985E\u578B
- \u539F\u7406\uFF1A
  - \u4F7F\u7528 \`Object.prototype.toString.call(x)\`
  - \u4E0D\u80FD\u76F4\u63A5\u8ABF\u7528 \`x.toString()\`\uFF0C\u8A72\u51FD\u6578\u53EF\u80FD\u88AB\u6539\u9020
  - \u4E0D\u80FD\u4F7F\u7528\u5E38\u898B\u5224\u65B7\u65B9\u6CD5\uFF0C\u53EF\u80FD\u6703\u907A\u6F0F\u65B0\u985E\u578B\uFF0C\u7F3A\u4E4F\u5B8C\u6574\u6027
- \u4EE3\u78BC\uFF1A
  \`\`\`js
  function getType(x: any): string{
    const originType = Object.prototype.toString.call(x)// [object type]
    const spaceIndex = originType.indexOf(' ')
    const type = originType.slice(spaceIndex+1, -1)
    return type.toLowerCase()
  }
  \`\`\`
- \u6E2C\u8A66\uFF1A
  \`\`\`js
  describe('\u7372\u53D6\u8A73\u7D30\u7684\u6578\u64DA\u985E\u578B', () => {
    it('null', () => {
      expect(getType(null)).toBe('null')
    })
    it('undefined', () => {
      expect(getType(undefined)).toBe('undefined')
    })
    it('number', () => {
      expect(getType(100)).toBe('number')
      expect(getType(NaN)).toBe('number')
      expect(getType(Infinity)).toBe('number')
      expect(getType(-Infinity)).toBe('number')
    })
    it('string', () => {
      expect(getType('abc')).toBe('string')
    })
    it('boolean', () => {
      expect(getType(true)).toBe('boolean')
    })
    it('symbol', () => {
      expect(getType(Symbol())).toBe('symbol')
    })
    it('bigint', () => {
      expect(getType(BigInt(100))).toBe('bigint')
    })
    it('object', () => {
      expect(getType({})).toBe('object')
    })
    it('array', () => {
      expect(getType([])).toBe('array')
    })
    it('function', () => {
      expect(getType(() => { })).toBe('function')
      expect(getType(class Foo { })).toBe('function')
    })
    it('map', () => {
      expect(getType(new Map())).toBe('map')
    })
    it('weakmap', () => {
      expect(getType(new WeakMap())).toBe('weakmap')
    })
    it('set', () => {
      expect(getType(new Set())).toBe('set')
    })
    it('weakset', () => {
      expect(getType(new WeakSet())).toBe('weakset')
    })
    it('date', () => {
      expect(getType(new Date())).toBe('date')
    })
    it('regexp', () => {
      expect(getType(new RegExp(''))).toBe('regexp')
    })
    it('error', () => {
      expect(getType(new Error())).toBe('error')
    })
    it('promise', () => {
      expect(getType(Promise.resolve())).toBe('promise')
    })
  })
  \`\`\`

## \u5E38\u7528\u7684\u7B2C\u4E09\u65B9\u5DE5\u5177\u5EAB
- [lodash](https://lodash.com/)
  - \u4E00\u500B\u63D0\u4F9B\u6A21\u584A\u5316\u3001\u6027\u80FD\u548C\u9644\u52A0\u529F\u80FD\u7684\u73FE\u4EE3\u5BE6\u7528\u7A0B\u5E8F\u5EAB
- [ramda](https://ramdajs.com/)
  - \u4E3B\u8981\u4EE5\u51FD\u6578\u5F0F\u7DE8\u7A0B\u98A8\u683C\u7684\u5DE5\u5177\u5EAB\uFF0C\u4E00\u7A2E\u5F9E\u4E0D\u6539\u8B8A\u7528\u6236\u6578\u64DA\u7684\u65B9\u5F0F
- [axios](https://github.com/axios/axios)
  - \u4E3B\u8981\u7528\u4F86\u547C\u53EB\u5F8C\u7AEF\u6578\u64DA\u7684\u7B2C\u4E09\u65B9\u5EAB
- [number-precision](https://github.com/nefe/number-precision)
  - \u4E3B\u8981\u8655\u7406\u6578\u5B57\u5E38\u898B\u7684\u932F\u8AA4
`;export{n as default};

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
`;export{n as default};

const n=`<span style="font-size: 32px; font-weight: 600;">JS Async/Await</span>

## \u7C21\u4ECB
- \`async/await\` \u53EF\u7B97\u662F \`promise\` \u7684\u7C21\u5316\u8A9E\u6CD5\u7CD6\uFF0C\u66F4\u65B9\u4FBF\u958B\u767C\u8005\u4F7F\u7528
- [\u67E5\u770B\u517C\u5BB9\u6027](https://caniuse.com/?search=async%20await)

## async \u7684\u4F5C\u7528
- \u53EF\u5F9E\u4E0B\u9762\u5F97\u77E5\uFF0C\u6703\u53D6\u5F97\u4E00\u500B \`fulfilled\` \u72C0\u614B\u7684 \`promise\`
  \`\`\`js
  async function testAsync() {
      return 'hi async' // \u82E5\u6C92\u6709 return\uFF0C\u5247\u8FD4\u56DE undefined
  }
  console.log(testAsync()) // Promise\xA0{<fulfilled>: 'hi async'}
  \`\`\`
- \u6CE8\u610F\uFF1A\u82E5\u51FD\u6578\u672C\u8EAB\u4E5F\u662F\u8FD4\u56DE \`promise\` \u5C0D\u8C61\uFF0C\u5247\u9700\u6CE8\u610F\u5C0D\u8C61\u4E0D\u76F8\u7B49\u7684\u60C5\u6CC1\uFF0C\u5982\u4E0B
  \`\`\`js
  let promise;
  async function test() {
    promise = new Promise(resolve => resolve(0))
    promise.mark = 'hi!'
    return promise
  }

  const gotPromise = test()
  console.log(\`is same?: \${promise === gotPromise}\`)  // false
  console.log(\`promise.mark: \${promise.mark}\`)        // hi!
  console.log(\`gotPromise.mark: \${gotPromise.mark}\`)  // undefined
  // \u82E5\u53BB\u6389 async \u5247\u8F38\u51FA true\u3001hi!\u3001hi!
  \`\`\`
 
## await \u7684\u4F5C\u7528
- \`await\` \u898F\u5B9A\u5FC5\u9808\u4F7F\u7528\u5728 \`async\` \u51FD\u6578\u5167\uFF0C\u5F8C\u9762\u63A5\u4E00\u500B\u8868\u9054\u5F0F(\u7121\u9650\u5B9A)
- \u82E5\u5F8C\u9762\u63A5\u7570\u6B65\u8868\u9054\u5F0F\uFF0C\u5247\u6703\u963B\u585E\u8A72\u884C\u5F8C\u9762\u4EE3\u78BC\u76F4\u5230\u53D6\u5F97\u7D50\u679C
- \u53EF\u5F9E\u4E0B\u9762\u5F97\u77E5\uFF0C\`await\` \u7B49\u7684\u662F\u8868\u9054\u5F0F\u7684\u8A08\u7B97\u7D50\u679C\uFF0C\u7D50\u679C\u53EF\u4EE5\u662F \`Promise\` \u6216\u5176\u5B83\u503C
  \`\`\`js
  function getSome() {
    return 'some'
  }

  async function testAsync() {
    return Promise.resolve('hi async')
  }

  async function test() {
    const r1 = await getSome()
    // \u82E5\u5F8C\u9762\u63A5\u7570\u6B65\u8868\u9054\u5F0F\uFF0C\u5247\u6703\u963B\u585E\u8A72\u884C\u5F8C\u9762\u4EE3\u78BC\u76F4\u5230\u53D6\u5F97\u7D50\u679C
    const r2 = await testAsync()
    console.log(r1, r2)
  }

  test() // some hi async
  \`\`\`

## \u4E3B\u8981\u4F5C\u7528
- \u7C21\u55AE\u4F86\u8AAA\uFF0C\u5C31\u662F\u7C21\u5316 \`promise\` \u93C8\u5F0F\u7684\u8ABF\u7528\u65B9\u5F0F
- \u53EF\u5F9E\u4E0B\u9762\u6BD4\u8F03\u5F97\u77E5\uFF0C\u908F\u8F2F\u66F4\u52A0\u6E05\u6670\u660E\u767D
  \`\`\`js
  function takeTime(n) {
    return new Promise(resolve => {
      setTimeout(() => resolve(n + 200), n)
    })
  }

  function step1(n) {
    console.log(\`step1 with \${n}\`)
    return takeTime(n)
  }

  function step2(m, n) {
    console.log(\`step2 with \${m} and \${n}\`)
    return takeTime(m + n)
  }

  function step3(k, m, n) {
    console.log(\`step3 with \${k}, \${m} and \${n}\`)
    return takeTime(k + m + n)
  }

  // async/await \u65B9\u5F0F
  async function start() {
    console.time('do it!')
    const time1 = 300
    const time2 = await step1(time1)
    const time3 = await step2(time1, time2)
    const result = await step3(time1, time2, time3)
    console.log(\`result is \${result}\`)
    console.timeEnd('do it!')
  }

  // promise \u65B9\u5F0F
  function start() {
    console.time('do it!')
    const time1 = 300
    step1(time1)
      .then(time2 => {
        return step2(time1, time2)
          .then(time3 => [time1, time2, time3])
      })
      .then(times => {
        const [time1, time2, time3] = times
        return step3(time1, time2, time3)
      })
      .then(result => {
        console.log(\`result is \${result}\`)
        console.timeEnd('do it!')
      });
  }

  start()
  \`\`\`
`;export{n as default};

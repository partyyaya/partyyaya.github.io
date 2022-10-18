const n=`<span style="font-size: 32px; font-weight: 600;">JS Promise</span>

## \u7C21\u4ECB
- \`\`\`Promise\`\`\` \u662F\u7570\u6B65\u64CD\u4F5C\u7684\u89E3\u6C7A\u65B9\u6848
- \u4E00\u822C\u7528\u6765\u89E3\u6C7A\u5C64\u5C64\u5D4C\u5957\u7684 \`\`\`\u56DE\u8ABF\u5730\u7344\`\`\` \u554F\u984C
- \u56DE\u8ABF\u5730\u7344\u4F8B\u5B50
  \`\`\`js
  // \u6BCF\u4E00\u6B21\u79FB\u52D5\u5B8C\u6210\u81EA\u52D5\u8ABF\u7528\u7D50\u675F\u51FD\u6578
  const move = (el, { x = 0, y = 0 } = {}, end = () => {}) => {
    el.style.transform = \`translate3d(\${x}px, \${y}px, 0)\`;
    el.addEventListener(
      'transitionend',
      () => {
        end();
      },
      false
    );
  };
  const boxEl = document.getElementById('box');
  // \u56E0\u6BCF\u4E00\u6B21\u90FD\u9700\u8ABF\u7528\u7D50\u675F\u51FD\u6578\u9032\u884C\u4E0B\u4E00\u6B21\u79FB\u52D5\u800C\u9020\u6210\u56DE\u8ABF\u5730\u7344
  document.addEventListener(
    'click',
    () => {
      move(boxEl, { x: 150 }, () => {
        move(boxEl, { x: 150, y: 150 }, () => {
          move(boxEl, { y: 150 }, () => {
            move(boxEl, { x: 0, y: 0 });
          });
        });
      });
    },
    false
  );
  \`\`\`

## \u57FA\u672C\u7528\u6CD5
- 1.\u5BE6\u4F8B\u5316\u69CB\u9020\u51FD\u6578\u751F\u6210\u5BE6\u4F8B\u5C0D\u8C61
  \`\`\`js
  const p = new Promise(() => {});
  \`\`\`
- 2.\`\`\`Promise\`\`\` \u4E09\u7A2E\u72C0\u614B
  - \u5BE6\u4F8B\u5316\u5F8C\u662F \`\`\`pending\uFF08\u672A\u5B8C\u6210\uFF09\`\`\`
  - \u57F7\u884C \`\`\`resolve\`\`\`\uFF0C\u8B8A\u6210 \`\`\`fulfilled(resolved)\`\`\`\uFF0C\u5DF2\u6210\u529F
  - \u57F7\u884C \`\`\`reject\`\`\`\uFF0C\u8B8A\u6210 \`\`\`rejected\`\`\`\uFF0C\u5DF2\u5931\u8D25
  \`\`\`js
  // resolve\u3001reject \u53EF\u4EE5\u6539\u540D
  const p = new Promise((resolve, reject) => {
    // \u901A\u5E38reject\u6703\u50B3error
    reject(new Error('reason'));
  });

  p.then(
    data => {
      // \u6703\u5F97\u5230 resolve \u7684\u53C3\u6578
      console.log('success', data);
    },
    err => {
      // \u6703\u5F97\u5230 reject \u7684 err \u53C3\u6578
      console.log('error', err);
    }
  );
  console.log(p);// Promise
  \`\`\`

## \u5BE6\u4F8B\u65B9\u6CD5
### then
- \`\`\`resolved\`\`\` \u6642\uFF0C\u57F7\u884C \`\`\`then\`\`\` \u7684\u7B2C\u4E00\u500B\u56DE\u8ABF\u51FD\u6578
- \`\`\`rejected\`\`\` \u6642\uFF0C\u57F7\u884C \`\`\`then\`\`\` \u7684\u7B2C\u4E8C\u500B\u56DE\u8ABF\u51FD\u6578
- \u57F7\u884C\u5F8C\u8FD4\u56DE\u503C
  - \u7121\u8FD4\u56DE\u5247 \`\`\`return undefined\`\`\` \u4E26\u8FD4\u56DE\u6210\u529F\u72C0\u614B Promise \u5C0D\u8C61
  - return \u5F8C\u9762\u7684\u6578\u64DA\uFF0C\u6703\u7528 Promise \u5305\u88DD
- \u7BC4\u4F8B  
  \`\`\`js
  const p = new Promise((resolve, reject) => {
    // resolve();
    reject();
  });

  p.then(
    () => {
      // \u7576 resolve() \u6642\u57F7\u884C\u8A72\u51FD\u6578
    },
    () => {
      // \u7576 reject() \u6642\u57F7\u884C\u8A72\u51FD\u6578

      // \u82E5\u8981\u8FD4\u56DE\u932F\u8AA4\u72C0\u614B
      // return new Promise((resolve, reject) => {
      //   reject('reason');
      // });

      // return 123;
      // \u8207\u4EE5\u4E0B\u4EE3\u78BC\u7B49\u50F9(\u82E5\u53EA\u6709resolve\u5247reject\u53EF\u7701\u7565)
      // return new Promise(resolve => {
      //  // \u9ED8\u8BA4\u8FD4\u56DE\u7684\u6C38\u8FDC\u90FD\u662F\u6210\u529F\u72B6\u6001\u7684 Promise \u5BF9\u8C61
      //   resolve(123);
      // });
      return 123;
    }
  )
  .then(
    data => {
      console.log('success2', data);// 123
      // \u7B49\u50F9\u65BC return undefined;
      return new Promise(resolve => {
        resolve(undefined);
      });
    },
    err => {
      console.log('err2', err);
    }
  )
  .then(
    data => {
      console.log('success3', data);// undefined
    },
    err => {
      console.log('err3', err);
    }
  );
  \`\`\`

### catch
- \u5C08\u9580\u7528\u4F86\u8655\u7406 \`\`\`rejected\`\`\` \u72C0\u614B
- \u662F \`\`\`then\`\`\` \u7684\u7279\u4F8B \`\`\`then(null, err => {});\`\`\`
- \u7528\u6CD5
  \`\`\`js
  new Promise((resolve, reject) => {
    reject('reason');
  }).then(data => {
    // \u56E0\u70BA\u662Freject\u6240\u4EE5\u7B2C\u4E00\u500B\u51FD\u6578\u4E0D\u6703\u8F38\u51FA
    // \u4E26\u4E14\u7121reject\u5B8C\u5F8C\u7684\u57F7\u884C\u51FD\u6578\u6240\u4EE5\u6703\u8DF3\u5230catch
    console.log(data);
  })
  // .then(null, err => {
  //   console.log(err);
  // });
  // \u6CE8\u610F!\u82E5\u6C92\u767C\u751F\u932F\u8AA4\u5247\u6703\u57F7\u884C\u4E0B\u4E00\u500Bthen\u4E26\u8DF3\u904Ecatch
  .catch(err => {
    console.log(err);// reason
    // \u4E5F\u53EF\u4EE5\u62CB\u51FA\u932F\u8AA4
    throw new Error('reason');
  }).then(data => {
    console.log('test',data); 
  }).catch(err => {
    console.log('err', err);// err Error: reason
  });
  \`\`\`

### finally
- \u4E0D\u8AD6\u662F resolve \u6216 reject \u90FD\u6703\u57F7\u884C\uFF0C\u4E0D\u8B8A\u5316\u4E0D\u6703\u57F7\u884C
- \u662F \`\`\`then\`\`\` \u7684\u7279\u4F8B\uFF0C
  - \u4E0D\u6703\u53D6\u5F97\u53C3\u6578\u4E26\u57F7\u884C\u5B8C\u51FD\u6578\u5F8C\u5C07\u524D\u9762\u7684\u53C3\u6578\u5F80\u5F8C\u62CB
  - \u7B49\u50F9\u65BC\u4EE5\u4E0B
    \`\`\`js
    .then(
      result => {
        return result;
      },
      err => {
        return new Promise((resolve, reject) => {
          reject(err);
        });
      }
    )
    \`\`\`
- \u901A\u5E38\u7528\u5728\u6700\u5F8C\u57F7\u884C\u7D50\u675F\u7684\u7A0B\u5F0F
- \u7528\u6CD5
  \`\`\`js
  new Promise((resolve, reject) => {
    resolve(123);
    // reject('reason');
  })
  .finally(data => {
    // \u82E5\u5728\u4E2D\u9593\u4E5F\u4E0D\u6703\u6709\u4EFB\u4F55\u7684\u53C3\u6578
    console.log(data);// undefined
  })
  .then(result =>{
    console.log(result);// 123
  })
  .catch(err => {});
  \`\`\`

## \u69CB\u9020\u51FD\u6578\u65B9\u6CD5
### Promise.resolve
- \u70BA\u6210\u529F\u72C0\u614B \`\`\`Promise\`\`\` \u7684\u4E00\u7A2E\u7C21\u5BEB\u5F62\u5F0F
- \u6703\u5148\u57F7\u884C \`\`\`resolve\`\`\` \u62EC\u865F\u5167\u7684\u6771\u897F
- \u4EE5\u4E0B\u5169\u8005\u7B49\u50F9\u76F8\u7B49
  \`\`\`js
  new Promise(resolve => resolve('foo'));
  // \u7C21\u5BEB
  Promise.resolve('foo');
  \`\`\`
- \u4E00\u822C\u53C3\u6578(\u9810\u8A2D\u70BA\u6210\u529F\u72C0\u614B\u6240\u4EE5\u76F4\u63A5\u8F38\u51FA)
  \`\`\`js
  Promise.resolve('foo').then(data => {
    console.log(data);// foo
  });
  \`\`\`
- \`\`\`Promise\`\`\` \u4F5C\u70BA\u53C3\u6578
  - \u6703\u6839\u64DA \`\`\`resolve\`\`\` \u62EC\u865F\u5167\u7684 \`\`\`Promise \u5C0D\u8C61\`\`\`\u7684\u72C0\u614B\u8B8A\u5316\u4F86\u6C7A\u5B9A
  \`\`\`js
  const p1 = new Promise((resolve,reject) => {
    setTimeout(resolve, 1000, '\u57F7\u884C\u4E86');
    // \u4E0A\u9762\u7B49\u50F9\u65BC\u4E0B\u9762
    // setTimeout(() => {
    //   resolve('\u6211\u6267\u884C\u4E86');
    // }, 1000);
  });
  Promise.resolve(p1).then(data => {
    console.log(data);// \u57F7\u884C\u4E86
  }).catch(data => {
    // \u82E5 p1 \u57F7\u884C reject\uFF0C\u5247\u6703\u9032\u5165 catch
    console.log(data);
  });
  // \u7B49\u50F9\u65BC
  p1.then(data => {
    console.log(data);// \u57F7\u884C\u4E86
  }).catch(data => {
    console.log(data);
  });
  console.log(Promise.resolve(p1) === p1);// true
  \`\`\`
- \`\`\`then \u65B9\u6CD5\u5C0D\u8C61\`\`\` \u4F5C\u70BA\u53C3\u6578
  - \u6703\u8F49\u70BA \`\`\`Promise \u5C0D\u8C61\`\`\`\uFF0C\u4E26\u7ACB\u5373\u57F7\u884C \`\`\`thenable \u5C0D\u8C61\`\`\`\u7684 \`\`\`then \u65B9\u6CD5\`\`\`
  \`\`\`js
  const thenable = {
    then(resolve, reject) {
      resolve('data');
    }
  };
  // Promise.resolve(thenable) \u6574\u500B\u6703\u8F49\u70BA Promise \u5C0D\u8C61
  // \u8F49\u5B8C Promise \u5C0D\u8C61\u5F8C\u76F4\u63A5\u57F7\u884C then \u65B9\u6CD5
  // \u82E5\u88E1\u9762\u89F8\u767C reject \u5247\u6703\u5230 err 
  Promise.resolve(thenable).then(
    data => console.log(data),// data
    err => console.log(err)
  );
  console.log(Promise.resolve(thenable));// Promise\xA0{<pending>}
  \`\`\`

### Promise.reject
- \u70BA\u5931\u6557\u72C0\u614B \`\`\`Promise\`\`\` \u7684\u4E00\u7A2E\u7C21\u5BEB\u5F62\u5F0F
- \u4EE5\u4E0B\u5169\u8005\u7B49\u50F9\u76F8\u7B49
  \`\`\`js
  new Promise((resolve, reject) => {
    reject('reason');
  });
  // \u7B49\u50F9\u65BC
  Promise.reject('reason');
  \`\`\`
- \u7528\u6CD5
  \`\`\`js
  const p1 = new Promise((resolve,reject) => {
    setTimeout(resolve, 1000, '\u57F7\u884C\u4E86');
  });
  // \u4E0D\u7BA1 resolve\u3001reject \u90FD\u6703\u8DF3\u5230catch(rejected)
  Promise.reject(p1)
  .then(data => console.log(data))
  .catch(err => {
    // \u82E5 p1 \u72C0\u614B\u70BA resolve \u5247\u6703\u4FDD\u6301 promise \u5C0D\u8C61
    // \u82E5 p1 \u72C0\u614B\u70BA reject \u5247\u6703\u8F38\u51FA "\u57F7\u884C\u4E86"
    console.log(err);//Promise\xA0{<pending>}
    return err;// \u5C07 p1 \u7684 resolve promise \u5C0D\u8C61\u5F80\u5F8C\u62CB
  })
  .then(data => console.log(data));// \u57F7\u884C\u4E86
  \`\`\`

### Promise.all
- \u53EF\u89C0\u6E2C\u591A\u500B \`\`\`Promise \u5BE6\u4F8B\u5C0D\u8C61\`\`\`\u7684\u72C0\u614B\u8B8A\u5316
- \u50B3\u5165\u591A\u500B \`\`\`Promise \u5BE6\u4F8B\`\`\`\u4E26\u5305\u88DD\u6210\u4E00\u500B \`\`\`\u65B0\u7684 Promise \u5BE6\u4F8B\`\`\`\u8FD4\u56DE
- \u6240\u6709\u5BE6\u4F8B\u72C0\u614B\u90FD\u8B8A\u6210 \`\`\`resolved\`\`\`\uFF0C\u6700\u7EC8\u72C0\u614B\u624D\u6703\u8B8A\u6210 \`\`\`resolved\`\`\`
- \u53EA\u8981\u6709\u4E00\u500B\u8B8A\u6210 \`\`\`rejected\`\`\`\uFF0C\u6700\u7D42\u72C0\u614B\u5C31\u8B8A\u6210 \`\`\`rejected\`\`\`(\u53EA\u6703\u8F38\u51FA\`\`\`\u7B2C\u4E00\u500B rejected \u7D50\u679C\`\`\`)
- \u4E0D\u7BA1\u4E2D\u9593\u6210\u529F\u6216\u5931\u6557\u90FD\u6703\u4F9D\u5E8F\u57F7\u884C
- \u53C3\u6578\u82E5\u70BA\u7A7A\u6578\u7D44\uFF0C\u6700\u7D42\u72C0\u614B\u70BA \`\`\`resolved\`\`\`
  \`\`\`js
  const p = Promise.all([]);
  p.then(
    data => {
      console.log(data);// []
    }
  );
  \`\`\`
- \u7528\u6CD5
  \`\`\`js
  const delay = ms => {
    return new Promise(resolve => {
      setTimeout(resolve, ms);
    });
  };
  const p1 = delay(1000).then(() => {
    console.log('p1 \u5B8C\u6210\u4E86');
    return 'p1';
  });
  const p2 = delay(2000).then(() => {
    console.log('p2 \u5B8C\u6210\u4E86');
    return 'p2';
  });
  const p = Promise.all([p1, p2]);
  p.then(
    data => {
      // \u53EA\u6709\u6240\u6709\u90FD\u6210\u529F\u6642\u624D\u6703\u8F38\u51FA
      console.log(data);// ["p1", "p2"]
    },
    err => {
      // \u53EA\u8981\u4E00\u500B\u662F\u5931\u6557\u5C31\u76F4\u63A5\u8F38\u51FA(\u4E26\u4E14\u53EA\u6703\u8F38\u51FA\u7B2C\u4E00\u500B\u5931\u6557)
      console.log(err);
    }
  );
  \`\`\`

### Promise.race
- \u72C0\u614B\u53D6\u6C7A\u65BC\u591A\u500B\u5C0D\u8C61\u4E2D\u7B2C\u4E00\u500B\u5B8C\u6210\u7684 \`\`\`Promise \u5BE6\u4F8B\u5C0D\u8C61\`\`\`
- \u4E0D\u7BA1\u4E2D\u9593\u6210\u529F\u5931\u6557\u90FD\u6703\u4F9D\u5E8F\u57F7\u884C
\`\`\`js
const delay = ms => {
  return new Promise(resolve => {
    setTimeout(resolve, ms);
  });
};
const p1 = delay(1000).then(() => {
  return 'p1';
});
const p2 = delay(2000).then(() => {
  return Promise.reject('reason');
});
const racePromise = Promise.race([p1, p2]);
racePromise.then(
  data => {
    console.log(data);// \u53EA\u6703\u8F38\u51FA\u7B2C\u4E00\u500B\u6210\u529F\u7684:p1
  },
  err => {
    console.log(err);
  }
);
\`\`\`

### Promise.allSettled
- \u4E0D\u7BA1\u4E2D\u9014\u70BA\u6210\u529F\u6216\u5931\u6557\u6C38\u9060\u90FD\u662F\u6210\u529F\u7684
- \u4E26\u6703\u5FE0\u5BE6\u5730\u8A18\u9304\u6240\u6709 \`\`\`Promise \u5BE6\u4F8B\u5C0D\u8C61\`\`\`\u7684\u56DE\u50B3
\`\`\`js
const delay = ms => {
  return new Promise(resolve => {
    setTimeout(resolve, ms);
  });
};
const p1 = delay(1000).then(() => {
  return 'p1';
});
const p2 = delay(2000).then(() => {
  return Promise.reject('p2');
});
const allSettledPromise = Promise.allSettled([p1, p2]);
allSettledPromise.then(data => {
  console.log('success', data);
});
/*
  success (2) [{\u2026}, {\u2026}]
    0: {status: 'fulfilled', value: 'p1'}
    1: {status: 'rejected', reason: 'p2'}
    length: 2
    [[Prototype]]: Array(0)
*/
\`\`\`

### Promise.any
- \u53EA\u6709\u5168\u90E8 \`\`\`Promise \u5BE6\u4F8B\u5C0D\u8C61\`\`\`\u90FD\u662F\u5931\u6557\uFF0C\u72C0\u614B\u624D\u6703\u8F49\u8B8A\u70BA\u5931\u6557
- \u53EA\u8981\u6709\u4E00\u500B \`\`\`Promise \u5BE6\u4F8B\u5C0D\u8C61\`\`\`\u662F\u6210\u529F
  - \u5247\u72C0\u614B\u8F49\u8B8A\u70BA\u6210\u529F
  - \u53D6\u5F97\u8A72\u5BE6\u4F8B\u5C0D\u8C61\u56DE\u50B3(\u4E0D\u518D\u7406\u6703\u5176\u4ED6\u5BE6\u4F8B\u5C0D\u8C61\u56DE\u50B3)
  - \u4E0D\u7BA1\u4E2D\u9593\u6210\u529F\u6216\u5931\u6557\u90FD\u6703\u4F9D\u5E8F\u57F7\u884C
  - \u82E5\u540C\u6642\u5247\u6309\u7167\u6587\u6A94\u6D41\u9806\u5E8F
- \u53EF\u7528\u5728\u54EA\u5F35\u5716\u7247\u52A0\u8F09\u6BD4\u8F03\u5FEB\u5C31\u7528\u54EA\u5F35\u5716\u7247
\`\`\`js
const delay = ms => {
  return new Promise(resolve => {
    setTimeout(resolve, ms);
  });
};
const p1 = delay(1000).then(() => {
  return 'p1';
});
const p2 = delay(2000).then(() => {
  return 'p2';
});
const anyPromise = Promise.any([p1, p2]);
anyPromise.then(data => {
  console.log('success', data);
});
\`\`\`

### \u6CE8\u610F\u4E8B\u9805
- \`\`\`Promise.all\`\`\` / \`\`\`race\`\`\` / \`\`\`allSettled\`\`\` \u7684\u53C3\u6578\u554F\u984C
  - \u82E5\u53C3\u6578\u975E \`\`\`Promise \u6578\u7D44\`\`\`\uFF0C\u6703\u5C07\u6578\u7D44\u5143\u7D20\u8F49\u8B8A\u6210 \`\`\`Promise \u5C0D\u8C61\`\`\`
  - \u4EFB\u4F55\u53EF\u904D\u6B77\u7684\u90FD\u53EF\u4EE5\u4F5C\u4E3A\u53C3\u6578
    - \`\`\`Array\u3001String\u3001Set\u3001Map\u3001NodeList\u3001arguments\`\`\`
  \`\`\`js
  Promise.all([1, 2, 3]).then(datas => {
    console.log(datas);// [1, 2, 3]
  });
  // \u4E0A\u4E0B\u7B49\u50F9
  Promise.all([
    Promise.resolve(1),
    Promise.resolve(2),
    Promise.resolve(3)
  ]).then(datas => {
    console.log(datas);
  });
  \`\`\`
- \`\`\`Promise.all\`\`\` / \`\`\`race\`\`\` / \`\`\`allSettled\`\`\` \u7684\u932F\u8AA4\u8655\u7406
  - \u932F\u8AA4\u4E00\u65E6\u88AB\u500B\u5225\u8655\u7406\uFF0C\u5C31\u4E0D\u6703\u518D\u8655\u7406\u4E00\u904D
  - \u82E5\u6709\u591A\u500B\u932F\u8AA4\uFF0C\u7B2C\u4E00\u500B\u932F\u8AA4\u82E5\u500B\u5225\u8655\u7406\u5247\u6703\u5EF6\u7E8C\u81F3\u7B2C\u4E8C\u500B
  \`\`\`js
  const delay = ms => {
    return new Promise(resolve => {
      setTimeout(resolve, ms);
    });
  };

  const p1 = delay(1000).then(() => {
    return Promise.reject('reason p1');
  })
  .catch(err => {});

  const p2 = delay(2000).then(() => {
    return Promise.reject('reason p2');
  });

  const allPromise = Promise.all([p1, p2]);
  allPromise
    .then(datas => {
      console.log(datas);
    })
  .catch(err => console.log(err));// reason p2
  \`\`\`

## \u61C9\u7528\u7BC4\u4F8B
\`\`\`html
<body>
  <img
    src="https://one.jpg"
    alt=""
    id="img"
  />

  <script>
    // \u7570\u6B65\u52A0\u8F09\u5716\u7247
    const loadImgAsync = url => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        // \u52A0\u8F09\u5B8C\u6642\u8ABF\u7528
        img.onload = () => {
          resolve(img);
        };
        // \u52A0\u8F09\u932F\u8AA4\u6642\u8ABF\u7528
        img.onerror = () => {
          reject(new Error(\`Could not load image at \${url}\`));
        };
        // \u958B\u59CB\u52A0\u8F09
        img.src = url;
      });
    };

    const imgDOM = document.getElementById('img');
    loadImgAsync('https://two.jpg')
      .then(img => {
        // \u5982\u679C\u52A0\u8F09\u6210\u529F\u5247\u4E00\u79D2\u9418\u5F8C\u66FF\u63DB\u6389\u539F\u5716\u7247
        setTimeout(() => {
          imgDOM.src = img.src;
        }, 1000);
      })
      .catch(err => {
        // \u5426\u5247\u8F38\u51FA\u5931\u6557
        console.log(err);
      });
  <\/script>
</body>
\`\`\`
`;export{n as default};

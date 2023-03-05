const n=`<span style="font-size: 32px; font-weight: 600;">Axios \u7B46\u8A18</span>

## \u5275\u5EFA\u5BE6\u4F8B
- \u70BA\u4EC0\u9EBC\u9700\u8981\u5275\u5EFA\u5BE6\u4F8B\uFF1F
  \`\`\`txt
  \u5C07\u5171\u540C\u53C3\u6578\u8A2D\u5B9A\u7D71\u4E00\u5BEB\u5165\u65BC\u5BE6\u4F8B\uFF0C
  \u9700\u8981\u547C\u53EB API \u6642\uFF0C\u53EA\u9700\u8981\u53D6\u5F97\u5BE6\u4F8B\u547C\u53EB\u5373\u53EF\uFF0C
  \u4FBF\u4E0D\u518D\u9700\u8981\u91CD\u8907\u5BEB\u5165\u8A2D\u5B9A
  \`\`\`
- \u4F7F\u7528\u7BC4\u4F8B\uFF1A
  \`\`\`js
  import axios from 'axios'

  const instance = axios.create({
    // \u4F3A\u670D\u5668\u7DB2\u57DF
    baseURL: 'https://myurl.com',
    // \u903E\u6642\u79D2\u6578
    timeout: 10000,
    // \u8A2D\u5B9A\u8ACB\u6C42\u982D\u4FE1\u606F
    headers: {
      'Content-Type': 'application/json'
    }
  })
  \`\`\`

## \u6514\u622A\u5668
- \u4EC0\u9EBC\u662F\u6514\u622A\u5668 \`interceptors\`\uFF1F
  \`\`\`txt
  \u65BC\u8ACB\u6C42\u524D\u3001\u97FF\u61C9\u5F8C\u4F7F\u7528\uFF0C
  \u901A\u5E38\u5728\u9700\u8981\u8B8A\u66F4\u8ACB\u6C42\u53C3\u6578\u6642\u3001
  \u6216\u9700\u8981\u5F48\u51FA loading \u6642\u4F7F\u7528
  \`\`\`
- \u4F7F\u7528\u7BC4\u4F8B
  \`\`\`js
  // \u5275\u5EFA\u5BE6\u4F8B
  let instance = axios.create(yourOptions);
  // \u5275\u5EFA\u8ACB\u6C42\u6514\u622A\u5668(\u9084\u672A\u8ACB\u6C42)
  instance.interceptors.request.use(function (config) {
    // \u5728\u767C\u9001\u8ACB\u6C42\u6642\u986F\u793A loading 
    store.commit('setLoading', true)
    // \u8A2D\u5B9A\u932F\u8AA4\u8A0A\u606F\uFF0C\u9810\u8A2D\u6BCF\u6B21\u56DE\u61C9\u70BA\u6C92\u6709\u932F\u8AA4
    store.commit('setError', { status: false, message: '' })
    // \u53D6\u5F97\u66AB\u5B58\u4F7F\u7528\u8005 token
    const token = localStorage.getItem('token');
    // \u52A0\u5165 token \u81F3 Authorization
    config.headers.Authorization =  token ? \`Bearer \${token}\` : '';
    return config;
  });
  // \u5275\u5EFA\u97FF\u61C9\u6514\u622A\u5668(\u9084\u672A\u97FF\u61C9\u7D66\u76EE\u6A19)
  instance.interceptors.response.use(config => {
    // \u5728\u8ACB\u6C42\u5B8C\u7562\u6642\u8A2D\u7F6E\u7D50\u675F loading 
    store.commit('setLoading', false)
    return config
  }, e => {
    // \u8A2D\u5B9A\u932F\u8AA4\u8A0A\u606F\uFF0C\u5C07\u932F\u8AA4\u5132\u5B58\u9032 store \u4EE5\u65B9\u4FBF\u9801\u9762\u53D6\u5F97\u8A0A\u606F\u9032\u884C\u63D0\u9192
    const { error } = e.response.data
    store.commit('setError', { status: true, message: error })
    // \u5728\u8ACB\u6C42\u5B8C\u7562\u6642\u8A2D\u7F6E\u7D50\u675F loading 
    store.commit('setLoading', false)
    return Promise.reject(e.response.data)
  })
  \`\`\`

## GET
- \u4F7F\u7528\u7BC4\u4F8B\uFF1A
  \`\`\`js
  // \u5275\u5EFA\u5BE6\u4F8B
  let instance = axios.create(yourOptions);
  // \u7528 promise \u5305\u88DD\uFF0C\u9810\u8A2D\u7121\u53C3\u6578
  export const get = (url, params = {}) => {
    return new Promise((resolve, reject) => {
      instance.get(url, params).then((response) => {
        resolve(response.data)
      }, err => {
        reject(err)
      })
    })
  }

  // \u4F7F\u7528\u7BC4\u4F8B\uFF0C\u547C\u53EB /user?id=123456
  // \u4E5F\u53EF\u4EE5\u5C07 url \u6539\u6210 /user?id=123456\uFF0Cparam \u7559\u7A7A
  await get('/user', {
    id: 123456
  }).then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  })
  \`\`\`

## POST
- \u4F7F\u7528\u7BC4\u4F8B\uFF1A
  \`\`\`js
  // \u5275\u5EFA\u5BE6\u4F8B
  let instance = axios.create(yourOptions);
  // \u7528 promise \u5305\u88DD\uFF0C\u9810\u8A2D\u7121\u53C3\u6578
  export const post = (url, data = {}) => {
    return new Promise((resolve, reject) => {
      instance.post(url, data).then((response) => {
        resolve(response.data)
      }, err => {
        reject(err)
      })
    })
  }

  // \u4F7F\u7528\u65B9\u5F0F
  await post('/test', {
    userId: 123456
  }).then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  })
  /*
    \u82E5\u4F7F\u7528 application/x-www-form-urlencoded
    \u53EF\u4EE5\u4F7F\u7528 URLSearchParams \u5C07\u53C3\u6578\u5E36\u5165
  */
  const params = new URLSearchParams();
  params.append('userId', 123456);
  await axios.post('/test', params);
  \`\`\`

## \u7BC4\u672C\u53C3\u8003
- \u65B9\u4FBF\u4EE5\u5F8C\u4F7F\u7528\uFF0C\u7D50\u5408\u524D\u9762\u6280\u5DE7\uFF0C\u88FD\u4F5C\u53EF\u7528\u7684\u53C3\u8003\u7BC4\u672C
- \u53C3\u8003\u7BC4\u672C\uFF1A
  \`\`\`js
  import axios from 'axios'

  const instance = axios.create({
    // \u4F3A\u670D\u5668\u7DB2\u57DF
    baseURL: 'https://myurl.com',
    // \u903E\u6642\u79D2\u6578(10\u79D2)
    timeout: 10000,
    // \u8A2D\u5B9A\u8ACB\u6C42\u982D\u4FE1\u606F
    headers: {
      'Content-Type': 'application/json'
    }
  })
  // \u53D6\u5F97\u66AB\u5B58\u4F7F\u7528\u8005 token
  const token = localStorage.getItem('token');
  // \u52A0\u5165 token \u81F3 Authorization
  instance.defaults.headers.common.Authorization = token ? \`Bearer \${token}\` : '';
  // store \u901A\u5E38\u662F\u72C0\u614B\u7BA1\u7406\u96C6\u4E2D\u5668\uFF0C\u5982\uFF1AVuex\u3001Pinia
  // \u5275\u5EFA\u8ACB\u6C42\u6514\u622A\u5668(\u9084\u672A\u8ACB\u6C42)
  instance.interceptors.request.use(function (config) {
    // \u5728\u767C\u9001\u8ACB\u6C42\u6642\u986F\u793A loading 
    store.commit('setLoading', true)
    // \u8A2D\u5B9A\u932F\u8AA4\u8A0A\u606F\uFF0C\u9810\u8A2D\u6BCF\u6B21\u56DE\u61C9\u70BA\u6C92\u6709\u932F\u8AA4
    store.commit('setError', { status: false, message: '' })
    // \u4E5F\u53EF\u5728\u9019\u908A\u8A2D\u5B9A Authorization
    // \u53D6\u5F97\u66AB\u5B58\u4F7F\u7528\u8005 token
    // const token = localStorage.getItem('token');
    // \u52A0\u5165 token \u81F3 Authorization
    // config.headers.Authorization =  token ? \`Bearer \${token}\` : '';
    return config;
  });
  // \u5275\u5EFA\u97FF\u61C9\u6514\u622A\u5668(\u9084\u672A\u97FF\u61C9\u7D66\u76EE\u6A19)
  instance.interceptors.response.use(config => {
    // \u5728\u8ACB\u6C42\u5B8C\u7562\u6642\u8A2D\u7F6E\u7D50\u675F loading 
    store.commit('setLoading', false)
    return config
  }, e => {
    // \u8A2D\u5B9A\u932F\u8AA4\u8A0A\u606F\uFF0C\u5C07\u932F\u8AA4\u5132\u5B58\u9032 store \u4EE5\u65B9\u4FBF\u9801\u9762\u53D6\u5F97\u8A0A\u606F\u9032\u884C\u63D0\u9192
    const { error } = e.response.data
    store.commit('setError', { status: true, message: error })
    // \u5728\u8ACB\u6C42\u5B8C\u7562\u6642\u8A2D\u7F6E\u7D50\u675F loading 
    store.commit('setLoading', false)
    return Promise.reject(e.response.data)
  })

  // \u7528 promise \u5305\u88DD\uFF0C\u9810\u8A2D\u7121\u53C3\u6578
  export const get = (url, params = {}) => {
    return new Promise((resolve, reject) => {
      instance.get(url, params).then((response) => {
        resolve(response.data)
      }, err => {
        reject(err)
      })
    })
  }
  // \u7528 promise \u5305\u88DD\uFF0C\u9810\u8A2D\u7121\u53C3\u6578
  export const post = (url, data = {}) => {
    return new Promise((resolve, reject) => {
      instance.post(url, data).then((response) => {
        resolve(response.data)
      }, err => {
        reject(err)
      })
    })
  }
  \`\`\`

## \u5168\u5C40\u5C6C\u6027
- \u6709\u6642\u5C08\u6848\u6703\u63A1\u53D6\u76F4\u63A5\u8A2D\u5B9A\u5168\u5C40\u5C6C\u6027\uFF0C\u4EE5\u9054\u5230\u64CD\u4F5C\u4E0A\u7684\u65B9\u4FBF\u6027
- \u4F7F\u7528\u7BC4\u4F8B\uFF1A
  \`\`\`js
  // \u8A2D\u5B9A\u7DB2\u57DF
  axios.defaults.baseURL = 'https://myurl.com'
  // \u8A2D\u5B9A Authorization jwt token
  axios.defaults.headers.common.Authorization = \`Bearer \${token}\`
  // \u8A2D\u5B9A\u5171\u540C header(\u82E5\u6709\u5176\u4ED6 Content-Type \u5C6C\u6027\u9808\u8A2D\u5B9A\uFF0C\u5247\u5EFA\u8B70\u4E0D\u8981\u8A2D\u5B9A)
  axios.defaults.headers.post['Content-Type'] = 'application/json';
  // \u5275\u5EFA\u8ACB\u6C42\u6514\u622A\u5668(\u9084\u672A\u8ACB\u6C42)
  axios.interceptors.request.use(config => {
    return config
  }, e => {
    return Promise.reject(e.response.data)
  })
  // \u5275\u5EFA\u97FF\u61C9\u6514\u622A\u5668(\u9084\u672A\u97FF\u61C9\u7D66\u76EE\u6A19)
  axios.interceptors.response.use(config => {
    return config
  }, e => {
    return Promise.reject(e.response.data)
  })
  // \u7528 promise \u5305\u88DD\uFF0C\u9810\u8A2D\u7121\u53C3\u6578
  export const get = (url, params = {}) => {
    return new Promise((resolve, reject) => {
      axios.get(url, params).then((response) => {
        resolve(response.data)
      }, err => {
        reject(err)
      })
    })
  }
  // \u7528 promise \u5305\u88DD\uFF0C\u9810\u8A2D\u7121\u53C3\u6578
  export const post = (url, data = {}) => {
    return new Promise((resolve, reject) => {
      axios.post(url, data).then((response) => {
        resolve(response.data)
      }, err => {
        reject(err)
      })
    })
  }
  \`\`\`
`;export{n as default};

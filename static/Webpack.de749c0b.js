const n=`## Webpack \u7B46\u8A18
<a id="user-content-top"></a>

### \u76EE\u9304
<details open>
<summary style="cursor: pointer;">&nbsp;\u76EE\u9304\u6E05\u55AE </summary>

- [Webpack \u4ECB\u7D39](#user-content-introduce)
- [\u5B78\u524D\u77E5\u8B58\uFF1AModule](#user-content-module)
- [Webpack \u57FA\u790E\u914D\u7F6E](#user-content-install)
- [entry \u8207 output](#user-content-entry-output)
- [Loader](#user-content-loader)
  - [Loader \u5716\u7247\u914D\u7F6E](#user-content-loader-image)
  - [Loader \u6A23\u5F0F\u8207\u5B57\u9AD4\u914D\u7F6E](#user-content-loader-css-font)
- [Plugins](#user-content-plugins)
- [SourceMap](#user-content-sourcemap)
- [WebpackDevServer \u8207 \u71B1\u6A21\u584A\u66F4\u65B0](#user-content-devserver)
- [Babel](#user-content-babel)
- [Esbuild-loader](#user-content-esbuild-loader)
- [Tree Shaking](#user-content-tree-shaking)
- [\u958B\u767C\u8207\u6253\u5305\u8A2D\u5B9A](#user-content-setting)
- [Code Splitting](#user-content-code-splitting)
- [Caching \u7DE9\u5B58](#user-content-caching)
- [Shimming](#user-content-shimming)
- [Env \u74B0\u5883\u8B8A\u6578](#user-content-env)
- [\u88FD\u4F5C Library](#user-content-library)
- [ESLint \u914D\u7F6E](#user-content-eslint)
- [\u6027\u80FD\u512A\u5316](#user-content-optimization)
- [\u591A\u9801\u9762\u914D\u7F6E](#user-content-multiple-page)
- [\u53C3\u8003\u9023\u7D50](#user-content-link)

</details>

<hr id="user-content-introduce" style="height: 4px;">

#### <a href="#user-content-top" >Webpack \u4ECB\u7D39</a>
- [\u5B98\u7DB2](https://webpack.js.org/)
\`\`\`txt
webpack \u662F\u975C\u614B\u6A21\u584A\u6253\u5305\u5668
webpack \u8655\u7406\u6642\u6703\u5C07\u6240\u6709\u6A21\u584A\u6253\u5305\u6210\u4E00\u6216\u591A\u500B\u6587\u4EF6
\`\`\`

<hr id="user-content-module" style="height: 4px;">

#### <a href="#user-content-top" >Module</a>
- \u7528\u9014\u8207\u5B9A\u7FA9
  - \u5C40\u90E8\u4F5C\u7528\u57DF\u7684\u4EE3\u78BC\u584A
  - \u6A21\u584A\u4E3B\u8981\u89E3\u6C7A\u554F\u984C\u5206\u6790
    - \u5C07\u529F\u80FD\u5207\u5206\u6A21\u584A\u5316
    - \u6D88\u9664\u5168\u5C40\u8B8A\u91CF
    - \u6A21\u584A\u52A0\u8F09\u7684\u9806\u5E8F
- \u4F7F\u7528 \`\`\`script\`\`\` \u52A0\u8F09\u65B9\u5F0F
  \`\`\`html
  <script src="./your.js" type="module"><\/script>
  \`\`\`
- \u5C0E\u51FA\u8207\u5C0E\u5165
  - \u5C0E\u51FA\u8207\u5C0E\u5165\u53EF\u5206\u958B\u5B58\u5728
  - \u88AB\u5C0E\u5165\u7684 \`\`\`module\`\`\` \u90FD\u6703\u5148\u57F7\u884C\u4E00\u6B21
    - \u91CD\u8907\u5C0E\u5165\u591A\u6B21\u4E5F\u53EA\u6703\u57F7\u884C\u4E00\u6B21
  - \u4F7F\u7528\u65B9\u5F0F
  \`\`\`js
  /* 
  1. \u4F7F\u7528 export default \u5C0E\u51FA\u5C0E\u5165
  \u4E00\u500B module \u53EA\u80FD\u6709\u4E00\u500B export default
  \u4F7F\u7528 export default \u5C0E\u51FA\u5247\u5C0E\u5165\u6642\u53EF\u4EE5\u96A8\u610F\u547D\u540D
  */
  // \u5C0E\u51FA
  export default { test:'test' };
  // \u5C0E\u5165
  import m from './module.js'

  /* 
  2. \u4E00\u822C\u5C0E\u51FA\u5C0E\u5165
  \u975E export default \u4E0D\u80FD\u968F\u610F\u547D\u540D
  \u4F7F\u7528\u4E00\u822C\u5C0E\u51FA\u5FC5\u9808\u547D\u540D\u5426\u5247\u5C0E\u5165\u7121\u6CD5\u547C\u53EB
  */
  // \u5C0E\u51FA
  export const age = 18;
  // \u5C0E\u5165
  import { age } from './module.js';

  /*
  3. \u8907\u6578\u5C0E\u51FA\u5C0E\u5165
  \u5C0E\u5165\u6642\u4E0D\u7528\u6309\u7167\u9806\u5E8F\u4F46\u8981\u540C\u540D
  */
  // \u5C0E\u51FA
  function fn() {}
  class className {}
  const age = 18;
  export { fn, className, age };
  // \u5C0E\u5165
  import {age, fn, className} from './module.js'

  /*
  4. \u5C0E\u51FA\u5C0E\u5165\u4F7F\u7528\u5225\u540D
  */
  // \u5C0E\u51FA
  export { fn as func, className, age };
  // \u5C0E\u5165
  import { func, age, className as Person } from './module.js';

  /*
  5. \u6574\u9AD4\u5C0E\u5165
  */
  // \u5C0E\u51FA
  function fn() {}
  class className {}
  const age = 18;
  export { fn, className };
  export default age;
  // \u5C0E\u5165
  import * as test from './module.js'
  // export default \u53EF\u85C9\u7531 test.default \u53D6\u5F97
  console.log(test.default.age)
  // \u4E00\u822C\u5C0E\u51FA\u53D6\u503C\u65B9\u5F0F
  console.log(test.className)

  /*
  6. \u540C\u6642\u5C0E\u5165
  export default \u5FC5\u9808\u5728\u6700\u524D\u9762\u5C31\u5C0E\u5165
  */
  // \u5C0E\u51FA
  function fn() {}
  class className {}
  const age = 18;
  export { fn, className };
  export default age;
  // \u5C0E\u5165
  import age, { func, className } from './module.js';

  /*
  7. \u5C0E\u5165\u8207\u5C0E\u51FA\u7684\u8907\u5408\u5BEB\u6CD5
  \u82E5\u7528\u8907\u5408\u5BEB\u6CD5\u5C0E\u51FA\u7684\u7121\u6CD5\u5728\u7576\u524D\u6A21\u584A\u4F7F\u7528
  */
  // \u5C0E\u51FA
  const age = 18;
  export { age };
  // \u5C0E\u5165
  export { age } from './module.js';
  // \u7B49\u65BC(\u4F46\u7121\u6CD5\u5728\u7576\u524D\u6A21\u584A\u4F7F\u7528)
  import { age } from './module.js';
  export { age };
  \`\`\`
- \u6CE8\u610F\u4E8B\u9805
  - \u6A21\u584A\u5167\u7684 \`\`\`this\`\`\` \u70BA \`\`\`undefined\`\`\` \u4E0D\u70BA \`\`\`window\`\`\`
  - \`\`\`import\`\`\` \u8A9E\u53E5\u53EA\u80FD\u5728\u6700\u9802\u5C64\uFF0C\u57F7\u884C\u6642\u5176\u4ED6\u4EE3\u78BC\u90FD\u672A\u57F7\u884C
  - \u82E5\u8981\u5728\u4EE3\u78BC\u57F7\u884C\u6642\u5C0E\u5165\u5247\u4F7F\u7528 \`\`\`import()\`\`\`
    \`\`\`js
    if (PC) {
      let pcModule = await import('pc.js');
      // \u53D6\u5F97 export default
      console.log(pcModule.default)
    } else if (Mobile) {
      import('mobile.js').then((result)=>{
        // \u53D6\u5F97 export default
        console.log(result.default)
      }).catch();
    }
    \`\`\`

<hr id="user-content-install" style="height: 2px;">

#### <a href="#user-content-top" >\u57FA\u790E\u914D\u7F6E</a>
- \u5B89\u88C5 \`\`\`webpack\`\`\`
  - \`\`\`webpack-cli\`\`\` \u4F7F\u547D\u4EE4\u884C\u57F7\u884C \`\`\`webpack\`\`\` \u7684\u5DE5\u5177
  - \`\`\`-D\`\`\` \u4EE3\u8868 \`\`\`--save-dev\`\`\`
  \`\`\`txt
  \u5B89\u88DD\u6700\u65B0\u7248\u672C: npm install webpack webpack-cli -D
  \u5B89\u88DD\u6307\u5B9A\u7248\u672C: npm install webpack@\u7248\u672C\u865F webpack-cli@\u7248\u672C\u865F -D
  \u89C0\u770B\u5B89\u88DD\u8CC7\u8A0A: npm info webpack
  \`\`\`
- \u914D\u7F6E \`\`\`webpack\`\`\`
  - \u5275\u5EFA \`\`\`webpack.config.js\`\`\` \u6A94\u6848
    \`\`\`javascript
    const path = require('path');
    module.exports = {
      // mode \u9ED8\u8A8D\u70BA production
      // development \u4EE3\u8868\u7DE8\u8B6F\u4E0D\u6DF7\u6DC6\u4E0D\u58D3\u7E2E(\u9ED8\u8A8D\u6DF7\u6DC6\u4E26\u58D3\u7E2E)
      mode: 'development',
      // entry: \u4EE3\u8868\u9700\u8981\u7DE8\u8B6F\u7684\u6A94\u6848\u8DEF\u5F91
      entry: './src/index.js',
      // output: \u8F38\u51FA\u8DEF\u5F91(\u5EFA\u7ACBdist\u8CC7\u6599\u593E\u4E26\u65B0\u589E\u7DE8\u8B6F\u5B8C\u6210\u7684\u6587\u4EF6 bundle.js)
      output: {
        /*
          __dirname \u4EE3\u8868 webpack.config.js \u6240\u5728\u8DEF\u5F91
          path \u4E0D\u5BEB\u4E5F\u6703\u9ED8\u8A8D\u6253\u5305\u65BCdist\u76EE\u9304
          path \u5FC5\u9808\u70BA\u7D55\u5C0D\u8DEF\u5F91
        */
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
      }
    };
    \`\`\`
  - \u5728 \`\`\`package.json\`\`\` \u6DFB\u52A0\u914D\u7F6E
    - \u6DFB\u52A0 \`\`\` "private": true\`\`\` \u4E0D\u767C\u4F48\u5230 \`\`\`npm\`\`\` \u5009\u5EAB 
    - \u5728 \`\`\` scripts\`\`\` \u6DFB\u52A0 \`\`\`webpack\`\`\` \u7684\u547D\u4EE4
      - \u4F7F\u7528 \`\`\`scripts\`\`\` \u53EF\u7C21\u5316\u57F7\u884C\u8A9E\u53E5 
      \`\`\`txt
      webpack \u9ED8\u8A8D\u8A2D\u5B9A\u57F7\u884C\u6587\u4EF6: webpack.config.js 
      \u82E5\u8981\u6539\u5176\u4ED6\u540D\u5B57\u5247\u53EF\u7528 --config
      \u4EE5\u4E0B\u5169\u53E5\u6307\u4EE4\u76F8\u7B49
      "webpack": "webpack --config webpack.config.js" 
      "webpack": "webpack" 
      \`\`\`
- \u7DE8\u8B6F\u57F7\u884C\uFF1A\`\`\`npm run webpack\`\`\`

<hr id="user-content-entry-output" style="height: 2px;">

#### <a href="#user-content-top" >entry \u8207 output</a>
- entry \u70BA\u5165\u53E3\uFF0Coutput \u70BA\u51FA\u53E3
  \`\`\`js
  // entry
  // \u55AE\u5165\u53E3(\u9ED8\u8A8D\u5165\u53E3\u540D\u70BA main)
  entry: './src/index.js',
  // \u591A\u5165\u53E3
  entry: {
    main: './src/index.js',
    search: './src/search.js'
  },
  // output
  // \u82E5\u53EA\u6709\u55AE\u5165\u53E3
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  }
  /*
    \u82E5\u6709\u591A\u5165\u53E3
    [name] \u6703\u6BD4\u5C0D\u53D6\u5F97\u5165\u53E3\u7684\u540D\u5B57
    \u6BD4\u5982\u5728 entry \u5B9A\u7FA9 search \u5165\u53E3\uFF0C\u5247\u6703\u8F38\u51FA search.js
  */
  output: {
    // \u82E5\u8981\u653E\u5728\u4F3A\u670D\u5668\u4E0A\uFF0C\u53EF\u7528 publicPath \u52A0\u4E0A\u7DB2\u5740\u524D\u7DB4
    publicPath: 'http://yourDomain',
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js'
  }
  \`\`\`
<hr id="user-content-loader" style="height: 2px;">

#### <a href="#user-content-top" >Loader</a>
- \u5B98\u7DB2\uFF1A[loader](https://webpack.js.org/loaders/)
- \u76EE\u7684\uFF1A\`\`\`loader\`\`\` \u80FD\u8B93 \`\`\`webpack\`\`\` \u8655\u7406\u975E JS \u6587\u4EF6\u7684\u6A21\u584A
- \`\`\`loader\`\`\` \u8655\u7406\u9806\u5E8F\u70BA\u5F9E\u4E0B\u5230\u4E0A\u3001\u5F9E\u53F3\u5230\u5DE6
- \u65BC \`\`\`webpack.config.js\`\`\` \u4EE5\u4E0B\u4F4D\u7F6E\u914D\u7F6E
  \`\`\`js
  module: {
      rules: [
        {
          test: /\\.css$/,
          // loaders \u914D\u7F6E\u4F4D\u7F6E
          use: []
        },
      ]
    },
  \`\`\`
- \`\`\`Asset Modules\`\`\` \u529F\u80FD\u4F7F\u7528
  - [\u5B98\u7DB2\u4ECB\u7D39](https://webpack.js.org/guides/asset-modules/)
  - \`\`\`asset\`\`\` \u5C0D\u61C9 \`\`\`url-loader\`\`\`
  - \`\`\`asset/inline\`\`\` \u5C0D\u61C9 \`\`\`url-loader\`\`\`\uFF0C\u50CF\u662F\u6CE8\u5165\u5728\u6A94\u6848\u88E1\u9762\uFF0C\u985E\u4F3C\u5167\u90E8\u9023\u7D50
  - \`\`\`asset/resource\`\`\` \u5C0D\u61C9 \`\`\`file-loader\`\`\`\uFF0C\u7528\u9014\u504F\u5411\u642C\u79FB\u6A94\u6848\u4E26\u5916\u90E8\u9023\u7D50\u5230\u8A72\u6A94\u6848
  - \`\`\`asset/source\`\`\` \u5C0D\u61C9 \`\`\`raw-loader\`\`\`

<hr id="user-content-loader-image" style="height: 2px;">

#### <a href="#user-content-top" >Loader \u5716\u7247\u914D\u7F6E</a>
- \u5B89\u88DD\u4F9D\u8CF4
  \`\`\`txt
  npm install html-loader image-webpack-loader -D
  \`\`\`
- \u5728 \`\`\`webpack.config.js\`\`\` \u914D\u7F6E
  \`\`\`js
  {
    test: /\\.(html)$/,
    // \u4F7F\u7528 html-loader \u8F49\u63DB html \u6587\u4EF6\u5167\u5716\u7247\u9023\u7D50
    loader: 'html-loader',
    options: {
      sources: {
        list: [
          // \u6AA2\u6E2C html \u6A19\u7C64\u662F\u5426\u4F7F\u7528\u7279\u5B9A\u5C6C\u6027\u4E26\u66FF\u63DB\u6B63\u78BA\u5716\u7247\u8DEF\u5F91
          {
            tag: "option",
            attribute: 'title',
            type: 'src',
          },
          {
            tag: "img",
            attribute: "src",
            type: "src",
          },
        ]
      }
    }
  },
  {
    // \u5165\u53E3\u6AA2\u6E2C\u7B26\u5408\u898F\u5247\u7684\u6A94\u540D
    test: /\\.(png|jpe?g|gif|svg)$/,
    // url-loader \u65BC webpack5 \u68C4\u7528\uFF0C\u6539\u7528\u4EE5\u4E0B\u914D\u7F6E
    type: 'asset/resource',
    generator: {
      /*
        [name]:\u4F7F\u7528\u539F\u6A94\u6848\u540D
        [hash]:\u8A72\u6B21\u6253\u5305\u7684\u54C8\u5E0C\u503C
        [contenthash]:\u5716\u7247\u5167\u5BB9\u7684\u54C8\u5E0C\u503C
        [ext]:\u4F7F\u7528\u539F\u526F\u6A94\u540D(\u524D\u9762\u6703\u81EA\u52D5\u52A0\u4E0A".")
      */
      filename: \`[name].[contenthash][ext]\`
    },
    // \u82E5\u9700\u4F7F\u7528\u591A\u500B loader \u5247\u4F7F\u7528 use \u6578\u7D44
    use: [{
      // \u4F7F\u7528\u6307\u5B9A\u7684 loader
      // \u4F7F\u7528 image-webpack-loader \u5C07\u5716\u7247\u58D3\u7E2E
      loader: 'image-webpack-loader',
      options: {
        // \u53EA\u5728 production \u74B0\u5883\u555F\u7528\u5716\u7247\u58D3\u7E2E
        disable: mode === 'production' ? false : true,
        // \u8F38\u51FA\u81F3\u6307\u5B9A\u76EE\u9304\u4E0B
				// outputPath: 'images/',
        mozjpeg: {
          progressive: true,
          quality: 75,
        },
        optipng: {
          enabled: false, // \u8868\u793A\u4E0D\u555F\u7528\u9019\u4E00\u500B\u5716\u7247\u512A\u5316\u5668
        },
        pngquant: {
          quality: [0.65, 0.9],
          speed: 4,
        },
        gifsicle: {
          interlaced: false,
        },
        webp: {
          quality: 75, // \u914D\u7F6E\u9078\u9805\u8868\u793A\u555F\u7528 WebP \u512A\u5316\u5668
        },
      },
    }]
  }
  \`\`\`
- \u6700\u5F8C\u5728\u6307\u5B9A\u7684 \`\`\`js\`\`\` \u6587\u4EF6\u5F15\u5165\u5373\u53EF
  \`\`\`js
  import './avatar.jpg';
  \`\`\`

<hr id="user-content-loader-css-font" style="height: 2px;">

#### <a href="#user-content-top" >Loader \u6A23\u5F0F\u8207\u5B57\u9AD4\u914D\u7F6E</a>
- \u4EE5\u4E0B\u6709\u5169\u7A2E\u65B9\u5F0F\u5B89\u88DD\u8207 \`\`\`webpack.config.js\`\`\` \u914D\u7F6E
  - \u7B2C\u4E00\u7A2E\u5C07\u6574\u5408\u7684 \`\`\`css\`\`\` \u5167\u5BB9\u52A0\u5165 \`\`\`head style\`\`\` \u6A19\u7C64\u5167
    - \u5B89\u88DD\u7B2C\u4E09\u65B9\u4F9D\u8CF4
      \`\`\`txt
      npm install style-loader css-loader \\
      sass-loader node-sass \\
      postcss-loader autoprefixer -D
      \`\`\`
    - \`\`\`webpack.config.js\`\`\` \u914D\u7F6E
      \`\`\`js
      {
        /*
          loader \u8655\u7406\u9806\u5E8F\u70BA\u5F9E\u4E0B\u5230\u4E0A\u3001\u5F9E\u53F3\u5230\u5DE6
          style-loader \u5C07\u6574\u5408\u7684 css \u5167\u5BB9\u52A0\u5165 head style \u6A19\u7C64\u5167
          css-loader \u5C07\u591A\u500Bcss\u6A94\u6848\u7684\u95DC\u4FC2\u6574\u5408\u6210\u4E00\u500Bcss\u6A94\u6848
          sass-loader \u9700\u8981\u5B89\u88DD sass-loader \u8207 node-sass
          postcss-loader \u9700\u8981\u914D\u7F6E postcss.config.js \u6587\u4EF6
          autoprefixer \u81EA\u52D5\u52A0\u4E0A\u5EE0\u5546\u524D\u7DB4\u5982:webkit
        */
        
        test: /\\.scss$/,
        use: [
          'style-loader', 
          // loader \u82E5\u8981\u589E\u52A0\u914D\u7F6E\u5247\u7528\u5C0D\u8C61\u65B9\u6CD5
          {
            loader: 'css-loader',
            options: {
              // \u4EE3\u8868\u5728\u4F7F\u7528\u524D\u5FC5\u9808\u5148\u8DD1\u5169\u500Bloader(sass-loader\u3001postcss-loader)
              importLoaders: 2,
              // \u6A23\u5F0F\u6A21\u584A\u5316\uFF0C\u4F7F\u6BCF\u500B\u9801\u9762\u6A23\u5F0F\u4E0D\u6703\u4E92\u76F8\u5F71\u97FF
              modules: true
            }
          }, 
          'sass-loader',
          'postcss-loader'
        ]
      }
      \`\`\`
  - \u7B2C\u4E8C\u7A2E\u5C07 \`\`\`css\`\`\` \u5167\u5BB9\u6A94\u6848\u58D3\u7E2E
    - \u5B89\u88DD\u7B2C\u4E09\u65B9\u4F9D\u8CF4
      \`\`\`txt
      npm install css-loader \\
      sass-loader node-sass \\
      postcss-loader autoprefixer \\
      mini-css-extract-plugin \\
      css-minimizer-webpack-plugin -D
      \`\`\`
    - \`\`\`webpack.config.js\`\`\` \u914D\u7F6E
      \`\`\`js
      const MiniCssExtractPlugin = require('mini-css-extract-plugin');
      const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
      module: {
          rules: [
          {
            /*
              loader \u8655\u7406\u9806\u5E8F\u70BA\u5F9E\u4E0B\u5230\u4E0A\u3001\u5F9E\u53F3\u5230\u5DE6
              css-loader \u5C07\u591A\u500Bcss\u6A94\u6848\u7684\u95DC\u4FC2\u6574\u5408\u6210\u4E00\u500Bcss\u6A94\u6848
              sass-loader \u9700\u8981\u5B89\u88DD sass-loader \u8207 node-sass
              postcss-loader \u9700\u8981\u914D\u7F6E postcss.config.js \u6587\u4EF6
              autoprefixer \u81EA\u52D5\u52A0\u4E0A\u5EE0\u5546\u524D\u7DB4\u5982:webkit
            */
            test: /\\.scss$/,
            use: [
              MiniCssExtractPlugin.loader, 
              // loader \u82E5\u8981\u589E\u52A0\u914D\u7F6E\u5247\u7528\u5C0D\u8C61\u65B9\u6CD5
              {
                loader: 'css-loader',
                options: {
                  // \u4EE3\u8868\u5728\u4F7F\u7528\u524D\u5FC5\u9808\u5148\u8DD1\u5169\u500Bloader(sass-loader\u3001postcss-loader)
                  importLoaders: 2,
                  // \u6A23\u5F0F\u6A21\u584A\u5316\uFF0C\u4F7F\u6BCF\u500B\u9801\u9762\u6A23\u5F0F\u4E0D\u6703\u4E92\u76F8\u5F71\u97FF
                  modules: true
                }
              },
              'sass-loader',
              'postcss-loader'
            ]
          }
        ]
      },
      optimization: {
        minimizer: [
          // \u5C07 css \u6A94\u6848\u9032\u884C\u58D3\u7E2E
          new CssMinimizerPlugin()
        ],
      },
      plugins: [
        new MiniCssExtractPlugin({
          filename: \`[name].[\${useHash}].css\`,
          chunkFilename: \`[name].[\${useHash}].chunk.css\`
        }),
      ]
      \`\`\`
- \u5B57\u9AD4\u6587\u4EF6\u914D\u7F6E
  - \u5C07 \`\`\`eot\u3001svg\u3001ttf\u3001woff\`\`\` \u5B57\u9AD4\u6587\u4EF6\u52A0\u5165\u6307\u5B9A\u8CC7\u6599\u593E
  - \`\`\`webpack.config.js\`\`\` \u914D\u7F6E
    \`\`\`js
    {
      test: /\\.(eot|ttf|svg)$/,
      type: 'asset/resource',
    },
    \`\`\`
  - \`\`\`index.scss\`\`\` \u914D\u7F6E(\u6A94\u540D\u81EA\u884C\u66FF\u63DB)
    \`\`\`scss
    @font-face {
      font-family: "iconfont";
      src: url('./font/iconfont.eot?t=1543245201565'); /* IE9*/
      src: url('./font/iconfont.eot?t=1543245201565#iefix') format('embedded-opentype'), /* IE6-IE8 */
      url('data:application/x-font-woff;charset=utf-8;base64,data') format('woff'),
      url('./font/iconfont.ttf?t=1543245201565') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+*/
      url('./font/iconfont.svg?t=1543245201565#iconfont') format('svg'); /* iOS 4.1- */
    }

    .iconfont {
      font-family:"iconfont" !important;
      font-size:16px;
      font-style:normal;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }

    .icon-changjingguanli:before { content: "\\eb61"; }

    .icon-fenxiangfangshi:before { content: "\\eb62"; }
    \`\`\`
- \`\`\`postcss-loader\`\`\` \u9700\u8981\u5275\u5EFA \`\`\`postcss.config.js\`\`\` \u6587\u4EF6
  \`\`\`js
  module.exports = {
    plugins: [
      require('autoprefixer')
    ]
  }
  \`\`\`
- \u6700\u5F8C\u5728\u6307\u5B9A\u7684 \`\`\`js\`\`\` \u6587\u4EF6\u5F15\u5165\u5373\u53EF
  \`\`\`js
  import './index.scss';
  \`\`\`

<hr id="user-content-plugins" style="height: 2px;">

#### <a href="#user-content-top" >Plugins</a>
- \u4F7F \`\`\`webpack\`\`\` \u53EF\u4EE5\u57F7\u884C\u66F4\u5EE3\u6CDB\u7684\u4EFB\u52D9
- \u65BC \`\`\`webpack.config.js\`\`\` \u4EE5\u4E0B\u4F4D\u7F6E\u914D\u7F6E
  \`\`\`js
  plugins:[
	  // plugins
  ],
  \`\`\`
- \u4EE5 \`\`\`html-webpack-plugin\`\`\` \u8207 \`\`\`clean-webpack-plugin\`\`\` \u70BA\u7BC4\u4F8B
  - \u5B89\u88DD\u4F9D\u8CF4
    \`\`\`txt
    npm install html-webpack-plugin clean-webpack-plugin -D
    \`\`\`
  - \`\`\`webpack.config.js\`\`\` \u914D\u7F6E
    \`\`\`js
    const HtmlWebpackPlugin = require('html-webpack-plugin');
    const { CleanWebpackPlugin } = require('clean-webpack-plugin');
    plugins: [
      // \u8A2D\u5B9A\u589E\u52A0\u9700\u8981\u986F\u793A\u7684\u9801\u9762
      new HtmlWebpackPlugin({
        // \u539F\u8CC7\u6599\u6A94\u6848
        template: './src/index.html',
        // \u8F38\u51FA\u6A94\u6848\u540D
        filename: 'index.html',
        // \u8A2D\u5B9A\u9700\u8981\u7684\u8CC7\u6E90(entry)
        chunks: ['main'],
        minify: {
          // \u5220\u9664 html \u4E2D\u7684\u8A3B\u91CB
          removeComments: true,
          // \u5220\u9664 html \u4E2D\u7684\u7A7A\u683C
          collapseWhitespace: true,
          // \u5220\u9664 html \u6A19\u7C64\u7684\u96D9\u5F15\u865F
          removeAttributeQuotes: true,
          // \u5C07 html \u6587\u4EF6\u5167\u7684 css \u58D3\u7E2E
          minifyCSS: true,
          // \u5C07 html \u6587\u4EF6\u5167\u7684 js \u58D3\u7E2E
          minifyJS: true
        }
      }),
      // \u522A\u9664\u539F\u672C\u6253\u5305\u6A94\u6848\u518D\u91CD\u65B0\u6253\u5305
      new CleanWebpackPlugin({
        cleanAfterEveryBuildPatterns: ['dist']
      })
    ],
    \`\`\`
<hr id="user-content-sourcemap" style="height: 2px;">

#### <a href="#user-content-top" >SourceMap</a>
- [\u5B98\u7DB2\u4ECB\u7D39](https://webpack.js.org/configuration/devtool/)
- \u7528\u9014\uFF1A\u5728\u6253\u5305\u5F8C\u7684\u6A94\u6848\u4E2D\u627E\u51FA\u539F\u6A94\u6848\u7684\u6620\u5C04\u932F\u8AA4\u4F4D\u7F6E
- \u5E38\u7528\u914D\u7F6E
  - \`\`\`mode: development\`\`\`\uFF1A\`\`\`devtool: 'cheap-module-eval-source-map'\`\`\`
  - \`\`\`mode: production\`\`\`\uFF1A\`\`\`devtool: 'cheap-module-source-map'\`\`\`
- \u8AAA\u660E
  - \`\`\`source-map\`\`\`\uFF1A\u7528\u4F86\u751F\u6210 \`\`\`.map\`\`\` \u6587\u4EF6\u5C0D\u61C9\u4F4D\u7F6E
  - \`\`\`inline-source-map\`\`\`\uFF1A\u5C07\u5C0D\u61C9\u95DC\u4FC2\u5BEB\u9032 \`\`\`.js \`\`\`\u88E1\u9762(\u901A\u5E38\u70BA\u5E95\u90E8)
  - \`\`\`cheap\`\`\`\uFF1A\u6307\u7CBE\u6E96\u5230\u884C\u4F46\u4E0D\u7BA1\u5728\u7B2C\u5E7E\u500B\u5B57\uFF0C\u53EA\u8CA0\u8CAC\u89C0\u5BDF\u696D\u52D9\u4EE3\u78BC\u88E1\u7684\u932F\u8AA4
  - \`\`\`module\`\`\`\uFF1A\u89C0\u5BDFloader\u88E1\u9762\u7684\u932F\u8AA4
  - \`\`\`eval\`\`\`\uFF1A\u5C07\u5C0D\u61C9\u95DC\u4FC2\u4F7F\u7528 \`\`\`js eval\`\`\` \u65B9\u5F0F\u6253\u5305
- \u65BC \`\`\`webpack.config.js\`\`\` \u914D\u7F6E
  \`\`\`js
  devtool: 'cheap-module-eval-source-map',
  \`\`\`

<hr id="user-content-devserver" style="height: 2px;">

#### <a href="#user-content-top" >WebpackDevServer \u8207 \u71B1\u6A21\u584A\u66F4\u65B0</a>
- [\u5B98\u7DB2 devServer \u4ECB\u7D39](https://webpack.js.org/configuration/dev-server/)
- \u71B1\u6A21\u584A\u66F4\u65B0\u4ECB\u7D39
  - [Guides](https://webpack.js.org/guides/hot-module-replacement/)
  - [Api](https://webpack.js.org/guides/hot-module-replacement/)
  - [\u539F\u7406](https://webpack.js.org/concepts/hot-module-replacement/)
- \u7528\u9014\uFF1A\u958B\u767C\u6E2C\u8A66\u7528\uFF0C\u907F\u514D\u591A\u6B21\u624B\u52D5\u6253\u5305
- \u5B89\u88DD\u4F9D\u8CF4
  \`\`\`txt
  npm install webpack-dev-server -D
  \`\`\`
- \u5728 \`\`\`webpack.config.js\`\`\` \u914D\u7F6E
  - [proxy \u8ACB\u6C42\u8F49\u767C\u4ECB\u7D39](https://webpack.js.org/configuration/dev-server/#devserverproxy)

  \`\`\`js
  devServer: {
    // \u81EA\u52D5\u6253\u958B\u6307\u5B9A\u9801\u9762
    open: ['/F2_A.html'],
    // \u5075\u6E2C\u6587\u4EF6\u662F\u5426\u4FEE\u6539\uFF0C\u4E26\u81EA\u52D5 reload
    watchFiles: ['src/**/*'],
    compress: true,
    port: 8699,
    hot: true
    proxy: {
      /*
        \u7576 webpack \u4F7F\u7528\u76F8\u5C0D\u8DEF\u5F91\u6642\uFF0C\u85C9\u7531proxy\u53EF\u4EE5\u8F49\u767C\u5230\u7279\u5B9A\u7DB2\u5740
        \u5982\uFF1A
          axios.get('/react/api/header.json').then((res) => {
            console.log(res);
          })
      */ 
      '/react/api': {
        target: 'https://www.dell-lee.com',
        // \u82E5url\u70BAhttps\u958B\u982D\uFF0C\u5247\u9700\u8981\u8A2D\u5B9A false \u624D\u80FD\u8F49\u767C
        secure: false,
        // \u82E5\u5F8C\u7AEF\u7D66\u66AB\u6642\u7528\u7684url\uFF0C\u53EF\u4EE5\u4F7F\u7528\u8A72\u65B9\u5F0F\u66AB\u6642\u53D6\u4EE3api\u8DEF\u5F91
        pathRewrite: {
          'header.json': 'demo.json'
        },
        // \u64FA\u812B\u8F49\u767C\u7684server Origin \u9650\u5236
        changeOrigin: true,
        // \u81EA\u5B9A\u7FA9\u8ACB\u6C42\u982D
        headers: {
          host: 'www.dell-lee.com',
        }
      }
    }
  },
  \`\`\`
- \u5728 \`\`\`package.json\`\`\` \u52A0\u4E0A
  \`\`\`txt
  "scripts": {
    "start": "webpack serve",
  }
  \u82E5\u6709\u6307\u5B9A\u6A94\u6848\u8A2D\u5B9A\uFF0C\u53EF\u4F7F\u7528 --config \u5207\u63DB\u81F3\u6307\u5B9A\u6A94\u6848\u8A2D\u5B9A
  "scripts": {
    "start": "webpack serve --config ./build/webpack.dev.js"
  }
  \`\`\`
- \u958B\u555F \`\`\`devServer\`\`\`\uFF1A\`\`\`npm run start\`\`\`
- \u82E5\u9808\u6AA2\u6E2C\u662F\u5426\u958B\u555F\u71B1\u66F4\u65B0\u53EF\u5728 \`\`\`js\`\`\` \u52A0\u5165
  \`\`\`js
  // \u5982\u679C\u555F\u52D5\u71B1\u6A21\u584A
  if(module.hot) {
    // \u76E3\u6E2C\u8A72number.js\u6587\u4EF6\u662F\u5426\u66F4\u52D5
    module.hot.accept('./number', () => {
      // \u82E5\u66F4\u52D5\u5247\u57F7\u884C\u4EE5\u4E0B\u52D5\u4F5C
      // ...
    })
  }
  \`\`\`

<hr id="user-content-babel" style="height: 2px;">

#### <a href="#user-content-top" >Babel</a>
- \u4ECB\u7D39
  - \u5B98\u7DB2\uFF1A[babel](https://babeljs.io/)
  - \u7DDA\u4E0A\u7DE8\u8B6F\uFF1A[babel-online](https://babeljs.io/repl)
  \`\`\`txt
  Babel \u662F JavaScript \u7684\u7DE8\u8B6F\u5668
  \u7528\u4F86\u5C07 ES6 \u7684\u4EE3\u78BC\uFF0C\u8F49\u63DB\u6210 ES6 \u4E4B\u524D\u7684\u4EE3\u78BC

  \u4F46\u5C0D\u65BC ES6 \u65B0\u589E\u7684 API\uFF0C\u5982 Set\u3001Map\u3001Promise \u7B49\u5168\u5C40\u5C0D\u8C61
  \u53CA\u4E00\u4E9B\u5B9A\u7FA9\u5728\u5168\u5C40\u5C0D\u50CF\u4E0A\u7684\u65B9\u6CD5\uFF08\u6BD4\u5982 Object.assign/Array.from\uFF09
  \u90FD\u4E0D\u80FD\u76F4\u63A5\u7DE8\u8B6F\uFF0C\u9700\u8981\u85C9\u52A9\u5176\u5B83\u7684\u6A21\u584A
  Babel \u4E00\u822C\u9700\u914D\u5408 Webpack \u4F86\u7DE8\u8B6F\u6A21\u584A\u8A9E\u6CD5
  \`\`\`
- \u4F7F\u7528\u65B9\u6CD5
  - [\u5B98\u65B9\u5B89\u88DD\u8AAA\u660E](https://babeljs.io/setup#installation)
  - \u5B89\u88C5 \`\`\`Babel\`\`\`
    - \u82E5\u662F \`\`\`TypeScript\`\`\` \u5C08\u6848\uFF0C\u5247 \`\`\`babel-loader\`\`\` \u66FF\u63DB\u6210 \`\`\`typescript-loader\`\`\`
    \`\`\`txt
    npm i babel-loader @babel/core @babel/preset-env -D
    \`\`\`
  - \u8AAA\u660E
    - \`\`\`babel-loader\`\`\`\uFF1ABabel \u548C webpack \u50B3\u8F38\u6A94\u6848\u901A\u9053\u3002
    - \`\`\`@babel/core\`\`\`\uFF1A\u5C07es6\u4EE5\u4E0A\u4EE3\u78BC\u8F49\u63DBAST\u518D\u8F49\u63DB\u6210es5\u4EE3\u78BC
    - \`\`\`@babel/preset-env\`\`\`\uFF1A\u542Bes6\u4EE5\u4E0A\u8F49\u63DBes5\u7684\u898F\u5247
  - \u6587\u4EF6\u914D\u7F6E
    - \u5728 \`\`\`webpack.config.js\`\`\` \u914D\u7F6E
      \`\`\`js
      {
        test: /\\.js$/,
        // exclude: \u4EE3\u8868\u8A72\u8DEF\u5F91\u5E95\u4E0B\u7684\u6587\u4EF6\u4E0D\u7528\u8F49\u8B6F
        exclude: /node_modules/, 
        loader: 'babel-loader',
      }
      \`\`\`
  - \u5275\u5EFA \`\`\`.babelrc\`\`\` \u6587\u4EF6
    - [babel-preset-env](https://babeljs.io/docs/en/babel-preset-env)
    \`\`\`js
    {
      "presets": [
        "@babel/preset-env",
        // \u53EF\u6307\u5B9A\u700F\u89BD\u5668\u7248\u672C\uFF0C\u53EF\u7701\u7565
        { 
          targets: {
            "chrome": "58",
            "ie": "11"
          },
          useBuiltIns: 'usage'
        }
      ],
    }
    \`\`\`

<hr id="user-content-esbuild-loader" style="height: 2px;">

#### <a href="#user-content-top" >Esbuild-loader</a>
- [\u5B98\u65B9 Github](https://github.com/privatenumber/esbuild-loader)
- \u4F7F\u7528\u65B9\u6CD5
  - \u5B89\u88DD\u4F9D\u8CF4\uFF1A\`\`\`npm i esbuild-loader -D\`\`\`
  - \u5728 \`\`\`webpack.config.js\`\`\` \u914D\u7F6E
    - [target \u8AAA\u660E](https://github.com/privatenumber/esbuild-loader#target)
    \`\`\`js
    // Javascript \u914D\u7F6E
    {
      test: /\\.js$/,
      loader: 'esbuild-loader',
      options: {
        // \u82E5\u6C92\u6709\u4F7F\u7528JSX\u8A9E\u6CD5\u5247\u79FB\u9664
        loader: 'jsx',
        target: 'es2015'
      }
    },

    // TypeScript \u914D\u7F6E
    // \u82E5\u6709 tsconfig.json \u6587\u4EF6\uFF0Cloader \u6703\u81EA\u52D5\u9032\u884C\u6AA2\u6E2C
    {
      test: /\\.tsx?$/,
      loader: 'esbuild-loader',
      options: {
        loader: 'ts', // tsx
        target: 'es2015',
        // \u53EF\u6307\u5B9A TypeScript \u8A2D\u5B9A\u6587\u4EF6
        // tsconfigRaw: require('./tsconfig.json')
      }
    },
    /*
      \u4F9D\u5B98\u65B9\u8AAA\u660E\uFF0C\u82E5\u55AE\u7D14\u53EA\u7528 js \u4E26\u7121\u4F7F\u7528\u5176\u4ED6\u63D2\u4EF6
      \u5247\u53EA\u9700\u52A0\u5165\u6B64\u6BB5\u8A2D\u5B9A\u5373\u53EF
    */
    const { ESBuildMinifyPlugin } = require('esbuild-loader')
    optimization: {
      minimizer: [
        new ESBuildMinifyPlugin({
          target: 'es2015'
        })
      ]
    },
    \`\`\`

<hr id="user-content-tree-shaking" style="height: 2px;">

#### <a href="#user-content-top" >Tree Shaking</a>
- \u7528\u9014\uFF1A\u522A\u9664\u4E0D\u5FC5\u8981\u7684\u7A0B\u5F0F\u78BC\uFF0C\u6E1B\u5C0F\u6253\u5305\u9AD4\u7A4D
- \u53EA\u4F5C\u7528\u65BC \`\`\`ESModule\`\`\` \u8A9E\u6CD5
- \u6709\u5206\u5169\u7A2E\u5C64\u7D1A\uFF1A\`\`\`modules-level\`\`\`\u3001\`\`\`statements-level\`\`\`
- \`\`\`modules-level\`\`\`
  - \u4F5C\u7528\u65BC\u6574\u500B\u6A21\u584A\uFF0C\u82E5\u8A72\u6A21\u584A\u672A\u88AB\u4F7F\u7528\u5247\u6574\u500B\u6A21\u584A\u6703\u88AB\u522A\u9664
  - \u8981\u5728 \`\`\`development\`\`\` \u4F7F\u7528\uFF0C\u9808\u8A2D\u7F6E \`\`\`optimization.sideEffects = true\`\`\`\uFF0C\`\`\`production\`\`\` \u9ED8\u8A8D\u70BA \`\`\`true\`\`\`
  - \u53E6\u5916\u9700\u5728 \`\`\`package.json\`\`\` \u8A2D\u5B9A \`\`\`sideEffects\`\`\`
    - \u53EF\u8A2D\u5B9A\u5FFD\u7565\u6307\u5B9A\u6587\u4EF6 \`\`\`sideEffects=["*.css"]\`\`\` 
    - \u9ED8\u8A8D\u70BA \`\`\`false\`\`\` \u4EE3\u8868\u4E0D\u7528\u5FFD\u7565\u4EFB\u4F55\u6587\u4EF6\uFF0C\u82E5\u8A2D\u5B9A \`\`\`true\`\`\` \u5247 \`\`\`webpack\`\`\` \u6703\u81EA\u52D5\u5206\u6790\u662F\u5426\u6709\u526F\u4F5C\u7528
- \`\`\`statements-level\`\`\`
  - \u4F5C\u7528\u65BC\u6A21\u584A\u5167\u8A9E\u53E5\uFF0C\u82E5\u8A72 \`\`\`import/export\`\`\` \u672A\u88AB\u4F7F\u7528\u5247\u6703\u88AB\u522A\u9664
  - \u8981\u5728 \`\`\`development\`\`\` \u4F7F\u7528\uFF0C\u9808\u8A2D\u7F6E
    - \`\`\`optimization.usedExports = true\`\`\`
    - \`\`\`optimization.minimize = true\`\`\`
    - \u4EE5\u4E0A\u8A2D\u7F6E \`\`\`production\`\`\` \u90FD\u9ED8\u8A8D\u70BA \`\`\`true\`\`\`

<hr id="user-content-setting" style="height: 2px;">

#### <a href="#user-content-top" >\u958B\u767C\u8207\u6253\u5305\u8A2D\u5B9A</a>
- \u7528\u9014\uFF1A\u7121\u9808\u66F4\u6539\u540C\u9801\u9762\u8A2D\u5B9A\uFF0C\u4E26\u63D0\u9AD8\u958B\u767C\u6548\u7387
- \u8A2D\u5B9A\u6D41\u7A0B
  - \u5B89\u88DD\u5408\u4F75\u7684\u4F9D\u8CF4\u5305\uFF1A\`\`\`npm install webpack-merge -D\`\`\`
  - \u5275\u5EFA\u4E09\u500B\u6587\u4EF6\uFF0C\u4E26\u4F7F\u7528\u4F9D\u8CF4\u9032\u884C\u5408\u4F75\u5171\u7528\u8A2D\u5B9A
    - \u958B\u767C\u7528\u8A2D\u5B9A\uFF1A\`\`\`webpack.dev.js\`\`\`
      \`\`\`js
      const commonConfig = require('./webpack.common.js');
      const { merge } = require('webpack-merge')

      const devConfig = {
        devServer: {
          // \u81EA\u52D5\u6253\u958B\u6307\u5B9A\u9801\u9762
          open: ['/your.html'],
          // \u5075\u6E2C\u6587\u4EF6\u662F\u5426\u4FEE\u6539\uFF0C\u4E26\u81EA\u52D5 reload
          watchFiles: ['src/**/*'],
          compress: true,
          port: 8699,
          hot: true
        },
        optimization: {
          usedExports: true,
        },
      }
      // \u4F7F\u7528 merge \u5408\u4F75\u5171\u7528\u8A2D\u5B9A
      module.exports = merge(commonConfig, devConfig);
      \`\`\`
    - \u6B63\u5F0F\u6253\u5305\u7528\u8A2D\u5B9A\uFF1A\`\`\`webpack.prod.js\`\`\`
      - \u5B89\u88DD\u4F9D\u8CF4\uFF1A\`\`\`npm i clean-webpack-plugin -D\`\`\`
      \`\`\`js
      const commonConfig = require('./webpack.common.js');
      const { merge } = require('webpack-merge')
      // \u91CD\u65B0\u6253\u5305\u6642\u4F7F\u7528
      const { CleanWebpackPlugin } = require('clean-webpack-plugin');

      const proConfig = {
        plugins: [
          // \u522A\u9664\u539F\u672C\u6253\u5305\u6A94\u6848\u518D\u91CD\u65B0\u6253\u5305
          new CleanWebpackPlugin({
            cleanAfterEveryBuildPatterns: ['yourPackage']
          })
        ]
      }

      module.exports = merge(commonConfig, proConfig);
      \`\`\`
    - \u5171\u540C\u7684\u8A2D\u5B9A\uFF1A\`\`\`webpack.common.js\`\`\`
  - \u8A2D\u5B9A \`\`\`package.json script\`\`\`
    \`\`\`txt
    "webpack": "webpack --config ./build/webpack.prod.js",
    "dev": "webpack serve --config ./build/webpack.dev.js"
    \`\`\`

<hr id="user-content-code-splitting" style="height: 2px;">

#### <a href="#user-content-top" >Code Splitting</a>
- \`\`\`Code Splitting(\u4EE3\u78BC\u5207\u5272)\`\`\` \u8207 \`\`\`webpack\`\`\` \u7121\u76F4\u63A5\u95DC\u4FC2
- \u7528\u9014\uFF1A\u5C07\u4EE3\u78BC\u62C6\u5206\u53EF\u4EE5\u7BC0\u7701\u4E0B\u8F09\u7684\u6D41\u91CF(\u53EA\u4E0B\u8F09\u66F4\u6539\u7684\u90E8\u5206)
- \`\`\`webpack\`\`\` \u5BE6\u73FE\u4EE3\u78BC\u5207\u5272\u6709\u5169\u7A2E\u65B9\u5F0F
  - \u540C\u6B65\u4EE3\u78BC\uFF1A\u53EA\u9700 \`\`\`webpack\`\`\` \u8A2D\u5B9A \`\`\`optimization\`\`\` \u7684\u914D\u7F6E\u5373\u53EF
  - \u7570\u6B65\u4EE3\u78BC\uFF1A\u7121\u9700\u4EFB\u4F55\u914D\u7F6E\uFF0C\u6703\u81EA\u52D5\u4EE3\u78BC\u5206\u5272\uFF0C\u653E\u7F6E\u5230\u65B0\u7684\u6587\u4EF6\u4E2D
- \`\`\`webpack\`\`\` \u4F7F\u7528 \`\`\` splitChunks\`\`\` \u9032\u884C\u914D\u7F6E
  - [\u5B98\u65B9\u8AAA\u660E](https://webpack.js.org/plugins/split-chunks-plugin/)
  - \u914D\u7F6E\u7BC4\u4F8B
    \`\`\`js
    optimization: {
      splitChunks: {
        /*
          async\uFF1A\u53EA\u8655\u7406 Lazy Loading \u7684 chunks\uFF0C\u4F8B\u5982 import(xxx) \u8A9E\u6CD5\u8F09\u5165\u7684\u6A21\u7D44\uFF0C\u6703\u8D70\u5230 cacheGroups \u67E5\u770B\u914D\u7F6E
          initial\uFF1A\u53EA\u8655\u7406\u540C\u6B65\u52A0\u8F09\u7684 chunk\uFF0C\u4F8B\u5982 import xxx \u8A9E\u6CD5\u8F09\u5165\u7684\u6A21\u7D44
          all\uFF1A\u517C\u5BB9\u4EE5\u4E0A\u5169\u7A2E\u65B9\u5F0F\uFF0C\u901A\u901A\u9032\u884C\u8655\u7406
        */
        chunks: 'all',
        // \u82E5\u5927\u65BC30kb\u624D\u9032\u884C\u4EE3\u78BC\u5206\u5272
        minSize: 30000,
        // \u5E7E\u4E4E\u4E0D\u7528\uFF0C\u82E5\u8D85\u904E 50kb \u5247\u9032\u884C\u591A\u6B21\u62C6\u5206(\u57FA\u672C\u4E0A\u5EAB\u90FD\u62C6\u5206\u4E0D\u4E86)
        maxSize: 50000,
        // \u8A72\u6A21\u7D44\u88AB\u5F15\u7528\u7684\u6B21\u6578
        minChunks: 1,
        // \u82E5\u5F15\u7528\u767C\u9001\u7684request\u8D85\u904E5\u500Bjs \u5247\u4E0D\u518D\u4EE3\u78BC\u5206\u5272
        maxAsyncRequests: 5,
        // \u5165\u53E3\u6587\u4EF6\u5F15\u7528\u7684\u5EAB\u6700\u591A\u5206\u5272\u6210 3 \u500Bjs\u518D\u591A\u5C31\u4E0D\u518D\u4EE3\u78BC\u5206\u5272
        maxInitialRequests: 3,
        // \u6587\u4EF6\u751F\u6210\u6642\u6703\u51FA\u73FE\u9023\u63A5\u7B26\uFF0C\u5982:vendors~main.js
        automaticNameDelimiter: '~',
        // \u4F7F\u7528 cacheGroups \u4E0B\u7684\u547D\u540D
        name: true,
        // \u6253\u5305\u5F8C\u6703\u5BDF\u770B\u662F\u5426\u7B26\u5408\u689D\u4EF6\u52A0\u5165\u7DE9\u5B58\u7D44(cacheGroups)\uFF0C\u518D\u4F9D\u547D\u540D\u6253\u5305(vendors.js)
        cacheGroups: {
          // \u82E5\u6253\u5305\u7684\u5EAB\u65BC node_modules \u5E95\u4E0B\u5247\u90FD\u6B78\u985E\u5230 vendors = vendors~main.js(\u5F8C\u9762main.js\u70BA\u5165\u53E3\u6A94\u540D)
          // priority \u512A\u5148\u7D1A(\u5927\u5230\u5C0F)\uFF0CcacheGroups\u6703\u5BDF\u770B\u5404\u547D\u540D\u7684\u512A\u5148\u7D1A\u9032\u884C\u6253\u5305\u547D\u540D
          vendors: {
            test: /[\\\\/]node_modules[\\\\/]/,
            priority: -10,
            // \u82E5\u4E0D\u60F3\u53D6\u540D\u70BA vendors~xxx.js \u5247\u53EF\u81EA\u5DF1\u547D\u540D
            // filename: 'vendors.js',
          },
          // \u82E5\u4E0D\u5728 vendors \u5247\u4F7F\u7528 default \u914D\u7F6E
          default: {
            priority: -20,
            // \u4EE3\u8868\u82E5\u8A72\u5EAB\u5DF2\u88AB\u6253\u5305\uFF0C\u5247\u5176\u4ED6\u5730\u65B9\u5728\u5F15\u7528\u76F8\u540C\u5EAB\u6642\u5247\u76F4\u63A5\u9032\u884C\u5FA9\u7528\u4E0D\u91CD\u65B0\u6253\u5305\u9032\u53BB
            reuseExistingChunk: true,
            // \u82E5\u4E0D\u60F3\u53D6\u540D\u70BA default~xxx.js \u5247\u53EF\u81EA\u5DF1\u547D\u540D
            filename: 'common.js'
          }
        }
      }
    }, 
    \`\`\`
- \`\`\`webpack\`\`\` \u7570\u6B65\u52A0\u8F09\u8A9E\u53E5\u7BC4\u4F8B \`\`\`index.js\`\`\`
  - \`\`\`/* webpackChunkName:"lodash" */\`\`\` \u4EE3\u8868\u5728\u7570\u6B65\u52A0\u8F09\u500B\u5225\u6253\u5305 \`\`\`lodash\`\`\` \u6642\u53D6\u540D\u70BA \`\`\`lodash\`\`\`
  \`\`\`js
  async function getComponent() {
    const { default: _ } = await import(/* webpackChunkName:"lodash" */ 'lodash');
    const element = document.createElement('div');
    element.innerHTML = _.join(['ming', '123'], '-');
    return element;
  }

  // \u61F6\u52A0\u8F09\u5373\u7BC0\u7701\u52A0\u8F09\u7DB2\u8DEF\u8CC7\u6E90\uFF0C\u66F4\u5FEB\u7684\u5C07\u9801\u9762\u6E32\u67D3\u7D66\u4F7F\u7528\u8005
  // chunk \u4EE3\u8868\u6253\u5305\u5F8C\u7684\u6BCF\u4E00\u500B\u6587\u4EF6\u90FD\u662F\u4E00\u500B\u5340\u584A
  document.addEventListener('click', () =>{
    getComponent().then(element => {
      document.body.appendChild(element);
    });
  })
  \`\`\`

<hr id="user-content-caching" style="height: 2px;">

#### <a href="#user-content-top" >Caching \u7DE9\u5B58</a>
- \u5728\u4E4B\u524D\u4F7F\u7528 \`\`\`Loader\`\`\` \u52A0\u8F09\u5716\u7247\u6642\u4F7F\u7528\u904E\uFF0C\u4E3B\u8981\u70BA\u4EE5\u4E0B\u5E7E\u7A2E
  - \`\`\`[hash]\`\`\`\uFF1A\u8A72\u6B21\u6253\u5305\u7684\u54C8\u5E0C\u503C\uFF0C\u7121\u7DE9\u5B58\u4F5C\u7528
  - \`\`\`[contenthash]\`\`\`\uFF1A\u5167\u5BB9\u7684\u54C8\u5E0C\u503C\uFF0C\u53EF\u9032\u884C\u5167\u5BB9\u5C0D\u6BD4\u9054\u5230\u7DE9\u5B58\u4F5C\u7528
  - \`\`\`[chunkhash]\`\`\`\uFF1A\u70BA\u4F9D\u8CF4\u5305\u7684\u54C8\u5E0C\u503C\uFF0C\u53EF\u9032\u884C\u5167\u5BB9\u5C0D\u6BD4\u9054\u5230\u7DE9\u5B58\u4F5C\u7528
  - \u53EF\u52A0\u4E0A \`\`\`:(length)\`\`\` \u6E1B\u5C11\u54C8\u5E0C\u503C\u5B57\u4E32\u9577\u5EA6(\u9810\u8A2D\u70BA20)
    - \u5982\uFF1A\`\`\`[name].[contenthash:8][ext]\`\`\`
\`\`\`js
{
  // \u5165\u53E3\u6AA2\u6E2C\u7B26\u5408\u898F\u5247\u7684\u6A94\u540D
  test: /\\.(png|jpe?g|gif|svg)$/,
  // url-loader \u65BC webpack5 \u68C4\u7528\uFF0C\u6539\u7528\u4EE5\u4E0B\u914D\u7F6E
  type: 'asset/resource',
  generator: {
    /*
      [name]:\u4F7F\u7528\u539F\u6A94\u6848\u540D
      [hash]:\u8A72\u6B21\u6253\u5305\u7684\u54C8\u5E0C\u503C
      [contenthash]:\u5716\u7247\u5167\u5BB9\u7684\u54C8\u5E0C\u503C
      [ext]:\u4F7F\u7528\u539F\u526F\u6A94\u540D(\u524D\u9762\u6703\u81EA\u52D5\u52A0\u4E0A".")
    */
    filename: \`[name].[contenthash][ext]\`
  },
}

// =========================================
optimization: {
  /*
    \u5728\u820A\u7248\u672C webpack \u53EF\u80FD\u6703\u51FA\u73FE\u5167\u5BB9\u4E00\u6A23\u4F46\u54C8\u5E0C\u503C\u4E5F\u6703\u8B8A\u5316
    \u539F\u56E0\u662F js \u8207 js \u6587\u4EF6\u4E4B\u9593\u7684\u95DC\u4FC2: manifest 
    \u6703\u5305\u542B\u5728\u5404\u500B js \u6587\u4EF6\u5167\u5C0E\u81F4\u5167\u5BB9\u8207\u539F\u672C\u6709\u53EF\u80FD\u96A8\u6A5F\u4E0D\u540C
    \u901A\u904E runtimeChunk \u5C07 manifest(\u6587\u4EF6\u4E4B\u9593\u7684\u95DC\u4FC2) \u984D\u5916\u6253\u5305\u51FA\u4F86\u907F\u514Djs\u5167\u5BB9\u6709\u5DEE\u7570
  */ 
  runtimeChunk: {
    name: 'runtime'
  },
},
\`\`\`

<hr id="user-content-shimming" style="height: 2px;">

#### <a href="#user-content-top" >Shimming</a>
- \u7528\u9014\uFF1A\u67E5\u770B\u6240\u6709\u6587\u4EF6\u662F\u5426\u6709\u76F8\u7B26\uFF0C\u81EA\u52D5\u5F15\u5165\u76F8\u95DC\u7684\u4F9D\u8CF4\u5305
  \`\`\`js
  plugins: [
    new webpack.ProvidePlugin({
      // \u7576\u767C\u73FE\u6587\u4EF6\u4F7F\u7528 $ \u7B26\u865F\u5247\u81EA\u52D5\u5F15\u5165 jquery
      $: 'jquery',
      // \u7576\u767C\u73FE\u6587\u4EF6\u4F7F\u7528 _join \u5247\u5F15\u7528 lodash \u4E0B\u7684 join \u65B9\u6CD5
      _join: ['lodash', 'join']
    }),
  ],
  \`\`\`
- \u82E5\u8981\u8A2D\u5B9A\u6A21\u584A \`\`\`this\`\`\` \u5C0D\u8C61\u6307\u5411 \`\`\`window\`\`\`
  - \u9700\u8981\u5B89\u88DD\u4F9D\u8CF4\uFF1A\`\`\`npm install imports-loader --save-dev\`\`\`
  - \u4E26\u52A0\u5165\u4EE5\u4E0B\u914D\u7F6E
    \`\`\`js
    module: {
      rules: [{ 
        test: /\\.js$/, 
        exclude: /node_modules/,
        // \u82E5\u8981\u7528\u591A\u500Bloader\u5247\u9808\u7528use
        use: [{
          loader: 'babel-loader'
        }, {
          // \u82E5\u8981\u5728 js \u6587\u4EF6\u4E2D this === window
          // \u5B89\u88DD npm install imports-loader --save-dev
          // \u914D\u7F6E\u4EE5\u4E0B
          loader: 'imports-loader?this=>window'
        }]
      }]
    },
    \`\`\`

<hr id="user-content-env" style="height: 2px;">

#### <a href="#user-content-top" >Env \u74B0\u5883\u8B8A\u6578</a>
- \u901A\u5E38\u4E0D\u5EFA\u8B70\u4F7F\u7528\u74B0\u5883\u8B8A\u6578
- \u5728 \`\`\`package.json\`\`\` \u8207 \`\`\`webpack\`\`\` \u8A2D\u5B9A\u52A0\u5165\u74B0\u5883\u8B8A\u6578\u5224\u65B7
  \`\`\`js
  /*
    env \u5728 package.json \u5B9A\u7FA9
    webpack --env.production --config ./build/webpack.common.js"
    \u4E0A\u9762 --env.production \u5373 production \u9ED8\u8A8D\u70BA true

    \u82E5\u5BEB\u6210 --env production 
    \u5247\u4E0B\u9762 (env) \u53EF\u4EE5\u76F4\u63A5\u5BEB\u70BA (production)

    \u82E5\u5BEB\u6210 --env.production=abc 
    \u5247\u4E0B\u9762 if(env && env.production) 
    \u53EF\u4EE5\u6539\u5BEB\u70BA if(env && env.production === 'abc')
  */
  
  module.exports = (env) => {
    if(env && env.production) {
      return merge(commonConfig, prodConfig);
    }else {
      return merge(commonConfig, devConfig);
    }
  }
  \`\`\`

<hr id="user-content-library" style="height: 2px;">

#### <a href="#user-content-top" >\u88FD\u4F5C Library</a>
- \u82E5\u8981\u4F7F\u7528 \`\`\`import\`\`\` \u65B9\u5F0F\u9032\u884C\u6253\u5305\u9700\u5B89\u88DD \`\`\`webpack\`\`\`
  \`\`\`npm install webpack webpack-cli --save-dev\`\`\`
- \u4E26\u5EFA\u7ACB \`\`\`webpack.config.js\`\`\`
  - \`\`\`externals\`\`\`\uFF1A\u6703\u9032\u884C\u5FFD\u7565\u907F\u514D\u4F7F\u7528\u8005\u6709\u76F8\u540C\u7684\u4F9D\u8CF4\u5305
    - \`\`\`externals\`\`\` [\u5B98\u65B9\u8AAA\u660E](https://webpack.js.org/configuration/externals/)
    - \`\`\`externals\`\`\` \u53EF\u4EE5\u662F\u5176\u4ED6\u7684\u6578\u7D44\u6216\u5C0D\u8C61
    - \u5728\u6587\u4EF6\u5167\u6703\u4F9D\u4F7F\u7528\u8005\u7684\u540D\u5B57\u4E0D\u540C\u53D6\u540D\u5F15\u7528
  \`\`\`js
  module.exports = {
    mode: 'production',
    entry: './src/index.js',
    externals: 'lodash',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'library.js',
      // \u5982\u8981\u7528script\u5F15\u5165\u65B9\u5F0F\u5247\u9700\u4F7F\u7528\u6B64\u65B9\u5F0F\u639B\u8F09\u5230\u5168\u5C40\u8B8A\u91CF(window.root)
      library: 'root',
      /*
        umd(Universal Module Definition) 
        \u4EE3\u8868\u7121\u8AD6\u4F7F\u7528\u8005\u7528\u54EA\u7A2E\u5F15\u5165\u65B9\u5F0F\u90FD\u901A\u7528(\u9664\u4E86script\u5F15\u5165\u65B9\u5F0F)

        libraryTarget \u4E5F\u53EF\u4EE5\u8B8A\u70BA this, window, global
        \u4EE5\u4E0A\u4E09\u7A2E\u4E0D\u5E38\u7528\u4E26\u4E14\u7121\u6CD5\u4F7F\u7528\u901A\u7528\u5F15\u5165\u65B9\u5F0F
      */
      
      libraryTarget: 'umd'
  }
  \`\`\`
- \u82E5\u5168\u90E8\u88FD\u4F5C\u5B8C\u6210\u5247\u53EF\u4EE5\u767C\u4F48\u5230 \`\`\`npm\`\`\` \u4E0A
  - 1.\u5148\u81F3 \`\`\`npm\`\`\` \u8A3B\u518A\u5E33\u865F
  - 2.\u5728\u547D\u4EE4\u884C\u52A0\u5165\u5E33\u865F \`\`\`npm adduser\`\`\`
  - 3.\u767C\u4F48\u5230\u516C\u7528\u5009\u5EAB(\u82E5\u6709\u76F8\u540C\u540D\u5B57\u6703\u88AB\u963B\u64CB) \`\`\`npm publish\`\`\`

<hr id="user-content-eslint" style="height: 2px;">

#### <a href="#user-content-top" >ESLint \u914D\u7F6E</a>
- [ESLint \u5B98\u65B9\u8A2D\u5B9A\u8AAA\u660E](https://eslint.org/docs/user-guide/configuring/)
- \u5B89\u88DD \`\`\`ESLint\`\`\`\uFF1A\`\`\`npm install eslint --save-dev\`\`\`
- \u751F\u6210 \`\`\`ESLint\`\`\` \u8A2D\u5B9A\u6587\u4EF6(\`\`\`.eslintrc.js\`\`\`)\uFF1A\`\`\`npx eslint --init \`\`\`
- \u82E5\u8981\u5728 \`\`\`git commit\`\`\` \u4E4B\u524D\u6AA2\u6E2C\u4E26\u963B\u6B62\u63D0\u4EA4\uFF0C\u53EF\u4F7F\u7528 \`\`\`git hooks\`\`\`
- \u4EE5\u4E0B\u6709\u591A\u7A2E\u4F7F\u7528 \`\`\`ESLint\`\`\` \u6AA2\u6E2C\u7A0B\u5F0F\u65B9\u5F0F
  - 1.\u5C0D\u6307\u5B9A\u8CC7\u6599\u593E \`\`\`src\`\`\` \u9032\u884C\u6AA2\u6E2C\uFF1A\`\`\`npx eslint src\`\`\`
  - 2.\u5728 \`\`\`vscode\`\`\` \u5B89\u88DD \`\`\`ESLint\`\`\` \u63D2\u4EF6\uFF0C\u6703\u81EA\u52D5\u76E3\u6E2C\u4E0D\u7B26\u5408\u7684\u7A0B\u5F0F\u78BC\u4E26\u81EA\u52D5\u6A19\u793A\u8D77\u4F86(\u63D0\u793A\u6703\u986F\u793A\u7528\u65BC\u54EA\u4E00\u898F\u5247\uFF0C\u53EF\u4EE5\u9032\u884C\u53D6\u6D88)
  - 3.\u4F7F\u7528 \`\`\`eslint-loader\`\`\` \u6AA2\u6E2C
    - \u5B89\u88DD\u4F9D\u8CF4\uFF1A\`\`\`npm install eslint-loader --save-dev\`\`\`
    - \u5728 \`\`\`webpack.config.js\`\`\` \u5206\u5225\u505A\u4EE5\u4E0B\u8A2D\u5B9A
      \`\`\`js
      // devServer
      devServer: {
        overlay: true,
      }
      // rules
      { 
        test: /\\.js$/, 
        exclude: /node_modules/, 
        use: ['babel-loader', 'eslint-loader']
      },
      \`\`\`
    - \u5B8C\u6210\u914D\u7F6E\u5F8C\u932F\u8AA4\u5C07\u986F\u793A\u5728\u9801\u9762\u4E0A

<hr id="user-content-optimization" style="height: 2px;">

#### <a href="#user-content-top" >\u6027\u80FD\u512A\u5316</a>
- \u52A0\u5FEB\u6253\u5305\u6548\u7387\uFF0C\u4F7F\u4E0A\u7248\u8207\u958B\u767C\u901F\u5EA6\u63D0\u5347
- \u4EE5\u4E0B\u70BA\u591A\u7A2E\u6027\u80FD\u512A\u5316\u65B9\u5F0F
  - 1.\u8DDF\u4E0A\u6280\u8853\u8FED\u4EE3 \`\`\`Node\u3001webpack\u3001npm...\`\`\`
  - 2.\u904B\u7528 \`\`\`Loader\`\`\` \u6642\u76E1\u91CF\u6392\u9664\u4E0D\u9700\u8981\u8655\u7406\u7684\u6587\u4EF6
  - 3.\`\`\`Plugins\`\`\` \u76E1\u53EF\u80FD\u7CBE\u7C21\u4E26\u78BA\u4FDD\u53EF\u9760
  - 4.\u63A7\u5236\u5305\u6587\u4EF6\u5927\u5C0F\uFF1A\`\`\`splitChunks\u3001treeshaking...\`\`\`
  - 5.\u4F7F\u7528\u591A\u9032\u7A0B\u6253\u5305\uFF1A\`\`\`thread-loader\u3001parallel-webpack\u3001happypack\`\`\`
  - 6.\u5408\u7406\u4F7F\u7528 \`\`\`sourceMap\`\`\`
  - 7.\u7D50\u5408 \`\`\`stats\`\`\` \u5206\u6790\u6253\u5305\u7D50\u679C
  - 8.\u958B\u767C\u74B0\u5883\u914D\u7F6E\uFF1A\u5167\u5B58\u7DE8\u8B6F\u3001\u7121\u7528\u63D2\u4EF6\u53BB\u9664
  - 9.\`\`\`resolve\`\`\` \u5408\u7406\u914D\u7F6E\uFF0C\`\`\`Webpack\`\`\` \u6703\u8ABF\u7528 \`\`\`Node\`\`\` \u5E95\u5C64\u5C0B\u627E\u76F8\u7B26\u7684\u6587\u4EF6
    - [resolve \u5B98\u65B9\u6587\u6A94](https://webpack.js.org/configuration/resolve/)
    - \u7BC4\u4F8B
      \`\`\`js
      resolve: {
        // \u7576\u5F15\u5165\u6642\u6C92\u6709\u52A0\u5F8C\u7DB4\uFF0Cwebpack\u6703\u81EA\u52D5\u53BB\u5C0B\u627E\u4EE5\u4E0B\u7684\u5F8C\u7DB4\u6587\u4EF6(\u5DE6\u5230\u53F3)
        extensions: ['.js', '.jsx'],
        // \u7576\u5F15\u5165\u7684\u662F\u8CC7\u6599\u593E\uFF0C\u6C92\u8A2D\u5B9A\u5247webpack\u9ED8\u8A8D\u6703\u5148\u6293index\u958B\u982D\u7684\u6587\u4EF6(\u5DE6\u5230\u53F3\u5C0B\u627E)
        // mainFiles: ['index','child'],
        // alias \u53EF\u5C07\u7279\u5B9A\u8DEF\u5F91\u4E0B\u7684\u6587\u4EF6\u7576\u4F5C\u4F9D\u8CF4\u5EAB\u4F7F\u7528:import Child from 'child';
        alias: {
          child: path.resolve(__dirname, '../src/a/b/c/child')
        }
      },
      \`\`\`
  - 10.\u907F\u514D\u91CD\u8907\u6253\u5305 \`\`\`node_modules(\u7B2C\u4E09\u65B9)\`\`\` \u4F9D\u8CF4\u5EAB
    - 1.\u5EFA\u7ACB \`\`\`webpack.dll.js\`\`\`
      \`\`\`js
      const path = require('path');
      const webpack = require('webpack');

      module.exports = {
        mode: 'production',
        entry: {
          vendors: ['lodash'],
          react: ['react', 'react-dom'],
          jquery: ['jquery']
        },
        output: {
          filename: '[name].dll.js',
          path: path.resolve(__dirname, '../dll'),
          // \u4EE5entry\u540D\u7A31\u4F5C\u70BA\u5EAB\u505A\u4F7F\u7528
          library: '[name]'
        },
        plugins: [
          // \u4F7F\u7528\u63D2\u4EF6\u5C07\u5EAB\u4E4B\u9593\u7684\u6620\u5C04\u95DC\u4FC2\u4FDD\u5B58\u5230 [name].manifest.json \u6587\u4EF6
          new webpack.DllPlugin({
            name: '[name]',
            path: path.resolve(__dirname, '../dll/[name].manifest.json'),
          })
        ]
      }
      \`\`\`
    - 2.\u5728 \`\`\`package.json script\`\`\` \u52A0\u5165\u4E26\u57F7\u884C \`\`\`"build:dll": "webpack --config ./build/webpack.dll.js"\`\`\`
    - 3.\u5B89\u88DD\u4F9D\u8CF4\uFF1A\`\`\`npm install add-asset-html-webpack-plugin --save\`\`\`
    - 4.\u5728\u4E3B\u8981 \`\`\`webpack\`\`\` \u8A2D\u5B9A\u52A0\u5165
      \`\`\`js
      const AddAssetHtmlWebpackPlugin = require('add-asset-html-webpack-plugin');

      // \u56FA\u5B9A\u7684plugin
      const plugins = [
        new HtmlWebpackPlugin({
          template: 'src/index.html'
        }), 
        new CleanWebpackPlugin(['dist'], {
          root: path.resolve(__dirname, '../')
        })
      ];

      // \u9805\u76EE\u53EF\u80FD\u6703\u6709\u591A\u500B\u7B2C\u4E09\u65B9\u4F9D\u8CF4\u9700\u8981\u5206\u5225\u914D\u7F6E
      // \u8B80\u53D6dll\u8CC7\u6599\u593E\u4E0B\u6240\u6709\u6587\u4EF6
      const files = fs.readdirSync(path.resolve(__dirname, '../dll'));
      files.forEach(file => {
        if(/.*\\.dll.js/.test(file)) {
          // \u5C07\u6253\u5305\u597D\u7684\u7B2C\u4E09\u65B9\u5EAB\u5F15\u5165html
          plugins.push(new AddAssetHtmlWebpackPlugin({
            filepath: path.resolve(__dirname, '../dll', file)
          }))
        }
        if(/.*\\.manifest.json/.test(file)) {
          /*
            \u5728\u5F15\u5165\u7B2C\u4E09\u65B9\u5EAB\u6642\uFF0Cwebpack\u6703\u5148\u900F\u904E
            vendors.manifest.json\u6587\u4EF6\u53D6\u5F97\u7B2C\u4E09\u65B9\u5EAB\u5F15\u5165

            \u82E5\u7B2C\u4E09\u65B9\u5EAB\u7121\u5206\u958B\u6253\u5305\uFF0C\u6253\u5305\u901F\u5EA6\u6703\u8F03\u6162\uFF0C
            webpack \u5F15\u5165\u4F9D\u8CF4\u5EAB\u6642\u4E00\u5F8B\u5F80 node__modules \u5C0B\u627E
          */
          plugins.push(new webpack.DllReferencePlugin({
            manifest: path.resolve(__dirname, '../dll', file)
          }))
        }
      })
      module.exports = {
        plugins,
      }
      \`\`\`

<hr id="user-content-multiple-page" style="height: 2px;">

#### <a href="#user-content-top" >\u591A\u9801\u9762\u914D\u7F6E</a>
- \u5B89\u88DD\u4F9D\u8CF4\uFF1A\`\`\`npm i html-webpack-plugin -D\`\`\`
- \u5728\u4E3B\u8981 \`\`\`webpack\`\`\` \u8A2D\u5B9A\u52A0\u5165
  - \u591A\u500B\u9801\u9762\u5373\u5C0D\u61C9\u591A\u500B \`\`\`new HtmlWebpackPlugin\`\`\`
  \`\`\`js
  const htmlMinifyOptions = {
    // \u5220\u9664 html \u4E2D\u7684\u8A3B\u91CB
    removeComments: true,
    // \u5220\u9664 html \u4E2D\u7684\u7A7A\u683C
    collapseWhitespace: true,
    // \u5220\u9664 html \u6A19\u7C64\u7684\u96D9\u5F15\u865F
    removeAttributeQuotes: true,
    // \u5C07 html \u6587\u4EF6\u5167\u7684 css \u58D3\u7E2E
    minifyCSS: true,
    // \u5C07 html \u6587\u4EF6\u5167\u7684 js \u58D3\u7E2E
    minifyJS: true
  }
  plugins: [
    // \u8A2D\u5B9A\u589E\u52A0\u9700\u8981\u986F\u793A\u7684\u9801\u9762
    new HtmlWebpackPlugin({
      // \u539F\u8CC7\u6599\u6A94\u6848
      template: './src/index.html',
      // \u8F38\u51FA\u6A94\u6848\u540D
      filename: 'index.html',
      // \u8A2D\u5B9A\u9700\u8981\u7684\u8CC7\u6E90(entry)
      chunks: ['your.js'],
      minify: htmlMinifyOptions
    }),
  ]
  \`\`\`

<hr id="user-content-link" style="height: 2px;">

#### <a href="#user-content-top" >\u53C3\u8003\u9023\u7D50</a>
- [Webpack \u5B98\u7DB2](https://webpack.js.org/)
- [Webpack \u4E2D\u6587\u7DB2](https://www.webpackjs.com/concepts/)
`;export{n as default};

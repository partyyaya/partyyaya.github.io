const n=`<span style="font-size: 32px; font-weight: 600;">Webpack \u57FA\u672C\u4F7F\u7528</span>

## Webpack \u4ECB\u7D39
- [\u5B98\u7DB2](https://webpack.js.org/)
\`\`\`txt
webpack \u662F\u975C\u614B\u6A21\u584A\u6253\u5305\u5668
webpack \u8655\u7406\u6642\u6703\u5C07\u6240\u6709\u6A21\u584A\u6253\u5305\u6210\u4E00\u6216\u591A\u500B\u6587\u4EF6
\`\`\`

## Module
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

## \u57FA\u790E\u914D\u7F6E
- \u5B89\u88C5 \`webpack\`
  - \`webpack-cli\` \u4F7F\u547D\u4EE4\u884C\u57F7\u884C \`webpack\` \u7684\u5DE5\u5177
  - \`-D\` \u4EE3\u8868 \`--save-dev\`
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
    	// \u6307\u5B9A\u8F49\u8B6F\u6253\u5305\u5F8C\u7684\u76EE\u6A19
    	target: ['web', 'es5'],
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
  - \u5728 \`package.json\` \u6DFB\u52A0\u914D\u7F6E
    - \u6DFB\u52A0 \`"private": true\` \u4E0D\u767C\u4F48\u5230 \`npm\` \u5009\u5EAB 
    - \u5728 \`scripts\` \u6DFB\u52A0 \`webpack\` \u7684\u547D\u4EE4\uFF0C\u53EF\u7C21\u5316\u57F7\u884C\u8A9E\u53E5 
      \`\`\`txt
      webpack \u9ED8\u8A8D\u8A2D\u5B9A\u57F7\u884C\u6587\u4EF6: webpack.config.js 
      \u82E5\u8981\u6539\u5176\u4ED6\u540D\u5B57\u5247\u53EF\u7528 --config
      \u4EE5\u4E0B\u5169\u53E5\u6307\u4EE4\u76F8\u7B49
      "webpack": "webpack --config webpack.config.js" 
      "webpack": "webpack" 
      \`\`\`
- \u7DE8\u8B6F\u57F7\u884C\uFF1A\`npm run webpack\`

## entry \u8207 output
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

## alias \u5225\u540D\u914D\u7F6E
\`\`\`js
resolve: {
  alias: {
    '@': path.resolve(__dirname, '/src')
  },
},
\`\`\`

## Loader
- \u5B98\u7DB2\uFF1A[loader](https://webpack.js.org/loaders/)
- \u76EE\u7684\uFF1A\`loader\` \u80FD\u8B93 \`webpack\` \u8655\u7406\u975E JS \u6587\u4EF6\u7684\u6A21\u584A
- \`loader\` \u8655\u7406\u9806\u5E8F\u70BA\u5F9E\u4E0B\u5230\u4E0A\u3001\u5F9E\u53F3\u5230\u5DE6
- \u65BC \`webpack.config.js\` \u4EE5\u4E0B\u4F4D\u7F6E\u914D\u7F6E
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
- \`Asset Modules\` \u529F\u80FD\u4F7F\u7528
  - [\u5B98\u7DB2\u4ECB\u7D39](https://webpack.js.org/guides/asset-modules/)
  - \`asset\` \u5C0D\u61C9 \`url-loader\`
  - \`asset/inline\` \u5C0D\u61C9 \`url-loader\`\uFF0C\u50CF\u662F\u6CE8\u5165\u5728\u6A94\u6848\u88E1\u9762\uFF0C\u985E\u4F3C\u5167\u90E8\u9023\u7D50
  - \`asset/resource\` \u5C0D\u61C9 \`file-loader\`\uFF0C\u7528\u9014\u504F\u5411\u642C\u79FB\u6A94\u6848\u4E26\u5916\u90E8\u9023\u7D50\u5230\u8A72\u6A94\u6848
  - \`asset/source\` \u5C0D\u61C9 \`raw-loader\`

## Loader \u5716\u7247\u914D\u7F6E
- \u5B89\u88DD\u4F9D\u8CF4
  \`\`\`txt
  npm install html-loader image-webpack-loader -D
  \`\`\`
- \u5728 \`webpack.config.js\` \u914D\u7F6E
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
- \u6700\u5F8C\u5728\u6307\u5B9A\u7684 \`js\` \u6587\u4EF6\u5F15\u5165\u5373\u53EF
  \`\`\`js
  import './avatar.jpg';
  \`\`\`
### \u4F7F\u7528 url-Loader
- \u5B89\u88DD\u4F9D\u8CF4\uFF1A\`yarn add url-loader -D\`
- \u4F7F\u7528\uFF1A
  \`\`\`js
  {
    test: /\\.(png|jpe?g|gif|svg)$/i,
    use: [
      {
        loader: 'url-loader',
        options: {
          limit: true, // \u4E00\u5F8B\u8F49\u70BA base64
        },
      },
    ],
  },
  \`\`\`

## Loader \u6A23\u5F0F\u8207\u5B57\u9AD4\u914D\u7F6E
- \u4EE5\u4E0B\u6709\u5169\u7A2E\u65B9\u5F0F\u5B89\u88DD\u8207 \`webpack.config.js\` \u914D\u7F6E
  - \u7B2C\u4E00\u7A2E\u5C07\u6574\u5408\u7684 \`css\` \u5167\u5BB9\u52A0\u5165 \`head style\` \u6A19\u7C64\u5167
    - \u5B89\u88DD\u7B2C\u4E09\u65B9\u4F9D\u8CF4
      \`\`\`txt
      npm install style-loader css-loader \\
      sass-loader node-sass \\
      postcss-loader autoprefixer -D
      \`\`\`
    - \`webpack.config.js\` \u914D\u7F6E
      \`\`\`js
      {
        /*
          loader \u8655\u7406\u9806\u5E8F\u70BA\u5F9E\u4E0B\u5230\u4E0A\u3001\u5F9E\u53F3\u5230\u5DE6
      		\u82E5\u8981\u5728 js \u4F7F\u7528 style \u52A0\u5165 css \u6A23\u5F0F\uFF0C\u5247\u4F7F\u7528 raw-loader \u4E26\u6392\u9664 style-loader\u3001css-loader
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
  - \u7B2C\u4E8C\u7A2E\u5C07 \`css\` \u5167\u5BB9\u6A94\u6848\u58D3\u7E2E
    - \u5B89\u88DD\u7B2C\u4E09\u65B9\u4F9D\u8CF4
      \`\`\`txt
      npm install css-loader \\
      sass-loader node-sass \\
      postcss-loader autoprefixer \\
      mini-css-extract-plugin \\
      css-minimizer-webpack-plugin -D
      \`\`\`
    - \`webpack.config.js\` \u914D\u7F6E
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
  - \u5C07 \`eot\u3001svg\u3001ttf\u3001woff\` \u5B57\u9AD4\u6587\u4EF6\u52A0\u5165\u6307\u5B9A\u8CC7\u6599\u593E
  - \`webpack.config.js\` \u914D\u7F6E
    \`\`\`js
    {
      test: /\\.(eot|ttf|svg)$/,
      type: 'asset/resource',
    },
    \`\`\`
  - \`index.scss\` \u914D\u7F6E(\u6A94\u540D\u81EA\u884C\u66FF\u63DB)
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
- \`postcss-loader\` \u9700\u8981\u5275\u5EFA \`postcss.config.js\` \u6587\u4EF6
  \`\`\`js
  module.exports = {
    plugins: [
      require('autoprefixer')
    ]
  }
  \`\`\`
- \u6700\u5F8C\u5728\u6307\u5B9A\u7684 \`js\` \u6587\u4EF6\u5F15\u5165\u5373\u53EF
  \`\`\`js
  import './index.scss';
  \`\`\`

## Plugins
- \u4F7F \`webpack\` \u53EF\u4EE5\u57F7\u884C\u66F4\u5EE3\u6CDB\u7684\u4EFB\u52D9
- \u65BC \`webpack.config.js\` \u4EE5\u4E0B\u4F4D\u7F6E\u914D\u7F6E
  \`\`\`js
  plugins:[
	  // plugins
  ],
  \`\`\`
- \u4EE5 \`html-webpack-plugin\` \u8207 \`clean-webpack-plugin\` \u70BA\u7BC4\u4F8B
  - \u5B89\u88DD\u4F9D\u8CF4
  	- \`webpack 5\` \u5DF2\u7121\u9700\u4F7F\u7528 \`clean-webpack-plugin\`\uFF0C\u53EF\u88AB \`output.clean\` \u53D6\u4EE3
    \`\`\`txt
    npm install html-webpack-plugin clean-webpack-plugin -D
    \`\`\`
  - \`webpack.config.js\` \u914D\u7F6E
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

## SourceMap
- [\u5B98\u7DB2\u4ECB\u7D39](https://webpack.js.org/configuration/devtool/)
- \u7528\u9014\uFF1A\u5728\u6253\u5305\u5F8C\u7684\u6A94\u6848\u4E2D\u627E\u51FA\u539F\u6A94\u6848\u7684\u6620\u5C04\u932F\u8AA4\u4F4D\u7F6E
- \u5E38\u7528\u914D\u7F6E
  - \`mode: development\`\uFF1A\`devtool: 'cheap-module-eval-source-map'\`
  - \`mode: production\`\uFF1A\`devtool: 'cheap-module-source-map'\`
- \u8AAA\u660E
  - \`source-map\`\uFF1A\u7528\u4F86\u751F\u6210 \`.map\` \u6587\u4EF6\u5C0D\u61C9\u4F4D\u7F6E
  - \`inline-source-map\`\uFF1A\u5C07\u5C0D\u61C9\u95DC\u4FC2\u5BEB\u9032 \`.js \`\u88E1\u9762(\u901A\u5E38\u70BA\u5E95\u90E8)
  - \`cheap\`\uFF1A\u6307\u7CBE\u6E96\u5230\u884C\u4F46\u4E0D\u7BA1\u5728\u7B2C\u5E7E\u500B\u5B57\uFF0C\u53EA\u8CA0\u8CAC\u89C0\u5BDF\u696D\u52D9\u4EE3\u78BC\u88E1\u7684\u932F\u8AA4
  - \`module\`\uFF1A\u89C0\u5BDFloader\u88E1\u9762\u7684\u932F\u8AA4
  - \`eval\`\uFF1A\u5C07\u5C0D\u61C9\u95DC\u4FC2\u4F7F\u7528 \`js eval\` \u65B9\u5F0F\u6253\u5305
- \u65BC \`webpack.config.js\` \u914D\u7F6E
  \`\`\`js
  devtool: 'cheap-module-eval-source-map',
  \`\`\`

## WebpackDevServer
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
- \u5728 \`webpack.config.js\` \u914D\u7F6E
  - [proxy \u8ACB\u6C42\u8F49\u767C\u4ECB\u7D39](https://webpack.js.org/configuration/dev-server/#devserverproxy)
  \`\`\`js
  devServer: {
    // \u81EA\u52D5\u6253\u958B\u9801\u9762\uFF0C\u901A\u5E38\u6703\u642D\u914D html-webpack-plugin
    open: true,
    // \u5075\u6E2C\u6587\u4EF6\u662F\u5426\u4FEE\u6539\uFF0C\u4E26\u81EA\u52D5 reload
    watchFiles: ['src/**/*'],
    compress: true,
    port: 8699, // \u9810\u8A2D8080
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
- \u5728 \`package.json\` \u52A0\u4E0A
  \`\`\`txt
  "scripts": {
    "start": "webpack serve",
  }
  \u82E5\u6709\u6307\u5B9A\u6A94\u6848\u8A2D\u5B9A\uFF0C\u53EF\u4F7F\u7528 --config \u5207\u63DB\u81F3\u6307\u5B9A\u6A94\u6848\u8A2D\u5B9A
  "scripts": {
    "start": "webpack serve --config ./build/webpack.dev.js"
  }
  \`\`\`
- \u958B\u555F \`devServer\`\uFF1A\`npm run start\`
- \u82E5\u9808\u6AA2\u6E2C\u662F\u5426\u958B\u555F\u71B1\u66F4\u65B0\u53EF\u5728 \`js\` \u52A0\u5165
  \`\`\`js
  // \u5982\u679C\u555F\u52D5\u71B1\u6A21\u584A
  if (module.hot) {
    // \u76E3\u6E2C\u8A72number.js\u6587\u4EF6\u662F\u5426\u66F4\u52D5
    module.hot.accept('./number', () => {
      // \u82E5\u66F4\u52D5\u5247\u57F7\u884C\u4EE5\u4E0B\u52D5\u4F5C
      // ...
    })
  }
  \`\`\`

## Babel
- \u5B98\u7DB2\uFF1A[babel](https://babeljs.io/)
- \u7DDA\u4E0A\u7DE8\u8B6F\uFF1A[babel-online](https://babeljs.io/repl)
- \u4ECB\u7D39
	\`\`\`txt
	Babel \u662F JavaScript \u7684\u7DE8\u8B6F\u5668
	\u7528\u4F86\u5C07 ES6 \u7684\u4EE3\u78BC\uFF0C\u8F49\u63DB\u6210 ES6 \u4E4B\u524D\u7684\u4EE3\u78BC

	\u4F46\u5C0D\u65BC ES6 \u65B0\u589E\u7684 API\uFF0C\u5982 Set\u3001Map\u3001Promise \u7B49\u5168\u5C40\u5C0D\u8C61
	\u53CA\u4E00\u4E9B\u5B9A\u7FA9\u5728\u5168\u5C40\u5C0D\u50CF\u4E0A\u7684\u65B9\u6CD5\uFF08\u6BD4\u5982 Object.assign/Array.from\uFF09
	\u90FD\u4E0D\u80FD\u76F4\u63A5\u7DE8\u8B6F\uFF0C\u9700\u8981\u85C9\u52A9\u5176\u5B83\u7684\u6A21\u584A
	Babel \u4E00\u822C\u9700\u914D\u5408 Webpack \u4F86\u7DE8\u8B6F\u6A21\u584A\u8A9E\u6CD5
	\`\`\`
- \u5B89\u88DD\u65B9\u6CD5
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
- \u5728 \`webpack.config.js\` \u914D\u7F6E
	\`\`\`js
	{
		test: /\\.js$/,
		// exclude: \u4EE3\u8868\u8A72\u8DEF\u5F91\u5E95\u4E0B\u7684\u6587\u4EF6\u4E0D\u7528\u8F49\u8B6F
		// \u6392\u9664\u7279\u5B9A\u8CC7\u6599\u593E
		exclude: process_env_NODE_ENV === 'development' ? [/node_modules/] : [/node_modules\\/@babel/, /node_modules\\/core-js-pure/],
		loader: 'babel-loader',
	}
	\`\`\`
- \u5275\u5EFA \`.babelrc\` \u6587\u4EF6
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
- \u6CE8\u610F\u4E8B\u9805
- \`plugins\` \u8207 \`presets\` \u540C\u6642\u5B58\u5728\u7684\u57F7\u884C\u9806\u5E8F
  - 1.\u5148\u57F7\u884C plugins \u7684\u914D\u7F6E\u9805\uFF0C\u518D\u57F7\u884C Preset \u7684\u914D\u7F6E\u9805
  - 2.\`plugins\` \u914D\u7F6E\u9805\uFF0C\u6309\u7167\u8072\u660E\u9806\u5E8F\u57F7\u884C
  - 3.\`Preset\` \u914D\u7F6E\u9805\uFF0C\u6309\u7167\u8072\u660E\u9006\u5E8F\u57F7\u884C\u3002
  \`\`\`js
  /*
  .babelrc \u6587\u4EF6
  \u57F7\u884C\u9806\u5E8F\u70BA
  1.myplugin
  2.stage-2
  3.env
  */
  {
    "plugins": [
      "myplugin",
    ],
    "presets": [
      ["env", {
        /*
	 useBuiltIns \u53C3\u6578\u8AAA\u660E\uFF1A
	 false: \u4E0D\u5C0D polyfills \u505A\u4EFB\u4F55\u64CD\u4F5C 
	 entry: \u6839\u64DA target \u4E2D\u700F\u89BD\u5668\u7248\u672C\u7684\u652F\u6301\uFF0C\u5C07 polyfills \u62C6\u5206\u5F15\u5165\uFF0C\u50C5\u5F15\u5165\u6709\u700F\u89BD\u5668\u4E0D\u652F\u6301\u7684 polyfill 
	 usage(\u65B0)\uFF1A\u6AA2\u6E2C\u4EE3\u78BC\u4E2D ES6 \u4EE5\u4E0A\u7684\u4F7F\u7528\u60C5\u6CC1\uFF0C\u50C5\u50C5\u52A0\u8F09\u4EE3\u78BC\u4E2D\u7528\u5230\u7684 polyfills
        */
	"useBuiltIns": "usage"
      }],
      "stage-2"
    ]
  }
  \`\`\`

## Esbuild-loader
- [\u5B98\u65B9 Github](https://github.com/privatenumber/esbuild-loader)
- \u4F7F\u7528\u65B9\u6CD5
  - \u5B89\u88DD\u4F9D\u8CF4\uFF1A\`npm i esbuild-loader -D\`
  - \u5728 \`webpack.config.js\` \u914D\u7F6E
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

## Tree Shaking
- \u7528\u9014\uFF1A\u522A\u9664\u4E0D\u5FC5\u8981\u7684\u7A0B\u5F0F\u78BC\uFF0C\u6E1B\u5C0F\u6253\u5305\u9AD4\u7A4D
- \u53EA\u4F5C\u7528\u65BC \`ESModule\` \u8A9E\u6CD5
- \u6709\u5206\u5169\u7A2E\u5C64\u7D1A\uFF1A\`modules-level\`\u3001\`statements-level\`
- \`modules-level\`
  - \u4F5C\u7528\u65BC\u6574\u500B\u6A21\u584A\uFF0C\u82E5\u8A72\u6A21\u584A\u672A\u88AB\u4F7F\u7528\u5247\u6574\u500B\u6A21\u584A\u6703\u88AB\u522A\u9664
  - \u8981\u5728 \`development\` \u4F7F\u7528\uFF0C\u9808\u8A2D\u7F6E \`optimization.sideEffects = true\`\uFF0C\`production\` \u9ED8\u8A8D\u70BA \`true\`
  - \u53E6\u5916\u9700\u5728 \`package.json\` \u8A2D\u5B9A \`sideEffects\`
    - \u53EF\u8A2D\u5B9A\u5FFD\u7565\u6307\u5B9A\u6587\u4EF6 \`sideEffects=["*.css"]\`
    - \u9ED8\u8A8D\u70BA \`false\` \u4EE3\u8868\u4E0D\u7528\u5FFD\u7565\u4EFB\u4F55\u6587\u4EF6\uFF0C\u82E5\u8A2D\u5B9A \`true\` \u5247 \`webpack\` \u6703\u81EA\u52D5\u5206\u6790\u662F\u5426\u6709\u526F\u4F5C\u7528
- \`statements-level\`
  - \u4F5C\u7528\u65BC\u6A21\u584A\u5167\u8A9E\u53E5\uFF0C\u82E5\u8A72 \`import/export\` \u672A\u88AB\u4F7F\u7528\u5247\u6703\u88AB\u522A\u9664
  - \u8981\u5728 \`development\` \u4F7F\u7528\uFF0C\u9808\u8A2D\u7F6E
    - \`optimization.usedExports = true\`
    - \`optimization.minimize = true\`
    - \u4EE5\u4E0A\u8A2D\u7F6E \`production\` \u90FD\u9ED8\u8A8D\u70BA \`true\`

## TerserPlugin
- \u7528\u9014\uFF1A\u7E2E\u5C0F\u6216\u6700\u5C0F\u5316 \`js\` \u6A94\u6848
- \u5B89\u88DD\uFF1A\`npm install terser-webpack-plugin -D\`
- \u4F7F\u7528\u65B9\u6CD5\uFF1A
  \`\`\`js
  const TerserPlugin = require('terser-webpack-plugin')
  // \u53D6\u5F97\u96FB\u8166\u6838\u5FC3\u6578
  const threads = require('os').cpus().length
  module.exports = {
    optimization: {
      usedExports: true,
      minimize: true,
      minimizer: [
        new TerserPlugin({
          parallel: threads, // \u5728\u6700\u5C0F\u5316\u6642\uFF0C\u555F\u7528\u591A\u6838\u5FC3\u904B\u7B97
          exclude: /node_modules/, // \u6392\u9664 node_modules \u8CC7\u6599\u593E
          extractComments: false, // \u522A\u9664\u58D3\u7E2E\u6A94\u8A3B\u91CB\u8207license
          terserOptions: {
            ecma: 5, // \u6307\u5B9A\u6253\u5305\u7684\u7248\u672C
            compress: {
              warnings: false,
              drop_console: true, // \u53BB\u9664 console
              drop_debugger: true // \u53BB\u9664 debugger
            },
          }
        }),
      ],
    }
  }
  \`\`\`

## FileManagerPlugin
- \u7528\u9014\uFF1A\u6253\u5305\u6642\u524D\u5F8C\u53EF\u57F7\u884C\u52D5\u4F5C
- \u5B89\u88DD\uFF1A\`npm install filemanager-webpack-plugin -D\`
- \u7BC4\u4F8B\uFF1A\u5728 \`webpack\` \u57F7\u884C\u6253\u5305\u5B8C\u57F7\u884C\u8907\u88FD\u6A94\u6848\u52D5\u4F5C
  \`\`\`js
  plugins: [
    new FileManagerPlugin({
      events: {
        onEnd: {
          copy: [
            {
              source: path.resolve(__dirname, \`./your_source\`),
              destination: \`your_destination\`
            },
          ],
        }
      }
    })
  ]
  \`\`\`

## \u958B\u767C\u8207\u6253\u5305\u8A2D\u5B9A
- \u7528\u9014\uFF1A\u7121\u9808\u66F4\u6539\u540C\u9801\u9762\u8A2D\u5B9A\uFF0C\u4E26\u63D0\u9AD8\u958B\u767C\u6548\u7387
- \u8A2D\u5B9A\u6D41\u7A0B
  - \u5B89\u88DD\u5408\u4F75\u7684\u4F9D\u8CF4\u5305\uFF1A\`npm install webpack-merge -D\`
  - \u5275\u5EFA\u4E09\u500B\u6587\u4EF6\uFF0C\u4E26\u4F7F\u7528\u4F9D\u8CF4\u9032\u884C\u5408\u4F75\u5171\u7528\u8A2D\u5B9A
    - \u958B\u767C\u7528\u8A2D\u5B9A\uFF1A\`webpack.dev.js\`
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
    - \u6B63\u5F0F\u6253\u5305\u7528\u8A2D\u5B9A\uFF1A\`webpack.prod.js\`
      - \u5B89\u88DD\u4F9D\u8CF4\uFF1A\`npm i clean-webpack-plugin -D\`
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
    - \u5171\u540C\u7684\u8A2D\u5B9A\uFF1A\`webpack.common.js\`
  - \u8A2D\u5B9A \`package.json script\`
    \`\`\`txt
    "webpack": "webpack --config ./build/webpack.prod.js",
    "dev": "webpack serve --config ./build/webpack.dev.js"
    \`\`\`
`;export{n as default};

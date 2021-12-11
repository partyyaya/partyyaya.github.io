(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["webpackNote"],{"61bb":function(n,r,e){"use strict";e.r(r);var t=e("7a23"),a=Object(t["h"])("a",{class:"markdown__link",href:"https://github.com/partyyaya/Module-Babel-Webpack-Learning",target:"_blank"},[Object(t["h"])("div",null,"Github 檔案")],-1);function s(n,r,e,s,l,o){var c=Object(t["y"])("Loading");return Object(t["r"])(),Object(t["d"])(t["a"],null,[s.displayLoading?(Object(t["r"])(),Object(t["d"])(c,{key:0,class:{"content--hide":!s.showLoading,"content--show":s.showLoading}},null,8,["class"])):Object(t["e"])("",!0),s.displayContent?(Object(t["r"])(),Object(t["d"])("div",{key:1,class:{"markdown-content":!0,"content--hide":!s.showContent,"content--show":s.showContent}},[a,Object(t["h"])("div",{class:"markdown-body",innerHTML:s.htmlContent},null,8,["innerHTML"])],2)):Object(t["e"])("",!0)],64)}var l=e("1da1"),o=(e("96cf"),e("d4cd")),c=e.n(o),i=e("1487"),p=e.n(i),d=e("3a5e"),m="## Module & Babel & Webpack\r\n<a id=\"user-content-top\"></a>\r\n\r\n### 目錄\r\n- [Module](#user-content-module)\r\n- [Babel](#user-content-babel)\r\n- [Webpack](#user-content-webpack)\r\n\r\n<hr id=\"user-content-module\" style=\"height: 2px;\">\r\n\r\n### <a href=\"#user-content-top\" >Module</a>\r\n\r\n#### 說明\r\n- 模塊的定義\r\n  - 局部作用域的代碼塊\r\n- 模塊主要解決問題分析\r\n  - 將功能切分模塊化\r\n  - 消除全局變量\r\n  - 模塊加載的順序\r\n\r\n#### 使用方法\r\n#### 使用 script tag 加載 module\r\n```html\r\n<script src=\"./your.js\" type=\"module\"><\/script>\r\n```\r\n#### 導出與導入\r\n- 導出與導入可分開存在\r\n- 被導入的 module 都會先執行一次\r\n  - 重複導入多次也只會執行一次\r\n- 使用方式\r\n```js\r\n/* \r\n1. 使用 export default 導出導入\r\n一個 module 只能有一個 export default\r\n使用 export default 導出則導入時可以隨意命名\r\n*/\r\n// 導出\r\nexport default { test:'test' };\r\n// 導入\r\nimport m from './module.js'\r\n\r\n/* \r\n2. 一般導出導入\r\n非 export default 不能随意命名\r\n使用一般導出必須命名否則導入無法呼叫\r\n*/\r\n// 導出\r\nexport const age = 18;\r\n// 導入\r\nimport { age } from './module.js';\r\n\r\n/*\r\n3. 複數導出導入\r\n導入時不用按照順序但要同名\r\n*/\r\n// 導出\r\nfunction fn() {}\r\nclass className {}\r\nconst age = 18;\r\nexport { fn, className, age };\r\n// 導入\r\nimport {age, fn, className} from './module.js'\r\n\r\n/*\r\n4. 導出導入使用別名\r\n*/\r\n// 導出\r\nexport { fn as func, className, age };\r\n// 導入\r\nimport { func, age, className as Person } from './module.js';\r\n\r\n/*\r\n5. 整體導入\r\n*/\r\n// 導出\r\nfunction fn() {}\r\nclass className {}\r\nconst age = 18;\r\nexport { fn, className };\r\nexport default age;\r\n// 導入\r\nimport * as test from './module.js'\r\n// export default 可藉由 test.default 取得\r\nconsole.log(test.default.age)\r\n// 一般導出取值方式\r\nconsole.log(test.className)\r\n\r\n/*\r\n6. 同時導入\r\nexport default 必須在最前面就導入\r\n*/\r\n// 導出\r\nfunction fn() {}\r\nclass className {}\r\nconst age = 18;\r\nexport { fn, className };\r\nexport default age;\r\n// 導入\r\nimport age, { func, className } from './module.js';\r\n\r\n/*\r\n7. 導入與導出的複合寫法\r\n若用複合寫法導出的無法在當前模塊使用\r\n*/\r\n// 導出\r\nconst age = 18;\r\nexport { age };\r\n// 導入\r\nexport { age } from './module.js';\r\n// 等於(但無法在當前模塊使用)\r\nimport { age } from './module.js';\r\nexport { age };\r\n```\r\n\r\n#### 細節注意事項\r\n- 1.模塊js內的this為undefined，一般js內的this為window\r\n- 2.import語句只能在最頂層，執行時其他代碼都未執行\r\n- 3.若要在代碼執行時導入則使用 import()\r\n```js\r\nif (PC) {\r\n  let pcModule = await import('pc.js');\r\n  // 取得 export default\r\n  console.log(pcModule.default)\r\n} else if (Mobile) {\r\n  import('mobile.js').then((result)=>{\r\n    // 取得 export default\r\n    console.log(result.default)\r\n  }).catch();\r\n}\r\n```\r\n\r\n<hr id=\"user-content-babel\" style=\"height: 2px;\">\r\n\r\n### <a href=\"#user-content-top\" >Babel</a>\r\n\r\n#### 介紹\r\n- 官網: [babel](https://babeljs.io/)\r\n- 線上編譯: [babel-online](https://babeljs.io/repl)\r\n```txt\r\nBabel 是 JavaScript 的編譯器\r\n用來將 ES6 的代碼，轉換成 ES6 之前的代碼\r\n\r\n但對於 ES6 新增的 API，如 Set、Map、Promise 等全局對象\r\n及一些定義在全局對像上的方法（比如 Object.assign/Array.from）\r\n都不能直接編譯，需要藉助其它的模塊\r\nBabel 一般需配合 Webpack 來編譯模塊語法\r\n```\r\n<br>\r\n\r\n#### 使用\r\n- 1.安裝node: [node](https://nodejs.org/en/)\r\n  - 可以透過指令檢查是否安裝成功 \r\n  ```txt\r\n  檢查 node 版本: node -v\r\n  檢查 npm 版本: npm -v\r\n  ```\r\n- 2.初始化項目(生成 package.json ): npm init\r\n- 3.安装 Babel(寫入package.json)\r\n  ```txt\r\n  npm install --save-dev @babel/core @babel/cli\r\n  npm install --save-dev @babel/core@7.11.0 @babel/cli@7.10.5\r\n  ```\r\n- 4.編譯 ES6\r\n  - 1.Babel 配置文件\r\n  ```txt\r\n  配置轉譯包:\r\n  npm install @babel/preset-env@7.11.0 --save-dev\r\n  創建配置文件 .babelrc 並配置:\r\n  {\"presets\": [\"@babel/preset-env\"]}\r\n  ```\r\n  - 2.在 package.json 文件中 scripts 添加 babel 的命令\r\n  ```txt\r\n  兩句指令相等(-d = --out-dir = 輸出目錄)\r\n  babel src -d dist\r\n  babel src --out-dir dist\r\n  ```\r\n  - 3.執行 npm run build 即可編譯使用babel\r\n\r\n<hr id=\"user-content-webpack\" style=\"height: 2px;\">\r\n\r\n### <a href=\"#user-content-top\" >Webpack</a>\r\n#### 介紹\r\n- 官網: [webpack](https://webpack.js.org/)\r\n```txt\r\nwebpack 是靜態模塊打包器\r\nwebpack 處理時，會將所有模塊打包成一或多個文件\r\n```\r\n<br>\r\n\r\n#### 初始化\r\n- 1.安裝node: [node](https://nodejs.org/en/)\r\n  - 可以透過指令檢查是否安裝成功 \r\n  ```txt\r\n  檢查 node 版本: node -v\r\n  檢查 npm 版本: npm -v\r\n  ```\r\n- 2.初始化項目(生成 package.json ): npm init\r\n- 3.安装 webpack(寫入package.json)\r\n  ```txt\r\n  npm install --save-dev webpack-cli@3.3.12 webpack@4.44.1\r\n  ```\r\n- 4.配置 webpack\r\n  - 1.創建  webpack.config.js 檔案\r\n  ```javascript\r\n  const path = require('path');\r\n  // mode: 'development' 代表單純編譯不混淆不壓縮(不寫則默認混淆並壓縮)\r\n  // entry: 代表需要編譯的檔案路徑\r\n  // output: 輸出路徑(建立dist資料夾並新增編譯完成的文件 bundle.js)\r\n  module.exports = {\r\n    mode: 'development',\r\n    entry: './src/index.js',\r\n    output: {\r\n      path: path.resolve(__dirname, 'dist'),\r\n      filename: 'bundle.js'\r\n    }\r\n  };\r\n  ```\r\n  - 2.在 package.json 文件中 scripts 添加 webpack 的命令\r\n  ```txt\r\n  兩句指令相等\r\n  (預設指向 webpack.config.js 若要改其他名字則可用 --config)\r\n  \"webpack\": \"webpack --config webpack.config.js\" \r\n  \"webpack\": \"webpack\" \r\n  ```\r\n- 5.編譯執行\r\n  - npm run webpack\r\n\r\n<br>\r\n\r\n#### 核心概念\r\n- 1.entry & output\r\n```js\r\n// entry\r\n// 單入口\r\nentry: './src/index.js',\r\n// 多入口\r\nentry: {\r\n  main: './src/index.js',\r\n  search: './src/search.js'\r\n},\r\n\r\n// output\r\n// 若只有單入口\r\noutput: {\r\n  path: path.resolve(__dirname, 'dist'),\r\n  filename: 'bundle.js'\r\n}\r\n\r\n// 若有多入口\r\n// [name] 會比對取得多入口的名字:比如在entry 裡面定義 search入口 則會輸出search.js\r\n// [name] 若只有單入口則預設為 main.js\r\noutput: {\r\n  path: path.resolve(__dirname, 'dist'),\r\n  filename: '[name].js'\r\n}\r\n```\r\n- 2.loader(使用 Babel 做參考)\r\n  - loader官網: [loader](https://www.webpackjs.com/loaders/)\r\n  - 使用目的: loader 讓 webpack 能夠去處理那些非 JS 文件的模塊\r\n  - 1.安裝 babel-loader (讓webpack能使用Babel)\r\n  ```txt\r\n  npm install --save-dev babel-loader@8.1.0\r\n  ```\r\n  - 2.安装 Babel\r\n  ```txt\r\n  npm install --save-dev @babel/core@7.11.0 @babel/preset-env@7.11.0\r\n  ```\r\n  - 3.配置 babel-loader (在 webpack.config.js 新增)\r\n  ```js\r\n  module: {\r\n    rules: [\r\n      {\r\n        test: /\\.js$/, // 使用正則表達式讓webpack尋找.js的程式\r\n        exclude: /node_modules/, // 排除node_modules資料夾內的js檔案\r\n        loader: 'babel-loader' //使用babel-loader編譯成es5\r\n      }\r\n    ]\r\n  }\r\n  ```\r\n  - 4.引入 core-js\r\n  ```txt\r\n  安裝 core\r\n  npm install --save-dev core-js@3.6.5\r\n  於需要編譯的js檔加入\r\n  import \"core-js/stable\"\r\n  ```\r\n  - 5.進行編譯與打包\r\n  ```txt\r\n  npm run webpack\r\n  ```\r\n- 3.plugins(使用 html插件 做參考)\r\n  - 使用目的: 讓webpack可以執行更廣泛的任務\r\n  - 1.安裝 html 插件\r\n  ```txt\r\n  npm install --save-dev html-webpack-plugin@4.3.0\r\n  ```\r\n  - 2.配置 html插件\r\n  ```js\r\n  // 於 webpack.config.js 在頂部新增 \r\n  const HtmlWebpackPlugin = require('html-webpack-plugin');\r\n  ```\r\n  - 3.插件配置\r\n  ```js\r\n  plugins: [\r\n    // 設定增加需要顯示的頁面\r\n    new HtmlWebpackPlugin({\r\n      // 原資料檔案\r\n      template: './index.html',\r\n      // 輸出檔案名\r\n      filename: 'index.html',\r\n      // 設定需要的資源(entry)\r\n      chunks: ['index'],\r\n      minify: {\r\n        // 删除 html 中的註釋\r\n        removeComments: true,\r\n        // 删除 html 中的空格\r\n        collapseWhitespace: true,\r\n        // 删除 html 標籤的雙引號\r\n        removeAttributeQuotes: true,\r\n        // 將 html 文件內的 css 壓縮\r\n        minifyCSS: true,\r\n        // 將 html 文件內的 js 壓縮\r\n        minifyJS: true\r\n      }\r\n    })\r\n  ]\r\n  ```\r\n  - 4.進行編譯與打包\r\n  ```txt\r\n  npm run webpack\r\n  ```\r\n<br>\r\n\r\n#### 一些應用\r\n#### 處理 css 文件\r\n- 1.加入 css-loader\r\n```txt\r\nnpm install --save-dev css-loader\r\n```\r\n- 2.於要引入的js檔案頂部加入 import './your.css';\r\n- 3.接下來有兩種方式處理css文件\r\n  - 1.於html文件加入style區塊\r\n    - 1.安裝 style-loader\r\n    ```txt\r\n    npm install --save-dev style-loader\r\n    ```\r\n    - 2.在 webpack.config 新增css規則\r\n    ```js\r\n    module: {\r\n      rules: [\r\n        {\r\n          test: /\\.css$/,\r\n          // 若有多個loader則用use,會從最後一個往前使用loader\r\n          // css-loader 會先抓取js的css檔並透過style-loader在html檔生成style標籤\r\n          use: ['style-loader', 'css-loader']\r\n        }\r\n      ]\r\n    },\r\n    plugins: [\r\n      new HtmlWebpackPlugin({\r\n        template: './index.html',\r\n        filename: 'index.html'\r\n      })\r\n    ]\r\n    ```\r\n  - 2.使用 link 方式導入 css\r\n    - 1.安裝 mini-css-extract-plugin\r\n    ```txt\r\n    npm install --save-dev mini-css-extract-plugin\r\n    ```\r\n    - 2.在 webpack.config 新增css規則\r\n    ```js\r\n    const MiniCssExtractPlugin = require('mini-css-extract-plugin');\r\n    module: {\r\n      rules: [\r\n        {\r\n          test: /\\.css$/,\r\n          // 若有多個loader則用use,注意這邊會從最後一個往前使用loader\r\n          // css-loader 會先將js的css檔抓取並透過MiniCssExtractPlugin.loader在html檔使用link引入css檔\r\n          use: [MiniCssExtractPlugin.loader, 'css-loader']\r\n        }\r\n      ]\r\n    },\r\n    plugins: [\r\n      new HtmlWebpackPlugin({\r\n        template: './index.html',\r\n        filename: 'index.html'\r\n      }),\r\n      new MiniCssExtractPlugin({\r\n        filename: 'css/[name].css' // 這邊會再輸出目錄在創建 css 資料夾並放入 css檔案(預設為main.css)\r\n      })\r\n    ]\r\n    ```\r\n<br/>\r\n\r\n#### 處理 css 與 js 圖片\r\n- 1.安裝file-loader\r\n```txt\r\nnpm install --save-dev file-loader\r\n```\r\n- 2.新增 webpack.config 規則\r\n```js\r\nmodule: {\r\n  rules: [\r\n    {\r\n      test: /\\.css$/,\r\n      use: [\r\n      // file-loader 會把 css 裡面引入的圖片路徑換掉成輸出後的檔名\r\n      // 注意:若圖片不在同目錄則需要自己設定publicPath路徑\r\n      // 因需要將圖片設置在 img 資料夾讓css抓取圖片,所以須用此方式並設定publicPath回上一層\r\n        {\r\n          loader: MiniCssExtractPlugin.loader,\r\n          options: {\r\n            publicPath: '../'\r\n          }\r\n        },\r\n        'css-loader'\r\n      ]\r\n    },\r\n    // 設定 file-loader:在輸出資料夾創建img資料夾並保留原檔名與副檔名\r\n    {\r\n      test: /\\.(jpg|png|gif)$/,\r\n      use: {\r\n        loader: 'file-loader',\r\n        options: {\r\n          name: 'img/[name].[ext]'\r\n        }\r\n      }\r\n    }\r\n  ]\r\n},\r\nplugins: [\r\n  new HtmlWebpackPlugin({\r\n    template: './index.html',\r\n    filename: 'index.html'\r\n  }),\r\n  new MiniCssExtractPlugin({\r\n    filename: 'css/[name].css'\r\n  })\r\n]\r\n```\r\n- 3.加載 js 本地圖片\r\n```js\r\n// 在 js 加入該行即可\r\n// file-loader 會自動解析將裡面的圖片複製到 file-loader 設定的資料夾裡面\r\nimport img from './img/logo.png';\r\n```\r\n<br/>\r\n\r\n#### 處理 html 圖片\r\n- 1.安裝 html-withimg-loader\r\n```txt\r\nnpm install --save-dev html-withimg-loader\r\n```\r\n- 2.新增 webpack.config 規則\r\n```js\r\nmodule: {\r\n  rules: [\r\n    {\r\n      test: /\\.(jpg|png|gif)$/,\r\n      use: {\r\n        loader: 'file-loader',\r\n        options: {\r\n          name: 'img/[name].[ext]',\r\n          // 因 webpack 將 require() 調用解析為：{ default: module } 所以要設為 false\r\n          esModule: false\r\n        }\r\n      }\r\n    },\r\n    {\r\n      test: /\\.(htm|html)$/,\r\n      loader: 'html-withimg-loader'\r\n    }\r\n  ]\r\n},\r\n```\r\n<br/>\r\n\r\n#### 使用 url-loader 處理圖片\r\n- 1.安裝 url-loader\r\n```txt\r\n因 url-loader 會用到 file-loader 所以一併安裝\r\nnpm install --save-dev file-loader\r\nnpm install --save-dev url-loader\r\n```\r\n- 2.新增 webpack.config 規則\r\n```js\r\n// 若原本有 file-loader 則 直接替換成 url-loader 即可\r\n// url-loader 會讀取圖片大小，若小於limit的大小則轉化成base64格式融入文檔中\r\n// 當圖片大小超過limit則會改調用 file-loader 將圖片複製到指定路徑\r\nmodule: {\r\n  rules: [\r\n    {\r\n      test: /\\.(jpg|png|gif)$/,\r\n      use: {\r\n        loader: 'url-loader',\r\n        options: {\r\n          name: 'img/[name].[ext]',\r\n          esModule: false,\r\n          limit: 3000\r\n        }\r\n      }\r\n    }\r\n  ]\r\n}\r\n```\r\n<br/>\r\n\r\n#### 使用 webpack-dev-server 搭建開發環境\r\n- 1.安裝 webpack-dev-server\r\n```txt\r\nnpm install --save-dev webpack-dev-server\r\n```\r\n- 2.在 package.json 內 script 新增\r\n```js\r\n//   若使用 npm run dev 則開啟 server，在打包完成後自動打開 chrome 來查看結果\r\n//   webpack-dev-server 只要存檔就會自動打包在內存並開啟指定的瀏覽器進行刷新\r\n\"scripts\": {\r\n  \"dev\": \"webpack-dev-server --open chrome\"\r\n},\r\n```\r\n- 備註\r\n>webpack-dev-server 在 webpack.config.js 有默認設定\\\r\n若要改變則新增 devServer:{} 自行設定\\\r\n[devServer 詳細設定參考](https://www.webpackjs.com/configuration/dev-server/)\r\n",u=Object(t["w"])(!0),b=Object(t["w"])(!1),g=Object(t["w"])(!0),f=Object(t["w"])(!1),h=Object(t["w"])(""),j={name:"WebpackNote",components:{Loading:d["a"]},setup:function(){return Object(t["p"])(Object(l["a"])(regeneratorRuntime.mark((function n(){var r,e;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:u.value&&(r=c()({html:!0,linkify:!0,typographer:!0,highlight:function(n,r){return p.a.highlight(n,{language:r}).value}}),e=r.render("".concat(m)),h.value=e,setTimeout((function(){u.value=!1,setTimeout((function(){g.value=!1,f.value=!0,setTimeout((function(){b.value=!0}),100)}),500)}),1e3));case 1:case"end":return n.stop()}}),n)})))),{showLoading:u,showContent:b,displayLoading:g,displayContent:f,htmlContent:h}}};e("c550");j.render=s;r["default"]=j},c550:function(n,r,e){"use strict";e("c78a")},c78a:function(n,r,e){}}]);
//# sourceMappingURL=webpackNote.52f58438.js.map
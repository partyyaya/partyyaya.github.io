(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["mobileAdaptationNote"],{"0e89":function(n,r,e){"use strict";e("f7b0")},c45b:function(n,r,e){"use strict";e.r(r);var t=e("7a23");function i(n,r,e,i,o,a){var s=Object(t["y"])("Loading");return Object(t["r"])(),Object(t["d"])(t["a"],null,[i.displayLoading?(Object(t["r"])(),Object(t["d"])(s,{key:0,class:{"content--hide":!i.showLoading,"content--show":i.showLoading}},null,8,["class"])):Object(t["e"])("",!0),i.displayContent?(Object(t["r"])(),Object(t["d"])("div",{key:1,class:{"markdown-content":!0,"content--hide":!i.showContent,"content--show":i.showContent}},[Object(t["h"])("div",{class:"markdown-body",innerHTML:i.htmlContent},null,8,["innerHTML"])],2)):Object(t["e"])("",!0)],64)}var o=e("1da1"),a=(e("96cf"),e("ed08")),s=e("df69"),c=e("d4cd"),d=e.n(c),p=e("2338"),m=e("1487"),l=e.n(m),h=e("3a5e"),w='## 移動端適配 筆記\r\n<a id="user-content-top"></a>\r\n\r\n### 目錄\r\n<details open>\r\n<summary style="cursor: pointer;">&nbsp;目錄清單 </summary>\r\n\r\n- [viewport 介紹](#user-content-viewport)\r\n- [放大縮小、dpr、ppi 介紹](#user-content-scale-dpr-ppi)\r\n- [自適應 與 響應式 布局介紹](#user-content-adaptive-rwd-concept)\r\n- [rem 介紹](#user-content-rem)\r\n- [vw 與 vh 介紹](#user-content-vw-vh)\r\n- [@media 介紹](#user-content-media-query)\r\n- [檢測平台與斷點方法](#user-content-detect-platform-breakpoint)\r\n- [手機白邊修正方法](#user-content-mobile-white-border)\r\n\r\n</details>\r\n\r\n<hr id="user-content-viewport" style="height: 4px;">\r\n\r\n#### <a href="#user-content-top" >viewport 介紹</a>\r\n- 什麼是 `viewport`？\r\n  ```txt\r\n  為瀏覽器窗口，顯示網頁的區域。\r\n  可理解為容納 html 元素的元素。\r\n  若 html 元素等於瀏覽器寬度時，即為 viewport 寬度的 100%\r\n  ```\r\n- 視口類型可分為PC端與移動端，以下分別介紹\r\n  - PC端：視口為瀏覽器窗口區域\r\n  - 移動端：分為三種視口\r\n    - 布局視口：`layout viewport`\r\n      - 可藉由 `document.documentElement.clientWidth/clientHeight` 取得\r\n      ```txt\r\n      在移動端使用默認寬度的視口，\r\n      通常默認為 768、980、1024px，\r\n      以解決早期 PC 頁面在移動端顯示的問題，\r\n      顯示時會有左右滾動條。\r\n      ```\r\n    - 視覺視口：`visual viewport`\r\n      - 可藉由 `window.innerWidth / innerHeight` 取得\r\n      ```txt\r\n      為使用者看到網站的寬度，也是移動端瀏覽器的寬度。\r\n      在縮放網頁時，操作的是視覺視口，而布局視口仍保持原寬度。\r\n      ```\r\n    - 理想視口：`ideal viewport`\r\n      - 可藉由 `screen.width / height` 取得\r\n      ```txt\r\n      簡單來說就是 布局視口 等於 視覺視口 的寬度\r\n      ```\r\n- `viewport` 屬性配置\r\n  - 常用配置：\r\n    ```html\r\n    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">\r\n    ```\r\n    - `width=device-width`：\r\n      ```txt\r\n      此設置使 布局視口 等於 設備寬度，\r\n      因此取得寬度方式可變成：\r\n      const viewWidth = document.documentElement.clientWidth || window.innerWidth;\r\n      ```\r\n    - `initial-scale=1.0`：此設置使 `視覺視口` 等於 `理想視口`\r\n  - 屬性介紹：\r\n    - `width`：視口的寬度，單位為像素，可為正整數或設備寬度 `device-width`\r\n    - `height`：視口的高度，單位為像素，可為正整數或設備高度 `device-height`\r\n    - `initial-scale`：初始縮放值，可為整數或小數\r\n    - `minimum-scale`：縮小的最小比例，須小於等於 `maximum-scale` 設置，可為整數或小數\r\n    - `maximum-scale`：放大的最大比例，須大於等於 `minimum-scale` 設置，可為整數或小數\r\n    - `user-scalable`：是否允許使用者手動縮放頁面，默認值為 `yes`\r\n\r\n<hr id="user-content-scale-dpr-ppi" style="height: 2px;">\r\n\r\n#### <a href="#user-content-top" >放大縮小、dpr、ppi 介紹</a>\r\n- 首先須了解兩種像素\r\n  - 設備物理像素：設備螢幕顯示的每個點\r\n  - 邏輯像素(CSS像素)：顯示畫面給使用者的每個單位\r\n  - ps：設計師給的設計稿是根據 `設備物理像素` 為單位製作的設計稿。\r\n- 放大與縮小\r\n  - 縮放的目的是為了使 `CSS像素` 適應移動端的 `設備物理像素`\r\n  - 如何辦到：\r\n    ```txt\r\n    將更多或更少的 設備物理像素 結合成一個 CSS像素\r\n    更多為放大，更少為縮小，並會影響到 布局視口 大小\r\n    ```\r\n- 什麼是 `dpr`？\r\n  ```txt\r\n  全名為 device pixel ratio 設備像素比，\r\n  即 設備物理像素 與 CSS像素 的比例\r\n  ```\r\n- 什麼是 `ppi`？\r\n  ```txt\r\n  全名為 Pixels Per Inch 每英吋物理像素點，公式如下：\r\n  ppi = dp/di = √(wp^2+hp^2)/di\r\n  dp=螢幕對角線分辨率\r\n  wp=螢幕橫向分辨率\r\n  hp=螢幕縱向分辨率\r\n  di=對角線長度(英吋)\r\n  範例：\r\n  若有一台手機，1792x828 分辨率、6.06英吋，則：\r\n  √(1792^2+828^2)/6.06 = 326ppi\r\n  ```\r\n- 放大縮小 與 `dpr` 的關係\r\n  - 成正比關係\r\n  - 舉例：\r\n    ```txt\r\n    假設 div 寬高各為 2px，\r\n    則 dpr=1 時，顯示 4(2x2) 個設備物理像素\r\n    若 dpr=2 時，顯示 4^2=16 個設備物理像素，依此類推  \r\n    ```\r\n- 移動端 `dpr` 適配範例：\r\n  ```js\r\n  // 偵測移動品牌\r\n  const isAndroid = window.navigator.appVersion.match(/android/gi);\r\n  const isIPhone = window.navigator.appVersion.match(/iphone/gi);\r\n  const devicePixelRatio = window.devicePixelRatio;\r\n  // 除了iOS以外，其他移動端皆使用1倍方案\r\n  if (isIPhone) {\r\n    if (devicePixelRatio >= 3) {                \r\n      dpr = 3;\r\n    } else if (devicePixelRatio >= 2){\r\n      dpr = 2;\r\n    } else {\r\n      dpr = 1;\r\n    }\r\n  } else {\r\n    dpr = 1;\r\n  }\r\n  scale = 1 / dpr;\r\n  ```\r\n\r\n<hr id="user-content-rem" style="height: 2px;">\r\n\r\n#### <a href="#user-content-top" >自適應 與 響應式 概念介紹</a>\r\n- 什麼是 `自適應`？\r\n  - 英文為 `AWD`，全稱為 `Adaptive Web Design`\r\n  - 以 `移動端` 為優先考量\r\n  - 優點：專為各平台設計，可針對該裝置功能進行優化\r\n  - 難點：可能要花較多的時間針對裝置平台功能優化與填充資訊\r\n  - 主要特點：`PC端` 顯示專門為 `PC端` 製作的頁面，`移動端` 顯示專門為 `移動端` 製作的頁面\r\n- 什麼是 `響應式`？\r\n  - 英文為 `RWD`，全稱為 `Responsive Website Design`\r\n  - 優點：一致的介面體驗，解決對於不同的裝置佈局的管理，因為是單一網址所以 `SEO` 效果較好\r\n  - 難點：應對不同裝置時要考量結構上的變動。當層級和資訊量很多時，呈現的東西很有限。\r\n  - 主要特點：會監測窗口寬度來對網頁結構進行轉變\r\n- 如何判斷選擇哪種製作方式？\r\n  - 若資訊量很大(像 `PC端` 想在首頁加入很多促銷)或想針對移動端各平台優化，則選 `AWD`\r\n  - 若資訊量適中(像秀出幾件熱門的主商品)，且維護簡單，則選 `RWD`\r\n- 主要共同優化的幾點要素：\r\n  - 清楚的動線規劃\r\n  - 明確的讓使用者專注於達成目標\r\n  - 增快網頁渲染速度\r\n\r\n<hr id="user-content-rem" style="height: 2px;">\r\n\r\n#### <a href="#user-content-top" >rem 介紹</a>\r\n- 什麼是 `rem`？\r\n  ```txt\r\n  指相對於根元素(html)的字體大小的單位，\r\n  其佈局本質為等比縮放，一般是基於視口寬度。\r\n  ```\r\n- 使用案例：\r\n  ```css\r\n  html {\r\n    /* 設定 1rem 等同於 100px */\r\n    font-size: 100px;\r\n  }\r\n  .else__element {\r\n    /* 等同於 100px */\r\n    font-size: 1rem;\r\n  }\r\n  ```\r\n- 針對窗口調整大小範本：\r\n  ```js\r\n  (function () {\r\n    \'use strict\';\r\n    const docEl = document.documentElement\r\n    const viewportEl = document.querySelector(\'meta[name="viewport"]\'),\r\n    const dpr = window.devicePixelRatio || 1,\r\n    let maxWidth = 540,\r\n    let minWidth = 320;\r\n\r\n    // 設備像素比最大到3倍\r\n    dpr = dpr >= 3 ? 3 : (dpr >= 2 ? 2 : 1);\r\n\r\n    docEl.setAttribute(\'data-dpr\', dpr);\r\n    docEl.setAttribute(\'max-width\', maxWidth);\r\n    docEl.setAttribute(\'min-width\', minWidth);\r\n\r\n    let scale = 1 / dpr\r\n    // 關於 shrink-to-fit=no, viewport-fit=cover 屬性相關的 css 配置，可參考手機白邊修正方法\r\n    let content = `\r\n      width=device-width,\r\n      initial-scale=${scale},\r\n      maximum-scale=${scale},\r\n      minimum-scale=${scale},\r\n      user-scalable=no,\r\n      shrink-to-fit=no,\r\n      viewport-fit=cover\r\n    `;\r\n\r\n    // 若頁面上無 viewport 屬性標籤，則創建新的標籤\r\n    if (viewportEl) {\r\n        viewportEl.setAttribute(\'content\', content);\r\n    } else {\r\n        viewportEl = document.createElement(\'meta\');\r\n        viewportEl.setAttribute(\'name\', \'viewport\');\r\n        viewportEl.setAttribute(\'content\', content);\r\n        document.head.appendChild(viewportEl);\r\n    }\r\n\r\n    // 初始設置rem\r\n    setRemUnit();\r\n    // 當瀏覽器改變寬高時，重新計算rem\r\n    window.addEventListener(\'resize\', setRemUnit);\r\n    function setRemUnit() {\r\n      // 這邊以設計圖 375px 來計算，設定初始 rem 為 20px\r\n      // 20px 比較好計算 rem，375px/20px=18.75(ratio)\r\n      const ratio = 18.75;\r\n      let viewWidth = docEl.getBoundingClientRect().width || window.innerWidth;\r\n\r\n      if (maxWidth && (viewWidth / dpr > maxWidth)) {\r\n        viewWidth = maxWidth * dpr;\r\n      } else if (minWidth && (viewWidth / dpr < minWidth)) {\r\n        viewWidth = minWidth * dpr;\r\n      }\r\n      docEl.style.fontSize = viewWidth / ratio + \'px\';\r\n    }\r\n  })();\r\n  ```\r\n\r\n<hr id="user-content-vw-vh" style="height: 2px;">\r\n\r\n#### <a href="#user-content-top" >vw 與 vh 介紹</a>\r\n- `vw`：代表 `view width`，指螢幕可視範圍寬度的百分比\r\n- `vh`：代表 `view height`，指螢幕可視範圍高度的百分比\r\n- `vmin`：寬度或高度最小值的百分比\r\n- `vmax`：寬度或高度最大值的百分比\r\n- `vw`、`vh` 與 `%` 差別：\r\n  - `%`：標籤內需要有內容才會顯示，`vw`、`vh`：不需要內容就會顯示\r\n  - `%`：以父元素為基準，`vw`、`vh`：以裝置螢幕可視範圍大小為基準。\r\n- 移動端 `vh` 含地址欄高度處理方法：\r\n  ```js\r\n  // 計算 1% 的視覺視口\r\n  let vh = window.innerHeight * 0.01;\r\n  // 設置新屬性：--vh，名稱可自取\r\n  document.documentElement.style.setProperty(\'--vh\', `${vh}px`);\r\n  // 監聽窗口大小\r\n  window.addEventListener(\'resize\', () => {\r\n    // 若窗口大小改變，則重新計算 --vh\r\n    let vh = window.innerHeight * 0.01;\r\n    document.documentElement.style.setProperty(\'--vh\', `${vh}px`);\r\n  });\r\n  ```\r\n  ```css\r\n  /* \r\n    使用自定屬性方法\r\n    calc()：用來計算css屬性值\r\n    var()：判斷第一個參數屬性是否可用，否則就用後面的參數屬性\r\n           可透過逗號增加候補屬性，並依序往後尋找可用屬性\r\n  */\r\n  .test {\r\n    /* 100 代表 100vh，可調整為該容器的高度 */\r\n    height: calc(var(--vh, 1vh) * 100);\r\n  }\r\n  ```\r\n\r\n<hr id="user-content-media-query" style="height: 2px;">\r\n\r\n#### <a href="#user-content-top" >@media 介紹</a>\r\n- 什麼是 `@media`？\r\n  ```txt\r\n  @media 稱為 媒體查詢，\r\n  讓開發者能針對不同的窗口大小切換樣式\r\n  ```\r\n- 類型常用有以下幾種：\r\n  - `all`：為默認，使用時 `and` 需去掉否則會發生錯誤\r\n  - `screen`：主要用於各平台螢幕，需使用邏輯連接\r\n  - `speech`：適用於語音合成器、語音朗讀裝置，需使用邏輯連接\r\n  - `print`：適用於列印預覽模式下在螢幕上查看的文件，需使用邏輯連接\r\n- 邏輯連接有以下幾種：\r\n  - 與：`and`\r\n  - 或：逗號 `,`\r\n  - 非：`not`\r\n- 媒體查詢三種使用方式：\r\n  - 在 `style` 標籤內加入\r\n    ```css\r\n    /* 寬度 577px 至 768px 的平台使用此樣式 */\r\n    @media (min-width: 577px) and (max-width: 768px) {\r\n      .test {\r\n        color: blue;\r\n      }\r\n    }\r\n    ```\r\n  - 使用 `@import` 加入\r\n    ```css\r\n    /* 寬度 900px 以上的平台使用 test.css 樣式 */\r\n    @import url(test.css) screen and (min-width: 900px);\r\n    ```\r\n  - 使用 `HTML` 加入\r\n    ```html\r\n    <head>\r\n      <link rel="stylesheet" media="screen" href="./style.css">\r\n      <link rel="stylesheet" media="print" href="./print.css">\r\n    </head>\r\n    ```\r\n- 常用斷點與使用範例：\r\n  - `PC版` 優先的 `@media` 範例：\r\n    ```css\r\n    /* \r\n      pc first\r\n      width 代表一張圖片佔窗口的寬度 \r\n      max-width：窗口最大寬度，大於此寬度不會生效\r\n    */\r\n    .col {\r\n      width: 8.333333333%;\r\n    }\r\n    @media (max-width: 1200px) {\r\n      .col {\r\n        width: 16.6666666667%;\r\n      }\r\n    }\r\n    @media (max-width: 992px) {\r\n      .col {\r\n        width: 25%;\r\n      }\r\n    }\r\n    @media (max-width: 768px) {\r\n      .col {\r\n        width: 50%;\r\n      }\r\n    }\r\n    @media (max-width: 576px) {\r\n      .col {\r\n        width: 100%;\r\n      }\r\n    }\r\n    ```\r\n  - `移動端` 優先的 `@media` 範例：\r\n    ```css\r\n    /* \r\n      mobile first\r\n      width 代表一張圖片佔窗口的寬度 \r\n      min-width：窗口最小寬度，小於此寬度不會生效\r\n    */\r\n    .col {\r\n      width: 100%;\r\n    }\r\n    @media (min-width: 576px) {\r\n      .col {\r\n        width: 50%;\r\n      }\r\n    }\r\n    @media (min-width: 768px) {\r\n      .col {\r\n        width: 25%;\r\n      }\r\n    }\r\n    @media (min-width: 992px) {\r\n      .col {\r\n        width: 16.6666666667%;\r\n      }\r\n    }\r\n    @media (min-width: 1200px) {\r\n      .col {\r\n        width: 8.33333333%;\r\n      }\r\n    }\r\n    ```\r\n  \r\n<hr id="user-content-detect-platform-breakpoint" style="height: 2px;">\r\n\r\n#### <a href="#user-content-top" >檢測平台與斷點方法</a>\r\n- 判斷斷點可參考：[Bootstrap breakpoints](https://getbootstrap.com/docs/5.0/layout/breakpoints/#available-breakpoints)\r\n  - 關鍵字可搜尋：`bootstrap media queries breakpoints`\r\n- 檢測手機瀏覽器方法：\r\n  ```js\r\n  // 偵測移動品牌，若為 null 則非手機\r\n  const isAndroid = window.navigator.appVersion.match(/android/gi);\r\n  const isIPhone = window.navigator.appVersion.match(/iphone/gi);\r\n  // 以 android pixel5 印出 window.navigator.appVersion 資訊\r\n  // 5.0 (Linux; Android 11; Pixel 5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.91 Mobile Safari/537.36\r\n  ```\r\n- 檢測是否為手機或平板方法：\r\n  - 可參考該網站 `Regex`：[detectmobilebrowsers](http://detectmobilebrowsers.com/) \r\n  - 使用範例：\r\n    ```js\r\n    // 檢測是否為手機(平板如 ipad 會返回 false)\r\n    window.mobileCheck = function() {\r\n      let check = false;\r\n      (function(a){if(/(android|bb\\d+|meego).+mobile|avantgo|bada\\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\\-(n|u)|c55\\/|capi|ccwa|cdm\\-|cell|chtm|cldc|cmd\\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\\-s|devi|dica|dmob|do(c|p)o|ds(12|\\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\\-|_)|g1 u|g560|gene|gf\\-5|g\\-mo|go(\\.w|od)|gr(ad|un)|haie|hcit|hd\\-(m|p|t)|hei\\-|hi(pt|ta)|hp( i|ip)|hs\\-c|ht(c(\\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\\-(20|go|ma)|i230|iac( |\\-|\\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\\/)|klon|kpt |kwc\\-|kyo(c|k)|le(no|xi)|lg( g|\\/(k|l|u)|50|54|\\-[a-w])|libw|lynx|m1\\-w|m3ga|m50\\/|ma(te|ui|xo)|mc(01|21|ca)|m\\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\\-2|po(ck|rt|se)|prox|psio|pt\\-g|qa\\-a|qc(07|12|21|32|60|\\-[2-7]|i\\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\\-|oo|p\\-)|sdk\\/|se(c(\\-|0|1)|47|mc|nd|ri)|sgh\\-|shar|sie(\\-|m)|sk\\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\\-|v\\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\\-|tdg\\-|tel(i|m)|tim\\-|t\\-mo|to(pl|sh)|ts(70|m\\-|m3|m5)|tx\\-9|up(\\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\\-|your|zeto|zte\\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);\r\n      return check;\r\n    };\r\n    \r\n    // 檢測是否為手機或平板(不建議使用)\r\n    window.mobileAndTabletCheck = function() {\r\n      let check = false;\r\n      (function(a){if(/(android|bb\\d+|meego).+mobile|avantgo|bada\\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\\-(n|u)|c55\\/|capi|ccwa|cdm\\-|cell|chtm|cldc|cmd\\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\\-s|devi|dica|dmob|do(c|p)o|ds(12|\\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\\-|_)|g1 u|g560|gene|gf\\-5|g\\-mo|go(\\.w|od)|gr(ad|un)|haie|hcit|hd\\-(m|p|t)|hei\\-|hi(pt|ta)|hp( i|ip)|hs\\-c|ht(c(\\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\\-(20|go|ma)|i230|iac( |\\-|\\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\\/)|klon|kpt |kwc\\-|kyo(c|k)|le(no|xi)|lg( g|\\/(k|l|u)|50|54|\\-[a-w])|libw|lynx|m1\\-w|m3ga|m50\\/|ma(te|ui|xo)|mc(01|21|ca)|m\\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\\-2|po(ck|rt|se)|prox|psio|pt\\-g|qa\\-a|qc(07|12|21|32|60|\\-[2-7]|i\\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\\-|oo|p\\-)|sdk\\/|se(c(\\-|0|1)|47|mc|nd|ri)|sgh\\-|shar|sie(\\-|m)|sk\\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\\-|v\\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\\-|tdg\\-|tel(i|m)|tim\\-|t\\-mo|to(pl|sh)|ts(70|m\\-|m3|m5)|tx\\-9|up(\\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\\-|your|zeto|zte\\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);\r\n      return check;\r\n    };\r\n    ```\r\n    \r\n<hr id="user-content-mobile-white-border" style="height: 2px;">\r\n\r\n#### <a href="#user-content-top" >手機白邊修正方法</a>\r\n- 起因：在實務上網頁在某些手機瀏覽時(如：`iphoneX`)會留有上下白邊\r\n- 解決方法：\r\n  - 以 `iphone` 來說，`apple` 有提出安全邊界的概念，可參考下面範例：\r\n  - `viewport` 屬性設置：\r\n    ```html\r\n    \x3c!-- \r\n      設置 viewport-fit=cover 表示全螢幕顯示網頁內容(隱藏白邊) \r\n      設置 shrink-to-fit=no 兼容ios9，阻止頁面縮放以適應視口\r\n    --\x3e\r\n    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no, viewport-fit=cover">\r\n    ```\r\n  - `css` 屬性設置： \r\n    ```scss\r\n    /* 設置安全邊界 */\r\n    @mixin device-full-screen {\r\n      // iOS < 11.2\r\n      padding-left: constant(safe-area-inset-left);\r\n      padding-top: constant(safe-area-inset-top);\r\n      padding-right: constant(safe-area-inset-right);\r\n      padding-bottom: constant(safe-area-inset-bottom);\r\n      // iOS >= 11.2\r\n      padding-left: env(safe-area-inset-left);\r\n      padding-top: env(safe-area-inset-top);\r\n      padding-right: env(safe-area-inset-right);\r\n      padding-bottom: env(safe-area-inset-bottom);\r\n    }\r\n\r\n     #yourPage {\r\n       /* \r\n         Apple 建議使用此方法查詢來檢測和修復網站的缺口環境\r\n         使用 @supports 檢測是否支援 padding: max(0px)\r\n         \r\n         max() 會挑選裡面的最大值，\r\n         如 max(20vw, 400px)，若 400px 比 20vw 大則選 400px\r\n       */\r\n       @supports (padding:max(0px)) {\r\n         @include device-full-screen;\r\n       }    \r\n     }\r\n    ```\r\n',v=Object(t["w"])(!0),u=Object(t["w"])(!1),b=Object(t["w"])(!0),g=Object(t["w"])(!1),x=Object(t["w"])(""),f={name:"MobileAdaptationNote",components:{Loading:h["a"]},setup:function(){return Object(t["p"])(Object(o["a"])(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(!v.value){n.next=7;break}return r=d()({html:!0,linkify:!0,typographer:!0,highlight:function(n,r){return l.a.highlight(n,{language:r}).value}}).use(p["a"]),x.value=r.render("".concat(w)),n.next=5,Object(a["c"])((function(){v.value=!1}),1e3).then((function(){return Object(a["c"])((function(){b.value=!1,g.value=!0}),500)})).then((function(){return Object(a["c"])((function(){u.value=!0,Object(a["a"])()}),100)}));case 5:n.next=8;break;case 7:Object(a["a"])();case 8:case"end":return n.stop()}}),n)})))),Object(s["a"])(),{showLoading:v,showContent:u,displayLoading:b,displayContent:g,htmlContent:x}}};e("0e89");f.render=i;r["default"]=f},f7b0:function(n,r,e){}}]);
//# sourceMappingURL=mobileAdaptationNote.fb7be593.js.map
const n=`<span style="font-size: 32px; font-weight: 600;">\u79FB\u52D5\u7AEF\u9069\u914D</span>

## viewport
- \u4EC0\u9EBC\u662F \`viewport\`\uFF1F
  \`\`\`txt
  \u70BA\u700F\u89BD\u5668\u7A97\u53E3\uFF0C\u986F\u793A\u7DB2\u9801\u7684\u5340\u57DF\u3002
  \u53EF\u7406\u89E3\u70BA\u5BB9\u7D0D html \u5143\u7D20\u7684\u5143\u7D20\u3002
  \u82E5 html \u5143\u7D20\u7B49\u65BC\u700F\u89BD\u5668\u5BEC\u5EA6\u6642\uFF0C\u5373\u70BA viewport \u5BEC\u5EA6\u7684 100%
  \`\`\`
- \u8996\u53E3\u985E\u578B\u53EF\u5206\u70BAPC\u7AEF\u8207\u79FB\u52D5\u7AEF\uFF0C\u4EE5\u4E0B\u5206\u5225\u4ECB\u7D39
  - PC\u7AEF\uFF1A\u8996\u53E3\u70BA\u700F\u89BD\u5668\u7A97\u53E3\u5340\u57DF
  - \u79FB\u52D5\u7AEF\uFF1A\u5206\u70BA\u4E09\u7A2E\u8996\u53E3
    - \u5E03\u5C40\u8996\u53E3\uFF1A\`layout viewport\`
      - \u53EF\u85C9\u7531 \`document.documentElement.clientWidth/clientHeight\` \u53D6\u5F97
      \`\`\`txt
      \u5728\u79FB\u52D5\u7AEF\u4F7F\u7528\u9ED8\u8A8D\u5BEC\u5EA6\u7684\u8996\u53E3\uFF0C
      \u901A\u5E38\u9ED8\u8A8D\u70BA 768\u3001980\u30011024px\uFF0C
      \u4EE5\u89E3\u6C7A\u65E9\u671F PC \u9801\u9762\u5728\u79FB\u52D5\u7AEF\u986F\u793A\u7684\u554F\u984C\uFF0C
      \u986F\u793A\u6642\u6703\u6709\u5DE6\u53F3\u6EFE\u52D5\u689D\u3002
      \`\`\`
    - \u8996\u89BA\u8996\u53E3\uFF1A\`visual viewport\`
      - \u53EF\u85C9\u7531 \`window.innerWidth / innerHeight\` \u53D6\u5F97
      \`\`\`txt
      \u70BA\u4F7F\u7528\u8005\u770B\u5230\u7DB2\u7AD9\u7684\u5BEC\u5EA6\uFF0C\u4E5F\u662F\u79FB\u52D5\u7AEF\u700F\u89BD\u5668\u7684\u5BEC\u5EA6\u3002
      \u5728\u7E2E\u653E\u7DB2\u9801\u6642\uFF0C\u64CD\u4F5C\u7684\u662F\u8996\u89BA\u8996\u53E3\uFF0C\u800C\u5E03\u5C40\u8996\u53E3\u4ECD\u4FDD\u6301\u539F\u5BEC\u5EA6\u3002
      \`\`\`
    - \u7406\u60F3\u8996\u53E3\uFF1A\`ideal viewport\`
      - \u53EF\u85C9\u7531 \`screen.width / height\` \u53D6\u5F97
      \`\`\`txt
      \u7C21\u55AE\u4F86\u8AAA\u5C31\u662F \u5E03\u5C40\u8996\u53E3 \u7B49\u65BC \u8996\u89BA\u8996\u53E3 \u7684\u5BEC\u5EA6
      \`\`\`
- \`viewport\` \u5C6C\u6027\u914D\u7F6E
  - \u5E38\u7528\u914D\u7F6E\uFF1A
    \`\`\`html
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
    \`\`\`
    - \`width=device-width\`\uFF1A
      \`\`\`txt
      \u6B64\u8A2D\u7F6E\u4F7F \u5E03\u5C40\u8996\u53E3 \u7B49\u65BC \u8A2D\u5099\u5BEC\u5EA6\uFF0C
      \u56E0\u6B64\u53D6\u5F97\u5BEC\u5EA6\u65B9\u5F0F\u53EF\u8B8A\u6210\uFF1A
      const viewWidth = document.documentElement.clientWidth || window.innerWidth;
      \`\`\`
    - \`initial-scale=1.0\`\uFF1A\u6B64\u8A2D\u7F6E\u4F7F \`\u8996\u89BA\u8996\u53E3\` \u7B49\u65BC \`\u7406\u60F3\u8996\u53E3\`
    - \`user-scalable=no\`\uFF1A\u6B64\u8A2D\u7F6E\u5728\u544A\u8A34\u700F\u89BD\u5668\uFF0C\u4E0D\u9700\u8981\u96D9\u64CA\u7E2E\u653E\u9019\u7A2E\u64CD\u4F5C\uFF0C\u628A300ms\u5EF6\u9072\u95DC\u4E86
      - \u4F7F\u7528\u6B64\u8A2D\u7F6E\u4FBF\u7121\u9700\u4F7F\u7528 \`fastclick\`
      - chrome32+\u3001firefox\u3001IE/Edge \u7B49\u4E3B\u6D41\u700F\u89BD\u5668\u5747\u57282014\u5E74-2015\u5E74\u5E74\u505A\u4E86\u8DDF\u9032\uFF0C\u76F8\u7E7C\u4FEE\u5FA9\u4E86\u9019\u500B\u554F\u984C\u3002\u59CB\u4F5C\u4FD1\u8005\u7684iOS,\u57282016\u5E743\u6708\u767C\u5E03\u7684iOS9.3\u4E2D\uFF0C\u4E5F\u4FEE\u5FA9\u4E86\u9019\u500B\u554F\u984C\u3002
  - \u5C6C\u6027\u4ECB\u7D39\uFF1A
    - \`width\`\uFF1A\u8996\u53E3\u7684\u5BEC\u5EA6\uFF0C\u55AE\u4F4D\u70BA\u50CF\u7D20\uFF0C\u53EF\u70BA\u6B63\u6574\u6578\u6216\u8A2D\u5099\u5BEC\u5EA6 \`device-width\`
    - \`height\`\uFF1A\u8996\u53E3\u7684\u9AD8\u5EA6\uFF0C\u55AE\u4F4D\u70BA\u50CF\u7D20\uFF0C\u53EF\u70BA\u6B63\u6574\u6578\u6216\u8A2D\u5099\u9AD8\u5EA6 \`device-height\`
    - \`initial-scale\`\uFF1A\u521D\u59CB\u7E2E\u653E\u503C\uFF0C\u53EF\u70BA\u6574\u6578\u6216\u5C0F\u6578
    - \`minimum-scale\`\uFF1A\u7E2E\u5C0F\u7684\u6700\u5C0F\u6BD4\u4F8B\uFF0C\u9808\u5C0F\u65BC\u7B49\u65BC \`maximum-scale\` \u8A2D\u7F6E\uFF0C\u53EF\u70BA\u6574\u6578\u6216\u5C0F\u6578
    - \`maximum-scale\`\uFF1A\u653E\u5927\u7684\u6700\u5927\u6BD4\u4F8B\uFF0C\u9808\u5927\u65BC\u7B49\u65BC \`minimum-scale\` \u8A2D\u7F6E\uFF0C\u53EF\u70BA\u6574\u6578\u6216\u5C0F\u6578
    - \`user-scalable\`\uFF1A\u662F\u5426\u5141\u8A31\u4F7F\u7528\u8005\u624B\u52D5\u7E2E\u653E\u9801\u9762\uFF0C\u9ED8\u8A8D\u503C\u70BA \`yes\`

## \u653E\u5927\u7E2E\u5C0F\u3001dpr\u3001ppi
- \u9996\u5148\u9808\u4E86\u89E3\u5169\u7A2E\u50CF\u7D20
  - \u8A2D\u5099\u7269\u7406\u50CF\u7D20\uFF1A\u8A2D\u5099\u87A2\u5E55\u986F\u793A\u7684\u6BCF\u500B\u9EDE
  - \u908F\u8F2F\u50CF\u7D20(CSS\u50CF\u7D20)\uFF1A\u986F\u793A\u756B\u9762\u7D66\u4F7F\u7528\u8005\u7684\u6BCF\u500B\u55AE\u4F4D
  - ps\uFF1A\u8A2D\u8A08\u5E2B\u7D66\u7684\u8A2D\u8A08\u7A3F\u662F\u6839\u64DA \`\u8A2D\u5099\u7269\u7406\u50CF\u7D20\` \u70BA\u55AE\u4F4D\u88FD\u4F5C\u7684\u8A2D\u8A08\u7A3F\u3002
- \u653E\u5927\u8207\u7E2E\u5C0F
  - \u7E2E\u653E\u7684\u76EE\u7684\u662F\u70BA\u4E86\u4F7F \`CSS\u50CF\u7D20\` \u9069\u61C9\u79FB\u52D5\u7AEF\u7684 \`\u8A2D\u5099\u7269\u7406\u50CF\u7D20\`
  - \u5982\u4F55\u8FA6\u5230\uFF1A
    \`\`\`txt
    \u5C07\u66F4\u591A\u6216\u66F4\u5C11\u7684 \u8A2D\u5099\u7269\u7406\u50CF\u7D20 \u7D50\u5408\u6210\u4E00\u500B CSS\u50CF\u7D20
    \u66F4\u591A\u70BA\u653E\u5927\uFF0C\u66F4\u5C11\u70BA\u7E2E\u5C0F\uFF0C\u4E26\u6703\u5F71\u97FF\u5230 \u5E03\u5C40\u8996\u53E3 \u5927\u5C0F
    \`\`\`
- \u4EC0\u9EBC\u662F \`dpr\`\uFF1F
  \`\`\`txt
  \u5168\u540D\u70BA device pixel ratio \u8A2D\u5099\u50CF\u7D20\u6BD4\uFF0C
  \u5373 \u8A2D\u5099\u7269\u7406\u50CF\u7D20 \u8207 CSS\u50CF\u7D20 \u7684\u6BD4\u4F8B
  \`\`\`
- \u4EC0\u9EBC\u662F \`ppi\`\uFF1F
  \`\`\`txt
  \u5168\u540D\u70BA Pixels Per Inch \u6BCF\u82F1\u540B\u7269\u7406\u50CF\u7D20\u9EDE\uFF0C\u516C\u5F0F\u5982\u4E0B\uFF1A
  ppi = dp/di = \u221A(wp^2+hp^2)/di
  dp=\u87A2\u5E55\u5C0D\u89D2\u7DDA\u5206\u8FA8\u7387
  wp=\u87A2\u5E55\u6A6B\u5411\u5206\u8FA8\u7387
  hp=\u87A2\u5E55\u7E31\u5411\u5206\u8FA8\u7387
  di=\u5C0D\u89D2\u7DDA\u9577\u5EA6(\u82F1\u540B)
  \u7BC4\u4F8B\uFF1A
  \u82E5\u6709\u4E00\u53F0\u624B\u6A5F\uFF0C1792x828 \u5206\u8FA8\u7387\u30016.06\u82F1\u540B\uFF0C\u5247\uFF1A
  \u221A(1792^2+828^2)/6.06 = 326ppi
  \`\`\`
- \u653E\u5927\u7E2E\u5C0F \u8207 \`dpr\` \u7684\u95DC\u4FC2
  - \u6210\u6B63\u6BD4\u95DC\u4FC2
  - \u8209\u4F8B\uFF1A
    \`\`\`txt
    \u5047\u8A2D div \u5BEC\u9AD8\u5404\u70BA 2px\uFF0C
    \u5247 dpr=1 \u6642\uFF0C\u986F\u793A 4(2x2) \u500B\u8A2D\u5099\u7269\u7406\u50CF\u7D20
    \u82E5 dpr=2 \u6642\uFF0C\u986F\u793A 4^2=16 \u500B\u8A2D\u5099\u7269\u7406\u50CF\u7D20\uFF0C\u4F9D\u6B64\u985E\u63A8  
    \`\`\`
- \u79FB\u52D5\u7AEF \`dpr\` \u9069\u914D\u7BC4\u4F8B\uFF1A
  \`\`\`js
  // \u5075\u6E2C\u79FB\u52D5\u54C1\u724C
  const isAndroid = window.navigator.appVersion.match(/android/gi);
  const isIPhone = window.navigator.appVersion.match(/iphone/gi);
  const devicePixelRatio = window.devicePixelRatio;
  // \u9664\u4E86iOS\u4EE5\u5916\uFF0C\u5176\u4ED6\u79FB\u52D5\u7AEF\u7686\u4F7F\u75281\u500D\u65B9\u6848
  if (isIPhone) {
    if (devicePixelRatio >= 3) {                
      dpr = 3;
    } else if (devicePixelRatio >= 2){
      dpr = 2;
    } else {
      dpr = 1;
    }
  } else {
    dpr = 1;
  }
  scale = 1 / dpr;
  \`\`\`

## \u81EA\u9069\u61C9 \u8207 \u97FF\u61C9\u5F0F
- \u4EC0\u9EBC\u662F \`\u81EA\u9069\u61C9\`\uFF1F
  - \u82F1\u6587\u70BA \`AWD\`\uFF0C\u5168\u7A31\u70BA \`Adaptive Web Design\`
  - \u4EE5 \`\u79FB\u52D5\u7AEF\` \u70BA\u512A\u5148\u8003\u91CF
  - \u512A\u9EDE\uFF1A\u5C08\u70BA\u5404\u5E73\u53F0\u8A2D\u8A08\uFF0C\u53EF\u91DD\u5C0D\u8A72\u88DD\u7F6E\u529F\u80FD\u9032\u884C\u512A\u5316
  - \u96E3\u9EDE\uFF1A\u53EF\u80FD\u8981\u82B1\u8F03\u591A\u7684\u6642\u9593\u91DD\u5C0D\u88DD\u7F6E\u5E73\u53F0\u529F\u80FD\u512A\u5316\u8207\u586B\u5145\u8CC7\u8A0A
  - \u4E3B\u8981\u7279\u9EDE\uFF1A\`PC\u7AEF\` \u986F\u793A\u5C08\u9580\u70BA \`PC\u7AEF\` \u88FD\u4F5C\u7684\u9801\u9762\uFF0C\`\u79FB\u52D5\u7AEF\` \u986F\u793A\u5C08\u9580\u70BA \`\u79FB\u52D5\u7AEF\` \u88FD\u4F5C\u7684\u9801\u9762
- \u4EC0\u9EBC\u662F \`\u97FF\u61C9\u5F0F\`\uFF1F
  - \u82F1\u6587\u70BA \`RWD\`\uFF0C\u5168\u7A31\u70BA \`Responsive Website Design\`
  - \u512A\u9EDE\uFF1A\u4E00\u81F4\u7684\u4ECB\u9762\u9AD4\u9A57\uFF0C\u89E3\u6C7A\u5C0D\u65BC\u4E0D\u540C\u7684\u88DD\u7F6E\u4F48\u5C40\u7684\u7BA1\u7406\uFF0C\u56E0\u70BA\u662F\u55AE\u4E00\u7DB2\u5740\u6240\u4EE5 \`SEO\` \u6548\u679C\u8F03\u597D
  - \u96E3\u9EDE\uFF1A\u61C9\u5C0D\u4E0D\u540C\u88DD\u7F6E\u6642\u8981\u8003\u91CF\u7D50\u69CB\u4E0A\u7684\u8B8A\u52D5\u3002\u7576\u5C64\u7D1A\u548C\u8CC7\u8A0A\u91CF\u5F88\u591A\u6642\uFF0C\u5448\u73FE\u7684\u6771\u897F\u5F88\u6709\u9650\u3002
  - \u4E3B\u8981\u7279\u9EDE\uFF1A\u6703\u76E3\u6E2C\u7A97\u53E3\u5BEC\u5EA6\u4F86\u5C0D\u7DB2\u9801\u7D50\u69CB\u9032\u884C\u8F49\u8B8A
- \u5982\u4F55\u5224\u65B7\u9078\u64C7\u54EA\u7A2E\u88FD\u4F5C\u65B9\u5F0F\uFF1F
  - \u82E5\u8CC7\u8A0A\u91CF\u5F88\u5927(\u50CF \`PC\u7AEF\` \u60F3\u5728\u9996\u9801\u52A0\u5165\u5F88\u591A\u4FC3\u92B7)\u6216\u60F3\u91DD\u5C0D\u79FB\u52D5\u7AEF\u5404\u5E73\u53F0\u512A\u5316\uFF0C\u5247\u9078 \`AWD\`
  - \u82E5\u8CC7\u8A0A\u91CF\u9069\u4E2D(\u50CF\u79C0\u51FA\u5E7E\u4EF6\u71B1\u9580\u7684\u4E3B\u5546\u54C1)\uFF0C\u4E14\u7DAD\u8B77\u7C21\u55AE\uFF0C\u5247\u9078 \`RWD\`
- \u4E3B\u8981\u5171\u540C\u512A\u5316\u7684\u5E7E\u9EDE\u8981\u7D20\uFF1A
  - \u6E05\u695A\u7684\u52D5\u7DDA\u898F\u5283
  - \u660E\u78BA\u7684\u8B93\u4F7F\u7528\u8005\u5C08\u6CE8\u65BC\u9054\u6210\u76EE\u6A19
  - \u589E\u5FEB\u7DB2\u9801\u6E32\u67D3\u901F\u5EA6

## rem
- \u4EC0\u9EBC\u662F \`rem\`\uFF1F
  \`\`\`txt
  \u6307\u76F8\u5C0D\u65BC\u6839\u5143\u7D20(html)\u7684\u5B57\u9AD4\u5927\u5C0F\u7684\u55AE\u4F4D\uFF0C
  \u5176\u4F48\u5C40\u672C\u8CEA\u70BA\u7B49\u6BD4\u7E2E\u653E\uFF0C\u4E00\u822C\u662F\u57FA\u65BC\u8996\u53E3\u5BEC\u5EA6\u3002
  \`\`\`
- \u4F7F\u7528\u6848\u4F8B\uFF1A
  \`\`\`css
  html {
    /* \u8A2D\u5B9A 1rem \u7B49\u540C\u65BC 100px */
    font-size: 100px;
  }
  .else__element {
    /* \u7B49\u540C\u65BC 100px */
    font-size: 1rem;
  }
  \`\`\`
- \u91DD\u5C0D\u7A97\u53E3\u8ABF\u6574\u5927\u5C0F\u7BC4\u672C\uFF1A
  \`\`\`js
  (function () {
    'use strict';
    const docEl = document.documentElement
    const viewportEl = document.querySelector('meta[name="viewport"]'),
    const dpr = window.devicePixelRatio || 1,
    let maxWidth = 540,
    let minWidth = 320;

    // \u8A2D\u5099\u50CF\u7D20\u6BD4\u6700\u5927\u52303\u500D
    dpr = dpr >= 3 ? 3 : (dpr >= 2 ? 2 : 1);

    docEl.setAttribute('data-dpr', dpr);
    docEl.setAttribute('max-width', maxWidth);
    docEl.setAttribute('min-width', minWidth);

    let scale = 1 / dpr
    // \u95DC\u65BC shrink-to-fit=no, viewport-fit=cover \u5C6C\u6027\u76F8\u95DC\u7684 css \u914D\u7F6E\uFF0C\u53EF\u53C3\u8003\u624B\u6A5F\u767D\u908A\u4FEE\u6B63\u65B9\u6CD5
    let content = \`
      width=device-width,
      initial-scale=\${scale},
      maximum-scale=\${scale},
      minimum-scale=\${scale},
      user-scalable=no,
      shrink-to-fit=no,
      viewport-fit=cover
    \`;

    // \u82E5\u9801\u9762\u4E0A\u7121 viewport \u5C6C\u6027\u6A19\u7C64\uFF0C\u5247\u5275\u5EFA\u65B0\u7684\u6A19\u7C64
    if (viewportEl) {
        viewportEl.setAttribute('content', content);
    } else {
        viewportEl = document.createElement('meta');
        viewportEl.setAttribute('name', 'viewport');
        viewportEl.setAttribute('content', content);
        document.head.appendChild(viewportEl);
    }

    // \u521D\u59CB\u8A2D\u7F6Erem
    setRemUnit();
    // \u7576\u700F\u89BD\u5668\u6539\u8B8A\u5BEC\u9AD8\u6642\uFF0C\u91CD\u65B0\u8A08\u7B97rem
    window.addEventListener('resize', setRemUnit);
    function setRemUnit() {
      // \u9019\u908A\u4EE5\u8A2D\u8A08\u5716 375px \u4F86\u8A08\u7B97\uFF0C\u8A2D\u5B9A\u521D\u59CB rem \u70BA 20px
      // 20px \u6BD4\u8F03\u597D\u8A08\u7B97 rem\uFF0C375px/20px=18.75(ratio)
      const ratio = 18.75;
      let viewWidth = docEl.getBoundingClientRect().width || window.innerWidth;

      if (maxWidth && (viewWidth / dpr > maxWidth)) {
        viewWidth = maxWidth * dpr;
      } else if (minWidth && (viewWidth / dpr < minWidth)) {
        viewWidth = minWidth * dpr;
      }
      docEl.style.fontSize = viewWidth / ratio + 'px';
    }
  })();
  \`\`\`

## vw \u8207 vh
- \`vw\`\uFF1A\u4EE3\u8868 \`view width\`\uFF0C\u6307\u87A2\u5E55\u53EF\u8996\u7BC4\u570D\u5BEC\u5EA6\u7684\u767E\u5206\u6BD4
- \`vh\`\uFF1A\u4EE3\u8868 \`view height\`\uFF0C\u6307\u87A2\u5E55\u53EF\u8996\u7BC4\u570D\u9AD8\u5EA6\u7684\u767E\u5206\u6BD4
- \`vmin\`\uFF1A\u5BEC\u5EA6\u6216\u9AD8\u5EA6\u6700\u5C0F\u503C\u7684\u767E\u5206\u6BD4
- \`vmax\`\uFF1A\u5BEC\u5EA6\u6216\u9AD8\u5EA6\u6700\u5927\u503C\u7684\u767E\u5206\u6BD4
- \`vw\`\u3001\`vh\` \u8207 \`%\` \u5DEE\u5225\uFF1A
  - \`%\`\uFF1A\u6A19\u7C64\u5167\u9700\u8981\u6709\u5167\u5BB9\u624D\u6703\u986F\u793A\uFF0C\`vw\`\u3001\`vh\`\uFF1A\u4E0D\u9700\u8981\u5167\u5BB9\u5C31\u6703\u986F\u793A
  - \`%\`\uFF1A\u4EE5\u7236\u5143\u7D20\u70BA\u57FA\u6E96\uFF0C\`vw\`\u3001\`vh\`\uFF1A\u4EE5\u88DD\u7F6E\u87A2\u5E55\u53EF\u8996\u7BC4\u570D\u5927\u5C0F\u70BA\u57FA\u6E96\u3002
- \u79FB\u52D5\u7AEF \`vh\` \u542B\u5730\u5740\u6B04\u9AD8\u5EA6\u8655\u7406\u65B9\u6CD5\uFF1A
  \`\`\`js
  // \u8A08\u7B97 1% \u7684\u8996\u89BA\u8996\u53E3
  let vh = window.innerHeight * 0.01;
  // \u8A2D\u7F6E\u65B0\u5C6C\u6027\uFF1A--vh\uFF0C\u540D\u7A31\u53EF\u81EA\u53D6
  document.documentElement.style.setProperty('--vh', \`\${vh}px\`);
  // \u76E3\u807D\u7A97\u53E3\u5927\u5C0F
  window.addEventListener('resize', () => {
    // \u82E5\u7A97\u53E3\u5927\u5C0F\u6539\u8B8A\uFF0C\u5247\u91CD\u65B0\u8A08\u7B97 --vh
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', \`\${vh}px\`);
  });
  \`\`\`
  \`\`\`css
  /* 
    \u4F7F\u7528\u81EA\u5B9A\u5C6C\u6027\u65B9\u6CD5
    calc()\uFF1A\u7528\u4F86\u8A08\u7B97css\u5C6C\u6027\u503C
    var()\uFF1A\u5224\u65B7\u7B2C\u4E00\u500B\u53C3\u6578\u5C6C\u6027\u662F\u5426\u53EF\u7528\uFF0C\u5426\u5247\u5C31\u7528\u5F8C\u9762\u7684\u53C3\u6578\u5C6C\u6027
           \u53EF\u900F\u904E\u9017\u865F\u589E\u52A0\u5019\u88DC\u5C6C\u6027\uFF0C\u4E26\u4F9D\u5E8F\u5F80\u5F8C\u5C0B\u627E\u53EF\u7528\u5C6C\u6027
  */
  .test {
    /* 100 \u4EE3\u8868 100vh\uFF0C\u53EF\u8ABF\u6574\u70BA\u8A72\u5BB9\u5668\u7684\u9AD8\u5EA6 */
    height: calc(var(--vh, 1vh) * 100);
  }
  \`\`\`

## @media
- \u4EC0\u9EBC\u662F \`@media\`\uFF1F
  \`\`\`txt
  @media \u7A31\u70BA \u5A92\u9AD4\u67E5\u8A62\uFF0C
  \u8B93\u958B\u767C\u8005\u80FD\u91DD\u5C0D\u4E0D\u540C\u7684\u7A97\u53E3\u5927\u5C0F\u5207\u63DB\u6A23\u5F0F
  \`\`\`
- \u985E\u578B\u5E38\u7528\u6709\u4EE5\u4E0B\u5E7E\u7A2E\uFF1A
  - \`all\`\uFF1A\u70BA\u9ED8\u8A8D\uFF0C\u4F7F\u7528\u6642 \`and\` \u9700\u53BB\u6389\u5426\u5247\u6703\u767C\u751F\u932F\u8AA4
  - \`screen\`\uFF1A\u4E3B\u8981\u7528\u65BC\u5404\u5E73\u53F0\u87A2\u5E55\uFF0C\u9700\u4F7F\u7528\u908F\u8F2F\u9023\u63A5
  - \`speech\`\uFF1A\u9069\u7528\u65BC\u8A9E\u97F3\u5408\u6210\u5668\u3001\u8A9E\u97F3\u6717\u8B80\u88DD\u7F6E\uFF0C\u9700\u4F7F\u7528\u908F\u8F2F\u9023\u63A5
  - \`print\`\uFF1A\u9069\u7528\u65BC\u5217\u5370\u9810\u89BD\u6A21\u5F0F\u4E0B\u5728\u87A2\u5E55\u4E0A\u67E5\u770B\u7684\u6587\u4EF6\uFF0C\u9700\u4F7F\u7528\u908F\u8F2F\u9023\u63A5
- \u908F\u8F2F\u9023\u63A5\u6709\u4EE5\u4E0B\u5E7E\u7A2E\uFF1A
  - \u8207\uFF1A\`and\`
  - \u6216\uFF1A\u9017\u865F \`,\`
  - \u975E\uFF1A\`not\`
- \u5A92\u9AD4\u67E5\u8A62\u4E09\u7A2E\u4F7F\u7528\u65B9\u5F0F\uFF1A
  - \u5728 \`style\` \u6A19\u7C64\u5167\u52A0\u5165
    \`\`\`css
    /* \u5BEC\u5EA6 577px \u81F3 768px \u7684\u5E73\u53F0\u4F7F\u7528\u6B64\u6A23\u5F0F */
    @media (min-width: 577px) and (max-width: 768px) {
      .test {
        color: blue;
      }
    }
    \`\`\`
  - \u4F7F\u7528 \`@import\` \u52A0\u5165
    \`\`\`css
    /* \u5BEC\u5EA6 900px \u4EE5\u4E0A\u7684\u5E73\u53F0\u4F7F\u7528 test.css \u6A23\u5F0F */
    @import url(test.css) screen and (min-width: 900px);
    \`\`\`
  - \u4F7F\u7528 \`HTML\` \u52A0\u5165
    \`\`\`html
    <head>
      <link rel="stylesheet" media="screen" href="./style.css">
      <link rel="stylesheet" media="print" href="./print.css">
    </head>
    \`\`\`
- \u5E38\u7528\u65B7\u9EDE\u8207\u4F7F\u7528\u7BC4\u4F8B\uFF1A
  - \`PC\u7248\` \u512A\u5148\u7684 \`@media\` \u7BC4\u4F8B\uFF1A
    \`\`\`css
    /* 
      pc first
      width \u4EE3\u8868\u4E00\u5F35\u5716\u7247\u4F54\u7A97\u53E3\u7684\u5BEC\u5EA6 
      max-width\uFF1A\u7A97\u53E3\u6700\u5927\u5BEC\u5EA6\uFF0C\u5927\u65BC\u6B64\u5BEC\u5EA6\u4E0D\u6703\u751F\u6548
    */
    .col {
      width: 8.333333333%;
    }
    @media (max-width: 1200px) {
      .col {
        width: 16.6666666667%;
      }
    }
    @media (max-width: 992px) {
      .col {
        width: 25%;
      }
    }
    @media (max-width: 768px) {
      .col {
        width: 50%;
      }
    }
    @media (max-width: 576px) {
      .col {
        width: 100%;
      }
    }
    \`\`\`
  - \`\u79FB\u52D5\u7AEF\` \u512A\u5148\u7684 \`@media\` \u7BC4\u4F8B\uFF1A
    \`\`\`css
    /* 
      mobile first
      width \u4EE3\u8868\u4E00\u5F35\u5716\u7247\u4F54\u7A97\u53E3\u7684\u5BEC\u5EA6 
      min-width\uFF1A\u7A97\u53E3\u6700\u5C0F\u5BEC\u5EA6\uFF0C\u5C0F\u65BC\u6B64\u5BEC\u5EA6\u4E0D\u6703\u751F\u6548
    */
    .col {
      width: 100%;
    }
    @media (min-width: 576px) {
      .col {
        width: 50%;
      }
    }
    @media (min-width: 768px) {
      .col {
        width: 25%;
      }
    }
    @media (min-width: 992px) {
      .col {
        width: 16.6666666667%;
      }
    }
    @media (min-width: 1200px) {
      .col {
        width: 8.33333333%;
      }
    }
    \`\`\`

## \u6AA2\u6E2C\u5E73\u53F0\u8207\u65B7\u9EDE\u65B9\u6CD5
- \u5224\u65B7\u65B7\u9EDE\u53EF\u53C3\u8003\uFF1A
  - [Bootstrap breakpoints](https://getbootstrap.com/docs/5.0/layout/breakpoints/#available-breakpoints)\uFF0C\u53EF\u641C\u5C0B\uFF1A\`bootstrap media queries breakpoints\`
  - [media queries for common device breakpoints](https://responsivedesign.is/develop/browser-feature-support/media-queries-for-common-device-breakpoints/)
- \u6AA2\u6E2C\u624B\u6A5F\u700F\u89BD\u5668\u65B9\u6CD5\uFF1A
  \`\`\`js
  // \u5075\u6E2C\u79FB\u52D5\u54C1\u724C\uFF0C\u82E5\u70BA null \u5247\u975E\u624B\u6A5F
  const isAndroid = window.navigator.appVersion.match(/android/gi);
  const isIPhone = window.navigator.appVersion.match(/iphone/gi);
  // \u4EE5 android pixel5 \u5370\u51FA window.navigator.appVersion \u8CC7\u8A0A
  // 5.0 (Linux; Android 11; Pixel 5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.91 Mobile Safari/537.36
  \`\`\`
- \u6AA2\u6E2C\u662F\u5426\u70BA\u624B\u6A5F\u6216\u5E73\u677F\u65B9\u6CD5\uFF1A
  - \u53EF\u53C3\u8003\u8A72\u7DB2\u7AD9 \`Regex\`\uFF1A[detectmobilebrowsers](http://detectmobilebrowsers.com/) 
  - \u4F7F\u7528\u7BC4\u4F8B\uFF1A
    \`\`\`js
    // \u6AA2\u6E2C\u662F\u5426\u70BA\u624B\u6A5F(\u5E73\u677F\u5982 ipad \u6703\u8FD4\u56DE false)
    window.mobileCheck = function() {
      let check = false;
      (function(a){if(/(android|bb\\d+|meego).+mobile|avantgo|bada\\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\\-(n|u)|c55\\/|capi|ccwa|cdm\\-|cell|chtm|cldc|cmd\\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\\-s|devi|dica|dmob|do(c|p)o|ds(12|\\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\\-|_)|g1 u|g560|gene|gf\\-5|g\\-mo|go(\\.w|od)|gr(ad|un)|haie|hcit|hd\\-(m|p|t)|hei\\-|hi(pt|ta)|hp( i|ip)|hs\\-c|ht(c(\\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\\-(20|go|ma)|i230|iac( |\\-|\\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\\/)|klon|kpt |kwc\\-|kyo(c|k)|le(no|xi)|lg( g|\\/(k|l|u)|50|54|\\-[a-w])|libw|lynx|m1\\-w|m3ga|m50\\/|ma(te|ui|xo)|mc(01|21|ca)|m\\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\\-2|po(ck|rt|se)|prox|psio|pt\\-g|qa\\-a|qc(07|12|21|32|60|\\-[2-7]|i\\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\\-|oo|p\\-)|sdk\\/|se(c(\\-|0|1)|47|mc|nd|ri)|sgh\\-|shar|sie(\\-|m)|sk\\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\\-|v\\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\\-|tdg\\-|tel(i|m)|tim\\-|t\\-mo|to(pl|sh)|ts(70|m\\-|m3|m5)|tx\\-9|up(\\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\\-|your|zeto|zte\\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
      return check;
    };
    
    // \u6AA2\u6E2C\u662F\u5426\u70BA\u624B\u6A5F\u6216\u5E73\u677F(\u4E0D\u5EFA\u8B70\u4F7F\u7528)
    window.mobileAndTabletCheck = function() {
      let check = false;
      (function(a){if(/(android|bb\\d+|meego).+mobile|avantgo|bada\\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\\-(n|u)|c55\\/|capi|ccwa|cdm\\-|cell|chtm|cldc|cmd\\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\\-s|devi|dica|dmob|do(c|p)o|ds(12|\\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\\-|_)|g1 u|g560|gene|gf\\-5|g\\-mo|go(\\.w|od)|gr(ad|un)|haie|hcit|hd\\-(m|p|t)|hei\\-|hi(pt|ta)|hp( i|ip)|hs\\-c|ht(c(\\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\\-(20|go|ma)|i230|iac( |\\-|\\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\\/)|klon|kpt |kwc\\-|kyo(c|k)|le(no|xi)|lg( g|\\/(k|l|u)|50|54|\\-[a-w])|libw|lynx|m1\\-w|m3ga|m50\\/|ma(te|ui|xo)|mc(01|21|ca)|m\\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\\-2|po(ck|rt|se)|prox|psio|pt\\-g|qa\\-a|qc(07|12|21|32|60|\\-[2-7]|i\\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\\-|oo|p\\-)|sdk\\/|se(c(\\-|0|1)|47|mc|nd|ri)|sgh\\-|shar|sie(\\-|m)|sk\\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\\-|v\\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\\-|tdg\\-|tel(i|m)|tim\\-|t\\-mo|to(pl|sh)|ts(70|m\\-|m3|m5)|tx\\-9|up(\\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\\-|your|zeto|zte\\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
      return check;
    };
    \`\`\`

## \u624B\u6A5F\u767D\u908A\u4FEE\u6B63\u65B9\u6CD5
- \u8D77\u56E0\uFF1A\u5728\u5BE6\u52D9\u4E0A\u7DB2\u9801\u5728\u67D0\u4E9B\u624B\u6A5F\u700F\u89BD\u6642(\u5982\uFF1A\`iphoneX\`)\u6703\u7559\u6709\u4E0A\u4E0B\u767D\u908A
- \u89E3\u6C7A\u65B9\u6CD5\uFF1A
  - \u4EE5 \`iphone\` \u4F86\u8AAA\uFF0C\`apple\` \u6709\u63D0\u51FA\u5B89\u5168\u908A\u754C\u7684\u6982\u5FF5\uFF0C\u53EF\u53C3\u8003\u4E0B\u9762\u7BC4\u4F8B\uFF1A
  - \`viewport\` \u5C6C\u6027\u8A2D\u7F6E\uFF1A
    \`\`\`html
    <!-- 
      \u8A2D\u7F6E viewport-fit=cover \u8868\u793A\u5168\u87A2\u5E55\u986F\u793A\u7DB2\u9801\u5167\u5BB9(\u96B1\u85CF\u767D\u908A) 
      \u8A2D\u7F6E shrink-to-fit=no \u517C\u5BB9ios9\uFF0C\u963B\u6B62\u9801\u9762\u7E2E\u653E\u4EE5\u9069\u61C9\u8996\u53E3
    -->
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no, viewport-fit=cover">
    \`\`\`
  - \`css\` \u5C6C\u6027\u8A2D\u7F6E\uFF1A 
    \`\`\`scss
    /* \u8A2D\u7F6E\u5B89\u5168\u908A\u754C */
    @mixin device-full-screen {
      // iOS < 11.2
      padding-left: constant(safe-area-inset-left);
      padding-top: constant(safe-area-inset-top);
      padding-right: constant(safe-area-inset-right);
      padding-bottom: constant(safe-area-inset-bottom);
      // iOS >= 11.2
      padding-left: env(safe-area-inset-left);
      padding-top: env(safe-area-inset-top);
      padding-right: env(safe-area-inset-right);
      padding-bottom: env(safe-area-inset-bottom);
    }

     #yourPage {
       /* 
         Apple \u5EFA\u8B70\u4F7F\u7528\u6B64\u65B9\u6CD5\u67E5\u8A62\u4F86\u6AA2\u6E2C\u548C\u4FEE\u5FA9\u7DB2\u7AD9\u7684\u7F3A\u53E3\u74B0\u5883
         \u4F7F\u7528 @supports \u6AA2\u6E2C\u662F\u5426\u652F\u63F4 padding: max(0px)
         
         max() \u6703\u6311\u9078\u88E1\u9762\u7684\u6700\u5927\u503C\uFF0C
         \u5982 max(20vw, 400px)\uFF0C\u82E5 400px \u6BD4 20vw \u5927\u5247\u9078 400px
       */
       @supports (padding:max(0px)) {
         @include device-full-screen;
       }    
     }
    \`\`\`

## meta \u5E38\u7528\u6A19\u7C64\u529F\u80FD
- \u5E38\u7528 \`meta\` \u914D\u7F6E\u5982\u4E0B\uFF1A
  \`\`\`html
  <!-- viewport \u89E3\u91CB\u8ACB\u770B\u4E0A\u9762  -->
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
  <!--  \u5176\u9918\u89E3\u91CB\u7686\u5728\u4E0B\u9762  -->
  <meta content="telephone=no" name="format-detection">
  <meta content="email=no" name="format-detection">
  <meta content="address=no" name="format-detection">
  <!--  Apple \u5C08\u7528  -->
  <meta content="yes" name="apple-mobile-web-app-capable">
  <meta content="your_title" name="app-mobile-web-app-title">
  <meta content="your_title" name="app-mobile-web-app-status-bar-style">
  <!--  UC \u700F\u89BD\u5668\u5C08\u7528\u5C6C\u6027  -->
  <!--  \u5F37\u5236\u5168\u5C4F  -->
  <meta content="yes" name="full-screen">
  <!--  \u5F37\u5236\u8C4E\u5C4F  -->
  <meta content="portrait" name="screen-orientation">
  <!--  \u61C9\u7528\u6A21\u5F0F  -->
  <meta content="application" name="browsermode">
  <!--  QQ \u700F\u89BD\u5668\u5C08\u7528\u5C6C\u6027  -->
  <!--  \u5F37\u5236\u5168\u5C4F  -->
  <meta content="true" name="x5-fullscreen">
  <!--  \u5F37\u5236\u8C4E\u5C4F  -->
  <meta content="portrait" name="x5-orientation">
  <!--  \u61C9\u7528\u6A21\u5F0F  -->
  <meta content="app" name="x5-page-mode">
  \`\`\`
- \`\`\`html
  <meta content="telephone=no" name="format-detection">
  <meta content="email=no" name="format-detection">
  <meta content="address=no" name="format-detection">
  \`\`\`
  - \u7686\u9ED8\u8A8D\u70BA \`yes\`
  - \u7528\u4F86\u907F\u514D\u7CFB\u7D71\u81EA\u52D5\u5224\u65B7\u662F\u5426\u70BA\u624B\u6A5F\u865F\u78BC(\u81EA\u52D5\u64A5\u865F)\u3001\u4FE1\u7BB1(\u81EA\u52D5\u767C\u9001)\u3001\u5730\u5740(\u8DF3\u8F49\u5730\u5716)
- \`<meta content="yes" name="apple-mobile-web-app-capable">\`
  - \u6B64\u6A19\u7C64\u70BA \`iphone\` \`safari\` \u7684\u79C1\u6709 \`meta\` \u6A19\u7C64\uFF0C\u9ED8\u8A8D\u70BA\uFF1A\`no\`
  - \u529F\u80FD\uFF1A\u522A\u9664\u860B\u679C\u7684\u5DE5\u5177\u6B04\u8207\u83DC\u55AE\u6B04\uFF0C\u4F7F\u7DB2\u9801\u4EE5\u5168\u5C4F\u5E55\u986F\u793A
  - \u53EF\u4F7F\u7528 \`window.navigator.standalone\` \u6AA2\u6E2C\u860B\u679C\u624B\u6A5F\u662F\u5426\u5168\u5C4F\u986F\u793A(\`true\`)
- \`<meta content="your_title" name="app-mobile-web-app-title">\`
  - \`safari\` \u6DFB\u52A0\u81F3\u4E3B\u4ECB\u9762\u7684\u986F\u793A\u6A19\u984C
- \`<meta content="your_title" name="app-mobile-web-app-status-bar-style">\`
  - \u6307\u5B9A\u7684 \`iphone\` \u4E2D \`safari\` \u9802\u7AEF\u7684\u72C0\u614B\u689D\u7684\u6A23\u5F0F

## \u53C3\u8003\u8CC7\u6599
- [meta \u6A19\u7C64](https://zhuanlan.zhihu.com/p/104453816)
- [\u79FB\u52D5\u958B\u767C\u5C0F\u7D50](https://zhuanlan.zhihu.com/p/51175542)
`;export{n as default};

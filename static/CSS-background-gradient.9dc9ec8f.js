const n=`<span style="font-size: 32px; font-weight: 600;">CSS \u80CC\u666F\u8207\u6F38\u8B8A</span>

## \u80CC\u666F
- \`\`\`background-color\`\`\`
  - \u4F7F\u7528\u8AAA\u660E
      - \`\`\`background-color: \u984F\u8272;\`\`\`
- \`\`\`background-image\`\`\`
  - \u4F7F\u7528\u8AAA\u660E
    - \`\`\` background-image: url(\u5716\u7247\u9023\u7D50);\`\`\`
- \`\`\`background-attachment\`\`\`
  - \u4F7F\u7528\u8AAA\u660E
    - \`\`\`background-attachment: \u5C6C\u6027;\`\`\`
    - \u5C6C\u6027\u6709\u4E09\u7A2E\u4F9D "\u5BB9\u5668\u80CC\u666F\u5716\u7247" \u67E5\u770B\u8B8A\u5316
      - \`\`\`fixed\`\`\` \u5BB9\u5668\u62C9\u6EFE\u52D5\u689D\u4E0D\u52D5,\u8996\u7A97\u62C9\u6EFE\u52D5\u689D\u4E0D\u52D5
      - \`\`\`scroll\`\`\` \u5BB9\u5668\u62C9\u6EFE\u52D5\u689D\u4E0D\u52D5,\u8996\u7A97\u62C9\u6EFE\u52D5\u689D\u52D5
      - \`\`\`local\`\`\` \u5BB9\u5668\u62C9\u6EFE\u52D5\u689D\u52D5,\u8996\u7A97\u62C9\u6EFE\u52D5\u689D\u52D5
- \`\`\`background-clip\`\`\`
  - \u4F7F\u7528\u8AAA\u660E
    - \`\`\` background-clip: \u5C6C\u6027;\`\`\`
    - \u5C6C\u6027\u6709\u4E09\u7A2E
      - \`\`\`border-box\`\`\` \u80CC\u666F\u88AB\u526A\u88C1\u5230\u908A\u6846\u76D2
      - \`\`\`padding-box\`\`\` \u80CC\u666F\u88AB\u526A\u88C1\u5230\u5167\u908A\u8DDD\u6846
      - \`\`\`content-box\`\`\` \u80CC\u666F\u88AB\u526A\u88C1\u5230\u5167\u5BB9\u6846
- \`\`\`background-origin\`\`\`
  - \u4F7F\u7528\u8AAA\u660E
    - \`\`\` background-origin: \u5C6C\u6027;\`\`\`
    - \u5C6C\u6027\u6709\u4E09\u7A2E
      - \`\`\`border-box\`\`\` \u80CC\u666F\u5716\u7247\u4EE5border\u5340\u57DF\u70BA\u53C3\u8003
      - \`\`\`padding-box\`\`\` \u80CC\u666F\u5716\u7247\u4EE5padding\u5340\u57DF\u70BA\u53C3\u8003
      - \`\`\`content-box\`\`\` \u80CC\u666F\u5716\u7247\u4EE5content\u5340\u57DF\u70BA\u53C3\u8003
- \`\`\`background-position\`\`\`
  - \u4F7F\u7528\u8AAA\u660E
    - \`\`\` background-position: \u4F4D\u7F6E;\`\`\`
  - \u7BC4\u4F8B
  \`\`\`css
  /* \u5E38\u7528\u5C6C\u6027 */
  background-position: top;
  background-position: bottom;
  background-position: left;
  background-position: right;
  background-position: center;

  /* \u5F9E\u4E0B\u5F80\u4E0A50px \u5F9E\u53F3\u5230\u5DE6100px */
  background-position: bottom 50px right 100px;

  /* \u4EE5\u5DE6\u4E0A\u89D2\u70BA\u57FA\u6E96 x y */
  background-position: 25% 75%;
  background-position: 0 0;
  background-position: 1cm 2cm;
  background-position: 10ch 8em;
  \`\`\`
- \`\`\`background-repeat\`\`\`
  - [\u8A73\u7D30\u8ACB\u770B MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/background-repeat)
  - \u4F7F\u7528\u8AAA\u660E
    - \`\`\` background-repeat: \u5C6C\u6027;\`\`\`
  - \u7BC4\u4F8B
  \`\`\`css
  /* \u6A6B\u5411\u91CD\u8907 */
  background-repeat: repeat-x;
  /* \u5782\u76F4\u91CD\u8907 */
  background-repeat: repeat-y;
  /* \u9ED8\u8A8D */
  background-repeat: repeat;
  /* \u4E0D\u91CD\u8907 */
  background-repeat: no-repeat;

  /* \u6C34\u5E73horizontal \u5782\u76F4vertical */
  background-repeat: no-repeat repeat;
  \`\`\`
- \`\`\`background-size\`\`\`
  - [\u8A73\u7D30\u8ACB\u770B MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/background-size)
  - \u4F7F\u7528\u8AAA\u660E
    - \`\`\` background-size: \u5C6C\u6027;\`\`\`
  - \u7BC4\u4F8B
  \`\`\`css
  /* \u4EE3\u8868\u5BEC300px \u9AD8\u96A8\u610F\u64F4\u5C55 */
  background-size: 300px auto;
  /* \u4EE3\u8868\u76D2\u5B50\u5BEC25% \u9AD825% */
  background-size: 25% 25%;
  /* 
    \u7528\u4E00\u5F35\u5716\u7247\u5145\u6EFF\u76D2\u5B50(\u4E0D\u5EF6\u5C55)
    \u4F46\u82E5\u52A0\u5165no-repeat\u5247\u4E0D\u5145\u6EFF
  */
  background-size: contain;
  background-repeat: no-repeat;
  /* \u7528\u4E00\u5F35\u5716\u7247\u5145\u6EFF\u76D2\u5B50(\u5EF6\u5C55) */ 
  background-size: cover;
  background-repeat: no-repeat;
  \`\`\`
- \`\`\`background \u7D9C\u5408\u7C21\u5BEB\`\`\`
  - [\u8A73\u7D30\u8ACB\u770B MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/background)
  - \u4F7F\u7528\u8AAA\u660E
  \`\`\`css
  /* \u88E1\u9762\u53EF\u4EE5+-\u5C6C\u6027,\u5F8C\u9762\u5169\u500B\u5C6C\u6027\u70BA background-position */
  background: yellow url(images/image.png) no-repeat center center;
  \`\`\`
- \`\`\`CSS\u7CBE\u9748\`\`\`
  - \u4F7F\u7528\u8AAA\u660E
  \`\`\`css
  /* 
    \u7528\u4E00\u5F35\u5927\u5716\u7247\u88E1\u9762\u6709\u591A\u5F35icon
    \u5229\u7528 background-position \u53BB\u53D6\u5F97\u88E1\u9762\u5176\u4E2D\u4E00\u5F35icon
    \u91CD\u9EDE: \u53F3\u4E0B\u89D2\u70BA(0,0) \u5230\u9054\u8981\u526A\u88C1\u5716\u793A\u5DE6\u4E0A\u89D2\u518D\u7528\u5BEC\u9AD8\u53BB\u526A\u88C1\u5716\u7247
  */
  width: 34px;
  height: 32px;
  background-image: url(images/image.png);
  background-position: -66px -488px;
  \`\`\`

## \u6F38\u8B8A
### \u9015\u5411\u6F38\u8B8A
- [\u8A73\u7D30\u8ACB\u770B MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/gradient/radial-gradient())
- \u4F7F\u7528\u65B9\u5F0F(\u88E1\u9762\u53EF\u586B\u591A\u7A2E\u984F\u8272\u5E73\u5747\u5206\u914D)
  - \`background-image: radial-gradient(\u5713\u5FC3\u5EA7\u6A19, \u958B\u59CB\u984F\u8272, \u7D50\u675F\u984F\u8272);\`
- \u7BC4\u4F8B
  \`\`\`css
  background-image: radial-gradient(50% 50%, white, rgb(211, 211, 211));
  /*\u4E0A\u9762\u7B49\u540C\u65BC\u4E0B\u9762*/
  background-image: radial-gradient(50% 50%, white 0%, rgb(211, 211, 211) 100%);
  \`\`\`

### \u7DDA\u6027\u6F38\u8B8A
- [\u8A73\u7D30\u8ACB\u770B MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/gradient/linear-gradient())
- \u4F7F\u7528\u65B9\u5F0F
  - \`linear-gradient(\u65B9\u5411, \u958B\u59CB\u984F\u8272, \u7D50\u675F\u984F\u8272);\`
- \u7BC4\u4F8B
  \`\`\`css
  background-image: linear-gradient(to right, red, blue);
  /* \u53EF\u4EE5\u8A2D\u5B9A\u89D2\u5EA6 */
  background-image: linear-gradient(45deg, red, blue);
  /* \u5F9E\u5DE6\u5230\u53F3\u5E73\u5747\u5206\u914D\u984F\u8272 */
  background-image: linear-gradient(to right, red, yellow, orange, green, blue, purple);
  /* \u8A2D\u5B9A\u9EC3\u8272\u5728\u5F9E\u5DE6\u5230\u53F3\u768420%\u51FA\u73FE */
  background-image: linear-gradient(to right, red, yellow 20%, blue);
  \`\`\`
  
### \u89D2\u5411\u6F38\u8B8A
- [\u8A73\u7D30\u8ACB\u770B MDN](https://developer.mozilla.org/en-US/docs/web/css/gradient/conic-gradient)
- \u4E3B\u8981\u70BA\u4E0A\u9762\u5169\u7A2E\u6F38\u8B8A\u7684\u9032\u968E\uFF0C\u958B\u59CB\u9EDE\u70BA\u671D\u4E0A\u9806\u6642\u9418\u8F49360\u5EA6
- \u4F7F\u7528\u65B9\u5F0F
  - \u57FA\u672C\u6B3E\uFF0C\u984F\u8272\u5E73\u5747\u5206\u4F48\u65BC360\u5EA6\uFF1A\`background: conic-gradient(deeppink, yellowgreen, ...\u53EF\u591A\u7A2E\u984F\u8272);\`
  - \u9032\u968E\u6B3E\uFF0C\u984F\u8272\u6307\u5B9A\u89D2\u5EA6\u5206\u4F48\uFF1A\`background: conic-gradient(deeppink 0, deeppink 30%, yellowgreen 30%, yellowgreen 70%, teal 70%, teal 100%);\`
    - \u8868\u793A\u5F9E\u591A\u5C11\u81F3\u591A\u5C11\u70BA\u6307\u5B9A\u984F\u8272
    - \u53EF\u7C21\u5BEB\u70BA\uFF1A\`background: conic-gradient(deeppink 30%, yellowgreen 0 70%, teal 0 100%);\`
- \u9805\u76EE\u7BC4\u4F8B
  \`\`\`html
  <div class="bg">
    <div class="point"></div>
  </div>
  <style>
    /* \u8A2D\u5B9A\u80CC\u666F\u70BA\u767D\u8272 */
    body {
      background: #fff;
    }

    .bg {
      position: relative;
      margin: 50px auto;
      width: 400px;
      height: 400px;
      /* \u8A2D\u7F6E\u5100\u8868\u677F\u5916\u8A86\u70BA\u5713\u578B */
      border-radius: 50%;
      /* \u4F7F\u7528\u89D2\u5411\u6F38\u8B8A\u8A2D\u5B9A\u80CC\u666F\u4E26\u505C\u6B62\u65BC 62.5% */
      background: conic-gradient(
        #f1462c 0%,
        #fc5d2c 12.4%,
        #fff 12.5%,
        #fff 12.5%,
        #fc5d2c 12.5%,
        #fba73e 24.9%,
        #fff 24.9%,
        #fff 25%,
        #fba73e 25%,
        #e0fa4e 37.4%,
        #fff 37.4%,
        #fff 37.5%,
        #e0fa4e 37.5%,
        #12dd7e 49.9%,
        #fff 49.9%,
        #fff 50%,
        #12dd7e 50%,
        #0a6e3f 62.4%,
        #fff 62.4%,
        #fff 62.5%
      );
      /* \u6574\u9AD4\u5F80\u5DE6\u65CB\u8F49 112.5\u5EA6 */
      transform: rotate(-112.5deg);
      transform-origin: 50% 50%;
    }

    /* \u84CB\u4E0A\u4E00\u500B\u5C0F\u4E00\u9EDE\u7684\u767D\u8272\u5713\u578B\u80CC\u666F */
    .bg::before {
      content: "";
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 370px;
      height: 370px;
      border-radius: 50%;
      background: #fff;
    }

    /* \u518D\u84CB\u4E0A\u4E00\u500B\u66F4\u5C0F\u4E00\u9EDE\u7684\u89D2\u5411\u6F38\u8B8A\u80CC\u666F */
    .bg::after {
      content: "";
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 320px;
      height: 320px;
      border-radius: 50%;
      background: radial-gradient(
          #fff 0%,
          #fff 25%,
          transparent 25%,
          transparent 100%
        ),
        conic-gradient(
          #f1462c 0 12.5%,
          #fba73e 0 25%,
          #e0fa4e 0 37.5%,
          #12dd7e 0 50%,
          #0a6e3f 0 62.5%,
          #fff 0 100%
        );
    }

    /* \u88FD\u4F5C\u6307\u91DD\u7684\u57FA\u5E95 */
    .point {
      position: absolute;
      width: 30px;
      height: 30px;
      transform: translate(-50%, -50%);
      left: 50%;
      top: 50%;
      background: radial-gradient(#467dc6 0%, #a4c6f3 100%);
      border-radius: 50%;
      z-index: 999;
    }

    /* \u88FD\u4F5C\u6307\u91DD\u7684\u91DD */
    .point::before {
      content: "";
      position: absolute;
      width: 5px;
      height: 350px;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%) rotate(0);
      border-radius: 100% 100% 5% 5%;
      background: linear-gradient(
        180deg,
        #9bc7f6 0,
        #467dc6 50%,
        transparent 50%,
        transparent 100%
      );
      animation: rotate 3s cubic-bezier(.93, 1.32, .89, 1.15) infinite;
    }

    @keyframes rotate {
      50% {
        transform: translate(-50%, -50%) rotate(150deg);
      }
      100% {
        transform: translate(-50%, -50%) rotate(150deg);
      }
    }
  </style>
  \`\`\`
`;export{n as default};

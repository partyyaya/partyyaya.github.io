const n=`<span style="font-size: 32px; font-weight: 600;">CSS \u6D6E\u52D5\u8207\u5B9A\u4F4D</span>

## \u6D6E\u52D5
- \u6D6E\u52D5\u7684\u5143\u7D20\u4E00\u5B9A\u80FD\u8A2D\u7F6E\u5BEC\u9AD8
\`\`\`css
/* \u5DE6\u6D6E\u52D5 */
.box1 {
  float: left;
}

/* \u53F3\u6D6E\u52D5 */
.box2 {
  float: right;
}

/* 
  1.\u6D6E\u52D5\u7684\u9806\u5E8F\u8CBC\u9760\u7279\u6027
    \u9806\u5E8F\u6703\u4F9D\u6A19\u7C64\u5F9E\u4E0A\u5F80\u4E0B
    \u6700\u4E0B\u9762\u7684\u6A19\u7C64\u6703\u4E00\u76F4\u5F80\u4E0A\u76F4\u5230\u627E\u5230\u9808\u8CBC\u9760\u7684\u5C0D\u8C61

  2.\u95DC\u65BC\u5BEC\u5EA6
    \u7236\u76D2\u5B50\u5FC5\u9808\u6DB5\u84CB\u6240\u6709\u5B50\u76D2\u5B50\u7684\u5BEC\u5EA6\u5426\u5247\u5B50\u76D2\u5B50\u53EF\u80FD\u6703\u88AB\u64E0\u4E0B\u53BB
    \u7236\u76D2\u5B50\u82E5\u4E0D\u8A2D\u9AD8\u5EA6\u5247\u4E0D\u6703\u88AB\u5B50\u76D2\u5B50\u6D6E\u52D5\u6490\u958B(\u53BB\u9664\u6D6E\u52D5\u5247\u6703\u6490\u958B)
*/
/* \u7236\u76D2\u5B50 div */
.box {
  width: 600px;
  height: 200px;
  border: 1px solid #000;
}
/* \u5B50\u76D2\u5B50 div c1 */
.box .c1 {
  width: 200px;
  height: 200px;
  background-color: orange;
  float: left;
}
/* \u5B50\u76D2\u5B50 div c2 */
.box .c2 {
  width: 200px;
  height: 200px;
  background-color: green;
  float: left;
}
/* \u5B50\u76D2\u5B50 div c3 */
.box .c3 {
  width: 200px;
  height: 200px;
  background-color: blue;
  float: left;
}

/* \u6EA2\u51FA\u96B1\u85CF:overflow: hidden; */
div{
  width: 200px;
  height: 200px;
  padding: 50px;
  border: 1px solid #000;
  /* \u6EA2\u51FA\u76D2\u5B50\u908A\u6846\u7684\u5167\u5BB9\u5C07\u88AB\u96B1\u85CF\uFF0C\u4F46\u6703\u4FDD\u7559\u76D2\u5B50padding\u90E8\u5206\u7684\u6EA2\u51FA */
  overflow: hidden;
}
\`\`\`

## \u6E05\u9664\u6D6E\u52D5
- \u5E38\u7528\u65B9\u6CD5\u4E00
\`\`\`html
<style>
  /* 
    \u82E5\u6C92\u8A2D\u7F6E height \u5247\u4E0D\u88AB\u8996\u70BABFC 
    \u4F46\u53C8\u6703\u78B0\u5230\u4E0D\u78BA\u5B9Aheight\u591A\u5C11\u7684\u60C5\u6CC1\u4E14\u5B50\u5143\u7D20\u6709\u6D6E\u52D5\u73FE\u8C61
    \u6240\u4EE5\u9700\u8981\u7528\u7279\u5225\u7684\u65B9\u6CD5\u505A\u5230BFC
    \u9019\u908A\u7528 overflow: hidden; \u4F86\u53D6\u6D88\u5C0D\u5B50\u5143\u7D20\u5C0D\u5916\u9762\u5143\u7D20\u5F71\u97FF
  */
  /* ================ \u65B9\u6CD5 ================== */
  div {
    overflow: hidden;
    margin-bottom: 10px;
  }
  /* ======================================== */

  p {
    float: left;
    width: 100px;
    height: 100px;
    background-color: orange;
    margin-right: 20px;
  }
</style>
<body>
  <div>
    <p></p>
    <p></p>
  </div>
  <div>
    <p></p>
    <p></p>
  </div>
</body>
\`\`\`
- \u5E38\u7528\u65B9\u6CD5\u4E8C
\`\`\`html
<style>
  /* ================ \u65B9\u6CD5 ================== */
  /* after \u7684 content \u5FC5\u9808\u8981\u5BEB\u5426\u5247\u5931\u6548 */
  /* \u5728\u7B2C\u4E00\u500B div \u5F8C\u9762\u52A0\u4E0A\u4E00\u500B"\u6E05\u9664\u5DE6\u53F3\u6D6E\u52D5"\u7684\u5143\u7D20 */
  .clearfix::after {
    content: '';
    clear: both;
    /* \u5FC5\u9808\u8F6C\u4E3A\u5757\u7EA7\u5143\u7D20 */
    display: block;
  }
  /* ======================================== */

  p {
    float: left;
    width: 100px;
    height: 100px;
    background-color: orange;
    margin-right: 20px;
  }
</style>
<body>
  <div class="clearfix">
    <p></p>
    <p></p>
  </div>
  <div>
    <p></p>
    <p></p>
  </div>
</body>
\`\`\`

## \u56FA\u5B9A\u5B9A\u4F4D
- \u4F7F\u7528\u65B9\u5F0F: \`\`\`position: fixed;\`\`\`
- \u4E26\u9078\u64C7\u8A2D\u5B9A\u4EE5\u4E0B\u56DB\u7A2E\u5C6C\u6027: \`\`\`top\`\`\` \`\`\`bottom\`\`\` \`\`\`left\`\`\` \`\`\`right\`\`\`
- \u7279\u9EDE
  - \u4EE5\u9801\u9762\u8996\u7A97\u70BA\u5B9A\u4F4D\u6A19\u6E96
  - \u5E38\u7528\u4F86\u505A\u5C0E\u822A\u8207\u8FD4\u56DE\u9802\u90E8\u7528\u9014
\`\`\`css
.box {
  position: fixed;
  bottom: 100px;
  right: 100px;
  width: 100px;
  height: 100px;
  background-color: orange;
}
\`\`\`

## \u76F8\u5C0D\u5B9A\u4F4D
- \u4F7F\u7528\u65B9\u5F0F: \`\`\`position: relative;\`\`\`
- \u4E26\u9078\u64C7\u8A2D\u5B9A\u4EE5\u4E0B\u56DB\u7A2E\u5C6C\u6027: \`\`\`top\`\`\` \`\`\`bottom\`\`\` \`\`\`left\`\`\` \`\`\`right\`\`\`
- \u7279\u9EDE
  - \u4E3B\u8981\u7528\u4F86\u5FAE\u8ABF\u6E32\u67D3\u4F4D\u7F6E
  - \u9801\u9762\u6E32\u67D3\u6703\u4F9D\u76F8\u5C0D\u4F4D\u7F6E\u6E32\u67D3
  - \u76F8\u5C0D\u4F4D\u7F6E\u4E0D\u6703\u91CB\u653E\u539F\u672C\u4F4D\u7F6E(\u539F\u4F4D\u7F6E\u4EE5\u4E0B\u7684\u6A19\u7C64\u4F9D\u7136\u5728\u539F\u6A19\u7C64\u4F4D\u7F6E\u4E0B\u9762)
\`\`\`html
<style>
/* 
  \u82E5\u540C\u8EF8\u65B9\u5411\u6703\u4EE5\u6700\u5F8C\u70BA\u4E3B 
  left:100px right:100px;
  \u5247\u6703\u4EE5\u6700\u5F8Cright:100px;\u8868\u793A
*/
div{
  width: 400px;
  height: 400px;
  border: 1px solid #000;
  margin: 40px auto;
}

p {
  width: 100px;
  height: 100px;
  background-color: orange;
  position: relative;
  top: 100px;
  left: 100px;
}
</style>
<body>
  <div>
    <p></p>
    <ul>
      <li>\u5217\u8868</li>
      <li>\u5217\u8868</li>
      <li>\u5217\u8868</li>
    </ul>
  </div>
</body>
\`\`\`

## \u7D55\u5C0D\u5B9A\u4F4D
- \u4F7F\u7528\u65B9\u5F0F: \`\`\`position: absolute;\`\`\`
- \u53EF\u9078\u64C7\u8A2D\u5B9A\u4EE5\u4E0B\u56DB\u7A2E\u5C6C\u6027: \`\`\`top\`\`\` \`\`\`bottom\`\`\` \`\`\`left\`\`\` \`\`\`right\`\`\`
- \u7279\u9EDE:
  - \u7D55\u5C0D\u5B9A\u4F4D\u6703\u91CB\u653E\u81EA\u5DF1\u4F4D\u7F6E(\u812B\u96E2\u6A19\u6E96\u6587\u6A94\u6D41)
  - \u6703\u76F4\u63A5\u58D3\u84CB\u6389\u5176\u4ED6\u5143\u7D20(\u4E3B\u8981\u7528\u9014)
  - \u8A2D\u7F6E "\u7D55\u5C0D" \u6216 "\u56FA\u5B9A" \u5B9A\u4F4D\u7684\u5143\u7D20\u5C31\u53EF\u4EE5\u8A2D\u7F6E\u5BEC\u9AD8
- \u5176\u4ED6\u61C9\u7528\u5982\u4E0B
\`\`\`html
<head>
  <style>
    /*
      \u82E5\u8981\u8A2D\u5B9A\u5C45\u4E2D:
      margin \u70BA\u5BEC\u9AD8\u7684\u4E00\u534A
    */
    .test {
      width: 80px;
      height: 80px;
      position: absolute;
      top: 50%;
      left: 50%;
      margin-top: -40px;
      margin-left: -40px;
    }

    /* 
      \u7D55\u5C0D\u5B9A\u4F4D\u4E4B\u5B50\u7D55\u7236\u76F8\u95DC\u4FC2
      \u7D55\u5C0D\u5B9A\u4F4D\u7684\u6A19\u7C64\u6703\u53BB\u627E\u8207\u4ED6\u6700\u8FD1\u542B\u6709 position \u7236\u6A19\u7C64\u7576\u4F5C\u53C3\u8003\u9EDE
      \u7D93\u904E\u6E2C\u8A66: \u7236\u6A19\u7C64\u5E36\u6709 \u56FA\u5B9A\u5B9A\u4F4D ,\u76F8\u5C0D\u5B9A\u4F4D, \u7D55\u5C0D\u5B9A\u4F4D \u7686\u6703\u7522\u751F\u6548\u679C
      \u4E0B\u9762\u7BC4\u4F8B\u70BA p \u6703\u5728 \u7236\u6A19\u7C64box2\u7684 \u5DE6\u4E0A\u89D2 
    */
    .box1 {
      width: 402px;
      height: 402px;
      border: 1px solid #000;
      padding: 100px;
      margin: 0 auto;
    }

    .box2 {
      width: 200px;
      height: 200px;
      padding: 100px;
      border: 1px solid #000;
      position: relative;
    }

    .box3 {
      width: 98px;
      height: 98px;
      padding: 50px;
      border: 1px solid #000;
    }

    p {
      width: 50px;
      height: 50px;
      background-color: orange;
      position: absolute;
      top: 0;
      left: 0;
    }
  </style>
</head>

<body>
  <a href="">111</a>
  <div class="box1">
    <div class="box2">
      <div class="box3">
        <p></p>
      </div>
    </div>
  </div>
</body>
\`\`\`

## BFC
- BFC \u610F\u601D: Block formatting context \u584A\u7D1A\u683C\u5F0F\u4E0A\u4E0B\u6587
- \u5B9A\u7FA9: \u70BA\u9801\u9762\u4E0A\u4E00\u500B\u7368\u7ACB\u5BB9\u5668\uFF0C\u5BB9\u5668\u88E1\u9762\u5B50\u5143\u7D20\u4E0D\u6703\u5F71\u97FF\u5230\u5916\u9762\u7684\u5143\u7D20\uFF0C\u53CD\u4E4B\u4EA6\u7136
- \u5E38\u7528\u5275\u5EFA BFC \u65B9\u5F0F: [\u8A73\u7D30\u8ACB\u898B MDN](https://developer.mozilla.org/en-US/docs/Web/Guide/CSS/Block_formatting_context)
  - float \u4E0D\u662F \`\`\`none\`\`\`
  - position \u4E0D\u662F \`\`\`static\`\`\` \`\`\`relative\`\`\`
  - display \u662F \`\`\`inline-block\`\`\` \`\`\`flex\`\`\` \`\`\`inline-flex\`\`\`
  - \`\`\`overflow: hidden;\`\`\`

## z-index
- z-index \u8F03\u5927\u7684\u5143\u7D20\u6703\u8986\u84CB\u8F03\u5C0F\u7684\u5143\u7D20\u5728\u4E0A\u5C64\u9032\u884C\u986F\u793A
- \u4E0B\u9762\u7BC4\u4F8B box1 \u6703\u8986\u84CB\u5728 box2 \u4E0A\u9762
\`\`\`html
<head>
  <style>
    .box1 {
      width: 300px;
      height: 300px;
      background-color: orange;
      position: absolute;
      top: 100px;
      left: 100px;
      z-index: 9999;
    }

    .box2 {
      width: 300px;
      height: 300px;
      background-color: blue;
      position: absolute;
      top: 200px;
      left: 200px;
      z-index: 999;
    }
  </style>
</head>

<body>
  <div class="box1"></div>
  <div class="box2"></div>
</body>
\`\`\`
`;export{n as default};

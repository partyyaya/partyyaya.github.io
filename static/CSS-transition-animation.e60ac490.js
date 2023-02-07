const n=`<span style="font-size: 32px; font-weight: 600;">CSS \u904E\u6E21\u8207\u52D5\u756B</span>

## \u904E\u6E21
- \u6240\u6709\u6578\u503C\u985E\u578B\u7684\u5C6C\u6027\u90FD\u53EF\u4F7F\u7528\u904E\u6E21
- \u80CC\u666F\u984F\u8272\u8207\u6587\u5B57\u984F\u8272\u90FD\u53EF\u4F7F\u7528\u904E\u6E21
- \u6240\u6709\u8B8A\u5F62(2d\u82073d)\u90FD\u53EF\u4F7F\u7528\u904E\u6E21
- \u5EFA\u8B70\u4E8B\u9805: \u8ACB\u5148\u8A2D\u5B9A\u521D\u59CB\u72C0\u614B
- \u904E\u6E21\u53EF\u5207\u5206\u56DB\u500B\u5C6C\u6027
  - \`\`\`transition-property\`\`\` \u90A3\u4E9B\u5C6C\u6027\u9700\u8981\u904E\u6E21
  - \`\`\`transition-duration\`\`\` \u52D5\u756B\u6642\u9593
  - \`\`\`transition-timing-function\`\`\` \u52D5\u756B\u8B8A\u5316\u66F2\u7DDA(\u7DE9\u52D5\u6548\u679C)
  - \`\`\`transition-delay\`\`\` \u5EF6\u9072\u6642\u9593
- \u5E38\u7528\u7684\u7DE9\u885D\u5C6C\u6027
  - \`\`\`\u7DDA\u6027\`\`\` transition-timing-function: linear;
  - \`\`\`\u7DE9\u6162\u7684\u958B\u59CB\uFF0C\u4E2D\u9593\u8B8A\u5FEB\uFF0C\u6700\u5F8C\u6162\u6162\u7D50\u675F\`\`\` transition-timing-function: ease;
  - \`\`\`\u5148\u6162\u5F8C\u5FEB\`\`\` transition-timing-function: ease-in;
  - \`\`\`\u5148\u5FEB\u5F8C\u6162\`\`\` transition-timing-function: ease-out;
  - \`\`\`\u7DE9\u6162\u7684\u958B\u59CB\u548C\u7D50\u675F\`\`\` transition-timing-function: ease-in-out;
  - [\u8C9D\u585E\u723E\u66F2\u7DDA](https://cubic-bezier.com) transition-timing-function: cubic-bezier(.29,-0.98,.5,1.76);
- \u7BC4\u4F8B
  \`\`\`css
  /* 
    \u53EF\u4EE5\u53EA\u8A2D\u5B9A\u5169\u500B\u5C6C\u6027:
    1.\u7528\u4F86\u8A2D\u7F6E\u54EA\u500B\u5C6C\u6027\u9700\u8981\u904E\u6E21
    2.\u8A2D\u7F6E\u904E\u6E21\u7684\u6642\u9593 
  */
  transition: background 1s;

  /* 
    1:\u9700\u8981\u8B8A\u5316\u7684\u5C6C\u6027 
    2:\u52D5\u756B\u6642\u9577(\u5FC5\u9808\u4EE5s(\u79D2)\u70BA\u55AE\u4F4D) 
    3.\u8B8A\u5316\u901F\u5EA6\u66F2\u7DDA 
    4.\u5EF6\u9072\u6642\u9593(\u53EFms) 
  */
  transition: width 5s linear 0s;

  /* \u904E\u6E21\u52D5\u756B\u7BC4\u4F8B */
  .test {
    width: 200px;
    height: 200px;
    background-color: orange;
    margin-bottom: 10px;
    transition: transform 1s linear 0s;
  }

  .test:hover {
    transform: scale(1.2) rotate(360deg);
  }

  /* 
    \u82E5\u6709\u591A\u500B\u5C6C\u6027\u4F7F\u7528\u904E\u6E21
    \u5247\u53EF\u7528all\u5C6C\u6027\u4EE3\u66FF(\u82E5\u5C6C\u6027\u53EA\u6709\u4E00\u500B\u5247\u8ACB\u52FF\u4F7F\u7528,\u6709\u6548\u7387\u554F\u984C) */
  .test2 {
    /* \u8A2D\u5B9A\u521D\u59CB\u72C0\u614B */
    width: 200px;
    height: 200px;
    background-color: orange;
    border-radius: 0;
    /* \u8A2D\u7F6E\u904E\u6E21 */
    transition: all 1s linear 0s;
  }
  .test2:hover {
    width: 400px;
    height: 160px;
    background-color: green;
    border-radius: 50%;
  }
  \`\`\`

### \u88FD\u4F5C\u65CB\u8F49\u7ACB\u9AD4\u6B63\u65B9\u5F62
\`\`\`html
<head>
  <style>
    section {
      width: 200px;
      height: 200px;
      margin: 100px auto;
      perspective: 10000px;
    }

    .box {
      width: 200px;
      height: 200px;
      perspective: 10000px;
      position: relative;
      /* \u8A2D\u7F6E\u8B8A\u5316\u985E\u578B\uFF0C\u4FDD\u7559\u5BB9\u5668\u51853D\u6548\u679C */
      /* \u8A72\u5BB9\u5668\u662F\u821E\u53F0\u4E5F\u662F\u6F14\u54E1\uFF0C\u5BB9\u5668\u651C\u5E36\u88E1\u9762\u7684p\u4E00\u8D77\u8F49 */
      transform-style: preserve-3d;
      transition: all 10s ease 0s;
    }

    section:hover .box {
      transform: rotateX(360deg) rotateY(360deg);
    }

    .box p {
      position: absolute;
      top: 0;
      left: 0;
      width: 200px;
      height: 200px;
    }

    .box p:nth-child(1) {
      background-color: rgba(219, 56, 211, 0.486);
      /* \u524D\u9762 */
      transform: translateZ(100px);
    }

    .box p:nth-child(2) {
      background-color: rgba(42, 128, 199, 0.486);
      /* \u9876\u90E8\u9762 */
      transform: rotateX(90deg) translateZ(100px);
    }

    .box p:nth-child(3) {
      background-color: rgba(56, 219, 83, 0.486);
      /* \u80CC\u9762 */
      transform: rotateX(180deg) translateZ(100px);
    }

    .box p:nth-child(4) {
      background-color: rgba(213, 216, 32, 0.486);
      /* \u5E95\u90E8\u9762 */
      transform: rotateX(-90deg) translateZ(100px);
    }

    .box p:nth-child(5) {
      background-color: rgba(236, 82, 102, 0.486);
      /* \u4FA7\u9762 */
      transform: rotateY(90deg) translateZ(100px);
    }

    .box p:nth-child(6) {
      background-color: rgba(119, 17, 236, 0.486);
      /* \u4FA7\u9762 */
      transform: rotateY(-90deg) translateZ(100px);
    }
  </style>
</head>

<body>
  <section>
    <div class="box">
      <p></p>
      <p></p>
      <p></p>
      <p></p>
      <p></p>
      <p></p>
    </div>
  </section>
</body>
\`\`\`

### \u88FD\u4F5C\u53EF\u4F38\u7E2E\u7684\u83DC\u55AE\u5217\u8868
\`\`\`html
<style>
#test {
  width: 500px;
  /* \u4E0B\u9762\u4E09\u500B\u5C6C\u6027\u70BA\u4E3B\u8981\u6838\u5FC3 */
  max-height: 10vh;
  overflow-y: hidden;
  transition: max-height 0.3s linear 0s;
}
</style>
<body style="height: 3000px;">
  <input type="button" onclick="contentTrans()" value="test">
  <div id="test">
    <div>123456</div>
    <div>123456</div>
    <div>123456</div>
    <div>123456</div>
    <div>123456</div>
    <div>123456</div>
    <div>123456</div>
    <div>123456</div>
    <div>123456</div>
    <div>123456</div>
    <div>123456</div>
    <div>123456</div>
    <div>123456</div>
    <div>123456</div>
  </div>
</body>
<script>
function contentTrans () {
  const test = document.getElementById('test')
  if(test.style.maxHeight === '0vh') {
    test.style.maxHeight = '10vh'
  } else {
    test.style.maxHeight = '0vh'
  }
}
<\/script>
\`\`\`

## \u52D5\u756B
- \u4F7F\u7528\u65B9\u5F0F
  - \`\`\`animation: \u52D5\u756B\u540D\u7A31 \u6301\u7E8C\u5E7E\u79D2 \u7DE9\u885D\u6548\u679C \u5EF6\u9072\u5E7E\u79D2 \u591A\u5C11\u6B21(infinite: \u7121\u6578\u6B21);\`\`\`
- \u53EF\u7D30\u5206\u591A\u500B\u5B50\u5C6C\u6027
  - \`\`\`animation-delay\`\`\` \u5B9A\u7FA9\u5143\u7D20\u8B80\u53D6\u5B8C\u7562\u5230\u52D5\u756B\u958B\u59CB\u7684\u9593\u9694\u6642\u9593\u3002
  - \`\`\`animation-direction\`\`\` \u5B9A\u7FA9\u662F\u5426\u52D5\u756B\u64AD\u653E\u5B8C\u7562\u5F8C\u5C07\u6703\u53CD\u5411\u64AD\u653E\u3002
  - \`\`\`animation-duration\`\`\` \u5B9A\u7FA9\u52D5\u756B\u5B8C\u6210\u4E00\u6B21\u9031\u671F\u7684\u6642\u9593\u3002
  - \`\`\`animation-iteration-count\`\`\` \u5B9A\u7FA9\u52D5\u756B\u91CD\u8907\u7684\u6B21\u6578\u3002\u53EF\u7528 infinite \u4F86\u8B93\u52D5\u756B\u6C38\u9060\u91CD\u8907\u64AD\u653E\u3002
  - \`\`\`animation-name\`\`\`  @keyframes \u7684\u540D\u5B57\u3002
  - \`\`\`animation-play-state\`\`\` \u63A7\u5236\u52D5\u756B\u7684\u64AD\u653E\u72C0\u614B\u3002\u6709 \`\`\`pause\`\`\` \`\`\`running\`\`\` \u5169\u7A2E\u503C\uFF0C\u5F8C\u8005\u70BA\u9810\u8A2D\u503C\u3002
  - \`\`\`animation-timing-function\`\`\` \u5B9A\u7FA9\u52D5\u756B\u8F49\u8B8A\u6642\u6642\u9593\u7684\u52A0\u901F\u66F2\u7DDA (\u4F8B\u5982 linear)\u3002
  - \`\`\`animation-fill-mode\`\`\` \u5B9A\u7FA9\u5143\u7D20\u5728\u52D5\u756B\u64AD\u653E\u5916(\u52D5\u756B\u958B\u59CB\u524D\u53CA\u7D50\u675F\u5F8C)\u7684\u72C0\u614B\u3002
- \u7BC4\u4F8B
  \`\`\`css
  /* \u7121\u9650\u6B21\u57F7\u884C */
  animation: r 1s linear 0s infinite;
  /* alternate: \u5076\u6578\u6B21\u81EA\u52D5\u9006\u5411\u57F7\u884C */
  animation: r 2s linear 0s infinite alternate;
  /* forwards: \u505C\u6B62\u5728\u6700\u5F8C\u7D50\u675F\u72C0\u614B */
  animation: r 1s linear 0s forwards;

  @keyframes r {
    from {
        transform: rotate(0);
    }

    to {
        transform: rotate(360deg);
    }
  }

  /* \u53EF\u4EE5\u5229\u7528\u767E\u5206\u6BD4\u5206\u968E\u6BB5\u4F86\u505A\u52D5\u756B */
  @keyframes changeColor {
    0% {
      background-color: red;
    }
    20% {
      background-color: yellow;
    }
    40% {
      background-color: blue;
    }
    60% {
      background-color: green;
    }
    80% {
      background-color: purple;
    }
    100% {
      background-color: orange;
    }
  }
  \`\`\`
`;export{n as default};

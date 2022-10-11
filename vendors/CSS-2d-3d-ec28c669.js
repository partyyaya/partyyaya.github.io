const n=`<span style="font-size: 32px; font-weight: 600;">CSS 2D&3D</span>

## \u4F4D\u79FB
- \u8207\u76F8\u5C0D\u5B9A\u4F4D\u76F8\u540C,\u6703\u4FDD\u7559\u5BE6\u969B\u4F4D\u7F6E\u4E26\u6E32\u67D3\u4F4D\u79FB\u5F8C\u7684\u4F4D\u7F6E
- \u53EF\u4EE5\u62C6\u5206 \`\`\`translateX\`\`\` \`\`\`translateY\`\`\` \`\`\`translateZ\`\`\`
\`\`\`css
transform: translate(400px, 100px);
/* \u4EE5\u4E0B\u4E09\u500B\u7B49\u50F9 */
transform: translate(400px);
transform: translate(400px, 0px);
transform: translateX(400px);
/* \u4E5F\u53EF\u4EE5\u7528 % */
transform: translate(-50%, -50%);
\`\`\`

## \u6B6A\u659C
\`\`\`css
/* x:\u6A6B\u5411\u626D\u66F2 y:\u7E31\u5411\u626D\u66F2 */
transform: skew(10deg, 20deg);
/* 
  \u7576\u53EA\u6709\u4E00\u500B\u53C3\u6578\u7684\u6642\u5019\uFF0C\u7B2C\u4E8C\u500B\u53C3\u6578\u9ED8\u8A8D\u70BA0deg\uFF0C
  \u4E0B\u9762\u70BA\u5143\u7D20\u7684\u6C34\u5E73\u65B9\u5411\u9006\u6642\u91DD\u50BE\u659C45\u5EA6\uFF0C\u8C4E\u76F4\u65B9\u5411\u50BE\u659C0\u5EA6
*/
transform: skew(45deg);
\`\`\`

## \u65CB\u8F49
\`\`\`css
/* \u6B63:\u9806\u6642\u91DD \u8CA0:\u9006\u6642\u91DD */
transform: rotate(30deg);
/* \u4EE5\u76D2\u5B50\u5DE6\u4E0A\u89D2\u4E3A\u4E2D\u5FC3\u70B9\u8FDB\u884C\u65CB\u8F6C(\u53EF\u7528%\u6578\u66FF\u63DB:50% 50%\u70BA\u4E2D\u5FC3) */
transform-origin: 0 0;
transform: rotate(30deg);
\`\`\`

## \u7E2E\u653E
\`\`\`css
/* \u6574\u9AD4\u7E2E\u5C0F 0.66 \u500D */
transform: scale(.66);
/* 
  \u82E5\u8981\u5C07 width: 1000px; height: 500px; \u7684\u5143\u7D20
  \u7E2E\u653E\u70BA width: 300px; height: 100px;
  \u5247 transform: scale(sx, sy)\uFF0C
  sx \u8868\u793A\u5BBD\u5EA6\u7F29\u653E\u70BA\u539F\u5143\u7D20\u7684 sx \u500D\uFF0Csy \u8868\u793A\u9AD8\u5EA6\u7F29\u653E\u70BA\u539F\u5143\u7D20\u7684 sy \u500D\u3002
  \u6240\u4EE5\u7F29\u653E\u70BA transform: scale(300/1000, 100/500)\uFF0C
  \u5373 transform: scale(.3, .2)
*/
\`\`\`

## 3D\u7A7A\u9593\u79FB\u52D5
\`\`\`html
<head>
  <style>
    p {
      width: 200px;
      height: 200px;
      border: 1px solid #000;
      background-color: orange;
    }

    .box1 {
      width: 202px;
      height: 202px;
      border: 1px solid #000;
      margin: 50px auto;
      /* \u82E5\u5B50\u6A19\u7C64(\u6F14\u54E1)\u8981\u986F\u793A3d\u6548\u679C\u5247\u7236\u6A19\u7C64(\u821E\u53F0)\u5FC5\u9808\u589E\u52A0 perspective(\u8996\u89D2\u9060\u8FD1) */
      perspective: 300px;
    }

    /* \u60F3\u50CF\u9762\u5C0D\u87A2\u5E55\u70BAx\u8EF8,\u65C1\u908A\u64F4\u5C55\u70BAy\u8EF8*/
    .box1 p {
      /* \u8981\u6CE8\u610F\u75763d\u8B8A\u578B\u5F8C,\u79FB\u52D5\u7684x,y,z\u8EF8\u4E5F\u6703\u8DDF\u8457\u50BE\u659C */
      /* x\u8EF8\u9806\u6642\u9418\u8F4930\u5EA6 */
      transform: rotateX(30deg) translateX(100px) translateY(100px) translateZ(100px);
    }
    /* \u4E0D\u63D0transform: rotateZ(); \u56E0\u70BA\u53EA\u662F\u5E73\u9762\u65CB\u8F49 */
  </style>
</head>

<body>
  <div class="box1">
    <p></p>
  </div>
</body>
\`\`\`
`;export{n as default};

const n=`<span style="font-size: 32px; font-weight: 600;">CSS \u9078\u64C7\u5668</span>

## \u5143\u7D20\u95DC\u4FC2\u9078\u64C7\u5668
\`\`\`css
/* \u53EA\u5C0D\u5152\u5B50\u6A19\u7C64 */
.box > p {
  color: red;
}

/* \u53EA\u5C0D\u540C\u7D1A\u4E0B\u4E00\u500B\u6A19\u7C64 */
img + span {
  color: green;
}

/* \u5C0D\u4E4B\u5F8C\u6240\u6709\u540C\u7D1A\u6A19\u7C64 */
h3 ~ span {
  font-style: italic;
}
\`\`\`

## \u507D\u5143\u7D20
- \u82E5\u507D\u5143\u7D20\u6709\u81EA\u5DF1\u7684 \`css\` \u5C6C\u6027\uFF0C\u5247\u512A\u5148\u7D1A\u6BD4\u539F\u6A19\u7C64\u66F4\u9AD8
  - ex\uFF1A\u82E5\u507D\u5143\u7D20\u5C6C\u6027\u70BA \`color: blue;\`\uFF0C\u5247\u4E0D\u6703\u53D7\u539F\u6A19\u7C64(\u4E0D\u7BA1\u512A\u5148\u7D1A\u591A\u9AD8) \`color: red;\` \u5F71\u97FF
\`\`\`css
/* before after \u7684 content \u70BA\u5FC5\u9808\u5C6C\u6027 */
/* \u8868\u793A\u5728\u6240\u6709a\u6A19\u7C64\u88E1\u6240\u6709\u6587\u672C\u4E4B\u524D\u90FD\u589E\u52A0\u25A0(\u610F\u6307\u9023\u25A0\u90FD\u53EF\u9EDE\u9078) */
a::before {
  content: "\u25A0";
}

/* 
\u91CD\u9EDE:\u9084\u53EF\u4EE5\u4F7F\u7528\u7D55\u5C0D\u5B9A\u4F4D\u5728\u7279\u5B9A\u7684\u76EE\u6A19\u524D(\u5F8C::after)\u52A0\u4E0A\u5716\u7247 
\u8209\u4F8B:
footer .part1 dl::before {
  content: '';
  position: absolute;
  width: 60px;
  height: 60px;
  background-image: url(../images/icons.png);
  left: 0;
}
*/

/* \u8868\u793A\u5728\u6240\u6709a\u6A19\u7C64\u88E1\u6240\u6709\u6587\u672C\u4E4B\u5F8C\u90FD\u589E\u52A0\u2764(\u610F\u6307\u9023\u2764\u90FD\u53EF\u9EDE\u9078) */
a::after {
    content: "\u2764";
}

.box1::selection {
  /* \u8A2D\u5B9A\u9078\u53D6\u5F8C\u80CC\u666F\u989C\u8272 */
  background-color: springgreen;
  /* \u8A2D\u5B9A\u9078\u53D6\u5F8C\u6587\u5B57\u989C\u8272 */
  color: deeppink;
}

/* \u9396\u5B9A\u8A72\u584A\u7D1A\u5143\u7D20\u88E1\u7684\u7B2C\u4E00\u500B\u5B57 */
.box1::first-letter {
  font-size: 50px;
}

/* \u9396\u5B9A\u8A72\u584A\u7D1A\u5143\u7D20\u88E1\u7684\u7B2C\u4E00\u884C\u5B57 */
.box1::first-line {
  /* \u6DFB\u52A0\u4E0B\u5212\u7EBF */
  text-decoration: underline;
}
\`\`\`

## \u507D\u985E
- a \u6A19\u7C64\u507D\u985E
  - link \u8207 visited \u5148\u5F8C\u90FD\u53EF
  - hover \u9700\u5728 active \u4E4B\u524D
  - link & visited \u9700\u5728 hover & active \u4E4B\u524D
\`\`\`css
/* \u6C92\u6709\u88AB\u8A2A\u554F */
a:link {
  color: dodgerblue;
}

/* \u88AB\u8A2A\u554F\u904E */
a:visited {
  color: darkgoldenrod;
}

/* \u9F20\u6A19\u61F8\u505C\u5728\u9023\u7D50\u4E0A */
a:hover {
  background-color: gold;
}

/* \u6309\u4E0B\u4F46\u672A\u9B06\u958B */
a:active {
  font-size: 50px;
}
\`\`\`

- css3\u507D\u985E
\`\`\`css
/* \u82E5\u6A19\u7C64\u5167\u70BA\u7A7A\u5247\u751F\u6548 */
.para:empty {
  background-color: red;
}

/* \u805A\u7126\u6642\u751F\u6548(\u82E5\u8A2D\u5B9A disable \u5247\u7121\u6CD5\u805A\u7126) */
input:focus {
  background-color: rgb(239, 243, 181);
}

input:disabled {
  border: 1px solid #000;
}

input:enabled {
  border: 1px solid rgb(17, 84, 209);
}

/* 
\u53EA\u7528\u65BC\u55AE\u9078\u6309\u9215\u548C\u8907\u9078\u6846
\u6B64\u7BC4\u4F8B\u76EE\u6A19\u70BA checked \u72C0\u614B\u7684 input \u5F8C\u9762\u7684\u7B2C\u4E00\u500B span
*/
input:checked+span {
  color: red;
}

/* \u76F8\u7B49\u65BChtml\u6A19\u7C64 */
:root {
  font-size: 20px;
}
\`\`\`

## \u5C64\u758A\u6027
- \u884C\u5185\u5F0F > \u5185\u5D4C\u5F0F\u7684\u512A\u5148\u7EA7
- id > class > \u6A19\u7C64
- \u82E5\u5C64\u7D1A\u4E00\u6A23\u5247\u6309\u7167\u5148\u5F8C\u9806\u5E8F
- \u5C31\u8FD1\u539F\u5247
  - \u82E5\u90FD\u6C92\u9078\u4E2D\u5247\u770B\u8AB0\u6BD4\u8F03\u63A5\u8FD1,\u82E5\u90FD\u9078\u4E2D\u5247\u770B\u6B0A\u91CD
  - \u8FD1 > \u6B0A\u91CD
\`\`\`html
<style>
p {
  color: red;
}

#para {
  color: green;
}

.spec {
  color: blue;
}

/* 
  id > class > \u6A19\u7C64
  \u6B0A\u91CD(2, 0, 1)
*/
#box1 #box2 p {
  color: red;
}

/* 
  \u6B0A\u91CD(2, 1, 2)
*/
#box1 div.box2 #box3 p {
  color: green;
}

/* 
  \u6B0A\u91CD(0, 3, 1)
*/
.box1 .box2 .box3 p {
  color: blue;
}

/* 
  \u6B0A\u91CD(0, 1, 1)
*/
.list li {
  color: red;
}

/* 
  \u6B0A\u91CD(0, 1, 0)
  \u5982\u679C\u52A0 !important \u5247\u8996\u70BA\u6700\u512A\u5148
*/
.spec {
  color: blue !important;
}
</style>
<body>
  <p id="para" class="spec">\u6211\u662F\u6BB5\u843D</p>
  <div id="box1" class="box1">
    <div id="box2" class="box2">
      <div id="box3" class="box3">
        <p>\u6211\u662F\u6BB5\u843D</p>
      </div>
    </div>
  </div>

  <ul class="list">
    <li>\u5217\u8868\u9879</li>
    <li class="spec">\u5217\u8868\u9879</li>
    <li class="spec">\u5217\u8868\u9879</li>
    <li>\u5217\u8868\u9879</li>
    <li>\u5217\u8868\u9879</li>
    <li>\u5217\u8868\u9879</li>
    <li>\u5217\u8868\u9879</li>
  </ul>
</body>
\`\`\`

## \u5E8F\u865F\u9078\u64C7\u5668
- \u82E5\u6307\u5B9A(:\u524D\u9762)\u7684\u6A19\u7C64\u4E0D\u7B26\u5247\u4E0D\u6703\u751F\u6548 
\`\`\`html
<style>
  /* \u7B2C1\u500B\u662Fp\u6A19\u7C64\u751F\u6548 */
  .box1 p:first-child {
    color: red;
  }

  /* \u6700\u5F8C1\u500B\u662Fp\u6A19\u7C64\u751F\u6548 */
  .box1 p:last-child {
    color: blue;
  }

  /* \u82E5\u7B2C3\u500B\u4E0D\u662Fp\u6A19\u7C64\u5247\u4E0D\u751F\u6548 */
  .box2 p:nth-child(3) {
    color: green;
  }

  /* \u5947\u6578: odd=2n+1 */
  .box3 p:nth-child(odd) {
    color: orange;
  }

  /* \u5076\u6578: even=2n */
  .box3 p:nth-child(even) {
    color: red;
  }

  /* \u9078\u64C7\u7B2C\u4E09\u500Bp\u6A19\u7C64 */
  .box4 p:nth-of-type(3) {
    color: blue;
  }

  /* \u5012\u6578\u7B2C\u4E8C\u500B\u662Fp\u6A19\u7C64\u5247\u751F\u6548 */
  .box5 p:nth-last-child(2) {
    color: sienna;
  }

  /* \u9078\u64C7\u5012\u6578\u7B2C\u4E8C\u500Bp\u6A19\u7C64 */
  .box5 p:nth-last-of-type(2) {
    color: sienna;
  }
</style>
\`\`\`

## \u8907\u5408\u9078\u64C7\u5668
\`\`\`html
<style>
  /* \u5F8C\u4EE3\u9078\u64C7\u5668\u5FC5\u9808\u4EE5\u7A7A\u683C\u9694\u958B */
  div.box p.spec em {
    color: red;
  }

  /* \u4EA4\u96C6\u9078\u64C7\u5668\u901A\u5E38\u7528\u5728\u985E\u4E2D\u6307\u5B9A\u7684\u6A19\u7C64 */
  h3.spec {
    font-style: italic;
  }

  /* \u591A\u91CD\u9078\u64C7\u5668 */
  ul, ol {
    list-style: none;
  }
</style>
<body>
  <div class="box">
    <ul>
      <li>
        <p class="spec">\u6BB5\u843D<em>\u5F37\u8ABF\u6587\u5B57</em></p>
      </li>
    </ul>
  </div>
  <h3 class="spec">\u4E09\u7D1A\u6A19\u984C</h3>
  <ul>
    <li>\u7121\u5E8F\u5217\u8868\u7684\u5217\u8868\u9805</li>
  </ul>
  <ol>
    <li>\u6709\u5E8F\u5217\u8868\u7684\u5217\u8868\u9805</li>
  </ol>
</body>
\`\`\`

## \u5C6C\u6027\u9078\u64C7\u5668
\`\`\`html
<style>
  img {
    width: 300px;
  }

  /* 
    [alt] \u6709\u9019\u500B\u5C6C\u6027
    [alt="abc"] \u7CBE\u78BA\u5339\u914D
    [alt^="abc"] \u958B\u982D\u5339\u914D
    [alt$="abc"] \u7D50\u5C3E\u5339\u914D
    [alt*="abc"] \u4EFB\u610F\u4F4D\u7F6E\u5339\u914D
    [alt|="abc"] abc\u70BA\u958B\u982D
    [alt~="abc"] abc\u70BA\u7A7A\u683C\u5206\u958B\u7684\u7368\u7ACB\u90E8\u5206\u5982:777 abc 888
   */

  img[alt~="\u624B\u6A5F\u62CD\u651D"] {
    border: 3px solid red;
  }
</style>
<img src="images/image.jpg" alt="\u624B\u6A5F\u62CD\u651D">
\`\`\`
`;export{n as default};

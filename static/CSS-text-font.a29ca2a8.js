const n=`<span style="font-size: 32px; font-weight: 600;">CSS \u6587\u672C\u8207\u5B57\u9AD4</span>

## \u5E38\u7528\u6587\u672C\u6A23\u5F0F\u5C6C\u6027
\`\`\`css
.test {
  /* \u80CC\u666F\u984F\u8272 */
  background-color: #f36;
  /* \u5B57\u9AD4\u984F\u8272 */
  color: #ffffff;
  /* \u6700\u5927\u5230255 \u900F\u660E\u5EA6\u70BA0~1*/
  color: rgba(255, 0, 0, .6);
  /* \u5B57\u9AD4\u7C97\u7D30(\u9810\u8A2D: normal(400), \u52A0\u7C97: bold(700)) */
  font-weight: bold;
  /* \u5B57\u9AD4\u98A8\u683C(\u9810\u8A2D normal) */
  font-style: italic;
  /* \u6587\u5B57\u5927\u5C0F */
  font-size: 26px;
  /* 
    \u6587\u672C\u5167\u5BB9\u4E4B\u524D\u7684\u7E2E\u9032\u91CF
    2em: \u8868\u793A\u5169\u500B\u5B57\u7B26\u7684\u5BEC\u5EA6
    %: \u4EE5\u8A72\u5167\u5BB9\u584A\u5BEC\u5EA6\u6C7A\u5B9A
  */
  text-indent: 2em;
  /* \u6587\u5B57\u7279\u6548(\u9810\u8A2D: none, underline: \u5E95\u7DDA, line-through: \u522A\u9664\u7DDA) */
  text-decoration: underline;
  /* 
    \u884C\u9AD8:
    1.75 \u4EE3\u8868\u8A72\u5B57\u9AD4\u5927\u5C0F x 1.75\u500D
    \u4E5F\u53EF\u4EE5\u5BEB\u6210 175% \u6216 26x1.75=45.5px \u6216 1.75em
    \u901A\u5E38\u4EE5\u500D\u6578\u8868\u793A 
  */
  line-height: 1.75;
}
\`\`\`

## \u5B57\u9AD4\u5C6C\u6027
\`\`\`css
/* \u64C1\u6709\u5B57\u9AD4\u6587\u4EF6\u6642\u53EF\u7528\u4EE5\u4E0B\u65B9\u5F0F\u5B9A\u7FA9\u5B57\u9AD4 */
@font-face {
  /* \u53D6\u540D */
  font-family: 'webfont';
  /* \u70BA\u5B57\u9AD4\u63D0\u4F9B\u4E00\u500B\u975E\u5E38\u5C0F\u7684\u963B\u585E\u9031\u671F\u548C\u7121\u9650\u7684\u4EA4\u63DB\u9031\u671F */
  font-display: swap;
  /* 
    url \u8B80\u53D6\u5B57\u9AD4\u6A94\uFF0C\u82E5\u7B2C\u4E00\u500B\u8B80\u53D6\u6210\u529F\uFF0C\u5247\u5F8C\u9762\u4E0D\u518D\u8B80\u53D6
    format \u7528\u610F\u5728\u8F14\u52A9\u700F\u89BD\u5668\u8B58\u5225\uFF0C\u82E5\u700F\u89BD\u5668\u4E0D\u652F\u63F4\u8A72\u683C\u5F0F\uFF0C\u5C07\u76F4\u63A5\u8DF3\u904E\u8A72\u5B57\u9AD4\uFF0C
           \u7701\u53BB\u4E0B\u8F09\u5B57\u9AD4\u6A94\u6848\u7684\u6642\u9593\uFF0C\u5426\u5247\u6703\u5148\u4E0B\u8F09\u518D\u5224\u65B7
  */
  /* IE9 */
  src: url('fonts/webfont.eot');
  /* IE6-IE8 */
  src: url('fonts/webfont.eot') format('embedded-opentype'),
      /* chrome\u3001firefox */
      url('fonts/webfont.woff2') format('woff2'),
      url('fonts/webfont.woff') format('woff'),
      /* chrome\u3001firefox\u3001opera\u3001Safari, Android, iOS 4.2+*/
      url('fonts/webfont.ttf') format('truetype'),
      /* iOS 4.1- */
      url('fonts/webfont.svg') format('svg');
}

/* 
  \u6703\u5148\u67E5\u770B\u4F7F\u7528\u8005\u4E3B\u6A5F\u6709\u7121\u5B89\u88DD\u5B57\u9AD4
  \u82E5\u7B2C\u4E00\u500B\u5B57\u9AD4\u6C92\u6709\u5247\u9678\u7E8C\u5F80\u4E0B\u5C0B\u627E\u5408\u9069\u7684\u5B57\u9AD4
  \u82E5\u90FD\u7121\u5408\u9069\u5B57\u9AD4\uFF0C\u5247\u4F7F\u7528\u672C\u6A5F\u9810\u8A2D\u5B57\u9AD4
*/
.para5 {
  font-family: 'Times New Roman', serif, 'Microsoft Yahei';
}

/* 
  \u901A\u5E38\u4E2D\u6587\u5B57\u9AD4\u6703\u64FA\u5728\u82F1\u6587\u5B57\u9AD4\u5F8C\u9762\u4EE5\u5C08\u6CE8\u986F\u793A\u4E2D\u6587
  \u5B57\u9AD4\u5982\u679C\u662F\u4E2D\u6587\u6216\u82F1\u6587\u4E2D\u9593\u6709\u7A7A\u683C\uFF0C\u7528\u5F15\u865F\u5305\u8D77\u6765
  \u591A\u500B\u5B57\u9AD4\u8A2D\u7F6E\uFF0C\u5B57\u9AD4\u8207\u5B57\u9AD4\u4E4B\u95F4\u7528\u9017\u865F\u9694\u958B
  \u5F15\u865F\u5D4C\u5957:\u5916\u9762\u4F7F\u7528\u96D9\u5F15\u865F\uFF0C\u88E1\u9762\u4F7F\u7528\u55AE\u5F15\u865F
*/
.para6 {
  font-family: 'Times New Roman', serif, '\u5FAE\u8F6F\u96C5\u9ED1';
}

h3 {
  font-family: 'webfont';
  color: rgb(250, 50, 190);
}
\`\`\`

## \u5B57\u9AD4\u5408\u5BEB\u5C6C\u6027
- \u5FC5\u9808\u5305\u542B: \`\`\`font-size\`\`\` \`\`\`font-family\`\`\`
- \u53EF\u9078\u64C7\u5305\u542B: \`\`\`font-style\`\`\` \`\`\`font-variant\`\`\` \`\`\`font-weight\`\`\` \`\`\`line-height\`\`\`
- \`\`\`font-style\`\`\` \`\`\`font-variant\`\`\` \`\`\`font-weight\`\`\` \u5FC5\u987B\u5728 \`\`\`font-size\`\`\` \u4E4B\u524D
- \`\`\`line-height\`\`\` \u9700\u5728 \`\`\`font-size\`\`\` \u5F8C\u9762\uFF0C\u7531 \`\`\`/\`\`\` \u5206\u9694\uFF0C\u5982: \`\`\`16px/3\`\`\`
- font-family \u5FC5\u987B\u6700\u540E\u6307\u5B9A
\`\`\`css
 p {
  font: bold italic 40px/1.5 "Times New Roman", "\u5FAE\u8F6F\u96C5\u9ED1";
}
\`\`\`
`;export{n as default};

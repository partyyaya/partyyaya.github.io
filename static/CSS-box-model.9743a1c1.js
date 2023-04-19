const n=`<span style="font-size: 32px; font-weight: 600;">CSS \u76D2\u6A21\u578B</span>

## margin \u5916\u908A\u8DDD
\`\`\`css
/* 
  \u4E0B\u9762\u9019\u4E09\u500B\u6A19\u7C64\u90FD\u6709\u9810\u8A2D padding \u8207 margin \u6240\u4EE5\u8981\u5C07\u4ED6\u5011\u53BB\u9664
  \u82E5 ul \u8A2D\u5B9Apadding\u70BA0\u5247\u4E0D\u986F\u793A\u5C0F\u5713\u9EDE
*/
body,
ul,
p {
    margin: 0;
    padding: 0;
}

/* 
  margin \u5728\u5782\u76F4\u65B9\u5411\u6703\u4EE5\u5927\u503C\u70BA\u4E3B(\u6C34\u5E73\u70BA\u76F8\u52A0)
  \u4F9D\u4E0B\u9762\u7BC4\u4F8B\u5169\u500B\u76D2\u5B50\u4E4B\u9593\u9593\u8DDD\u70BA 80px
*/
.box1 {
  width: 200px;
  height: 200px;
  margin-bottom: 70px;
}

.box2 {
  width: 200px;
  height: 200px;
  margin-top: 80px;
}

/* 
  \u61C9\u7528: \u6C34\u5E73\u5C45\u4E2D
  margin
    \u500B\u5225\u5C6C\u6027:
      margin-top
      margin-bottom
      margin-left
      margin-right
    \u7C21\u5316\u5BEB\u6CD5:
      1.margin: \u4E0A \u53F3 \u4E0B \u5DE6;
      2.margin: \u4E0A\u4E0B \u5DE6\u53F3;
      3.margin: \u4E0A \u5DE6\u53F3 \u4E0B;
      4.margin: \u56DB\u908A\u540C\u5024; 
*/
section {
  width: 600px;
  height: 100px;
  background-color: rgb(240, 151, 151);
  /* \u4E0A\u4E0B\u70BA0 \u6C34\u5E73\u5C45\u4E2D */
  margin: 0 auto;
  /* \u6587\u5B57\u5C45\u4E2D */
  text-align: center;
  /* \u884C\u9AD8\u7B49\u65BC\u76D2\u5B50\u9AD8\uFF0C\u8B93\u6587\u5B57\u5782\u76F4\u5C45\u4E2D */
  line-height: 100px;
}
\`\`\`

## padding \u5167\u908A\u8DDD
\`\`\`css
/* 
  padding
  \u500B\u5225\u5C6C\u6027:
    padding-top
    padding-bottom
    padding-left
    padding-right
  \u7C21\u5316\u5BEB\u6CD5:
    1.padding: \u4E0A \u53F3 \u4E0B \u5DE6;
    2.padding: \u4E0A\u4E0B \u5DE6\u53F3;
    3.padding: \u4E0A \u5DE6\u53F3 \u4E0B;
    4.padding: \u56DB\u908A\u540C\u5024;
*/
.box2 {
  width: 200px;
  height: 200px;
  background-color: orange;
  padding: 10px 20px 30px 40px;
}
.box3 {
  width: 200px;
  height: 200px;
  background-color: orange;
  padding: 10px 20px 30px;
}
.box4 {
  width: 200px;
  height: 200px;
  background-color: orange;
  padding: 10px 20px;
}
.box5 {
  width: 200px;
  height: 200px;
  background-color: orange;
  padding: 10px;
}
\`\`\`

## \u5143\u7D20\u96B1\u85CF\u8207\u8A8D\u8B58\u76D2\u6A21\u578B
\`\`\`css
/* \u5143\u7D20\u96B1\u85CF */
.box1{
  width: 200px;
  height: 200px;
  /* \u96B1\u85CF\uFF0C\u653E\u68C4\u4F4D\u7F6E */
  display: none;
  /* \u96B1\u85CF\uFF0C\u4E0D\u653E\u68C4\u4F4D\u7F6E */
  visibility: hidden;
}

/* \u8A8D\u8B58\u76D2\u6A21\u578B */
.box2 {
  /* 
    total:\u76D2\u5B50\u5BEC:340px \u9AD8:240px
    width height \u70BA"\u5167\u5BB9\u5BEC\u9AD8";
  */
  width: 300px;
  height: 200px;
  background-color: gold;
  /* \u908A\u6846 */
  border: 10px solid red;
  /* \u5167\u908A\u8DDD */
  padding: 10px;
}

/* 
  box-sizing\u5C5E\u6027
  \u82E5\u8A2D\u7F6E border-box \u5C6C\u6027(content-box\u70BA\u9810\u8A2D)
  width height \u5247\u6703\u4EE5\u76D2\u5B50\u5BEC\u9AD8\u8A08\u7B97
  \u5982\u4E0B\u9762\u7BC4\u4F8B\u5BE6\u969B\u80FD\u4F7F\u7528\u5BEC\u9AD8\u53EA\u5269 160x160 
*/
.box3 {
  box-sizing: border-box;
  width: 200px;
  height: 200px;
  border: 10px solid #000;
  padding: 10px;
}
\`\`\`

## \u884C\u5167\u3001\u584A\u7D1A\u3001\u884C\u5167\u584A\u5143\u7D20
\`\`\`css
/* 
  \u4E3B\u8981\u7A2E\u985E\uFF1A
  1.\u884C\u5167\u584A\uFF1Adisplay: inline-block;
  2.\u884C\u5167\u5143\u7D20\uFF1Adisplay: inline;
  3.\u584A\u7D1A\u5143\u7D20\uFF1Adisplay: block;
  
  \u4E09\u7A2E\u5DEE\u5225:
  1.\u584A\u7D1A\u5143\u7D20(\u5982div)\u6703\u7368\u5360\u4E00\u884C\uFF0C\u5176\u5BEC\u5EA6\u81EA\u52D5\u586B\u6EFF\u5176\u7236\u5143\u7D20\u5BEC\u5EA6\uFF0C\u5373\u4F7F\u8A2D\u7F6E\u5BEC\u5EA6\u4E5F\u7121\u6CD5\u4E26\u6392
    \u884C\u5167\u5143\u7D20(\u5982span)\u4E0D\u6703\u7368\u5360\u4E00\u884C\uFF0C\u76F8\u9130\u7684\u884C\u5167\u5143\u7D20\u6703\u6392\u5217\u5728\u540C\u4E00\u884C\uFF0C\u76F4\u81F3\u6392\u4E0D\u4E0B\u624D\u6703\u63DB\u884C\uFF0C\u5176\u5BEC\u5EA6\u96A8\u5143\u7D20\u7684\u5167\u5BB9\u800C\u8B8A\u5316
  2.\u584A\u7D1A\u5143\u7D20\u53EF\u4EE5\u5305\u542B\u884C\u5167\u5143\u7D20\u548C\u584A\u7D1A\u5143\u7D20
    \u884C\u5167\u5143\u7D20\u4E0D\u80FD\u5305\u542B\u584A\u7D1A\u5143\u7D20
  3.\u884C\u5167\u584A\u5143\u7D20\u7D9C\u5408\u4E0A\u9762\u5169\u500B\u512A\u9EDE\uFF0C\u4E0D\u6703\u7368\u4F54\u4E00\u884C\u4E14\u53EF\u8A2D\u7F6E\u5BEC\u9AD8\u3001\u53EF\u4E26\u6392
  4.\u884C\u5167\u5143\u7D20\u8A2D\u7F6E\u4EE5\u4E0B\u5C6C\u6027\u7121\u6548
    width\u3001height\u3001
    max-width\u3001max-height\u3001
    margin-top\u3001margin-bottom\u3001
    padding-top\u3001padding-bottom 
*/
span {
  /* \u8F49\u70BA\u884C\u5167\u584A */
  display: inline-block;
}

/* \u584A\u7EA7\u5143\u7D20\u61C9\u7528 */
.box1 {
  /* \u5BEC\u5EA6\u7701\u7565\u6389\uFF0C\u7531\u65BC\u662F\u584A\u7EA7\u5143\u7D20\uFF0C\u5BEC\u5EA6\u6703\u81EA\u52D5\u6490\u6EFF */
  height: 100px;
}

.box2 {
  /* \u9AD8\u5EA6\u7701\u7565\u6389\uFF0C\u6703\u88AB\u5167\u5BB9\u81EA\u52D5\u6490\u958B */
  width: 200px;
}
\`\`\`
`;export{n as default};

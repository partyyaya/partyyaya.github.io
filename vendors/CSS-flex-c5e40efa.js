const i=`<span style="font-size: 32px; font-weight: 600;">CSS Flex \u4F48\u5C40</span>

<style>
/* \u6F14\u793A\u4F7F\u7528 */
@media (min-width: 768px){
  .flex_layout .box {
    background-color: #FF8000;
    margin: 1vw 0px;
    display: flex;
    max-width: 30vw;
  }
  .flex_layout .box-item {
    width: 3vw;
    height: 3vw;
    line-height: 3vw;
    vertical-align: middle;
    margin: 0.5vw;
    background-color: #ffd200;
    font-size: 2vw;
    color: white;
    text-align: center;
  }
}

@media (max-width: 767px){
  .flex_layout .box {
    display: none;
  }
}
</style>

## Flex \u4F48\u5C40\u4ECB\u7D39
- \u4ECB\u7D39\uFF1A\`\`\`flex\`\`\` \u662F \`\`\`Flexible Box\`\`\` \u7E2E\u5BEB\uFF0C\u4EE3\u8868\u9748\u6D3B\u6216\u5F48\u6027\u7684\u76D2\u5B50\uFF0C\u6240\u4EE5\u4E5F\u7A31\u505A"\u5F48\u6027\u4F48\u5C40"
- \`\`\`flex\`\`\` \u5BB9\u5668\u5B9A\u7FA9\uFF1A\u63A1\u7528 \`\`\`flex\`\`\` \u5E03\u5C40\u7684\u5143\u7D20
- \`\`\`flex\`\`\` \u9805\u76EE\u5B9A\u7FA9\uFF1A\`\`\`flex\`\`\` \u5BB9\u5668\u7684\u6240\u6709\u5B50\u5143\u7D20
- \u82E5\u9700\u8981\u4F7F\u7528 \`\`\`flex\`\`\` \u7A0B\u5F0F\u78BC\u8ACB\u642D\u914D\u4EE5\u4E0B \`\`\`css\`\`\` \u88DD\u98FE
  \`\`\`css
  .box {
    background-color: white;
    margin: 0 0 55px;
  }
  .box-item {
    width: 200px;
    height: 200px;
    line-height: 200px;
    vertical-align: middle;
    margin: 5px;
    background-color: #ffd200;
    font-size: 100px;
    color: white;
    text-align: center;
  }
  \`\`\`
## \u5BB9\u5668\u5C6C\u6027
### display \u5C6C\u6027
- \u5728 \`\`\`flex\`\`\` \u5E03\u5C40\u4E2D\u53EF\u4EE5\u4F7F\u7528 \`\`\`display\`\`\` \u5C6C\u6027\u4F7F\u5143\u7D20\u505A\u5F48\u6027\u986F\u793A
- \`\`\`display\`\`\` \u76EE\u524D\u6709\u4EE5\u4E0B\u986F\u793A\u65B9\u5F0F\uFF1A
  - \`\`\`flex\`\`\`\uFF1A\u5C07\u5C0D\u8C61\u4F5C\u70BA\u5F48\u6027\u76D2\u5B50\u986F\u793A\uFF0C\u5BEC\u5EA6\u81EA\u52D5\u70BA \`\`\`100%\`\`\`\uFF0C\u5982\uFF1A
    <div class="flex_layout">
      <div class="box">
        <div class="box-item">1</div>
        <div class="box-item">2</div>
        <div class="box-item">3</div>
        <div class="box-item">4</div>
      </div>
    </div>
    
    \`\`\`html
    <style>
      .box {
        display: flex;
        /*width: 100%;*/
      }
    </style>
    <body>
      <div class="box">
        <div class="box-item">1</div>
        <div class="box-item">2</div>
        <div class="box-item">3</div>
        <div class="box-item">4</div>
      </div>
    </body>
    \`\`\`
  - \`\`\`inline-flex\`\`\`\uFF1A\u5C07\u5C0D\u8C61\u4F5C\u70BA\u5167\u806F\u584A(\`\`\`inline-block\`\`\`)\u5F48\u6027\u76D2\u5B50\u986F\u793A
    <div class="flex_layout" style="display: inline-flex;">
      <div class="box">
        <div class="box-item">1</div>
        <div class="box-item">2</div>
        <div class="box-item">3</div>
        <div class="box-item">4</div>
      </div>
    </div>

    \`\`\`html
    <style>
      .box {
        /* \u82E5\u8A2D\u7F6E width \u6703\u5931\u6548\u8B8A\u70BA flex */
        display: inline-flex;
      }
    </style>
    <body>
      <div class="box">
        <div class="box-item">1</div>
        <div class="box-item">2</div>
        <div class="box-item">3</div>
        <div class="box-item">4</div>
      </div>
    </body>
    \`\`\`

### flex-direction \u5C6C\u6027
- \`\`\`flex-direction\`\`\` \u5C6C\u6027\uFF1A\u6C7A\u5B9A\u9805\u76EE\u6392\u5217(\u4E3B\u8EF8)\u7684\u65B9\u5411
- \u6709\u56DB\u500B\u9078\u9805\uFF1A\`\`\`row\`\`\`\u3001\`\`\`row-reverse\`\`\`\u3001\`\`\`column\`\`\`\u3001\`\`\`column-reverse\`\`\`
- \u4EE5\u4E0B\u5206\u5225\u4F86\u4ECB\u7D39\uFF1A
  - \`\`\`row\`\`\` (\u9ED8\u8A8D\u503C)\uFF1A\u6C34\u5E73\u65B9\u5411\u3001\u8D77\u9EDE\u5728\u5DE6\u7AEF\u3001\u9805\u76EE\u5F80\u53F3\u6392\u5217
    <div class="flex_layout" >
      <div class="box" style="flex-direction: row;">
        <div class="box-item">1</div>
        <div class="box-item">2</div>
        <div class="box-item">3</div>
        <div class="box-item">4</div>
      </div>
    </div>

    \`\`\`html
    <style>
      .box {
        display: flex;
        flex-direction: row;
      }
    </style>
    <body>
      <div class="box">
        <div class="box-item">1</div>
        <div class="box-item">2</div>
        <div class="box-item">3</div>
        <div class="box-item">4</div>
      </div>
    </body>
    \`\`\`
  - \`\`\`row-reverse\`\`\`\uFF1A\u6C34\u5E73\u65B9\u5411\u3001\u8D77\u9EDE\u5728\u53F3\u7AEF\u3001\u9805\u76EE\u5F80\u5DE6\u6392\u5217
    <div class="flex_layout">
      <div class="box" style="flex-direction: row-reverse;">
        <div class="box-item">1</div>
        <div class="box-item">2</div>
        <div class="box-item">3</div>
        <div class="box-item">4</div>
      </div>
    </div>

    \`\`\`html
    <style>
      .box {
        display: flex;
        flex-direction: row-reverse;
      }
    </style>
    <body>
      <div class="box">
        <div class="box-item">1</div>
        <div class="box-item">2</div>
        <div class="box-item">3</div>
        <div class="box-item">4</div>
      </div>
    </body>
    \`\`\`
  - \`\`\`column\`\`\`\uFF1A\u5782\u76F4\u65B9\u5411\u3001\u8D77\u9EDE\u5728\u9802\u7AEF\u3001\u9805\u76EE\u5F80\u4E0B\u6392\u5217(1234\u3001\u9810\u8A2D\u9760\u5DE6)
    <div class="flex_layout">
      <div class="box" style="flex-direction: column">
        <div class="box-item">1</div>
        <div class="box-item">2</div>
        <div class="box-item">3</div>
        <div class="box-item">4</div>
      </div>
    </div>

    \`\`\`html
    <style>
      .box {
        display: flex;
        flex-direction: column;
      }
    </style>
    <body>
      <div class="box">
        <div class="box-item">1</div>
        <div class="box-item">2</div>
        <div class="box-item">3</div>
        <div class="box-item">4</div>
      </div>
    </body>
    \`\`\`
  - \`\`\`column-reverse\`\`\`\uFF1A\u5782\u76F4\u65B9\u5411\u3001\u8D77\u9EDE\u5728\u9802\u7AEF\u3001\u9805\u76EE\u5F80\u4E0B\u6392\u5217
    <div class="flex_layout">
      <div class="box" style="flex-direction: column-reverse">
        <div class="box-item">1</div>
        <div class="box-item">2</div>
        <div class="box-item">3</div>
        <div class="box-item">4</div>
      </div>
    </div>

    \`\`\`html
    <style>
      .box {
        display: flex;
        flex-direction: column-reverse;
      }
    </style>
    <body>
      <div class="box">
        <div class="box-item">1</div>
        <div class="box-item">2</div>
        <div class="box-item">3</div>
        <div class="box-item">4</div>
      </div>
    </body>
    \`\`\`

### flex-wrap \u5C6C\u6027
- \`\`\`flex-wrap\`\`\` \u5C6C\u6027\uFF1A\u82E5\u6700\u5927\u5BEC\u5EA6\u6392\u4E0D\u4E0B\u8A72\u5982\u4F55\u63DB\u884C
- \u6709\u4E09\u500B\u9078\u9805\uFF1A\`\`\`nowrap\`\`\`\u3001\`\`\`wrap\`\`\`\u3001\`\`\`wrap-reverse\`\`\`
- \u4EE5\u4E0B\u5206\u5225\u4F86\u4ECB\u7D39(\u4E3B\u8EF8\u4EE5\u6C34\u5E73\u65B9\u5411\u505A\u7BC4\u4F8B)\uFF1A
  - \`\`\`nowrap\`\`\` (\u9ED8\u8A8D\u503C)\uFF1A\u4E0D\u63DB\u884C\uFF0C\u82E5\u6709\u591A\u500B\u9805\u76EE\uFF0C\u5247\u6703\u5C07\u6BCF\u9805\u5BEC\u5EA6\u5E73\u5747\u7E2E\u6E1B
    <div class="flex_layout">
      <div class="box" style="flex-direction: row;flex-wrap: nowrap;">
        <div class="box-item">1</div>
        <div class="box-item">2</div>
        <div class="box-item">3</div>
        <div class="box-item">4</div>
        <div class="box-item">5</div>
        <div class="box-item">6</div>
        <div class="box-item">7</div>
      </div>
    </div>

    \`\`\`html
    <style>
      .box {
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
      }
    </style>
    <body>
      <div class="box">
        <div class="box-item">1</div>
        <div class="box-item">2</div>
        <div class="box-item">3</div>
        <div class="box-item">4</div>
      </div>
    </body>
    \`\`\`
  - \`\`\`wrap\`\`\`\uFF1A\u82E5\u9805\u76EE\u4E00\u884C\u4E0D\u5920\u653E\u5247\u63DB\u884C\uFF0C\u7B2C\u4E00\u884C\u5728\u4E0A\u65B9\uFF0C\u5F9E\u4E0A\u5F80\u4E0B\u653E
    <div class="flex_layout">
      <div class="box" style="flex-direction: row;flex-wrap: wrap;">
        <div class="box-item">1</div>
        <div class="box-item">2</div>
        <div class="box-item">3</div>
        <div class="box-item">4</div>
        <div class="box-item">5</div>
        <div class="box-item">6</div>
        <div class="box-item">7</div>
        <div class="box-item">8</div>
        <div class="box-item">9</div>
      </div>
    </div>

    \`\`\`html
    <style>
      .box {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
      }
    </style>
    <body>
      <div class="box">
        <div class="box-item">1</div>
        <div class="box-item">2</div>
        <div class="box-item">3</div>
        <div class="box-item">4</div>
        <div class="box-item">4</div>
        <div class="box-item">5</div>
        <div class="box-item">6</div>
        <div class="box-item">7</div>
        <div class="box-item">8</div>
        <div class="box-item">9</div>
      </div>
    </body>
    \`\`\`
  - \`\`\`wrap-reverse\`\`\`\uFF1A\u82E5\u9805\u76EE\u4E00\u884C\u4E0D\u5920\u653E\u5247\u63DB\u884C\uFF0C\u7B2C\u4E00\u884C\u5728\u4E0B\u65B9\uFF0C\u5F9E\u4E0B\u5F80\u4E0A\u653E
    <div class="flex_layout">
      <div class="box" style="flex-direction: row;flex-wrap: wrap-reverse;">
        <div class="box-item">1</div>
        <div class="box-item">2</div>
        <div class="box-item">3</div>
        <div class="box-item">4</div>
        <div class="box-item">5</div>
        <div class="box-item">6</div>
        <div class="box-item">7</div>
        <div class="box-item">8</div>
        <div class="box-item">9</div>
      </div>
    </div>

    \`\`\`html
    <style>
      .box {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap-reverse;
      }
    </style>
    <body>
      <div class="box">
        <div class="box-item">1</div>
        <div class="box-item">2</div>
        <div class="box-item">3</div>
        <div class="box-item">4</div>
        <div class="box-item">5</div>
        <div class="box-item">6</div>
        <div class="box-item">7</div>
        <div class="box-item">8</div>
        <div class="box-item">9</div>
      </div>
    </body>
    \`\`\`

### flex-flow \u5C6C\u6027
- \`\`\`flex-flow\`\`\` \u5C6C\u6027\u70BA \`\`\`flex-direction\`\`\` \u8207 \`\`\`flex-wrap\`\`\` \u7684\u7C21\u5BEB\u5F62\u5F0F\uFF0C\u9ED8\u8A8D\u503C\u70BA \`\`\`row nowrap\`\`\`
- \u7BC4\u4F8B
  \`\`\`css
  .box {
    flex-flow: row nowrap;
    flex-flow: row wrap;
    flex-flow: row wrap-reverse;
  }
  \`\`\`

### justify-content \u5C6C\u6027
- \`\`\`justify-content\`\`\` \u5C6C\u6027\uFF1A\u5BB9\u5668\u4E2D\u9805\u76EE\u5728\u4E3B\u8EF8\u4E0A\u7684\u5C0D\u9F4A\u65B9\u5F0F
- \u6709\u4E94\u500B\u9078\u9805\uFF1A\`\`\`flex-start\`\`\`\u3001\`\`\`flex-end\`\`\`\u3001\`\`\`center\`\`\`\u3001\`\`\`space-between\`\`\`\u3001\`\`\`space-around\`\`\`
- \u4EE5\u4E0B\u5206\u5225\u4F86\u4ECB\u7D39(\u4E3B\u8EF8\u4EE5\u6C34\u5E73\u65B9\u5411\u505A\u7BC4\u4F8B)\uFF1A
  - \`\`\`flex-start\`\`\` (\u9ED8\u8A8D\u503C)\uFF1A\u4E3B\u8EF8\u4E0A\u8D77\u9EDE\u5C0D\u9F4A(\u5411\u5DE6\u9760)
    <div class="flex_layout">
      <div class="box" style="flex-direction: row; justify-content: flex-start;">
        <div class="box-item">1</div>
        <div class="box-item">2</div>
        <div class="box-item">3</div>
        <div class="box-item">4</div>
      </div>
    </div>

    \`\`\`html
    <style>
      .box {
        display: flex;
        justify-content: flex-start;
      }
    </style>
    <body>
      <div class="box">
        <div class="box-item">1</div>
        <div class="box-item">2</div>
        <div class="box-item">3</div>
        <div class="box-item">4</div>
      </div>
    </body>
    \`\`\`
  - \`\`\`flex-end\`\`\`\uFF1A\u4E3B\u8EF8\u4E0A\u7D42\u9EDE\u5C0D\u9F4A(\u5411\u53F3\u9760)
    <div class="flex_layout">
      <div class="box" style="flex-direction: row; justify-content: flex-end;">
        <div class="box-item">1</div>
        <div class="box-item">2</div>
        <div class="box-item">3</div>
        <div class="box-item">4</div>
      </div>
    </div>

    \`\`\`html
    <style>
      .box {
        display: flex;
        justify-content: flex-end;
      }
    </style>
    <body>
      <div class="box">
        <div class="box-item">1</div>
        <div class="box-item">2</div>
        <div class="box-item">3</div>
        <div class="box-item">4</div>
      </div>
    </body>
    \`\`\`
  - \`\`\`center\`\`\`\uFF1A\u4E3B\u8EF8\u4E0A\u5C45\u4E2D
    <div class="flex_layout">
      <div class="box" style="flex-direction: row; justify-content: center;">
        <div class="box-item">1</div>
        <div class="box-item">2</div>
        <div class="box-item">3</div>
        <div class="box-item">4</div>
      </div>
    </div>

    \`\`\`html
    <style>
      .box {
        display: flex;
        justify-content: center;
      }
    </style>
    <body>
      <div class="box">
        <div class="box-item">1</div>
        <div class="box-item">2</div>
        <div class="box-item">3</div>
        <div class="box-item">4</div>
      </div>
    </body>
    \`\`\`
  - \`\`\`space-between\`\`\`\uFF1A\u5C07\u6240\u6709\u9805\u76EE\u5E73\u5747\u5206\u6563\u5728\u5BB9\u5668\u7684\u4E3B\u8EF8\u4E0A\uFF0C\u9805\u76EE\u9593\u9593\u9694\u90FD\u76F8\u540C\uFF0C\u8D77\u59CB\u8207\u6700\u7D42"\u4E0D\u542B"\u9593\u9694
    <div class="flex_layout">
      <div class="box" style="flex-direction: row; justify-content: space-between;">
        <div class="box-item">1</div>
        <div class="box-item">2</div>
        <div class="box-item">3</div>
        <div class="box-item">4</div>
      </div>
    </div>

    \`\`\`html
    <style>
      .box {
        display: flex;
        justify-content: space-between;
      }
    </style>
    <body>
      <div class="box">
        <div class="box-item">1</div>
        <div class="box-item">2</div>
        <div class="box-item">3</div>
        <div class="box-item">4</div>
      </div>
    </body>
    \`\`\`
  - \`\`\`space-around\`\`\`\uFF1A\u5C07\u6240\u6709\u9805\u76EE\u5E73\u5747\u5206\u6563\u5728\u5BB9\u5668\u7684\u4E3B\u8EF8\u4E0A\uFF0C\u9805\u76EE\u9593\u9593\u9694\u90FD\u76F8\u540C(\u70BA\u6700\u5DE6/\u53F3\u908A\u9593\u9694\u5169\u500D)\uFF0C\u8D77\u59CB\u8207\u6700\u7D42"\u542B"\u9593\u9694
    <div class="flex_layout">
      <div class="box" style="flex-direction: row; justify-content: space-around;">
        <div class="box-item">1</div>
        <div class="box-item">2</div>
        <div class="box-item">3</div>
        <div class="box-item">4</div>
      </div>
    </div>

    \`\`\`html
    <style>
      .box {
        display: flex;
        justify-content: space-around;
      }
    </style>
    <body>
      <div class="box">
        <div class="box-item">1</div>
        <div class="box-item">2</div>
        <div class="box-item">3</div>
        <div class="box-item">4</div>
      </div>
    </body>
    \`\`\`

### align-items \u5C6C\u6027
- \`\`\`align-items\`\`\` \u5C6C\u6027\uFF1A\u5728\u5BB9\u5668\u4E2D\u9805\u76EE\u5728\u4EA4\u53C9\u8EF8\u4E0A\u5982\u4F55\u5C0D\u9F4A
- \u6709\u4E94\u500B\u9078\u9805\uFF1A\`\`\`flex-start\`\`\`\u3001\`\`\`flex-end\`\`\`\u3001\`\`\`center\`\`\`\u3001\`\`\`baseline\`\`\`\u3001\`\`\`stretch\`\`\`
- \u4EE5\u4E0B\u5206\u5225\u4F86\u4ECB\u7D39(\u4EA4\u53C9\u8EF8\u4EE5\u5782\u76F4\u65B9\u5411\u505A\u7BC4\u4F8B)\uFF1A
  - \`\`\`flex-start\`\`\`\uFF1A\u4EE5\u4EA4\u53C9\u8EF8\u8D77\u9EDE\u5C0D\u9F4A(\u9802\u90E8\u5C0D\u9F4A)
    <div class="flex_layout">
      <div class="box" style="flex-direction: row; align-items: flex-start;">
        <div class="box-item">1</div>
        <div class="box-item" style="height: 5vw; line-height: 5vw;">2</div>
        <div class="box-item">3</div>
        <div class="box-item" style="height: 5vw; line-height: 5vw;">4</div>
      </div>
    </div>

    \`\`\`html
    <style>
      .box {
        display: flex;
        align-items: flex-start;
      }
      .item-tall {
        height: 400px;
        line-height: 400px;
      }
    </style>
    <body>
      <div class="box">
        <div class="box-item">1</div>
        <div class="box-item item-tall">2</div>
        <div class="box-item">3</div>
        <div class="box-item item-tall">4</div>
      </div>
    </body>
    \`\`\`
  - \`\`\`flex-end\`\`\`\uFF1A\u4EE5\u4EA4\u53C9\u8EF8\u7D42\u9EDE\u5C0D\u9F4A(\u5E95\u90E8\u5C0D\u9F4A)
    <div class="flex_layout">
      <div class="box" style="flex-direction: row; align-items: flex-end;">
        <div class="box-item">1</div>
        <div class="box-item" style="height: 5vw; line-height:5vw;">2</div>
        <div class="box-item">3</div>
        <div class="box-item" style="height: 5vw; line-height:5vw;">4</div>
      </div>
    </div>

    \`\`\`html
    <style>
      .box {
        display: flex;
        align-items: flex-end;
      }
      .item-tall {
        height: 400px;
        line-height: 400px;
      }
    </style>
    <body>
      <div class="box">
        <div class="box-item">1</div>
        <div class="box-item item-tall">2</div>
        <div class="box-item">3</div>
        <div class="box-item item-tall">4</div>
      </div>
    </body>
    \`\`\`
  - \`\`\`center\`\`\`\uFF1A\u4EE5\u4EA4\u53C9\u8EF8\u4E2D\u9EDE\u5C0D\u9F4A(\u4E2D\u9593\u5C0D\u9F4A\u3001\u9810\u8A2D\u9760\u5DE6)
    <div class="flex_layout">
      <div class="box" style="flex-direction: row; align-items: center;">
        <div class="box-item">1</div>
        <div class="box-item" style="height: 5vw; line-height:5vw;">2</div>
        <div class="box-item">3</div>
        <div class="box-item" style="height: 5vw; line-height:5vw;">4</div>
      </div>
    </div>

    \`\`\`html
    <style>
      .box {
        display: flex;
        align-items: center;
      }
      .item-tall {
        height: 400px;
        line-height: 400px;
      }
    </style>
    <body>
      <div class="box">
        <div class="box-item">1</div>
        <div class="box-item item-tall">2</div>
        <div class="box-item">3</div>
        <div class="box-item item-tall">4</div>
      </div>
    </body>
    \`\`\`
  - \`\`\`baseline\`\`\`\uFF1A\u5BB9\u5668\u5167\u9805\u76EE\u7684\u7B2C\u4E00\u884C\u6587\u5B57\u7684\u57FA\u7DDA\u5C0D\u9F4A(\u9810\u8A2D\u9760\u5DE6)
    <div class="flex_layout">
      <div class="box" style="flex-direction: row; align-items: baseline;">
        <div class="box-item" style="text-decoration:underline;">1</div>
        <div class="box-item" style="height: 5vw; line-height:5vw;text-decoration:underline;">2</div>
        <div class="box-item" style="text-decoration:underline;">3</div>
        <div class="box-item" style="height: 5vw; line-height:5vw;text-decoration:underline;">4</div>
      </div>
    </div>

    \`\`\`html
    <style>
      .box {
        display: flex;
        align-items: baseline;
      }
      .box-item{
        font-size: 88px;
        line-height: initial;
        text-decoration: underline;
      }
      .item-tall {
        font-size: 122px;
        line-height: initial;
      }
    </style>
    <body>
      <div class="box">
        <div class="box-item">1</div>
        <div class="box-item item-tall">2</div>
        <div class="box-item">3</div>
        <div class="box-item item-tall">4</div>
      </div>
    </body>
    \`\`\`
  - \`\`\`stretch\`\`\` (\u9ED8\u8A8D\u503C)\uFF1A\u82E5\u5BB9\u5668\u5167\u9805\u76EE\u672A\u8A2D\u9AD8\u5EA6\u6216 \`\`\`auto\`\`\`\uFF0C\u5247\u81EA\u52D5\u5EF6\u5C55\u81F3\u5BB9\u5668\u7684\u9AD8\u5EA6
    <div class="flex_layout">
      <div class="box" style="flex-direction: row; align-items: stretch; height: 80px;">
        <div class="box-item" style="height: auto;">1</div>
        <div class="box-item" style="height: auto;">2</div>
        <div class="box-item" style="height: auto;">3</div>
        <div class="box-item" style="height: auto;">4</div>
      </div>
    </div>

    \`\`\`html
    <style>
      .box {
        display: flex;
        align-items: stretch;
      }
      .box-item {
        height: auto;
      }
      .item-tall {
        height: 400px;
        line-height: 400px;
      }
    </style>
    <body>
      <div class="box">
        <div class="box-item">1</div>
        <div class="box-item item-tall">2</div>
        <div class="box-item">3</div>
        <div class="box-item item-tall">4</div>
      </div>
    </body>
    \`\`\`

### align-content \u5C6C\u6027
- \`\`\`align-content\`\`\` \u5C6C\u6027\uFF1A\u5728\u5BB9\u5668\u4E2D\u9805\u76EE\u6709\u591A\u884C(\u591A\u500B\u4E3B\u8EF8)\u5728\u4EA4\u53C9\u8EF8\u7684\u5C0D\u9F4A\u65B9\u5F0F
  - \u82E5\u53EA\u6709\u4E00\u884C(\u55AE\u4E3B\u8EF8)\uFF0C\u5247\u8A72\u5C6C\u6027\u4E0D\u8D77\u4F5C\u7528
- \u6709\u516D\u500B\u9078\u9805\uFF1A\`\`\`flex-start\`\`\`\u3001\`\`\`flex-end\`\`\`\u3001\`\`\`center\`\`\`\u3001\`\`\`space-between\`\`\`\u3001\`\`\`space-around\`\`\`\u3001\`\`\`stretch\`\`\`
- \u4EE5\u4E0B\u5206\u5225\u4F86\u4ECB\u7D39(\u4EA4\u53C9\u8EF8\u4EE5\u5782\u76F4\u65B9\u5411\u505A\u7BC4\u4F8B)\uFF1A
  - \`\`\`flex-start\`\`\`\uFF1A\u4EE5\u4EA4\u53C9\u8EF8\u7684\u8D77\u9EDE\u5C0D\u9F4A(\u9802\u90E8\u5C0D\u9F4A)
    <div class="flex_layout">
      <div class="box" style="flex-direction: row;flex-wrap: wrap;align-content: flex-start; height: 12vw;">
        <div class="box-item">1</div>
        <div class="box-item">2</div>
        <div class="box-item">3</div>
        <div class="box-item">4</div>
        <div class="box-item">5</div>
        <div class="box-item">6</div>
        <div class="box-item">7</div>
        <div class="box-item">8</div>
        <div class="box-item">9</div>
      </div>
    </div>

    \`\`\`html
    <style>
      .box {
        height: 800px;
        display: flex;
        flex-wrap: wrap;
        align-content: flex-start;
      }
    </style>
    <body>
      <div class="box">
        <div class="box-item">1</div>
        <div class="box-item">2</div>
        <div class="box-item">3</div>
        <div class="box-item">4</div>
        <div class="box-item">5</div>
        <div class="box-item">6</div>
        <div class="box-item">7</div>
        <div class="box-item">8</div>
        <div class="box-item">9</div>
      </div>
    </body>
    \`\`\`
  - \`\`\`flex-end\`\`\`\uFF1A\u4EE5\u4EA4\u53C9\u8EF8\u7684\u7D42\u9EDE\u5C0D\u9F4A(\u5E95\u90E8\u5C0D\u9F4A)
    <div class="flex_layout">
      <div class="box" style="flex-direction: row;flex-wrap: wrap;align-content: flex-end; height: 12vw;">
        <div class="box-item">1</div>
        <div class="box-item">2</div>
        <div class="box-item">3</div>
        <div class="box-item">4</div>
        <div class="box-item">5</div>
        <div class="box-item">6</div>
        <div class="box-item">7</div>
        <div class="box-item">8</div>
        <div class="box-item">9</div>
      </div>
    </div>

    \`\`\`html
    <style>
      .box {
        height: 800px;
        display: flex;
        flex-wrap: wrap;
        align-content: flex-end;
      }
    </style>
    <body>
      <div class="box">
        <div class="box-item">1</div>
        <div class="box-item">2</div>
        <div class="box-item">3</div>
        <div class="box-item">4</div>
        <div class="box-item">5</div>
        <div class="box-item">6</div>
        <div class="box-item">7</div>
        <div class="box-item">8</div>
        <div class="box-item">9</div>
      </div>
    </body>
    \`\`\`
  - \`\`\`center\`\`\`\uFF1A\u4EE5\u4EA4\u53C9\u8EF8\u7684\u4E2D\u9EDE\u5C0D\u9F4A(\u4E2D\u9593\u5C0D\u9F4A\u3001\u9810\u8A2D\u9760\u5DE6)
    <div class="flex_layout">
      <div class="box" style="flex-direction: row;flex-wrap: wrap;align-content: center; height: 12vw;">
        <div class="box-item">1</div>
        <div class="box-item">2</div>
        <div class="box-item">3</div>
        <div class="box-item">4</div>
        <div class="box-item">5</div>
        <div class="box-item">6</div>
        <div class="box-item">7</div>
        <div class="box-item">8</div>
        <div class="box-item">9</div>
      </div>
    </div>

    \`\`\`html
    <style>
      .box {
        height: 800px;
        display: flex;
        flex-wrap: wrap;
        align-content: center;
      }
    </style>
    <body>
      <div class="box">
        <div class="box-item">1</div>
        <div class="box-item">2</div>
        <div class="box-item">3</div>
        <div class="box-item">4</div>
        <div class="box-item">5</div>
        <div class="box-item">6</div>
        <div class="box-item">7</div>
        <div class="box-item">8</div>
        <div class="box-item">9</div>
      </div>
    </body>
    \`\`\`
  - \`\`\`space-between\`\`\`\uFF1A\u5C07\u6240\u6709\u9805\u76EE\u5E73\u5747\u5206\u6563\u5728\u5BB9\u5668\u4EA4\u53C9\u8EF8\u4E0A\uFF0C\u9805\u76EE\u9593\u9593\u9694\u90FD\u76F8\u540C\uFF0C\u8D77\u59CB(\u9802\u90E8)\u8207\u6700\u7D42(\u5E95\u90E8)"\u4E0D\u542B"\u9593\u9694
    <div class="flex_layout">
      <div class="box" style="flex-direction: row;flex-wrap: wrap;align-content: space-between; height: 12vw;">
        <div class="box-item">1</div>
        <div class="box-item">2</div>
        <div class="box-item">3</div>
        <div class="box-item">4</div>
        <div class="box-item">5</div>
        <div class="box-item">6</div>
        <div class="box-item">7</div>
        <div class="box-item">8</div>
        <div class="box-item">9</div>
      </div>
    </div>

    \`\`\`html
    <style>
      .box {
        height: 800px;
        display: flex;
        flex-wrap: wrap;
        align-content: space-between;
      }
    </style>
    <body>
      <div class="box">
        <div class="box-item">1</div>
        <div class="box-item">2</div>
        <div class="box-item">3</div>
        <div class="box-item">4</div>
        <div class="box-item">5</div>
        <div class="box-item">6</div>
        <div class="box-item">7</div>
        <div class="box-item">8</div>
        <div class="box-item">9</div>
      </div>
    </body>
    \`\`\`
  - \`\`\`space-around\`\`\`\uFF1A\u5C07\u6240\u6709\u9805\u76EE\u5E73\u5747\u5206\u6563\u5728\u5BB9\u5668\u4EA4\u53C9\u8EF8\u4E0A\uFF0C\u9805\u76EE\u9593\u9593\u9694\u90FD\u76F8\u540C(\u70BA\u9802/\u5E95\u90E8\u9593\u9694\u5169\u500D)\uFF0C\u8D77\u59CB(\u9802\u90E8)\u8207\u6700\u7D42(\u5E95\u90E8)"\u542B"\u9593\u9694
    <div class="flex_layout">
      <div class="box" style="flex-direction: row;flex-wrap: wrap;align-content: space-around; height: 12vw;">
        <div class="box-item">1</div>
        <div class="box-item">2</div>
        <div class="box-item">3</div>
        <div class="box-item">4</div>
        <div class="box-item">5</div>
        <div class="box-item">6</div>
        <div class="box-item">7</div>
        <div class="box-item">8</div>
        <div class="box-item">9</div>
      </div>
    </div>

    \`\`\`html
    <style>
      .box {
        height: 800px;
        display: flex;
        flex-wrap: wrap;
        align-content: space-around;
      }
    </style>
    <body>
      <div class="box">
        <div class="box-item">1</div>
        <div class="box-item">2</div>
        <div class="box-item">3</div>
        <div class="box-item">4</div>
        <div class="box-item">5</div>
        <div class="box-item">6</div>
        <div class="box-item">7</div>
        <div class="box-item">8</div>
        <div class="box-item">9</div>
      </div>
    </body>
    \`\`\`
  - \`\`\`stretch\`\`\` (\u9ED8\u8A8D\u503C)\uFF1A\u82E5\u5BB9\u5668\u5167\u591A\u884C\u7684\u9805\u76EE\u672A\u8A2D\u9AD8\u5EA6\u6216 \`\`\`auto\`\`\`\uFF0C\u5247\u81EA\u52D5\u5EF6\u5C55\u81F3\u5BB9\u5668\u7684\u9AD8\u5EA6
    <div class="flex_layout">
      <div class="box" style="flex-direction: row;flex-wrap: wrap;align-content: stretch; height: 12vw;">
        <div class="box-item" style="height: auto;">1</div>
        <div class="box-item" style="height: auto;">2</div>
        <div class="box-item" style="height: auto;">3</div>
        <div class="box-item" style="height: auto;">4</div>
        <div class="box-item" style="height: auto;">5</div>
        <div class="box-item" style="height: auto;">6</div>
        <div class="box-item" style="height: auto;">7</div>
        <div class="box-item" style="height: auto;">8</div>
        <div class="box-item" style="height: auto;">9</div>
      </div>
    </div>

    \`\`\`html
    <style>
      .box {
        height: 800px;
        display: flex;
        flex-wrap: wrap;
        align-content: stretch;
      }
      .box-item {
        height: auto;
      }
    </style>
    <body>
      <div class="box">
        <div class="box-item">1</div>
        <div class="box-item">2</div>
        <div class="box-item">3</div>
        <div class="box-item">4</div>
        <div class="box-item">5</div>
        <div class="box-item">6</div>
        <div class="box-item">7</div>
        <div class="box-item">8</div>
        <div class="box-item">9</div>
      </div>
    </body>
    \`\`\`

## \u9805\u76EE\u5C6C\u6027
### order \u5C6C\u6027
- \`\`\`order\`\`\` \u5C6C\u6027\uFF1A\u4EE3\u8868\u9805\u76EE\u7684\u6392\u5217\u9806\u5E8F\uFF0C\u6578\u503C(\u6574\u6578)\u8D8A\u5C0F\u6392\u5217\u8D8A\u9760\u524D\uFF0C\u9ED8\u8A8D\u503C\u70BA \`\`\`0\`\`\`
- \u7BC4\u4F8B
  <div class="flex_layout">
    <div class="box">
      <div class="box-item">1</div>
      <div class="box-item">2</div>
      <div class="box-item" style="order: -1;">3</div>
    </div>
  </div>

  \`\`\`html
  <style>
    .box {
      display: flex;
    }
    .order {
        order: -1;
    }
  </style>
  <body>
    <!-- 312 -->
    <div class="box">
      <div class="box-item">1</div>
      <div class="box-item">2</div>
      <div class="box-item order">3</div>
    </div>
  </body>
  \`\`\`

### flex-grow \u5C6C\u6027
- \`\`\`flex-grow\`\`\` \u5C6C\u6027\uFF1A\u4EE3\u8868\u5BB9\u5668\u5167\u9805\u76EE\u653E\u5927\u6BD4\u4F8B\uFF0C\u9ED8\u8A8D\u503C\u70BA \`\`\`0\`\`\`(\u7121\u6548\u679C\uFF0C\u5373\u82E5\u5B58\u5728\u5269\u9918\u7A7A\u9593\u4E5F\u4E0D\u653E\u5927)
  - \u82E5\u6240\u6709\u9805\u76EE\u5C6C\u6027\u503C\u7686\u70BA \`\`\`1\`\`\`\uFF0C\u5247\u9805\u76EE\u5C07\u7B49\u5206\u5269\u9918\u7A7A\u9593
  - \u82E5\u5176\u4E2D\u4E00\u500B\u9805\u76EE\u5C6C\u6027\u503C\u70BA \`\`\`2\`\`\` \uFF0C\u5176\u4ED6\u9805\u76EE\u5C6C\u6027\u7686\u70BA \`\`\`1\`\`\`\uFF0C\u5247\u524D\u8005\u4F54\u64DA\u7684\u5269\u9918\u7A7A\u9593\u6703\u6BD4\u5176\u4ED6\u9805\u76EE\u591A\u4E00\u500D
  - \u82E5\u5176\u4E2D\u4E00\u500B\u9805\u76EE\u70BA\u9ED8\u8A8D\u5C6C\u6027\u503C\u4E26\u4E14\u6709\u5BEC\u5EA6\uFF0C\u5247\u5269\u9918\u5C6C\u6027\u503C\u5927\u65BC \`\`\`0\`\`\` \u7684\u9805\u76EE\u5C07\u7B49\u5206\u5176\u4ED6\u5BB9\u5668\u5BEC\u5EA6
- \u7BC4\u4F8B
  <div class="flex_layout">
    <div class="box">
      <div class="box-item"  style="flex-grow: 1;">1</div>
      <div class="box-item"  style="flex-grow: 1;">2</div>
      <div class="box-item" style="flex-grow: 2;">3</div>
    </div>
  </div>

  \`\`\`html
  <style>
    .box {
      display: flex;
    }
    .box-item {
      flex-grow: 1;
    }
    .grow-2 {
      flex-grow: 2;
    }
  </style>
  <body>
    <!-- \u5340\u584A3 \u6703\u6BD4\u5340\u584A1\u3001\u5340\u584A2\u5EF6\u5C55\u4E00\u500D -->
    <div class="box">
      <div class="box-item">1</div>
      <div class="box-item">2</div>
      <div class="box-item grow-2">3</div>
    </div>
  </body>
  \`\`\`

### flex-shrink \u5C6C\u6027
- \`\`\`flex-shrink\`\`\` \u5C6C\u6027\uFF1A\u4EE3\u8868\u9805\u76EE\u7684\u7E2E\u5C0F\u6BD4\u4F8B\uFF0C\u9ED8\u8A8D\u503C\u70BA \`\`\`1\`\`\`\uFF0C\u82E5\u5BB9\u5668\u5BEC\u5EA6\u4E0D\u8DB3\uFF0C\u5247\u6703\u5C07\u9805\u76EE\u7E2E\u5C0F
  - \u82E5\u6240\u6709\u9805\u76EE\u7684\u5C6C\u6027\u503C\u7686\u70BA \`\`\`1\`\`\`\uFF0C\u5247\u7B49\u6BD4\u4F8B\u7E2E\u5C0F
  - \u82E5\u5176\u4E2D\u4E00\u500B\u9879\u76EE\u7684\u5C6C\u6027\u503C\u70BA \`\`\`0\`\`\`\uFF0C\u5176\u4ED6\u9805\u76EE\u5C6C\u6027\u503C\u70BA \`\`\`1\`\`\`\uFF0C\u5247\u524D\u8005\u4E0D\u7E2E\u5C0F\uFF0C\u5176\u4ED6\u9805\u76EE\u7B49\u6BD4\u4F8B\u7E2E\u5C0F
  - \u8CA0\u503C\u5C0D\u8A72\u5C6C\u6027\u7121\u6548
- \u7BC4\u4F8B
  <div class="flex_layout" style="width: 150px;">
    <div class="box">
      <div class="box-item" style="flex-shrink: 1;">1</div>
      <div class="box-item" style="flex-shrink: 1;">2</div>
      <div class="box-item" style="flex-shrink: 0;">3</div>
    </div>
  </div>

  \`\`\`html
  <style>
    .box {
      display: flex;
    }
    .box-item {
        flex-shrink: 1;
    }
    .shrink{
      flex-shrink: 0;
    }
  </style>
  <body>
    <!-- \u82E5\u7A7A\u9593\u4E0D\u8DB3\u5247\u5340\u584A3\u4E0D\u6703\u8B8A\uFF0C\u5340\u584A1245\u5C07\u7E2E\u5C0F  -->
    <div class="box">
      <div class="box-item">1</div>
      <div class="box-item">2</div>
      <div class="box-item shrink">3</div>
    </div>
  </body>
  \`\`\`

### flex-basis \u5C6C\u6027
- \`\`\`flex-basis\`\`\` \u5C6C\u6027\uFF1A\u4EE3\u8868\u5728\u5206\u914D\u591A\u9918\u7684\u7A7A\u9593\u6642\uFF0C\u9805\u76EE\u4F54\u64DA\u591A\u5C11\u4E3B\u8EF8\u7A7A\u9593
  - \u700F\u89BD\u5668\u5C07\u6839\u64DA\u6B64\u5C6C\u6027\u8A08\u7B97\u4E3B\u8EF8\u662F\u5426\u6709\u591A\u9918\u7A7A\u9593\uFF0C\u9ED8\u8A8D\u503C\u70BA \`\`\`auto\`\`\`\uFF0C\u5373\u9805\u76EE\u672C\u4F86\u5927\u5C0F
- \u8207 \`\`\`width/height\`\`\` \u7684\u5DEE\u5225\u5728\u65BC\uFF1A
  - \u7576 \`\`\`flex-direction: row\`\`\` \u6642\uFF0C\u8A72\u5C6C\u6027\u6703\u6C7A\u5B9A\u5BEC\u5EA6
  - \u7576 \`\`\`flex-direction: column\`\`\` \u6642\uFF0C\u8A72\u5C6C\u6027\u6703\u6C7A\u5B9A\u9AD8\u5EA6
- \u7BC4\u4F8B
  <div class="flex_layout" style="width: 200px;">
    <div class="box">
      <div class="box-item">1</div>
      <div class="box-item">2</div>
      <div class="box-item" style="flex-basis: 90px;">3</div>
    </div>
  </div>

  \`\`\`html
  <style>
    .box {
      display: flex;
    }
    .box-item {
      flex-basis: 400px;
    }
  </style>
  <body>
    <!-- \u82E5\u7A7A\u9593\u4E0D\u8DB3\u5247\u5340\u584A3\u4E0D\u6703\u8B8A\uFF0C\u5340\u584A12\u5C07\u7E2E\u5C0F  -->
    <div class="box">
      <div class="box-item">1</div>
      <div class="box-item">2</div>
      <div class="box-item">3</div>
    </div>
  </body>
  \`\`\`

### flex \u5C6C\u6027
- \`\`\`flex\`\`\` \u5C6C\u6027\u70BA \`\`\`flex-grow\`\`\`\u3001\`\`\`flex-shrink\`\`\`\u3001\`\`\`flex-basis\`\`\` \u7684\u7C21\u5BEB\uFF0C\u9ED8\u8A8D\u503C\u70BA \`\`\`0 1 auto\`\`\`
  - \u5F8C\u5169\u500B\u5C6C\u6027\u53EF\u9078\u64C7\u4E0D\u5BEB\uFF1A\`\`\`flex: 1;\`\`\` = \`\`\`flex: 1 1 auto;\`\`\` = \`\`\`flex: auto;\`\`\`
- \u8A72\u5C6C\u6027\u6709\u5169\u500B\u5FEB\u6377\u5C6C\u6027\u53EF\u9078\u64C7\uFF1A
  - \`\`\`auto (1 1 auto)\`\`\`
  - \`\`\`none (0 0 auto)\`\`\`

### align-self \u5C6C\u6027
- \`\`\`align-self\`\`\` \u5C6C\u6027\u5141\u8A31\u55AE\u500B\u9805\u76EE\u8207\u5176\u4ED6\u9805\u76EE\u6709\u4E0D\u4E00\u6A23\u7684\u5C0D\u9F4A\u65B9\u5F0F\uFF0C\u53EF\u8986\u84CB \`\`\`align-items\`\`\` \u5C6C\u6027
- \u9ED8\u8A8D\u503C\u70BA \`\`\`auto\`\`\`\uFF0C\u6703\u7E7C\u627F\u5BB9\u5668\u7684 \`\`\`align-items\`\`\` \u5C6C\u6027\uFF0C\u82E5\u7121\u5247\u5C6C\u6027\u9ED8\u8A8D\u70BA \`\`\`stretch\`\`\`
- \u8207 \`\`\`align-items\`\`\` \u76F8\u540C\u6709\u4E94\u500B\u5C6C\u6027(\u4E0D\u542B \`\`\`auto\`\`\`)\u4E14\u529F\u80FD\u76F8\u540C
  - \`\`\`flex-start\`\`\`\u3001\`\`\`flex-end\`\`\`\u3001\`\`\`center\`\`\`\u3001\`\`\`baseline\`\`\`\u3001\`\`\`stretch\`\`\`

`;export{i as default};

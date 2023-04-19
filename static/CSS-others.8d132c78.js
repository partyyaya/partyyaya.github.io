const n=`<span style="font-size: 32px; font-weight: 600;">CSS \u5176\u4ED6\u5BE6\u7528\u6280\u5DE7</span>

## \u6C34\u5E73\u5C45\u4E2D
- \u8072\u660E\uFF1A\`\`\`.parent\`\`\` \u70BA\u7236\u5143\u7D20\uFF0C\`\`\`.son\`\`\` \u70BA\u5B50\u5143\u7D20
- \u884C\u5167\u5143\u7D20\uFF1A\`\`\`display: inline;\`\`\`
  \`\`\`css
  .parent {
    text-align: center;
  }
  \`\`\`
- \u584A\u7D1A\u5143\u7D20\uFF1A\`\`\`display: inline-block;\`\`\`\u3001\`\`\`display: block;\`\`\`
  - \u57FA\u672C\u5C45\u4E2D
    \`\`\`css
    /* \u5DE6\u53F3\u5916\u908A\u8DDD\u81EA\u52D5\u5C45\u4E2D */
    .son {
      margin: 0 auto;
    }
    \`\`\`
  - \u5B50\u5143\u7D20\u542B\u6D6E\u52D5
    \`\`\`css
    /* \u7236\u5143\u7D20\u6703\u96A8\u8457\u5167\u5BB9\u6539\u8B8A\u5BEC\u5EA6 */
    .parent {
      width: fit-content;
      margin: 0 auto; 
    }
    .son {
      float: right;
    }
    \`\`\`
  - \u4F7F\u7528 \`\`\`flex\`\`\` \u5E03\u5C40
    \`\`\`css
    .parent {
      display: flex;
      /* \u9805\u76EE\u6392\u5217(\u4E3B\u8EF8)\u65BC\u4E2D\u9593 */
      justify-content: center;
    }
    \`\`\`
  - \u4F7F\u7528\u7D55\u5C0D\u5B9A\u4F4D\uFF1A\`\`\`position: absolute;\`\`\`
    - \u7236\u5143\u7D20\u5FC5\u9808\u4E5F\u8A2D\u5B9A \`\`\`position\`\`\` \u5C6C\u6027
    \`\`\`css
    /* 1.transform */
    .son {
      position: absolute;
      left: 50%;
      transform: translate(-50%, 0);
    }

    /* 2.left & width & margin */
    .son {
      position: absolute;
      left: 50%;
      width: \u5BEC\u5EA6;
      margin-left: \u5BEC\u5EA6 * -0.5
    }

    /* 3.left\u3001right\u3001width\u3001margin */
    .son {
      position: absolute;
      /* \u5FC5\u9808\u70BA\u6700\u5DE6\u5230\u6700\u53F3 */
      left: 0;
      right: 0;
      /* \u8A2D\u5B9A width \u5F8C margin \u624D\u6703\u751F\u6548 */
      width: \u5BEC\u5EA6;
      margin: 0 auto;
    }
    \`\`\`

## \u5782\u76F4\u5C45\u4E2D
- \u8072\u660E\uFF1A\`\`\`.parent\`\`\` \u70BA\u7236\u5143\u7D20\uFF0C\`\`\`.son\`\`\` \u70BA\u5B50\u5143\u7D20
- \u884C\u5167\u5143\u7D20\uFF1A\`\`\`display: inline;\`\`\`
  - \u7236\u5143\u7D20\u70BA\u584A(\u884C\u584A)\u5143\u7D20\uFF0C\u5B50\u5143\u7D20\u70BA\u884C\u5167\u5143\u7D20
  \`\`\`css
  /* \u5169\u8005\u9AD8\u5EA6\u9700\u4E00\u6A23 */
  .parent {
    height: \u9AD8\u5EA6;
  }
  .son {
    line-height: \u9AD8\u5EA6;
  }
  \`\`\`
- \u584A\u7D1A\u5143\u7D20\uFF1A\`\`\`display: inline-block;\`\`\`\u3001\`\`\`display: block;\`\`\`
  - \`\`\`display: table\`\`\`
    - \u512A\u9EDE\uFF1A\u9AD8\u5EA6\u53EF\u52D5\u614B\u6539\u8B8A\uFF0C\u82E5\u7236\u5143\u7D20\u7A7A\u9593\u4E0D\u8DB3\uFF0C\u5167\u5BB9\u4E5F\u4E0D\u6703\u622A\u65B7
    \`\`\`css
    .parent {
      display: table;
    }
    .son {
      display: table-cell;
      vertical-align: middle;
    }
    \`\`\`
  - \u4F7F\u7528 \`\`\`flex\`\`\` \u5E03\u5C40
    \`\`\`css
    .parent {
      display: flex;
      /* \u5C07\u9805\u76EE\u8A2D\u7F6E\u70BA\u4EA4\u53C9\u8EF8\u4E2D\u9593 */
      align-items: center;
    }
    \`\`\`
  - \u4F7F\u7528\u7D55\u5C0D\u5B9A\u4F4D\uFF1A\`\`\`position: absolute;\`\`\`
    - \u7236\u5143\u7D20\u5FC5\u9808\u4E5F\u8A2D\u5B9A \`\`\`position\`\`\` \u5C6C\u6027
    \`\`\`css
    /* 1.transform */
    .son {
      position: absolute;
      top: 50%;
      transform: translate( 0, -50%);
    }

    /* 2.top & height & margin */
    .son {
      position: absolute;
      top: 50%;
      height: \u9AD8\u5EA6;
      margin-top: \u9AD8\u5EA6 * -0.5;
    }

    /* 3.top\u3001bottom\u3001margin */
    .son {
      position: absolute;
      /* \u5FC5\u9808\u70BA\u6700\u9802\u5230\u6700\u5E95 */
      top: 0;
      bottom: 0;
      /* \u8A2D\u5B9A height \u5F8C margin \u624D\u6703\u751F\u6548 */
      height: \u9AD8\u5EA6;
      margin: auto 0;
    }
    \`\`\`

## \u6587\u5B57\u7701\u7565\u865F\uFF1A\`\`\`...\`\`\`
- \u901A\u5E38\u7528\u65BC\u591A\u500B\u724C\u5361\u6392\u5217\u6642\uFF0C\u724C\u5361\u5167\u5BB9\u904E\u9577\u6642\u4F7F\u7528

### \u55AE\u884C\u6587\u5B57\u7701\u7565\u986F\u793A
\`\`\`html
<style>
  /* \u901A\u5E38\u6703\u642D\u914D\u4EE5\u4E0B\u4E09\u500B\u70BA\u4E00\u9AD4 */
  .text-ellipsis {
    /* \u9700\u96B1\u85CF\u6EA2\u51FA\u5426\u5247\u7167\u5E38\u8F38\u51FA\u5167\u5BB9 */
    overflow: hidden;
    /* \u7576\u6587\u5B57\u6EA2\u51FA\u6642\u52A0\u4E0A\u7701\u7565\u865F... */
    text-overflow: ellipsis;
    /* \u4EE3\u8868\u78B0\u5230\u7A7A\u767D\u5B57\u5143\u4E0D\u63DB\u884C */
    white-space: nowrap;
  }
</style>
<body>
  <!-- \u7B2C\u4E00\u6392\u8207\u7B2C\u4E09\u6392\u6703\u56E0\u8D85\u904E\u5BEC\u5EA6\u800C\u52A0\u4E0A\u7701\u7565\u865F -->
  <div class="text-ellipsis" style="width: 100px;">
    test12345test12345test12345<br>
    test12345 <br>
    test12345test12345test12345test12345test12345
  </div>
</body>
\`\`\`

### \u591A\u884C\u6587\u5B57\u7701\u7565\u986F\u793A
- \u8207\u55AE\u884C\u4E0D\u540C\u53EF\u4EE5\u9650\u5236\u5E7E\u884C\u4E4B\u5F8C\u986F\u793A\u7701\u7565\u865F
\`\`\`html
<style>
  /* \u901A\u5E38\u6703\u642D\u914D\u4EE5\u4E0B\u4E09\u500B\u70BA\u4E00\u9AD4 */
  .text-ellipsis {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    /* \u5E7E\u884C\u5F8C\u52A0\u7701\u7565\u865F */
    -webkit-line-clamp: 5;
    -webkit-box-orient: vertical;
  }
</style>
<body>
  <!-- \u7B2C\u4E94\u6392\u5F8C\u56E0\u8D85\u904E\u884C\u6578\u800C\u52A0\u4E0A\u7701\u7565\u865F -->
  <div class="text-ellipsis" style="width: 100px;">
    test12345test12345test12345<br>
    test12345 <br>
    test12345test12345test12345test12345test12345 <br>
    test12345test12345test12345<br>
    test12345 <br>
    test12345test12345test12345<br>
    test12345 <br>
  </div>
</body>
\`\`\`

## \u6E38\u6A19 cursor
- \u91DD\u5C0D\u7279\u5B9A\u5340\u57DF\u8B93\u6E38\u6A19\u986F\u793A\u7279\u5B9A\u578B\u614B\uFF0C\u5982\uFF1A\u8F49\u5708\u3001\u624B\u6307
- \u7BC4\u4F8B\uFF1A
  \`\`\`css
  /* \u624B\u6307 */
  cursor: pointer;
  /* \u6293 */
  cursor: grab;
  /* \u6293\u4F4F */
  cursor: grabbing;
  \`\`\`

## \u6FFE\u93E1 filter
- \u4E3B\u8981\u662F\u5C0D\u5716\u7247\u65BD\u52A0\u6548\u679C\uFF0C\u5982\uFF1A\u6A21\u7CCA\u3001\u5149\u6697\u7B49
- \u7BC4\u4F8B\uFF1A
  \`\`\`css
  /* \u6ED1\u9F20\u5728\u5716\u7247\u4E0A\u65B9\u6642\u5448\u73FE\u9EEF\u6DE1\u6548\u679C\u3001\u8207\u6E96\u5099\u6293\u4F4F\u7684\u9F20\u6A19 */
  .item:hover {
    cursor: grab;
    filter: brightness(90%);
  }
  /* \u6ED1\u9F20\u5728\u5716\u7247\u9032\u884C\u6293\u4F4F\u6642\uFF0C\u5448\u73FE\u6293\u4F4F\u7684\u6548\u679C */
  .item:active {
    cursor: grabbing;
  }
  \`\`\`

## \u81EA\u5B9A\u7FA9\u6EFE\u52D5\u689D
- [MDN \u4ECB\u7D39](https://developer.mozilla.org/zh-CN/docs/Web/CSS/::-webkit-scrollbar)
- \u7BC4\u4F8B\u8207\u8AAA\u660E
  \`\`\`html
  <style>
    /* \u6EFE\u52D5\u689D\u5BB9\u5668 */
    .scroll-container {
      margin: 10px;
      width: 500px;
      height: 150px;
      /*
        overlay\u3001auto \u7684\u4E0D\u540C\uFF1A
        auto\uFF1A \u6EFE\u52D5\u689D\u4E0D\u6703\u64CB\u5230\u5BB9\u5668\u5167\u5BB9\uFF0C
        overlay\uFF1A\u6EFE\u52D5\u689D\u6703\u64CB\u5230\u5BB9\u5668\u5167\u5BB9\uFF0C
      */
      overflow: overlay;
      background-color: #eee;
      white-space: nowrap;
    }

    /* 
      \u6EDA\u52D5\u689D\u672C\u9AD4
      \u5FC5\u9808\u8A2D\u7F6E\u5BEC\u9AD8\uFF0C\u4EE5\u63A7\u5236\u6EFE\u52D5\u689D\u5C3A\u5BF8\uFF0C\u5426\u5247\u4E0D\u751F\u6548
      \u5BEC\u9AD8\u5206\u5225\u5C0D\u61C9 y\u8EF8 \u548C x\u8EF8 \u7684\u6EFE\u52D5\u689D\u5C3A\u5BF8
      \u82E5\u5BEC\u9AD8\u70BA0\uFF0C\u5247\u53EF\u96B1\u85CF\u6EFE\u52D5\u689D\uFF0C\u4F46\u4ECD\u53EF\u4FDD\u6301\u6EFE\u52D5
    */
    .scroll-container::-webkit-scrollbar {
      width: 12px;
    }

    /*
      \u5169\u689D\u6EFE\u52D5\u689D x\u8F74\u3001y\u8F74 \u4EA4\u63A5\u8655
    */
    .scroll-container::-webkit-scrollbar-corner {
      background-color: transparent;
    }

    /*
      \u6EFE\u52D5\u689D\u6ED1\u584A\uFF0C\u5373\u6EFE\u52D5\u689D\u6EFE\u52D5\u7684\u90E8\u5206
      \u5FC5\u9808\u8981\u8A2D\u7F6E\uFF0C\u5426\u5247\u4E0D\u6703\u51FA\u73FE\u6ED1\u584A
    */
    .scroll-container::-webkit-scrollbar-thumb {
      border-radius: 10px;
      -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
      background: #ec8e8e;
    }

    /*
      \u6EFE\u52D5\u689D\u8ECC\u9053
      \u4E0D\u8A2D\u7F6E\u5247\u4E0D\u51FA\u73FE\u8ECC\u9053
    */
    .scroll-container::-webkit-scrollbar-track {
      /* -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2); */
      border-radius: 10px;
      background: transparent;
      /*
        ps:\u8A72\u90E8\u5206\u4F7F\u7528 scss \u8A9E\u6CD5\u65B9\u4FBF\u8AAA\u660E
        \u4EE5\u4E0B\u65B9\u6CD5\u4E5F\u53EF\u4EE5\u7528\u65BC\u8A2D\u7F6E\u6EFE\u52D5\u689D\u6ED1\u584A scrollbar-thumb
        \u8A2D\u7F6E\u6C34\u5E73\u65B9\u5411\u7684\u8ECC\u9053
        &:horizontal {
          background-color: blue;
        }
    
        \u8A2D\u7F6E\u5782\u76F4\u65B9\u5411\u7684\u8ECC\u9053
        &:vertical {
          background-color: red;
        }
      */
    }

    /*
      \u6EFE\u52D5\u689D\u5169\u7AEF\u7684\u7BAD\u982D\u6309\u9215
      \u4E0D\u8A2D\u7F6E\u5247\u4E0D\u51FA\u73FE
    */
    .scroll-container::-webkit-scrollbar-button {
      /*
        \u5DE6\u4FA7\u3001\u4E0A\u4FA7
        &:decrement {
            background-color: purple;
        }

        \u53F3\u4FA7\u3001\u4E0B\u4FA7
        &:increment {
            background-color: green;
        }
      */
    }
    
    /* \u6C92\u6709\u6ED1\u584A\u7684\u6EFE\u52D5\u689D\u8ECC\u9053\uFF0C\u6216\u8005\u8AAA\u662F\u5167\u5C64\u8ECC\u9053 */
    .scroll-container::-webkit-scrollbar-track-piece {
      /*
        \u5167\u5C64\u8ECC\u9053 \u6ED1\u584A\u5DE6\u5074\u3001\u4E0A\u5074
        &:decrement {
          background-color: red;
        }

        \u5167\u5C64\u8ECC\u9053 \u6ED1\u584A\u53F3\u5074\u3001\u4E0B\u5074
        &:increment {
          background-color: blue;
        }
      */
      /*
        \u5176\u4ED6\u507D\u985E
        :window-inactive\uFF1A\u9069\u7528\u65BC\u6240\u6709\u6EFE\u52D5\u689D\uFF0C\u7576\u7126\u9EDE\u4E0D\u5728\u6EFE\u52D5\u689D\u7A97\u53E3\u7684\u6642\u5019\u751F\u6548
        :double-button\uFF1A\u9069\u7528\u65BC\u6309\u9215\u548C\u8ECC\u9053\u788E\u7247\u3002\u5224\u65B7\u8ECC\u9053\u7D50\u675F\u7684\u4F4D\u7F6E\u662F\u5426\u662F\u4E00\u5C0D\u6309\u9215\u3002\u4E5F\u5C31\u662F\u8ECC\u9053\u788E\u7247\u7DCA\u6328\u8457\u4E00\u5C0D\u5728\u4E00\u8D77\u7684\u6309\u9215
        :single-button\uFF1A\u9069\u7528\u65BC\u6309\u9215\u548C\u8ECC\u9053\u788E\u7247\u3002\u5224\u65B7\u8ECC\u9053\u7D50\u675F\u7684\u4F4D\u7F6E\u662F\u5426\u662F\u4E00\u500B\u6309\u9215\u3002\u4E5F\u5C31\u662F\u8ECC\u9053\u788E\u7247\u7DCA\u6328\u8457\u4E00\u500B\u55AE\u7368\u7684\u6309\u9215
        :no-button\uFF1A\u8868\u793A\u8ECC\u9053\u7D50\u675F\u7684\u4F4D\u7F6E\u6C92\u6709\u6309\u9215
        :corner-present\uFF1A\u8868\u793A\u6EFE\u52D5\u689D\u7684\u89D2\u843D\u662F\u5426\u5B58\u5728
        \u9084\u53EF\u914D\u5176\u5B83\u507D\u985E\uFF0C\u5982:hover\u3001:active
      */
    }
  </style>
  <body>
    <div class="scroll-container">
      <p>111222333</p><p>111222333</p><p>111222333</p><p>111222333</p><p>111222333</p><p>111222333</p><p>111222333</p><p>111222333</p><p>111222333</p><p>111222333</p><p>111222333</p>
    </div>
  </body>
  \`\`\`

## \u9801\u9762\u8A2D\u8A08\u5BEC\u5EA6\u8207\u9AD8\u5EA6
- 1.\u6709\u8A2D\u8A08\u5716\u512A\u5148\u7D71\u4E00\u4F7F\u7528 \`rem\`
- 2.\`vh\` \u76E1\u91CF\u5C11\u7528\uFF0C\u56E0\u624B\u6A5F\u700F\u89BD\u5668\u6703\u6709\u6A19\u984C\u8207\u5E95\u90E8\u6309\u9375\u906E\u64CB\u554F\u984C\uFF0C\u53EF\u4EE5\u6539\u7528 \`vw\`
`;export{n as default};

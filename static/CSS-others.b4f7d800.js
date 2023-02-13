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
 
## \u9801\u9762\u8A2D\u8A08\u5BEC\u5EA6\u8207\u9AD8\u5EA6
- 1.\u6709\u8A2D\u8A08\u5716\u512A\u5148\u7D71\u4E00\u4F7F\u7528 \`rem\`
- 2.\u6700\u5916\u5C64\u4F7F\u7528 \`vw\u3001vh\`\uFF0C\u5167\u5C64\u4F7F\u7528 \`%\` \u4EE5\u65B9\u4FBF\u8A08\u7B97\u5BEC\u9AD8
`;export{n as default};

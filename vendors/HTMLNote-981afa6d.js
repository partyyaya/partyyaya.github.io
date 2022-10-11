const n=`<span style="font-size: 32px; font-weight: 600;">HTML \u7B46\u8A18</span>

## \u57FA\u672C\u4F7F\u7528
### charset
- \u4F7F\u7528\u65B9\u5F0F\uFF1A
\`\`\`html
<head>
  <meta charset="UTF-8">
</head>
\`\`\`
- \u6CE8\u610F\u4E8B\u9805\uFF1A
  - 1.\u5FC5\u9808\u8207\u5132\u5B58\u6A94\u6848\u683C\u5F0F\u4E00\u6A23\u624D\u4E0D\u6703\u51FA\u73FE\u4E82\u78BC
  - 2.\u5E38\u898B\u4F7F\u7528 \`\`\`gbk\`\`\` \u8207 \`\`\`utf-8\`\`\` \u5169\u7A2E
  - 3.\u7528 \`\`\`utf-8\`\`\` \u6703\u56E0\u5B57\u7BC0\u800C\u6A94\u6848\u8F03\u5927\u76F8\u5C0D \`\`\`gbk\`\`\` \u5C31\u6703\u8F03\u5C0F
  - 4.\`\`\`Live Server\`\`\` \u4E0D\u652F\u63F4 \`\`\`gbk\`\`\`

### title
- \u4F7F\u7528\u65B9\u5F0F\uFF1A
  - \u6A19\u984C\u6703\u986F\u793A\u5728\u9801\u7C64\u4E0A
\`\`\`html
<head>
  <title>Document</title>
</head>
\`\`\`

### Keywords
- \u4F7F\u7528\u65B9\u5F0F\uFF1A
\`\`\`html
<head>
  <meta name="Keywords" content="java, ios, android, javascript">
</head>
\`\`\`
- \u6CE8\u610F\u4E8B\u9805\uFF1A
  - 1.\u7528\u4F86\u88AB\u700F\u89BD\u5668\u67E5\u8A62\u6642\u6293\u53D6
  - 2.\u9017\u865F\u53EF\u589E\u52A0\u591A\u500B\u95DC\u9375\u5B57
  - 3.\`\`\`Keywords\`\`\` \u5340\u5206\u5927\u5C0F\u5BEB

### Description
- \u4F7F\u7528\u65B9\u5F0F\uFF1A
\`\`\`html
<head>
  <meta name="Description" content="\u63CF\u8FF0\u7DB2\u9801\u7684\u5167\u5BB9">
</head>
\`\`\`
- \u6CE8\u610F\u4E8B\u9805\uFF1A
  - 1.\u7528\u4F86\u986F\u793A\u4F7F\u7528\u8005\u9EDE\u5165\u524D\u770B\u5230\u8A72\u7DB2\u9801\u5177\u9AD4\u5167\u5BB9
  - 2.\`\`\`Description\`\`\` \u5340\u5206\u5927\u5C0F\u5BEB

### \u5E38\u7528\u8F49\u7FA9\u5B57\u7B26
| \u5B57\u7B26 | \u5341\u9032\u5236 | \u8F49\u7FA9\u5B57\u7B26 |
| :-- | :-- | :-- |
| \`\`\`"\`\`\` |	\`\`\`&#34;\`\`\` |	\`\`\`&quot;\`\`\` |
| \`\`\`'\`\`\` |	\`\`\`&#39;\`\`\` |	\`\`\`&apos;\`\`\` |
| \`\`\`&\`\`\` |	\`\`\`&#38;\`\`\` |	\`\`\`&amp;\`\`\` |
| \`\`\`<\`\`\` |	\`\`\`&#60;\`\`\` |	\`\`\`&lt;\`\`\` |
| \`\`\`>\`\`\` |	\`\`\`&#62;\`\`\` |	\`\`\`&gt;\`\`\` |
| \`\`\`\xA9\`\`\` |	\`\`\`&#169;\`\`\` |	\`\`\`&copy;\`\`\` |
| \`\`\`\xAE\`\`\` |	\`\`\`&#174;\`\`\` |	\`\`\`&reg;\`\`\` |
| \u7A7A\u683C(non-breaking space) | \`\`\`&#160;\`\`\` | \`\`\`&nbsp;\`\`\` |

### \u6A19\u984C\u3001\u6BB5\u843D\u3001\u5207\u5272\u6A19\u7C64
- \u6A19\u984C\u6A19\u7C64\uFF1A\`\`\`headline => <h1>\u81F3<h6>\`\`\`
  - \u700F\u89BD\u5668\u5341\u5206\u770B\u91CD \`\`\`h1\`\`\` \u6A19\u7C64\u7684\u5167\u5BB9\uFF0C\u61C9\u5C07\u91CD\u9EDE\u5167\u5BB9\u653E\u81F3\u88E1\u9762(\u5982 \`\`\`logo\`\`\`)\uFF0C\u4E00\u822C\u53EA\u653E\u7F6E\u4E00\u500B\uFF0C\u82E5\u653E\u591A\u500B\u700F\u89BD\u5668\u5C07\u8996\u70BA\u4F5C\u5F0A\u5C31\u4E0D\u6703\u9032\u884C\u6293\u53D6
- \u6BB5\u843D\u6A19\u7C64\uFF1A\`\`\`paragraph => <p>\`\`\`
- \u5207\u5272\u6A19\u7C64\uFF1A\`\`\`division => <div>\`\`\`

## \u5217\u8868
### \u5B9A\u7FA9\u5217\u8868
- \u4F7F\u7528\u65B9\u5F0F\uFF1A
\`\`\`html
<body>
  <dl>
    <dt>title</dt>
    <dd>1</dd>
    <dd>2</dd>
    <dd>3</dd>
  </dl>
</body>
\`\`\`
- \u8AAA\u660E\uFF1A
  - \u5B9A\u7FA9\u5217\u8868 \`\`\`dl\`\`\`\uFF1Adefinition list
  - \u8CC7\u6599\u8853\u8A9E \`\`\`dt\`\`\`\uFF1Adata term()
  - \u8CC7\u6599\u5B9A\u7FA9 \`\`\`dd\`\`\`\uFF1Adata definition
  - \`\`\`dd\`\`\` \u7528\u4F86\u63CF\u8FF0\u5B9A\u7FA9 \`\`\`dt\`\`\` \u4E26\u5305\u5728 \`\`\`dl\`\`\`

### \u6709\u5E8F\u8207\u7121\u5E8F\u5217\u8868
- \u4F7F\u7528\u65B9\u5F0F\uFF1A
  \`\`\`html
  <body>
    <ul type="circle">
      <li>789</li>
      <li>
          789
          <p>789123</p>
      </li>
    </ul>
    <ol type="I" start="3">
      <li>123</li>
      <li>123</li>
      <li>123</li>
    </ol>
  </body>
  \`\`\`
- \u8AAA\u660E\uFF1A
  - ul\uFF1Aunordered list(\u7121\u5E8F\u5217\u8868)
    - \u88E1\u9762\u88DDli\u6A19\u7C64
    - type\u5C6C\u6027(html5\u5DF2\u5EE2\u68C4\u5EFA\u8B70\u4F7F\u7528css)\uFF1A
      - disc\u5BE6\u5FC3\u5713(\u9810\u8A2D)
      - circle\u7A7A\u5FC3\u5713
      - square\u5BE6\u5FC3\u65B9\u584A
  - ol\uFF1Aordered list(\u6709\u5E8F\u5217\u8868)
    - \u88E1\u9762\u88DDli\u6A19\u7C64
    - type\u5C6C\u6027\uFF1A
      - 1 \u6578\u5B57\u7DE8\u5BEB(\u9810\u8A2D)
      - a \u5C0F\u5BEB\u82F1\u6587\u6392\u5E8F
      - A \u5927\u5BEB\u82F1\u6587\u6392\u5E8F
      - i \u5C0F\u5BEB\u7F85\u99AC\u6392\u5E8F
      - I \u5927\u5BEB\u7F85\u99AC\u6392\u5E8F
    - start \u5C6C\u6027\uFF1A\u5FC5\u9808\u70BA\u963F\u62C9\u4F2F\u6578\u5B57\uFF1A\u5F9E\u7B2C\u5E7E\u500B\u958B\u59CB
    - reversed\uFF1A\u9006\u5E8F(\u5EFA\u8B70\u4E0D\u8981\u8207start\u4E00\u8D77\u4F7F\u7528)
  - li\uFF1Alist item(\u5217\u8868\u9805\u76EE)

## \u591A\u5A92\u9AD4\u8207\u8A9E\u610F\u6A19\u7C64
### \u97F3\u983B\u8207\u8996\u983B
- \u4F7F\u7528\u65B9\u5F0F\uFF1A
\`\`\`html
<body>
  <audio src="music/your.mp3" controls autoplay loop>
    <source src="music/your(mp3).mp3" type="audio/mpeg">
    <source src="music/your(ogg).ogg" type="audio/ogg">
    <source src="music/your(wav).wav" type="audio/wav">
    \u62B1\u6B49\u4F60\u7684\u700F\u89BD\u5668\u4E0D\u652F\u63F4audio\u6A19\u7C64,\u8ACB\u5347\u7D1A\u700F\u89BD\u5668
  </audio>
  <video src="video/your.mp4" controls autoplay loop>
    <source src="video/your.mp4" type="video/mp4">
    <source src="video/your.webm" type="video/webm">
    <source src="video/your.ogv" type="video/ogv">
    <source src="video/your.avi" type="video/avi">
    \u62B1\u6B49\u4F60\u7684\u700F\u89BD\u5668\u4E0D\u652F\u63F4video\u6A19\u7C64,\u8ACB\u5347\u7D1A\u700F\u89BD\u5668
  </video>
</body>
\`\`\`
- \u8AAA\u660E\uFF1A
  - audio\uFF1A\u97F3\u983B
    - controls\uFF1A\u986F\u793A\u64A5\u653E\u63A7\u4EF6
    - autoplay\uFF1A\u81EA\u52D5\u64AD\u653E(\u5E38\u7528\u700F\u89BD\u5668\u53EF\u80FD\u6703\u4E0D\u5141\u8A31\u56E0\u70BA\u6703\u6253\u64FE\u4F7F\u7528\u8005)
    - loop\uFF1A\u5FAA\u74B0\u64AD\u653E\u97F3\u983B
    - src\uFF1A\u97F3\u983B\u5730\u5740
    - \u88E1\u9762\u6587\u5B57\uFF1A\u5C0D\u4E0D\u517C\u5BB9\u6A19\u7C64\u7684\u700F\u89BD\u5668\u986F\u793A\u6587\u5B57
    - \u5E38\u7528\u683C\u5F0F\uFF1Amp3,ogg,wav
    - source\uFF1A\u53EF\u652F\u63F4\u591A\u7A2E\u683C\u5F0F\u4F9B\u700F\u89BD\u5668\u9078\u64C7\u652F\u6301\u7684\u5A92\u9AD4\u985E\u578B\u9032\u884C\u64AD\u653E(\u4E00\u822C\u6703\u9078\u64C7\u7B2C\u4E00\u500B)
  - video\uFF1A\u8996\u983B
    - controls\uFF1A\u986F\u793A\u64A5\u653E\u63A7\u4EF6
    - autoplay\uFF1A\u81EA\u52D5\u64AD\u653E(\u5E38\u7528\u700F\u89BD\u5668\u53EF\u80FD\u6703\u4E0D\u5141\u8A31\u56E0\u70BA\u6703\u6253\u64FE\u4F7F\u7528\u8005)
    - loop\uFF1A\u5FAA\u74B0\u64AD\u653E\u8996\u983B
    - src\uFF1A\u8996\u983B\u5730\u5740
    - width&height\uFF1A\u53EF\u63A7\u5236\u8996\u983B\u7684\u5BEC\u5EA6\u8207\u9AD8\u5EA6
    - \u88E1\u9762\u6587\u5B57\uFF1A\u5C0D\u4E0D\u517C\u5BB9\u6A19\u7C64\u7684\u700F\u89BD\u5668\u986F\u793A\u6587\u5B57
    - \u5E38\u7528\u683C\u5F0F\uFF1Amp4,ogv,webm,avi
    - source\uFF1A\u53EF\u652F\u63F4\u591A\u7A2E\u683C\u5F0F\u4F9B\u700F\u89BD\u5668\u9078\u64C7\u81EA\u5DF1\u652F\u6301\u7684\u5A92\u9AD4\u985E\u578B\u9032\u884C\u64AD\u653E(\u4E00\u822C\u6703\u9078\u64C7\u7B2C\u4E00\u500B)

### \u5340\u584A\u6A19\u7C64
- \u4F7F\u7528\u65B9\u5F0F\uFF1A
\`\`\`html
<body>
 <!-- \u7DB2\u9801\u982D\u90E8 -->
  <header>
    <div class="logo">logo</div>
    <nav>
        \u5C0E\u822A\u689D
    </nav>
  </header>

  <!-- \u6838\u5FC3 -->
  <main>
    <!-- \u5EE3\u544A -->
    <aside>\u5EE3\u544A</aside>

    <!-- \u6587\u7AE0\u5167\u5BB9 -->
    <article>
      <h1>\u6587\u7AE0\u6A19\u984C</h1>
      <section>\u90E8\u52061</section>
      <section>\u90E8\u52062</section>
      <section>\u90E8\u52063</section>
    </article>
  </main>

  <!-- \u9801\u8173 -->
  <footer></footer>
  <address>
      Visit us at\uFF1A<br>
      Example.com<br>
      Box 564, Disneyland<br>
      USA
  </address>
</body>
\`\`\`
- \u8AAA\u660E\uFF1A
  - header\uFF1A\u9801\u982D
  - main\uFF1A\u7DB2\u9801\u6838\u5FC3\u90E8\u5206
  - footer\uFF1A\u9801\u8173
  - nav\uFF1A\u5C0E\u822A\u689D
  - aside\uFF1A\u6587\u6A94\u7684\u975E\u5FC5\u8981\u5167\u5BB9,\u6BD4\u5982\u5EE3\u544A
  - article\uFF1A\u6587\u6A94\u7684\u6838\u5FC3\u6587\u7AE0\u5167\u5BB9,\u6703\u88AB\u700F\u89BD\u5668\u4E3B\u8981\u6293\u53D6
  - section\uFF1A\u6587\u6A94\u7684\u5340\u57DF,\u8A9E\u610F\u6BD4div\u5927
  - address\uFF1A\u5B9A\u7FA9\u6587\u6A94\u6216\u6587\u7AE0\u7684\u4F5C\u8005/\u64C1\u6709\u8005\u7684\u806F\u7E6B\u4FE1\u606F

### \u8A9E\u610F\u6A19\u7C64
- \u4F7F\u7528\u65B9\u5F0F\uFF1A
\`\`\`html
<body>
  <span></span>
  <b></b>
  <u></u>
  <i></i>
  <strong></strong>
  <em></em>
  <mark></mark>
  <figure>
    <img src="images/your.jpg" alt="\u5716\u7247\u8AAA\u660E">
    <figcaption>\u8AAA\u660E</figcaption>
  </figure>
</body>
\`\`\`
- \u8AAA\u660E\uFF1A
  - span\uFF1A\u6587\u672C\u5167\u5340\u584A\u6A19\u7C64
  - b\uFF1A\u88AB\u52A0\u7C97\u7684\u6587\u5B57
  - u\uFF1A\u52A0\u5E95\u7DDA\u7684\u6587\u5B57
  - i\uFF1A\u50BE\u659C\u7684\u6587\u5B57
  - strong\uFF1A\u4EE3\u8868\u7279\u5225\u91CD\u8981\u6587\u5B57
  - em\uFF1A\u4EE3\u8868\u5F37\u8ABF\u6587\u5B57
  - mark\uFF1A\u4EE3\u8868\u4E00\u6BB5\u9700\u8981\u88AB\u9AD8\u4EAE\u7684\u6587\u5B57(\u5E95\u8272\u6703\u8B8A)
  - figure\uFF1A\u4EE3\u8868\u4E00\u6BB5\u7368\u7ACB\u5167\u5BB9\u8207\u8AAA\u660Efigcaption\u914D\u5408\u4F7F\u7528(\u4E3B\u8981\u7528\u4F86\u9644\u5C6C\u4E0D\u5F71\u97FF\u6574\u9AD4\u7DB2\u9801\u95B1\u8B80)

### \u8D85\u9023\u7D50\u6A19\u7C64
- \u4F7F\u7528\u65B9\u5F0F\uFF1A
\`\`\`html
<body>
  <a href=""></a>
  <a href="your.html" title="\u6587\u672C" target="blank">
    <img src="images/yourImage.jpg" alt="\u6E2C\u8A66">
  </a>
  <a href="your.html#test3">\u5230id=test3</a>
  <a href="1.zip">\u4E0B\u8F09zip</a>
  <a href="mailto:xxx@gmail.com">\u767C\u90F5\u4EF6</a>
  <a href="tel:1245789">\u64A5\u96FB\u8A71</a>
  <a href="#top" title="\u9802\u90E8">\u8FD4\u56DE\u9802\u90E8</a>
</body>
\`\`\`
- \u8AAA\u660E\uFF1A
  - a\uFF1Aanchor(\u9328\uFF1A\u8D85\u9023\u7D50\u6A19\u7C64)
    - href\uFF1A\u652F\u63F4\u76F8\u5C0D\u8DEF\u5F91\u8207\u7D55\u5C0D\u8DEF\u5F91
    - title\uFF1A\u7576\u6307\u6A19\u653E\u5728\u9023\u7D50\u4E0A\u65B9\u986F\u793A\u7684\u6587\u5B57
    - target\uFF1A\u82E5\u70BAblank\u5247\u5728\u65B0\u7A97\u53E3\u958B\u555F(html4:_blank)
  - \u5176\u4ED6\u61C9\u7528\uFF1A
    - \u53EF\u5728\u8D85\u9023\u7D50\u5167\u589E\u52A0\u5716\u7247\u8B8A\u6210\u5716\u7247\u9023\u7D50
    - \u8A2D\u7F6E href="#top" \u53EF\u4EE5\u76F4\u63A5\u4F7F\u7528\u56DE\u5230\u9802\u90E8
    - \u53EF\u4EE5\u76F4\u63A5\u9023\u7D50\u5230\u53E6\u4E00\u9801\u7684\u9328\u9EDE\uFF1Ayour.html#test3
    - \u82E5\u70BA\u6587\u4EF6\u683C\u5F0F\uFF1Aexe,zip,rar \u7B49\u5247\u6703\u81EA\u52D5\u8F49\u70BA\u4E0B\u8F09\u9023\u7D50
    - \u82E5\u6709mailto\uFF1A\u524D\u7DB4\u7684\u9023\u7D50\u5F0F\u90F5\u4EF6\u9023\u7D50,\u6703\u81EA\u52D5\u6253\u958Bemail\u76F8\u95DC\u8EDF\u9AD4  
    - \u82E5\u6709tel\uFF1A\u524D\u7DB4\u7684\u9023\u7D50\u5F0F\u96FB\u8A71\u9023\u7D50,\u6703\u81EA\u52D5\u6253\u958B\u64A5\u865F\u76F8\u95DC\u8EDF\u9AD4

### \u5716\u7247\u6A19\u7C64
- \u4E00\u822C\u4F7F\u7528\uFF1A
  \`\`\`html
  <body>
    <img src="images/test.jpg" alt="\u5716\u7247\u7121\u6CD5\u986F\u793A\u6642\u6587\u5B57" width="20%">
  </body>
  \`\`\`
  - \u8AAA\u660E\uFF1A
    - img\uFF1Aimage 
    - src\uFF1Asource \u6307\u5F15\u5165\u5716\u7247\u7684\u4F86\u6E90(\u53EF\u653E\u5165\u7DB2\u5740(\u7D55\u5C0D\u8DEF\u5F91)\u8207\u76F8\u5C0D\u8DEF\u5F91(\u5982\u4E0A\u9762\u986F\u793A))
    - alt\uFF1A\u82E5\u7121\u6CD5\u52A0\u8F09\u5716\u7247\u5247\u6703\u986F\u793Aalt\u5167\u6587\u5B57\u4E26\u4F9B\u8996\u529B\u4E0D\u4FBF\u7684\u4EBA\u4E5F\u6703\u6717\u8B80\u8A72\u6587\u672C\u7528\u9014
    - width & height\uFF1A\u55AE\u4F4D\u7686\u70BA\u50CF\u7D20\u4F46\u4E0D\u9700\u586B\u5BEB\u55AE\u4F4D(\u82E5\u586B\u5165 % \u5247\u6703\u4EE5\u8A72\u756B\u9762\u6BD4\u4F8B\u986F\u793A)
      - width\uFF1A\u5716\u7247\u5BEC\u5EA6
      - height\uFF1A\u5716\u7247\u9AD8\u5EA6
      - \u82E5\u53EA\u586B\u5BEB\u4E00\u500B\u5247\u6309\u539F\u59CB\u6BD4\u4F8B\u7E2E\u653E
    - \u652F\u63F4\uFF1Abmp,gif,jpeg,png(\u91CD\u8981!\u652F\u6301\u900F\u660E\u8207\u534A\u900F\u660E),svg,webp\u5716\u7247\u683C\u5F0F
- \u9032\u968E\u4F7F\u7528\uFF1A[\u97FF\u61C9\u5F0F\u5716\u7247](https://developer.mozilla.org/zh-CN/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images)
  \`\`\`html
  <!--  
    \u6703\u5148\u67E5\u8A62 source \u662F\u5426\u6709\u76F8\u7B26\u5716\u7247\uFF0C\u518D\u4F7F\u7528\u9ED8\u8A8D\u5716\u7247
    \u82E5 \u5C4F\u5E55 <= 799px\uFF0C\u5247\u4F7F\u7528 elva-480w-close-portrait.jpg
    \u82E5 \u5C4F\u5E55 >= 800px\uFF0C\u5247\u4F7F\u7528 elva-800w.jpg
    \u9ED8\u8A8D\u4F7F\u7528\uFF1Aelva-800w.jpg
  -->
  <picture>
    <source media="(max-width: 799px)" srcset="elva-480w-close-portrait.jpg">
    <source media="(min-width: 800px)" srcset="elva-800w.jpg">
    <img src="elva-800w.jpg" alt="Chris standing up holding his daughter Elva">
  </picture>

  <!--   
    \u6703\u5148\u67E5\u8A62 srcset \u662F\u5426\u6709\u76F8\u7B26\u5716\u7247\uFF0C\u518D\u4F7F\u7528 src \u9ED8\u8A8D\u5716\u7247
    \u82E5 \u5C4F\u5E55 <= 320px\uFF0C\u5247\u56FA\u5B9A\u5BEC\u5EA6\u70BA 280px\uFF0C\u4E26\u9078\u64C7\u6700\u63A5\u8FD1\u7684 elva-fairy-320w.jpg
    \u82E5 \u5C4F\u5E55 <= 480px\uFF0C\u5247\u56FA\u5B9A\u5BEC\u5EA6\u70BA 440px\uFF0C\u4E26\u9078\u64C7\u6700\u63A5\u8FD1\u7684 elva-fairy-480w.jpg
    \u9ED8\u8A8D\u4F7F\u7528\uFF1Aelva-800w.jpg
  -->
  <img srcset="elva-fairy-320w.jpg 320w,
             elva-fairy-480w.jpg 480w,
             elva-fairy-800w.jpg 800w"
     sizes="(max-width: 320px) 280px,
            (max-width: 480px) 440px,
            800px"
     src="elva-fairy-800w.jpg" alt="Elva dressed as a fairy">

  <!--  
    \u7528\u5206\u8FA8\u7387\u52A0\u8F09\u4E0D\u540C\u5716\u7247\uFF0C\u4E26\u8A2D\u5B9Acss\uFF1Aimg { width: 320px; } 
  -->
  <img srcset="elva-fairy-320w.jpg,
             elva-fairy-480w.jpg 1.5x,
             elva-fairy-640w.jpg 2x"
     src="elva-fairy-640w.jpg" alt="Elva dressed as a fairy">
  \`\`\`
  - \u8AAA\u660E\uFF1A
    - \u82E5\u8981\u91DD\u5C0D\u5E73\u53F0\u5BEC\u5EA6\u986F\u793A\u5716\u7247\uFF0C\u5247\u7528 \`picture\`
    - \u82E5\u60F3\u63D0\u4F9B\u7A84\u5C4F\u66F4\u5C0F\u5716\u7247\u6216\u63D0\u4F9B\u9AD8\u4F4E\u5206\u8FA8\u7387\u7684\u5C4F\u5E55\u5716\u7247\uFF0C\u5247\u53EF\u7528 \`svg\` \u6216 \`srcset\` \u4EE5\u53CA \`sizes\` \u5C6C\u6027\u4F86\u5BE6\u73FE

## \u8868\u55AE
### \u8868\u55AE\u6A19\u7C64
- \u4F7F\u7528\u65B9\u5F0F\uFF1A
\`\`\`html
<body>
  <form action="" method="">
    <input type="text" value="123" placeholder="456" disabled>
    <p>
      <label>
          <input type="radio" name="sex" value="\u7537" checked>\u7537
      </label>
      <label>
          <input type="radio" name="sex" value="\u5973">\u5973
      </label>
    </p>
    <p>
      <input id="test1" type="radio" name="other" value="\u7537" checked><label for="test1">\u7537</label>
      <input id="test2" type="radio" name="other" value="\u5973"><label for="test2">\u5973</label>
    </p>
    <p>
      <label>
          <input type="checkbox" name="hobby" value="\u7C43\u7403" checked>\u7C43\u7403
      </label>
      <label>
          <input type="checkbox" name="hobby" value="\u7FBD\u7403">\u7FBD\u7403
      </label>
    </p>
    <p>
      \u8ACB\u8F38\u5165\u5BC6\u78BC\uFF1A
      <input type="password">
    </p>
    <p>
      \u8ACB\u9078\u64C7\u8A9E\u8A00\uFF1A
      <select name="" id="">
          <option value="c">c</option>
          <option value="c++">c++</option>
          <option value="java" selected>java</option>
      </select>
    </p>
    <p>
      <textarea cols="30" rows="10"></textarea>
    </p>
    <p>
      <button>\u6211\u662F\u4E00\u500B\u666E\u901A\u6309\u9215</button>
      <input type="button" value="\u666E\u901A\u6309\u9215">
      <input type="submit" value="\u63D0\u4EA4\u8868\u55AE">
      <input type="reset" value="\u91CD\u7F6E\u8868\u55AE">
    </p>
  </form>
</body>
\`\`\`
- \u8AAA\u660E\uFF1A
  - form\uFF1A\u8868\u55AE
    - action\uFF1A\u7D66\u5F8C\u53F0\u7A0B\u5E8F\u7684\u7DB2\u5740
    - method\uFF1A\u63D0\u4EA4\u7684\u65B9\u5F0F
  - input\uFF1A\u55AE\u884C\u6587\u672C\u6846
    - type\uFF1A\u985E\u578B
      - text\uFF1A\u6587\u672C
      - radio(\u55AE\u9078\u6846)\uFF1A\u82E5\u52A0\u4E0Achecked\u5247\u9ED8\u8A8D\u88AB\u9078\u4E2D,\u9078\u9805\u7684name\u8981\u76F8\u540C\u624D\u6703\u5F62\u6210\u55AE\u9078
      - checkbox\uFF1A\u8907\u9078\u6846(\u8A2D\u7F6E\u8DDF\u55AE\u9078\u6846\u4E00\u6A23)
      - password\uFF1A\u5BC6\u78BC\u6846,\u88E1\u9762\u6587\u5B57\u90FD\u6703\u8B8A\u6210\u53E6\u4E00\u7A2E\u96B1\u5BC6\u5F62\u5F0F
      - \u4E09\u7A2E\u6309\u9215\uFF1A
        - button\uFF1A\u666E\u901A\u6309\u9215
        - submit\uFF1A\u63D0\u4EA4\u6309\u9215
        - reset\uFF1A\u91CD\u7F6E\u6309\u9215
    - value\uFF1A\u5DF2\u586B\u7684\u9810\u8A2D\u503C(\u5411\u670D\u52D9\u5668\u63D0\u4EA4\u7684\u503C)
    - placefolder\uFF1A\u63D0\u793A\u6587\u672C
    - disabled\uFF1A\u7981\u6B62\u8207\u8A72\u5143\u4EF6\u4E92\u52D5
  - label\uFF1A\u6A19\u7C64
    - \u53EF\u7528\u5728\u55AE\u9078\u6846,\u9EDE\u64CA\u6587\u5B57\u6642\u53EF\u9023\u52D5\u89F8\u767Cratio(\u8A18\u5F97\u8981\u628Afor\u53BB\u6389(html4\u6642\u4EE3for\u88E1\u9762\u6703\u586B\u4E0Ainput\u7684id))
  - select\uFF1A\u4E0B\u62C9\u83DC\u55AE 
    - option\uFF1A\u5167\u90E8\u9078\u9805
      - value\uFF1A\u5411\u670D\u52D9\u5668\u63D0\u4EA4\u7684\u503C
      - selected\uFF1A\u9810\u8A2D\u5DF2\u9078
  - textarea\uFF1A\u591A\u884C\u6587\u672C\u6846
    - cols\uFF1A\u884C\u6578
    - rows\uFF1A\u5217\u6578

### HTML5\u8868\u55AE\u5143\u4EF6
- \u4F7F\u7528\u65B9\u5F0F\uFF1A
\`\`\`html
<body>
  <form action="">
    <p>
      \u984F\u8272\u9078\u64C7\uFF1A
      <input type="color">
    </p>
    <p>
      \u65E5\u671F\u9078\u64C7\uFF1A
      <input type="date">
    </p>
    <p>
      \u6642\u9593\u9078\u64C7\uFF1A
      <input type="time">
    </p>
    <p>
      \u96FB\u5B50\u90F5\u4EF6\uFF1A
      <input type="email">
    </p>
    <p>
      \u5FC5\u586B\uFF1A
      <input type="text" required>
    </p>
    <p>
      \u6578\u5B57\uFF1A
      <input type="number" min="10" max="20">
    </p>
    <p>
      \u62D6\u66F3\u689D\uFF1A
      <input type="range" min="10" max="20">
    </p>
    <p>
      \u641C\u5C0B\uFF1A
      <input type="search">
    </p>
    <p>
      \u7DB2\u5740\uFF1A
      <input type="url">
    </p>
    <p>
      <!-- \u7576\u7528\u6236\u8F38\u5165\u8207\u5099\u9078\u9805\u76F8\u540C\u6587\u5B57\u6642\u5C07\u6703\u81EA\u52D5\u611F\u61C9,id\u8981\u4E00\u6A23 -->
      \u5E02\u5340\uFF1A
      <input type="text" list="province-list">
      <datalist id="province-list">
        <option value="\u57FA\u9686">
        <option value="\u65B0\u5317">
        <option value="\u53F0\u5317">
      </datalist>
    </p>
    <p>
      <input type="submit" value="\u63D0\u4EA4\u8868\u55AE">
    </p>
  </form>
</body>
\`\`\`

## \u8868\u683C\u6A19\u7C64
- \u4F7F\u7528\u65B9\u5F0F\uFF1A
\`\`\`html
<body>
  <table border="1" width="600" height="600">
    <caption>\u6211\u662F\u6A19\u984C</caption>
    <tr>
        <th>\u4E00</th>
        <th>\u4E8C</th>
        <th>\u4E09</th>
        <th>\u56DB</th>
    </tr>
    <tr>
        <td>1</td>
        <td>2</td>
        <td colspan="2">3</td>
    </tr>
    <tr>
        <td>5</td>
        <td>6</td>
        <td>7</td>
        <td rowspan="2">8</td>
    </tr>
    <tr>
        <td>9</td>
        <td>10</td>
        <td>11</td>
    </tr>
  </table>
</body>
\`\`\`
- \u8AAA\u660E\uFF1A
  - table\uFF1A\u8868\u683C
    - thead\uFF1A\u5B9A\u7FA9\u8868\u982D
    - tbody\uFF1A\u5B9A\u7FA9\u6838\u5FC3\u5167\u5BB9
    - tfoot\uFF1A\u5B9A\u7FA9\u8868\u8173,\u901A\u5E38\u662F\u532F\u7E3D\u884C
    - tr\uFF1Atable row \u8868\u683C\u884C
    - td\uFF1Atable data \u8868\u683C\u6578\u64DA
      - colspan\uFF1A\u5217\u8DE8\u5EA6
      - rowspan\uFF1A\u884C\u8DE8\u5EA6
    - th\uFF1A\u8868\u984C\u5C0F\u683C(\u9ED8\u8A8D\u5C45\u4E2D\u986F\u793A+\u52A0\u7C97)
    - border\uFF1A\u5167\u8DDD\u908A\u6846
    - caption\uFF1A\u8868\u683C\u6A19\u984C(\u9ED8\u8A8D\u8DDF\u8868\u683C\u4E00\u6A23\u5BEC)
    - cellpadding\uFF1A\u5B9A\u7FA9\u8868\u683C\u55AE\u5143\u7684\u5167\u5BB9\u8207\u908A\u6846\u4E4B\u9593\u7684\u7A7A\u9593(\u5DF2\u5EE2\u68C4,\u4F7F\u7528css\u66FF\u4EE3)
    - cellspacing\uFF1A\u5B9A\u7FA9\u5169\u500B\u55AE\u5143\u683C\u4E4B\u9593\u7684\u7A7A\u9593\u5927\u5C0F(\u4F7F\u7528\u767E\u5206\u6BD4\u6216\u50CF\u7D20)(\u5DF2\u5EE2\u68C4,\u4F7F\u7528css\u66FF\u4EE3)
`;export{n as default};

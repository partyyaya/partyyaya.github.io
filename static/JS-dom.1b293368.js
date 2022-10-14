const n=`<span style="font-size: 32px; font-weight: 600;">JS DOM</span>

## \u7C21\u4ECB
- DOM ( Document Object Model\uFF0C\u6587\u6A94\u5C0D\u8C61\u6A21\u578B )
- \u662F JS \u64CD\u4F5C HTML \u6587\u6A94\u7684\u63A5\u53E3
- \u7279\u9EDE\u70BA\u5C07\u6587\u6A94\u8868\u793A\u70BA\u7BC0\u9EDE\u6A39

## onload \u4F7F\u7528
\`\`\`html
<head>
  <script>
    // \u901A\u5E38js\u6703\u5BEB\u5728html\u5F8C\u9762,\u82E5\u8981\u5BEB\u5728\u524D\u9762\u5247\u4F7F\u7528 window.onload
    // \u7D66 window \u5C0D\u8C61\u6DFB\u52A0 onload \u4E8B\u4EF6\u76E3\u807D\u3002
    // onload \u8868\u793A\u9801\u9762\u90FD\u52A0\u8F09\u5B8C\u7562\u3002
    window.onload = function () {
      // \u5F97\u5230\u76D2\u5B501(\u53D6\u5F97\u7B2C\u4E00\u500Bid\u5143\u7D20)
      var box1 = document.getElementById('box1');
      // \u5F97\u5230\u76D2\u5B502
      var box2 = document.getElementById('box2');

      console.log(box1);
      console.log(box2);
      // \u8F38\u51FAclass\u540D
      console.log(box1.className);
      // \u53EF\u4EE5\u66FF\u63DBclass\u540D
      box1.className = 'test1'
      console.log(box1.className);
    };
  <\/script>
</head>

<body>
  <div id="box1" class="box1">\u6211\u662F\u76D2\u5B501</div>
  <div id="box2">\u6211\u662F\u76D2\u5B502</div>
</body>
\`\`\`

## \u5E38\u7528\u8A2A\u554F\u7BC0\u9EDE\u65B9\u6CD5
| \u8A9E\u6CD5 | \u529F\u80FD | \u517C\u5BB9\u6027 |
| :-- | :-- | :-- |
| \`\`\`document.getElementById()\`\`\` | \u901A\u904E \`\`\`id\`\`\` \u5F97\u5230\u5143\u7D20 | IE6 |
| \`\`\`document.getElementsByTagName()\`\`\` | \u901A\u904E \`\`\`\u6A19\u7C64\u540D\`\`\` \u5F97\u5230\u5143\u7D20\u6578\u7D44 | IE6 |
| \`\`\`document.getElementsByClassName()\`\`\` | \u901A\u904E \`\`\`\u985E\u540D\`\`\` \u5F97\u5230\u5143\u7D20\u6578\u7D44 | IE9 |
| \`\`\`document.querySelector()\`\`\` | \u901A\u904E \`\`\`\u9078\u64C7\u5668\`\`\` \u5F97\u5230\u5143\u7D20 | IE9\uFF0CIE8\u90E8\u5206\u517C\u5BB9 |
| \`\`\`document.querySelectorAll()\`\`\` | \u901A\u904E \`\`\`\u9078\u64C7\u5668\`\`\` \u5F97\u5230\u5143\u7D20\u6578\u7D44 | IE9\uFF0CIE8\u90E8\u5206\u517C\u5BB9 |

- \u7BC4\u4F8B
  \`\`\`js
  // \u5148\u5F97\u5230box1(\u53D6\u5F97\u7B2C\u4E00\u500Bid\u5143\u7D20)
  var box1 = document.getElementById('box1');
  // \u5F97\u5230box1\u4E2D\u7684p\u6A19\u7C64\u7684\u6578\u7D44
  var ps_inbox1 = box1.getElementsByTagName('p');
  // \u82E5\u4E0D\u6307\u5B9A\u5247\u53D6\u5F97\u5168\u90E8p\u5143\u7D20
  var p = document.getElementsByTagName('p');

  // \u53EA\u80FD\u5F97\u5230\u9801\u9762\u4E0A\u7684\u4E00\u500B\u5143\u7D20(\u6709\u591A\u500B\u5247\u53D6\u7B2C\u4E00\u500B)
  // \u4F7F\u7528css\u8A9E\u6CD5
  var the_p = document.querySelector('#box p:nth-child(1)');

  // \u8FD4\u56DE\u4E00\u500B\u5143\u7D20\u6578\u7D44 NodeList
  var lis_inlist1 = document.querySelectorAll('#list1 li');
  \`\`\`

## nodeType \u5E38\u7528\u5C6C\u6027\u503C
| \u5C6C\u6027\u503C | \u7BC0\u9EDE\u985E\u578B |
| :-- | :-- |
| 1 | \u5143\u7D20\u7BC0\u9EDE(\u5982 \`\`\`<p>\`\`\`) |
| 3 | \u6587\u672C\u7BC0\u9EDE |
| 8 | \u8A3B\u91CB\u7BC0\u9EDE |
| 9 | document\u7BC0\u9EDE |
| 10 | DTD\u7BC0\u9EDE |

- \u4F7F\u7528\u65B9\u5F0F
  \`\`\`js
  var box = document.getElementById('box');
  var para = document.getElementById('para');

  // \u8A72\u7BC0\u9EDE\u5C6C\u6027\u503C
  console.log(box.nodeType);
  // \u7B2C\u4E00\u500B\u5B50\u7BC0\u9EDE\u5C6C\u6027\u503C
  console.log(box.firstChild.nodeType);
  \`\`\`

## \u7BC0\u9EDE\u5C6C\u6027
| \u95DC\u4FC2 | \u6240\u6709\u7BC0\u9EDE | \u53EA\u8003\u616E\u5143\u7D20\u7BC0\u9EDE |
| :-- | :-- | :-- |
| \u5B50\u7BC0\u9EDE | childNodes | children |
| \u7236\u7BC0\u9EDE | parentNode | \u4E00\u6A23 |
| \u7B2C\u4E00\u500B\u5B50\u7BC0\u9EDE | firstChild | firstElementChild |
| \u6700\u5F8C\u4E00\u500B\u5B50\u7BC0\u9EDE | lastChild | lastElementChild |
| \u524D\u9762\u4E00\u500B\u5144\u5F1F\u7BC0\u9EDE | previousSibling | previousElementSibling |
| \u5F8C\u9762\u4E00\u500B\u5144\u5F1F\u7BC0\u9EDE | nextSibling | nextElementSibling |

- \u4F7F\u7528\u65B9\u5F0F
  \`\`\`js
  var box = document.getElementById('box');
  var para = document.getElementById('para');

  // \u6240\u6709\u5B50\u7BC0\u9EDE
  console.log(box.childNodes);
  // \u6240\u6709\u7684\u5143\u7D20\u5B50\u7BC0\u9EDE\uFF08IE9\u958B\u59CB\u517C\u5BB9\uFF09
  console.log(box.children);
  // \u82E5\u88E1\u9762\u6A19\u7C64\u6709id\u5247\u53EF\u4EE5\u76F4\u63A5\u8ABF\u7528
  console.log(box.children.para);
  // \u7B2C\u4E00\u500B\u5B50\u7BC0\u9EDE
  console.log(box.firstChild);
  // \u7B2C\u4E00\u500B\u5143\u7D20\u5B50\u7BC0\u9EDE\uFF08IE9\u958B\u59CB\u517C\u5BB9\uFF09
  console.log(box.firstElementChild);
  // \u6700\u5F8C\u4E00\u500B\u5B50\u7BC0\u9EDE
  console.log(box.lastChild);
  // \u6700\u5F8C\u4E00\u500B\u5143\u7D20\u5B50\u7BC0\u9EDE\uFF08IE9\u958B\u59CB\u517C\u5BB9\uFF09
  console.log(box.lastElementChild);
  // \u7236\u7BC0\u9EDE
  console.log(para.parentNode);
  // \u524D\u4E00\u500B\u5144\u5F1F\u7BC0\u9EDE
  console.log(para.previousSibling);
  // \u524D\u4E00\u500B\u5143\u7D20\u5144\u5F1F\u7BC0\u9EDE\uFF08IE9\u958B\u59CB\u517C\u5BB9\uFF09
  console.log(para.previousElementSibling);
  // \u5F8C\u4E00\u500B\u5144\u5F1F\u7BC0\u9EDE
  console.log(para.nextSibling);
  // \u5F8C\u4E00\u4E2A\u5143\u7D20\u5144\u5F1F\u7BC0\u9EDE\uFF08IE9\u958B\u59CB\u517C\u5BB9\uFF09
  console.log(para.nextElementSibling);
  \`\`\`

## \u7BC0\u9EDE\u64CD\u4F5C
### \u5275\u5EFA\u8207\u79FB\u52D5\u7BC0\u9EDE
\`\`\`js
var oBox = document.getElementById('box');
var oPs = oBox.getElementsByTagName('p');
// \u5275\u5EFA\u7BC0\u9EDE
var oP = document.createElement('p');
// \u8A2D\u7F6E\u6587\u5B57
oP.innerText = '\u6211\u662F\u65B0\u6765\u7684';
// \u79FB\u52D5\u7BC0\u9EDE:\u9023\u540C\u5F8C\u4EE3\u4E00\u8D77\u79FB\u52D5
// appendChild:\u589E\u52A0\u81F3\u7236\u6A19\u7C64\u7684\u6700\u5F8C
oBox.appendChild(oP);
// insertBefore(a,b):\u5C07a\u5143\u7D20\u63D2\u5165\u5728b\u5143\u7D20\u4E4B\u524D
oBox.insertBefore(oP, oPs[0]);
\`\`\`

### \u514B\u9686\u7BC0\u9EDE
\`\`\`js
var box1 = document.getElementById('box1');
var box2 = document.getElementById('box2');
var theul = box1.getElementsByTagName('ul')[0];
// true\u4EE3\u8868\u5F8C\u4EE3\u7BC0\u9EDE\u90FD\u6703\u88AB\u514B\u9686,\u82E5\u4E0D\u8981\u6DF1\u514B\u9686\u5247\u5BEBcloneNode()
var new_ul = theul.cloneNode(true);
box2.appendChild(new_ul);
\`\`\`

### \u522A\u9664\u7BC0\u9EDE
\`\`\`js
var box = document.getElementById('box');
var the_first_p = box.getElementsByTagName('p')[0];
// \u5FC5\u9808\u7531\u7236\u89AA\u522A\u9664(\u6703\u9023\u540C\u88E1\u9762\u5F8C\u4EE3\u4E00\u8D77\u522A\u9664)
box.removeChild(the_first_p);
\`\`\`

### \u66F4\u6539\u7BC0\u9EDE\u5167\u5BB9
\`\`\`js
var oBox = document.getElementById('box');
var oBox2 = document.getElementById('box2');
/*
  innerHTML \u8207 innerText: 
  \u7372\u53D6\u5143\u7D20\u7684\u958B\u59CB\u548C\u7D50\u675F\u6A19\u7C64\u4E4B\u9593\u7684\u5167\u5BB9
  \u4E5F\u53EF\u4EE5\u901A\u904EinnerHTML\u91CD\u65B0\u8A2D\u7F6E\u5143\u7D20\u4E2D\u7684\u5167\u5BB9
*/
// \u4E0B\u9762\u5169\u500B\u53EA\u5DEE\u5728\u662F\u5426\u53D6\u5F97\u542Bhtml\u6A19\u7C64\u5167\u5BB9
console.log(oBox2.innerHTML)// 123 <p>456</p>789
console.log(oBox2.innerText)// 123 456 789
\`\`\`

### \u66F4\u6539\u7BC0\u9EDEcss\u6A23\u5F0F
\`\`\`js
// \u4F7F\u7528 style \u66F4\u6539\u7BC0\u9EDE\u5167\u5BB9\u6A23\u5F0F
var oBox = document.getElementById('box');
oBox.style.fontSize = '50px';
\`\`\`

### \u66F4\u6539\u975E\u7279\u6B8A\u7BC0\u9EDE\u5C6C\u6027
\`\`\`js
var box = document.getElementById('box');
box.setAttribute('data-n', 10);
var n = box.getAttribute('data-n');
console.log(n);// 10
\`\`\`

### \u66F4\u6539\u7279\u6B8A\u7BC0\u9EDE\u5C6C\u6027
\`\`\`html
<img src="image.jpg" id="pic">
<a href="https://www.google.com/" id="link">google</a>

<script>
  var oPic = document.getElementById('pic');
  // setAttribute \u4E5F\u53EF\u4EE5\u66FF\u63DB(\u53EA\u662F\u901A\u5E38\u662F\u7528\u5728\u975Ew3c\u6A19\u6E96\u5C6C\u6027)
  // oPic.setAttribute('src','image2.jpg');
  oPic.src = 'image2.jpg';

  var oLink = document.getElementById('link');
  oLink.href = 'https://github.com/';
  oLink.innerText = 'github';
<\/script>
\`\`\`

## \u7BC0\u9EDE\u81EA\u5B9A\u7FA9\u5C6C\u6027
- \u7C21\u4ECB
  \`\`\`txt
  HTML5 \u6DFB\u52A0 data-n \u65B9\u5F0F\u4F86\u81EA\u5B9A\u7FA9\u5C6C\u6027\uFF0Cn\u53EF\u4EE5\u63DB\u6210\u81EA\u5B9A\u7FA9\u5C6C\u6027\u540D
  \u4F7F\u7528\u9019\u6A23\u7684\u7D50\u69CB\u53EF\u9032\u884C\u6578\u64DA\u5B58\u653E\uFF0C\u4E26\u4E14\u65B9\u4FBF\u597D\u7BA1\u7406
  \`\`\`
- \u5B9A\u7FA9\u65B9\u5F0F
  - html \u6A19\u7C64
    \`\`\`html
    <h2 data-weather="rain"></h2>
    <!-- \u82E5\u6709\u591A\u91CD\u540D\u8A5E\u7D44\u6210\u5247\u7528 - \u5206\u958B -->
    <h2 data-number-two="2"></h2>
    \`\`\`
  - js
    \`\`\`js
    var h2 = document.querySeletor('h2');
    h2.dataset.weather = "rain";
    // \u82E5\u6709\u591A\u91CD\u540D\u8A5E\u5247\u7528\u99DD\u5CF0\u547D\u540D\u6CD5\u66F8\u5BEB
    h2.dataset.numberTwo = '2';
    \`\`\`
- \u8B80\u53D6\u81EA\u5B9A\u7FA9\u5C6C\u6027
  - js
    \`\`\`html
    <h2 data-weather="rain" data-number-two="2"></h2>
    <script>
      var h2 = document.querySeletor('h2');
      console.log(h2.dataset.weather);// rain
      console.log(h2.dataset.numberTwo);// 2
    <\/script>
    \`\`\`
  - css
    \`\`\`html
    <style>
      h2[data-number-two="2"]{
        color: green;
      }
    </style>
    <h2 data-weather="rain" data-number-two="2"></h2>
    \`\`\`

## \u4E8B\u4EF6\u76E3\u807D
### \u8868\u55AE
- \u5E38\u7528\u4E8B\u4EF6\u76E3\u807D

  | \u4E8B\u4EF6\u540D | \u4E8B\u4EF6\u63CF\u8FF0 |
  | :-- | :-- |
  | onchange | \u7576\u7528\u6236\u6539\u8B8A\u5167\u5BB9(onchange => onblur) |
  | onfocus | \u7576\u5143\u7D20\u7372\u5F97\u7126\u9EDE |
  | onblur | \u7576\u5143\u7D20\u5931\u53BB\u7126\u9EDE |
  | onsubmit | \u7576\u8868\u55AE\u88AB\u63D0\u4EA4 |
  | onreset | \u7576\u8868\u55AE\u88AB\u91CD\u7F6E |
  | oninput | \u7576\u7528\u6236\u4FEE\u6539\u5167\u5BB9 |

- \u7BC4\u4F8B
  \`\`\`html
  <form id="myform">
    <p>
      \u59D3\u540D\uFF1A
      <input type="text" name="nameField">
    </p>
    <p>
      \u5E74\u9F61\uFF1A
      <input type="text" name="ageField">
    </p>
    <p>
      <input type="submit">
      <input type="reset">
    </p>
  </form>

  <script>
    var myform = document.getElementById('myform');
    var nameField = myform.nameField;
    var ageField = myform.ageField;

    nameField.onchange = function () {
      console.log('\u5DF2\u7D93\u4FEE\u6539\u5B8C\u59D3\u540D');
    };

    nameField.oninput = function () {
      console.log('\u6B63\u5728\u4FEE\u6539\u59D3\u540D');
    };

    nameField.onfocus = function () {
      console.log('\u59D3\u540D\u6846\u5F97\u5230\u7126\u9EDE');
    }

    nameField.onblur = function () {
      console.log('\u59D3\u540D\u6846\u5931\u53BB\u7126\u9EDE');
    }

    myform.onsubmit = function () {
      alert('\u6B63\u5728\u5617\u8A66\u63D0\u4EA4\u8868\u55AE');
    }

    myform.onreset = function () {
      console.log('\u8868\u55AE\u88AB\u91CD\u7F6E');
    }
  <\/script>
  \`\`\`

### \u9801\u9762
- \u5E38\u7528\u4E8B\u4EF6\u76E3\u807D

  | \u4E8B\u4EF6\u540D | \u4E8B\u4EF6\u63CF\u8FF0 |
  | :-- | :-- |
  | onload | \u7576\u9801\u9762\u6216\u5716\u50CF\u5B8C\u6210\u52A0\u8F09 |
  | onunload | \u7576\u7528\u6236\u9000\u51FA\u9801\u9762 |

### \u9F20\u6A19
- \u5E38\u7528\u4E8B\u4EF6\u76E3\u807D

  | \u4E8B\u4EF6\u540D | \u4E8B\u4EF6\u63CF\u8FF0 |
  | :-- | :-- |
  | onclick | \u9F20\u6A19\`\`\`\u55AE\u64CA\`\`\`\u67D0\u500B\u5C0D\u8C61 |
  | ondblclick | \u9F20\u6A19\`\`\`\u96D9\u64CA\`\`\`\u67D0\u500B\u5C0D\u8C61 |
  | onmousedown | \u9F20\u6A19\u5728\u67D0\u500B\u5C0D\u8C61\u88AB\`\`\`\u6309\u4E0B\`\`\` |
  | onmouseup | \u9F20\u6A19\u5728\u67D0\u500B\u5C0D\u8C61\u88AB\`\`\`\u9B06\u958B\`\`\` |
  | onmousemove | \u9F20\u6A19\u5728\u67D0\u500B\u5C0D\u8C61\`\`\`\u79FB\u52D5\`\`\` |
  | onmouseenter | \u9F20\u6A19\`\`\`\u9032\u5165\`\`\`\u67D0\u500B\u5C0D\u8C61(\u76F8\u4F3C onmouseover ) |
  | onmouseleave | \u9F20\u6A19\`\`\`\u96E2\u958B\`\`\`\u67D0\u500B\u5C0D\u8C61(\u76F8\u4F3C onmouseout ) |

- \u53D6\u5F97\u9F20\u6A19\u4F4D\u7F6E

  | \u4E8B\u4EF6\u540D | \u4E8B\u4EF6\u63CF\u8FF0 |
  | :-- | :-- |
  | clientX | \u9F20\u6A19\u6307\u91DD\u5C0D\u65BC\`\`\`\u700F\u89BD\u5668\`\`\`\u7684\`\`\`\u6C34\u5E73\`\`\`\u5EA7\u6A19(\u542B\u6EFE\u52D5\u5167\u5BB9) |
  | clientY | \u9F20\u6A19\u6307\u91DD\u5C0D\u65BC\`\`\`\u700F\u89BD\u5668\`\`\`\u7684\`\`\`\u5782\u76F4\`\`\`\u5EA7\u6A19(\u542B\u6EFE\u52D5\u5167\u5BB9) |
  | pageX | \u9F20\u6A19\u6307\u91DD\u5C0D\u65BC\`\`\`\u6574\u5F35\u7DB2\u9801\`\`\`\u7684\`\`\`\u6C34\u5E73\`\`\`\u5EA7\u6A19(\u4E0D\u542B\u6EFE\u52D5\u5167\u5BB9) |
  | pageY | \u9F20\u6A19\u6307\u91DD\u5C0D\u65BC\`\`\`\u6574\u5F35\u7DB2\u9801\`\`\`\u7684\`\`\`\u5782\u76F4\`\`\`\u5EA7\u6A19(\u4E0D\u542B\u6EFE\u52D5\u5167\u5BB9) |
  | offsetX | \u9F20\u6A19\u6307\u91DD\u5C0D\u65BC\`\`\`\u4E8B\u4EF6\u5143\u7D20\`\`\`\u7684\`\`\`\u6C34\u5E73\`\`\`\u5EA7\u6A19(\u5230\u5340\u584A\u7684\u908A\u754C) |
  | offsetY | \u9F20\u6A19\u6307\u91DD\u5C0D\u65BC\`\`\`\u4E8B\u4EF6\u5143\u7D20\`\`\`\u7684\`\`\`\u5782\u76F4\`\`\`\u5EA7\u6A19(\u5230\u5340\u584A\u7684\u908A\u754C) |

- \u7BC4\u4F8B
  \`\`\`js
  // \u756B\u51FA\u4E00\u500B\u5340\u584A
  var oBox = document.getElementById('box');
  // \u986F\u793A\u5EA7\u6A19
  var oInfo = document.getElementById('info');
  // \u4EE5\u5340\u584A\u505A\u6A19\u6E96\uFF0C\u82E5\u8D85\u904E\u5340\u584A\u5916\u5247\u5EA7\u6A19\u4E0D\u66F4\u65B0
  oBox.onmousemove = function (e) {
    oInfo.innerHTML = 
      'offsetX/Y\uFF1A' + e.offsetX + ',' + e.offsetY + '<br>'
      + 'clientX/Y\uFF1A' + e.clientX + ',' + e.clientY + '<br>'
      + 'pageX/Y\uFF1A' + e.pageX + ',' + e.pageY;
  };
  \`\`\`

### \u9375\u76E4
- \u5E38\u7528\u4E8B\u4EF6\u76E3\u807D

  | \u4E8B\u4EF6\u540D | \u4E8B\u4EF6\u63CF\u8FF0 |
  | :-- | :-- |
  | onkeypress | \u7576\u9375\u76E4\u6309\u9375\u6309\u4E0B(\u7121\u6CD5\u8B58\u5225\u7CFB\u7D71\u6309\u9375\u5982\u7BAD\u982D\u9375) |
  | onkeydown | \u7576\u9375\u76E4\u6309\u9375\u6309\u4E0B(\u53EF\u8B58\u5225\u7CFB\u7D71\u9375\u4E26\u5148\u65BConkeypress\u89F8\u767C) |
  | onkeyup | \u7576\u9375\u76E4\u6309\u9375\u88AB\u9B06\u958B |

- charCode \u5B57\u7B26\u78BC
  - \`\`\`e.charCode\`\`\` \u5E38\u7528\u65BC \`\`\`onkeypress\`\`\` \u4E8B\u4EF6

  | \u5B57\u7B26 | \u5B57\u7B26\u78BC |
  | :-- | :-- |
  | \u6578\u5B57 0 ~ 9 | 48 ~ 57 |
  | \u5927\u5BEB\u5B57\u6BCD A-Z | 65 ~ 90 |
  | \u5C0F\u5BEB\u5B57\u6BCD a-z | 97 ~ 122 |

- keyCode \u9375\u78BC
  - \`\`\`e.keyCode\`\`\` \u5E38\u7528\u65BC \`\`\`onkeydown\`\`\`\u8207\`\`\`onkeyup\`\`\` \u4E8B\u4EF6

  | \u6309\u9375 | \u9375\u78BC |
  | :-- | :-- |
  | \u6578\u5B57 0 ~ 9 | 48 ~ 57 |
  | \u4E0D\u5340\u5206\u5927\u5C0F\u5BEB A-Z | 65 ~ 90 |
  | \u65B9\u5411\u9375(\u5DE6\u3001\u4E0A\u3001\u53F3\u3001\u4E0B) | 37\u300138\u300139\u300140 |
  | Enter | 13 |
  | \u7A7A\u767D\u9375 | 32 |

- \u7BC4\u4F8B
  \`\`\`html
  <input type="text" id="field1">
  <h1 id="info1"></h1>
  <input type="text" id="field2">
  <h1 id="info2"></h1>

  <script>
    var oField1 = document.getElementById('field1');
    var oInfo1 = document.getElementById('info1');
    var oField2 = document.getElementById('field2');
    var oInfo2 = document.getElementById('info2');

    // \u6CE8\u610Fonkeypress\u4E0D\u6703\u76E3\u6E2C\u7CFB\u7D71\u9375(\u5982shift}
    oField1.onkeypress = function (e) {
      oInfo1.innerText = '\u4F60\u8F93\u5165\u7684\u5B57\u7B26\u7684\u5B57\u7B26\u7801\u662F' + e.charCode;
    };

    oField2.onkeydown = function (e) {
      oInfo2.innerText = '\u4F60\u6309\u4E0B\u7684\u6309\u952E\u7684\u952E\u7801\u662F' + e.keyCode;
    };
  <\/script>
  \`\`\`

### on\u8207addEventListener
- \u5192\u6CE1 \u8207 \u6355\u7372\u4E8B\u4EF6
  - \u6355\u7372\u4E8B\u4EF6\u7531 \`\`\`\u5916\u9762\`\`\` \u5230 \`\`\`\u88E1\u9762\`\`\` \u4F9D\u5E8F\u89F8\u767C
  - \u5192\u6CE1\u4E8B\u4EF6\u7531 \`\`\`\u88E1\u9762\`\`\` \u5230 \`\`\`\u5916\u9762\`\`\` \u4F9D\u5E8F\u89F8\u767C
  - \u5148\u6355\u7372\u5F8C\u5192\u6CE1
    \`\`\`txt
    \u5047\u8A2D\u6709\u4E09\u500B\u5340\u57DF
    \u7531\u5916\u5230\u5167\u5206\u5225\u70BA box1\u3001box2\u3001box3
    \u82E5\u9EDE\u64CA box3 \u5340\u57DF\u5247\u9806\u5E8F\u70BA
    box1\u6355\u7372 > box2\u6355\u7372 > box3\u6355\u7372 > 
    box3\u5192\u6CE1 > box2\u5192\u6CE1 > box1\u5192\u6CE1
    \`\`\`
  - \u5192\u6CE1\u6BD4\u5982\u6C34\u6CE2\u7D0B\u5411\u5916\u50B3\u905E\uFF0C\u6355\u7372\u5247\u76F8\u53CD
- onxxx \u4E8B\u4EF6
  - \u70BA DOM0\u7D1A\u4E8B\u4EF6\u76E3\u807D
  - \u53EA\u6703\u76E3\u807D\u5230\u5192\u6CE1\u4E8B\u4EF6
  - \u5F8C\u9762\u6703\u53D6\u4EE3\u524D\u9762\u6709\u540C\u5143\u7D20\u540C\u6A23\u7684on\u4E8B\u4EF6
- addEventListener \u4E8B\u4EF6
  - \u70BA DOM2\u7D1A\u4E8B\u4EF6\u76E3\u807D
  - \u76F8\u540C\u4E8B\u4EF6\u4E0D\u6703\u88AB\u8986\u84CB
  - onxxx \u4E8B\u4EF6\u4E0D\u7528\u52A0\u4E0A on\uFF0C\u5982 \`\`\`onclick => click\`\`\`
  - \u7B2C\u4E8C\u500B\u53C3\u6578 
    true\uFF1A\u76E3\u807D\u6355\u7372\u968E\u6BB5
    false\uFF1A\u76E3\u807D\u5192\u6CE1\u968E\u6BB5
  - \u7BC4\u4F8B
    \`\`\`js
    var oBox2 = document.getElementById('box2');
    oBox2.addEventListener('click', function() {
      console.log('click');
    }, false);
    \`\`\`
- stopPropagation \u963B\u6B62\u4E8B\u4EF6\u50B3\u64AD
  \`\`\`js
  oBtn.onclick = function (e) {
    // \u963B\u6B62\u4E8B\u4EF6\u7E7C\u7E8C\u50B3\u64AD
    e.stopPropagation();
    console.log('\u6211\u662F\u6309\u9215');
  };

  oBox.addEventListener('click', function(e) {
    // \u963B\u6B62\u4E8B\u4EF6\u7E7C\u7E8C\u50B3\u64AD
    e.stopPropagation();
    console.log('\u6211\u662F\u76D2\u5B50');
  }, true);
  \`\`\`
- preventDefault \u963B\u6B62\u9810\u8A2D\u529F\u80FD\u89F8\u767C
  \`\`\`js
  var oField = document.getElementById('field');
  oField.onkeypress = function (e) {
    console.log(e.charCode);
    if (!(e.charCode >= 48 && e.charCode <= 57 || e.charCode >= 97 && e.charCode <= 122)) {
      /*
        \u82E5\u4F7F\u7528\u8005\u4E0D\u662F\u8F38\u5165
        \u6578\u5B57 0~9\uFF0C\u5B57\u7B26\u78BC 48 ~ 57
        \u5C0F\u5BEB\u5B57\u6BCD a~z\uFF0C\u5B57\u7B26\u78BC 97 ~ 122
        \u5247\u8F38\u5165\u6846\u4E0D\u6703\u51FA\u73FE\u8A72\u5B57\u78BC\u6587\u5B57
      */
      e.preventDefault();
    }
  };
  \`\`\`

### \u4E8B\u4EF6\u59D4\u8A17
- \u4F7F\u7528\u6642\u6A5F
  - \u9700\u8981\u6279\u91CF\u589E\u52A0\u76E3\u807D\u4E8B\u4EF6\uFF0C\u4F7F\u7528\u59D4\u8A17\u53EF\u6E1B\u5C11\u5167\u5B58\u958B\u92B7
  - \u7576\u6709\u52D5\u614B\u5143\u7D20\u4E0A\u5143\u7D20\u6A39\u6642\uFF0C\u6703\u81EA\u52D5\u5177\u6709\u4E8B\u4EF6\u76E3\u807D\u529F\u80FD
- target \u8207 currentTarget
  - target\uFF1A\u89F8\u767C\u4E8B\u4EF6\u6700\u65E9\u7684\u5143\u7D20\uFF0C\u5373"\u4E8B\u4EF6\u6E90\u5143\u7D20"
  - currentTarget\uFF1A\u4E8B\u4EF6\u8655\u7406\u7A0B\u5E8F\u9644\u52A0\u5230\u7684\u5143\u7D20(this)
- \u7BC4\u4F8B
  \`\`\`html
  <button id="btn">\u6309\u6211\u521B\u5EFA\u4E00\u4E2A\u65B0\u5217\u8868\u9879</button>
  <ul id="list">
    <li>\u5217\u8868\u9879</li>
    <li>\u5217\u8868\u9879</li>
    <li>\u5217\u8868\u9879</li>
  </ul>
  <script>
    var oList = document.getElementById('list');
    var oBtn = document.getElementById('btn');

    // onmouseenter \u6703\u4F7F\u8A72DOM\u7BC0\u9EDE\u89F8\u767C\u81EA\u5DF1\u7684\u4E8B\u4EF6\u4E26\u7121\u5192\u6CE1
    // \u82E5\u63DB\u6210 onmouseenter \u5C31\u6703\u4E00\u6B21\u5168\u90E8\u8B8A\u6210\u7D05\u8272
    oList.onmouseover = function (e) {
      // \u907F\u514D\u89F8\u767Cul\u4E00\u6B21\u8B8A\u7D05
      e.currentTarget.style.color = '';
      // e.target\u8868\u793A\u4F7F\u7528\u8005\u771F\u6B63\u9EDE\u64CA\u7684\u5143\u7D20
      e.target.style.color = 'red';
    };

    oBtn.onclick = function () {
      // \u5275\u5EFA\u65B0\u7684li\u5143\u7D20
      var oLi = document.createElement('li');
      // \u52A0\u5165\u5167\u5BB9
      oLi.innerText = '\u6211\u662F\u65B0\u6765\u7684';
      // \u4E0A\u6587\u6A94\u6A39
      oList.appendChild(oLi);
    };
  <\/script>
  \`\`\`

## \u7570\u6B65\u8A9E\u53E5
- setInterval \u8207 clearInterval
  - setInterval 
    - \u8A2D\u5B9A\u6BCF\u9694\u4E00\u6BB5\u6642\u9593\u57F7\u884C\u51FD\u6578(\u7121\u9650\u5FAA\u74B0)
    - \u53EF\u4EE5\u63A5\u6536\u591A\u500B\u53C3\u6578\u4E26\u6309\u9806\u5E8F\u50B3\u5165\u51FD\u6578
  - clearInterval
    - \u89E3\u9664\u5B9A\u6642\u5668
  - \u7BC4\u4F8B
    \`\`\`js
    var a = 0;
    // \u7121\u8A2D\u5B9A\u53C3\u6578
    setInterval(function () {
      console.log(++a);
    }, 1000);
    // \u8A2D\u5B9A\u53C3\u6578
    var timer = setInterval(function (b, c) {
      console.log(b);// 88
      console.log(c);// 66
    }, 1000, 88, 66);
    // \u89E3\u9664\u5B9A\u6642\u5668
    clearInterval(timer);
    \`\`\`
- setTimeout \u8207 clearTimeout
  - setTimeout
    - \u9694\u4E00\u6BB5\u6642\u9593\u5F8C\u57F7\u884C\u51FD\u6578(\u53EA\u57F7\u884C\u4E00\u6B21)
    - \u4E00\u6A23\u53EF\u4EE5\u63A5\u6536\u591A\u500B\u53C3\u6578\u4E26\u6309\u9806\u5E8F\u50B3\u5165\u51FD\u6578
  - clearTimeout
    - \u89E3\u9664\u5B9A\u6642\u5668
    - \u53EA\u6709\u672A\u57F7\u884C\u51FD\u6578\u6642\u624D\u6709\u4F5C\u7528
  - \u7BC4\u4F8B
    \`\`\`js
    var btn1 = document.getElementById('btn1');
    var btn2 = document.getElementById('btn2');
    var timer;

    btn1.onclick = function () {
      timer = setTimeout(function () {
        console.log('\u4F60\u597D');
      }, 2000);
    }

    btn2.onclick = function () {
      clearTimeout(timer);
    }
    \`\`\`
`;export{n as default};

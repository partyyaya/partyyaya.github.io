const e=`<span style="font-size: 32px; font-weight: 600;">JS websocket</span>

## \u7C21\u4ECB
- \u7C21\u55AE\u4F86\u8AAA\uFF0C\u904E\u53BB\u4F7F\u7528\u8F2A\u8A62\u7684\u65B9\u5F0F\u592A\u6D6A\u8CBB\u8CC7\u6E90\uFF0C\u6240\u4EE5\u5F8C\u9762\u4F7F\u7528 \`websocket\` \u4F86\u53D6\u4EE3\u8F2A\u8A62

## \u4F7F\u7528\u7BC4\u4F8B
- \u4EE5\u804A\u5929\u5BA4\u7684\u90E8\u5206\u4EE3\u78BC\u505A\u53C3\u8003
\`\`\`js
// \u804A\u5929\u5BA4\u5BB9\u5668
let chatBoxDiv = document.getElementById('chat-box')
// \u5224\u65B7\u700F\u89BD\u5668\u662F\u5426\u652F\u63F4 websocket
let CreateWebSocket = (() => {
  return (urlValue) => {
    if (window.WebSocket) return new WebSocket(urlValue);
    if (window.MozWebSocket) return new MozWebSocket(urlValue);
    return false;
  }
})()
// \u5275\u5EFA websocket\uFF0C\u6B63\u5F0F\u4E0A\u7DDA\u6703\u7528 wss\uFF0C\u5426\u5247\u6703\u88AB\u700F\u89BD\u5668\u5B89\u5168\u6027\u64CB\u4F4F
let webSocket = CreateWebSocket("ws://127.0.0.1:8699/chat")
// \u76E3\u807D\u9023\u7DDA\u958B\u555F
webSocket.onopen = (evt) => {
  chatBoxDiv.innerHTML += '<span class="chat-text center-text color-gray">\u5DF2\u9023\u7DDA\u81F3\u4F3A\u670D\u5668</span>'
}
// \u76E3\u807D\u4F3A\u670D\u5668\u662F\u5426\u767C\u9001\u8A0A\u606F
webSocket.onmessage = (evt) => {
  // evt.data \u70BA\u4F3A\u670D\u5668\u767C\u9001\u7684\u8CC7\u6599
  chatBoxDiv.innerHTML += \`<span class="chat-text right-text">\${evt.data}</span>\`
}
// \u76E3\u807D\u9023\u7DDA\u95DC\u9589
webSocket.onclose = (evt) => {
  chatBoxDiv.innerHTML += '<span class="chat-text center-text color-gray">\u5DF2\u95DC\u9589\u9023\u7DDA</span>'
}
// \u4E3B\u52D5\u767C\u9001\u8A0A\u606F\u7D66\u4F3A\u670D\u5668
function sendMsg() {
  let chatText = document.getElementById('chat-text').value
  chatBoxDiv.innerHTML += \`<span class="chat-text left-text">\${chatText}</span>\`
  webSocket.send(chatText)
}
// \u4E3B\u52D5\u95DC\u9589\u9023\u63A5
function leaveChat() {
  webSocket.close()
}
\`\`\`

## \u6CE8\u610F\u4E8B\u9805
- \u90E8\u5206\u700F\u89BD\u5668\u6703\u76E3\u807D \`websocket\` \u662F\u5426\u6301\u7E8C\u4F7F\u7528\uFF0C\u82E5\u7121\u52D5\u4F5C\u5247\u5169\u5206\u9418\u5F8C\u81EA\u52D5\u95DC\u9589\u9023\u63A5
- \u901A\u5E38\u6703\u4F7F\u7528 \`json\` \u683C\u5F0F\u50B3\u905E\u8CC7\u6599\uFF0C\u9810\u8A2D\u6700\u5927\u70BA \`8192bytes\` 
`;export{e as default};
